

let array = [];

function verificarPosicao(pos, id){
    console.log(pos);

}


window.onload = function(){
    var imgs = document.getElementsByTagName("img");
    console.log(imgs.length);
    var cont = 0;

    for(var i=0; i< imgs.length; i++){
        imgs[i].addEventListener("click", function(){
            cont++;
            if(cont % 2 == 0){
                this.style.backgroundColor = "#fff";
                this.setAttribute('src', '_imagens/circulo.png');
            }else{
                this.style.backgroundColor = "#000";
                this.setAttribute('src', '_imagens/xis.png'); 
            }
            verificarPosicao(event.target.id, cont);
            //console.log(event.target.id);
        })
    }
}