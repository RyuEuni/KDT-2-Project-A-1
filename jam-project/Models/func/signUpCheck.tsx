import {pattern, patternBirthday, patternEmail, patternNincName, inputLength } from './RegExp'

export default function SignUpCheck(inputType:string, value: string, reValue: string){
  
  // let idCheck = false;
  let pwCheck = false;
  // let rePwCheck = false;
  // let nicknameCheck = false;
  // let birthdayCheck = false;
  // let emailCheck = false;

  // let errorMsg = '';

  //! 아이디 유효성 검사
  if(inputType == 'id'){
    if(value.length >= inputLength.nicknameLength.min && value.length <= inputLength.nicknameLength.max){
      return pattern.test(value);
    }
    else{
      return false;
  
    }
  }

  //! 비밀번호 유효성 검사
  if(inputType == 'password'){
    if(value.length >= inputLength.pwcharLength.min && value.length <= inputLength.pwcharLength.max){
      return pattern.test(value);
    }
    else{
      return false;
      // errorMsg = "비밀번호의 입력이 유효하지 않습니다."
  
    }

  }

  //! 비밀번호 확인 유효성 검사
  if(inputType == 'passwordCheck'){
    if(value.length >= inputLength.pwcharLength.min && value.length <= inputLength.pwcharLength.max){
      if(pwCheck && (value == reValue)){
        return pattern.test(value)
      }
      else{
        return false;
        // errorMsg = "비밀번호 확인이 유효하지 않습니다."
      }
    }
    else{
      return false;
      // errorMsg = "비밀번호의 입력이 유효하지 않습니다."
  
    }

  }

  //! 닉네임 유효성 검사
  if(inputType == 'nickName'){
    if(value.length >= inputLength.nicknameLength.min && value.length <= inputLength.nicknameLength.max){
      return patternNincName.test(value);
    }
    else{
      return false;
      // errorMsg = "닉네임의 입력이 유효하지 않습니다."
  
    }
  }

  //! 생년월일 유효성 검사
  if(inputType == 'birthday'){
    if(patternBirthday.test(value)){
  
      // 생년월일 유효성 검사 (예: 2023-06-05인 경우 2023년 6월 5일이 있는지 확인)
      const year = parseInt(value.slice(0, 4), 10);
      const month = parseInt(value.slice(4, 6), 10);
      const day = parseInt(value.slice(6, 8), 10);
      const date = new Date(year, month - 1, day);
  
      if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        // 생년월일이 유효하지 않을 경우
        return false;
        // errorMsg = "생년월일의 입력이 유효하지 않습니다."
      }
      else{
        return true;
      }
    }
    else{
      return false;
      // errorMsg = "생년월일의 입력이 유효하지 않습니다."
    }

  }

  //! 이메일 유효성 검사
  if(inputType == 'email'){
    return patternEmail.test(value);

  }
  // if(!emailCheck){
  //   // errorMsg = "이메일의 입력 형식이 유효하지 않습니다."
  // }

  // if(idCheck && pwCheck && rePwCheck && nicknameCheck && birthdayCheck && emailCheck){
  //   return true;
  // }
  // else{
  //   return false;
  // }
  // return ({
  //   idCheck: idCheck,
  //   pwCheck: pwCheck,
  //   rePwCheck: rePwCheck,
  //   nicknameCheck: nicknameCheck,
  //   birthdayCheck: birthdayCheck,
  //   emailCheck: emailCheck
  // });
}
