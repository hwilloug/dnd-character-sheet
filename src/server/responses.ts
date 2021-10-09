import * as Types from '../types'

export interface Response<T extends string> {
  type: T
}

export interface ResponseWithBody<T extends string, B> extends Response<T> {
  body: B
}

export function createResponse<T extends string>(type: T): Response<T>
export function createResponse<T extends string, B>(
  type: T,
  body: B
): ResponseWithBody<T, B>
export function createResponse<T extends string, B>(type: T, body?: B) {
  return body === undefined ? { type } : { type, body }
}

export class ServiceError extends Error {
  public toString(): string {
    return this.message
  }
}

export class UnknownServiceError extends Error {}

export class ServiceBusyError extends Error {}

export type ResponseTypes<A extends Types.CreatorMapObject> =
  Types.CreationUnion<A>