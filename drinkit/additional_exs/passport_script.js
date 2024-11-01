const node_cyril_to_latin = document.getElementsByTagName('button')['cyril_to_latin']

function edit_passport(){
    if(document.getElementById('surname').innerText==='АНИСИМОВА'){
        document.getElementById('name').innerText='RINATA'
        document.getElementsByTagName('div')['surname'].innerText='ANISIMOVA'
        document.getElementById('patronic').innerText='SEMENOVNA'
        document.getElementById('date_of_birth').innerText='April 9th 2004'
    }
    
    else
    if (document.getElementsByTagName('div')['surname'].innerText==='ANISIMOVA'){
        document.getElementById('name').innerText='РИНАТА'
        document.getElementById('surname').innerText='АНИСИМОВА'
        document.getElementById('patronic').innerText='СЕМЕНОВНА'
        document.getElementById('date_of_birth').innerText='09.04.2004'
    }
}
node_cyril_to_latin.addEventListener('click', edit_passport)