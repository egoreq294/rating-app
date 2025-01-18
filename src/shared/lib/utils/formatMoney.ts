export const formatMoney = (value: number | string): string => {
  const strValue = typeof value === 'number' ? value.toString() : value;

  return strValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');
};
