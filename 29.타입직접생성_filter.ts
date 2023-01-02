/* filter 직접 타입 생성 */
// 타입을 생성해놓고 여러가지 실전 예시로 타입을 검증해본다.
// 내가 원하는 코드를 통해서 타입을 생성하기

interface Arr<T> {
  filter<S extends T>(callback: (v: T) => v is S): S[]; // v가 S가 될 수 없음
  // T가 S로 좁혀질 수 있게 extends사용

  // 1. filter(): void;                                        일반 함수 void로 생성
  // 2. filter(callback: () => void): void;                    콜백 함수와 타입 지정
  // 3. filter(callback: (v: T) => void): T[];                 콜백 함수의 매개변수와 타입 지정
  // 4. filter<S>(callback: (v: T) => v is S): S[];            다른 타입의 값이 필요할 때 제네릭 지정
  // 5. filter<S extends T>(callback: (v: T) => v is S): S[];  S와 T와의 관계를 지정하기 위해 extends 사용
}

const a29: Arr<number> = [1, 2, 3];
const b29 = a29.filter((v): v is number => v % 2 === 0); // [2] number[]

const c29: Arr<number | string> = [1, '2', 3, '4', 5];
const d29 = c29.filter((v): v is string => typeof v === 'string'); // ['2', '4'] string[]

/* 가독성을 위해 변수로 빼서 사용 */
const predicate29 = (v: string | number): v is number => typeof v === 'number'; 
const e29 = c29.filter(predicate29);
