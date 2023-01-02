/* parameters */
// 함수의 매개변수를 배열 형식으로 만들어 접근 가능하도록 한다.
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
// infer : extends에서만 사용 가능하다. 타입스크립트가 알아서 추론하도록 ( 추론 조건 ? 성공 시 값 : 실패 시 값 )
function zip(x: number, y: string, z: boolean): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

type Params = Parameters<typeof zip>;
type First = Params[0]; // x:number를 가르키므로 First:number

/* ReturnType */
// 함수의 매개변수를 배열 형식으로 만들어 접근 가능하도록 한다.
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type Ret = ReturnType<typeof zip>;