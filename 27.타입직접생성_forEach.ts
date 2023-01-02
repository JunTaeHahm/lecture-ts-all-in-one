/* forEach 직접 타입 생성 */
// 타입을 생성해놓고 여러가지 실전 예시로 타입을 검증해본다.
// 내가 원하는 코드를 통해서 타입을 생성하기

/* 1. 직접 타입 타이핑 */
// interface Arr {
  // 1. forEach(callback: (item: number | string) => void): void;
// }

/* 2. 제네릭 */
interface Arr<T> {
  forEach(callback: (item: T) => void): void; 
}





// number
const a27: Arr<number> = [1, 2, 3];
a27.forEach((item) => {
  console.log(item);
  item.toFixed(1)
});
a27.forEach((item) => {
  console.log(item);
  return '3';
});

// string
const b27: Arr<string> = ['1', '2', '3'];
b27.forEach((item) => {
  console.log(item);
  item.charAt(3)
});
b27.forEach((item) => {
  console.log(item);
  return '3';
});
