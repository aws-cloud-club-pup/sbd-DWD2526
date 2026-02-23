# SBD – Department of Web Development (DWD) 2526
### AWS Cloud Club PUP

Welcome to the official repository of the Skill Builder Division – Department of Web Development (DWD) for the 2526 cycle.

This repository contains the official starter templates used during live workshop sessions throughout the term. 

> **Note:** All activity instructions, assignments, submission requirements, and deployment guides are provided directly through the **LMS**.

---

## Repository Structure

Each workshop follows a standardized naming format:

`YYYY-MM_Workshop-Title/`

Inside each workshop folder, you will find:
*   `STARTER/` – Starter files used during the live workshop session.

*This repository is intended strictly as a central source for workshop starter templates only.*

---

## General Workshop Workflow

To keep things consistent across all modules, please follow the process outlined below.

### During the Workshop

**1. Obtain the Starter Files**
You may choose one of the following methods to get the files on your local machine:

**Option A: Clone the Repository (If Git is Installed)**
```bash
git clone https://github.com/sbd-DWD2526/<repository-name>.git
cd <repository-name>
```
Navigate to the appropriate workshop folder: `YYYY-MM_Workshop-Title/STARTER/`

**Option B: Download as ZIP (If You Are Not Using Git Locally)**
1. Click the green **Code** button on GitHub.
2. Select **Download ZIP**.
3. Extract the files to your local machine.
4. Open the correct workshop folder in your code editor.

**2. Build the Project**
Work inside the `STARTER/` directory during the live session. Ensure that your project runs properly on your local machine before the session ends.

---

### After the Workshop

Each participant must create their own personal GitHub repository for submission and deployment.

### Personal Repository Naming Format
To maintain consistency across all workshops, please use the following naming convention for your personal repositories:

`DWD2526-<WorkshopShortName>-<Surname>`

**Examples:**
*   `DWD2526-TaskCraft-Simara`
*   `DWD2526-React-DelaCruz`
*   `DWD2526-API-Reyes`

*(Note: If necessary, you may add your first initial, e.g., `DWD2526-React-SimaraD`)*

> **Important:** This naming format will be used throughout the entire 2526 cycle.

### Uploading Your Project

If you downloaded the ZIP file, you may upload your project files directly through the GitHub web interface into your newly created repository.

If you are using Git locally, initialize and push your repository using the terminal:
```bash
git init
git add .
git commit -m "Initialize workshop project"
git branch -M main
git remote add origin https://github.com/<your-username>/<repository-name>.git
git push -u origin main
```

Continue using the standard workflow as you make progress on post-workshop activities:
```bash
git add .
git commit -m "Describe your update"
git push
```

---

## Activities & Submissions

All post-workshop activities, detailed instructions, and grading criteria are published directly in the **LMS**.

Participants are responsible for reviewing their LMS module for:
*   Specific activity requirements
*   Submission deadlines
*   Deployment instructions *(if required)*
*   Evaluation criteria

---

## Deployment (If Required)

Some workshops may require hosting your project using GitHub Pages or other platforms. 
*   **Deployment must be done from your personal repository.**
*   A detailed deployment guide will be made available in the LMS when applicable.

---

## Support

If you encounter technical issues related to:
*   Git setup
*   Repository configuration
*   File structure
*   Deployment

Please contact your respective leads for assistance. Learning development workflows takes practice, and mistakes are a normal and expected part of the learning process.

> **Looking Ahead:** This repository will continue to be updated as new workshops are released throughout the 2526 term. Let us build with clarity, consistency, and continuous improvement!