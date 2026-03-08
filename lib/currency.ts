export const BGN_TO_EUR = 1.95583;

export function bgnToEur(price: number) {
  return price / BGN_TO_EUR;
}

function formatNumber(value: number) {
  return value.toFixed(2);
}

export function formatDualPrice(priceText: string) {
  const trimmed = priceText.trim();

  if (/безплатно/i.test(trimmed)) {
    return "Безплатно";
  }

  const prefix = trimmed.startsWith("от ")
    ? "от "
    : trimmed.startsWith("+")
      ? "+"
      : "";

  const numbers = trimmed.match(/\d+(?:[.,]\d+)?/g);

  if (!numbers || numbers.length === 0) {
    return trimmed;
  }

  const eurValues = numbers.map((raw) => {
    const bgn = Number(raw.replace(",", "."));
    return formatNumber(bgnToEur(bgn));
  });

  const bgnPart = trimmed;

  let eurPart = "";
  if (numbers.length === 1) {
    eurPart = `${prefix}${eurValues[0]} €`;
  } else if (numbers.length === 2 && trimmed.includes("–")) {
    eurPart = `${eurValues[0]}–${eurValues[1]} €`;
  } else {
    eurPart = `${eurValues.join(" / ")} €`;
  }

  return `${bgnPart} / ${eurPart}`;
}
