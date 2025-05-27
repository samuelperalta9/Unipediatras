import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { User, UserCircle, Phone } from "lucide-react";
import UserProfile from "./user-profile";
import Image from "next/image";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">PC</span>
            </div>
          </div>
          <span className="text-xl font-bold text-gray-800">Unipediatras</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/#services"
            className="text-gray-600 hover:text-teal-600 font-medium"
          >
            Services
          </Link>
          <Link
            href="/#"
            className="text-gray-600 hover:text-teal-600 font-medium"
          >
            Our Team
          </Link>
          <Link
            href="/#contact"
            className="text-gray-600 hover:text-teal-600 font-medium"
          >
            Contact
          </Link>
          <div className="flex items-center gap-2 text-teal-600">
            <Phone className="w-5 h-5" />
            <span className="font-medium">(555) 123-4567</span>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link href="/dashboard" className="px-4 py-2 text-sm font-medium">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Staff Portal
                </Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-teal-600 hover:text-teal-700"
              >
                Staff Login
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 hidden md:block"
              >
                Schedule Visit
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
