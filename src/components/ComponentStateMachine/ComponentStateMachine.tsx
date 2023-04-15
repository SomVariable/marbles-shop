import React from 'react'
import Spinner from '../../UI/Spinner/Spinner';
import Error from '../../UI/Error/Error';
import MessageEmptyData from '../../UI/MessageEmptyData/MessageEmptyData';

type simpleProcess = "waiting" | "confirmed" | "isHasData" | "error"

interface IStateMachineProps{
    process: simpleProcess
    Component: () => JSX.Element,
    data?: any,
    waiting?: () => JSX.Element,
    confirmed?: () => JSX.Element,
    emptyData?: () => JSX.Element,
    error?: () => JSX.Element,
}


function ComponentStateMachine({process, Component, data, waiting, confirmed, emptyData, error} : IStateMachineProps) {
    const waitingFn   = waiting? waiting : () => <Spinner />,
          confirmedFn = confirmed? confirmed : () => <Component {...data}/>,
          emptyDataFn = emptyData? emptyData: () => <MessageEmptyData />,
          errorFn     = error? error : () => <Error />;


    switch(process){
    case "waiting": 
        return waitingFn()
    case "confirmed":
        return confirmedFn()
    case "isHasData": 
        return emptyDataFn()
    case "error":
        return errorFn()
    default:
        throw errorFn()
    }
}

export default ComponentStateMachine