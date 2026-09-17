import Link from "next/link";
import { testCategories } from "../lib/tests";
import * as Icons from "./icons";

const featured = testCategories.slice(0, 4);

export default function ServicesTeaser() {
  return (
    <section className="max-w-content mx-auto px-6 py-20">
      <h2 className="font-serif text-3xl text-primary-dark">What we test for</h2>
      <p className="mt-3 text-ink/70 max-w-xl">
        From routine blood work to specialised pathology — here's a taste of what
        we cover.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featured.map((group) => {
          const Icon = Icons[group.icon] || Icons.DropletIcon;
          return (
            <div key={group.category} className="text-center sm:text-left">
              <div className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center text-primary-dark mx-auto sm:mx-0">
                <Icon width={20} height={20} />
              </div>
              <h3 className="mt-3 font-serif text-base text-primary-dark">{group.category}</h3>
            </div>
          );
        })}
      </div>

      <Link
        href="/services"
        className="mt-10 inline-block text-primary-dark font-medium hover:underline"
      >
        See the full test list
      </Link>
    </section>
  );
}
