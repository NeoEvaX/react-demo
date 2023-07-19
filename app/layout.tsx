import { Providers } from "./providers";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import { ReactNode } from "react";

type AuthRootLayoutProps = {
  children: ReactNode;
};

export default function HomeLayout({ children }: AuthRootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
