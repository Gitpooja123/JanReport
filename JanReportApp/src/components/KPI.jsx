import React from "react";

export default function KPI({ title, value }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-sm text-slate-500">{title}</div>
            <div className="text-2xl font-bold">{value}</div>
        </div>
    );
}
