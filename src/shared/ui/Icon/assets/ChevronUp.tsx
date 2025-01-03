import React, { memo } from 'react';
import { forwardRef, ReactElement, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>,
): ReactElement => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M7.65429 15.6634C7.27628 16.1134 6.61853 16.112 6.24213 15.6605C5.91819 15.2719 5.91943 14.6834 6.24501 14.2964L11.2281 8.37338C11.6475 7.87485 12.3764 7.87566 12.7949 8.37512L17.7562 14.2968C18.0824 14.6862 18.0811 15.2778 17.7531 15.6655C17.3751 16.1123 16.7206 16.1109 16.3444 15.6624L12.7861 11.4207C12.3673 10.9215 11.6384 10.9212 11.2193 11.4201L7.65429 15.6634Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const ChevronUp = memo(ForwardRef);
