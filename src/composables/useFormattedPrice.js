export function useFormattedPrice(price) {
  const formattedPrice = price.toLocaleString("zh-TW", {
    style: "currency",
    currency: "TWD",
    minimumFractionDigits: 0,
  });
  return formattedPrice;
}
