async function api(){
    let response = await fetch("https://reqres.in/api/users/2")

    if(response.ok){
        return response.json()
    }
    else{
        return null
    }
}

async function exec() {
    let dado = await api()

    if(dado != null){
        return dado       
    }
}

exec()
    .then(dado => {
        const user = ({
            nome: dado.data.first_name, 
            email: dado.data.email
        })
        
        let nome = document.getElementsByClassName('nome')
        nome[0].textContent = user.nome
        
        let email = document.getElementsByClassName('email')
        email[0].textContent = user.email
    })

