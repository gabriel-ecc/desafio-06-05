const joyasLog = (req, _, next) => {
  console.log({
    method: req.method,
    url: req.url,
    body: req.body,
    params: req.params,
    query: req.query,
  });
  next();
};

export default joyasLog;
