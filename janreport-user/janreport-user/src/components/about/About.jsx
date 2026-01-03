import React from "react";
import { CheckCircle2, Users, MapPin, ShieldCheck } from "lucide-react";

const About = () => (
  <main className="page-wrapper">
    <section className="container section py-5">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <h1 className="display-6 fw-bold">About JanReport</h1>
          <p className="lead text-muted">
            JanReport is a civic reporting platform that connects citizens to the correct officials and representatives with verified reports and transparent tracking.
          </p>
          <p className="text-muted">We focus on clear evidence, location-aware reporting and an auditable workflow so citizens see action — and authorities can prioritise work.</p>
        </div>

        <div className="col-lg-5">
          <div className="card landing-card p-4">
            <h6>Quick facts</h6>
            <ul className="ps-3">
              <li className="text-muted"><CheckCircle2 size={14} className="me-2" /> Evidence-backed submissions</li>
              <li className="text-muted"><MapPin size={14} className="me-2" /> Location-first reports</li>
              <li className="text-muted"><ShieldCheck size={14} className="me-2" /> Privacy-conscious by design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="container section py-4">
      <h3 className="section-title">Mission</h3>
      <p className="text-muted">To make local governance responsive, accountable and measurable by empowering citizens to report and track civic issues.</p>
    </section>
  </main>
);

export default About;
