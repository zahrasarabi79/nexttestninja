import Link from "next/link";
import React from "react";
async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, // use 0 to opt out of using cache
    },
  });
  

  return res.json();
}
async function TicketList() {
  const tickets = await getTickets();
  console.log(tickets.length);
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0.2)}...</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && <p>No tickets yet</p>}
    </>
  );
}

export default TicketList;
