import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["Introducing Our", 'Expert Repair Services'];
export const desktopParagraphPhrase = [
  "Discover our latest tech repair services. We offer advanced solutions to fix your devices.",
  'From screen replacements to data recovery, we have the expertise to restore your gadgets.',
];

// For mobile
export const mobileHeaderPhrase = ["Introducing Our", 'Expert Repair Services'];
export const mobileParagraphPhrase = [
  "Discover our latest tech repair services. We offer advanced solutions to fix your devices.",
  "From screen replacements to data recovery, we have the expertise to restore your gadgets.",
];

export const edges = [
  {
    point: 'Screen Replacement',
    details:
      'Cracked screen? We offer quick and reliable screen replacement services for your phone, laptop, and tablet.',
      icon: ic_document_duplicate,
    },
  {
    point: 'Software Optimization',
    details:
      'Boost your device’s performance with our software troubleshooting and optimization services.',
      icon: ic_identification,
    },
  {
    point: 'Data Recovery',
    details:
      'Lost your important data? Our data recovery services can help you recover your files from damaged devices.',
      icon: ic_lock_closed,
    },
];
