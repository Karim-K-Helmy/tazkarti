import EventDetailsClient from "@/components/event-details/EventDetailsClient";

type EventDetailsPageProps = { params: { id: string } };

export default function EventDetailsPage({ params }: EventDetailsPageProps) {
  return <EventDetailsClient eventId={params.id} />;
}
