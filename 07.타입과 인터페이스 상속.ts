/* 타입 상속 */
type Animal = { breath: true };
type Mammal = Animal & { breed: true };
type Human = Mammal & { think: true };

// 타입을 상속 받았기 때문에 모든 조건을 만족해야한다.
const hahm: Human = { breath: true, breed: true, think: true };

/* 인터페이스 상속 */
// 현업에서는 확장성이 좋기 때문에 주로 인터페이스를 사용한다. 
interface A {
  breath: true;
}
interface B extends A {
  breed: true;
}

const b: B = { breath: true, breed: true };

