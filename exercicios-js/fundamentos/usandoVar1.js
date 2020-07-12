// Var fica visível 
{
    {
        {
            {
                var sera = 'será???'
                console.log(sera) // global
            }
        }
    }
}

console.log(sera)

function teste(){
    // var nao fica visível
    var local = 123 // local
    console.log(local)
}

teste()
console.log(local)