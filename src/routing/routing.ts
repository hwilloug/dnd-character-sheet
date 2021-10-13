export interface DataFetchParams<Q, P = {}> {
    query: Partial<Q>
    path: Partial<P>
}