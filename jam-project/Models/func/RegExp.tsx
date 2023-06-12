const pattern = /^[a-z0-9]+$/i; //영어 소문자와 숫자 형식 정규식
const patternNincName = /^[a-zㄱ-ㅎㅏ-ㅣ가-힣]+$/i; //영어 소문자와 한글 형식 정규식
const patternBirthday = /^\d{4}-\d{2}-\d{2}$/; // 생년월일 형식 정규식 (YYYY-MM-DD)
const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //이메일 형식 정규식 (abc123@gmail.com)

const inputLength = {
  idcharLength: { min: 1, max: 10 },
  pwcharLength: { min: 1, max: 15 },
  nicknameLength: { min: 2, max: 10 },
}


export {pattern, patternBirthday, patternEmail, patternNincName, inputLength}