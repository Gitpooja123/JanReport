import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import TopNav from "../components/TopNav";
import Sidebar from "../components/Sidebar";

export default function MLALayout() {
    return (
        <div className="min-h-screen bg-slate-50">
            <TopNav />
            <div className="max-w-7xl mx-auto flex">
                <Sidebar />
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
