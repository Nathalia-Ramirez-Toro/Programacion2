const readlineSync = require('readline-sync');
class licores {
    TipoLicor = ``;
    Tamaño = 0;
    Precio = 0;
    Marca = ``;

}
class Comida {
    Nombre = ``;
    Precio = 0;
    Ingredientes = ``;
    Disponibilidad = 0;
}
class mesa {
    Numero = 0;
    Capacidad = 0;
    Ubicacion = ``;
    Estado = 0;

}

class empleado {
    Nombre = ``;
    Edad = 0;
    Salario = 0;
    Horario = ``;
}
class Compra {
    NombreProvedor = ``;
    Contacto = ``;
    NombreEmpresa = ``;
    Cedula = ``
}
Licor1 = new licores(); Licor1.TipoLicor = `Ron`; Licor1.Tamaño = 750; Licor1.Marca = `Bacardí`; Licor1.Precio = 70000;
Licor2 = new licores(); Licor2.TipoLicor = `Whisky`; Licor2.Tamaño = 500; Licor2.Marca = `Jack Daniel's`; Licor2.Precio = 150000;
Licor3 = new licores(); Licor3.TipoLicor = `Vodka`; Licor3.Tamaño = 700; Licor3.Marca = `Absolut`; Licor3.Precio = 60000;
Licor4 = new licores(); Licor4.TipoLicor = `Tequila`; Licor4.Tamaño = 500; Licor4.Marca = `Patrón`; Licor4.Precio = 180000;
Licor5 = new licores(); Licor5.TipoLicor = `Ginebra`; Licor5.Tamaño = 375; Licor5.Marca = `Hendrick's`; Licor5.Precio = 130000;
Licor6 = new licores(); Licor6.TipoLicor = `Brandy`; Licor6.Tamaño = 200; Licor6.Marca = `Torres`; Licor6.Precio = 80000;
Licor7 = new licores(); Licor7.TipoLicor = `Licor de café`; Licor7.Tamaño = 200; Licor7.Marca = `Diplomático`; Licor7.Precio = 100000;
Licor8 = new licores(); Licor8.TipoLicor = `Licor de crema`; Licor8.Tamaño = 50; Licor8.Marca = `Glenfiddich`; Licor8.Precio = 200000;
Licor9 = new licores(); Licor9.TipoLicor = `Amaretto`; Licor9.Tamaño = 375; Licor9.Marca = `Grey Goose`; Licor9.Precio = 90000;
Licor10 = new licores(); Licor10.TipoLicor = `Triple sec`; Licor10.Tamaño = 250; Licor10.Marca = `Don Julio`; Licor10.Precio = 160000;
Licor11 = new licores(); Licor11.TipoLicor = `Cointreau`; Licor11.Tamaño = 600; Licor11.Marca = `Bombay Sapphire`; Licor11.Precio = 110000;
Licor12 = new licores(); Licor12.TipoLicor = `Vermut`; Licor12.Tamaño = 300; Licor12.Marca = `Courvoisier`; Licor12.Precio = 140000;
Licor13 = new licores(); Licor13.TipoLicor = `Anís`; Licor13.Tamaño = 600; Licor13.Marca = `Havana Club`; Licor13.Precio = 75000;
Licor14 = new licores(); Licor14.TipoLicor = `Sambuca`; Licor14.Tamaño = 350; Licor14.Marca = `Macallan`; Licor14.Precio = 250000;
Licor15 = new licores(); Licor15.TipoLicor = `Aguardiente`; Licor15.Tamaño = 800; Licor15.Marca = `Belvedere`; Licor15.Precio = 100000;


