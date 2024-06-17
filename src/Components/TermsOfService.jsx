import React from "react";
import { Link } from "react-router-dom";

function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-lg font-bold">Terms of Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Terms of Service</h1>
            <Link to="/Admin_dashboard" className="text-blue-500 hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
          </div>
          <p className="mb-6">
            Welcome to the East Coast Railway Terms of Service page. These terms
            govern your use of our services. Please read them carefully.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using our services, you agree to be bound by these
            Terms of Service and our Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Use of Services</h2>
          <p className="mb-4">
            Our services are intended for personal and non-commercial use unless
            otherwise specified. You agree not to use our services for any
            unlawful purpose or in a way that disrupts our operations.
          </p>

          <h2 className="text-2xl font-semibold mb-2">User Responsibilities</h2>
          <p className="mb-4">
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Modifications</h2>
          <p className="mb-4">
            We may update these Terms of Service from time to time. Any changes
            will be effective immediately upon posting the updated terms on this
            page.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend access to our services
            without prior notice if these terms are violated.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Terms of Service or how we handle
            your personal information, please contact us at{" "}
            <a
              href="mailto:support@eastcoastrailway.gov.in"
              className="text-blue-500 hover:underline"
            >
              support@eastcoastrailway.gov.in
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
