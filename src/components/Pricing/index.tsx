"use client";
import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    type: "App",
    title: "Starter",
    priceMonthly: 1900,
    priceYearly: 19000,
    features: ["Product brief", "Core screens", "Email support"],
  },
  {
    type: "Web",
    title: "Growth",
    priceMonthly: 4900,
    priceYearly: 49000,
    features: [
      "Responsive web app",
      "Integration support",
      "Commercial handoff",
      "Priority support",
    ],
  },
  {
    type: "App + Web",
    title: "Scale",
    priceMonthly: 7900,
    priceYearly: 79000,
    features: [
      "Mobile and web delivery",
      "AI workflow design",
      "Team training",
      "Premium support",
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="bg-white py-16 dark:bg-black">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Engagement Options
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Pick a starting point, then we shape the scope around your team.
          </p>

          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={() => setIsMonthly(true)}
              aria-pressed={isMonthly}
              className={`rounded-xs px-4 py-2 font-medium transition ${
                isMonthly
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              aria-pressed={!isMonthly}
              className={`rounded-xs px-4 py-2 font-medium transition ${
                !isMonthly
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="rounded-xs border border-gray-200 p-6 text-center shadow-sm dark:border-gray-700"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                {plan.title} Plan
              </h3>
              <p className="mb-4 text-sm text-gray-500">{plan.type} Version</p>
              <div className="text-primary mb-4 text-3xl font-bold">
                $
                {Number(
                  isMonthly ? plan.priceMonthly : plan.priceYearly,
                ).toLocaleString()}
                <span className="text-base font-medium text-gray-600 dark:text-gray-400">
                  /{isMonthly ? "mo" : "yr"}
                </span>
              </div>
              <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-300">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="text-primary" aria-hidden="true">
                      <svg
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6L5 10L13 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="bg-primary block w-full rounded-xs py-2 text-white transition hover:opacity-90"
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
