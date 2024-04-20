export const useStore=  ()=>{
    const sum=()=>{
        console.log("sum fun called from my store")
    }

    return {
        sum
    }

    
    }