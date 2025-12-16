document.getElementById("validatorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const certificateId = document.getElementById("certificateId").value.trim();
  const resultBox = document.getElementById("resultBox");

  if (certificateId === "VOC123") {
    resultBox.innerText = "✅ Certificate is valid!";
    resultBox.style.display = "block";
    resultBox.style.color = "green";
  } else {
    resultBox.innerText = "❌ Certificate not found!";
    resultBox.style.display = "block";
    resultBox.style.color = "red";
  }
});
