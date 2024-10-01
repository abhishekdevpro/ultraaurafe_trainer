
import scope from '../../assets/img/scope.jpg'
import AGI from '../../assets/img/Agi.jpg'
import React from 'react';
import styled from 'styled-components';

const PartnersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #4F46E5;
`;

const PartnersRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const PartnerCard = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 350px; /* Added min height for uniformity */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
`;

const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #EEF2FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  overflow: hidden;
`;

const PartnerIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PartnerName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #1F2937;
`;

const PartnerDescription = styled.p`
  text-align: center;
  color: #4B5563;
`;

const CardFooter = styled.div`
  background-color: #EEF2FF;
  padding: 1rem 1.5rem;
  margin-top: auto; /* Ensures footer stays at the bottom */
`;

const LearnMoreButton = styled.button`
  width: 100%;
  background-color: #4F46E5;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4338CA;
  }
`;

const partnerData = [
  {
    name: 'SCOPE',
    icon: scope, // Replace with actual icon import or URL
    description: 'Empowering Citizens of South Florida... Innovative education and employment program for a stronger Hallandale Beach community.'
  },
  {
    name: 'AGI Tax Experts',
    icon: AGI, // Replace with actual icon import or URL
    description: 'Launch your career with AGI Tax Experts! Comprehensive training and placement opportunities available through our portal.'
  },
  {
    name: 'NOVA Home Care',
    icon: "https://idfy-eia3.vercel.app/assets/logo5-DddCxhI1.jpg", // Replace with actual icon import or URL
    description: 'Elevate your career with top-notch training and placement. Transform lives and secure your future with us.'
  }
];


const PartnerList = () => {
  return (
    <PartnersContainer>
      <Title>Our Partners</Title>
      <PartnersRow>
        {partnerData.map((partner, index) => (
          <PartnerCard key={index}>
            <CardContent>
              <IconContainer>
                <PartnerIcon src={partner.icon} alt={`${partner.name} icon`} />
              </IconContainer>
              <PartnerName>{partner.name}</PartnerName>
              <PartnerDescription>{partner.description}</PartnerDescription>
            </CardContent>
            <CardFooter>
              <LearnMoreButton>Learn More</LearnMoreButton>
            </CardFooter>
          </PartnerCard>
        ))}
      </PartnersRow>
    </PartnersContainer>
  );
};

export default PartnerList;
