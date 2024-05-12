import fetch from "node-fetch";
import FormData from "form-data";
import 'dotenv/config'



export class Storage2API {
    async _handleFile(req, file, cb) {
        const { originalname: filename, stream: readable } = file;

        const formData = new FormData();
        formData.append("file", readable, filename);

        const requestOptions = {
            method: "POST",
            headers: {
                'x-api-key': `${process.env.API_KEY}`,
                'host': `${process.env.HOSTNAME_API}`
            },
            body: formData,
        };

        try {
            const response = await fetch(
                process.env.ENDPOINT_API,
                requestOptions
            );

            const data = await response.json();
            cb(null, data);
        } catch (error) {
            cb(error)
        }

    }
}