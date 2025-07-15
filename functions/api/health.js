export async function onRequestGet(context) {
  return new Response(JSON.stringify({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: "cloudflare-pages",
    routes: "Cloudflare Functions are working"
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}