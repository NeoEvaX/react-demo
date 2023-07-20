import Navigation from "@/components/Navigation/Navigation";
import "@/styles/globals.css";
import { ReactNode } from "react";

type AuthRootLayoutProps = {
  children: ReactNode;
};

export default function HomeLayout({ children }: AuthRootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
