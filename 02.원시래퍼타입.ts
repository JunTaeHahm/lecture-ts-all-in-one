/* 타입을 정교하게 만들고 싶은 경우 */
type World = 'world' | 'hell'; // 두가지 값만 타입에 지정 하고 싶은 경우
const a2: World = 'world';

const b2 = `hello${a2}`;

// type Greeting = "hello world"
type Greeting = `hello ${World}`; // ${}: 템플릿 리터럴 타입
const ccc: Greeting = 'hello hell';
