export type TErrorCode = 401 | 403 | 404 | 'default'
export type TOtherCode = 500 | 601 | 200
export type TCode = TErrorCode | TOtherCode
export interface I {
  msg: string
  code: TErrorCode
}
export type TFormatKey = 'y' | 'm' | 'd' | 'h' | 'i' | 's' | 'a'
export interface IRspObj {
  code: TErrorCode
  msg: string
}
