const p1 = Promise.resolve(1)
  .then((a) => a + 1)
  .then((a) => a + 1)
  .then((a) => a.toString());
// Promise<number>, Promise<number>, Promise<string>
const p2 = Promise.resolve(2); // Promise<number
const p3 = new Promise((res, rej) => {
  // Promise<unknown>
  setTimeout(res, 1000);
});

type Result = Awaited<{ then(onfullfilled: (v: number) => number): any }>;

Promise.all([p1, p2, p3]).then((result) => {
  // { '0': string, '1': number, '2':unknown, Length: 3}
  console.log(result); // ['3', 2, undefined]
});

// T = [p1, p2, p3] '0':p1, '1':p2, '2':p3, Length: 3
// keyof T = '0' / '1' / '2' / 'Length'

const arr = [1, 2, 3] as const;
type Arr38 = keyof typeof arr;
const key: Arr38 = 'length';
