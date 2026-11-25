"use client";

import Link from "next/link";
import { useMe } from "@/hooks/useAuth";

export function HomeAuthRedirect() {
  const { data: me, isSuccess } = useMe();

  if (isSuccess && me) {
    return (
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-surface-muted/90 px-4 py-2.5 backdrop-blur-sm sm:px-8">
        <div className="text-xs text-foreground/80 sm:text-sm">
          Signed in as <span className="font-semibold text-foreground">{me.name || "Admin"}</span>
        </div>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground shadow-sm hover:opacity-90"
        >
          Go to Dashboard &rarr;
        </Link>
      </div>
    );
  }

  return null;
}
