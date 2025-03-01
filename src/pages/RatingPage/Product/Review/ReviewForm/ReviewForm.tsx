import React, { FC, ReactElement, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { sendReview } from '@entities/Review/api/review';
import { Button, Icon, Rating, Typography } from '@shared/ui';
import { IconButton } from '@shared/ui/IconButton';
import { Input } from '@shared/ui/Input';
import { Textarea } from '@shared/ui/Textarea';
import { REVIEW_FORM_DEFAULT_VALUES } from './constants';
import { ReviewFormState } from './types';

import styles from './styles.module.scss';

interface Props {
  productId: string;
  isOpened: boolean;
}

export const ReviewForm: FC<Props> = ({ productId, isOpened }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const { control, handleSubmit, formState, reset, clearErrors } =
    useForm<ReviewFormState>({
      defaultValues: REVIEW_FORM_DEFAULT_VALUES,
    });

  const onSubmit = async (values: ReviewFormState): Promise<void> => {
    setError('');
    setIsSuccess(false);

    const { error } = await sendReview({ ...values, productId });

    if (error) {
      console.log(error);
      setError(error);
      return;
    }

    setIsSuccess(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.ReviewForm}>
        <Controller
          name="name"
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field }): ReactElement => (
            <Input
              {...field}
              containerClassName={styles.InputContainer}
              placeholder="Имя"
              error={formState.errors.name?.message}
              tabIndex={isOpened ? 0 : -1}
              aria-invalid={!!formState.errors.name?.message}
            />
          )}
        />
        <Controller
          name="title"
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field }): ReactElement => (
            <Input
              {...field}
              containerClassName={styles.InputContainer}
              placeholder="Заголовок отзыва"
              error={formState.errors.title?.message}
              tabIndex={isOpened ? 0 : -1}
              aria-invalid={!!formState.errors.title?.message}
            />
          )}
        />
        <div className={styles.Rating}>
          <Typography variant="text14" component="span">
            Оценка:
          </Typography>
          <Controller
            name="rating"
            control={control}
            render={({ field }): ReactElement => (
              <Rating {...field} tabIndex={isOpened ? 0 : -1} />
            )}
          />
        </div>
        <Controller
          name="description"
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field }): ReactElement => (
            <Textarea
              {...field}
              containerClassName={styles.TextareaContainer}
              className={styles.Textarea}
              placeholder="Текст отзыва"
              error={formState.errors.description?.message}
              tabIndex={isOpened ? 0 : -1}
              aria-label="Текст отзыва"
              aria-invalid={!!formState.errors.description?.message}
            />
          )}
        />
        <div className={styles.Footer}>
          <Button
            variant="Primary"
            type="submit"
            tabIndex={isOpened ? 0 : -1}
            onClick={() => {
              clearErrors();
            }}
          >
            Отправить
          </Button>
          <Typography variant="text14" component="span">
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </Typography>
        </div>
      </div>
      {isSuccess && (
        <div className={styles.Success} role="alert">
          <IconButton
            variant="Ghost"
            size="S"
            className={styles.CloseButton}
            aria-label="Закрыть уведомление"
            onClick={() => {
              setIsSuccess(false);
            }}
          >
            <Icon name="Close" width={20} height={20} />
          </IconButton>
          <Typography variant="textBold14">Ваш отзыв отправлен</Typography>
          <Typography variant="text14">
            Спасибо, ваш отзыв будет опубликован после проверки
          </Typography>
        </div>
      )}
      {error && (
        <div className={styles.Error} role="alert">
          <IconButton
            variant="Ghost"
            size="S"
            className={styles.CloseButton}
            aria-label="Закрыть уведомление"
            onClick={() => {
              setError('');
            }}
          >
            <Icon name="Close" width={20} height={20} />
          </IconButton>
          <Typography variant="textBold14">Что-то пошло нет так</Typography>
          <Typography variant="text14">{error}</Typography>
        </div>
      )}
    </form>
  );
};
