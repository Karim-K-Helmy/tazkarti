import type { EventItem } from "@/types";

export const categories = [
  "حفلات",
  "مؤتمرات",
  "سينما",
  "مسرح",
  "مباريات",
  "ورش عمل",
  "معارض"
] as const;

export const cities = ["القاهرة", "الإسكندرية", "الجيزة", "العاصمة الإدارية", "شرم الشيخ", "المنصورة"] as const;

export const events: EventItem[] = [
  {
    id: "concert-cairo-nights",
    title: "ليالي القاهرة الموسيقية",
    category: "حفلات",
    city: "القاهرة",
    venue: "مركز المنارة",
    date: "2026-06-12",
    time: "08:30 مساءً",
    price: 650,
    availableTickets: 120,
    image: "/assets/images/concert-1.png",
    description:
      "أمسية موسيقية كبيرة تجمع بين الإضاءة الحديثة والعروض الحية في تجربة مبهجة لعشاق الموسيقى العربية والعالمية.",
    featured: true
  },
  {
    id: "tech-summit-2026",
    title: "قمة الابتكار التقني 2026",
    category: "مؤتمرات",
    city: "العاصمة الإدارية",
    venue: "قاعة المؤتمرات الدولية",
    date: "2026-06-20",
    time: "10:00 صباحًا",
    price: 900,
    availableTickets: 75,
    image: "/assets/images/conference-1.png",
    description:
      "مؤتمر متخصص يجمع رواد التكنولوجيا والشركات الناشئة لمناقشة مستقبل الذكاء الاصطناعي والتحول الرقمي وريادة الأعمال.",
    featured: true
  },
  {
    id: "cinema-premiere",
    title: "العرض الأول لفيلم الطريق",
    category: "سينما",
    city: "الجيزة",
    venue: "سينما مول العرب",
    date: "2026-05-29",
    time: "07:00 مساءً",
    price: 180,
    availableTickets: 48,
    image: "/assets/images/cinema-1.png",
    description:
      "عرض خاص لفيلم درامي جديد بحضور فريق العمل، مع تجربة مشاهدة ممتازة وقاعة مجهزة بأحدث أنظمة الصوت والصورة.",
    featured: false
  },
  {
    id: "alex-theater-night",
    title: "ليلة المسرح الكوميدي",
    category: "مسرح",
    city: "الإسكندرية",
    venue: "مسرح سيد درويش",
    date: "2026-06-05",
    time: "09:00 مساءً",
    price: 320,
    availableTickets: 92,
    image: "/assets/images/theater-1.png",
    description:
      "عرض مسرحي كوميدي عائلي يقدم مواقف خفيفة وشخصيات قريبة من الواقع في أجواء فنية دافئة.",
    featured: true
  },
  {
    id: "derby-match",
    title: "مباراة النجوم الكبرى",
    category: "مباريات",
    city: "القاهرة",
    venue: "استاد القاهرة الدولي",
    date: "2026-07-03",
    time: "08:00 مساءً",
    price: 250,
    availableTickets: 350,
    image: "/assets/images/stadium-1.png",
    description:
      "مباراة جماهيرية حماسية تجمع أبرز اللاعبين في أمسية رياضية مليئة بالتشجيع والطاقة داخل الاستاد.",
    featured: true
  },
  {
    id: "design-workshop",
    title: "ورشة تصميم تجربة المستخدم",
    category: "ورش عمل",
    city: "المنصورة",
    venue: "مساحة إبداع",
    date: "2026-05-25",
    time: "01:00 ظهرًا",
    price: 420,
    availableTickets: 26,
    image: "/assets/images/workshop-1.jpg",
    description:
      "ورشة عملية لتعلم أساسيات تصميم تجربة المستخدم وبناء نماذج أولية قابلة للاختبار باستخدام منهجيات حديثة.",
    featured: false
  },
  {
    id: "art-expo",
    title: "معرض الفن المعاصر",
    category: "معارض",
    city: "القاهرة",
    venue: "جاليري الزمالك",
    date: "2026-06-01",
    time: "05:00 مساءً",
    price: 120,
    availableTickets: 180,
    image: "/assets/images/exhibition-1.jpg",
    description:
      "معرض فني يضم أعمالًا معاصرة لفنانين شباب، مع مساحة تفاعلية للنقاش وتجربة الأعمال عن قرب.",
    featured: false
  },
  {
    id: "jazz-by-the-sea",
    title: "سهرات على البحر",
    category: "حفلات",
    city: "الإسكندرية",
    venue: "سان ستيفانو بلازا",
    date: "2026-06-18",
    time: "08:00 مساءً",
    price: 520,
    availableTickets: 110,
    image: "/assets/images/concert-2.png",
    description:
      "سهرة موسيقية راقية على أجواء البحر، تجمع موسيقيين محترفين وقائمة مختارة من المقطوعات الهادئة والحيوية.",
    featured: true
  },
  {
    id: "startup-forum",
    title: "منتدى الشركات الناشئة",
    category: "مؤتمرات",
    city: "القاهرة",
    venue: "ذا جريك كامبس",
    date: "2026-07-15",
    time: "11:00 صباحًا",
    price: 700,
    availableTickets: 65,
    image: "/assets/images/conference-2.jpg",
    description:
      "لقاء عملي للمؤسسين والمستثمرين حول بناء الشركات، تمويل المشاريع، وتوسيع المنتجات في الأسواق الإقليمية.",
    featured: false
  },
  {
    id: "family-movie-day",
    title: "يوم أفلام العائلة",
    category: "سينما",
    city: "شرم الشيخ",
    venue: "سينما خليج نعمة",
    date: "2026-05-30",
    time: "04:00 مساءً",
    price: 150,
    availableTickets: 80,
    image: "/assets/images/cinema-2.jpg",
    description:
      "برنامج أفلام مناسب للعائلة والأطفال مع تنظيم مريح وتجربة مشاهدة ممتعة في عطلة نهاية الأسبوع.",
    featured: false
  },
  {
    id: "classic-play",
    title: "المسرحية الكلاسيكية الجديدة",
    category: "مسرح",
    city: "الجيزة",
    venue: "مسرح الهناجر",
    date: "2026-06-10",
    time: "07:30 مساءً",
    price: 280,
    availableTickets: 54,
    image: "/assets/images/theater-2.png",
    description:
      "إعادة تقديم لنص مسرحي كلاسيكي بروح بصرية حديثة وأداء تمثيلي مكثف يجذب محبي المسرح الجاد.",
    featured: false
  },
  {
    id: "maker-faire",
    title: "معرض الصنّاع والابتكار",
    category: "معارض",
    city: "العاصمة الإدارية",
    venue: "مركز مصر للمعارض",
    date: "2026-08-08",
    time: "12:00 ظهرًا",
    price: 220,
    availableTickets: 210,
    image: "/assets/images/exhibition-2.jpg",
    description:
      "مساحة كبيرة للمشاريع الإبداعية، الروبوتات، الطباعة ثلاثية الأبعاد، وحلول التعليم التقني للشباب والعائلات.",
    featured: true
  }
];


export const eventImageOptions = [
  { label: "حفلة موسيقية", value: "/assets/images/concert-1.png" },
  { label: "حفل فني", value: "/assets/images/concert-2.png" },
  { label: "مؤتمر", value: "/assets/images/conference-1.png" },
  { label: "قاعة مؤتمر", value: "/assets/images/conference-2.jpg" },
  { label: "سينما", value: "/assets/images/cinema-1.png" },
  { label: "عرض عائلي", value: "/assets/images/cinema-2.jpg" },
  { label: "مسرح", value: "/assets/images/theater-1.png" },
  { label: "مسرحية", value: "/assets/images/theater-2.png" },
  { label: "مباراة", value: "/assets/images/stadium-1.png" },
  { label: "ورشة", value: "/assets/images/workshop-1.jpg" },
  { label: "معرض", value: "/assets/images/exhibition-1.jpg" },
  { label: "فعالية مفتوحة", value: "/assets/images/exhibition-2.jpg" }
] as const;

export const getEventById = (id: string) => events.find((event) => event.id === id);
export const featuredEvents = events.filter((event) => event.featured);
export const nearbyEvents = events.slice(2, 8);
