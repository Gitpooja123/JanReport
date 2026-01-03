import React, { useState } from "react";

export default function ReportIssue() {
    const [note, setNote] = useState("");
    const [file, setFile] = useState(null);

    function submit(e) {
        e.preventDefault();
        alert("Report submitted (mock). Note: " + note);
        setNote("");
        setFile(null);
    }

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Report an Issue</h1>
            <form onSubmit={submit} className="bg-white p-4 rounded-xl shadow-sm space-y-4">
                <div>
                    <label className="text-sm">Upload photo</label>
                    <input type="file" onChange={(e) => setFile(e.target.files?.[0])} className="block mt-1" />
                </div>

                <div>
                    <label className="text-sm">Short note</label>
                    <input value={note} onChange={(e)=>setNote(e.target.value)} className="w-full mt-1 p-2 border rounded"/>
                </div>

                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
                </div>
            </form>
        </div>
    );
}
