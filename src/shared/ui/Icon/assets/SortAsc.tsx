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
    <rect x="4" y="16" width="12" height="2" fill="currentColor" />
    <rect x="4" y="12" width="8" height="2" fill="currentColor" />
    <rect x="4" y="8" width="4" height="2" fill="currentColor" />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const SortAsc = memo(ForwardRef);
