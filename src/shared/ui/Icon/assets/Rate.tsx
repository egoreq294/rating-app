import React, { memo } from 'react';
import { forwardRef, ReactElement, Ref, SVGProps } from 'react';

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref?: Ref<SVGSVGElement>,
): ReactElement => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <circle cx="10" cy="10" r="10" fill="currentColor" />
    <path
      d="M15.9686 8.53412C15.8896 8.28056 15.6741 8.10105 15.4201 8.07707L11.9561 7.7489L10.5871 4.40432C10.486 4.15859 10.256 4 10 4C9.74402 4 9.51395 4.15859 9.41351 4.40432L8.0445 7.7489L4.57991 8.07707C4.32594 8.10152 4.11088 8.28104 4.03141 8.53412C3.9524 8.78768 4.02537 9.06579 4.21745 9.24157L6.83599 11.6376L6.06391 15.186C6.00742 15.4469 6.10447 15.7167 6.31193 15.8732C6.42345 15.9578 6.55446 16 6.68593 16C6.79891 16 6.91198 15.9687 7.01296 15.9056L10 14.0419L12.9865 15.9056C13.2056 16.0422 13.4811 16.0297 13.6881 15.8732C13.8955 15.7167 13.9926 15.4469 13.9361 15.186L13.164 11.6376L15.7826 9.24157C15.9746 9.06579 16.0476 8.78825 15.9686 8.53412Z"
      fill="white"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
export const Rate = memo(ForwardRef);
