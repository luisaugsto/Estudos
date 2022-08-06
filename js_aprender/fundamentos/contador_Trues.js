//essa função retorna a quantidade de trues no array

function countTrue(arr) {
	let quantidadeTrue = 0
	let c = arr.length
	for (let i=0 ; i<c ; i++){
        console.log(arr[i])
		if (arr[i] == true){
            quantidadeTrue += 1 
        } 
	}
    console.log(quantidadeTrue)
}

let arr=[true,true,false]

countTrue(arr)