/* bind 분석 */
const park = {
  name: 'mr park',
  sayHello(this: { name: string }) {
    console.log(`hi ${this.name}`);
  },
};

const sayHello = park.sayHello;
const sayHi = park.sayHello.bind({ name: 'choi' }); // bind를 통해서 this가 없어짐
// bind<T>(this: T, thisArg: ThisParameterType<T>): OmitThisParameter<T>;

function add40(a: number, b: number, c: number, d: number, e: number, f: number) {
  return a + b + c + d + e + f;
}

const add40a = add40.bind(null);
add40a(1, 2, 3, 4, 5, 6);

const add40b = add40.bind(null /* thisArg */, 1 /* arg0 */);
// 1을 제외한 ...arg을 사용하고 리턴값은 그대로 number
add40b(2, 3, 4, 5, 6);

const add40c = add40.bind(null, 1, 2);
add40c(3, 4, 5, 6);

const add40d = add40.bind(null, 1, 2, 3);
add40d(4, 5, 6);

const add40e = add40.bind(null, 1, 2, 3, 4);
add40e(5, 6);

// 5개 이상의 매개변수를 가진 함수는 적용되지 않는다. (정의 참조)
const add40f = add40.bind(null, 1, 2, 3, 4, 5);
add40f(6);
