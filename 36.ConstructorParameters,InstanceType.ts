/* ConstructorPcrameters */
// 생성자의 타입을 가져오고 싶은 경우
// type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

/* InstanceType */
// 생성자 함수의 인스턴스 타입으로 구성된 타입을 생성한다.
// type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

class A36 {
  a: string;
  b: number;
  c: boolean;
  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}
const c36 = new A36('123', 456, true);
type C36 = ConstructorParameters<typeof A36>; // typeof class가 생성자
type I36 = InstanceType<typeof A36>;

const a36: A36 = new A36('123',456,true) // new를 사용해서 만드는 instance