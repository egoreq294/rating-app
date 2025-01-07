import { API } from '@shared/api';
import { MenuItem } from '../model/types';

export const getMenu = async (firstCategory: number): Promise<MenuItem[]> => {
  const res = await fetch(API.topPage.find, {
    method: 'POST',
    body: JSON.stringify({ firstCategory }),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });

  return res.json();
};
