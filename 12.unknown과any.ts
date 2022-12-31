interface A12 {
  talk: () => void;
}

const a12: A12 = {
  talk() {
    return 3;
  },
};

const b12: unknown = a12.talk();
// b12.talk(); unknow은 지금 타입을 잘 모르겠을 때 사용
(b12 as A12).talk();

try {

} catch(error){ // 대표적인 unknown
  (error as Error) // ts가 제공하는 Error
}

// any는 타입 검사를 포기함
