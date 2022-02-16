const { createReadStream } = require("fs");
const { join } = require("path");
const http = require("http");

const port = 3000;

http
.createServer((req, res) => {
    const { url, method } = req;

    if (url === "/" && method === "GET") {
        res.setHeader("Content-Type", "text/html");
        const readStream = createReadStream(join(__dirname, "./public/about.html"));
        readStream.pipe(res);
    } else {
        res.setHeader("Content-Type", "text/html");
        const readStream = createReadStream(
            join(__dirname, "./public/notFound.html")
        );
        readStream.pipe(res);
    }
})
.listen(port, () => console.log(`Server listening on port ${port}`));