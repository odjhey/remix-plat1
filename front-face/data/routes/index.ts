import type { Loader } from "@remix-run/data";

export let loader: Loader = async () => {
  return {
    message: "bro, this message is from from data/routes",
  };
};

