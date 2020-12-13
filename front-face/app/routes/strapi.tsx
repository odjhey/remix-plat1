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
            <h2>Strapi</h2>
            <div>{data.map((d: any) => {
                return <div key={d.id}>
                    <div>{d.name} - {d.desc}</div>
                    <pre>{JSON.stringify(d)}</pre>
                </div>
            })}</div>
        </div>
    );
}