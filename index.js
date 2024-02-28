require("dotenv").config();
const app = require("./app");

const { PORT, BACKEND_URL } = process.env;

app.listen(PORT, () => {
  console.log(`Server started on ${BACKEND_URL}${PORT}`);
});
