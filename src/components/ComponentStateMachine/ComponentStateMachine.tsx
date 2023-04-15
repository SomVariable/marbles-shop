import React from 'react'
import Spinner from '../../UI/Spinner/Spinner';
import Error from '../../UI/Error/Error';
import MessageEmptyData from '../../UI/MessageEmptyData/MessageEmptyData';
import { IStateMachineProps, IStateMachineWithServerRequestProps } from './interface/ComponentStateMachine.interface';


export function ComponentStateMachine({process, data, waiting, confirmed, emptyData, error} : IStateMachineProps) {
    const waitingFn   = waiting? waiting : () => <Spinner />,
          confirmedFn = confirmed,
          emptyDataFn = emptyData? emptyData: () => <MessageEmptyData />,
          errorFn     = error? error : () => <Error />;

    switch(process){
    case "waiting": 
        return waitingFn()
    case "confirmed":
        return <>{confirmedFn()}</>
    case "noData": 
        return emptyDataFn()
    case "error":
        return errorFn()
    default:
        throw errorFn()
    }
}

export function ComponentStateMachineWithServerRequest({process, data, waiting, confirmed, fetching, emptyData, error} : IStateMachineWithServerRequestProps){
    const waitingFn  = fetching? fetching : () => <Spinner />

    if(process === "fetching"){
        return waitingFn()
    }else{
        ComponentStateMachine({process, data, waiting, confirmed, emptyData, error})
    }
}

