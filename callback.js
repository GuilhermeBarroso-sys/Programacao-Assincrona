function sendEmail(body, to, callback) {
    setTimeout(() => {
        console.log(`
            for: ${to}
            ------------------------
            ${body}
            ------------------------
        `)
        callback();
    },2000)
}
console.log("Send...");
sendEmail("Hello world!", "guioliveira@hotmail.com", () => {
    console.log("your email has been send! ");
});
