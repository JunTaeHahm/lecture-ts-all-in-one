/* filter 제네릭 분석 */
interface Array<T> {
  filter<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any,
  ): S[];
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}

/* S: number, T: number */
const filtered1 = [1, 2, 3, 4, 5].filter((value) => value % 2);

/* S: string | number, T: string | number */
const filtered2 = ['1', 2, '3', 4, '5'].filter((value) => typeof value === 'string');

/* string으로 뽑고 싶은 경우(S를 string으로), 커스텀 타입 가드 */
const predicate = (value: string | number): value is string => typeof value === 'string';
const filtered3 = ['1', 2, '3', 4, '5'].filter(predicate);
