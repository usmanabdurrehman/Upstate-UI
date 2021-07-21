export let classNames = (classMapping) => {
	const classes = [];
	Object.keys(classMapping).forEach((classKey) => {
		classMapping[classKey] && classes.push(classKey);
	});
	return classes.join(" ");
};

export let typeToColorMapping = ({type, variant = "filled", colorOpacity = 1}) => {
	const colorMapping = {
		primary: {
			backgroundColor: `rgba(0, 123, 255,${colorOpacity})`,
			color: "#fff",
		},
		success: {
			backgroundColor: `rgba(40, 167, 69,${colorOpacity})`,
			color: "#fff",
		},
		warning: {
			backgroundColor: `rgba(255, 193, 7,${colorOpacity})`,
			color: "#fff",
		},
		danger: {
			backgroundColor: `rgba(220, 53, 69,${colorOpacity})`,
			color: "#fff",
		},
	};
	const { backgroundColor, color } = colorMapping[type] || colorMapping.primary
	// {
	// 	backgroundColor: `rgba(0, 0, 0,${colorOpacity})`,
	// 	color: "#ffffff",
	// };
	return variant == "outlined"
		? {
				border: `1.5px solid ${backgroundColor}`,
				color: backgroundColor,
				backgroundColor: "#ffffff",
		  }
		: { backgroundColor, color };
};
