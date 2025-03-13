import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Incredible service! My laptop was running slow, and they optimized it perfectly. Now, it feels brand new! Quick and efficient, I highly recommend them.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      "I had a cracked phone screen, and they replaced it in record time. The quality is amazing, and the staff was super friendly. Definitely my go-to repair service!",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "I thought I had lost all my important files, but they recovered everything! Their data recovery service is truly a lifesaver. Very professional and reliable.",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "Their customer service is top-notch! They diagnosed and fixed my PC issue in no time, and I haven't faced any problems since. Highly recommended!",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Had an issue with my gaming console, and they repaired it quickly. The performance is smoother than ever! I’m super satisfied with the service.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Join Thousands of', 'Happy Customers'];
