// what will the below log out
let j;

for(let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(j);
  }, 1000);
}
