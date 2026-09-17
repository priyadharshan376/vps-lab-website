import { siteConfig } from "../lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-content mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between gap-4 text-sm text-ink/60">
        <p>© {new Date().getFullYear()} {siteConfig.labName}, {siteConfig.location}.</p>
        <p>{siteConfig.hours}</p>
      </div>
    </footer>
  );
}
