# Intern Dashboard

A simple dashboard application for interns to track their referrals and donations.

## Features

- Login/Signup functionality
- Dashboard with intern information
- Referral code generation
- Donation tracking
- Rewards system based on donation amounts
- GitHub Pages compatibility
- Auto-dashboard mode (no data saving)

## Running the Application

### Option 1: With Server (Requires Node.js)

1. Install Node.js if you don't have it already
2. Open a terminal in the project directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   node server.js
   ```
5. Open your browser and navigate to `http://localhost:3000`

### Option 2: Without Server (Offline Mode)

If you don't have Node.js installed or don't want to run the server:

1. Simply open the `offline.html` file in your browser
2. The application will run in offline mode without requiring a server
3. Note that in offline mode, data will not be saved between sessions

### Option 3: Auto-Dashboard Mode

For a simplified experience that automatically creates a dashboard without saving any data:

1. Open the `auto-dashboard.html` file in your browser, or run `start_auto_dashboard.bat` on Windows
2. Enter your details and click "Create Dashboard"
3. A dashboard will be generated immediately without any server communication
4. No data is saved - refreshing the page will reset everything

### Option 4: GitHub Pages Version

This application is also compatible with GitHub Pages:

1. When accessing the application via GitHub Pages, it will automatically use the offline mode
2. The application detects when it's running on GitHub Pages and adjusts accordingly
3. A special `github-pages.html` file is provided specifically for GitHub Pages deployment
4. The main `index.html` will automatically redirect to the GitHub Pages version when hosted there

## Troubleshooting

If you encounter the error "This page says Something went wrong!" when clicking the Login/Signup button:

1. Make sure the server is running if you're using `index.html`
2. Try using `offline.html` instead, which works without a server
3. For the simplest experience with no data saving, use `auto-dashboard.html`
4. If you're using GitHub Pages, make sure you're accessing the site through the proper GitHub Pages URL
5. For GitHub Pages deployment, the application should automatically redirect to the GitHub Pages version
6. If the redirect doesn't work, try accessing `github-pages.html` directly
7. Check your browser console for more detailed error messages

## Technical Details

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js with Express
- Data Storage: JSON file (data.json)
