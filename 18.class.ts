/* 기본적인 class와 constructor의 구조 */
class A {
  a: string = '123';
  b: number = 123;
  constructor(a: string, b: number = 123) {
    this.a = '123';
    this.b = 123;
  }
  method() {}
}

// 기본 값이 있을 경우에는 인자를 한개만 넣어도 된다.
const a18 = new A('123');

/* 클래스의 이름은 그 자체로 타입이 될 수 있다. */
type AA17 = A;
const b18: A = new A('123'); // 클래스 이름은 instance를 가르킨다.
const c18: typeof A = A; // 클래스 자체의 이름은 typeof A