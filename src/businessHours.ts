// Nigeria uses UTC+1 year round; UTC getters avoid the visitor's timezone.
export function isBusinessHours(now: Date): boolean {
  const wat = new Date(now.getTime() + 60 * 60 * 1000);
  return wat.getUTCDay() >= 1 && wat.getUTCDay() <= 5 &&
    wat.getUTCHours() >= 8 && wat.getUTCHours() < 17;
}
