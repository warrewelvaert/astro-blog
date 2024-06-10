import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Magic The Gathering: Deck Builder"
        description="Application where users can build and keep track of their Magic The Gathering deck. 
        Built with ASP .NET Core, C#, Blazor, Entity Framework Core, REST and GraphQL API's. "
        link="https://github.com/warrewelvaert/mtg-deck-builder"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>ASP .NET</Tags>
            <Tags color={ColorTags.LIME}>C#</Tags>
          </>
        }
      />
      <Project
        name="Chew Time"
        description="A native Android application that helps the user keep track of pet food.
         The app notifies the user when their food storage is almost empty and when the pet needs to be fed.
         Built with Jetpack Compose using a Room database and Retrofit for API calls."
        link="https://github.com/warrewelvaert/chew-time"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Kotlin</Tags>
            <Tags color={ColorTags.EMERALD}>Android</Tags>
            <Tags color={ColorTags.YELLOW}>Jetpack Compose</Tags>
          </>
        }
      />
      <Project
        name="Astro Blog"
        description="Source code for this blog. 
        Built using Astro, TypeScript, and Tailwind CSS."
        link="https://github.com/warrewelvaert/astro-blog"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>Astro</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.BLUE}>Tailwind.css</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
