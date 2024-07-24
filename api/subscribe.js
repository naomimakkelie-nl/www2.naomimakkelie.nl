const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      // Parse the request body to get the email
      const { email } = req.body;
      // Define the path to the file where emails will be stored
      const filePath = path.join(__dirname, 'subscribers.txt');
      // Append the email to the file
      fs.appendFileSync(filePath, `${email}\n`);
      // Send a success response
      res.status(200).send({ message: 'Subscription successful' });
    } catch (error) {
      // Handle any errors
      res.status(500).send({ error: 'Internal Server Error' });
    }
  } else {
    // If the request method is not POST, return a 405 Method Not Allowed
    res.status(405).send({ error: 'Method Not Allowed' });
  }
};
