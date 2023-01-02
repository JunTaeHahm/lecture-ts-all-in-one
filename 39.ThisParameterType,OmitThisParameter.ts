function a39(this: Window | typeof obj39, param: string) {
  console.log(this.name);
}

const obj39 = { name: 'kim' };
const b39 = a39.bind(obj39);

/* ThisParameterType */
// 함수 타입의 this 매개변수의 타입 또는 this 매개변수가 없을 경우 unknown을 추출
// type ThisParameterType<T> = T extends (this: infer U, ...args: never) => any ? U : unknown;
type T39 = ThisParameterType<typeof a39>; // T39: string(this가 있으므로)

/* OmitThisParameter */
// Type에서 this 매개변수만 제거한다. 그리고 this를 없앤 함수 타입을 추출 할 수 있다.
// type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
type noT39 = OmitThisParameter<typeof a39>; // noT39: ( param: string ): void