import { Api } from "../ApiConfig"
import { ApiException } from "../ApiException";


export interface iTarefa{
    id: number;
    title: string;
    isSelected: boolean;
}

  
const getAll = async ():Promise<iTarefa[] | ApiException> =>{
    try{
        const { data} = await Api().get('/tarefas')
        return data;
    }catch(error: any){
        return new ApiException(error.message || 'erro ao buscar registro');
    }
}

const getById =  async(id:number) =>{
    try{
        const { data} = await Api().get(`/tarefas/${id}`)
        return data;
    }catch(error: any){
        return new ApiException(error.message || 'erro ao buscar registro por ID');
    }
}

const create = async (dataToCreate: Omit<iTarefa, 'id'>) => {
    try{
        const { data} = await Api().post<any>('/tarefas', dataToCreate)
        return data;
    }catch(error: any){
        return new ApiException(error.message || 'erro ao criar registro');
    }
}

const updateById = async (id:number, dataToUpdate: iTarefa) => {
    try{
        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate)
        return data;
    }catch(error: any){
        return new ApiException(error.message || 'erro ao atualizar por ID');
    }
}

const deleteByID = async (id:number) => {
    try{
        const { data } = await Api().delete(`/tarefas/${id}`)
        return undefined;
    }catch(error: any){
        return new ApiException(error.message || 'erro ao deletar por ID');
    }
}

export const ServiceTarefas = {
    getAll,
    getById,
    create,
    updateById,
    deleteByID
}