comida1 = new Comida(); comida1.Nombre = `Papas fritas`; comida1.Ingredientes = ` Rodajas de papa fritas, crujientes y saladas`; comida1.Disponibilidad = 1; comida1.Precio = 8000;
comida2 = new Comida(); comida2.Nombre = `Nachos`; comida2.Ingredientes = ` Chips de maíz cubiertos con queso fundido y acompañamientos`; comida2.Disponibilidad = 0; comida2.Precio = 12000;
comida3 = new Comida(); comida3.Nombre = `Alitas de pollo`; comida3.Ingredientes = ` Alas de pollo cocidas y sazonadas con diversas salsas`; comida3.Disponibilidad = 1; comida3.Precio = 15000;
comida4 = new Comida(); comida4.Nombre = `Palomitas de maíz`; comida4.Ingredientes = ` Granos de maíz reventados, salados y crujientes`; comida4.Disponibilidad = 1; comida4.Precio = 6000;
comida5 = new Comida(); comida5.Nombre = `Tacos de carne`; comida5.Ingredientes = ` Tortillas de maíz rellenas de carne y acompañamientos`; comida5.Disponibilidad = 1; comida5.Precio = 18000;
comida6 = new Comida(); comida6.Nombre = `Mini pizzas`; comida6.Ingredientes = ` Pequeñas pizzas con masa, salsa, queso y toppings`; comida6.Disponibilidad = 1; comida6.Precio = 20000;
comida7 = new Comida(); comida7.Nombre = `Rollos de primavera`; comida7.Ingredientes = ` Rollitos rellenos de vegetales o carne, fritos y crujientes`; comida7.Disponibilidad = 0; comida7.Precio = 14000;
comida8 = new Comida(); comida8.Nombre = `Nuggets de pollo`; comida8.Ingredientes = ` Trozos de pollo empanizados y fritos`; comida8.Disponibilidad = 0; comida8.Precio = 10000;
comida9 = new Comida(); comida9.Nombre = `Queso fundido`; comida9.Ingredientes = ` Queso derretido servido caliente con tortillas o pan`; comida9.Disponibilidad = 0; comida9.Precio = 16000;
comida10 = new Comida(); comida10.Nombre = `Tostadas de guacamole`; comida10.Ingredientes = ` Tostadas cubiertas con guacamole fresco`; comida10.Disponibilidad = 1; comida10.Precio = 13000;
comida11 = new Comida(); comida11.Nombre = `Jalapeños rellenos`; comida11.Ingredientes = ` Chile jalapeño relleno de queso y horneado`; comida11.Disponibilidad = 1; comida11.Precio = 17000;
comida12 = new Comida(); comida12.Nombre = `Empanadas`; comida12.Ingredientes = ` Empanadillas rellenas de carne o verduras, fritas u horneadas`; comida12.Disponibilidad = 1; comida12.Precio = 15000;
comida13 = new Comida(); comida13.Nombre = `Patatas bravas`; comida13.Ingredientes = ` Trozos de patatas fritas con salsa picante y alioli`; comida13.Disponibilidad = 0; comida13.Precio = 10000;
comida14 = new Comida(); comida14.Nombre = `Mini hamburguesas`; comida14.Ingredientes = ` Hamburguesas pequeñas servidas en panecillos`; comida14.Disponibilidad = 0; comida14.Precio = 22000;
comida15 = new Comida(); comida15.Nombre = `Bolitas de queso`; comida15.Ingredientes = ` Bolitas de queso empanizadas y fritas`; comida15.Disponibilidad = 1; comida15.Precio = 14000;

Mesa1 = new mesa(); Mesa1.Numero = 1; Mesa1.Capacidad = 4; Mesa1.Ubicacion = `Centro`; Mesa1.Estado = 1;
Mesa2 = new mesa(); Mesa2.Numero = 2; Mesa2.Capacidad = 4; Mesa2.Ubicacion = `Izquierda`; Mesa2.Estado = 1;
Mesa3 = new mesa(); Mesa3.Numero = 3; Mesa3.Capacidad = 4; Mesa3.Ubicacion = `Derecha`; Mesa3.Estado = 0;
Mesa4 = new mesa(); Mesa4.Numero = 4; Mesa4.Capacidad = 5; Mesa4.Ubicacion = `Centro`; Mesa4.Estado = 0;
Mesa5 = new mesa(); Mesa5.Numero = 5; Mesa5.Capacidad = 5; Mesa5.Ubicacion = `Izquierda`; Mesa5.Estado = 1;
Mesa6 = new mesa(); Mesa6.Numero = 6; Mesa6.Capacidad = 2; Mesa6.Ubicacion = `Derecha`; Mesa6.Estado = 1;
Mesa7 = new mesa(); Mesa7.Numero = 7; Mesa7.Capacidad = 1; Mesa7.Ubicacion = `Izquierda`; Mesa7.Estado = 0;
Mesa8 = new mesa(); Mesa8.Numero = 8; Mesa8.Capacidad = 3; Mesa8.Ubicacion = `Centro`; Mesa8.Estado = 0;
Mesa9 = new mesa(); Mesa9.Numero = 9; Mesa9.Capacidad = 5; Mesa9.Ubicacion = `Derecha`; Mesa9.Estado = 0;
Mesa10 = new mesa(); Mesa10.Numero = 10; Mesa10.Capacidad = 4; Mesa10.Ubicacion = `Centro`; Mesa10.Estado = 1;
Mesa11 = new mesa(); Mesa11.Numero = 11; Mesa11.Capacidad = 4; Mesa11.Ubicacion = `Centro`; Mesa11.Estado = 1;
Mesa12 = new mesa(); Mesa12.Numero = 12; Mesa12.Capacidad = 4; Mesa12.Ubicacion = `Derecha`; Mesa12.Estado = 0;
Mesa13 = new mesa(); Mesa13.Numero = 13; Mesa13.Capacidad = 2; Mesa13.Ubicacion = `Izquierda`; Mesa13.Estado = 1;
Mesa14 = new mesa(); Mesa14.Numero = 14; Mesa14.Capacidad = 4; Mesa14.Ubicacion = `Derecha`; Mesa14.Estado = 0;
Mesa15 = new mesa(); Mesa15.Numero = 15; Mesa15.Capacidad = 4; Mesa15.Ubicacion = `Izquierda`; Mesa15.Estado = 0;

