let array = ["1","2","3","4","5","6","7","8","9"];
let posicoes = [];
function verificarPosicao(pos, nome){
    console.log(pos);
    array[pos] = nome;
    for(let i=0; i< array.length; i++){
        if(array[0] == "xis" && array[1] == "xis" && array[2] == "xis"){ // 0 1 2
            alert("Venceu!");
            break;
        }else if(array[0] == "circulo" && array[1] == "circulo" && array[2] == "circulo"){
            alert("Bola venceu!");
            break;
        }else if(array[3] == "xis" && array[4] == "xis" && array[5] == "xis"){ // 3 4 5
            alert("Venceu!");
            break;
        }else if(array[3] == "circulo" && array[4] == "circulo" && array[5] == "circulo"){
            alert("Bola venceu!");
            break;
        }else if(array[6] == "xis" && array[7] == "xis" && array[8] == "xis"){ // 6 7 8
            alert("Venceu!");
            break;
        }else if(array[6] == "circulo" && array[7] == "circulo" && array[8] == "circulo"){
            alert("Bola venceu!");
            break;
        }else if(array[0] == "xis" && array[3] == "xis" && array[6] == "xis"){ // 0 3 6
            alert("Venceu!");
            break;
        }else if(array[0] == "circulo" && array[3] == "circulo" && array[6] == "circulo"){
            alert("Bola venceu!");
            break;
        }else if(array[1] == "xis" && array[4] == "xis" && array[7] == "xis"){ // 1 4 7
            alert("Venceu!");
            break;
        }else if(array[1] == "circulo" && array[4] == "circulo" && array[7] == "circulo"){
            alert("Bola venceu!");
            break;
        }else if(array[2] == "xis" && array[5] == "xis" && array[8] == "xis"){ // 2 5 8
            alert("Venceu!");
            break;
        }else if(array[2] == "circulo" && array[5] == "circulo" && array[8] == "circulo"){
            alert("Bola venceu!");
            break;
        }else if(array[0] == "xis" && array[4] == "xis" && array[8] == "xis"){ // 0 4 8
            alert("Venceu!");
            break;
        }else if(array[0] == "circulo" && array[4] == "circulo" && array[8] == "circulo"){
            alert("Bola venceu!");
            break;
        }else if(array[2] == "xis" && array[4] == "xis" && array[6] == "xis"){ // 2 4 6
            alert("Venceu!");
            break;
        }else if(array[2] == "circulo" && array[4] == "circulo" && array[6] == "circulo"){
            alert("Bola venceu!");
            break;
        }      
    }
}


window.onload = function(){
    var imgs = document.getElementsByTagName("img");
    //console.log(imgs.length);
    var cont = 0;
    for(var i=0; i< imgs.length; i++){
        imgs[i].addEventListener("click", function(event){
        if(posicoes.includes(event.target.id) == false){
            posicoes.push(event.target.id);
            cont++;
            if(cont % 2 == 0){
                this.style.backgroundColor = "#fff";
                this.setAttribute('src', '_imagens/circulo.png');
                verificarPosicao(event.target.id, "circulo");
            }else{
                this.style.backgroundColor = "#000";
                this.setAttribute('src', '_imagens/xis.png'); 
                verificarPosicao(event.target.id, "xis");
            }
            //console.log(event.target.id);
            //console.log(posicoes);
        }else{
            alert("Escolha outra posição.");
        }
        })

    }
}