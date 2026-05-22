import { events as defaultEvents } from "@/data/events";
import type { Booking, DemoAccount, EventItem, OperationLog, StoredUser, User } from "@/types";

const USER_KEY = "tazkarti_user";
const BOOKINGS_KEY = "tazkarti_bookings";
const USERS_KEY = "tazkarti_users";
const OPERATIONS_KEY = "tazkarti_operations";
const CUSTOM_EVENTS_KEY = "tazkarti_custom_events";

const isBrowser = () => typeof window !== "undefined";
const normalizeEmail = (email: string) => email.trim().toLowerCase();

const now = () => new Date().toISOString();

export const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    label: "حساب مستخدم",
    description: "لتجربة الملف الشخصي والحجوزات كزائر عادي.",
    email: "user@tazkarti.demo",
    password: "User@12345",
    role: "user"
  },
  {
    label: "حساب مسؤول",
    description: "لفتح لوحة التحكم وإدارة المستخدمين والعمليات.",
    email: "admin@tazkarti.demo",
    password: "Admin@12345",
    role: "admin"
  }
];

const demoUsers: StoredUser[] = [
  {
    id: "demo-user",
    name: "مستخدم تجريبي",
    email: DEMO_ACCOUNTS[0].email,
    password: DEMO_ACCOUNTS[0].password,
    role: "user",
    status: "active",
    createdAt: "2026-05-01T10:00:00.000Z",
    isDemo: true
  },
  {
    id: "demo-admin",
    name: "مسؤول النظام",
    email: DEMO_ACCOUNTS[1].email,
    password: DEMO_ACCOUNTS[1].password,
    role: "admin",
    status: "active",
    createdAt: "2026-05-01T10:05:00.000Z",
    isDemo: true
  }
];

const defaultOperations: OperationLog[] = [
  {
    id: "op-demo-1",
    title: "مراجعة حجوزات اليوم",
    description: "متابعة الحجوزات المؤكدة والتأكد من ظهور أكواد الحجز للمستخدمين.",
    status: "مكتملة",
    createdAt: "2026-05-01T12:00:00.000Z"
  },
  {
    id: "op-demo-2",
    title: "تحديث قائمة الفعاليات المميزة",
    description: "اختيار فعاليات بارزة للظهور في الصفحة الرئيسية هذا الأسبوع.",
    status: "قيد التنفيذ",
    createdAt: "2026-05-02T09:30:00.000Z"
  }
];

