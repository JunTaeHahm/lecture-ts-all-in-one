/* map 직접 타입 생성 */
// 타입을 생성해놓고 여러가지 실전 예시로 타입을 검증해본다.
// 내가 원하는 코드를 통해서 타입을 생성하기

interface Arr<T> {
  map<S>(callback: (v: T, i: number) => S): S[];
}

const a28: Arr<number> = [1, 2, 3];

const b28 = a28.map((v, i) => v + 1); // [2, 3, 4]
const c28 = a28.map((v, i) => v.toString()); // ['2', '3', '4'] string[]
const d28 = a28.map((v, i) => v % 2 === 0); // [false, true, false] boolean[]

const e28: Arr<string> = ['1', '2', '3'];
const f28 = e28.map((v) => +v);
