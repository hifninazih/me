import React, { useState, useEffect } from "react";

export default function Custom404() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        // Redirect to the main page after 3 seconds
        window.location.href = "/me";
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="mb-8 text-4xl font-semibold text-gray-800">
          404 - Page Not Found
        </h2>

        <p className="mb-4 text-lg text-gray-600">
          Redirecting to the main page in countdown{" "}
          <span className="font-bold">{countdown}</span> seconds...
        </p>
      </div>
    </div>
  );
}
