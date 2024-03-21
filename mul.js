const functions = require('@google-cloud/functions-framework');

functions.http('mul', (req, res) => {
  // Get the JSON data from the request body
  const data = req.body;

  // Check if the request has a body and required keys
  if (!data || !data.X || !data.Y) {
    res.status(400).send('Missing required fields in JSON: "X" and "Y"');
    return;
  }

  // Extract the values of X and Y
  const x = data.X;
  const y = data.Y;

  // Calculate the sum
  const result = x * y;

  // Prepare the response object with sum
  const response = {
    X: x,
    Y: y,
    Result: result,
  };

  // Send the response with the sum in JSON format
  res.send(JSON.stringify(response));
});

exports.sumJson = functions.http('sumJson');  // Export for deployment
