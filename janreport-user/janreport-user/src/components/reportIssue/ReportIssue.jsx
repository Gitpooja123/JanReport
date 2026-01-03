import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, MapPin, Camera } from "lucide-react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./ReportIssue.css";


import { useAuthHook } from "../../context/AuthContext";


const ISSUE_CATEGORIES = [
  "Infrastructure",
  "Water Supply",
  "Drainage / Sewage",
  "Public Health",
  "Street Lighting",
  "Sanitation",
  "Other",
];


const DEFAULT_CENTER = {
  lat: 17.385,
  lng: 78.4867,
};


const issueMarkerIcon = L.icon({
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
});

// Helper component to handle map clicks
const MapClickHandler = ({ onSelect }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onSelect({ lat, lng });
    },
  });
  return null;
};

const ReportIssue = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthHook();
  const authed = isAuthenticated();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const [coords, setCoords] = useState(DEFAULT_CENTER);

  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState({
    title: false,
    category: false,
    description: false,
    location: false,
  });

  // ---- basic validation rules ----
  const isTitleValid = title.trim().length >= 6;
  const isCategoryValid = category !== "";
  const isDescriptionValid = description.trim().length >= 15;
  const isLocationValid = location.trim().length >= 3;

  const formValid =
    isTitleValid && isCategoryValid && isDescriptionValid && isLocationValid;

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // ---- file upload & preview ----
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []).slice(0, 4); // max 4
    setFiles(selectedFiles);

    const readers = selectedFiles.map(
      (file) =>
        new Promise((resolve) => {
          const r = new FileReader();
          r.onload = () => resolve(r.result);
          r.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((results) => setPreviews(results));
  };

  // ---- map helpers ----
  const handleMapSelect = ({ lat, lng }) => {
    setCoords({ lat, lng });
    // we keep the text location as user typed / detected; no change here
  };

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Location services are not supported in this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ lat: latitude, lng: longitude });

        // Try to convert to a human-readable address using Nominatim
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();
          if (data?.display_name) {
            setLocation(data.display_name);
          } else {
            setLocation(
              `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
            );
          }
        } catch (err) {
          console.error("Reverse geocoding failed", err);
          setLocation(
            `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
          );
        }
      },
      (err) => {
        console.error(err);
        alert("Could not access your location. Please allow permission.");
      }
    );
  };

  // ---- submit handler ----
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValid) return;

    // If not logged in, send to login instead of submitting
    if (!authed) {
      navigate("/login", { state: { from: "/report-issue" } });
      return;
    }

    setSubmitting(true);

    try {
      // TODO: integrate with your backend (using FormData + JWT if required)
      // Example structure:
      //
      // const formData = new FormData();
      // formData.append("title", title.trim());
      // formData.append("category", category);
      // formData.append("description", description.trim());
      // formData.append("location", location.trim());
      // formData.append("latitude", coords.lat);
      // formData.append("longitude", coords.lng);
      // files.forEach((f) => formData.append("images", f));
      //
      // await fetch("http://localhost:8080/api/issues", { method: "POST", body: formData });

      console.log("ISSUE SUBMITTED (demo):", {
        title,
        category,
        description,
        location,
        coords,
        filesCount: files.length,
      });

      // reset form after successful submit (demo)
      setTitle("");
      setCategory("");
      setDescription("");
      setLocation("");
      setFiles([]);
      setPreviews([]);
      setTouched({
        title: false,
        category: false,
        description: false,
        location: false,
      });

      alert("Issue submitted (demo). Connect backend to save it.");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="py-4" style={{ minHeight: "calc(100vh - 64px)" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-2">
                    <AlertTriangle size={22} className="text-warning" />
                  </div>
                  <div>
                    <h4 className="mb-0">Report a Civic Issue</h4>
                    <small className="text-muted">
                      Provide clear details so your MLA / MP and officials can
                      act quickly.
                    </small>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {/* TITLE */}
                  <div className="mb-3">
                    <label className="form-label">
                      Issue Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        touched.title && !isTitleValid ? "is-invalid" : ""
                      }`}
                      placeholder="e.g., Broken bridge connecting two mandals"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      onBlur={() => handleBlur("title")}
                    />
                    {touched.title && !isTitleValid && (
                      <div className="invalid-feedback">
                        Title should be at least 6 characters.
                      </div>
                    )}
                  </div>

                  {/* CATEGORY */}
                  <div className="mb-3">
                    <label className="form-label">
                      Category <span className="text-danger">*</span>
                    </label>
                    <select
                      className={`form-select ${
                        touched.category && !isCategoryValid
                          ? "is-invalid"
                          : ""
                      }`}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      onBlur={() => handleBlur("category")}
                    >
                      <option value="">Select category</option>
                      {ISSUE_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    {touched.category && !isCategoryValid && (
                      <div className="invalid-feedback">
                        Please select an issue category.
                      </div>
                    )}
                  </div>

                  {/* DESCRIPTION */}
                  <div className="mb-3">
                    <label className="form-label">
                      Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control ${
                        touched.description && !isDescriptionValid
                          ? "is-invalid"
                          : ""
                      }`}
                      rows="5"
                      placeholder="Describe what is happening, how often, and how it affects people."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      onBlur={() => handleBlur("description")}
                    />
                    {touched.description && !isDescriptionValid && (
                      <div className="invalid-feedback">
                        Please provide at least 15 characters of description.
                      </div>
                    )}
                  </div>

                  {/* LOCATION + USE MY LOCATION */}
                  <div className="mb-3">
                    <label className="form-label">
                      Location / Landmark <span className="text-danger">*</span>
                    </label>

                    <div className="d-flex flex-column flex-md-row gap-2">
                      <div className="flex-fill">
                        <div className="input-group">
                          <span className="input-group-text">
                            <MapPin size={16} />
                          </span>
                          <input
                            type="text"
                            className={`form-control ${
                              touched.location && !isLocationValid
                                ? "is-invalid"
                                : ""
                            }`}
                            placeholder="e.g., Ward 8, Main Road, near Govt. Hospital gate"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            onBlur={() => handleBlur("location")}
                          />
                        </div>
                        {touched.location && !isLocationValid && (
                          <div className="invalid-feedback d-block">
                            Please provide a valid location or landmark.
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm align-self-start mt-1 mt-md-0"
                        onClick={handleUseMyLocation}
                      >
                        Use My Current Location
                      </button>
                    </div>
                  </div>

                  {/* MAP PICKER */}
                  <div className="mb-3">
                    <label className="form-label">
                      Pick Location on Map (optional)
                    </label>

                    <div className="issue-map-wrapper">
                      <MapContainer
                        key={`${coords.lat}-${coords.lng}`}
                        center={[coords.lat, coords.lng]}
                        zoom={13}
                        className="issue-map"
                        scrollWheelZoom={true}
                      >
                        <TileLayer
                          attribution='&copy; OpenStreetMap contributors &copy; CARTO'
                          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        />

                        <Marker
                          position={[coords.lat, coords.lng]}
                          icon={issueMarkerIcon}
                          draggable
                          eventHandlers={{
                            dragend: (e) => {
                              const { lat, lng } = e.target.getLatLng();
                              handleMapSelect({ lat, lng });
                            },
                          }}
                        />

                        <MapClickHandler onSelect={handleMapSelect} />
                      </MapContainer>

                      <div className="issue-map-badge">
                        <MapPin size={14} />
                        <span>
                          Drag the pin or tap on the map to refine the location
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* PHOTOS */}
                  <div className="mb-3">
                    <label className="form-label">Photos (optional)</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <Camera size={16} />
                      </span>
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                      />
                    </div>
                    {previews.length > 0 && (
                      <div className="d-flex flex-wrap gap-2 mt-2">
                        {previews.map((src, idx) => (
                          <div
                            key={idx}
                            className="border rounded"
                            style={{
                              width: 70,
                              height: 70,
                              overflow: "hidden",
                              background: "#f4f4f4",
                            }}
                          >
                            <img
                              src={src}
                              alt={`preview-${idx}`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    <small className="text-muted d-block mt-1">
                      You can attach up to 4 images (damage, surroundings, etc.).
                    </small>
                  </div>

                  {/* FOOTER */}
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <small className="text-muted">
                      Fields marked <span className="text-danger">*</span> are
                      required.
                    </small>
                    <button
                      type="submit"
                      className="btn btn-primary px-4"
                      disabled={!formValid || submitting}
                    >
                      {submitting ? "Submitting..." : "Submit Issue"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReportIssue;
