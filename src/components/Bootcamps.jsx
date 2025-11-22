import React from 'react';

const Bootcamps = () => {
  const bootcamps = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      duration: '16 weeks',
      level: 'Intermediate',
      description: 'Master front-end and back-end technologies including React, Node.js, and databases. Build real-world projects and portfolio.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      price: '$2,499',
      featured: true,
    },
    {
      id: 2,
      title: 'Data Science & Machine Learning',
      duration: '20 weeks',
      level: 'Advanced',
      description: 'Learn Python, data analysis, machine learning algorithms, and AI fundamentals. Work with real datasets and build ML models.',
      skills: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      price: '$2,999',
      featured: false,
    },
    {
      id: 3,
      title: 'Cybersecurity Bootcamp',
      duration: '14 weeks',
      level: 'Intermediate',
      description: 'Develop expertise in network security, ethical hacking, and threat analysis. Get hands-on with security tools and techniques.',
      skills: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Linux'],
      price: '$2,799',
      featured: false,
    },
    {
      id: 4,
      title: 'Mobile App Development',
      duration: '12 weeks',
      level: 'Beginner',
      description: 'Create iOS and Android apps using React Native and Swift. Learn app design, development, and deployment.',
      skills: ['React Native', 'Swift', 'iOS', 'Android'],
      price: '$2,199',
      featured: false,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-codecademy-blue mb-4">
            Intensive Bootcamps
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Accelerate your career with immersive, project-based learning experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {bootcamps.map((bootcamp) => (
            <div
              key={bootcamp.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                bootcamp.featured
                  ? 'border-codecademy-purple md:col-span-2 lg:col-span-1'
                  : 'border-gray-200 hover:border-codecademy-purple'
              } overflow-hidden`}
            >
              {bootcamp.featured && (
                <div className="bg-codecademy-purple text-white text-center py-2 text-sm font-semibold">
                  ⭐ Most Popular
                </div>
              )}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-codecademy-blue mb-2">
                      {bootcamp.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {bootcamp.duration}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {bootcamp.level}
                      </span>
                    </div>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <div className="text-2xl sm:text-3xl font-bold text-codecademy-purple">
                      {bootcamp.price}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {bootcamp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills You'll Learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {bootcamp.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-codecademy-purple/10 text-codecademy-purple px-3 py-1 rounded-md text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-codecademy-blue hover:bg-[#2a4a7a] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bootcamps;

