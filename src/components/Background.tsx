"use client";

export function Background() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ backgroundColor: "var(--bg)" }}
    />
  );
}
