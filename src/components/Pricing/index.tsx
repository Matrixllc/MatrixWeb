"use client";
import { useState } from "react";

const plans = [
    {
        type: "App",
        title: "Lite",
        priceMonthly: 19,
        priceYearly: 199,
        features: ["Essential components", "1 project usage", "Email support"],
    },
    {
        type: "Web",
        title: "Pro",
        priceMonthly: 49,
        priceYearly: 499,
        features: ["All components", "Unlimited projects", "Commercial use", "Priority support"],
    },
    {
        type: "App + Web",
        title: "Plus",
        priceMonthly: 79,
        priceYearly: 799,
        features: ["Full features", "Team access", "Lifetime updates", "Premium support"],
    },
];

const Pricing = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Simple and Transparent Pricing
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Choose a plan that fits your needs. No hidden fees.
                </p>

                <div className="mt-6 flex justify-center space-x-4">
                    <button
                        onClick={() => setIsMonthly(true)}
                        className={`px-4 py-2 rounded-full font-medium transition ${
                            isMonthly ? "bg-primary text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700"
                        }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setIsMonthly(false)}
                        className={`px-4 py-2 rounded-full font-medium transition ${
                            !isMonthly ? "bg-primary text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700"
                        }`}
                    >
                        Yearly
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
                {plans.map((plan) => (
                    <div
                        key={plan.title}
                        className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 text-center shadow-sm"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                            {plan.title} Plan
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">{plan.type} Version</p>
                        <div className="text-3xl font-bold text-primary mb-4">
                            ${isMonthly ? plan.priceMonthly : plan.priceYearly}
                            <span className="text-base text-gray-600 dark:text-gray-400 font-medium">
                /{isMonthly ? "mo" : "yr"}
              </span>
                        </div>
                        <ul className="text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                            {plan.features.map((feature, index) => (
                                <li key={index}>✓ {feature}</li>
                            ))}
                        </ul>
                        <button className="w-full py-2 bg-primary text-white rounded-lg hover:opacity-90 transition">
                            Choose Plan
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
