const app = require("./app.js");
// const connection = require("../database/index.js");

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
