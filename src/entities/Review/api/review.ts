import { API } from '@shared/api';
import { SendReviewResult } from '../model/types';

interface SendReviewArgs {
  name: string;
  title: string;
  description: string;
  rating: number;
  productId: string;
}

export const sendReview = async (
  args: SendReviewArgs,
): Promise<SendReviewResult> => {
  const response = await fetch(API.review.createDemo, {
    method: 'POST',
    body: JSON.stringify(args),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });

  const result = await response.json();

  if (!response.ok) {
    return {
      data: null,
      error:
        result?.message?.[0] ||
        'Попробуйте обновить страницу или попробуйте позже',
    };
  }

  return { data: result, error: undefined };
};
