import { GradientText, Section } from 'astro-boilerplate-components';

import { SkillsData } from '@/data/SkillsData';

const Skills = () => (
  <Section title="Skills">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {SkillsData.map((skillCategory) => (
        <div
          key={skillCategory.category}
          className="rounded-lg bg-slate-800 p-6 shadow-lg"
        >
          <h3 className="mb-4 text-xl font-bold">
            <GradientText> {skillCategory.category}</GradientText>
          </h3>
          <div className="flex flex-wrap gap-4">
            {skillCategory.skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-50"
              >
                <img src={skill.icon} alt={skill.name} className="h-12 w-12" />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export { Skills };
