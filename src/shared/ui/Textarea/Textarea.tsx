import cn from 'classnames';
import React, {
  DetailedHTMLProps,
  FC,
  TextareaHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import styles from './styles.module.scss';

interface Props
  extends Omit<
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    'onChange'
  > {
  onChange?: (value: string) => void;
  error?: string;
  containerClassName?: string;
}

export const Textarea: FC<Props> = ({
  className,
  ref,
  value,
  onChange,
  error,
  containerClassName,
  ...props
}) => {
  const innerRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => innerRef.current as HTMLTextAreaElement);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    onChange?.(e.target.value);
  };

  // autosize
  useEffect(() => {
    if (innerRef.current) {
      innerRef.current.style.height = '1px';
      innerRef.current.style.height = `${innerRef?.current?.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className={cn(styles.TextareaContainer, containerClassName)}>
      <textarea
        ref={innerRef}
        value={value}
        onChange={onChangeHandler}
        className={cn(styles.Textarea, { [styles.Error]: !!error }, className)}
        {...props}
      />
      {error && <span className={styles.ErrorMessage}>{error}</span>}
    </div>
  );
};
