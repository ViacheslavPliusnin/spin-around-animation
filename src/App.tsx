import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as Planet } from './assets/images/ecosystem.svg';
import { ReactComponent as BrandsIcon } from './assets/images/independent-brands.svg';
import { ReactComponent as ShoppersIcon } from './assets/images/social-shoppers.svg';
import { ReactComponent as EmployersIcon } from './assets/images/employers-conscience.svg';

const mustard = '#e2b238';
const blue = '#36a9ad';
const black = '#1d1d1b';
const white = '#fff';
const gray = '#f7f9f7';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  33.33% {
    transform: rotate(120deg);
  }
  66.66% {
    transform: rotate(240deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const brandsRotate = keyframes`
  from {
    transform: rotate(360deg) scale(1.35);
  }
  33.33% {
    transform: rotate(240deg) scale(1);
  }
  66.66% {
    transform: rotate(120deg) scale(1);
  }
  to {
    transform: rotate(0deg) scale(1.35);
  }
`;

const shoppersRotate = keyframes`
  from {
    transform: rotate(360deg) scale(1);
  }
  33.33% {
    transform: rotate(240deg) scale(1.35);
  }
  66.66% {
    transform: rotate(120deg) scale(1);
  }
  to {
    transform: rotate(0deg) scale(1);
  }
`;

const employersRotate = keyframes`
  from {
    transform: rotate(360deg) scale(1);
  }
  33.33% {
    transform: rotate(240deg) scale(1);
  }
  66.66% {
    transform: rotate(120deg) scale(1.35);
  }
  to {
    transform: rotate(0deg) scale(1);
  }
`;

const EmptySection = styled.div<{ color?: string }>`
  width: 100%;
  height: 500px;
  background-color: ${({ color }) => color || white};
`;

const PlanetSection = styled.div`
  background-color: ${blue};
  padding: 100px 0;
  display: flex;
  justify-content: center;
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
  transition: transform 1s linear;
  transform-style: preserve-3D;
  transform-origin: 276px 245px;
  animation: ${rotateAnimation} 10s infinite;
`;

const Brands = styled(BrandsIcon)`
  width: 116px;
  height: 116px;
  position: absolute;
  top: 185px;
  right: -75px;
  transition: transform 1s linear;
  transform-style: preserve-3D;
  transform-origin: center center;
  animation: ${brandsRotate} 10s infinite;
`;

const Shoppers = styled(ShoppersIcon)`
  width: 116px;
  height: 116px;
  position: absolute;
  top: 15px;
  left: 120px;
  transition: transform 1s linear;
  transform-style: preserve-3D;
  transform-origin: center center;
  animation: ${shoppersRotate} 10s infinite;
`;

const Employers = styled(EmployersIcon)`
  width: 116px;
  height: 116px;
  position: absolute;
  bottom: 35px;
  left: 120px;
  transition: transform 1s linear;
  transform-style: preserve-3D;
  transform-origin: center center;
  animation: ${employersRotate} 10s infinite;
`;

const App: React.FC = (): JSX.Element => (
  <>
    <EmptySection />
    <EmptySection color={gray} />
    <EmptySection color={blue} />
    <EmptySection color={mustard} />
    <EmptySection color={black} />
    <PlanetSection>
      <PlanetContainer>
        <Planet />
        <RotationContainer>
          <Brands />
          <Shoppers />
          <Employers />
        </RotationContainer>
      </PlanetContainer>
    </PlanetSection>
    <EmptySection color={black} />
    <EmptySection color={mustard} />
    <EmptySection color={blue} />
    <EmptySection color={gray} />
    <EmptySection />
  </>
);

export default App;
