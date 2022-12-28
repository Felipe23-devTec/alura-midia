function tocaSom(idElement){
    const elemento = document.querySelector(idElement);
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        alert("elemento não encontrado!");
    }
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;
const listaTeclas = document.querySelectorAll('.tecla');
var contador = 0;
while(contador < listaTeclas.length){
    const tecla = listaTeclas[contador];
    console.log(tecla);
    const instrumento = tecla.classList[1];
    //tamplate string
    const idaudio = `#som_${instrumento}`;
    tecla.onclick = function(){
        tocaSom(idaudio);   
    }
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === "Enter"){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
    contador+=1;

}
