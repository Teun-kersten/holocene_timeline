export function formatHoloceneYear(year) {
  return `${year.toLocaleString("nl-NL")} HE`;
}

export function sortEventsByHoloceneYear(events) {
  return [...events].sort((a, b) => a.holoceneYear - b.holoceneYear);
}