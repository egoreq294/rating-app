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
      d="M16.3457 8.33658C16.7237 7.88664 17.3815 7.888 17.7579 8.3395C18.0818 8.72807 18.0806 9.31657 17.755 9.70356L12.7719 15.6266C12.3525 16.1252 11.6236 16.1243 11.2051 15.6249L6.24383 9.7032C5.91756 9.31378 5.91888 8.72222 6.24688 8.33449C6.62486 7.88767 7.27938 7.88914 7.65563 8.33764L11.2139 12.5793C11.6327 13.0785 12.3616 13.0788 12.7807 12.5799L16.3457 8.33658Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const ChevronDown = memo(ForwardRef);
