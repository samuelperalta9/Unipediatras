import Link from "next/link";
import { ArrowUpRight, Check, Calendar, Phone, Clock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient - soft colors for pediatric theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-teal-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Caring for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-teal-500">
                Little Ones
              </span>{" "}
              with Big Hearts
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Welcome to our pediatric practice where we provide compassionate,
              comprehensive healthcare for children of all ages in a warm,
              friendly environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-4 text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors text-lg font-medium"
              >
                Schedule a Visit
                <Calendar className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center px-8 py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
              >
                Our Services
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-600 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Phone className="w-10 h-10 text-teal-500 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold">Emergency Line</p>
                  <p>(809) 472-3525</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Clock className="w-10 h-10 text-teal-500 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold">Office Hours</p>
                  <p>Mon-Fri: 9am-5pm</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Check className="w-10 h-10 text-teal-500 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold">Insurance</p>
                  <p>Most plans accepted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
