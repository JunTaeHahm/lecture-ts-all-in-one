/* 잉여속성검사, 객체리터럴로 모르는 타입의 객체가 들어갈 경우 오류를 알려준다. */

// type A9 = { hello: string };
// const a9: A9 = { hello: 'world', why: 'error' };


// 이는 변수로 따로 처리해주면 해결된다.
type A9 = { hello: string };
const obj9 = { hello: 'world', why: 'error' };
const a9: A9 = obj9;
