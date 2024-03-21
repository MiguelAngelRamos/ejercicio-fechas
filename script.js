function showDate() {

  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  let fechaActual = new Date(); // console.log(fechaActual);

  let diaSemana = diasSemana[fechaActual.getDay()]; 

  let numeroDiaMes = fechaActual.getDate();

  let mes = meses[fechaActual.getMonth()];

  let año = fechaActual.getFullYear();

  let hora = fechaActual.getHours();

  let minutos = fechaActual.getMinutes();

  let segundos = fechaActual.getSeconds();

  let mensaje = `Hoy es ${diaSemana}, ${numeroDiaMes} de ${mes} de ${año}, y son las ${hora} horas, ${minutos} minutos con ${segundos} segundos`;

  alert(mensaje)

  //* Calculando el tiempo restante para terminar el año
  let ultimaFechaDelAño = new Date(año, 11, 31, 23, 59,59);
  let diferencia = fechaActual - ultimaFechaDelAño;
  console.log('Milisegundos: ' + diferencia); //* Milisegundos: -24671282507

  //* Enero 31 dias
  //* Febrero 29 dias
  //* Marzo 20 dias
  //* son 80
  //* 285 los que faltan para que termine el año

  //* Calcular los dias restantes
  let diasRestantes = Math.floor(diferencia / (1000*60*60*24));
  let horasRestantes = Math.floor((diferencia % (1000*60*60*24)) / (1000*60*60));
  let minutosRestantes = Math.floor((diferencia % (1000*60*60))/ (1000 * 60));
                                    //* 24671282507 % 36000000
                                    //* 11282507 / 60000
                                    console.log(minutosRestantes);
  let segundosRestantes = Math.floor((diferencia % (1000* 60))/ 1000)
  
  console.log(`El tiempo que resta para fin de año : ${Math.abs(diasRestantes)} dias, ${horasRestantes} horas, ${minutosRestantes} minutos, y ${segundosRestantes} segundos`);
  //* 47282507
  /**
   * 1000 milisegundos = 1 segundo
   * 60 segundos = 1 minuto
   * 60 minutos = 1 hora
   * 24 horas = 1 dia
   * 8640000 = milisegundos que corresponden a un dia
   * 
   * 24671282507 / 8640000 = obtengo los dias que faltan para que termine el año 285,54725123842592592592592592593
   */

  //* -24674364192
  
  const divRestante = document.querySelector('#restante');
  divRestante.innerHTML = `El tiempo que resta para fin de año : ${Math.abs(diasRestantes)} dias, ${Math.abs(horasRestantes)} horas, ${Math.abs(minutosRestantes)} minutos, y ${Math.abs(segundosRestantes)} segundos`;
}

showDate();