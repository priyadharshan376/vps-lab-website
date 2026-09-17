import { siteConfig } from "../lib/site-config";
import { CameraIcon } from "./icons";

const placeholderLabels = ["Reception", "Sample collection", "Testing area"];

export default function Gallery() {
  const hasPhotos = siteConfig.galleryImages.length > 0;

  return (
    <section className="max-w-content mx-auto px-6 py-20">
      <h2 className="font-serif text-3xl text-primary-dark">Around the lab</h2>
      <p className="mt-3 text-ink/70 max-w-xl">
        A quick look at where your samples are collected and tested.
      </p>

      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        {hasPhotos
          ? siteConfig.galleryImages.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="w-full aspect-[4/3] object-cover rounded-lg border border-line"
              />
            ))
          : placeholderLabels.map((label) => (
              <div
                key={label}
                className="aspect-[4/3] rounded-lg border-2 border-dashed border-primary/30 bg-primary-light/30 flex flex-col items-center justify-center gap-2 text-primary-dark/60 p-4 text-center"
              >
                <CameraIcon width={26} height={26} />
                <p className="text-sm">{label}</p>
              </div>
            ))}
      </div>

      {!hasPhotos && (
        <p className="mt-5 text-sm text-ink/50">
          Add real photos: drop files into <code>public/images/</code> and list them in{" "}
          <code>galleryImages</code> inside <code>lib/site-config.js</code>.
        </p>
      )}
    </section>
  );
}
