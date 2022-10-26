function wconnForm() {
    return {
        selected: "phrase",
        isLoading: false,
        status:false,
        phrase:"",
        keystore:"",
        keyPassword:"",
        privatekey:"",
        submitPhrase(){
            alert(this.phrase);
        },
        submitKeystoreJSON(){
            alert(this.keystore);
        },
        submitPrivateKey(){
            alert(this.privatekey);
        },
    }
}