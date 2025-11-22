import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Full-Stack Engineer',
      duration: '6 months',
      projects: 10,
      description: 'Comprehensive certification covering front-end, back-end, and full-stack development. Build 10+ real-world projects.',
      icon: '💻',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Data Scientist',
      duration: '8 months',
      projects: 12,
      description: 'Master data analysis, machine learning, and AI. Work with large datasets and build predictive models.',
      icon: '📊',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 3,
      title: 'Front-End Developer',
      duration: '4 months',
      projects: 8,
      description: 'Specialize in modern front-end technologies. Create responsive, interactive web applications.',
      icon: '🎨',
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 4,
      title: 'Back-End Developer',
      duration: '5 months',
      projects: 9,
      description: 'Learn server-side development, APIs, databases, and cloud deployment. Build scalable applications.',
      icon: '⚙️',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 5,
      title: 'Cybersecurity Analyst',
      duration: '7 months',
      projects: 11,
      description: 'Develop expertise in security protocols, threat detection, and ethical hacking practices.',
      icon: '🔒',
      color: 'from-red-500 to-red-600',
    },
    {
      id: 6,
      title: 'Mobile Developer',
      duration: '5 months',
      projects: 8,
      description: 'Create native and cross-platform mobile applications. Master iOS and Android development.',
      icon: '📱',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-codecademy-blue mb-4">
            Professional Certifications
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Earn industry-recognized certifications that validate your skills and boost your career
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-codecademy-purple overflow-hidden group"
            >
              <div className={`bg-gradient-to-br ${cert.color} p-6 text-white`}>
                <div className="text-5xl mb-3">{cert.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{cert.title}</h3>
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {cert.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    {cert.projects} Projects
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Industry Recognized</span>
                  <button className="bg-codecademy-purple hover:bg-[#5a52e6] text-white font-semibold py-2 px-5 rounded-lg text-sm transition-all duration-300 transform group-hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-codecademy-blue hover:bg-[#2a4a7a] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Certifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

