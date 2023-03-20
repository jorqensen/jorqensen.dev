export const config = {
    matcher: '/',
};

export default function middleware(request: Request) {
    const url = new URL(request.url);
    const agent = request.headers.get("User-Agent");

    if ((agent?.includes("Safari") && agent?.includes("Macintosh")) || (agent?.includes("Safari") && agent?.includes("iPhone"))) {
        url.pathname = "/safari-user-agent";
        return Response.redirect(url.toString())
    }
}
