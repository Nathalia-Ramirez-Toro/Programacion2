const readlineSync = require('readline-sync');
let Validacion = false;
let Genero;
let PesoMayorMaleta = 0;
let SumaPesoMaletsa=0;
function DatosDelPasajero() {

    let NomPasajeros = readlineSync.question(`Nomebre complero del Pasajero\n`);
    do {
        if (NomPasajeros.length == 0) {
            NomPasajeros = readlineSync.question(`ERROR, por favor ingrese el nombre del pasajero: `);
        } else {
            Validacion = true
        }
    } while (Validacion == false)

    let TipDocumento = +readlineSync.question(`Que tipo de documento es: \n1. C.C \n2. Pasaporte\n `);
    Validacion = false;
    do {
        if (TipDocumento == 1) {
            TipDocumento = "C.C"
            Validacion = true
        } else {
            if (TipDocumento == 2) {
                TipDocumento = "Pasaporte"
                Validacion = true
            } else {
                TipDocumento = readlineSync.question(`ERROR, por favor ingrese si es:\n C.C --> 1\n Pasaporte -->2\n `);
            }
        }
    } while (Validacion == false)

    let NumeroDocumento = readlineSync.question(`cual es Numero de ${TipDocumento} `);
    Validacion = false;
    do {
        if (NumeroDocumento.length == 0) {
            NumeroDocumento = readlineSync.question(`ERROR, por favor ingrese el numero de documento del pasajero ${NomPasajeros} : `);
        } else {
            +NumeroDocumento;
            Validacion = true;
        }
    } while (Validacion == false)

    let Genero = readlineSync.question(`Genero del pasajero: \n1.Femenino \n2. Masculino \n3. No definido  \n`);
    Validacion = false
    do {
        if (Genero == 1) {
            Validacion = true
       
        } else {
            if (Genero == 2) {
         
                Validacion = true;
            } else {
                if (Genero == 3) {
              
                    Validacion = true
                } else {
                    Genero = readlineSync.question(`ERROR, por favor ingrese si es Femenino:1\n Masculino:2\nNo definido:3\n`);
                    Validacion = false
                }
            }
        }
    } while (Validacion == false)


    contar = 1;
    do {
        do {
            if (contar == 1) {
                Seleccion = +readlineSync.question(`Cual es la ciudad de origen del pasajero\n1.San Andres\n2.Pereira\n3.Medellin\n4.Cali\n5.Manizales\n6.Barramquilla\n7.Bogota\n`)
            } else {
                Seleccion = +readlineSync.question(`Cual es la ciudad de destino del pasajero\n1.San Andres\n2.Pereira\n3.Medellin\n4.Cali\n5.Manizales\n6.Barramquilla\n7.Bogota\n`)
            }
            switch (Seleccion) {
                case 1: Seleccion = `San Andres`;
                    if (contar == 2) {
                        vuelo = 1010;
                    }
                    Validacion = true;
                    break;
                case 2: Seleccion = `Pereira`;
                    if (contar == 2) {
                        vuelo = 1012;
                    }
                    Validacion = true;
                    break;
                case 3: Seleccion = `Medellin`;
                    if (contar == 2) {
                        vuelo = 1014;
                    }
                    Validacion = true;
                    break;
                case 4: Seleccion = `Cali`;
                    if (contar == 2) {
                        vuelo = 1014;
                    }
                    Validacion = true;
                    break;
                case 5: Seleccion = `Manizales`;
                    if (contar == 2) {
                        vuelo = 1014;
                    }
                        Validacion = true;
                    break;
            
                case 6: Seleccion = `Barramquilla`;
                    if (contar == 2) {
                        vuelo = 1014;
                    }
                    Validacion = true;
                    break;
                case 7: Seleccion = `Bogota`;
                    if (contar == 2) {
                        vuelo = 1014;
                    }
                    Validacion = true;
                    break;
                default: console.log('Destino no válido.');
                    break;
            }
        } while (Validacion == false)
        if (contar == 1) {
            Origen = Seleccion;
            DestinoVuelo = Origen;
            contar = 2;
            Validacion = false;
        } else {
            DestinoVuelo = Seleccion;

            if (DestinoVuelo == Origen) {
                console.log('La ciudad de origen debe de ser distina a la destino');
            }
        }
    } while (DestinoVuelo == Origen)
    console.log(`el numero de vuelo del pasajero es: ${vuelo}`);

    ValorMaleta = +readlineSync.question(`¿Cuanto es el valor de la maleta?\n`);

    do {
        if (ValorMaleta == 0) {
            ValorMaleta = +readlineSync.question(`¿Cuanto es el valor de la maleta?? tiene que ser mayor a 0 \n`);
        } else {
            if (isNaN(ValorMaleta)) {
                ValorMaleta = +readlineSync.question(`¿Cuanto es el valor de la maleta? tiene que ser numero \n`);

            } else {
                if (ValorMaleta < 1000) {
                    ValorMaleta = +readlineSync.question(`¿Cuanto es el valor de la maleta? tiene que ser mayor a 1000 \n`);

                } else {
                    Validacion = true;

                }
            }
        }
    } while (Validacion == false)

    NumeroDeMaletas = +readlineSync.question(`¿Cuantas Maletas lleva el pasajero?\n`);
    do {
        if (NumeroDeMaletas == 0) {
            NumeroDeMaletas = +readlineSync.question(`¿Cuantas Maletas lleva el pasajero? tiene que ser mayor a 0 \n`);
        } else {
            if (isNaN(NumeroDeMaletas)) {
                NumeroDeMaletas = +readlineSync.question(`¿Cuantas Maletas lleva el pasajero? tiene que ser numero \n`);
            } else {
                Validacion = true;
            }
        }
    } while (Validacion == false)
    descuento = +readlineSync.question(`¿Se tiene algun descuento para la ciudad de origen?\n1.Si\n2.No `);
    if (descuento == 1) {
        descuentoAplicar = +readlineSync.question(`¿cual es el descuento sin el %`);
        do {
            if (descuentoAplicar == 0) {
                descuentoAplicar = +readlineSync.question(` No puede ser 0 el descuento \n¿cual es el descuento sin el %? `);
            } else {
                if (isNaN(descuentoAplicar)) {
                    descuentoAplicar = +readlineSync.question(` No puede ser letras o tener el % \n¿cual es el descuento sin el %`);
                } else {
                    Validacion = true;
                }
            }
        } while (Validacion == false)

    } else {
        descuentoAplicar = 0;
    }

    contar = 1;
    valortotalsobrepeso = 0;
    sumasobrepeso = 0;
    while (NumeroDeMaletas >= contar) {
        PesoMaleta = +readlineSync.question(` ¿Cual es el peso de la maleta ${contar}? `);

        do {
            if (PesoMaleta == 0) {
                descuentoAplicar = +readlineSync.question(`¿Cual es el peso de la maleta ${contar}? No puede ser 0 `);
            } else {
                if (isNaN(PesoMaleta)) {
                    descuentoAplicar = +readlineSync.question(`¿Cual es el peso de la maleta ${contar}? \n No pude ser letras`);
                }
                Validacion = true;
            }

        } while (Validacion == false)
        if (PesoMaleta > 25) {
            sobrepeso = PesoMaleta - 25;
            sumasobrepeso = sobrepeso + sumasobrepeso;
            valortotalsobrepeso = sumasobrepeso * 20000;
        }


        if (PesoMaleta > PesoMayorMaleta) {
            PesoMayorMaleta = PesoMaleta;
        }
        
        SumaPesoMaletsa=PesoMaleta+SumaPesoMaletsa;
        
        contar = contar + 1;

    }
    ValorTotalPago = (NumeroDeMaletas * ValorMaleta) + valortotalsobrepeso;
    Descuento = (ValorTotalPago * descuentoAplicar) / 100
    ValorDescuento = ValorTotalPago - Descuento;

    console.log(`El valor Total :${ValorTotalPago},  tuvo un descuento del ${descuentoAplicar}% el valor con descuento fue :${ValorDescuento}  `);

    let PesoS = 0,
        PesoP = 0,
        PesoMLL = 0,
        PesoC = 0,
        PesoMZL = 0,
        PesoB = 0,
        PesoBGT = 0,
        PesoMaletaMayorS = 0,
        PesoMaletaMayorP = 0,
        PesoMaletaMayorMLL = 0,
        PesoMaletaMayorC = 0,
        PesoMaletaMayorMZL = 0,
        PesoMaletaMayorB = 0,
        PesoMaletaMayorBGT = 0,
        contarS = 0,
        contarP = 0,
        contarMLL = 0,
        contarC = 0,
        contarMZL = 0,
        contarB = 0,
        contarBGT = 0,
        TotalF = 0,
        TotalM = 0,
        TotalNo = 0,
        MaletasF = 0,
        MaletasM = 0,
        MaletasNo = 0,
        PromedioF = 0,
        PromedioM = 0,
        Cantidad = 0,
        ciudadConMasMaletas = '';
    switch (DestinoVuelo) {
        case `San Andres`:
            contarS += NumeroDeMaletas;
            PesoS += SumaPesoMaletsa;
            if (PesoMayorMaleta > PesoMaletaMayorS) {
                PesoMaletaMayorS = PesoMayorMaleta;
            }
            console.log(`El peso tototal de las maletas en el vuelo fue  ${PesoS}`);
            console.log(`La maleta con mas peso en el avion fue:  ${PesoMaletaMayorS}`);

            break;

        case `Pereira`:
            contarP += NumeroDeMaletas;
            PesoP += SumaPesoMaletsa;
            if (PesoMayorMaleta > PesoMaletaMayorP) {
                PesoMaletaMayorP = PesoMayorMaleta;
            }
            console.log(`El peso tototal de las maletas en el vuelo fue  ${PesoP}`);
            console.log(`La maleta con mas peso en el avion fue:  ${PesoMaletaMayorP}`);
            break;
        case `Medellin`:
            contarMLL += NumeroDeMaletas;
            PesoMLL += SumaPesoMaletsa;
            if (PesoMayorMaleta > PesoMaletaMayorMLL) {
                PesoMaletaMayorMLL = PesoMayorMaleta;
            }
            console.log(`El peso tototal de las maletas en el vuelo fue  ${PesoMLL}`);
            console.log(`La maleta con mas peso en el avion fue:  ${PesoMaletaMayorMLL}`);
            break;
        case `Cali`:
            contarC += NumeroDeMaletas;
            PesoC += SumaPesoMaletsa;
            if (PesoMayorMaleta > PesoMaletaMayorC) {
                PesoMaletaMayorC = PesoMayorMaleta;
            }
            console.log(`El peso tototal de las maletas en el vuelo fue  ${PesoC}`);
            console.log(`La maleta con mas peso en el avion fue:  ${PesoMaletaMayorC}`);
            break;
        case `Manizales`:
            contarMZL += NumeroDeMaletas;
            PesoMZL += SumaPesoMaletsa;
            if (PesoMayorMaleta > PesoMaletaMayorMZL) {
                PesoMaletaMayorMZL = PesoMayorMaleta;
                console.log(`El peso tototal de las maletas en el vuelo fue  ${PesoMZL}`);
                console.log(`La maleta con mas peso en el avion fue:  ${PesoMaletaMayorMZL}`);
            }
            break;
        case `Barramquilla`:
            contarB += NumeroDeMaletas;
            PesoB += SumaPesoMaletsa;
            if (PesoMayorMaleta > PesoMaletaMayorB) {
                PesoMaletaMayorB = PesoMayorMaleta;

            }

            console.log(`El peso tototal de las maletas en el vuelo fue  ${PesoB}`);
            console.log(`La maleta con mas peso en el avion fue:  ${PesoMaletaMayorB}`);
            break;
        case `Bogota`:
            contarBGT += NumeroDeMaletas;
            PesoBGT += SumaPesoMaletsa;
            if (PesoMayorMaleta > PesoMaletaMayorBGT) {
                PesoMaletaMayorBGT = PesoMayorMaleta;
            }
            console.log(`El peso tototal de las maletas en el vuelo fue  ${PesoBGT}`);
            console.log(`La maleta con mas peso en el avion fue:  ${PesoMaletaMayorBGT}`);
            break;
    }

    if (contarS > contarP && contarS > contarMLL && contarS > contarC && contarS > contarMZL && contarS > contarB && contarS > contarBGT) {
        ciudadConMasMaletas = 'San Andres';
        Cantidad = contarS;
    } else {
        if (contarP > contarMLL && contarP > contarC && contarP > contarMZL && contarP > contarB && contarP > contarBGT) {
            ciudadConMasMaletas = 'Pereira';
            Cantidad = contarP;
        } else {
            if (contarMLL > contarC && contarMLL > contarMZL && contarMLL > contarB && contarMLL > contarBGT) {
                ciudadConMasMaletas = 'Medellin';
                Cantidad = contarMLL;
            } else {
                if (contarC > contarMZL && contarC > contarB && contarC > contarBGT) {
                    ciudadConMasMaletas = 'Cali';
                    Cantidad = contarC;
                } else {
                    if (contarMZL > contarB && contarMZL > contarBGT) {
                        ciudadConMasMaletas = 'Manizales';
                        Cantidad = contarMZL;
                    } else {
                        if (contarB > contarBGT) {
                            ciudadConMasMaletas = 'Barranquilla';
                            Cantidad = contarB;
                        } else {
                            ciudadConMasMaletas = 'Bogota';
                            Cantidad = contarBGT;
                        }
                    }
                }
            }
        }
    }
    console.log(`La maleta con mas equipaje en el avion fue:  ${ciudadConMasMaletas}`);
    if (Genero == 1) {
        TotalF = TotalF + 1;
        MaletasF += NumeroDeMaletas;
        PromedioF = MaletasF / TotalF;
        console.log(`el promedio de maleta por mujer fue :  ${PromedioF}`);
    } else {
        if (Genero == 2) {
            TotalM = TotalM + 1;
            MaletasM += NumeroDeMaletas;
            PromedioM = MaletasM / TotalM;
            console.log(`el promedio de maleta por hombre fue :  ${PromedioM}`);
        } else {
            if (Genero == 2) {
                TotalNo = TotalNo + 1;
                MaletasNo += NumeroDeMaletas;
                console.log(`el promedio de maleta por no identificado fue :  ${MaletasNo}`);
            }
        }
    }
}
let contarpasajeros = 0;
let pasajeros = +readlineSync.question(`cuantos pasajeros desea ingresar`);
while (pasajeros > contarpasajeros) {
    DatosDelPasajero();
    
    contarpasajeros = contarpasajeros + 1;
}