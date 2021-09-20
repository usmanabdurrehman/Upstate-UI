import axios from 'axios'

export let populatePackageDescription = (params, fields, setFields) => {
	axios({
		method:'post',
		url:"http://localhost:7000/processParams",
		data:params
	})
	.then(res=>{
		console.log('res.data',res.data)
		setFields({'name':'I am going to New York',...fields})
	})
};

export let populateManufacturer = (params, formData) => {};