const readJson = <T>(key: string, fallback: T): T => {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const writeJson = <T>(key: string, value: T) => {
  if (!isBrowser()) return;
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getCurrentUser = (): User | null => {
  const user = readJson<User | null>(USER_KEY, null);
  if (!user) return null;
  return { ...user, role: user.role || "user" };
};

export const setCurrentUser = (user: User) => {
  writeJson(USER_KEY, { ...user, role: user.role || "user", isLoggedIn: true });
};

export const logoutUser = () => {
  if (!isBrowser()) return;
  window.localStorage.removeItem(USER_KEY);
};

export const getRegisteredUsers = (): StoredUser[] => {
  const saved = readJson<StoredUser[]>(USERS_KEY, []);
  const normalized = saved.map((user) => ({ ...user, email: normalizeEmail(user.email), role: user.role || "user", status: user.status || "active" }));
  const merged = [...normalized];

  demoUsers.forEach((demo) => {
    const index = merged.findIndex((user) => normalizeEmail(user.email) === demo.email);
    if (index === -1) {
      merged.push(demo);
    } else {
      merged[index] = {
        ...merged[index],
        id: merged[index].id || demo.id,
        name: merged[index].name || demo.name,
        password: demo.password,
        role: demo.role,
        isDemo: true
      };
    }
  });

  writeJson(USERS_KEY, merged);
  return merged;
};

export const saveRegisteredUsers = (users: StoredUser[]) => {
  writeJson(USERS_KEY, users.map((user) => ({ ...user, email: normalizeEmail(user.email) })));
};

export const registerStoredUser = ({ name, email, password, role = "user" }: Pick<StoredUser, "name" | "email" | "password"> & { role?: StoredUser["role"] }) => {
  const users = getRegisteredUsers();
  const normalized = normalizeEmail(email);
  if (users.some((user) => normalizeEmail(user.email) === normalized)) {
    return { ok: false as const, message: "هذا البريد مسجل بالفعل." };
  }

  const newUser: StoredUser = {
    id: `user-${Date.now()}`,
    name: name.trim(),
    email: normalized,
    password,
    role,
    status: "active",
    createdAt: now()
  };

  saveRegisteredUsers([newUser, ...users]);
  return { ok: true as const, user: newUser };
};

export const authenticateUser = (email: string, password: string) => {
  const normalized = normalizeEmail(email);
  const users = getRegisteredUsers();
  const found = users.find((user) => normalizeEmail(user.email) === normalized);

  if (found) {
    if (found.password !== password) return { ok: false as const, message: "كلمة السر غير صحيحة." };
    if (found.status === "blocked") return { ok: false as const, message: "هذا الحساب موقوف من لوحة التحكم." };
    const user: User = { name: found.name, email: found.email, role: found.role, isLoggedIn: true };
    setCurrentUser(user);
    return { ok: true as const, user };
  }

  const autoUser: StoredUser = {
    id: `user-${Date.now()}`,
    name: normalized.split("@")[0],
    email: normalized,
    password,
    role: "user",
    status: "active",
    createdAt: now()
  };
  saveRegisteredUsers([autoUser, ...users]);
  const user: User = { name: autoUser.name, email: autoUser.email, role: "user", isLoggedIn: true };
  setCurrentUser(user);
  return { ok: true as const, user };
};

export const updateStoredUserStatus = (userId: string, status: StoredUser["status"]) => {
  const users = getRegisteredUsers().map((user) => (user.id === userId ? { ...user, status } : user));
  saveRegisteredUsers(users);
  return users;
};

export const deleteStoredUser = (userId: string) => {
  const users = getRegisteredUsers().filter((user) => user.id !== userId || user.isDemo);
  saveRegisteredUsers(users);
  return users;
};


export const getCustomEvents = (): EventItem[] => readJson<EventItem[]>(CUSTOM_EVENTS_KEY, []);

export const saveCustomEvents = (customEvents: EventItem[]) => {
  writeJson(CUSTOM_EVENTS_KEY, customEvents);
};

export const getAllEvents = (): EventItem[] => {
  const customEvents = getCustomEvents();
  const ids = new Set<string>();
  return [...customEvents, ...defaultEvents].filter((event) => {
    if (ids.has(event.id)) return false;
    ids.add(event.id);
    return true;
  });
};

export const getStoredEventById = (id: string): EventItem | undefined => getAllEvents().find((event) => event.id === id);

export const addCustomEvent = (event: EventItem) => {
  const customEvents = getCustomEvents();
  const nextEvents = [event, ...customEvents.filter((item) => item.id !== event.id)];
  saveCustomEvents(nextEvents);
  return nextEvents;
};

export const deleteCustomEvent = (eventId: string) => {
  const customEvents = getCustomEvents().filter((event) => event.id !== eventId);
  saveCustomEvents(customEvents);
  return customEvents;
};

export const getBookings = (): Booking[] => readJson<Booking[]>(BOOKINGS_KEY, []);

export const getUserBookings = (email?: string): Booking[] => {
  if (!email) return [];
  const normalized = normalizeEmail(email);
  return getBookings().filter((booking) => !booking.userEmail || normalizeEmail(booking.userEmail) === normalized);
};

export const addBooking = (booking: Booking) => {
  const bookings = getBookings();
  writeJson(BOOKINGS_KEY, [booking, ...bookings]);
};

export const removeBooking = (bookingId: string) => {
  const bookings = getBookings().filter((booking) => booking.id !== bookingId);
  writeJson(BOOKINGS_KEY, bookings);
};

export const getOperations = (): OperationLog[] => {
  const operations = readJson<OperationLog[]>(OPERATIONS_KEY, []);
  if (operations.length) return operations;
  writeJson(OPERATIONS_KEY, defaultOperations);
  return defaultOperations;
};

export const addOperation = (operation: Omit<OperationLog, "id" | "createdAt">) => {
  const operations = getOperations();
  const newOperation: OperationLog = { ...operation, id: `op-${Date.now()}`, createdAt: now() };
  writeJson(OPERATIONS_KEY, [newOperation, ...operations]);
  return [newOperation, ...operations];
};

export const updateOperationStatus = (operationId: string, status: OperationLog["status"]) => {
  const operations = getOperations().map((operation) => (operation.id === operationId ? { ...operation, status } : operation));
  writeJson(OPERATIONS_KEY, operations);
  return operations;
};

export const createBookingCode = () => {
  const part = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `TZ-${part}`;
};
