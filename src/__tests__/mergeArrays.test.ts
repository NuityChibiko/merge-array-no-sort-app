import { merge } from "../mergeArrays";

test("merges three collections into a sorted array", () => {
  const collection_1 = [10, 9, 5, 1];
  const collection_2 = [0, 2, 6, 11];
  const collection_3 = [3, 4, 8];

  expect(merge(collection_1, collection_2, collection_3)).toEqual([
    0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11,
  ]);
});
