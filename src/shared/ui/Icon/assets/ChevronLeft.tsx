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
      d="M15.6634 16.3457C16.1134 16.7237 16.112 17.3815 15.6605 17.7579C15.2719 18.0818 14.6834 18.0806 14.2964 17.755L8.37338 12.7719C7.87485 12.3525 7.87566 11.6236 8.37512 11.2051L14.2968 6.24383C14.6862 5.91756 15.2778 5.91888 15.6655 6.24688C16.1123 6.62486 16.1109 7.27938 15.6624 7.65563L11.4207 11.2139C10.9215 11.6327 10.9212 12.3616 11.4201 12.7807L15.6634 16.3457Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const ChevronLeft = memo(ForwardRef);
