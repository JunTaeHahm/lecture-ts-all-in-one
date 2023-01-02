/* 함수의 목적 : 숫자 매개변수를 넣으면 숫자끼리 더해서 반환, 문자 매개변수를 넣으면 문자끼리 더해서 반환 */
function add22(x: string | number, y: string | number): string | number {
  return x + y;
}

// 원하는 리턴 값
add22(1, 2); // 3
add22('1', '2'); // '12'

// 아래와 같은 에러가 발생함
add22(1, '2'); // '12'
add22('1', 2); // '12'


/* 위와 같은 문제 때문에 나온 것이 제네릭 */
// 제네릭 분석은 한 칸씩 직접 타입을 찾아서 넣어보면 나온다.
// 매개변수의 타입을 정해줄 수 있다.
// 현재 타입이 뭔지 모르겠는데 나중에 타입을 정하겠다.(변수처럼 사용 가능)
// 주로 T를 사용한다.
function a22<T>(x: T, y: T): T {
  return x + y;
}

// 서로 같은 타입이라 가능
a22(1, 2); // 3
a22('1', '2'); // '12'

// 서로 다른 타입이라 에러
a22(1, '2'); 
a22('1', 2); 

/* T의 타입 범위가 너무 넓어서 extends로 범위를 줄일 수 있다. */
function b22<T extends number | string>(x: T, y: T): T {
  return x + y;
}

/* 제네릭을 여러개 만들어서 각각 다른 타입을 지정해줄수도있다.*/
function c22<T extends number, K extends :string>:(x: T, y: K): T {
  return x + y;
}

/* 제네릭의 기본값(제한두기) extends */
function d22<T extends string>(x: T, y: T): T { return x }
function e22<T extends (a:string)=>number>(x:T): T { return x} // 콜백함수에 주로 사용


/* 제네릭 선언 위치 */
// function a<T>() {}
// class B<T>() {}
// interface C<T> {}
// type D<T> = {};
// const e = <T>() => {};

// <T extends {...}> // 특정 객체
// <T extends any[]> // 모든 배열
// <T extends (...args: any) => any> // 모든 함수
// <T extends abstract new (...args: any) => any> // 생성자 타입
// <T extends keyof any> // string | number | symbol