
const UNSPLASH_ACCESS_KEY = "Pd8APIXjQwibU2oEFAiaOUVp4hi9NDh6LTPVNOff2cI"; // thay bằng Access Key của bạn

async function setRandomBackground(query = "study") {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`);
    const data = await response.json();

    if (data && data.urls && data.urls.full) {
      document.body.style.backgroundImage = `url(${data.urls.full})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
    }
  } catch (error) {
    console.error("Không thể tải ảnh từ Unsplash:", error);
  }
}
