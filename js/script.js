
function formul(){
var nome1 = document.getElementById('nome').value;   
var cpf1 = document.getElementById('cpf').value; 
var dnasc1 = document.getElementById('dnasci').value; 
var genero1 = document.getElementById('ge').value;  
var senha1 = document.getElementById('senha').value; 
var csenha1 = document.getElementById('csenha').value;
var ano = dnasc1[0]+dnasc1[1]+dnasc1[2]+dnasc1[3];
var mes = dnasc1[5]+dnasc1[6];
var dia = dnasc1[8]+dnasc1[9];

//VALIDAR CPF

var n = document.getElementById('cpf').value;

    resto0 = n[12]+n[13];

    n1 = n[0]*1+n[1]*2+n[2]*3+n[4]*4+n[5]*5+n[6]*6+n[8]*7+n[9]*8+n[10]*9;
    resto1 = n1 % 11;

    if(resto1==10){
        restofp=0
    }else{
        restofp=resto1}

    n2 = n[0]*0+n[1]*1+n[2]*2+n[4]*3+n[5]*4+n[6]*5+n[8]*6+n[9]*7+n[10]*8+n[12]*9
    resto2 = n2 % 11;

    if(resto2==10){
        restofs=0
    }else{ restofs=resto2}
    
    if((restofp.toString()+restofs.toString())==resto0)
    {
        alert("CPF validado!");  
    }else{
        alert("Erro no CPF!");
    } 
//VALIDAR DATA DE NASCIMENTO
if ( (nome1 == null) || (cpf1 == null) || (dnasc1 == null) || (genero1 == null || (senha1 == null)))
        {   
            return false;
            
        }
if((dia>31) || (dia<=0)){
    
    alert("Dia incorreto");
    return false;
}
if((mes< 0) || (mes>12)){
    alert("Mes incorreto");
    return false;
}
if((ano<1920) || (ano>2021)){
    alert("Ano incorreto");
    return false;
}
if((dia>=30) && (dia==2)){
 alert("Dia 30 para fev, favor corrigir");
 return false;
}
if((dia==29) && (mes==2) && ( (ano%4) !=0 )){
    alert("Número dia 29 para fevereiro não bissexto inválido!");
    return false;
   }
 //VALIDAR SENHA
if(senha1 != csenha1){
    alert("Senha diferente/incorreta");
    return false;
} 
if(nome1==null || cpf1==null || dnasc1==null || senha1){
 alert("campos vazios!")
}
     
}

function validarEmail(){
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');
    
    if(!email.checkValidity()){
      error.innerHTML = "Email invalido";  
    }
}
function redefinirMsg(){
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Email invalido"){
      error.innerHTML = "";
    }
}


function formata_mascara(campo_passado, mascara){
    var campo = campo_passado.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(campo);
    if(texto.substring(0,1) !=saida){
        campo_passado.value += texto.substring(0,1);

    }
}
function clear(){
    
}

