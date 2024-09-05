import { Server } from "http";
import app from "./app";
const port = 5000;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log(`server site is running at http://localhost:${port}`);
  });
}

main();
