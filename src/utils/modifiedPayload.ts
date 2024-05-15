const modifiedPayload = (payload: any) => {
	const data = JSON.stringify(payload);
	const formData = new FormData();
	formData.append('data', data);
	return formData;
};

export default modifiedPayload;
