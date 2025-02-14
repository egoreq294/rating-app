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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.2601 11.9999L19.7387 18.4813C20.0871 18.8288 20.0871 19.3925 19.7387 19.74C19.5655 19.9133 19.3374 20 19.1094 20C18.8813 20 18.6533 19.9133 18.4791 19.74L11.9996 13.2586L5.5209 19.74C5.34762 19.9133 5.11958 20 4.89153 20C4.66349 20 4.43544 19.9133 4.26126 19.74C3.91291 19.3925 3.91291 18.8288 4.26126 18.4813L10.7399 11.9999L4.26126 5.5194C3.91291 5.17188 3.91291 4.60816 4.26126 4.26064C4.60962 3.91312 5.17345 3.91312 5.5209 4.26064L11.9996 10.7411L18.4782 4.26064C18.8266 3.91312 19.3904 3.91312 19.7387 4.26064C20.0862 4.60816 20.0862 5.17188 19.7387 5.5194L13.2601 11.9999Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const Close = memo(ForwardRef);
