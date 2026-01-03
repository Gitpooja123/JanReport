import React from "react";
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="min-h-screen bg-slate-50">
            <TopNav />
            <div className="max-w-7xl mx-auto flex">
                <Sidebar adminOnly />
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
