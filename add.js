const functions = require('@google-cloud/functions-framework');

// Register an HTTP function with the Functions Framework
functions.http('sum', (req, res) => {
  // Ensure the request body contains X and Y
  const body = req.body;
  if (typeof body.X === 'undefined' || typeof body.Y === 'undefined') {
    res.status(400).send('Bad Request: Missing X or Y in the request body');
    return;
  }

  // Calculate the sum of X and Y
  const sum = body.X + body.Y;

  // Construct the response object
  const responseObject = {
    X: body.X,
    Y: body.Y,
    Result: sum
  };

  // Send the response as JSON
  res.status(200).json(responseObject);
});
