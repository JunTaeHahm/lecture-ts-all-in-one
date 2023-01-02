/* 공변성과 반공변성 */

/* 리턴 값 예제 */
// 좁은타입 -> 넓은 타입
// 리턴 값: 좁은 타입에서 넓은 타입으로 대입 가능하다. (매개변수와 반대)
function a30(x: string): number { // 리턴 타입 1개
  return +x;
}
a30('1'); // 1

type B30 = (x: string) => number | string; // 리턴 타입 2개
const b30: B30 = a30;

/* 매개변수 예제 */
// 넓은 타입 -> 좁은 타입
// 매개변수: 넓은 타입에서 좁은 타입으로 대입이 가능하다. (리턴 값과 반대)
function c30(x: string | number): number { // 매개변수 타입 2개
  return 0;
}
type D30 = (x: string) => number; // 매개변수 타입 1개
const d30: D30 = c30;
