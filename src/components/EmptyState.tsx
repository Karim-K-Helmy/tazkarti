import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketSimple } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export default function EmptyState({ title, description, actionLabel, actionHref }: EmptyStateProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-10 text-center shadow-soft">
      <span className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-3xl border border-teal-300/20 bg-teal-400/10 text-2xl text-teal-200">
        <FontAwesomeIcon icon={faTicketSimple} />
      </span>
      <h3 className="text-2xl font-black text-white">{title}</h3>
      <p className="mx-auto mt-3 max-w-md leading-8 text-slate-300">{description}</p>
      {actionHref && actionLabel && (
        <div className="mt-6">
          <Button href={actionHref}>{actionLabel}</Button>
        </div>
      )}
    </div>
  );
}
