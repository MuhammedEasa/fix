'use client';
import Image from 'next/image';
// import big_banner from '../../../../public/images/big_banner.png';
import big_banner_new from '../../../../public/images/big-banner-new.jpg';
// import featured_mobile_banner from '../../../../public/images/featured_mobile_banner.png';
import mobile_banner_new from '../../../../public/images/mobile-banner-new.jpg';
import ParallaxText from '@/components/Common/ParallaxImages';
// import companies_image from '../../../../public/images/companies.png';
import companies_image from '../../../../public/images/mobile-companies-1.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';
export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image
                src={mobile_banner_new}
                alt="featured_mobile_banner"
                fill
              />
            ) : (
              <Image src={big_banner_new} alt="big_banner" fill />
            )}
          </Div>
        </ImageContainer>
        <h2>Featured In & Trusted By Leading Tech Brands</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image src={companies_image} alt="comapanies" />
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
