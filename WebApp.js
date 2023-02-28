
  let num = (prompt("Enter a number: "));
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
    document.getElementById("math").innerHTML = arr;

  }

  console.log(arr)

 