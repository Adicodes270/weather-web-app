export default {
    async fetch(request) {
        const url = new URL(request.url);
        const city = url.searchParams.get("q");

        if (!city) {
            return new Response(JSON.stringify({ error: "No city provided" }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
        }

        const API_KEY = "ebcb9bb3bf45435280d115810260906"; // 👈 paste your key here

        const res = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`
        );

        const data = await res.json();

        return new Response(JSON.stringify(data), {
            status: res.status,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
    }
};