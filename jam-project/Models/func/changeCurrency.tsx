

export default function formattedNumber (value:any){
  // 숫자를 통화 형식으로 변환
  const currency = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return currency
}