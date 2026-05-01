# Vite Frontend

<p align="center">
	<img width="500" alt="AWS Workshop Cover" src="https://github.com/user-attachments/assets/f515c62c-dce3-49a1-ac3b-e734a0adb4af" />
</p>

---

## Overview

- Install Vite with React
- Run the dev server and verify it loads
- Build and preview a production build

## Prerequisites

- Node.js 18+ and npm or pnpm

## Install Node.js

1. Download the LTS installer: https://nodejs.org/en/download
2. Run the installer and finish setup.
3. Verify: `node -v`

> ✅ **EXPECTED RESULT:** `node -v` prints a version like `v18.x.x` or newer.

## Steps

### Step 1 — Create a Vite app

Run one of these commands:

- npm: `npm create vite@latest my-app`
- pnpm: `pnpm create vite@latest my-app`

![Setup 1](image.png)

### Step 2 — Choose React

When prompted, choose:

- Framework: **React**
- Variant: **React + TypeScript** (recommended) or **React**

![React](image-1.png)

![alt text](image-2.png)

### Step 3 — Install and run

1. Move into the project folder: `cd my-app`.
2. Install dependencies: `npm install` or `pnpm install`.
3. Start the dev server: `npm run dev`.
4. Open the local URL printed in the terminal to verify the app loads.

> ✅ **EXPECTED RESULT:** You see the default Vite + React page in your browser.

### Step 4 — Build and preview (Optional)

1. Build for production: `npm run build`.
2. Preview the production build locally: `npm run preview`.

> ✅ **EXPECTED RESULT:** The preview URL loads the production build.

 ![React](image-3.png)
## Troubleshooting

- Dev server fails to start: confirm Node.js version and reinstall dependencies.
- Prompts do not appear: run the create command without extra flags.
- Blank page: check the console output for missing env vars or build errors.

## Notes

- Environment variables should be set in your local shell or in a local env file that is not committed.