'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.footer`
  padding-bottom: 3.5rem;
`;

export const Inner = styled.main`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }
`;

export const FooterLogo = styled.div`
  @media (max-width: 768px) {
    width: 13.2rem;
    height: 5.6rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const FooterMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.75rem 0 3.25rem;
  border-top: 0.0625rem solid #3d3d3d;
  gap: 3.25rem;
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3.5rem;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--link-color);
    max-width: 19.5rem;
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.875rem;
      color: var(--link-color);
    }
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--link-color);
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #afafaf;
    }
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputField = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #3d3d3d;
  background-color: transparent;
  color: var(--link-color);
  font-size: 1rem;
  width: 100%;
  min-width: 18rem;

  &::placeholder {
    color: #afafaf;
  }

  &:focus {
    outline: none;
    border-color: #ffffff;
  }

  @media (max-width: 768px) {
    min-width: auto;
  }
`;

export const SendButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  color: #000000;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  align-self: flex-start;

  &:hover {
    background-color: #efefef;
  }
`;

export const FooterNavigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem 3.75rem;
  }
`;

export const GridColumn = styled.div`
  display: flex;
  min-width: 12.5rem;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    min-width: auto;
  }
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      background-color: #efefef;
      left: 0;
      bottom: -5px;
      transform: scaleX(0);
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform-origin: center;
    }

    &:hover {
      &::after {
        width: 100%;
        transform: scaleX(1);
      }
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: var(--link-color);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    p {
      font-size: 0.875rem;
      color: var(--link-color);
    }
  }
`;

export const CopyRight = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;