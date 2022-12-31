interface Wolf {
  howl: number;
}
interface Dog {
  bow: number;
}

/* 타입 판별을 하는 커스텀 타입함수를 직접 생성한다. */
// 리턴값에 is가 들어가있으면 커스텀 타입가드 함수 => if와 함께 사용
// is가 있어야 if문 앞에서 정확하게 구분해준다.
function wolfOrDog(a: Wolf | Dog): a is Dog {
  //a가 Dog인지 타입확인
  if ((a as Wolf).howl) {
    return false;
  } // a에 howl이 있어서 false
  return true;
}

const wolf: Wolf | Dog = { howl: 3 };
if (wolfOrDog(wolf)) {
  console.log(wolf.howl);
}
if ('howl' in wolf) {
  console.log(wolf.howl);
}

