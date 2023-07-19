function DesligarImg(){
    document.getElementById("estado").innerHTML="Estado:"
        var x=document.getElementById("situacaoEstado").innerHTML="Desligado"
        x.Style.color="red";
}

function LigarImg(){
    e.preventDefault
}

function EstadoLampada(e){
    e.preventDefault();
    var on, off;
    on=document.getElementById("imgLigar").value;
    off=document.getElementById("imgDesligar").value;
    if(on==true){
        document.getElementById("estado").innerHTML="Estado:"
        var x=document.getElementById("situacaoEstado").innerHTML="Ligado"
        x.Style.color="green";
    }else{
        document.getElementById("estado").innerHTML="Estado:"
        var x=document.getElementById("situacaoEstado").innerHTML="Desligado"
        x.Style.color="red";
    }

}