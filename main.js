// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

const liked = document.querySelector(".like-glyph");
liked.onclick = () => {
  mimicServerCall()
    .then((response) => {
      if (response) {
        if (liked.textContent === EMPTY_HEART) {
          liked.textContent = FULL_HEART;
          liked.classList.add("activated-heart");
        } else if (liked.textContent === FULL_HEART) {
          liked.innerHTML = EMPTY_HEART;
          liked.classList.remove("activated-heart");
        }
      }
    })
    .catch(() => {
      const modal = document.querySelector("#modal");
      modal.classList.remove("hidden");
      setTimeout(function () {
        modal.classList.add("hidden");
      }, 3000);
    });
};

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
