import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"SapaSense | Make your money last", description:"A practical Nigerian budget planner with transparent calculations." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
