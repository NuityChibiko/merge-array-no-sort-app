export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // Reverse collection_1 as it's sorted from max to min
  collection_1.reverse();
  let index1 = 0,
    index2 = 0,
    index3 = 0;
  const result: number[] = [];

  while (
    index1 < collection_1.length ||
    index2 < collection_2.length ||
    index3 < collection_3.length
  ) {
    const val1 =
      index1 < collection_1.length
        ? collection_1[index1]
        : Number.POSITIVE_INFINITY;
    const val2 =
      index2 < collection_2.length
        ? collection_2[index2]
        : Number.POSITIVE_INFINITY;
    const val3 =
      index3 < collection_3.length
        ? collection_3[index3]
        : Number.POSITIVE_INFINITY;

    const min = Math.min(val1, val2, val3);
    if (min === val1) {
      result.push(val1);
      index1++;
    } else if (min === val2) {
      result.push(val2);
      index2++;
    } else {
      result.push(val3);
      index3++;
    }
  }

  return result;
}
