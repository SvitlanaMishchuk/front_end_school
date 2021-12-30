export const numberFormatter = (number_: number): string | number => {
  if (number_ > 999 && number_ < 1_000_000) {
    return `${(number_ / 1000).toFixed(1)}K`;
  }
  if (number_ > 1_000_000) {
    return `${(number_ / 1_000_000).toFixed(1)}M`;
  }

  return number_;
};
