function sendEmail(body, to, callback) {
    setTimeout(() => {
        console.log(`
            for: ${to}
            ------------------------
            ${body}
            ------------------------
        `)
        callback("OK", 10, "8s");
    },2000)
}
console.log("Send...");
sendEmail("Hello world!", "guioliveira@hotmail.com", (status, amount, time) => {
    console.log(`
        Your email has been send! 
        status: ${status},
        amount: ${amount},
        time: ${time}
    `)
});
