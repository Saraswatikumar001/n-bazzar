import { Briefcase, Users, TrendingUp, Heart } from "lucide-react";
import bgIMG from "../../assets/career.jpg";
import joinBg from "../../assets/join-bg.jpg"; // add a professional image

export default function Careers() {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* HERO SECTION */}
            <section className="relative text-white py-20 px-6 text-center  bg-cover bg-center"
                style={{ backgroundImage: `url(${bgIMG})` }}>
                <div className="absolute inset-0 bg-black/70 opacity-50"></div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                    Careers at N-Bazar
                </h1>
                <p className="max-w-2xl mx-auto text-lg opacity-90">
                    Join our team and help shape the future of online shopping.
                    Grow your career with innovation, creativity, and passion.
                </p>
            </section>

            {/* WHY WORK WITH US */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Work With N-Bazar?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Feature
                        icon={<TrendingUp />}
                        title="Fast Growth"
                        desc="Be part of a rapidly growing e-commerce platform with endless opportunities."
                    />
                    <Feature
                        icon={<Users />}
                        title="Great Team"
                        desc="Work with passionate, talented, and supportive team members."
                    />
                    <Feature
                        icon={<Briefcase />}
                        title="Career Development"
                        desc="Learn, grow, and build your professional career with us."
                    />
                    <Feature
                        icon={<Heart />}
                        title="Work Culture"
                        desc="Friendly work environment that values ideas and creativity."
                    />
                </div>
            </section>

            {/* JOIN US */}
            <section className="relative py-24 px-6 bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${joinBg})`}}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Content */}
                <div className="relative max-w-3xl mx-auto bg-white/95 text-gray-800 rounded-2xl shadow-xl p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-center mb-6">
                        Ready to Join N-Bazar?
                    </h2>
                    <p className="text-center text-gray-600 mb-8">
                        Fill in your details and our HR team will contact you.
                    </p>

                    <form className="space-y-5">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <select className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>Select Position</option>
                            <option>Store Operations Executive</option>
                            <option>Warehouse Supervisor</option>
                            <option>Customer Support Executive</option>
                            <option>Delivery Coordinator</option>
                            <option>Product Listing & Catalog Manager</option>
                        </select>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </section>

            {/* OPEN POSITIONS */}
            <section className="bg-white py-20 px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Current Openings at N-Bazar
                </h2>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <JobCard title="Store Operations Executive" type="Full Time" location="On-site" />
                    <JobCard title="Warehouse Supervisor" type="Full Time" location="On-site" />
                    <JobCard title="Delivery & Logistics Coordinator" type="Full Time" location="On-site" />
                    <JobCard title="Customer Support Executive" type="Full Time" location="Remote" />
                    <JobCard title="Product Listing & Catalog Manager" type="Full Time" location="Remote" />
                    <JobCard title="Digital Marketing Executive" type="Full Time" location="Hybrid" />
                    <JobCard title="Frontend Developer (React)" type="Full Time" location="Remote" />
                    <JobCard title="Accounts & Billing Executive" type="Full Time" location="On-site" />
                </div>
            </section>
        </div>
    );
}

/* ================= COMPONENTS ================= */

const Feature = ({ icon, title, desc }) => (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full">
            {icon}
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
    </div>
);

const JobCard = ({ title, type, location }) => (
    <div className="border rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow transition">
        <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">
                {type} • {location}
            </p>
        </div>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition">
            Apply
        </button>
    </div>
);
