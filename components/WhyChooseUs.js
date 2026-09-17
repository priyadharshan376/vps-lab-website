import { ClockIcon, HomeVisitIcon, ReportIcon } from "./icons";

const points = [
  {
    icon: ClockIcon,
    title: "Same-day reports",
    text: "Most routine tests are ready the same day, so you're not left waiting.",
    delay: "0s",
  },
  {
    icon: HomeVisitIcon,
    title: "Home sample collection",
    text: "Can't come in? We'll send someone to collect your sample instead.",
    delay: "0.6s",
  },
  {
    icon: ReportIcon,
    title: "Clear, accurate reports",
    text: "Results explained in plain language, not just numbers on a page.",
    delay: "1.2s",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-content mx-auto px-6 py-20">
      <div className="grid sm:grid-cols-3 gap-8">
        {points.map((point) => {
          const Icon = point.icon;
          return (
            <div key={point.title} className="text-center">
              <div
                className="float-3d mx-auto w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center text-primary-dark shadow-sm"
                style={{ animationDelay: point.delay }}
              >
                <Icon width={26} height={26} />
              </div>
              <h3 className="mt-5 font-serif text-lg text-primary-dark">{point.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{point.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
