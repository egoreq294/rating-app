import React, { memo } from 'react';
import { forwardRef, ReactElement, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>,
): ReactElement => (
  <svg
    width="24"
    height="23"
    viewBox="0 0 24 23"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M15.09 4.16813L6.92174 8.08845L3.67499 6.59091L11.6992 2.87659C11.8792 2.79081 12.0952 2.79081 12.2842 2.87659L15.09 4.16813Z"
      fill="currentColor"
    />
    <path
      d="M20.316 6.59094L12.0045 10.4508L8.89202 9.01302L8.44202 8.79858L16.6193 4.87897L17.0693 5.0927L20.316 6.59094Z"
      fill="currentColor"
    />
    <path
      d="M11.3385 11.563L11.3295 19.6856L3.369 15.7913C3.144 15.6802 3 15.4573 3 15.2176V7.70319L6.3735 9.26119V12.0003C6.3735 12.3512 6.6795 12.6423 7.0485 12.6423C7.4175 12.6423 7.7235 12.3512 7.7235 12.0003V9.89465L8.1735 10.1L11.3385 11.563Z"
      fill="currentColor"
    />
    <path
      d="M20.991 7.71161L12.6885 11.5546L12.6795 19.6771L21 15.6043L20.991 7.71161Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const Product = memo(ForwardRef);
