'use client';
import { styled } from 'styled-components';
import grid_background from '../../../../public/images/offer_card_grid_1.png';

export const Wrapper = styled.section`
  padding: 4rem 0;
  background-color: #131313;
`;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 4rem;
  
  h1 {
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2.25rem;
    }
  }
  
  p {
    max-width: 41.75rem;
    color: #989898;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const OffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const BottomOffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const OfferCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: url(${grid_background.src}) #131313 no-repeat;
  background-size: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 380px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    height: 330px;
  }
`;

export const LargeOfferCard = styled(OfferCard)`
  height: 420px;
  
  @media (max-width: 768px) {
    height: 360px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex: 1;
  
  &::after {
    position: absolute;
    content: '';
    height: 100px;
    width: 100%;
    background: linear-gradient(180deg, rgba(19, 19, 19, 0) 0%, #131313 100%);
    left: 0;
    bottom: 0;
    pointer-events: none;
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    z-index: 1;
  }
`;

export const TextContainer = styled.div`
  padding: 1.5rem 2rem;
  z-index: 2;
  background: rgba(19, 19, 19, 0.9);
  
  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
    color: #ffffff;
  }
  
  p {
    color: #989898;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    
    h2 {
      font-size: 1.25rem;
    }
    
    p {
      font-size: 0.875rem;
      line-height: 1.35rem;
    }
  }
`;