function sendEmail(body, to, callback) {
    setTimeout(() => {
        console.log(`
            for: ${to}
            ------------------------
            ${body}
            ------------------------
        `)
        var error = true;
        if(error) {
            callback("Email has been not send!");
        }
        else {
            callback();
        }
        
    },2000)
}
console.log("Send...");
sendEmail("Hello world!", "guioliveira@hotmail.com", (error) => {
    if(error == undefined ) {
        console.log(" O email foi enviado com sucesso!");
    }
    else {
        console.log(error);
    }
});
