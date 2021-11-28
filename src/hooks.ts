export async function handle({ request, resolve }) {
  const response = await resolve(request);

  const moddedResponse = {
    ...response,
    headers: {
      ...response.headers,
      "access-control-allow-origin": "*",
    },
  };
  return moddedResponse;
}
