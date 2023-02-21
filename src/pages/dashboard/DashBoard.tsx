
import { useCallback, useState } from 'react'

interface listItemProps{
  title: string;
  isSelected: boolean;
}

export const DashBoard = () => {
  const [lista, setLista] = useState<listItemProps[]>([])

  const handleText: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) =>{
    if(e.key === 'Enter'){
      if(e.currentTarget.value.trim().length  === 0) return;
      const value = e.currentTarget.value;
      
      e.currentTarget.value = ''

      setLista((oldList)=>{
        if(oldList.some((listItem) => listItem.title === value)) return oldList;
        return [...oldList,{
          title: value,
          isSelected: false,
        }]
      })
    }
  },[])
  return (
    <>
   <div>
    <p>Lista</p>
    <input type="text"
    onKeyDown={handleText} />
    <ul>
          {
          lista.map((listItem) =>{
            return <li key={listItem.title}>
              <input type="checkbox" name="" id="" />
              {listItem.title}
              </li>;
          })
          }
    </ul>
   </div>
    </>

  )
}

