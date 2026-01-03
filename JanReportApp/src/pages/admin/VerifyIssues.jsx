import React from "react";
import mockIssues from "../../utils/mockIssues";

export default function VerifyIssues() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Verify Issues</h1>
            <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="mb-4 text-sm text-slate-600">Admin can verify or mark duplicates here (UI placeholder).</p>
                <ul className="space-y-3">
                    {mockIssues.map(i => (
                        <li key={i.id} className="flex items-center justify-between">
                            <div>
                                <div className="font-medium">{i.id} — {i.category}</div>
                                <div className="text-sm text-slate-500">{i.location}</div>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 rounded bg-green-600 text-white">Verify</button>
                                <button className="px-3 py-1 rounded bg-yellow-600 text-white">Mark Duplicate</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
