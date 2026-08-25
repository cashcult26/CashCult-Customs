document.getElementById("customOrderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("form-message").textContent =
    "Your request is ready! Next we can connect this form to your email so real customer orders come directly to you.";
});