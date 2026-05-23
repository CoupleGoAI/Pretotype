import {
    getApkAsset,
    getGitHubAssetDownloadUrl,
    getGitHubHeaders,
} from "@/lib/getApkUrl";

async function resolveApkDownload(): Promise<Response> {
    const asset = await getApkAsset();

    if (!asset) {
        return Response.json(
            { error: "Android beta APK is temporarily unavailable." },
            { status: 503 },
        );
    }

    const downloadResponse = await fetch(getGitHubAssetDownloadUrl(asset.id), {
        headers: getGitHubHeaders("application/octet-stream"),
        redirect: "manual",
        cache: "no-store",
    });
    const signedDownloadUrl = downloadResponse.headers.get("location");

    if (signedDownloadUrl) {
        return new Response(null, {
            status: 302,
            headers: {
                Location: signedDownloadUrl,
                "Cache-Control": "no-store",
            },
        });
    }

    if (downloadResponse.ok && downloadResponse.body) {
        const headers = new Headers({
            "Content-Type": asset.contentType,
            "Content-Disposition": `attachment; filename="${asset.name.replaceAll("\"", "")}"`,
            "Cache-Control": "no-store",
        });

        if (asset.size) {
            headers.set("Content-Length", String(asset.size));
        }

        return new Response(downloadResponse.body, { headers });
    }

    return Response.json(
        { error: "Android beta APK is temporarily unavailable." },
        { status: 503 },
    );
}

export async function GET(): Promise<Response> {
    return resolveApkDownload();
}

export async function HEAD(): Promise<Response> {
    const response = await resolveApkDownload();

    return new Response(null, {
        status: response.status,
        headers: response.headers,
    });
}
