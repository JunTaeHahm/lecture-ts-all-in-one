/* 배열 타이핑 방법 */
const arr31: string[] = ['123', '456']; //  배열이름 뒤에 타이핑
const arr32: Array<number> = [123, 456]; // 제네릭 방식
const arr33: [number, number, string] = [123, 456, 'hello']; // 튜플(개수와 타입을 정해준다)

/* enum */
/* 컴파일 시 남지 않음 */
const enum EDirection {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

const a3 = EDirection.Up; // a3 === 0
const b3 = EDirection.Up; // b3 === 1

function walk(dir: EDirection) {} // dir: enum의 값 중에 하나를 반드시 사용해야 함

/* 일반 객체 방식으로 사용하는 것을 추천 */
/* 컴파일 시 남음 */
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const; // as const를 빼면 객체의 타입을 잘못 추론함 Up:number...

// 객체의 값을 타입으로 사용하고 싶은경우 typeof를 추가하고, keyof로 키값만 가져와 타이핑 할 수 있다.
const obj31 = { a: '123', b: 'hello', c: 'world' };
type Key31 = keyof typeof obj31;

// as const를 추가해서 밸류만 가져와서 타이핑 할 수 있다.
const obj32 = { a: '123', b: 'hello', c: 'world' } as const;
type Key32 = typeof obj32[keyof typeof obj32];
