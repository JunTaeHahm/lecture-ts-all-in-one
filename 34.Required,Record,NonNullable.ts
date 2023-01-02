interface Profile34 {
  name?: string;
  age?: number;
  married?: boolean;
}
type Name = Profile34['name'];

//  -? , -readonly 등 원하는 옵션을 뺄 수 있는 옵션도 있다.

/* Required */
// 키를 가져올 때옵셔널인 ?를 떼고 가져오기
// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };
const choi1: Required<Profile34> = {
  name: 'choi',
  age: 28,
  married: false,
};

/* Readonly */
// 키를 가져올 때옵셔널인 ?를 떼고 가져오기
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };
const choi2: Readonly<Profile34> = {
  name: 'choi',
  age: 28,
  married: false,
};

/* Reacord */
// 간단하게 원하는 키와 값의 타입을 지정해줄 수 있음
// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };
interface Obj {
  [key: string]: number;
}

const a34: Record<string, number> = { a: 3, b: 5, c: 7 }; // 위와 동일한 코드

/* NonNullable */

// type NonNullable<T> = T extends null | undefined ? never : T;
type A34 = string | null | undefined | number | symbol | boolean;
type B34 = NonNullable<A34>; // null과 undefined를 제외하고 가져온다
