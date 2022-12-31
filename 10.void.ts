/* void 타입은 return값을 사용하지 안 겠다는 뜻(메서드나 매개변수에서는 리턴값 사용 가능, but 조심해야 함)  */
/* 함수의 리턴 값이 있으면 에러, 리턴값을 넣지 말라는 뜻 */
function a(): void {
  // return undefined : 가능
  // return null : 불가능
}
const b10 = a();

interface Human10 {
  talk: () => void;
}

const human10: Human10 = {
  talk() {
    return 'abc';
  },
};

/* 원래 함수를 선언했으면 바로 아랫줄에서 실행해야한다. 하지만 선언만 하고싶은경우 앞에 declare를 추가한다. */
declare function forEach(arr: number[], callback: (el: number) => void): void; // 컴파일 시 사라짐

let target10: number[] = [];
forEach([1, 2, 3], (el) => {
  target10.push(el);
});
forEach([1, 2, 3], (el) => target10.push(el));

// 매개변수에서 사용하는 void는 리턴값이 뭐든 상관하지 않는다.
// 함수에서 리턴값 void, 매개변수의 콜백의 void, 메소드의 void는 모두 다르다.
