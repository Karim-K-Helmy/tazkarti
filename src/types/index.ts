export type EventCategory =
  | "حفلات"
  | "مؤتمرات"
  | "سينما"
  | "مسرح"
  | "مباريات"
  | "ورش عمل"
  | "معارض";

export type EventItem = {
  id: string;
  title: string;
  category: EventCategory;
  city: string;
  venue: string;
  date: string;
  time: string;
  price: number;
  availableTickets: number;
  image: string;
  description: string;
  featured: boolean;
};

export type UserRole = "user" | "admin";
export type UserStatus = "active" | "blocked";

export type User = {
  name: string;
  email: string;
  role: UserRole;
  isLoggedIn: boolean;
};

export type StoredUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  isDemo?: boolean;
};

export type DemoAccount = {
  label: string;
  description: string;
  email: string;
  password: string;
  role: UserRole;
};

export type Booking = {
  id: string;
  eventId: string;
  eventTitle: string;
  eventImage: string;
  eventDate: string;
  eventVenue: string;
  tickets: number;
  totalPrice: number;
  code: string;
  status: "Confirmed";
  createdAt: string;
  userEmail?: string;
  userName?: string;
};

export type OperationLog = {
  id: string;
  title: string;
  description: string;
  status: "قيد التنفيذ" | "مكتملة" | "مؤجلة";
  createdAt: string;
};
