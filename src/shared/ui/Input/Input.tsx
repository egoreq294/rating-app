import cn from 'classnames';
import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface Props
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange'
  > {
  onChange: (value: string) => void;
  error?: string;
  containerClassName?: string;
}

export const Input: FC<Props> = ({
  className,
  onChange,
  error,
  containerClassName,
  ...props
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
  };

  return (
    <div className={cn(styles.InputContainer, containerClassName)}>
      <input
        className={cn(styles.Input, { [styles.Error]: !!error }, className)}
        onChange={onChangeHandler}
        {...props}
      />
      {error && (
        <span role="alert" className={styles.ErrorMessage}>
          {error}
        </span>
      )}
    </div>
  );
};
