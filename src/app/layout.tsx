import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";

// No changes needed for metadata, it's correctly set up.

export const metadata = {
  title: "Admin Dashboard",
  description: "Front-End Admin Panel using Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full overflow-hidden flex">
        <AuthProvider> {/* This is fine as long as the context is correctly typed in its own file */}
          <Sidebar />
          <div className="flex-1 flex flex-col h-full">
            <Navbar />
            <main className="flex-1 overflow-auto p-6 bg-gray-100">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
