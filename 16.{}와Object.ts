/* {}, Object는 모든 타입(null, undefined는 제외) */
const xxx: {} = 'hello';
const yyy: Object = 'hi'; // 대문자

const yy: object = { hello: 'world' }; // object 지양, interface, type, class 사용
const zz: unknown = 'hi';

// unknown = {} | null | undefined    v4.8
if (zz) {
  zz; // unknown을 if문 안에 넣으면 모든타입인 {}타입으로 변한다.
} else {
  zz; // unknown
}
