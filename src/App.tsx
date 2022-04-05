import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactComponent as PlanetImage } from './assets/images/ecosystem.svg';
import { ReactComponent as BrandsIcon } from './assets/images/independent-brands.svg';
import { ReactComponent as ShoppersIcon } from './assets/images/social-shoppers.svg';
import { ReactComponent as EmployersIcon } from './assets/images/employers-conscience.svg';

const white = '#fff';
const blue = '#36a9ad';
const darkBlue = '#005e71';
const sections = [blue, darkBlue, 'planet', darkBlue, blue];
const scaleSize = 1.35;
const text = [
  {
    heading: 'Independent impact-led UK brands',
    description: `Social enterprises are small businesses frustrated with the state of affairs.
      Their social mission is at the heart of what they do, so they're in the business of making
      a real difference in the world with every purchase. We bring together the very best of them
      and verify their impact through a partnership with Good Market. It's our ambition to help
      them create even more positive impact.`,
    isAbsolutePosition: false,
  },
  {
    heading: 'Socially conscious shoppers',
    description: `Feeling frustrated with unethical companies, greenwashing, online orders that
      show up in plastic packaging? We want to make it easier for you to shop without compromising
      your values or sacrificing on quality. We promise to prioritise sustainability and
      transparency in everything we do, as do our brand partners. Learn more about our impact and
      sustainability policies.`,
    isAbsolutePosition: true,
  },
  {
    heading: 'Employers with a conscience',
    description: `It's long been known companies are big drivers of change. We help them to buy
      more ethically from purpose-driven brands, as well as measure their positive impact.
      Everything from employee Christmas gifts to coffee in the office kitchen can help to get us
      closer to the UN's Sustainable Development Goals. We see a future where buying social is the
      ordinary, expected — and measured. Get your company to join the mission.`,
    isAbsolutePosition: true,
  },
];

const EmptySection = styled.div<{ color?: string }>`
  width: 100%;
  height: 500px;
  background-color: ${({ color }) => color || white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionHeading = styled.h2`
  font-family: 'Yellowtail', cursive;
  color: ${white};
  font-size: 80px;
`;

const PlanetSection = styled.div`
  background-color: ${blue};
  position: relative;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1200px) {
    justify-content: space-between;
    padding: 0 60px;
  }
  @media (max-width: 1080px) {
    padding: 0 30px;
  }
`;

const PlanetContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Planet = styled.div`
  position: relative;
`;

const RotationContainer = styled.div`
  position: absolute;
  width: 463px;
  height: 505px;
  top: 0;
  left: 0;
  transform-origin: 276px 245px;
`;

const Brands = styled(BrandsIcon)`
  width: 116px;
  height: 116px;
  position: absolute;
  top: 185px;
  right: -75px;
`;

const Shoppers = styled(ShoppersIcon)`
  width: 116px;
  height: 116px;
  position: absolute;
  top: 15px;
  left: 120px;
`;

const Employers = styled(EmployersIcon)`
  width: 116px;
  height: 116px;
  position: absolute;
  bottom: 35px;
  left: 120px;
`;

const TextContainer = styled.div<{ rows: number }>`
  position: relative;
  display: grid;
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 100vh)`};
  width: 40%;
  max-width: 650px;

  @media (max-width: 1080px) {
    width: 35%;
  }
`;

const Heading = styled.h2`
  margin-bottom: 15px;
`;

const Text = styled.p`
  align-self: center;
  color: ${white};
  font-size: 20px;
  font-weight: 500;
`;

const App: React.FC = (): JSX.Element => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const rotationContainerRef = useRef(null);
  const brandsRef = useRef(null);
  const shoppersRef = useRef(null);
  const employersRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTrigger = {
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      pin: containerRef.current,
      pinSpacing: false,
    };

    const animations = [
      {
        ref: rotationContainerRef.current,
        keyframes: {
          '0%': { rotate: 0 },
          '50%': { rotate: 120 },
          '100%': { rotate: 240 },
        },
      },
      {
        ref: brandsRef.current,
        keyframes: {
          '0%': { rotate: 360, scale: scaleSize },
          '50%': { rotate: 240, scale: 1 },
          '100%': { rotate: 120, scale: 1 },
        },
      },
      {
        ref: shoppersRef.current,
        keyframes: {
          '0%': { rotate: 360, scale: 1 },
          '50%': { rotate: 240, scale: scaleSize },
          '100%': { rotate: 120, scale: 1 },
        },
      },
      {
        ref: employersRef.current,
        keyframes: {
          '0%': { rotate: 360, scale: 1 },
          '50%': { rotate: 240, scale: 1 },
          '100%': { rotate: 120, scale: scaleSize },
        },
      },
    ];

    animations.map(({ ref, keyframes }) =>
      gsap.to(ref, {
        scrollTrigger: scrollTrigger,
        keyframes: keyframes,
      })
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.globalTimeline.getChildren().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {sections.map((section, i) => {
        return section === 'planet' ? (
          <PlanetSection ref={sectionRef} key={section + i}>
            <PlanetContainer>
              <Planet ref={containerRef}>
                <PlanetImage />
                <RotationContainer ref={rotationContainerRef}>
                  <Brands ref={brandsRef} />
                  <Shoppers ref={shoppersRef} />
                  <Employers ref={employersRef} />
                </RotationContainer>
              </Planet>
            </PlanetContainer>
            <TextContainer rows={text.length}>
              {text.map(({ heading, description }) => (
                <Text key={heading}>
                  <Heading>{heading}</Heading>
                  {description}
                </Text>
              ))}
            </TextContainer>
          </PlanetSection>
        ) : (
          <EmptySection color={section} key={section + i}>
            <SectionHeading>Section {i + 1}</SectionHeading>
          </EmptySection>
        );
      })}
    </>
  );
};

export default App;
