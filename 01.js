// VARIABLES Y TIPOS DE DATOS

const tiendaNombre = "  futbol world shop  ";  
let clienteNombre = "  yonneiker jose ";       
const camisetaPrecioUnitario = 89.99;         
const stockDisponible = 15;                   
const esSocioClub = true;                     
let codigoCupon = null;                       
let regaloPromocional;

const catalogoCamisetas = [                   // Array
    " Real Madrid - Local 2024 ",
    " Argentina - Retro 1986 ",
    " FC Barcelona - Visitante ",
    " PSG - Alternativa "
];

const pedidoCliente = {                        // Object (Objeto)
    idPedido: "ORD-98234-ARG",
    talla: "  l  ",
    dorsalPersonalizado: "10 - MARADONA",
    cantidad: 2
};

// String Methods
//Elimina espacios innecesarios
const tiendaLimpia = tiendaNombre.trim();
const clienteLimpio = clienteNombre.trim();
const tallaLimpia = pedidoCliente.talla.trim().toUpperCase();

// Normalización de texto 

const tiendaMayusculas = tiendaLimpia.toUpperCase();
const clienteFormateado = clienteLimpio.toLowerCase()
    .split(" ")
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) 
    .join(" ");

 const esEdicionRetro = catalogoCamisetas[1].includes("Retro");

//  Reemplaza partes de una cadena
const ticketID = pedidoCliente.idPedido.replace("ORD", "TICKET");

const codigoPais = pedidoCliente.idPedido.slice(-3); // " agarra los 3 caracteres desde la derecha ARG"


const numeroFactura = "42".padStart(6, "0"); // "000042"
const separador = "-".repeat(45);


// 3. OPERADORES (Operators)

const subtotalCamisetas = camisetaPrecioUnitario * pedidoCliente.cantidad; 
const costoPersonalizacion = 15.00 * pedidoCliente.cantidad;                 
const baseImponible = subtotalCamisetas + costoPersonalizacion;
const impuestoIVA = baseImponible * 0.19; 
const totalBruto = baseImponible + impuestoIVA;

let stockRestante = stockDisponible;
stockRestante -= pedidoCliente.cantidad; 

const hayStockSuficiente = stockDisponible >= pedidoCliente.cantidad; 
const esCompraGrande = pedidoCliente.cantidad > 3;                   
const esTallaGrande = tallaLimpia === "L";                            

const calificaEnvioGratis = (totalBruto > 150) || esSocioClub;    // OR (||)       
const aplicaDescuentoVIP = esSocioClub && (pedidoCliente.cantidad >= 2); //AND 
const tieneDorsal = !pedidoCliente.dorsalPersonalizado ? "Sin Dorsal" : pedidoCliente.dorsalPersonalizado; 

// Cálculo de Descuento final con Operador Ternario
const porcentajeDescuento = aplicaDescuentoVIP ? 0.15 : 0.05;  // ? sirve como else e if 
const montoDescuento = totalBruto * porcentajeDescuento;
const totalPagar = totalBruto - montoDescuento;

function generarRecibo() {
    console.log("=".repeat(45));
    console.log(`      ${tiendaMayusculas}`);
    console.log(`      Factura N°: ${numeroFactura} | País: ${codigoPais}`);
    console.log("=".repeat(45));
    console.log(`Cliente: ${clienteFormateado}`);
    console.log(`Ticket ID: ${ticketID}`);
    console.log(`¿Colección Retro?: ${esEdicionRetro ? "SÍ" : "NO"}`);
    console.log(`Talla: ${tallaLimpia} | Estampa: ${tieneDorsal}`);
    console.log(`Cantidad: ${pedidoCliente.cantidad} unidad(es)`);
    console.log(separador);
    console.log(`Subtotal Producto:    $${subtotalCamisetas.toFixed(2)}`);
    console.log(`Personalización:      $${costoPersonalizacion.toFixed(2)}`);
    console.log(`IVA (19%):            $${impuestoIVA.toFixed(2)}`);
    console.log(`Descuento VIP (15%): -$${montoDescuento.toFixed(2)}`);
    console.log(separador);
    console.log(`TOTAL A PAGAR:        $${totalPagar.toFixed(2)}`);
    console.log(`Envío Gratuito:       ${calificaEnvioGratis ? "APLICA" : "NO APLICA"}`);
    console.log(`Stock Restante:       ${stockRestante} unidades`);
    console.log("=".repeat(45));
}
generarRecibo();