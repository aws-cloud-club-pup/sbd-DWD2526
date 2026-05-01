# Kiro + Figma MCP Server Setup

<p align="center">
	<img width="500" alt="AWS Workshop Cover" src="https://github.com/user-attachments/assets/f515c62c-dce3-49a1-ac3b-e734a0adb4af" />
</p>

---

## Overview

Install Kiro IDE, then install the Figma Power (Design to Code) so Kiro can use the Figma MCP server on demand.

## Prerequisites

- Kiro IDE installed and signed in
- Figma access and an API token
- Node.js 18+ and npm or pnpm

## Steps

1. Install Kiro IDE:
   - Go to https://kiro.dev and download the installer.
   - Run the installer for your OS and launch Kiro.
   - Sign in on first run and finish the setup prompts.
2. Open this repo in Kiro:
   - Use `File > Open Folder`, drag and drop the folder, or run `kiro .`.
3. Install the Figma Power from the Kiro IDE:
   - Open the Powers panel (ghost with lightning bolt).
   - Find **Design to Code with Figma** and click **Install**.
4. Complete power setup when prompted:
   - Provide your Figma API token when Kiro requests it.
   - Kiro will auto-register the MCP server for the power.
5. Use Figma tools in Kiro:
   - Open the Powers panel (ghost with lightning bolt) and click **Try**.
   - Ask for design-to-code help and Kiro will activate the power as needed.

## Troubleshooting

- Power install fails: confirm you are signed in to Kiro and retry the install.
- Auth errors from Figma: regenerate the token and try again.
- MCP tools not appearing: open the Powers panel and re-run the power onboarding.
- Need logs: open the Kiro panel, go to Output, and select "Kiro - MCP Logs".

## Notes

- Do not commit local tokens or secrets.
- Installing a power registers its MCP server automatically.
