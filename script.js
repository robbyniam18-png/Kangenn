const messages = [
    "serius kamu mencet ini aku bisa tahu lewat serverku",
    "Baiklah kalau begitu??",
    "Aku akan mundur?",
    "anggap aja aku gak pernah datang",
    "setelah ini server otomatis tutup",
    "yaudah ya jangan WA",
    "jangan DM",
    "makasih sudah beri harapan",
    "tenang aku akan bilang ke orangtua aku mundur",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}