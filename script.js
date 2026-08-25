document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("message").textContent =
  "REQUEST RECEIVED! Before publishing the site, connect this form to your business email, Shopify, Wix, or another order system so customer requests are delivered to you.";
});