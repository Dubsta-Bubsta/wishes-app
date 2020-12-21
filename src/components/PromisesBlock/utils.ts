export const getOption = (options: any, field: string, value: string) => {
	if (value) {
		return {
			...options,
			[field]: value
		}
	}

	return options
} 