import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Layouts */
import MainLayout from "../layouts/MainLayout.jsx";
import MLALayout from "../layouts/MLALayout.jsx";
import AdminLayout from "../layouts/AdminLayout.jsx";
import CitizenLayout from "../layouts/CitizenLayout.jsx";

/* Pages - MLA */
import Overview from "../pages/mla_dashboard/Overview.jsx";
import IssuesList from "../pages/mla_dashboard/IssuesList.jsx";
import IssueDetails from "../pages/mla_dashboard/IssueDetails.jsx";
import MapView from "../pages/mla_dashboard/MapView.jsx";
import Reports from "../pages/mla_dashboard/Reports.jsx";

/* Pages - Admin */
import ActivityLog from "../pages/admin/ActivityLog.jsx";
import Analytics from "../pages/admin/Analytics.jsx";
import UsersList from "../pages/admin/UsersList.jsx";
import VerifyIssues from "../pages/admin/VerifyIssues.jsx";

/* Pages - Citizen */
import ReportIssue from "../pages/citizen/ReportIssue.jsx";
import TrackIssue from "../pages/citizen/TrackIssue.jsx";
import ChatWithMLA from "../pages/citizen/ChatWithMLA.jsx";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>

                {/* Main wrapper layout (if you want global header etc) */}
                <Route path="/" element={<MainLayout />}>
                    {/* Default landing can route to a simple home or citizen report */}
                    <Route index element={<ReportIssue />} />
                </Route>

                {/* MLA - nested under /mla */}
                <Route path="/mla" element={<MLALayout />}>
                    <Route index element={<Overview />} />
                    <Route path="issues" element={<IssuesList />} />
                    <Route path="issue/:id" element={<IssueDetails />} />
                    <Route path="map" element={<MapView />} />
                    <Route path="reports" element={<Reports />} />
                </Route>

                {/* Admin - nested under /admin */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Analytics />} />
                    <Route path="activity" element={<ActivityLog />} />
                    <Route path="users" element={<UsersList />} />
                    <Route path="verify" element={<VerifyIssues />} />
                </Route>

                {/* Citizen screens */}
                <Route path="/citizen" element={<CitizenLayout />}>
                    <Route index element={<ReportIssue />} />
                    <Route path="track" element={<TrackIssue />} />
                    <Route path="chat" element={<ChatWithMLA />} />
                </Route>

                {/* fallback */}
                <Route path="*" element={<div className="p-6 text-center">404 - Not Found</div>} />
            </Routes>
        </Router>
    );
}
