// 기본적으로 변수, 속성, 매개변수, 리턴값에 타입이 붙었다고 생각하면 된다.
const a1 = '5';
const b1 = 5;
const c1 = true;
const d1 = undefined;
const e1 = null;

/* Element, ! */
const head: Element = document.querySelector('#head')!; // ! : null이나 undefined가 아니라고 보증하는 방식(비추천)
// !대신 if문을 사용해서 에러코드가 실행되지 않게 해준다.
const footer: Element = document.querySelector('#footer');
if (footer) {
  footer.innerHTML = 'hello';
}

// 대문자로 타이핑 시 지옥~
const aa1: string = 'hello';
const bb1: String = 'hell';
// 타입스크립트의 올바른 추론에도 괜한 타이핑으로 정확한 타입을 더 넓은 범위의 부정확한 타입으로 변경할 수도 있다.
// const a: string = '5';
// const b: number = 5;
// const c: boolean = true;
// const d: undefined = undefined;
// const e: null = null;

// 정확한 타이핑 방법
const f: true = true; // 무조건 true만 받겠다.
const g: 5 = 5; // 고정된 원시값만 받겠다.

const x: any = '모든 타입 작성 가능하지만 이러면 자바스크립트가 된다~~';
const y: symbol = Symbol.for('abc');
const z: bigint = 1000000n;

/**************************************************/
/* 함수 타이핑 방법 */
// 타입을 지웠을 경우에도 완벽한 자바스크립트 코드여야 된다.

// 1.일반 함수선언 시 타이핑
// 매개변수는 타이핑을 해주면 타입스크립트가 리턴값을 올바르게 추론한다.
function add(x: number, y: number): number {
  return x + y;
}
const result1 = add(1, 2);

// 2.화살표 함수의 경우 타이핑
const addArr: (x: number, y: number) => number = (x, y) => x + y;

// 3.타입 별칭도 가능
type Type = (x: number, y: number) => number;
const addArrType: Type = (x, y) => x + y;

// 4.인터페이스를 통해서 함수의 타입을 정해주는 방법 (중복선언이 가능하지만 선언할때마다 합쳐진다.)
interface Add {
  (x: number, y: number): Number;
}
interface Add {
  (x: number, y: number): Number;
}

// 5.위에는 타입만 정해놓고 아랫줄에 함수의 선언만 해서 사용 (사용 불가?)
function plus(a: number, b: number): number;
function plus(a, b) {
  return a + b;
}

/* 객체 타이핑 방법 */
// 객체의 변수에 타이핑
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

/* 컴파일 시 js파일에서 사라지는 것들 */
type Delete = () => number; // 화살표 타입
interface Minus {} // interface
Array<string>; // 제너릭

/* 타입을 강제로 바꾸는 방법 as */
let hello = 123;
hello = 'hello' as unknown as number;
