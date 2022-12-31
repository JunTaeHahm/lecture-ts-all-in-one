/* 좁은타입을 넓은타입에 넣는건 가능하지만 반대로 널은타입을 좁은타입에 넣는건 불가능 */

type A81 = string | number; // 넓은 타입
type B81 = string; // 좁은타입

type AB8 = A81 | B81;

type C81 = string & number; // never

type D81 = A81 & B81; // { name : string , age : number }

/* 객체는 구체적일 수록 좁은 타입 */
type A82 = { name: string };
type B82 = { age: number };

type C82 = { name: string; age: number };

