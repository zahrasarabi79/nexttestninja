import React from "react";
import { notFound } from "next/navigation";

export const dynamicparams = true;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();
  return tickets.map((ticket) => ({ id: ticket.id }));
}

async function getTicket(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, { next: { revalidate: 60 } });
  if (!res.ok) {
    notFound();
  }
  return res.json();
}
async function TicketsDetails({ params }) {
  const { id } = params;
  const ticket = await getTicket(id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
      </div>
    </main>
  );
}

export default TicketsDetails;
