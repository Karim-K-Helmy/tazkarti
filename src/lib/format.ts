export const formatPrice = (value: number) => new Intl.NumberFormat("ar-EG").format(value) + " جنيه";

export const formatCurrency = (value: number) => new Intl.NumberFormat("ar-EG").format(value) + " جنيه";

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("ar-EG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(date));
