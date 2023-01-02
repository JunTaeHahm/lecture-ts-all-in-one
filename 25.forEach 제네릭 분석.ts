/* forEacth 제네릭 분석 */
interface Array<T> {
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
}

/* 타입 에일리어스의 제네릭 */
// type A<T> =

/*  클래스의 제네릭 */
// class A<T>{}

/* 타입을 알아서 추론함 */
[1, 2, 3].forEach((value) => {
  console.log(value); // console에 1,2,3
});
['1', '2', '3'].forEach((value) => {
  console.log(value);
});
[true, false, true].forEach((value) => {
  console.log(value);
});
['123', 123, true].forEach((value) => {
  console.log(value);
});

// 여러개의 제네릭 중에 한개라도 타입이 정해지면 나머지도 타입을 추론해냄
function plus<T>(x: T, y: T): T {
  return x;
}

// 타입파라미터: 제네릭 자리에 타입을 직접 정할 수도 있음. 타입스크립트가 추론을 못하는 경우에 사용
// 앞에 붙으면 강제 타입변환이니 주의할 것
plus<number>(1, 2);


