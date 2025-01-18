import { API } from '@shared/api';
import { TopPageModel } from '@shared/types/page';

export const getPage = async (alias: string): Promise<TopPageModel | null> => {
  const res = await fetch(API.topPage.byAlias + `/${alias}`, {
    method: 'GET',
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};
