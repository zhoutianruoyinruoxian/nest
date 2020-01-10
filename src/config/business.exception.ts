
/**
 * 业务异常
 */
export class BusinessException {
  constructor(
    private readonly code: number,
    private readonly message: string,
    private readonly detail?: string,
  ) { }
}

/**
 * 参数异常
 */
export class ParamException extends BusinessException {
  constructor(message: string = '参数错误', detail?: string) {
    super(400, message, detail);
  }
}

/**
 * 权限异常
 */
export class AuthException extends BusinessException {
  constructor(message: string = '无权访问', detail?: string) {
    super(403, message, detail);
  }
}