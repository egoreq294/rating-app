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
}

export const ReviewForm: FC<Props> = ({ productId }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const { control, handleSubmit, formState, reset } = useForm<ReviewFormState>({
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
            render={({ field }): ReactElement => <Rating {...field} />}
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
            />
          )}
        />
        <div className={styles.Footer}>
          <Button variant="Primary" type="submit">
            Отправить
          </Button>
          <Typography variant="text14" component="span">
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </Typography>
        </div>
      </div>
      {isSuccess && (
        <div className={styles.Success}>
          <IconButton
            variant="Ghost"
            size="S"
            className={styles.CloseButton}
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
        <div className={styles.Error}>
          <IconButton
            variant="Ghost"
            size="S"
            className={styles.CloseButton}
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
