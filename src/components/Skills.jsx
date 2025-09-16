import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Core Frontend",
      items: [
        "HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "Mobile-First Development", "DOM Manipulation"
      ]
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "React.js", "Tailwind CSS", "Bootstrap", "Redux", "Zustand", "Framer Motion"
      ]
    },
    {
      category: "Design Tools",
      items: [
        "Figma", "Adobe XD", "Canva", "Wireframing", "UI/UX Principles", "Prototyping"
      ]
    },
    {
      category: "Tooling & Workflow",
      items: [
        "Git & GitHub", "VS Code", "NPM/Yarn", "Chrome DevTools", "Postman"
      ]
    },
    {
      category: "API & Backend Integration",
      items: [
        "RESTful APIs", "Firebase (Auth, Firestore)", "Axios", "Fetch API"
      ]
    },
    {
      category: "Deployment & Architecture",
      items: [
        "Netlify", "Vercel", "Firebase Hosting", "Environment Variables", "Component-Based Architecture"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-indigo-600">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-50 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6 text-center">My Design & Development Process</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-bold mb-2">Discovery</h4>
              <p className="text-gray-600 text-sm">Understanding your goals, audience, and business needs</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-bold mb-2">Planning</h4>
              <p className="text-gray-600 text-sm">Information architecture, wireframes, and project roadmap</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-bold mb-2">Design & Development</h4>
              <p className="text-gray-600 text-sm">Creating visual designs and building functional prototypes</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h4 className="font-bold mb-2">Launch & Support</h4>
              <p className="text-gray-600 text-sm">Deployment, testing, and ongoing maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
