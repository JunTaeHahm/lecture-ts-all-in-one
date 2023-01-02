interface Profile {
  name: string;
  age: number;
  married: boolean;
}
const kim: Profile = {
  name: 'kim',
  age: 28,
  married: false,
};

/* Partial */
// 필수였던 인터페이스의 키들을 다 옵셔널을 붙인형태로 만들어줌
// 하지만 Partial은 전부다 옵셔널을 넣는 기능이기 때문에 거의 사용하지 않는다
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
const newKim1: Partial<Profile> = {
  name: 'kim', // name?: string;
  age: 28, // age?: number;
  // married?: boolean
};


/* Pick */
// 인터페이스에서 원하는 키들만 가져옴
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };
const newKim2: Pick<Profile, 'name' | 'age'> = {
  name: 'kim',
  age: 28,
  // married: false, error
};

/* Omit */
// 인터페이스에서 원하지 않는 키만 제외한 나머지 키를 가져옴
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
const newKim3: Pick<Profile, 'married'> = {
  // name: 'kim', error
  // age: 28, error
  married: false,
};

/* Exclude */
// 원하는 키를 뺄 수 있음
// type Exclude<T, U> = T extends U ? never : T;
type A33 = Exclude<keyof Profile, 'married'>; // A33: 'name' | 'age'

/* Extract */
// 원하는 키만 가져오기
// type Extract<T, U> = T extends U ? T : never;
type B33 = Extract<keyof Profile, 'name' | 'age'>; // B33: 'name' | 'age'
