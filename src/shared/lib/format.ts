export function formatPrice(amount: number): string {
  if (amount === 0) {
    return "Бесплатно";
  }

  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPriceFrom(amount: number): string {
  if (amount === 0) {
    return "Бесплатно";
  }

  return `от ${formatPrice(amount)}`;
}

export function formatPhoneHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("8") && digits.length === 11) {
    return `tel:+7${digits.slice(1)}`;
  }

  if (digits.startsWith("7") && digits.length === 11) {
    return `tel:+${digits}`;
  }

  return `tel:${phone}`;
}
