import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ adminOnly = false }) {
    return (
        <aside className="w-64 hidden lg:block bg-white h-screen p-4 border-r sticky top-16">
            <nav className="space-y-2">
                <NavLink to="/mla" className="block p-3 hover:bg-slate-50 rounded">MLA Overview</NavLink>
                <NavLink to="/mla/issues" className="block p-3 hover:bg-slate-50 rounded">Issues List</NavLink>
                <NavLink to="/mla/map" className="block p-3 hover:bg-slate-50 rounded">Map View</NavLink>
                <NavLink to="/mla/reports" className="block p-3 hover:bg-slate-50 rounded">Reports</NavLink>

                {adminOnly && (
                    <>
                        <div className="pt-3 mt-3 border-t text-sm text-slate-500">Admin</div>
                        <NavLink to="/admin" className="block p-3 hover:bg-slate-50 rounded">Analytics</NavLink>
                        <NavLink to="/admin/activity" className="block p-3 hover:bg-slate-50 rounded">Activity Log</NavLink>
                        <NavLink to="/admin/users" className="block p-3 hover:bg-slate-50 rounded">Users</NavLink>
                        <NavLink to="/admin/verify" className="block p-3 hover:bg-slate-50 rounded">Verify Issues</NavLink>
                    </>
                )}
            </nav>
        </aside>
    );
}
