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
                let opcion2 = prompt("Elija entre los productos: \n1- Smart Tv 32: $50.000. \n2- Notebook: $200.000.\n3- Play 5: $350.000.  \n4- Presione X para volver")
                while(opcion2 != 'X' && opcion2 !='x')
                {
                    switch(opcion2)
                    {
                        case '1':
                                let preciotv = 50000; 
                                let interes = 0.2567; 
                                let numerodepagos = 12; 
                                let cuotas = (preciotv + (preciotv * interes)) / numerodepagos;
                                alert('Son 12 cuotas de'  + cuotas +  'por mes');
                                break;                                                      
                        case '2':                                                       
                                let precionotebook = 200000; 
                                let interes2 = 0.2567; 
                                let numerodepagos2 = 12; 
                                let cuotas2 = (precionotebook + (precionotebook * interes2)) / numerodepagos2;
                                alert('Son 12 cuotas de'  + cuotas2 +  'por mes');
                                break;                                             
                        case '3':                                                        
                                let precioplay5 = 350000; 
                                let interes3 = 0.2567; 
                                let numerodepagos3 = 12; 
                                let cuotas3 = (precioplay5 + (precioplay5 * interes3)) / numerodepagos3;
                                alert('Son 12 cuotas de'  + cuotas3 +  'por mes');
                                break;
                        default:
                                alert('Opción inválida!')
                                break;      
                    }
                    opcion2 = prompt("Elija entre los productos: \n1- Smart Tv 32:$50.000. \n2- Notebook:$200.000.\n3- Play 5:$350.000. \n4- Presione X para volver")
                }         
        }
        opcion = prompt('Elija entre estas opciones: \n1- Ver productos que se pueden pagar en 12 cuotas (con interés) . \n2- Presione S para salir')       
    }
}
alert('Adiós!');
