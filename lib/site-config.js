// Edit this file to update lab details across the whole site.

export const siteConfig = {
  labName: "VPS Lab",
  tagline: "Trusted diagnostics for Watrap and nearby villages",
  location: "Watrap, Tamil Nadu",
  phoneDisplay: "80724 65380",
  phoneDigitsOnly: "8072465380", // used to build tel: and wa.me links
  countryCode: "91",
  address: "VPS Lab, Watrap, Tamil Nadu",
  hours: "Mon–Sat, 7:00 AM – 8:00 PM",

  // PHOTOS: leave these empty to show tasteful placeholder frames.
  // Once you have real photos, drop the files into public/images/ and fill
  // these in — e.g. heroImage: "/images/lab-front.jpg" — no code changes
  // needed anywhere else, every section reads from here.
  heroImage: null, // e.g. "/images/lab-front.jpg"
  galleryImages: [
    // { src: "/images/reception.jpg", alt: "VPS Lab reception" },
    // { src: "/images/sample-collection.jpg", alt: "Sample collection area" },
    // { src: "/images/equipment.jpg", alt: "Testing equipment" },
  ],
};

// tel: link (click-to-call)
export const telLink = `tel:+${siteConfig.countryCode}${siteConfig.phoneDigitsOnly}`;

// wa.me link (WhatsApp), optionally with a prefilled message
export function whatsappLink(message) {
  const base = `https://wa.me/${siteConfig.countryCode}${siteConfig.phoneDigitsOnly}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
