export function sendData(data: any, code: number = 200, msg = '成功') {
  return {
    code,
    resData: data,
    msg,
  };
}
