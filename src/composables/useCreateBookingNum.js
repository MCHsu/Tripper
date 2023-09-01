export function useCreateBookingNum() {
  const timestamp = Date.now();
  const randomSuffix = Math.floor(Math.random() * 10000);
  const orderNumber = timestamp.toString() + randomSuffix.toString();
  return orderNumber;
}
