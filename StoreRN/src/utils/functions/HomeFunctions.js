export const handleCount = (count, setCount, operation) =>{   
    if(operation === '-'){
        setCount(count - 1)
    }
    if(operation === '+'){
        setCount(count + 1)
    }
  
}

export const saveProductMultiplier = (count, func, item) =>{
    for (let index = 0; index < count; index++) {
      func(item)
    }
}