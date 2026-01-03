import React from "react";
import { useParams } from "react-router-dom";
import mockIssues from "../../utils/mockIssues";
import { StatusBadge, UrgencyBadge } from "../../components/StatusBadge";
import MapPlaceholder from "../../components/MapPlaceholder";

export default function IssueDetails() {
    const { id } = useParams();
    const issue = mockIssues.find(i => i.id === id);

    if (!issue) return <div className="p-6">Issue not found</div>;

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Issue Details</h1>

            <div className="bg-white p-4 rounded-xl shadow-sm">
                <img src={issue.photo} className="w-full h-64 object-cover rounded-lg mb-4" />
                <p><strong>Category:</strong> {issue.category}</p>
                <p><strong>Location:</strong> {issue.location}</p>
                <p><strong>Date:</strong> {issue.date}</p>
                <p><strong>Status:</strong> <StatusBadge status={issue.status} /></p>
                <p><strong>Urgency:</strong> <UrgencyBadge urgency={issue.urgency} /></p>

                <div className="mt-6">
                    <h3 className="font-semibold mb-2">Location Map</h3>
                    <MapPlaceholder />
                </div>
            </div>
        </div>
    );
}
