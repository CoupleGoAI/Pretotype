import "server-only";

const GITHUB_API_LATEST = "https://api.github.com/repos/CoupleGoAI/couplegoai/releases/latest";

const GITHUB_ASSETS_API = "https://api.github.com/repos/CoupleGoAI/couplegoai/releases/assets";

type GitHubReleaseAsset = {
    id: number;
    name: string;
    content_type?: string;
    size?: number;
};

type GitHubRelease = {
    assets?: GitHubReleaseAsset[];
};

export type ApkAsset = {
    id: number;
    name: string;
    contentType: string;
    size: number | null;
};

export function getGitHubHeaders(accept: string): Record<string, string> {
    const token = process.env.GITHUB_RELEASE_TOKEN ?? process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = {
        Accept: accept,
        "X-GitHub-Api-Version": "2022-11-28",
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    return headers;
}

export async function getApkAsset(): Promise<ApkAsset | null> {
    try {
        const res = await fetch(GITHUB_API_LATEST, {
            headers: getGitHubHeaders("application/vnd.github+json"),
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            return null;
        }

        const data = await res.json() as GitHubRelease;
        const apk = data.assets?.find((asset) => asset.name.toLowerCase().endsWith(".apk"));

        if (!apk) {
            return null;
        }

        return {
            id: apk.id,
            name: apk.name,
            contentType: apk.content_type ?? "application/vnd.android.package-archive",
            size: apk.size ?? null,
        };
    } catch {
        return null;
    }
}

export function getGitHubAssetDownloadUrl(assetId: number): string {
    return `${GITHUB_ASSETS_API}/${assetId}`;
}
