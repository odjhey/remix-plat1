import type { Loader } from "@remix-run/data"
let loader: Loader = () => {
    console.log(process.env.DATA_HOST)
    return fetch("http://localhost:1337/example-lists")
}

export { loader }