#!/usr/bin/env node
let iptFile = process.argv[2] || './1.xlsx'
let outFile = process.argv[3] || './1.js'
let dataName = process.argv[4] || 'newData'
let dataFormate = process.argv[5] || 4;
dataFormate =  Number(dataFormate)
console.log(dataFormate)
import parseXlsx from 'excel';
import fs from 'fs'
const xls = parseXlsx.default
xls(iptFile).then((data) => {
  
   fs.writeFile(outFile,`let ${dataName} = `+ JSON.stringify(data,null,dataFormate),(err)=>{
    if(err) return console.log('写入失败')
    console.log('写入成功')
   })
});
