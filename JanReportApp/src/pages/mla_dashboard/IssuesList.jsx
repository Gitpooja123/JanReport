import React from "react";
import mockIssues from "../../utils/mockIssues";
import { StatusBadge, UrgencyBadge } from "../../components/StatusBadge";
import { useNavigate } from "react-router-dom";

export default function IssuesList() {
    const navigate = useNavigate();

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">All Reported Issues</h1>

            <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 text-left">ID</th>
                        <th className="p-3 text-left">Category</th>
                        <th className="p-3 text-left">Location</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Urgency</th>
                        <th className="p-3 text-left">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mockIssues.map(issue => (
                        <tr key={issue.id} className="hover:bg-slate-50 cursor-pointer" onClick={() => navigate(`/mla/issue/${issue.id}`)}>
                            <td className="p-3">{issue.id}</td>
                            <td className="p-3">{issue.category}</td>
                            <td className="p-3">{issue.location}</td>
                            <td className="p-3"><StatusBadge status={issue.status} /></td>
                            <td className="p-3"><UrgencyBadge urgency={issue.urgency} /></td>
                            <td className="p-3">{issue.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
