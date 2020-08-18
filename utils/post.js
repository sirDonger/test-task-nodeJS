const axios = require('axios');

module.exports = (url, body) => {
    return axios.post(url, body,
        {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            const { data } = response;

            console.log(data);

            if (data.Status === 0) return { success: true, data };

            return { success: false, data };
        })
        .catch(err => {
            console.log(err);

            return { success: false, err };
        });
};
