import React from "react";
import KPI from "../../components/KPI";
import mockIssues from "../../utils/mockIssues";

export default function Overview() {
    const total = mockIssues.length;
    const pending = mockIssues.filter(i => i.status === "Pending").length;
    const progress = mockIssues.filter(i => i.status === "In Progress").length;
    const resolved = mockIssues.filter(i => i.status === "Resolved").length;

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Dashboard Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <KPI title="Total Issues" value={total} />
                <KPI title="Pending" value={pending} />
                <KPI title="In Progress" value={progress} />
                <KPI title="Resolved" value={resolved} />
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-lg">Insights</h3>
                <p className="text-sm text-slate-500 mt-2">Monthly reports and graphs will appear here.</p>
            </div>
        </div>
    );
}

