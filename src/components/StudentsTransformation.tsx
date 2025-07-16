import React from 'react';
import { CircularTestimonials } from './ui/circular-testimonials';
import { Heart, Star, Sparkles, GraduationCap } from 'lucide-react';

const StudentsTransformation: React.FC = () => {
  const testimonials = [
    {
      quote: "CliniGlobal completely transformed my career. After 6 months of intensive training in Clinical Research, I secured a position as Clinical Data Analyst at Apollo Hospitals. The faculty support and practical training were exceptional!",
      name: "Priya Nair",
      designation: "Clinical Data Analyst @ Apollo Hospitals",
      src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote: "Thanks to CliniGlobal's comprehensive Clinical Research program, I mastered GCP guidelines and regulatory processes. Now I work as a Clinical Research Associate at Cipla with 200% salary hike. Best decision of my life!",
      name: "Rohit Verma",
      designation: "Clinical Research Associate @ Cipla",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote: "The mentors at CliniGlobal guided me step by step through Pharmacovigilance training. Today, I am proud to be part of Biocon's Drug Safety team. The placement support was incredible - got placed within 2 weeks!",
      name: "Sneha Kulkarni",
      designation: "Drug Safety Associate @ Biocon",
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote: "The hands-on projects and real clinical trial experience were amazing! CliniGlobal's Clinical Data Management course helped me crack my interview at Fortis Healthcare as a Data Manager within weeks of completion.",
      name: "Aditya Sharma",
      designation: "Clinical Data Manager @ Fortis Healthcare",
      src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote: "CliniGlobal's mock interviews, resume building, and practical Medical Coding training helped me land my first job in Clinical Research at Sun Pharma. From fresher to professional in just 4 months!",
      name: "Aarti Mishra",
      designation: "Clinical Research Coordinator @ Sun Pharma",
      src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  const healthcareCompanies = [
    { name: 'Apollo Hospitals', logo: 'https://logos-world.net/wp-content/uploads/2021/11/Apollo-Hospitals-Logo.png' },
    { name: 'Fortis Healthcare', logo: 'https://logos-world.net/wp-content/uploads/2021/11/Fortis-Healthcare-Logo.png' },
    { name: 'Max Healthcare', logo: 'https://logos-world.net/wp-content/uploads/2021/11/Max-Healthcare-Logo.png' },
    { name: 'Manipal Hospitals', logo: 'https://logos-world.net/wp-content/uploads/2021/11/Manipal-Hospitals-Logo.png' },
    { name: 'Narayana Health', logo: 'https://logos-world.net/wp-content/uploads/2021/11/Narayana-Health-Logo.png' },
    { name: 'Dr. Reddys Labs', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Dr-Reddys-Logo.png' },
    { name: 'Sun Pharma', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Sun-Pharma-Logo.png' },
    { name: 'Cipla', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Cipla-Logo.png' },
    { name: 'Biocon', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Biocon-Logo.png' },
    { name: 'Lupin', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Lupin-Logo.png' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-1/4 left-1/6 text-pink-400 opacity-50 animate-bounce" size={22} style={{ animationDelay: '0s', animationDuration: '3.5s' }} />
        <Star className="absolute top-3/4 right-1/5 text-yellow-400 opacity-60 animate-bounce" size={24} style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <Sparkles className="absolute top-1/2 left-3/4 text-purple-400 opacity-40 animate-bounce" size={20} style={{ animationDelay: '2s', animationDuration: '3.8s' }} />
        <GraduationCap className="absolute top-2/3 right-1/6 text-blue-400 opacity-50 animate-bounce" size={22} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Students <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Transformation</span> at CliniGlobal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            Discover how our students transformed their careers and secured dream jobs in top healthcare companies across India
          </p>
        </div>

        {/* Healthcare Companies Scrolling Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 font-poppins">
            Our Students Are Placed At
          </h3>
          <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg overflow-hidden relative">
            <div className="relative">
              <div className="flex animate-slide-infinite space-x-12">
                {[...healthcareCompanies, ...healthcareCompanies].map((company, index) => (
                  <div key={index} className="flex-shrink-0 w-48 h-24 flex flex-col items-center justify-center p-4 bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl hover:bg-white/80 hover:scale-105 transition-all duration-300 shadow-lg">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="max-w-full h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 mb-2"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextElementSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'block';
                        }
                      }}
                    />
                    <span 
                      className="text-gray-700 font-medium text-xs text-center font-poppins hidden"
                      style={{ display: 'none' }}
                    >
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient overlays for smooth infinite scroll effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/40 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Circular Testimonials */}
        <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-lg mb-12">
          <div className="flex items-center justify-center">
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              colors={{
                name: "#1f2937",
                designation: "#3b82f6",
                testimony: "#374151",
                arrowBackground: "#3b82f6",
                arrowForeground: "#ffffff",
                arrowHoverBackground: "#1d4ed8",
              }}
              fontSizes={{
                name: "24px",
                designation: "16px",
                quote: "18px",
              }}
            />
          </div>
        </div>

        {/* Success Highlights */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">
              Join the Success Stories
            </h3>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-poppins">
              Transform your career with CliniGlobal's industry-leading healthcare training programs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="text-3xl font-bold mb-2 font-poppins">100%</div>
                <div className="text-white/80 font-poppins">Placement Assistance</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold mb-2 font-poppins">6-12</div>
                <div className="text-white/80 font-poppins">Months Training</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold mb-2 font-poppins">₹18L</div>
                <div className="text-white/80 font-poppins">Highest Package</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg font-poppins">
                Start Your Transformation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-lg font-poppins">
                View All Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsTransformation;