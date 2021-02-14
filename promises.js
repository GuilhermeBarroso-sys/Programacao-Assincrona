// promises aninhadas
function getId() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({id : 5})
        },2000)
    })
}

function consultID(id) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("gui@hotmail.com");
        },2000);
    })
}



function sendEmail(body, to) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           var erro = false;

           if(!erro) {
               resolve({time:6 , to: to })
           }
           else {
               reject("Invalid Body!") 
           }
        },2000);
    })
}
async function send() {
    
    try{
        var id = await getId();
        var email = await consultID(id);
   
        sendEmail("Hello World!", email).then(({time,to}) => {
        console.log(`
                    Sucess! Email has been send!
                    info:
                    Time: ${time}
                    To: ${to}
                    User id: ${id}
                `)
        })
    }
    catch(e) {
        console.log("oi");
    }
}
send();
/*
getId().then(({id}) => {
    consultID(id).then((email) => {
        sendEmail("Hello World!", email).then(({time, to}) => {
            console.log(`
                    Sucess! Email has been send!
                    info:
                    Time: ${time}
                    To: ${to}
                    User id: ${id}
                `)
        })
    })
})
*/