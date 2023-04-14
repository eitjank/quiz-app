import axios from 'axios';

const callApi = async (url, accessToken, method = 'get', data = null) => {
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };

    try {
        const response = await axios({
            url,
            method,
            headers,
            data,
        });
        return { data: response.data };
    } catch (error) {
        if (error.response) {
            return { error: error.response.data };
        } else {
            // Handle other types of errors
            console.error(error);
            return { error: 'An error occurred' };
        }
    }
};

export default callApi;
