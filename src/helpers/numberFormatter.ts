export const numberFormatter = (number_: number | undefined): string | number => {
  if (!number_) {
    return '';
  }
  const minus = number_ < 0 ? '-' : '';
  number_ = Math.abs(number_);
  if (number_ > 999 && number_ < 1_000_000) {
    return `${minus}${(number_ / 1000).toFixed(1)}K`;
  }
  if (number_ > 1_000_000) {
    return `${minus}${(number_ / 1_000_000).toFixed(1)}M`;
  }

  return +`${minus}${number_}`;
};
