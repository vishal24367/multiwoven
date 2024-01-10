import axios from "axios";
import Cookies from "js-cookie";
// import cookie from 'react-cookies'
import toastr from "toastr";

toastr.options.preventDuplicates = true;

export const domain = "https://api.multiwoven.com/api/v1";
export const axiosInstance = axios.create({
	baseURL: domain,
});

axiosInstance?.interceptors.request.use(function requestSuccess(config) {
	config.headers["Content-Type"] = "application/json";
	config.headers["Authorization"] = "Bearer " + Cookies.get("authToken");
	config.headers["Accept"] = "*/*";
	return config;
});

axiosInstance?.interceptors.response.use(
	function responseSuccess(config) {
		return config;
	},
	function responseError(error) {
		if (error && error.response && error.response.status === 401) {
			// toastr.error(`${error.response.data.error.message}`);
			toastr.error("Authorization Error");
		}
		if (error && error.response && error.response.status === 403) {
			toastr.error(`${error.response.data.error.message}`);
			// window.alert("Authentication error.");
		}
		if (error && error.response && error.response.status === 422) {
			toastr.error(`${error.response.data.error.message}`);
			// window.alert("Authentication error.");
		}
		if (error && error.response && error.response.status === 501) {
			toastr.error(`${error.response.data.error.message}`);
		}
		if (error && error.response && error.response.status === 500) {
			// console.log(error.response);
			// toastr.error(`${error.response.data.error.message}`);
			toastr.error("An Internal Server Error occured. Try again in some time.");
		}

		return Promise.reject(error);
	}
);
