// what will the below log out
for(var i = 0; i < 5; i++) {
  console.log('outside setTimeout', i);
  setTimeout(function() {
    console.log('inside setTimeout', i);
  }, 1000);
}
