import { memo, SVGProps } from 'react';

const HorizontalGridLinesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 530 218' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.736328 0.21106H529.194' stroke='#EEF0F2' />
    <path d='M0.736328 54.4573H529.194' stroke='#EEF0F2' />
    <path d='M0.736328 108.703H529.194' stroke='#EEF0F2' />
    <path d='M0.736328 162.95H529.194' stroke='#EEF0F2' />
    <path d='M0.736328 217.196H529.194' stroke='#EEF0F2' />
  </svg>
);

const Memo = memo(HorizontalGridLinesIcon);
export { Memo as HorizontalGridLinesIcon };
