import { testCategories } from "../lib/tests";
import * as Icons from "./icons";

export default function Services() {
  return (
    <section id="services" className="max-w-content mx-auto px-6 py-20">
      <h2 className="font-serif text-3xl text-primary-dark">Tests we offer</h2>
      <p className="mt-3 text-ink/70 max-w-xl">
        This covers most of what patients come in for. Don't see what you need —
        call or WhatsApp us and we'll let you know if we can arrange it.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 gap-x-12 gap-y-10">
        {testCategories.map((group) => {
          const Icon = Icons[group.icon] || Icons.DropletIcon;
          return (
            <div key={group.category} className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-full bg-primary-light flex items-center justify-center text-primary-dark">
                <Icon width={20} height={20} />
              </div>
              <div className="border-l-2 border-primary/30 pl-5 -ml-1">
                <h3 className="font-serif text-lg text-primary-dark">{group.category}</h3>
                <ul className="mt-3 space-y-2 text-ink/80">
                  {group.tests.map((test) => (
                    <li key={test}>{test}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