Empleado1 = new empleado(); Empleado1.Nombre = `María`; Empleado1.Edad = 18; Empleado1.Salario = 1500000; Empleado1.Horario = `6:00 PM - 2:00 AM`;
Empleado2 = new empleado(); Empleado2.Nombre = `Ana`; Empleado2.Edad = 20; Empleado2.Salario = 1600000; Empleado2.Horario = `6:00 PM - 2:00 AM`;
Empleado3 = new empleado(); Empleado3.Nombre = `Laura`; Empleado3.Edad = 22; Empleado3.Salario = 1700000; Empleado3.Horario = `6:00 PM - 2:00 AM`;
Empleado4 = new empleado(); Empleado4.Nombre = `Sofía`; Empleado4.Edad = 24; Empleado4.Salario = 1800000; Empleado4.Horario = `6:00 PM - 2:00 AM`;
Empleado5 = new empleado(); Empleado5.Nombre = `Carolina`; Empleado5.Edad = 26; Empleado5.Salario = 1900000; Empleado5.Horario = `6:00 PM - 2:00 AM`;
Empleado6 = new empleado(); Empleado6.Nombre = `Juan`; Empleado6.Edad = 28; Empleado6.Salario = 2000000; Empleado6.Horario = `6:00 PM - 2:00 AM`;
Empleado7 = new empleado(); Empleado7.Nombre = `José`; Empleado7.Edad = 30; Empleado7.Salario = 1500000; Empleado7.Horario = `6:00 PM - 2:00 AM`;
Empleado8 = new empleado(); Empleado8.Nombre = `Luis`; Empleado8.Edad = 32; Empleado8.Salario = 1500000; Empleado8.Horario = `6:00 PM - 2:00 AM`;
Empleado9 = new empleado(); Empleado9.Nombre = `Carlos`; Empleado9.Edad = 34; Empleado9.Salario = 1500000; Empleado9.Horario = `6:00 PM - 2:00 AM`;
Empleado10 = new empleado(); Empleado10.Nombre = `Andrés`; Empleado10.Edad = 36; Empleado10.Salario = 1500000; Empleado10.Horario = `6:00 PM - 2:00 AM`;
Empleado11 = new empleado(); Empleado11.Nombre = `Santiago`; Empleado11.Edad = 38; Empleado11.Salario = 1500000; Empleado11.Horario = `6:00 PM - 2:00 AM`;
Empleado12 = new empleado(); Empleado12.Nombre = `Camila`; Empleado12.Edad = 40; Empleado12.Salario = 1500000; Empleado12.Horario = `6:00 PM - 2:00 AM`;
Empleado13 = new empleado(); Empleado13.Nombre = `Juliana`; Empleado13.Edad = 42; Empleado13.Salario = 1500000; Empleado13.Horario = `6:00 PM - 2:00 AM`;
Empleado14 = new empleado(); Empleado14.Nombre = `Daniela`; Empleado14.Edad = 44; Empleado14.Salario = 1500000; Empleado14.Horario = `6:00 PM - 2:00 AM`;
Empleado15 = new empleado(); Empleado15.Nombre = `Carlos`; Empleado15.Edad = 46; Empleado15.Salario = 1500000; Empleado15.Horario = `6:00 PM - 2:00 AM`;

