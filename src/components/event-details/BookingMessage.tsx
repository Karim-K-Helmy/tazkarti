type BookingMessageProps = { message: string };

export default function BookingMessage({ message }: BookingMessageProps) {
  if (!message) return null;
  const isSuccess = message.includes("نجاح");
  return <p className={`mt-4 rounded-2xl border p-3 text-sm ${isSuccess ? "border-emerald-300/20 bg-emerald-400/10 text-emerald-200" : "border-rose-300/20 bg-rose-400/10 text-rose-200"}`}>{message}</p>;
}
