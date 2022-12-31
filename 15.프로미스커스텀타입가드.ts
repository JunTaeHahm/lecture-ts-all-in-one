// Promise -> Pending -> Settled(Resolved, Rejected)
// promises.then().catch()
// .then()은 Resolved, .catch()는 Rejected, 둘 다를 가르키는것이 Settled


// 비동기로 프로미스가 실행되는 도중에는 Pending상태고 완료하면 Settled상대가 된다.
// Settled는 완료지 성공,실패 확인은 아니다.
// 성공했으면 Resolved, 실패했으먄 Rejected

// PromiseSettledResult(둘다) / PromiseRejectedResult(실패) / PromiseFullfilledResult(성공)


// 성공한 것만 구분하고 싶은 경우의 타입가드
const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => {
  return input.status === 'fulfilled';
};

// 에러난 것만 구분하고 싶은 경우의 타입가드
const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => {
  return input.status === 'rejected';
};



const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);

const errors1 = promises.filter(a=>true); // 성공여부를 떠나 완료된것만 알고 싶을 경우
const errors2 = promises.filter(promise=>promise.status==='rejected'); // 자바스크립트에서 프로미스의 결과를 알고싶을 때 사용하는 코드
const errors4 = promises.filter(isFulfilled); // 성공 한 것만 모으기
const errors3 = promises.filter(isRejected); // 실패 한 것만 모으기


export {};
