'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Edge, Edges, Title } from '../FinancialFreedom/styles';
import damaged_phone from '../../../../public/images/damaged_phone.png';
import damaged_laptop from '../../../../public/images/damaged_laptop.png';
import damaged_ipad from '../../../../public/images/damaged_ipad.png';
import {
  Wrapper,
  Inner,
  Header,
  HeaderMainText,
  CardsContainer,
  LeftImage,
  MiddleImage,
  RightImage,
} from './styles';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';

const IntroSection = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h3>Introducing</h3>
          <HeaderMainText>
            {isMobile ? (
              <>
                <MaskText phrases={mobileHeaderPhrase} tag="h1" />
                <MaskText phrases={mobileParagraphPhrase} tag="p" />
              </>
            ) : (
              <>
                <MaskText phrases={desktopHeaderPhrase} tag="h1" />
                <MaskText phrases={desktopParagraphPhrase} tag="p" />
              </>
            )}
          </HeaderMainText>
        </Header>
        <CardsContainer>
          <LeftImage
            src={damaged_phone}
            alt="damaged phone"
            className="bounce-animation"
          />
          <MiddleImage
            src={damaged_laptop}
            alt="damaged laptop"
            className="bounce-animation"
          />
          <RightImage
            src={damaged_ipad}
            alt="damaged ipad"
            className="bounce-animation"
          />
        </CardsContainer>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                <Image src={edge.icon} alt="icon" />
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
      </Inner>
    </Wrapper>
  );
};

export default IntroSection;