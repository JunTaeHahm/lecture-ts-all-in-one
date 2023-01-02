/* 함수 오버로딩 */
// 함수를 여러번 선언해서 하나라도 타입 조건이 맞으면 실행 가능하게 함
// interface, class 모두 다 사용 가능

/* 여러번 선언해서 아무거나 걸려리(오버로딩) */
declare function add31(x: number, y: number): number;
declare function add31(x: string, y: string): string;
declare function add31(x: number, y: number, z: number): number;

/* 제일 좋은 방법 optional 사용 */
declare function add31(x: number, y: number, z?: number): number;

add31(1, 2);
add31(2, 3, 4);
add31('1', '2');

interface Plus31 {
  (x: number, y: number): number;
  (x: string, y: string): string;
}

// 위에서 타입을 설정 해놨기 때문에 구현부에서는 타입을 any로 사용해도 됨
const plus31: Plus31 = (x: any, y: any) => x + y;

class A31 {
  add31(x: number, y: number): number;
  add31(x: string, y: string): string;
  add31(x: any, y: any) {
    return x + y;
  }
}

const c31 = new A31().add31(1, 2);
