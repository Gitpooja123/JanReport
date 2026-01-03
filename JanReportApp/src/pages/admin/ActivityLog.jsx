import React from "react";

export default function ActivityLog() {
    const rows = [
        { id: 1, action: "Issue JR-1001 reported", time: "2025-11-04 09:12" },
        { id: 2, action: "Issue JR-1002 assigned", time: "2025-11-03 14:20" }
    ];

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Activity Log</h1>
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <ul className="space-y-2">
                    {rows.map(r => <li key={r.id} className="text-sm">{r.time} — {r.action}</li>)}
                </ul>
            </div>
        </div>
    );
}
