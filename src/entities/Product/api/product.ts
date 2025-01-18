import { API } from '@shared/api';
import { ProductModel } from '@shared/types/product';

export const getProducts = async (
  category: string,
  limit: number,
): Promise<ProductModel[] | null> => {
  const res = await fetch(API.product.find, {
    method: 'POST',
    body: JSON.stringify({ category, limit }),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};
