const GITHUB_REPO = "https://github.com/CoupleGoAI/couplegoai";
const GITHUB_API_LATEST = "https://api.github.com/repos/CoupleGoAI/couplegoai/releases/latest";

export async function getApkUrl(): Promise<string> {
    try {
        const res = await fetch(GITHUB_API_LATEST, {
            headers: { Accept: "application/vnd.github+json" },
            next: { revalidate: 3600 },
        });
        if (!res.ok) throw new Error();
        const data = await res.json() as { assets: { name: string; browser_download_url: string }[] };
        const apk = data.assets.find((a) => a.name.endsWith(".apk"));
        return apk?.browser_download_url ?? `${GITHUB_REPO}/releases/latest`;
    } catch {
        return `${GITHUB_REPO}/releases/latest`;
    }
}
