let numbers = [
    2,
    3,
    5,
  ];
  function sum(numberArray) {
    let soma = 0;
    for (var element of numberArray) {
      soma += element;
    }
    return soma;
  };
  console.log(sum(numbers));