Proveedor1 = new Compra(); Proveedor1.NombreProvedor = `Santiago`; Proveedor1.Contacto = `310000000`; Proveedor1.NombreEmpresa = `Distribuidora El Dorado`; Proveedor1.Cedula = `123456543`;
Proveedor2 = new Compra(); Proveedor2.NombreProvedor = `Diego`; Proveedor2.Contacto = `310000001`; Proveedor2.NombreEmpresa = `Licores Premium S.A.`; Proveedor2.Cedula = `123456544`;
Proveedor3 = new Compra(); Proveedor3.NombreProvedor = `Javier`; Proveedor3.Contacto = `310000002`; Proveedor3.NombreEmpresa = `Distribuidora de Bebidas del Valle`; Proveedor3.Cedula = `123456545`;
Proveedor4 = new Compra(); Proveedor4.NombreProvedor = `Alejandro`; Proveedor4.Contacto = `310000003`; Proveedor4.NombreEmpresa = `Distribuidora Nacional de Licores`; Proveedor4.Cedula = `123456546`;
Proveedor5 = new Compra(); Proveedor5.NombreProvedor = `Felipe`; Proveedor5.Contacto = `310000004`; Proveedor5.NombreEmpresa = `Licores del Caribe S.A.S.`; Proveedor5.Cedula = `123456547`;
Proveedor6 = new Compra(); Proveedor6.NombreProvedor = `Valentina`; Proveedor6.Contacto = `310000005`; Proveedor6.NombreEmpresa = `Distribuidora de Licores Bella Vista`; Proveedor6.Cedula = `123456548`;
Proveedor7 = new Compra(); Proveedor7.NombreProvedor = `Andrea`; Proveedor7.Contacto = `310000006`; Proveedor7.NombreEmpresa = `Licores del Sur`; Proveedor7.Cedula = `123456549`;
Proveedor8 = new Compra(); Proveedor8.NombreProvedor = `Camila`; Proveedor8.Contacto = `310000007`; Proveedor8.NombreEmpresa = `Distribuidora San Miguel`; Proveedor8.Cedula = `123456550`;
Proveedor9 = new Compra(); Proveedor9.NombreProvedor = `Juliana`; Proveedor9.Contacto = `310000008`; Proveedor9.NombreEmpresa = `Licores y Bebidas Especiales S.A.`; Proveedor9.Cedula = `123456551`;
Proveedor10 = new Compra(); Proveedor10.NombreProvedor = `Daniela`; Proveedor10.Contacto = `310000009`; Proveedor10.NombreEmpresa = `Distribuidora de Licores La Fontana`; Proveedor10.Cedula = `123456552`;
Proveedor11 = new Compra(); Proveedor11.NombreProvedor = `aura`; Proveedor11.Contacto = `310000010`; Proveedor11.NombreEmpresa = `Distribuidora Central de Licores`; Proveedor11.Cedula = `123456553`;
Proveedor12 = new Compra(); Proveedor12.NombreProvedor = `Sofía`; Proveedor12.Contacto = `310000011`; Proveedor12.NombreEmpresa = `Licores y Vinos del Pacífico`; Proveedor12.Cedula = `123456554`;
Proveedor13 = new Compra(); Proveedor13.NombreProvedor = `Carolina`; Proveedor13.Contacto = `310000012`; Proveedor13.NombreEmpresa = `Distribuidora de Bebidas Exclusivas`; Proveedor13.Cedula = `123456555`;
Proveedor14 = new Compra(); Proveedor14.NombreProvedor = `Luis`; Proveedor14.Contacto = `310000013`; Proveedor14.NombreEmpresa = `Licores Selectos S.A.`; Proveedor14.Cedula = `123456556`;
Proveedor15 = new Compra(); Proveedor15.NombreProvedor = `Carlos`; Proveedor15.Contacto = `310000014`; Proveedor15.NombreEmpresa = `Distrib0uidora de Licores El Camino`; Proveedor15.Cedula = `123456557`;
tamañoMinimo=0;
precioMasAlto=0;
SumaLicores=0;
licorMasPequeño=0;
for ( i = 1; i <= 15; i++) {
    let licoranalizar = eval(`Licor${i}`);
    if (licoranalizar.Precio > precioMasAlto) {
        licorMasCaro = licoranalizar;
        precioMasAlto = licoranalizar.Precio;
    }
    if (licoranalizar.Tamaño < tamañoMinimo) {
        licorMasPequeño = licoranalizar;
        tamañoMinimo = licoranalizar.Tamaño;
    }
    SumaLicores = licoranalizar.Precio + SumaLicores;

}

