const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({ 
      message: "Hello Opsta Intern!", 
      routing: "Passed through Ingress -> Service -> Pod"
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
