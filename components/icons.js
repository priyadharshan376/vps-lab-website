// Simple line icons, one per test category. Original SVG paths — no external
// assets or fonts needed. Add more here if you add categories in lib/tests.js.

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function DropletIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c3.5 4 6 7.3 6 10.5a6 6 0 1 1-12 0C6 10.3 8.5 7 12 3Z" />
    </svg>
  );
}

export function SugarIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h16l-1.5 11a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 8Z" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
    </svg>
  );
}

export function FlaskIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.5V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

export function HormoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="8" r="3.2" />
      <circle cx="16" cy="16" r="3.2" />
      <path d="M10.3 10.3 13.7 13.7" />
    </svg>
  );
}

export function FeverIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2v4" />
      <path d="M4.9 5 7 7.2" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M17 7.2 19.1 5" />
      <circle cx="12" cy="15" r="5" />
    </svg>
  );
}

export function SampleIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 2h6" />
      <path d="M10 2v6l-5 10a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-10V2" />
      <path d="M8.5 13.5h7" />
    </svg>
  );
}

export function PulseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12h4l2 6 4-14 2 8h6" />
    </svg>
  );
}

export function CameraIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function HomeVisitIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function ReportIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
      <path d="M9 8h3" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}
