"use client";

export function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p
          className="text-xs"
          style={{
            color: "var(--dim)",
            fontFamily: "var(--font-mono-display), monospace",
          }}
        >
          &copy; {new Date().getFullYear()} André Figueira
        </p>
        <a
          href="#"
          className="text-xs transition-colors duration-150"
          style={{
            color: "var(--dim)",
            fontFamily: "var(--font-mono-display), monospace",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--muted)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dim)")}
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
}
