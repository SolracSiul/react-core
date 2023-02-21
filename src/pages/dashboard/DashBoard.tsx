
import { useCallback, useEffect, useState } from 'react'
import { ApiException } from '../../shared/services/ApiException'

import { iTarefa, ServiceTarefas } from '../../shared/services/tarefas/ServiceTarefas'

export const DashBoard = () => {
  const [lista, setLista] = useState<iTarefa[]>([])

  const handleToggleComplete = useCallback((id:number)=>{
      const listaToUpdate = lista.find((tarefa) => tarefa.id === id )
      if (!listaToUpdate) return;

      ServiceTarefas.updateById(id,{
        ...listaToUpdate,
        isSelected: !listaToUpdate.isSelected,
      }).then((result) =>{
        if(result instanceof ApiException){
          alert(result.message)
        }else{
          setLista((oldList)=>{
            return oldList.map((oldListItem) =>{
              if(oldListItem.id === id) return result;
              return oldListItem;
            })
          })
        }
      })

    setLista((oldLista) =>{
      return oldLista.map(oldListaItem =>{
        const newIsSelected = oldListaItem.id === id
        ? !oldListaItem.isSelected
        : oldListaItem.isSelected;
        return {
          ...oldListaItem,
          isSelected: newIsSelected,
        }
      })
    })
  },[lista])

  const handleDelete = useCallback((id: number) => {
    ServiceTarefas.deleteByID(id)
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setLista(oldLista => {
            return oldLista.filter(oldListItem => oldListItem.id !== id);
          });
        }
      });
  }, []);
  useEffect(()=>{
    ServiceTarefas.getAll()
    .then((result)=>{
      if(result instanceof ApiException){
        alert(result.message)
      }else{
        setLista(result)
      }
    })
  },[])

  const handleText: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) =>{
    if(e.key === 'Enter'){
      if(e.currentTarget.value.trim().length  === 0) return;
      const value = e.currentTarget.value;
      
      e.currentTarget.value = ''

      if(lista.some((listItem) => listItem.title === value)) return;

      ServiceTarefas.create({title: value,isSelected:false,}).then((result) =>{
        if(result instanceof ApiException){
          alert(result.message)
        }else{
          setLista((oldList)=>{
            return [...oldList,result]
          })
        }
      })

      
    }
  },[lista])
  return (
    <>
   <div>
    <p>Lista</p>
    <input type="text"
    onKeyDown={handleText} 
    />
    <ul>
          {
          lista.map((listItem) =>{
            return <li key={listItem.id}>
              <input type="checkbox" onChange={() => handleToggleComplete(listItem.id)}/>
              {listItem.title}

              <button onClick={() =>{handleDelete(listItem.id)}}>Apagar</button>
              </li>;
          })
          }
    </ul>
   </div>
    </>
  )
}

