// |: 유니온, 타입 또는 타입으로 구분 가능
function add6(x: string | number, y: string | number): string | number {
  return x + y;
}
// 유니온을 사용해서 타입이 꼬여버리면 아래와 같이 result는 타입이 두가지가 되어버리고 추론이 불가능하다.
const result6 = add6(1, 2);
add6('1', '2');
add6(1, '2');

type A6 = {
  a6: string;
};
type B6 = {
  b6: string;
};

// |(union): OR
// &(intersection): AND

const aa6: A6 | B6 = { a6: 'hello', b6: 'world' }; // 둘 중 한개의 속성만 맞아도 된다.
const bb6: A6 & B6 = { a6: 'hello', b6: 'world' }; // 모든 속성이 맞아야 한다.
