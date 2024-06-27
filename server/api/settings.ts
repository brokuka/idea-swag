import fs from 'node:fs';
import path from 'node:path'
import { homedir } from 'node:os';

export default defineEventHandler(() => {
	const settingsPath = path.join(
		homedir(),
		"AppData",
		"Roaming",
		"Code",
		"User",
		"settings.json"
	);

	if (fs.existsSync(settingsPath)) {
		return fs.readFileSync(settingsPath, "utf8");
	}

	return {};
})