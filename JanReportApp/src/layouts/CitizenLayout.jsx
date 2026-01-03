import React from "react";
import TopNav from "../components/TopNav";
import { Outlet } from "react-router-dom";

export default function CitizenLayout() {
    return (
        <div className="min-h-screen bg-slate-50">
            <TopNav />
            <div className="max-w-4xl mx-auto p-6">
                <Outlet />
            </div>
        </div>
    );
}
