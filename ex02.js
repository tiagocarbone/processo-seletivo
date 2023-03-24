function fibonacci(n, teste) {
    let arrfibonacci = [];
    let a = 0,
      b = 1;
    arrfibonacci.push(a);
    arrfibonacci.push(b);
  
    for (let i = 0; i < n - 2; i++) {
      const temp = a + b;
      a = b;
      b = temp;
      arrfibonacci.push(temp);
    }
  
    console.log(arrfibonacci);
  
    for (let i = 0; i < arrfibonacci.length; i++) {
      if (arrfibonacci[i] == teste) {
        console.log( `O numero ${teste} está na sequencia fibonacci`);
        break 
        
      } else {
        console.log( `O numero ${teste} não está na sequencia fibonacci`)
        break
      }
    }
    
  }
  

  fibonacci(10, 14)