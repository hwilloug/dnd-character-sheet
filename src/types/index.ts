/* eslint-disable-next-line */
export type FunctionType = (...args: any[]) => any

export interface CreatorMapObject {
  [creator: string]: FunctionType
}

export type CreationUnion<A extends CreatorMapObject> = ReturnType<A[keyof A]>

type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never
type ReplaceReturnType<T, R> = (...a: ArgumentTypes<T>) => R

export type CreationsMapObject<A extends CreatorMapObject, R> = {
  [D in keyof A]: ReplaceReturnType<A[D], R>
}

/* eslint-disable-next-line */
export type FunctionWithReturnType<A> = (...args: any[]) => A
