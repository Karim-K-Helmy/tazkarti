import EventsClient from "@/components/EventsClient";

type EventsPageProps = {
  searchParams?: {
    category?: string;
    search?: string;
  };
};

export default function EventsPage({ searchParams }: EventsPageProps) {
  return <EventsClient initialCategory={searchParams?.category || "الكل"} initialQuery={searchParams?.search || ""} />;
}
