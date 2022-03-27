module.exports = (error, request, response, _) => {
  if (error.message.includes('invalid input syntax for type uuid')) {
    response.status(400).json({ error: 'Invalid input syntax for type uuid' });
  }
  response.status(error.status || 500);
  response.json({ error: error.message });
};
