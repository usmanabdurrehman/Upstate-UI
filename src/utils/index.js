export let classNames = (classMapping) => {
	const classes = []
	Object.keys(classMapping).forEach(classKey=>{
		classMapping[classKey] && classes.push(classKey)
	})
	return classes.join(' ')
}

export let typeToColorMapping = (key,variant='filled') => {
	const colorMapping = {
		primary:{backgroundColor:'#007bff',color:'#fff'},
		success:{backgroundColor:'#28a745',color:'#fff'},
		warning:{backgroundColor:'#ffc107',color:'#fff'},
		danger:{backgroundColor:'#dc3545',color:'#fff'}
	}
	const {backgroundColor,color} = colorMapping[key]
	return colorMapping[key] ? (variant=="outlined" ? {border:`1.5px solid ${backgroundColor}`,color:backgroundColor,backgroundColor:"#ffffff"} : {backgroundColor,color}) : {backgroundColor:'#ffffff',color:'#000000',border:'1px solid black'}
}