import axios from "axios";

// dessa forma, passando a baseURL no metodo create, quando chamarmos um get, por eexemplo, precisamos so passar o endpoint(/users/:id)
export const api = axios.create({
    baseURL: "http://localhost:3333"
})