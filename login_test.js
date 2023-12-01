Feature('login');
const fs = require('fs');

Scenario('test something', async ({ I }) => {
    // I.sendGetRequest('/v1/auth/login')
    // I.sendPostRequest('/v1/auth/login', { "email": "anparasan.t@openturf.in" })

    // I.seeResponseCodeIsSuccessful()
    // I.seeResponseCodeIs(200);
    // I.seeResponseContainsKeys(["data"])

    const requestData = { "email": "anparasan.t@openturf.in" };
    const apiUrl = '/v1/auth/login'; // Replace with your API endpoint

    // Send the POST request and save the response
    try {
        const response = await I.sendPostRequest(apiUrl, requestData);
        console.log(response)
        // Check the response code and content
        if (response.status === 200) {
            I.say('Response code is 200');
            I.say('Response data:', response.data);

            // Save the response to a file
            const fileName = 'api_response.json';
            fs.writeFileSync(`./output/${fileName}`, JSON.stringify(response.data, null, 2));

            I.say(`Saved the response to ${fileName}`);
        } else {
            I.say(`Unexpected response code: ${response.status}`);
        }
    } catch (error) {
        I.say(`Error: ${error.message}`);
    }
});
