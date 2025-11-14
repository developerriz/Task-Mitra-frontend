import { Users, Target, Briefcase } from "lucide-react";
import solar from "./solar.jpg";

function About() {
  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            About TaskMitra Solutions Pvt. Ltd.
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We are a field operations and business support company providing
            reliable solutions to solar firms, NBFCs, and enterprises across
            India.
          </p>
        </div>

        {/* --- Company Story --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              TaskMitra Solutions Pvt. Ltd. was founded with a simple mission —
              to empower businesses by bridging on-ground execution with
              strategic operations. Since inception, we’ve been supporting
              companies in sectors like renewable energy, finance, and logistics
              with manpower, recovery, and installation services.
            </p>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Registered under the Ministry of Corporate Affairs (MCA),
              TaskMitra adheres to legal, ethical, and professional standards
              ensuring every client engagement is transparent and goal-driven.
            </p>
          </div>
          <img
            src={solar}
            alt="TaskMitra team"
            className="rounded-2xl shadow-md"
          />
        </section>

        {/* --- Mission & Vision --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <Target size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver reliable, high-quality, and affordable multi-sector
              services — from solar and construction to home care and financial
              recovery — empowering communities and businesses with trust,
              innovation, and skilled execution.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <Briefcase size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be India’s most trusted name in on-field business execution,
              known for innovation, ethics, and nationwide efficiency.
            </p>
          </div>
        </section>

        {/* --- Core Team --- */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Example team cards */}
            <div className="bg-white shadow-md p-6 rounded-2xl">
              <Users size={36} className="text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Mr.Muktar Hussain</h3>
              <p className="text-sm text-gray-500">
                Managing Director
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-2xl">
              <Users size={36} className="text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">Mustak Ahmed</h3>
              <p className="text-sm text-gray-500">(Co-Founder)</p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-2xl">
              <Users size={36} className="text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">
                Abdul Suruz
              </h3>
              <p className="text-sm text-gray-500">Project Head</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
