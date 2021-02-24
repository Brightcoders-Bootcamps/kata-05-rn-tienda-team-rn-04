export const handleCount = (count, setCount, operation) =>{   
    if(operation === '-'){
        setCount(count - 1)
    }
    if(operation === '+'){
        setCount(count + 1)
    }
  
}