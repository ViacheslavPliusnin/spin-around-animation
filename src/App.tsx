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
`;

const Heading = styled.h2`
  margin-bottom: 15px;
`;

const Text = styled.p<{ isAbsolutePosition?: boolean }>`
  position: ${({ isAbsolutePosition }) => (isAbsolutePosition ? 'absolute' : 'static')};
  color: ${white};
  font-size: 20px;
  font-weight: 500;
  max-width: 650px;
`;

const brandsText = (
  <>
    <Heading>Independent impact-led UK brands</Heading>
    Social enterprises are small businesses frustrated with the state of affairs. Their social
    mission is at the heart of what they do, so they're in the business of making a real difference
    in the world with every purchase. We bring together the very best of them and verify their
    impact through a partnership with Good Market. It's our ambition to help them create even more
    positive impact.
  </>
);

const shoppersText = (
  <>
    <Heading>Socially conscious shoppers</Heading>
    Feeling frustrated with unethical companies, greenwashing, online orders that show up in plastic
    packaging? We want to make it easier for you to shop without compromising your values or
    sacrificing on quality. We promise to prioritise sustainability and transparency in everything
    we do, as do our brand partners. Learn more about our impact and sustainability policies.
  </>
);

const employersText = (
  <>
    <Heading>Employers with a conscience</Heading>
    It's long been known companies are big drivers of change. We help them to buy more ethically
    from purpose-driven brands, as well as measure their positive impact. Everything from employee
    Christmas gifts to coffee in the office kitchen can help to get us closer to the UN's
    Sustainable Development Goals. We see a future where buying social is the ordinary, expected —
    and measured. Get your company to join the mission.
  </>
);

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTrigger = {
      markers: true,
      trigger: containerRef.current,
      start: '50% 50%',
      end: 'bottom top',
      scrub: 1,
    };

    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1,
        pin: true,
      },
    });

    gsap.to(rotationContainerRef.current, {
      scrollTrigger: scrollTrigger,
      keyframes: {
        '0%': { rotate: 0 },
        '50%': { rotate: 120 },
        '100%': { rotate: 240 },
      },
    });

    gsap.to(brandsRef.current, {
      scrollTrigger: scrollTrigger,
      keyframes: {
        '0%': { rotate: 360, scale: 1.35 },
        '50%': { rotate: 240, scale: 1 },
        '100%': { rotate: 120, scale: 1 },
      },
    });

    gsap.to(shoppersRef.current, {
      scrollTrigger: scrollTrigger,
      keyframes: {
        '0%': { rotate: 360, scale: 1 },
        '50%': { rotate: 240, scale: 1.35 },
        '100%': { rotate: 120, scale: 1 },
      },
    });

    gsap.to(employersRef.current, {
      scrollTrigger: scrollTrigger,
      keyframes: {
        '0%': { rotate: 360, scale: 1 },
        '50%': { rotate: 240, scale: 1 },
        '100%': { rotate: 120, scale: 1.35 },
      },
    });

    gsap.to(brandsTextRef.current, {
      scrollTrigger: scrollTrigger,
      keyframes: {
        '0%': { yPercent: 0, opacity: 1 },
        '50%': { yPercent: -125, opacity: 0 },
        '100%': { yPercent: -125, opacity: 0 },
      },
    });

    gsap.to(shoppersTextRef.current, {
      scrollTrigger: scrollTrigger,
      keyframes: {
        '0%': { yPercent: 125, opacity: 0 },
        '50%': { yPercent: 0, opacity: 1 },
        '100%': { yPercent: -125, opacity: 0 },
      },
    });

    gsap.to(employersTextRef.current, {
      scrollTrigger: scrollTrigger,
      keyframes: {
        '0%': { yPercent: 125, opacity: 0 },
        '50%': { yPercent: 125, opacity: 0 },
        '100%': { yPercent: 0, opacity: 1 },
      },
    });
  }, []);

  return (
    <>
      <EmptySection color={blue}>
        <SectionHeading>Section 1</SectionHeading>
      </EmptySection>
      <EmptySection color={darkBlue}>
        <SectionHeading>Section 2</SectionHeading>
      </EmptySection>
      <PlanetSection ref={sectionRef}>
        <PlanetContainer ref={containerRef}>
          <Planet />
          <RotationContainer ref={rotationContainerRef}>
            <Brands ref={brandsRef} />
            <Shoppers ref={shoppersRef} />
            <Employers ref={employersRef} />
          </RotationContainer>
        </PlanetContainer>
        <TextContainer>
          <Text ref={brandsTextRef}>{brandsText}</Text>
          <Text ref={shoppersTextRef} isAbsolutePosition>
            {shoppersText}
          </Text>
          <Text ref={employersTextRef} isAbsolutePosition>
            {employersText}
          </Text>
        </TextContainer>
      </PlanetSection>
      <EmptySection color={darkBlue}>
        <SectionHeading>Section 4</SectionHeading>
      </EmptySection>
      <EmptySection color={blue}>
        <SectionHeading>Section 5</SectionHeading>
      </EmptySection>
    </>
  );
};

export default App;
