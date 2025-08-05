// Get elements
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const menuBtn = document.getElementById("menu-btn");

const authView = document.getElementById("auth-view");
const dashboardView = document.getElementById("dashboard-view");
const sidebar = document.querySelector(".sidebar");

const internWelcome = document.getElementById("intern-welcome");
const internNameSpan = document.getElementById("intern-name");
const internEmailSpan = document.getElementById("intern-email");
const referralCodeSpan = document.getElementById("referral-code");
const donationsSpan = document.getElementById("donations");

// Dummy donation amount - used for all users
const dummyDonation = 5000;

// Force offline mode - never save data
const forceOfflineMode = true;

loginBtn.addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }
  
  // Always use offline mode to avoid saving data
  let intern;
  
  try {
    // Create user data directly without saving to server
    intern = {
      name,
      email,
      referralCode: name.toLowerCase().replace(/\s+/g, "") + "2005",
      donations: dummyDonation
    };
    
    // Only for display purposes - log that we're in offline mode
    console.log("Using offline mode - no data will be saved");

    // Update dashboard
    internWelcome.textContent = intern.name;
    internNameSpan.textContent = intern.name;
    internEmailSpan.textContent = intern.email;
    referralCodeSpan.textContent = intern.referralCode;
    donationsSpan.textContent = intern.donations;

    // Toggle view
    authView.style.display = "none";
    dashboardView.style.display = "flex";
  } catch (err) {
    console.error(err);
    
    // In case of any error, just show a generic message
    console.error("Error:", err);
    alert("Something went wrong! Please try again.");
    return;
  }
});

logoutBtn.addEventListener("click", () => {
  // Reset fields (optional)
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  // Switch views
  dashboardView.style.display = "none";   
  authView.style.display = "flex";
});

// Add menu button functionality to toggle sidebar
menuBtn.addEventListener("click", () => {
  // Check if sidebar is visible
  const isSidebarVisible = sidebar.style.display !== "none";
  
  // Toggle sidebar visibility
  sidebar.style.display = isSidebarVisible ? "none" : "block";
  
  // Adjust main content margin when sidebar is hidden
  const main = document.querySelector(".main");
  main.style.marginLeft = isSidebarVisible ? "0" : "220px";
});
