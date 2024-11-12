import Footer from "@/components/shared/footer/page";
import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grow">
      {children}
      <Footer />
    </main>
  );
}
