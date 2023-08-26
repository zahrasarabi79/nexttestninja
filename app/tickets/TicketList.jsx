import React from "react";
async function getTicket() {
  const res = await fetch("http://localhost:4000/tickets");
  return res.json();
}
async function TicketList() {
  const tickets = await getTicket();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0.2)}...</p>
          <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
        </div>
      ))}
      {tickets.length === 0 && <p>No tickets yet</p>}
    </>
  );
}

export default TicketList;
