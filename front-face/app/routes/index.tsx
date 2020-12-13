import { useRouteData } from "@remix-run/react";

export function meta() {
  return {
    title: "Yay Remix!",
    description: "Howdy!",
  }
}

export default function Index() {
  let data = useRouteData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Hallow Monami!</h2>
      <p>
	  Show me ze monay!
      </p>
      <p>loader: {data.message}</p>
    </div>
  );
}

