import React from "react";

export function StatusBadge({ status }) {
    const color =
        status === "Resolved"
            ? "bg-green-100 text-green-700"
            : status === "Pending"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700";

    return <span className={`px-2 py-1 rounded text-xs ${color}`}>{status}</span>;
}

export function UrgencyBadge({ urgency }) {
    const color =
        urgency === "High"
            ? "bg-red-200 text-red-800"
            : urgency === "Medium"
                ? "bg-orange-200 text-orange-800"
                : "bg-gray-200 text-gray-700";

    return <span className={`px-2 py-1 rounded text-xs ${color}`}>{urgency}</span>;
}
