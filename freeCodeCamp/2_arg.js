sum = 0;
for (i = 0; i < process.argv.length - 2; i++) {
    sum = sum + +process.argv[i + 2];
}
console.log(sum);
