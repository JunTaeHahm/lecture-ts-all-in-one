// abstract를 붙여 추상 class와 method를 만들 수 있다.
abstract class A20 {
  private readonly a: string = '123';
  b: string = 'world';
  c: string = 'wow'; // Default, public을 빼도 됨

  abstract method(): void;
  method2() {
    return 3;
  }
}

class B20 extends A20 {
  // abstract로 추상된 메소드는 상속받았을 경우 반드시 구현해줘야 한다.
  method() {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
}
