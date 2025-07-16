import React from 'react';
import { GraduationCap, TrendingUp, Users, Award, Heart, Star, Sparkles } from 'lucide-react';
import { CircularTestimonials } from './ui/circular-testimonials';

const StudentsTransformation: React.FC = () => {
  const testimonials = [
    {
      quote: "CliniGlobal completely transformed my career. After 3 months of training, I secured a position as a Clinical Data Analyst at Apollo Hospitals. The practical training and industry exposure made all the difference.",
      name: "Priya Nair",
      designation: "Clinical Data Analyst @ Apollo Hospitals",
      src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=500&auto=format&fit=crop",
    },
    {
      quote: "Thanks to CliniGlobal, I mastered clinical research basics and now work as a Clinical Research Associate at Cipla. The mentors guided me through every step of my journey.",
      name: "Rohit Verma",
      designation: "Clinical Research Associate @ Cipla",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop",
    },
    {
      quote: "The mentors at CliniGlobal guided me step by step. Today, I am proud to be part of Biocon's Pharmacovigilance team. The course content was exactly what the industry needed.",
      name: "Sneha Kulkarni",
      designation: "Drug Safety Associate @ Biocon",
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500&auto=format&fit=crop",
    },
    {
      quote: "The hands-on projects were amazing! I cracked my interview at Fortis Healthcare as a Data Manager within weeks of completion. CliniGlobal's placement support is unmatched.",
      name: "Aditya Sharma",
      designation: "Clinical Data Manager @ Fortis Healthcare",
      src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=500&auto=format&fit=crop",
    },
    {
      quote: "CliniGlobal's mock interviews and practical training helped me land my first job in Clinical Research at Sun Pharma. The confidence I gained here was incredible.",
      name: "Aarti Mishra",
      designation: "Clinical Research Coordinator @ Sun Pharma",
      src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=500&auto=format&fit=crop",
    },
  ];

  const transformationStats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Students Transformed',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      number: '300%',
      label: 'Average Salary Hike',
      color: 'green'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Placement Success',
      color: 'indigo'
    },
    {
      icon: GraduationCap,
      number: '50+',
      label: 'Industry Partners',
      color: 'purple'
    }
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
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Students Transformation at{' '}
            <span className="cliniglobal-brand">
              <span className="cliniglobal-clini">Clini</span>
              <span className="cliniglobal-global">Global</span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins leading-relaxed">
            Discover how our comprehensive healthcare training programs have transformed the careers of thousands of students, 
            helping them secure positions at top healthcare companies across India.
          </p>
        </div>

        {/* Transformation Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {transformationStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg hover:scale-105 hover:bg-white/60 transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-400/30 to-${stat.color}-600/30 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                <stat.icon className={`text-${stat.color}-600`} size={28} />
              </div>
              <div className={`text-3xl font-bold text-${stat.color}-600 mb-2 font-poppins`}>{stat.number}</div>
              <div className="text-gray-600 font-poppins text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Circular Testimonials */}
        <div className="bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-lg p-8 mb-16">
          <CircularTestimonials 
            testimonials={testimonials}
            autoRotate={true}
            rotationInterval={6000}
          />
        </div>

        {/* Success Stories Highlight */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 font-poppins">Ready to Transform Your Career?</h3>
            <p className="text-xl text-white/90 mb-8 font-poppins">
              Join thousands of successful healthcare professionals who started their journey with CliniGlobal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg font-poppins shadow-lg hover:shadow-xl hover:scale-105 duration-300">
                Start Your Transformation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-lg font-poppins hover:scale-105 duration-300">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsTransformation;