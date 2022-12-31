/* type과 interface구분 */

type A5 = { a5: string };
const I5: A5 = { a5: 'hello' };

// 객체지향 프로그래밍을 할 경우 interface 사용
interface B5 {
  b5: string;
}
const J5: B5 = { b5: 'hello' };

/* 객체 생성 시 추천 */
// 변수마다 타입을 미리 지정해놓기, 객체에 태그/라벨을 달아둔다라고 표현
const bird = { type: 'bird' };
const dog = { type: 'dog' };
const cat = { type: 'cat' };
