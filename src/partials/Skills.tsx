import { Section } from 'astro-boilerplate-components';

// TODO: Add skill icons

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'Java', 'Python', 'C#', 'C++'],
  },
  { category: 'Frameworks', skills: ['Django', 'ASP .NET', 'Vue.js', 'Nuxt'] },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'SASS', 'Node.js', 'Tailwind CSS'],
  },
  { category: 'Database Management', skills: ['SQL', 'MongoDB', 'PostgreSQL'] },
  { category: 'Version Control', skills: ['Git', 'GitHub'] },
  { category: 'Tools', skills: ['Docker', 'Firebase', 'GCP'] },
];

const Skills = () => (
  <Section title="Skills">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {skillsData.map((skillCategory) => (
        <div
          key={skillCategory.category}
          className="rounded-lg  bg-slate-800 p-6 shadow-lg"
        >
          <h3 className="mb-4 text-xl font-bold">{skillCategory.category}</h3>
          <ul className="list-inside list-disc">
            {skillCategory.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export { Skills };
