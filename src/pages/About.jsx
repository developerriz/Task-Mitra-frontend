import { Target, Briefcase } from "lucide-react";
import solar from "./solar.jpg";
import photo1 from "../assets/taskMitra-photo-1.jpg";
import photo2 from "../assets/taskMitra-photo-2.jpg";
import photo3 from "../assets/taskMitra-photo-3.jpg";

function About() {
  return (
    <main className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <header className="text-center mb-12" aria-labelledby="about-heading">
          <h1 id="about-heading" className="text-3xl md:text-4xl font-bold text-gray-800">
            About TaskMitra Solutions Pvt. Ltd.
          </h1>

          <p className="mt-2 text-sm text-gray-500 font-medium">
            Founded — 9 September 2025
          </p>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We are a field operations and business support company providing
            reliable solutions to solar firms, NBFCs, and enterprises across India.
          </p>
        </header>

        {/* Company Story */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16" aria-label="Company story">
          <article>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              TaskMitra Solutions Pvt. Ltd. was founded with a simple mission — to empower businesses by bridging on-ground execution with strategic operations. Since inception, we’ve been supporting companies in sectors like renewable energy, finance, and logistics with manpower, recovery, and installation services.
            </p>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Registered under the Ministry of Corporate Affairs (MCA), TaskMitra adheres to legal, ethical, and professional standards ensuring every client engagement is transparent and goal-driven.
            </p>
          </article>

          <figure>
            <img
              src={solar}
              alt="TaskMitra team on-site"
              className="rounded-2xl shadow-md w-full object-cover"
            />
            <figcaption className="sr-only">TaskMitra team working on solar installation</figcaption>
          </figure>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16" aria-label="Mission and Vision">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <Target size={40} className="text-blue-600 mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver reliable, high-quality, and affordable multi-sector services — from solar and construction to home care and financial recovery — empowering communities and businesses with trust, innovation, and skilled execution.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <Briefcase size={40} className="text-blue-600 mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be India’s most trusted name in on-field business execution, known for innovation, ethics, and nationwide efficiency.
            </p>
          </div>
        </section>

        {/* Core Team */}
        <section className="text-center" aria-label="Core team">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <figure className="bg-white shadow-md p-6 rounded-2xl transform hover:-translate-y-1 transition">
              <img
                src={photo2}
                alt="Mr. Muktar Hussain — Director"
                className="w-20 h-20 object-cover rounded-full mx-auto mb-3 shadow-md"
                width={80}
                height={80}
              />
              <figcaption>
                <h3 className="font-semibold text-gray-800">Mr. Muktar Hussain</h3>
                <p className="text-sm text-gray-500 mb-2">Director</p>

                <blockquote className="text-sm text-gray-700 italic">
                  “To guide TaskMitra Solutions towards sustainable growth by ensuring transparency, strong relationships, and long-term stability for clients and partners.”
                </blockquote>

                <p className="text-xs text-gray-600 mt-2 font-medium">
                  Focus: Leadership • Strategy • Compliance • Growth
                </p>
              </figcaption>
            </figure>

            {/* Card 2 */}
            <figure className="bg-white shadow-md p-6 rounded-2xl transform hover:-translate-y-1 transition">
              <img
                src={photo3}
                alt="Mostak Ahmed — CEO"
                className="w-20 h-20 object-cover rounded-full mx-auto mb-3 shadow-md"
                width={80}
                height={80}
              />
              <figcaption>
                <h3 className="font-semibold text-gray-800">Mostak Ahmed</h3>
                <p className="text-sm text-gray-500 mb-2">CEO</p>

                <blockquote className="text-sm text-gray-700 italic">
                  “To expand TaskMitra into a reliable multi-service brand by bringing innovation, quality service delivery, and customer-first operations in every project.”
                </blockquote>

                <p className="text-xs text-gray-600 mt-2 font-medium">
                  Focus: Expansion • Service Excellence • Operations
                </p>
              </figcaption>
            </figure>

            {/* Card 3 */}
            <figure className="bg-white shadow-md p-6 rounded-2xl transform hover:-translate-y-1 transition">
              <img
                src={photo1}
                alt="Abdul Suruz — Project Head"
                className="w-20 h-20 object-cover rounded-full mx-auto mb-3 shadow-md"
                width={80}
                height={80}
              />
              <figcaption>
                <h3 className="font-semibold text-gray-800">Abdul Suruz</h3>
                <p className="text-sm text-gray-500 mb-2">Project Head</p>

                <blockquote className="text-sm text-gray-700 italic">
                  “To complete every project with precision, timely execution, and technical excellence, ensuring customer satisfaction and maintaining our company’s reputation.”
                </blockquote>

                <p className="text-xs text-gray-600 mt-2 font-medium">
                  Focus: Project Quality • Timely Deliverables • Execution
                </p>
              </figcaption>
            </figure>

          </div>
        </section>

      </div>
    </main>
  );
}

export default About;
