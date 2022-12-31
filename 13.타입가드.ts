// 원시값은 typeof
// 배열은 Array.isArray

/* 기본 */
function numOrStr(a: number | string) {
  if (typeof a === 'number') {
    a.toFixed(1);
  }
  if (typeof a === 'string') {
    a.charAt(3);
  }

  /* 타입 선언을 number와 string으로 지정해놨는데 불리언이 나왔음 */
  if (typeof a === 'boolean') {
    // a.toString(); a: never
  }
  // unknown이 아닌 경우에는 as를 사용하지 않는다.
}
numOrStr('123');
numOrStr(1);

/* 배열 */
function numOrNumArray(a: number | number[]) {
  if (Array.isArray(a)) {
    // number[]
    a.concat(4);
  } else {
    // number
    a.toFixed(3);
  }
}

/* 클래스 */
class AA13 {
  aaa() {}
}
class BB13 {
  bbb() {}
}
function aOrB(param: AA13 | BB13) {
  // 클래스간의 구별은 instanceof로 한다.
  if (param instanceof AA13) {
    param.aaa();
  }
}
aOrB(new AA13());
aOrB(new BB13());

/* 객체간의 타입 검사 속성으로 가능 */
// 객체는 변수마다 타입을 미리 지정해놓기, 객체에 태그/라벨을 달아둔다라고 표현
type B13 = { type: 'b13'; bbb: string };
type C13 = { type: 'c13'; ccc: string };
type D13 = { type: 'd13'; ddd: string };

function typeCheck(a13: B13 | C13 | D13) {
  // 값으로 검사할 경우(보통 이 방법으로 사용함)
  if (a13.type === 'b13') {
    a13.bbb;
  } else if (a13.type === 'c13') {
    a13.ccc;
  } else {
    a13.ddd;
  }

  // 키로 검사할 경우
  // if ('bbb' in a13) {
  //   a.type;
  // } else if ('ccc' in a) {
  //   a.ccc;
  // } else {
  //   a.ddd;
  // }
}
