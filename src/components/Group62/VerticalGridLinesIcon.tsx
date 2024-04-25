import { memo, SVGProps } from 'react';

const VerticalGridLinesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 530 218' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0.736328 0.21106V217.196' stroke='#EEF0F2' />
    <path d='M59.4539 0.21106V217.196' stroke='#EEF0F2' />
    <path d='M118.171 0.21106V217.196' stroke='#EEF0F2' />
    <path d='M176.889 0.21106V217.196' stroke='#EEF0F2' />
    <path d='M235.606 0.21106V217.196' stroke='#EEF0F2' />
    <path d='M294.324 0.21106V217.196' stroke='#EEF0F2' />
    <path d='M353.042 0.21106V217.196' stroke='#EEF0F2' />
    <path d='M411.759 0.21106V217.196' stroke='#EEF0F2' />
    <path d='M470.476 0.21106V217.196' stroke='#EEF0F2' />
    <path d='M529.194 0.21106V217.196' stroke='#EEF0F2' />
  </svg>
);

const Memo = memo(VerticalGridLinesIcon);
export { Memo as VerticalGridLinesIcon };
