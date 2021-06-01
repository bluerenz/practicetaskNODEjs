console.log("====================================================================================")
console.log("first mode\n")

var fs = require("fs")
var pat = fs.readFileSync('patterns.txt').toString('utf-8').split('\n');
var input = fs.readFileSync('input.txt').toString('utf-8');
for (i = 0; i < input.length-1; i++)
{
    input[i] = input[i].replace(/(\r\n|\n|\r)/gm, "")
}

for (i = 0; i < pat.length-1; i++)
{
    pat[i] = pat[i].replace(/(\r\n|\n|\r)/gm, "")
}

if (pat.length > 1)
{
    pat = Array.from(new Set(pat))
}

for (i = 0; i < pat.length; i++) 
{
    var pat_index = input.indexOf(pat[i], 0)
    while(pat_index > -1)
    {
        console.log(pat[i])
        pat_index = input.indexOf(pat[i], pat_index+1)
    }
}
console.log("====================================================================================")
console.log("second mode\n")

var fs = require("fs")
var pat = fs.readFileSync('patterns.txt').toString('utf-8').split('\n');
var input = fs.readFileSync('input.txt').toString('utf-8').split('\n');
for (i = 0; i < input.length; i++) 
{
    if (input[i] == pat[i])
    {
        console.log(input[i])
    }
}
console.log("====================================================================================")
console.log("third mode\n")

var fs = require("fs")
var pat = fs.readFileSync('patterns.txt').toString('utf-8').split('\n');
var input = fs.readFileSync('input.txt').toString('utf-8').split('\n');

for (i = 0; i < input.length-1; i++)
{
    input[i] = input[i].replace(/(\r\n|\n|\r)/gm, "")
}

for (i = 0; i < pat.length-1; i++)
{
    pat[i] = pat[i].replace(/(\r\n|\n|\r)/gm, "")
}

if (pat.length > 1)
{
    pat = Array.from(new Set(pat))
}

for (i = 0; i < input.length; i++)
{
    for (j = 0; j < pat.length; j++)
    {
        if (checkWord(input[i], pat[j]))
        {
            console.log(input[i])
        }
    }
}
function checkWord(str1, str2)
{
    if (str1.length != str2.length)
    {
        return false;
    }
    var matchs = 0;
    for (a = 0; a < str1.length; a++)
    {
        if (str1[a] != str2[a])
        {
            matchs++;
        }
        if (matchs >= 2)
        {
            return false;
        }
    }
    return true;
}
console.log("====================================================================================")