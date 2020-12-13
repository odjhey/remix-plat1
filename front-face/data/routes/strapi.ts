import type { Loader } from "@remix-run/data"
let loader: Loader = () => {
    return fetch("http://codee.cafe:1337/examples")
}

export { loader }
