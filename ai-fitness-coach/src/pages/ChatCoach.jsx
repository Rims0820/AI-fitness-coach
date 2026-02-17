import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function ChatCoach() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    // Placeholder AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I am your AI fitness coach! 💪" },
      ]);
    }, 500);

    setInput("");
  };

  return (
    <>
      <Navbar />

      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Chat with Your AI Coach</h2>

        <div className="border rounded-xl p-4 h-[60vh] overflow-y-auto bg-white shadow">
          {messages.map((m, index) => (
            <div
              key={index}
              className={`my-2 p-2 rounded-lg ${
                m.role === "user"
                  ? "bg-blue-500 text-white ml-auto w-fit"
                  : "bg-gray-200 w-fit"
              }`}
            >
              {m.content}
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <input
            className="flex-grow border rounded-lg px-3 py-2"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
