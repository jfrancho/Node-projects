var result = 0;

for(var i = 2; process.argv[i]; i++) {
  result = result + +process.argv[i];
}

console.log(result);
