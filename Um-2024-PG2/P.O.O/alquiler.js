const readlineSync = require('readline-sync');

class Cliente {
  Nombre_Cliente = '';
  Documento_Cliente = 0;
  Tipo_Persona_Cliente = 0;

  constructor(Nombre_Cliente, Documento_Cliente, Tipo_Persona_Cliente) {
    if (!Nombre_Cliente) {
      throw new Error('Tiene que tener NOMBRE');
    }
    if (!Documento_Cliente) {
      throw new Error('Tiene que tener DOCUMENTO');
    }
    if (Tipo_Persona_Cliente !== 1 && Tipo_Persona_Cliente !== 2) {
      throw new Error('Tipo de persona debe ser 1 (Natural) o 2 (Jurídica)');
    }
    this._Nombre_Cliente = Nombre_Cliente;
    this._Documento_Cliente = Documento_Cliente;
    this._Tipo_Persona_Cliente = Tipo_Persona_Cliente;
  }

  get Nombre_Cliente() {
    return this._Nombre_Cliente;
  }

  get Documento_Cliente() {
    return this._Documento_Cliente;
  }

  get Tipo_Persona_Cliente() {
    return this._Tipo_Persona_Cliente;
  }

  set Nombre_Cliente(nombrecliente) {
    if (nombrecliente.length < 3) {
      console.log('El nombre debe tener al menos 3 caracteres');
    } else {
      this._Nombre_Cliente = nombrecliente;
    }
  }

  set Documento_Cliente(documentocliente) {
    if (documentocliente < 0 || String(documentocliente).length < 3) {
      console.log('El documento debe tener al menos 3 caracteres y ser mayor a 0');
    } else {
      this._Documento_Cliente = documentocliente;
    }
  }

  set Tipo_Persona_Cliente(tipocliente) {
    if (tipocliente !== 1 && tipocliente !== 2) {
      console.log('El tipo de persona debe ser 1 (Natural) o 2 (Jurídica)');
    } else {
      this._Tipo_Persona_Cliente = tipocliente;
    }
  }
}

class Equipo {
  Marca_Equipo = '';
  Serial_Equipo = '';
  Valor = 0;
  Cantidad_Venta = 0;
  Cantidad_Alquiler = 0;

  constructor(Marca_Equipo, Serial_Equipo, Valor, Cantidad_Venta,Cantidad_Alquiler) {
    if (!Valor) {
      throw new Error('Debe tener un valor');
    }
    if (!Marca_Equipo) {
      throw new Error('Debe tener una marca');
    }
    if (!Serial_Equipo) {
      throw new Error('Debe tener un número de serie');
    }

    this._Marca_Equipo = Marca_Equipo;
    this._Serial_Equipo = Serial_Equipo;
    this._Valor = Valor;
    this._Cantidad_Venta = Cantidad_Venta;
    this._Cantidad_Alquiler = Cantidad_Alquiler;
  }




  get Marca_Equipo() {
    return this._Marca_Equipo;
  }

  get Serial_Equipo() {
    return this._Serial_Equipo;
  }

  get Valor() {
    return this._Valor;
  }

  get Cantidad_Venta() {
    return this._Cantidad_Venta;
  }
  get Cantidad_Alquiler() {
    return this._Cantidad_Alquiler;
  }

  set Marca_Equipo(marca) {
    if (marca.length < 2) {
      console.log('La marca debe tener al menos 2 caracteres');
    } else {
      this._Marca_Equipo = marca;
    }
  }

  set Serial_Equipo(serial) {
    if (String(serial).length < 4) {
      console.log('El serial debe tener al menos 4 caracteres');
    } else {
      this._Serial_Equipo = serial;
    }
  }

  set Valor(valor) {
    this._Valor = valor;
  }

  set Cantidad_Venta(cantidad) {
    this._Cantidad_Venta = cantidad;
  }

  set Cantidad_Alquiler(cantidadA) {
    this._Cantidad_Alquiler = cantidadA;
  }

  venta(cliente) {
    let iva = 0;
    if (cliente.Tipo_Persona_Cliente === 1) {
      iva = 0.19;
    } else {
      iva = 0.07;
    }
    let valorVenta = (this._Cantidad_Venta * this._Valor * (1 + iva));
    console.log(`Valor total de la venta: ${valorVenta}`);
  }

  alquiler() {
    let valorAlquiler = this._Cantidad_Alquiler * (this._Valor * 0.10);
    console.log(`Valor total del alquiler: ${valorAlquiler}`);
  }

}

let cliente2 = new Cliente('Juan Pérez', 123456789, 1);
let equipo3 = new Equipo('Marca X', '1234abcd', 500, 2,1);
let equipo4 = new Equipo('Marca Y', '5678efgh', 800, 3,3);
equipo3.alquiler( cliente2);
equipo4.venta(cliente2);