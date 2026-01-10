# GitHub Setup & Deployment Guide

## Step 1: Create Repository on GitHub (if not already created)

Visit https://github.com/new and:
- **Repository name:** `AG`
- **Description:** Ambulance Website (optional)
- **Visibility:** Public
- **Initialize with:** Leave unchecked (we have local code ready)
- Click **Create repository**

## Step 2: Push Code to GitHub

Run these commands in PowerShell from the project folder:

```powershell
cd "d:\AmbulanceWeb-main\ambulance-website"
git push -u origin main
```

You will be prompted to authenticate. Choose one:

### Option A: GitHub Web Login (Recommended)
When prompted, click **Authorize** in the browser window that opens.

### Option B: Personal Access Token
1. Go to https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Set:
   - Name: `git-cli-token`
   - Expiration: 90 days
   - Scopes: Check `repo` and `workflow`
4. Copy the token
5. When git prompts for password, paste the token

## Step 3: Deploy to GitHub Pages

Once the push succeeds, run:

```powershell
npm run deploy
```

This will automatically publish the built site to the `gh-pages` branch.

## Step 4: Enable GitHub Pages

1. Go to https://github.com/rahuladhikary2005/AG/settings/pages
2. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Click **Save**
4. Wait 30-60 seconds for deployment to complete

Your site will be live at: **https://rahuladhikary2005.github.io/AG/**

## Verify Everything

```powershell
# Check remote is configured
git -C "d:\AmbulanceWeb-main\ambulance-website" remote -v

# Check if gh-pages branch exists after deploy
git -C "d:\AmbulanceWeb-main\ambulance-website" branch -a
```

## Troubleshooting

If `npm run deploy` fails:
- Make sure you've successfully pushed `main` first
- Ensure `gh-pages` package is installed: `npm install gh-pages --save-dev`
- Check `package.json` has the deploy script: `"deploy": "gh-pages -d dist"`
