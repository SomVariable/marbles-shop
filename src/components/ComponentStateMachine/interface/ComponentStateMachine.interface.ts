import { processWithServerRequest, process } from "../types/ComponentStateMachineTypes";

export interface IStateMachineProps{
    process: string,
    data?: any,
    waiting?: () => JSX.Element,
    confirmed: () => JSX.Element | JSX.Element[],
    emptyData?: () => JSX.Element,
    error?: () => JSX.Element,
}

export interface IStateMachineWithServerRequestProps extends IStateMachineProps{
    fetching?: () => JSX.Element,
}