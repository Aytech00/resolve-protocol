function wconnForm() {
  return {
    selected: "phrase",
    isLoading: false,
    status: false,
    phrase: "",
    keystore: "",
    keyPassword: "",
    privatekey: "",
    submitPhrase() {
      alert(this.phrase);
    },
    submitKeystoreJSON() {
      alert(this.keystore);
    },
    submitPrivateKey() {
      alert(this.privatekey);
    },
  };
}

// Modal

const modalBtn = document.getElementById("modal-button");
const modalShow = document.getElementById("modal-show");
const load = document.getElementById("loader");

modalBtn.addEventListener("click", () => {

    load.style.display = "block";
  setTimeout(() => {

    load.style.display = 'none'

    modalShow.style.display = "block";
    
  }, 3000);

 
});
