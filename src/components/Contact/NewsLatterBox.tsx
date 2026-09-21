const nextSteps = [
  "We review your request and clarify the goal.",
  "You receive a practical scope and timeline.",
  "We start with the smallest useful milestone.",
];

const NewsLatterBox = () => {
  return (
    <aside className="shadow-three dark:bg-gray-dark relative z-10 rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl leading-tight font-bold text-black dark:text-white">
        What Happens Next
      </h3>
      <p className="border-body-color/25 text-body-color mb-8 border-b pb-8 text-base leading-relaxed dark:border-white/25">
        Share the context once. We will turn it into a clear next step instead
        of a vague sales call.
      </p>

      <ul className="mb-8 space-y-4">
        {nextSteps.map((step) => (
          <li key={step} className="flex gap-3">
            <span className="bg-primary mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white">
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 5L4.2 8L11 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-body-color dark:text-body-color-dark text-base">
              {step}
            </span>
          </li>
        ))}
      </ul>

      <div className="bg-gray-light dark:bg-dark rounded-xs p-5">
        <p className="mb-1 text-sm font-semibold text-black dark:text-white">
          Typical first reply
        </p>
        <p className="text-body-color dark:text-body-color-dark text-sm">
          Within one business day, with suggested scope, risks, and next action.
        </p>
      </div>
    </aside>
  );
};

export default NewsLatterBox;
