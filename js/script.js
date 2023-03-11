let savedUsuario = 'Usuario2';
let savedPassword = '3276';
function login() 
{
    let ingresar = false;
    let nombreUsuario= prompt('Ingresá tu Usuario.');
    let userPassword= prompt('Ingresá tu Contraseña.');
    if(nombreUsuario === savedUsuario && userPassword === savedPassword) 
    {
        alert('Login exitoso! Direccionandolo al menu')
        ingresar = true; 
    }
    else
        {
            alert('Datos ingresados incorrectos.Intente nuevamente')
        }
return ingresar;
}
if(login())
{
    let opcion = prompt('Elija entre estas opciones: \n1- Ver productos que se pueden pagar en 12 cuotas (con interés) . \n2- Presione S para salir')
    while(opcion != 'S' && opcion !='s')
    {
        switch(opcion)
        {
            case '1':
                let opcion2 = prompt("Elija entre los productos: \n1- Televisores. \n2- Notebooks.\n3- Consolas.  \n4- Presione X para volver")
                while(opcion2 != 'X' && opcion2 !='x')
                {
                    switch(opcion2)
                    {
                        case '1':
                            const televisores = 
                            [
                                {marca: "Samsung", modelo: "QLED Q60T", pulgadas: 55, precio: 250000},
                                {marca: "LG", modelo: "OLED CX", pulgadas: 65, precio: 400000},
                                {marca: "Sony", modelo: "BRAVIA XR", pulgadas: 75, precio: 700000},
                                {marca: "Hisense", modelo: "U8QF", pulgadas: 65, precio: 200000},
                                {marca: "Philips", modelo: "50PUD7406/77", pulgadas: 50, precio: 120000}
                              ];
                              // Se calcula 10% de interés
                              const interes = 0.1; 
                              const cuotas = 12;
                              //Mostrar el precio en cuotas con su interés correspondiente, producto, modelo y algunas de sus características
                              televisores.forEach(televisor => {
                                const precioConInteres = televisor.precio * (1 + interes);
                                const precioPorCuota = precioConInteres / cuotas;
                                alert(`El precio de ${televisor.marca} ${televisor.modelo}, con un precio inicial de $${televisor.precio} en 12 cuotas es de $${precioPorCuota.toFixed(2)} por cuota`);
                              });
                              break;                                                       
                        case '2':
                            const notebooks = 
                            [
                                {marca: "Lenovo", modelo: "Legion 5 Pro", pulgadas: 16, procesador: "Intel Core i5",gpu:"NVIDIA® GeForce RTX™ 3060 6GB", ram:"16GB" ,disco:"SSD 512GB", precio: 450000},
                                {marca: "Aiwa", modelo: "CA141-C-W11H", pulgadas: 14, procesador: "Intel Celeron",gpu:" Gráfica Integrada", ram:"4GB",disco:"SSD 128GB", precio: 90000},
                                {marca: "Asus", modelo: "FA506IHRB-HN083W", pulgadas: 15, procesador: "AMD Ryzen 5",gpu:"Nvidia Geforce GTX1650", ram:"16GB",disco:"SSD 512GB", precio: 320000},
                                {marca: "Dell ", modelo: "Inspiron 15 I3511 TJ13D", pulgadas: 15, procesador: "Intel Core i3",gpu:"Gráfica Integrada", ram:"16GB",disco:"SSD 256GB", precio: 180000},
                                {marca: "HP", modelo: "GAMER OMEN 16-B0507LA", pulgadas: 16, procesador: "Intel Core i5",gpu:"NVIDIA® GeForce RTX™ 3050 6GB", ram:"8GB",disco:"SSD 512GB", precio: 450000},
                            ];
                            
                              const interes2 = 0.1; 
                              const cuotas2 = 12;
                              
                                notebooks.forEach(notebooks => {
                                const precioConInteres = notebooks.precio * (1 + interes2);
                                const precioPorCuota = precioConInteres / cuotas2;
                                alert(`El precio de ${notebooks.marca} ${notebooks.modelo} ${notebooks.gpu} ${notebooks.ram} ${notebooks.disco}, con un precio inicial de $${notebooks.precio} en 12 cuotas es de $${precioPorCuota.toFixed(2)} por cuota`);
                              });                                                       
                                break;                                             
                        case '3':                                                        
                         const consolas = 
                        [
                            {marca: "Nintendo", modelo: "Switch OLED", almacenamiento: "64GB", precio: 260000},
                            {marca: "PlayStation", modelo: "4", almacenamiento: "500GB", precio: 180000},
                            {marca: "PlayStation", modelo: "5", almacenamiento: "825GB", precio: 300000},
                            {marca: "Xbox", modelo: "Series S", almacenamiento: "65GB", precio: 165000},
                            {marca: "Xbox", modelo: "Series X", almacenamiento: "1TB", precio: 270000}
                        ];
                        
                          const interes3 = 0.1; 
                          const cuotas3 = 12;
                          
                            consolas.forEach(consolas => {
                            const precioConInteres = consolas.precio * (1 + interes3);
                            const precioPorCuota = precioConInteres / cuotas3;
                            alert(`El precio de ${consolas.marca} ${consolas.modelo} ${consolas.almacenamiento}, con un precio inicial de $${consolas.precio}, en 12 cuotas es de $${precioPorCuota.toFixed(2)} por cuota`);
                          });                                                       
                            break;
                            
                        default:
                                alert('Opción inválida!')
                                break;      
                    }
                    opcion2 = prompt("Elija entre los productos: \n1- Televisores. \n2- Notebooks.\n3- Consolas.  \n4- Presione X para volver")
                }         
        }
        opcion = prompt('Elija entre estas opciones: \n1- Ver productos que se pueden pagar en 12 cuotas (con interés) . \n2- Presione S para salir')       
    }
}
alert('Adiós!');
