import React from 'react';
import { Award, Shield, Globe, CheckCircle } from 'lucide-react';

const Accreditations: React.FC = () => {
  const accreditations = [
    {
      logo: '/attached_assets/logo 1_1753167119836.png',
      title: 'IAO Accreditation',
      description: 'International Accreditation Organization - Global standards in healthcare education',
      caption: 'Globally Recognized Standards'
    },
    {
      logo: '/attached_assets/logo 2_1753167119837.png',
      title: 'ISO 9001:2015',
      description: 'Quality Management System certification for consistent educational excellence',
      caption: 'Quality Management Excellence'
    },
    {
      logo: '/attached_assets/logo 3_1753167119839.png',
      title: 'LSSSDC Certification',
      description: 'Life Sciences Sector Skill Development Council approved training programs',
      caption: 'Industry-Approved Curriculum'
    },
    {
      logo: '/attached_assets/logo 4 copy_1753167119840.jpeg',
      title: 'Government Endorsement',
      description: 'Recognized by Government bodies for skill development initiatives',
      caption: 'Government Recognition'
    },
    {
      logo: '/attached_assets/logo 5_1753167119842.jpeg',
      title: 'Healthcare Authority',
      description: 'Endorsed by leading healthcare regulatory authorities',
      caption: 'Regulatory Compliance'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-200/30 to-blue-200/30 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Award className="absolute top-1/4 left-1/6 text-blue-400 opacity-30 animate-bounce" size={24} style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <Shield className="absolute top-3/4 right-1/5 text-indigo-400 opacity-40 animate-bounce" size={26} style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
        <Globe className="absolute top-1/2 left-3/4 text-blue-400 opacity-35 animate-bounce" size={22} style={{ animationDelay: '2s', animationDuration: '4.2s' }} />
        <CheckCircle className="absolute top-2/3 right-1/6 text-green-400 opacity-30 animate-bounce" size={20} style={{ animationDelay: '1.5s', animationDuration: '3.8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
            <Award className="mr-2 text-blue-600" size={20} />
            <span className="text-blue-800 font-semibold text-sm tracking-wide">TRUSTED & CERTIFIED</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
            Accreditations & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Endorsements</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-poppins leading-relaxed">
            Our commitment to excellence is validated by prestigious accreditations and endorsements from leading 
            international organizations, ensuring world-class education standards
          </p>
        </div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {accreditations.map((accreditation, index) => (
            <div key={index} className="group">
              {/* Logo Card */}
              <div className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white/80 relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-indigo-50/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Logo container */}
                <div className="relative z-10 h-32 flex items-center justify-center mb-6">
                  <div className="w-full h-full bg-white rounded-2xl shadow-inner flex items-center justify-center p-4 border border-gray-100">
                    <img 
                      src={accreditation.logo} 
                      alt={accreditation.title}
                      className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        // Fallback to icon if image fails to load
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback icon */}
                    <div className="hidden w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl items-center justify-center">
                      <Award className="text-white" size={32} />
                    </div>
                  </div>
                </div>
                
                {/* Caption */}
                <div className="relative z-10 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins group-hover:text-blue-600 transition-colors duration-300">
                    {accreditation.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3 font-poppins">
                    {accreditation.caption}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed font-poppins">
                    {accreditation.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Subtle divider line */}
              {index < accreditations.length - 1 && (
                <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="bg-white/50 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-xl hover:bg-white/60 transition-all duration-500 inline-block">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Shield className="text-green-600" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                Trusted by Industry Leaders
              </h3>
              <CheckCircle className="text-blue-600" size={28} />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto font-poppins">
              These accreditations validate our commitment to maintaining the highest standards in healthcare education, 
              ensuring our graduates are well-prepared for successful careers in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;