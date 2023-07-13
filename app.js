const card = document.getElementById("card-demo");
const captureButton = document.getElementById("capture-btn");
const previewCard = document.querySelector(".preview-card");
const downloadButton = document.getElementById("download-btn");

captureButton.addEventListener("click", async () => {
  downloadButton.classList.remove("hide");
  previewCard.classList.remove('hide')
  const canvas = await html2canvas(card);
  const imageURL = canvas.toDataURL();
  previewCard.innerHTML = `<img src="${imageURL}"/>`;

 download(downloadButton, downloadButton.appendChild(document.createElement('a')), imageURL)
});

function download(parent, aHref, imageURL){
    aHref.setAttribute("href", imageURL);
    aHref.setAttribute("download", "image.png");
  
    parent.addEventListener("click", () => {
      aHref.click();
      aHref.remove();
    });
}