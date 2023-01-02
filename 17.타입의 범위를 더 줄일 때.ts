/* readonly */
interface A17 {
  readonly a: string;
  b: string;
}
const aaaa: A17 = { a: 'hello', b: 'world' };

/* Index Signature */
// 어떤 타입의 키가 들어와도 상관없고 그 키의 값은 지정해준 타입이 들어와야한다.
type B17 = { [key: string]: number };
const bbbb: B17 = { a: 3, b: 5, c: 5, d: 123 };

/* Mapped Type */
// Index Signature에서 더 타입의 범위를 줄여놓을 수 있다.
type D17 = 'Bird' | 'Dog' | 'Cat';
type C17 = { [key in D17]: number }; // key in 타입dmfh tkdyd
const cccc: C17 = { Bird: 123, Dog: 5, Cat: 3 };
