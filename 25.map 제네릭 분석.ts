/* map 제네릭 분석 */
interface Array<T> {
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  // T: number, U: string(콜백함수의 리턴값의 타입)
}
const strings = [1, 2, 3].map((item) => item.toString()); //['1','2','3'] string[]