# Darla Vishnu Vardhan Portfolio

## Project Overview

This is a portfolio website built with **React** and styled using **TailwindCSS**.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Locally](#running-locally)
- [Building for Production](#building-for-production)
- [Deploying to Netlify (Using the dist Folder)](#deploying-to-netlify-using-the-dist-folder)
- [Contact](#contact)

## Prerequisites

- **Node.js** and **npm** installed
- **Git** installed

## Getting Started

### 1. Clone the Repository

Open your terminal and run:

```bash
git clone 
cd 
```

Replace `` with the actual GitHub URL.

## Running Locally

1. **Install dependencies**:

    ```bash
    npm install
    ```

2. **Start the development server**:

    ```bash
    npm run dev
    ```

3. Open [http://localhost:3000](http://localhost:5173) in your browser to view your project.

## Building for Production

To generate an optimized production build in the `dist` folder (assuming your project is set up to output to `dist`):

```bash
npm run build
```

After the build finishes, the production-ready files will be in the `dist` directory.

## Deploying to Netlify (Using the dist Folder)

You can easily deploy your portfolio on **Netlify** by uploading the `dist` folder:

1. **Log in to [Netlify](https://app.netlify.com/)**.
2. In the left sidebar, click on **"Deploys"**.
3. Scroll down to the section labeled **"Deploy your site"**.
4. You’ll see a **"Drag and drop your site output folder here"** area.
5. **Drag and drop your local `dist` folder** onto this area.
6. Netlify will automatically upload and host your project.

**Netlify deployment steps illustrated:**

| Step     | Action                                               |
|----------|------------------------------------------------------|
| 1        | Log in to Netlify                                    |
| 2        | Open Project -> Deploys (left side panel)            |
| 3        | Scroll to "Drag and drop your site output folder"    |
| 4        | Drop the `dist` folder                               |
| 5        | Wait for deployment to finish                        |
| 6        | Access your deployed site via the provided Netlify URL |

## Additional Tips

- Whenever you make changes, rebuild your project (`npm run build`) and re-upload the updated `dist` folder on Netlify.
- Make sure your build config is set to output files to `dist` (default in Vite; for Create React App, the output is usually `build`).

## Contact

For questions or suggestions, please reach out via your preferred contact method!

Feel free to copy, modify, or elaborate on these instructions to fit your project needs.
