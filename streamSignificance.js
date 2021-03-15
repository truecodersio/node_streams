const fs = require("fs");
const file = fs.createWriteStream("./djkhaled.txt");

for (let i = 0; i <= 5e5; i++) {
  file.write(
    "Another one. Another one. Another one. Another one. Another one. Another one. Another one. Another one. Another one\n"
  );
}

file.end();

const { createReadStream, readFile } = require("fs");
const { createServer } = require("http");

const server = createServer((req, res) => {
  const readStream = createReadStream("./djkhaled.txt");
  readStream.pipe(res);
});

server.listen(3000, () => console.log("Another one..."));
