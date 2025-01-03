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
      d="M8.33658 7.65429C7.88664 7.27628 7.888 6.61853 8.3395 6.24213C8.72807 5.91819 9.31657 5.91943 9.70356 6.24501L15.6266 11.2281C16.1252 11.6475 16.1243 12.3764 15.6249 12.7949L9.7032 17.7562C9.31378 18.0824 8.72222 18.0811 8.33449 17.7531C7.88767 17.3751 7.88914 16.7206 8.33764 16.3444L12.5793 12.7861C13.0785 12.3673 13.0788 11.6384 12.5799 11.2193L8.33658 7.65429Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const ChevronRight = memo(ForwardRef);
