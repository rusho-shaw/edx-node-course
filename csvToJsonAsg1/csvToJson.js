const csv = require('csvtojson')
const fs = require('fs')
const path = require('path')

const folderName = 'ip_op_files'
const convertToJson = (fileName='customer-data.csv') => {
	const csvFilePath=path.join(__dirname, folderName, fileName)
	csv().fromFile(csvFilePath)
	.then((jsonObj)=>{
	    fs.writeFileSync(path.join(__dirname, folderName, 'customer-data.json') , JSON.stringify(jsonObj, null, 2))
	})
}

convertToJson(process.argv[2])