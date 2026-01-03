import React, { useState } from "react";
import mockIssues from "../../utils/mockIssues";

export default function TrackIssue() {
    const [id, setId] = useState("");
    const found = mockIssues.find(m => m.id === id);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Track Your Issue</h1>

            <div className="bg-white p-4 rounded-xl shadow-sm">
                <input value={id} onChange={(e)=>setId(e.target.value)} placeholder="Enter issue ID e.g. JR-1001" className="w-full p-2 border rounded" />
                <div className="mt-4">
                    {found ? (
                        <div>
                            <div className="font-semibold">{found.category} — {found.location}</div>
                            <div className="text-sm text-slate-600">Status: {found.status}</div>
                        </div>
                    ) : id ? <div className="text-sm text-rose-600">No issue found</div> : <div className="text-sm text-slate-500">Enter an ID to search</div>}
                </div>
            </div>
        </div>
    );
}
