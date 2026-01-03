
import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen">
            <header className="bg-white shadow p-4">
                <div className="max-w-7xl mx-auto font-bold">JanReport</div>
            </header>

            <main className="max-w-7xl mx-auto p-6">
                <Outlet />
            </main>
        </div>
    );
}
