const ENV = import.meta.env;

const baseUrl = ENV.DEV ? ENV.VITE_API_ENDPOINT_V1 : ENV.VITE_API_ENDPOINT_V1;

export default baseUrl;
