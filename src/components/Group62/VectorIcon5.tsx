import { memo, SVGProps } from 'react';

const VectorIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.204739 0.266554C-0.0682472 0.561095 -0.0682472 1.03745 0.204739 1.33126L5.98925 7.55879C6.11675 7.69819 6.27022 7.80919 6.44031 7.88504C6.6104 7.96089 6.79355 8 6.97865 8C7.16374 8 7.3469 7.96089 7.51699 7.88504C7.68708 7.80919 7.84054 7.69819 7.96805 7.55879L13.7953 1.28617C13.9255 1.14381 13.9987 0.955292 14 0.758893C14.0013 0.562494 13.9306 0.372944 13.8023 0.228737C13.7389 0.1573 13.6621 0.100141 13.5766 0.060799C13.4911 0.0214574 13.3987 0.000771066 13.3052 2.11185e-05C13.2117 -0.000728829 13.119 0.0184735 13.033 0.0564391C12.9469 0.0944047 12.8692 0.150325 12.8048 0.220737L7.47317 5.96173C7.40941 6.03148 7.33266 6.08703 7.24758 6.12499C7.16251 6.16295 7.07089 6.18252 6.9783 6.18252C6.88571 6.18252 6.79409 6.16295 6.70901 6.12499C6.62393 6.08703 6.54718 6.03148 6.48342 5.96173L1.19379 0.266554C1.13009 0.196817 1.0534 0.141283 0.96838 0.103332C0.883361 0.0653823 0.791798 0.0458112 0.699265 0.0458112C0.606732 0.0458112 0.515167 0.0653823 0.430148 0.103332C0.345129 0.141283 0.268436 0.196817 0.204739 0.266554Z'
      fill='#6CBA49'
    />
  </svg>
);

const Memo = memo(VectorIcon5);
export { Memo as VectorIcon5 };
