// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Operadores I', () => {
  it('Las variables age - isUsa existen y youCanDrive', () => {
    expect(age).to.not.be.an('undefined');
    expect(isUsa).to.not.be.an('undefined');
    expect(youCanDrive).to.not.be.an('undefined');
  });


  it('La variable youCanDrive cambia su valor a true', () => {
    expect(youCanDrive).to.equal(true);
  });
});
