import React from "react";
import MapPlaceholder from "../../components/MapPlaceholder";
import Chip from "../../components/Chip";

export default function MapView() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Map View</h1>

            <div className="flex gap-3 mb-3">
                <Chip>Pending</Chip>
                <Chip>Resolved</Chip>
                <Chip>In Progress</Chip>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm">
                <MapPlaceholder />
            </div>
        </div>
    );
}
