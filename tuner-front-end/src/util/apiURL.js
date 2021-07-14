// export const apiURL = () => {
// 	return window.location.hostname === "localhost"
// 		? "http://localhost:4444"
// 		: null;
// };

export const apiURL = () => {
	// if (window.location.hostname === 'localhost')
	if (
		//THESE ARE THE THREE OPTIONS :: development  production  test
		process.env.NODE_ENV === "development" ||
		process.env.NODE_ENV === "test"
	) {
		return "http://localhost:4444";
	}
	return null;
};
