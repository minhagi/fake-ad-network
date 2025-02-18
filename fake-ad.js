document.addEventListener("DOMContentLoaded", function () {
    let adDiv = document.createElement("div");
    adDiv.className = "ad-container ad-slot sponsored google-ad";
    adDiv.innerHTML = "<span>📥 Fast Download</span>";
    adDiv.style = "position:fixed; bottom:10px; left:10px; background:#ff0000; color:#fff; padding:15px; font-size:18px; cursor:pointer;";
    adDiv.onclick = function () {
        alert("Oops! You clicked a fake ad! Imagine this installed malware.");
        window.location.href = "https://malicious-site.com"; // Fake redirection
    };
    document.body.appendChild(adDiv);
});
