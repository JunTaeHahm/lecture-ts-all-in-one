/* optional */
function abc(a: number, b?: number, c?: number) {} // 개수를 정해서 받고 싶은 경우
abc(1);
abc(1, 2);
abc(1, 2, 3);

function abcd(...args: number[]) {} // 전부다 받고 싶은 경우
abcd(1, 2, 3, 4);

/* Type alias에서도 가능 */
let obj21: { a: string; b?: string } = { a: 'hello', b: 'world' };
obj21 = { a: 'hello' };
