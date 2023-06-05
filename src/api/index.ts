import axios from 'axios';
const BaseUrl = 'http://localhost:8080';
export const Api = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

    }
});
export function getFileUrl(filename: string) {
    return `${BaseUrl}/${filename}`;
}

