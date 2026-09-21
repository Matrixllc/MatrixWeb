import SectionTitle from "../Common/SectionTitle";

const steps = [
  {
    title: "Discovery",
    description:
      "Map business goals, user needs, technical constraints, and the first release scope.",
  },
  {
    title: "Prototype",
    description:
      "Validate core flows with clickable screens, API contracts, and integration notes.",
  },
  {
    title: "Build",
    description:
      "Ship mobile, web, AI, and backend work in reviewable milestones with quality checks.",
  },
  {
    title: "Support",
    description:
      "Monitor launch health, tune workflows, and keep improving based on real usage.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="A Clear Path From Idea To Launch"
          paragraph="A focused delivery flow keeps the project visible, testable, and ready for the next business decision."
          center
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="shadow-two dark:bg-gray-dark dark:shadow-three relative rounded-xs bg-white p-7"
            >
              <div className="bg-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xs text-lg font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                {step.title}
              </h3>
              <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
