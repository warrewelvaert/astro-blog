import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Warre</GradientText> 👋
        </>
      }
      description={
        <>
          I am a final-year Software Engineering student at{' '}
          <a className="text-cyan-400 hover:underline" href="https://howest.be">
            Howest
          </a>{' '}
          , currently gaining practical experience by working at{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://justrussel.com"
          >
            Just Russel
          </a>{' '}
          as junior full stack developer. My diverse IT skills are showcased on
          this page, though I am currently focusing on development with Django
          and Nuxt for the{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://app.justrussel.com"
          >
            Just Russel app
          </a>{' '}
          .<br></br>
          <br></br>
          Beyond my technical abilities, I am passionate about solving complex
          problems and continuously learning about new technologies. I enjoy
          collaborating with teams to create innovative solutions and am always
          eager to take on new challenges that push the boundaries of my
          knowledge and skills.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/warre-welvaert-510b8b290/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
