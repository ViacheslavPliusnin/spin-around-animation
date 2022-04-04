import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactComponent as Planet } from './assets/images/ecosystem.svg';
import { ReactComponent as BrandsIcon } from './assets/images/independent-brands.svg';
import { ReactComponent as ShoppersIcon } from './assets/images/social-shoppers.svg';
import { ReactComponent as EmployersIcon } from './assets/images/employers-conscience.svg';

const white = '#fff';
const blue = '#36a9ad';
const darkBlue = '#005e71';

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
  padding: 100px 0;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1200px) {
    justify-content: space-between;
    padding: 100px 60px;
  }
  @media (max-width: 1080px) {
    padding: 100px 30px;
  }
`;

const PlanetContainer = styled.div`
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

const TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 650px;

  @media (max-width: 1080px) {
    width: 35%;
  }
`;

const Heading = styled.h2`
  margin-bottom: 15px;
`;

const Text = styled.p<{ isAbsolutePosition?: boolean }>`
  position: ${({ isAbsolutePosition }) => (isAbsolutePosition ? 'absolute' : 'static')};
  color: ${white};
  font-size: 20px;
  font-weight: 500;
`;

const sections = [blue, darkBlue, 'planet', darkBlue, blue];
const scaleSize = 1.35;

const App: React.FC = (): JSX.Element => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const rotationContainerRef = useRef(null);
  const brandsRef = useRef(null);
  const shoppersRef = useRef(null);
  const employersRef = useRef(null);
  const brandsTextRef = useRef(null);
  const shoppersTextRef = useRef(null);
  const employersTextRef = useRef(null);

  const text = [
    {
      ref: brandsTextRef,
      heading: 'Independent impact-led UK brands',
      description: `Social enterprises are small businesses frustrated with the state of affairs.
        Their social mission is at the heart of what they do, so they're in the business of making
        a real difference in the world with every purchase. We bring together the very best of them
        and verify their impact through a partnership with Good Market. It's our ambition to help
        them create even more positive impact.`,
      isAbsolutePosition: false,
    },
    {
      ref: shoppersTextRef,
      heading: 'Socially conscious shoppers',
      description: `Feeling frustrated with unethical companies, greenwashing, online orders that
        show up in plastic packaging? We want to make it easier for you to shop without compromising
        your values or sacrificing on quality. We promise to prioritise sustainability and
        transparency in everything we do, as do our brand partners. Learn more about our impact and
        sustainability policies.`,
      isAbsolutePosition: true,
    },
    {
      ref: employersTextRef,
      heading: 'Employers with a conscience',
      description: `It's long been known companies are big drivers of change. We help them to buy
        more ethically from purpose-driven brands, as well as measure their positive impact.
        Everything from employee Christmas gifts to coffee in the office kitchen can help to get us
        closer to the UN's Sustainable Development Goals. We see a future where buying social is the
        ordinary, expected — and measured. Get your company to join the mission.`,
      isAbsolutePosition: true,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTrigger = {
      trigger: containerRef.current,
      start: '50% 50%',
      end: 'bottom top',
      scrub: 1,
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
      {
        ref: brandsTextRef.current,
        keyframes: {
          '0%': { yPercent: 0, opacity: 1 },
          '50%': { yPercent: -125, opacity: 0 },
          '100%': { yPercent: -125, opacity: 0 },
        },
      },
      {
        ref: shoppersTextRef.current,
        keyframes: {
          '0%': { yPercent: 125, opacity: 0 },
          '50%': { yPercent: 0, opacity: 1 },
          '100%': { yPercent: -125, opacity: 0 },
        },
      },
      {
        ref: employersTextRef.current,
        keyframes: {
          '0%': { yPercent: 125, opacity: 0 },
          '50%': { yPercent: 125, opacity: 0 },
          '100%': { yPercent: 0, opacity: 1 },
        },
      },
    ];

    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1,
        pin: true,
      },
    });

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
            <PlanetContainer ref={containerRef}>
              <Planet />
              <RotationContainer ref={rotationContainerRef}>
                <Brands ref={brandsRef} />
                <Shoppers ref={shoppersRef} />
                <Employers ref={employersRef} />
              </RotationContainer>
            </PlanetContainer>
            <TextContainer>
              {text.map(({ ref, heading, description, isAbsolutePosition }) => (
                <Text ref={ref} isAbsolutePosition={isAbsolutePosition} key={heading}>
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
