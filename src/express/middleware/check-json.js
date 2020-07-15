// This is just a simple middleware
const checkJsonContent = (req, res, next) => {
  const contentType = req.headers['content-type'];

  if (contentType === 'application/json') {
    next();
  } else {
    // The content is not in json format
    return res.status(400).json({ error: 'Content type should be json!' });
  }
};

module.exports = checkJsonContent;
