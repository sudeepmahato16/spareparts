import { config } from "dotenv";

config({
  path: "./.env",
});

import app from "@/app";

const port = process.env.PORT || 8001;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
