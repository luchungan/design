interface Person{
    fristName:string,
    lastName:string
}

function greeter(person:Person){
    return 'hello,'+person.fristName + person.lastName

}

let user = {fristName:'lily',lastName:'lala'}

document.body.innerHTML = greeter(user)