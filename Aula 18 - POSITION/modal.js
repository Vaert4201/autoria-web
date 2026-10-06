const esmaecer = document.querySelector("#esmaecer")
/* definição variável
variável constante que não será alterado depois
variável recebe o container (div) do esmaecer
*/
esmaecer.addEventListener('click', function(){
    // evento de click
            console.log('CLICOU');
            esmaecer.style.display = 'none';
            // esmaecer.style.visibility = 'hidden';
            // podem ser usadas qualquer opção
        })

const abrirmodal = document.querySelector("#abrirmodal");
abrirmodal.addEventListener('click', function(){
    // esmaecer.style.display = 'flex'
    esmaecer.style.visibility = 'visible'
})