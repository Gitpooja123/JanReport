import React, { useState } from "react";

export default function ChatWithMLA() {
    const [messages, setMessages] = useState([
        { from: "mla", text: "Welcome — ask your query." }
    ]);
    const [text, setText] = useState("");

    function send(e) {
        e.preventDefault();
        if (!text) return;
        setMessages(prev => [...prev, { from: "user", text }]);
        setText("");
        // mock reply
        setTimeout(()=> setMessages(prev => [...prev, { from: "mla", text: "We will check and revert." }]), 1000);
    }

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Chat with MLA Office</h1>
            <div className="bg-white p-4 rounded-xl shadow-sm space-y-3">
                <div className="max-h-64 overflow-y-auto space-y-2">
                    {messages.map((m, i) => (
                        <div key={i} className={`p-2 rounded ${m.from === "mla" ? "bg-slate-100 self-start" : "bg-blue-600 text-white self-end"}`}>
                            {m.text}
                        </div>
                    ))}
                </div>

                <form onSubmit={send} className="flex gap-2">
                    <input value={text} onChange={e => setText(e.target.value)} className="flex-1 p-2 border rounded" />
                    <button className="px-3 py-1 bg-blue-600 text-white rounded">Send</button>
                </form>
            </div>
        </div>
    );
}
