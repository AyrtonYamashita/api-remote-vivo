import express from "express";
import multer from "multer";

import { Storage2API } from "./handle-file.js";

const app = express();
const PORT = 3000;

app.get("/", (_, res) => {
    res.writeHead(200, {connection: "close"});
    res.end(`
        <html>
            <head></head>
            <body>
                <form method="POST" enctype="multipart/form-data">
                    <input type="file" name="file"><br />
                    <input type="submit">
                </form>
            </body>
        </html>
    `);
});

const handleFile = new Storage2API();
const upload = multer({ storage: handleFile });

app.post("/", upload.single('file'), (req, res) => {
    console.log(req.file);
    res.send("OK");
});

app.listen(PORT, () => console.log('App running on port: ' + PORT));