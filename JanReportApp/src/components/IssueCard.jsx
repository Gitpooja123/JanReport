import React from "react";
import { StatusBadge, UrgencyBadge } from "./StatusBadge";

export default function IssueCard({ issue, onView }) {
    return (
        <div className="bg-white p-4 rounded shadow-sm flex gap-4 items-center">
            <img src={issue.photo} alt="" className="w-24 h-16 object-cover rounded" />
            <div className="flex-1">
                <div className="font-semibold">{issue.category}</div>
                <div className="text-sm text-slate-500">{issue.location}</div>
            </div>
            <div className="text-right space-y-1">
                <div><StatusBadge status={issue.status} /></div>
                <div><UrgencyBadge urgency={issue.urgency} /></div>
                <button onClick={() => onView(issue)} className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">View</button>
            </div>
        </div>
    );
}
