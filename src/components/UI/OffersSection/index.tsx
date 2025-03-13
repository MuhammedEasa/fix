'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  Header,
  OffersGrid,
  BottomOffersGrid,
  OfferCard,
  LargeOfferCard,
  ImageContainer,
  TextContainer,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrases,
  desktopParagraphPhrase,
  mobileParagraphPhrase,
  offers,
} from './constants';

const OffersSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrases} tag="h1" />

          {isMobile ? (
            <MaskText phrases={mobileParagraphPhrase} tag="p" />
          ) : (
            <MaskText phrases={desktopParagraphPhrase} tag="p" />
          )}
        </Header>
        
        {/* First 6 offers in a 3-column grid */}
        <OffersGrid>
          {offers.slice(0, 6).map((offer, i) => (
            <OfferCard key={i}>
              <ImageContainer>
                <Image 
                  src={offer.illustration} 
                  alt={offer.title}
                  width={isMobile ? 150 : 200}
                  height={isMobile ? 150 : 200}
                  priority={i < 4}
                  style={{ objectFit: 'contain' }}
                />
              </ImageContainer>
              <TextContainer>
                <MaskText phrases={[offer.title]} tag="h2" />
                <p>{offer.details}</p>
              </TextContainer>
            </OfferCard>
          ))}
        </OffersGrid>
        
        {/* Last 4 offers in a 2x2 grid with larger cards */}
        <BottomOffersGrid>
          {offers.slice(6).map((offer, i) => (
            <LargeOfferCard key={i}>
              <ImageContainer>
                <Image 
                  src={offer.illustration} 
                  alt={offer.title}
                  width={isMobile ? 180 : 240}
                  height={isMobile ? 180 : 240}
                  style={{ objectFit: 'contain' }}
                />
              </ImageContainer>
              <TextContainer>
                <MaskText phrases={[offer.title]} tag="h2" />
                <p>{offer.details}</p>
              </TextContainer>
            </LargeOfferCard>
          ))}
        </BottomOffersGrid>
      </Inner>
    </Wrapper>
  );
};

export default OffersSection;