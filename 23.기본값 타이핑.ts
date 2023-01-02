/* 기본값 타이핑 */
const a23 = (b = 3, c = 5) => {
  return 'a';
};

/* 타입 지정 */
const b23 = (b: number = 3, c: number = 5) => {
  return 'b';
};

/* 객체의 타입 지정할 경우 */
const c23 = (b: { hello: 'world' } = { hello: 'world' }) => {
  return 'c';
};

/* react에서 타입스크립트 화살표 함수 사용 할 시 */
// <T>로 사용할 경우 jsx문법의 태그와 헷갈릴 수 있음
// 기본 값            <T= unknown>
// extends 사용      <T extends unknown>
// 깨알 팁(사용 지양)   <T,>
const d23 = <T = unknown>(x: T, y: T) => ({ x, y });
const result23 = d23(1, 2);
