const { Helper } = require('@codeceptjs/core');
const fs = require('fs');

class ApiResponseHelper extends Helper {
  // Save an API response to a file
  async saveApiResponse(response, fileName) {
    fs.writeFileSync(`./output/${fileName}`, JSON.stringify(response.data, null, 2));
  }
}

module.exports = ApiResponseHelper;
