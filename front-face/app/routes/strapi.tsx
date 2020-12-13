import React from "react";
import { useRouteData } from '@remix-run/react'

export function headers() {
    return {
        "cache-control": "public, max-age=300, s-max-age=3600",
    };
}

export default function Strapi() {
    let data = useRouteData()
    console.log(data)
    return (
        <div>
            <h2>From Strapi</h2>
        </div>
    );
}