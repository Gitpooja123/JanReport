import React from "react";

export default function TopNav() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">JanReport</h1>
                    <p className="text-xs text-slate-500 -mt-1">Civic Issue Reporting Platform</p>
                </div>
                <div className="text-sm text-slate-500">Welcome, Admin</div>
            </div>
        </header>
    );
}
