import type { PageLoad } from './$types';

interface Release {
	tag_name: string;
	prerelease: boolean;
	assets: {
		name: string;
		browser_download_url: string;
	}[];
}

export const load: PageLoad = async ({ fetch }) => {
	const req = await fetch('https://api.github.com/repos/openwars/openwars/releases', {
		headers: {
			Accept: 'application/vnd.github.v3+json',
			Origin: 'https://openwars.chimoteam.eu.org'
		}
	});
	const res: Release[] = await req.json();

	if (req.status !== 200 || !Array.isArray(res) || res.length == 0) {
		return {
			linux: {
				stable: {
					version: 'N/A',
					url: '#'
				},
				testing: {
					version: 'N/A',
					url: '#'
				}
			},
			windows: {
				stable: {
					version: 'N/A',
					url: '#'
				},
				testing: {
					version: 'N/A',
					url: '#'
				}
			}
		};
	}

	const latestStable = res.find((release) => !release.prerelease) as Release;
	const latestTesting = res.find((release) => release.prerelease) as Release;

	const stableLinuxUrl = latestStable.assets.find((asset) =>
		asset.name.endsWith('.AppImage')
	)?.browser_download_url;
	const stableWindowsUrl = latestStable.assets.find((asset) =>
		asset.name.endsWith('.exe')
	)?.browser_download_url;
	const testingLinuxUrl = latestTesting.assets.find((asset) =>
		asset.name.endsWith('.AppImage')
	)?.browser_download_url;
	const testingWindowsUrl = latestTesting.assets.find((asset) =>
		asset.name.endsWith('.exe')
	)?.browser_download_url;

	return {
		linux: {
			stable: {
				version: latestStable.tag_name,
				url: stableLinuxUrl
			},
			testing: {
				version: latestTesting.tag_name,
				url: testingLinuxUrl
			}
		},
		windows: {
			stable: {
				version: latestStable.tag_name,
				url: stableWindowsUrl
			},
			testing: {
				version: latestTesting.tag_name,
				url: testingWindowsUrl
			}
		}
	};
};
