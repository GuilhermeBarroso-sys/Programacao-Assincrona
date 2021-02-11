// promises example
function getUsers() {
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {name: "Guilherme", lang: "JS"},
                    {name: "Bob", lang: "Java"},
                    {name: "Matheus", lang: "JS"},
                    {name: "Gustavo", lang: "Python"}
                ])
            }, 2000);
            
        });
   
    
}
/*
getUsers().then(users => {
    
    users.forEach(user => {
        
        console.log(`
            nome: ${user.name}
            linguagem: ${user.lang}
        `)
    })
})
var array = ['ola','opa','tudo bom?'];
*/
// await

async function app() {
    var users = await getUsers();
    console.log(users)
    console.log("Vou ser bloqueado pelo await!");
}

app();

// async await é uma forma de escrever codigos assincronos com estilo sincronos