import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  Heart,
  Stethoscope,
  Baby,
  Calendar,
  Users,
  Phone,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive pediatric care from newborns to
              adolescents in a warm, child-friendly environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Baby className="w-8 h-8" />,
                title: "Well-Child Visits",
                description:
                  "Regular check-ups to monitor growth, development, and administer vaccinations",
              },
              {
                icon: <Stethoscope className="w-8 h-8" />,
                title: "Sick Child Care",
                description:
                  "Prompt diagnosis and treatment for illnesses, infections, and injuries",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Preventive Care",
                description:
                  "Guidance on nutrition, safety, and healthy lifestyle habits",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Developmental Screenings",
                description:
                  "Early identification of developmental delays and behavioral concerns",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Family Support",
                description:
                  "Resources and education for parents on child health and parenting",
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Telehealth",
                description:
                  "Virtual appointments for minor concerns and follow-ups",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-teal-100"
              >
                <div className="text-teal-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced pediatricians and staff are dedicated to providing
              the highest quality care for your children.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Lead Pediatrician",
                image:
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80",
                description:
                  "Board certified with 15+ years of experience in pediatric care",
              },
              {
                name: "Dr. Michael Chen",
                role: "Pediatrician",
                image:
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80",
                description:
                  "Specializes in pediatric development and behavioral health",
              },
              {
                name: "Nurse Rebecca Taylor",
                role: "Head Nurse",
                image:
                  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&q=80",
                description:
                  "Dedicated to creating a comfortable experience for young patients",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-64 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-teal-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                We're here to answer your questions and provide the care your
                child needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-600">Emergency: (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Hours</h3>
                    <p className="text-gray-600">
                      Monday-Friday: 8:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: 9:00 AM - 12:00 PM
                    </p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sky-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">
                Schedule an Appointment
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Parent/Guardian Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Child's Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reason for Visit
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    rows={3}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
