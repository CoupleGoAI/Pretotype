import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email } = await req.json();

        if (!name || !email) {
            return NextResponse.json(
                { success: false, message: "Missing fields" },
                { status: 400 }
            );
        }

        const url = process.env.GOOGLE_SCRIPT_URL;
        if (!url) throw new Error("Missing GOOGLE_SCRIPT_URL");

        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            redirect: "follow",
            body: JSON.stringify({ name, email, source: "prototype" }),
        });

        const text = await res.text();

        // Helpful debug (temporarily)
        if (!res.ok) {
            console.error("AppsScript status:", res.status, text);
            throw new Error(`AppsScript failed: ${res.status}`);
        }

        let data: unknown;
        try {
            data = JSON.parse(text);
        } catch {
            console.error("Non-JSON from Apps Script:", text);
            throw new Error("Apps Script returned non-JSON response");
        }

        return Response.json(data);
    } catch (error) {
        console.error("Waitlist API error:", error);
        return NextResponse.json(
            { success: false, message: "Server error" },
            { status: 500 }
        );
    }
}
