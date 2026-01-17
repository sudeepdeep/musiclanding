import React from "react";
import { getFlagFromAddress, getCountdown } from "../../utils/tourUtils";
import "./TourCard.css";

export default function TourCard({ event }: any) {
  return (
    <div className="tour-card-spotify">
      {/* Flag */}
      <div className="flag-rect">
        <img src={getFlagFromAddress(event.location)} alt={event.location} />
      </div>

      {/* Info */}
      <div className="tour-content">
        <span className="tour-date">{event.date}</span>
        <h3 className="tour-venue">{event.venue}</h3>
        <p className="tour-location">{event.location}</p>

        {event.details && <p className="tour-details">{event.details}</p>}
      </div>

      {/* Action */}
      <div className="tour-action">
        <span className="countdown">⏳ {getCountdown(event.date)}</span>

        <a
          href={event.ticketUrl}
          target="_blank"
          rel="noreferrer"
          className="ticket-btn"
        >
          Tickets
        </a>
      </div>
    </div>
  );
}
