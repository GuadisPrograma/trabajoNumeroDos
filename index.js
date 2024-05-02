let UsuarioNombre = 'JuanGarcia23'
let ContraseñaNombre = 'cJZoht3!'
// variable valorFIJO
if ((UsuarioNombre== 'JuanGarcia23') && (ContraseñaNombre == 'cJZoht3!')) {
    alert('hola podes entrar')
} else {
    alert('no podes entrar')
}
//actividad 2
let NotaExamen = 8
let NotaDeTrabajosPracticos = 6
let Asistenica = true 
if ((NotaExamen <=8) && (NotaDeTrabajosPracticos <= 6) || (Asistenica == true)){
    alert('aprobaste la materia!!¡¡')

}else{
    alert('desaprobaste la materia.')
}

//actividad tres 
let día = prompt("que día es hoy?")
if ((día == "lunes") || (día == "miercoles") || ( día == 'viernes') ) {
    alert('pasará el camión de residuos humedos')
} else if (día == 'sabado') {
    alert('no pasará')
}else{ 
     alert('pasará el seco')
}