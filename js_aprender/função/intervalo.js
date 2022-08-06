function contador(num){
    let a = 0

    setInterval(() => {
        a++
        if ( a <= num ) console.log(a)
        
    },1000)
}

contador(5)

