const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите слова для сортировки: ', (value) => {
    let array=value.split(' ')
    console.log (array.sort((a, b) => b.length - a.length).join(' '))

    rl.close();
});
