interface A19 {
  readonly a: string;
  b: string;
}

// interface가 있으면 class는 따라가야한다.
// implements를 사용하지 않아도 되지만 객체지향 원칙중에 추상(interface)에 의존하고 구현(class)에 의존하지 말라는 조항이 있음
// class 의 값들을 통제할 수 있다.
class B19 implements A19 {
  private a: string;
  protected b: string;
  public c: string = 'wow'; // Default, public을 빼도 됨

  // #a: number = 123; js의 private
  method() {
    console.log(this.a);
  }
}

class C19 extends B19 {
  method() {
    // console.log(this.a); error, Class B19에서만 사용 가능
    console.log(this.b); // class B19에서 상속받았기 때문에 사용 가능
    console.log(this.c); // public
  }
}
new C19().a; // private: 클래스 안에서만 사용 가능
new C19().b; // protected: 클래스 안과 상속받은 클래스까지만 사용 가능
new C19().c; // public 어디서든 사용 가능


/* 사용 범위 정리표 */
//              public        protected       private
// class          O              O               O
// extends        O              O               X
// instance       O              X               X

// js로 컴파일 된 후에는 private, protected 다 소용 없어짐