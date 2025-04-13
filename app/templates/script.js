const API_URL = "https://aiklmp-1-0.onrender.com"; // Replace with your actual Render URL

document.getElementById("video-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const prompt = document.getElementById("prompt").value;
  const video_type = document.getElementById("video_type").value;

  const response = await fetch(`${API_URL}/generate/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt, video_type })
  });

  const data = await response.json();

  document.getElementById("result").innerHTML = `
    <p>${data.message}</p>
    <video controls width="400">
      <source src="${API_URL}${data.video_url}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `;
});
