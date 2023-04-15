export type process = "waiting" | "confirmed" | "noData" | "error"

export type processWithServerRequest = process | "fetching"

export type procesesType = {
    [key: string]: boolean;
    waiting: boolean;
    confirmed: boolean;
    noData: boolean;
    error: boolean
}

export type procesesTypeWithServerRequest = {
    [key: string]: boolean;
    waiting: boolean;
    confirmed: boolean;
    noData: boolean;
    fetching: boolean;
    error: boolean
}