import { processWithServerRequest } from './../types/ComponentStateMachineTypes';
import { procesesType, procesesTypeWithServerRequest, process } from "../types/ComponentStateMachineTypes"

const defineProcess = (processes: procesesType ): string  => {
    for(let process in processes){
        if(processes[process] && process.includes(process) ){
            return process
        }
    }
    return "error"
}

export default defineProcess