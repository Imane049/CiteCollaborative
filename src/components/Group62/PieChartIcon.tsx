import { memo, SVGProps } from 'react';

const PieChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 188 188' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_213_261)'>
      <path
        d='M94 0C110.5 1.96766e-07 126.71 4.34339 141 12.5936C155.29 20.8438 167.156 32.7102 175.406 47L94 94L94 0Z'
        fill='#FB8521'
        stroke='white'
        strokeWidth={4}
      />
      <path
        d='M175.406 47C183.657 61.2898 188 77.4996 188 94H94L175.406 47Z'
        fill='#FBAF1E'
        stroke='white'
        strokeWidth={4}
      />
      <path
        d='M188 94C188 106.344 185.569 118.568 180.845 129.972C176.121 141.377 169.197 151.739 160.468 160.468C151.739 169.197 141.377 176.121 129.972 180.845C118.568 185.569 106.344 188 94 188L94 94H188Z'
        fill='#FCC700'
        stroke='white'
        strokeWidth={4}
      />
      <path
        d='M94 188C81.6557 188 69.4324 185.569 58.0278 180.845C46.6231 176.121 36.2607 169.197 27.532 160.468C18.8033 151.739 11.8793 141.377 7.15532 129.972C2.43138 118.568 -1.07917e-06 106.344 0 94L94 94L94 188Z'
        fill='#2363C3'
        stroke='white'
        strokeWidth={4}
      />
      <path
        d='M0 94C1.44251e-06 77.4995 4.34339 61.2898 12.5936 47L94 94L0 94Z'
        fill='#0081BD'
        stroke='white'
        strokeWidth={4}
      />
      <path
        d='M12.5936 47C20.8438 32.7102 32.7102 20.8438 47 12.5936C61.2898 4.34339 77.4996 -1.96766e-07 94 0L94 94L12.5936 47Z'
        fill='#FCC700'
        stroke='white'
        strokeWidth={4}
      />
    </g>
    <defs>
      <clipPath id='clip0_213_261'>
        <rect width={188} height={188} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(PieChartIcon);
export { Memo as PieChartIcon };
