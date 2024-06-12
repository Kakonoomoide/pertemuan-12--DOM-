const nameEl = document.getElementById("name");
const idCardNameEl = document.getElementById("id-card-name");
nameEl.addEventListener("input", () => {
  idCardNameEl.textContent = nameEl.value;
  document.querySelector(".id-card__subject-id").textContent = md5(
    nameEl.value
  ).slice(0, 8);
});

// Bind date of birth
const dobEl = document.getElementById("date-of-birth");
const idCardDobEl = document.getElementById("id-card-date-of-birth");

function updateIdCardDob() {
  idCardDobEl.textContent = dobEl.value;
}

dobEl.addEventListener("input", updateIdCardDob);
window.addEventListener("DOMContentLoaded", updateIdCardDob);

// Bind gender
const genderEl = document.getElementById("gender");
const idCardGenderEl = document.getElementById("id-card-gender");

genderEl.addEventListener("change", () => {
  const selectedOption = genderEl.options[genderEl.selectedIndex];
  const selectedValue = selectedOption.value;

  // Menampilkan inisial jenis kelamin
  switch (selectedValue) {
    case "M":
      idCardGenderEl.textContent = "M";
      break;
    case "F":
      idCardGenderEl.textContent = "F";
      break;
    case "AH":
      idCardGenderEl.textContent = "AH";
      break;
    case "C":
      idCardGenderEl.textContent = "C";
      break;
    case "CL":
      idCardGenderEl.textContent = "CL";
      break;
    default:
      idCardGenderEl.textContent = ""; // Jika tidak valid, kosongkan
  }
});

// Bind height
const heightEl = document.getElementById("height");
const idCardHeightEl = document.getElementById("id-card-height");

heightEl.addEventListener("input", () => {
  idCardHeightEl.textContent = heightEl.value;
});

// Bind class
const classRadioButtons = document.querySelectorAll('input[name="class"]');
const idCardClassEl = document.getElementById("id-card-Class");
classRadioButtons.forEach((button) => {
  button.addEventListener("change", () => {
    if (button.checked) {
      idCardClassEl.textContent = button.value;
    }
  });
});

// Bind mugshot
document.getElementById("mugshot").addEventListener("change", function () {
  if (this.files && this.files[0]) {
    var FR = new FileReader();
    FR.onload = function (e) {
      var img = document.getElementById("id-card-mugshot");
      img.src = e.target.result;
    };
    FR.readAsDataURL(this.files[0]);
  }
});

// download the card
const downloadButton = document.getElementById("download-button");

// Menambahkan event listener untuk klik pada tombol unduh
downloadButton.addEventListener("click", () => {
  html2canvas(document.getElementById("id-card"), {
    onrendered: function (canvas) {
      const imageData = canvas.toDataURL("image/png");

      // Membuat elemen <a> untuk mengunduh gambar
      const link = document.createElement("a");
      link.href = imageData;
      link.download = "id_card.png";
      link.click();
    },
  });
});
