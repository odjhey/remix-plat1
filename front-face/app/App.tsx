import { Meta, Scripts, Styles, Routes, useGlobalData } from "@remix-run/react";
import { Link } from 'react-router-dom'

export default function App() {
  let data = useGlobalData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Styles />
      </head>
      <body>
        <Routes />
        <Scripts />
        <footer>
          <Link to="/strapi">strapi</Link> {` `}
          <Link to="/">home</Link>
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>
      </body>
    </html>
  );
}

