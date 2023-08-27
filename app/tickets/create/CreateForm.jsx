"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newTicket = {
      title,
      body,
      priority,
      user_email: "user@example",
    };
    const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTicket),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("/tickets");
    } else {
      alert(json.message);
    }
  };
  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
      <label>
        <span>Title:</span>
        <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span>Body:</span>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
      </label>
      <label>
        <span>Priority:</span>
        <select required value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary" disabled={isloading}>
        {isloading && <span>Adding ...</span>}
        {!isloading && <span>Add Ticket</span>}
      </button>
    </form>
  );
}
