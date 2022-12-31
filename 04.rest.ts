/* rest parameters */
let arr41: string[] = [];
let arr42: Array<string> = [];
function rest(a, ...args: string[]) {
  console.log(a, args); // 1, [2, 3]
}

rest('1', '2', '3');