console.log(`Licor mas caro:${licorMasCaro.TipoLicor} (${licorMasCaro.Marca}) - Precio: $${licorMasCaro.Precio}`);
console.log(`la suma de los licores es ${SumaLicores} `);
console.log(`Licor mas caro:${licorMasPequeño.TipoLicor} (${licorMasPequeño.Marca}) - Precio: $${licorMasPequeño.Precio}`);

centro=0;
Izquierda=0;
Derecha=0;
mesasDesocupadas=0;
mesasCapacidadMayor4=0;
for ( i = 1; i <= 15; i++) {
    let MesaAnalizar = eval(`Mesa${i}`);
    if (MesaAnalizar.Estado == 0) {
        mesasDesocupadas = mesasDesocupadas + 1
    }

    if (MesaAnalizar.Capacidad > 4) {
        mesasCapacidadMayor4 = mesasCapacidadMayor4 + 1;
    }


    if (MesaAnalizar.Ubicacion == `Centro`) {
        centro = centro + 1;
    } else {
        if (MesaAnalizar.Ubicacion == `Izquierda`) {
            Izquierda = Izquierda + 1;
        } else {
            Derecha = Derecha + 1;
        }
    }

}

console.log(`Mesas desocupadas:${mesasDesocupadas} `);
console.log(`Mesa ubicada en la derecha:${Derecha} `);
console.log(`Mesas ubicada en la izquierda:${Izquierda} `);
console.log(`Mesas ubicada en el centro:${centro} `);
console.log(`Mesas con capacidad mayor a 4 :${mesasCapacidadMayor4} `);
comidasDisponibles=0;
 longitudMaximaIngredientes=0;
 edadMaxima = 0;
 salarioMaximo = 0;
empleadoMenorEdad=0;
edadMinima=0;
for (let i = 1; i <= 15; i++) {
 let  EmpleadoAnalizar = eval(`Empleado${i}`);

  if (EmpleadoAnalizar.Edad > edadMaxima) {
    empleadoMayorEdad = EmpleadoAnalizar;
    edadMaxima = EmpleadoAnalizar.Edad;
  }

  
  if (EmpleadoAnalizar.Salario > salarioMaximo) {
    empleadoSalarioMaximo = EmpleadoAnalizar;
    salarioMaximo = EmpleadoAnalizar.Salario;
  }

  if (EmpleadoAnalizar.Edad < edadMinima) {
    empleadoMenorEdad = EmpleadoAnalizar;
    edadMinima = EmpleadoAnalizar.Edad;
  }
}

console.log(`Empleado con mas edad:${empleadoMayorEdad.Nombre}, ${empleadoMayorEdad.Edad} años`);
console.log(`Empleado con salario mas alto:${empleadoSalarioMaximo.Nombre}, $${empleadoSalarioMaximo.Salario}`);
console.log(`Empleado con menor edad: ${empleadoMenorEdad.Nombre}, ${empleadoMenorEdad.Edad} años`);
sumaPreciosComidas=0;
for (let i = 1; i <= 15; i++) {
    let ComidaAnalizar = eval(`comida${i}`);
  
     longitudIngredientes = ComidaAnalizar.Ingredientes.length;
    if (longitudIngredientes > longitudMaximaIngredientes) {
      comidaIngredientesMasLargo = ComidaAnalizar;
      longitudMaximaIngredientes = longitudIngredientes;
    }
    if (ComidaAnalizar.Disponibilidad == 1) {
      comidasDisponibles=comidasDisponibles+1;
    }
    sumaPreciosComidas += ComidaAnalizar.Precio;
  }
  
  console.log(`Comida con la cadena mas larga de ingredientes: ${comidaIngredientesMasLargo.Nombre} : ${comidaIngredientesMasLargo.Ingredientes}`);

  
  console.log(`Comidas disponibles: ${comidasDisponibles}`);
  
  console.log(`Suma de precios de todas las comidas: ${sumaPreciosComidas}`);


