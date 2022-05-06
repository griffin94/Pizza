export default (values, errorMessage) =>
	Object.values(values).some((element) => element) ? '' : errorMessage;
