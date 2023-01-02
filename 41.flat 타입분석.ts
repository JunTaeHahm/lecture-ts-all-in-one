/* flat 타입 분석 */

/**
  type FlatArray<Arr, Depth extends number> = {
    "done": Arr,
    "recur": Arr extends ReadonlyArray<infer InnerArr>
        ? FlatArray<InnerArr, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth]>
        : Arr
  }[Depth extends -1 ? "done" : "recur"];
*/

// 타입을 number로 추론함
const a41 = [1, 2, 3, [1, 2], [[1], [2]]].flat(); // [1, 2, 3, 1, 2, [1], [2]];
const b41 = [1, 2, 3, [1, 2]].flat(); // [1, 2, 3, 1, 2];


const c41 = [1, 2, 3, [1, 2], [[1], [2]]].flat(2); // [1, 2, 3, 1, 2, 1, 2];
/**
 * 고차원 배열에서 FlatArray를 돌면서 배열차수를 하나씩 낮추는 방식
 flat<A, D extends number = 1>(
   this: A,
   depth?: D
   ): FlatArray<A, D>[]
   */

/**
  1. FlatArray<(number[] / number[][] / number[][][]), 2>[]
  2. FlatArray<(number / number[] / number[]][]), 1>[]
  3. FlatArray<(number / number[]), 0>[]
  4. FlatArray<number, -1>[]
  5. number[]
*/

