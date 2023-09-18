
let iptFile = process.argv[2] || './1.xlsx'
let outFile = process.argv[3] || './1.js'
import parseXlsx from 'excel';
import fs from 'fs'
const xls = parseXlsx.default
xls(iptFile).then((data) => {
  
   fs.writeFile(outFile,'let newData = '+ JSON.stringify(data,null,2),(err)=>{
    if(err) return console.log('写入失败')
    console.log('写入成功')
   })
});