# Vite Frontend

<p align="center">
	<img width="500" alt="AWS Workshop Cover" src="https://github.com/user-attachments/assets/f515c62c-dce3-49a1-ac3b-e734a0adb4af" />
</p>

---

## Overview

Install Vite with React, then run the usual dev/build workflow.

## Prerequisites

- Node.js 18+ and npm or pnpm

## Steps

1. Create a new Vite app:
	- npm: `npm create vite@latest my-app`
	- pnpm: `pnpm create vite@latest my-app`
   ![Setup 1](image.png)
2. When prompted, choose:
	- Framework: **React**

   ![React](image-1.png)
	- Variant: **React + TypeScript** (recommended) or **React**

   ![alt text](image-2.png)
3. Move into the project folder: `cd my-app`.
4. Install dependencies: `npm install` or `pnpm install`.
5. Start the dev server: `npm run dev`.
6. Open the local URL printed in the terminal to verify the app loads.
7. Build for production: `npm run build`.
8. Preview the production build locally: `npm run preview`.

 ![React](image-3.png)
## Troubleshooting

- Dev server fails to start: confirm Node.js version and reinstall dependencies.
- Prompts do not appear: run the create command without extra flags.
- Blank page: check the console output for missing env vars or build errors.

## Notes

- Environment variables should be set in your local shell or in a local env file that is not committed.