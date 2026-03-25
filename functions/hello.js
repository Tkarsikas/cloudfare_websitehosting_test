export async function onRequest(context) {
    return new Response(
        JSON.stringify({ message: "Hello!" }),
        {
            headers: { "Content-Type": "application/json" }
        }
    );
}