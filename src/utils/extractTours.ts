export function extractTours(htmlString: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const rows = doc.querySelectorAll(".seated-event-row");

  const events = Array.from(rows).map((row) => {
    const date =
      row.querySelector(".seated-event-date-cell")?.textContent?.trim() || "";

    const venue =
      row.querySelector(".seated-event-venue-name")?.textContent?.trim() || "";

    const location =
      row.querySelector(".seated-event-venue-location")?.textContent?.trim() ||
      "";

    const details =
      row.querySelector(".seated-event-details-cell")?.textContent?.trim() ||
      "";

    const ticketUrl =
      row.querySelector(".seated-event-link")?.getAttribute("href") || "";

    return {
      date,
      venue,
      location,
      details,
      ticketUrl,
    };
  });

  return events;
}
