document.addEventListener("DOMContentLoaded", function () {
    let adDiv = document.createElement("div");
    adDiv.className = "ad-banner google-ad";
    adDiv.innerHTML = "📥 Download Now! (Fake Ad)";
    adDiv.style = "background-color: red; color: white; padding: 15px; font-size: 18px; cursor: pointer; margin: 20px;";
    adDiv.onclick = function () {
        alert("Oops! You clicked a fake ad! Imagine this installed malware.");
        window.location.href = "https://malicious-site.com"; // Simulated malicious redirect
    };
    document.body.prepend(adDiv);
});
