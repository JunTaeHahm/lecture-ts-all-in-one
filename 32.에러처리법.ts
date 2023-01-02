/* 타입스크립트는 건망증이 심하다 */
interface Axios {
  get(): void;
}

// interface는 자바스크립트로 컴파일 되면 사라짐
interface CustomError {
  name: string;
  message: string;
  stack?: string;
  response?: {
    data: any;
  };
}

// class로 변환해서 사용
class CustomError {
  response?: {
    data: any;
  };
}

declare const axios: Axios;

(async () => {
  try {
    await axios.get();
  } catch (err) {
    // catch문에서도 as 안쓰는 것이 제일 좋음
    if (err instanceof CustomError) {
      console.error(err.response?.data);
      err.response?.data;
    }
  }

  /* 
    console.error((err as CustomError).response?.data); // 일회성
    // err.response?.data; 다시 unknown으로 알아들음

    const CustomError = err as CustomError; // 변수로 저장
    console.error(CustomError.response?.data); // 변수 사용
  }
   */
})();

const a32 = <T = unknown>(v: T): T => {
  return v;
};
const b32 = a32(3);
