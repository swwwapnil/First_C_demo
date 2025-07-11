document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  const resultsContainer = document.getElementById("results");

  // Load saved values
  const savedLocation = localStorage.getItem("location");
  const savedType = localStorage.getItem("propertyType");
  const savedPrice = localStorage.getItem("priceRange");

  if (savedLocation) document.getElementById("location").value = savedLocation;
  if (savedType) document.getElementById("propertyType").value = savedType;
  if (savedPrice) document.getElementById("priceRange").value = savedPrice;

  searchBtn.addEventListener("click", () => {
    const furnishing = document.getElementById("furnishing").value;
const bedrooms = document.getElementById("bedrooms").value;
const preferences = document.getElementById("preferences").value;
const sortBy = document.getElementById("sortBy").value;

// Save to localStorage
localStorage.setItem("furnishing", furnishing);
localStorage.setItem("bedrooms", bedrooms);
localStorage.setItem("preferences", preferences);
localStorage.setItem("sortBy", sortBy);


    if (!location || !propertyType || !priceRange) {
      alert("Please fill in all search fields.");
      return;
    }

    // Save selections
    localStorage.setItem("location", location);
    localStorage.setItem("propertyType", propertyType);
    localStorage.setItem("priceRange", priceRange);

    // Show fake results
    const resultsHTML = `
      <div class="result-card"><strong>${propertyType} in ${location}</strong><br>Price: ${priceRange}</div>
      <div class="result-card"><strong>2BHK ${propertyType}</strong> - Nearby ${location}<br>Rent: ${priceRange}</div>
      <div class="result-card"><strong>Furnished ${propertyType}</strong> - Immediate move-in<br>From: ${priceRange}</div>
    `;

    resultsContainer.innerHTML = resultsHTML;
    resultsContainer.classList.add("show");
  });
});
