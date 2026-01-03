import React from "react";

export default function UsersList() {
    const users = [
        { id: 1, name: "Priya", role: "Citizen" },
        { id: 2, name: "Ramesh", role: "Worker" }
    ];

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Users</h1>
            <div className="bg-white p-4 rounded-xl shadow-sm">
                {users.map(u => (
                    <div key={u.id} className="flex justify-between p-2 border-b">
                        <div>{u.name}</div>
                        <div className="text-sm text-slate-500">{u.role}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
