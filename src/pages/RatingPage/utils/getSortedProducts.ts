import { ProductModel } from '@shared/types/product';
import { SortDirection } from '@shared/ui/Sort/Sort';
import { SortEnum } from '../RatingPage';

interface Args {
  products: ProductModel[];
  sort: SortEnum;
  direction: SortDirection;
}

export const getSortedProducts = ({
  products,
  sort,
  direction,
}: Args): ProductModel[] => {
  if (sort === SortEnum.Price) {
    return products.sort((a, b) =>
      direction === 'asc' ? a.price - b.price : b.price - a.price,
    );
  }

  return products.sort((a, b) =>
    direction === 'asc'
      ? a.initialRating - b.initialRating
      : b.initialRating - a.initialRating,
  );
};
