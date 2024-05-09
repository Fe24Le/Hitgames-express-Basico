
const headerMenu=document.querySelector('.hm-header');

console.log(headerMenu.offsetTop);

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 80){
        headerMenu.classList.add('header-fixed');
    }else{
        headerMenu.classList.remove('header-fixed');
    }
})

/*=========================================
    Tabs
==========================================*/
if(document.querySelector('.hm-tabs')){

    const tabLinks=document.querySelectorAll('.hm-tab-link');
    const tabsContent=document.querySelectorAll('.tabs-content');

    tabLinks[0].classList.add('active');

    if(document.querySelector('.tabs-content')){
        tabsContent[0].classList.add('tab-active');
    }
    

    for (let i = 0; i < tabLinks.length; i++) {
        
        tabLinks[i].addEventListener('click',()=>{

            
            tabLinks.forEach((tab) => tab.classList.remove('active'));
            tabLinks[i].classList.add('active');
            
            tabsContent.forEach((tabCont) => tabCont.classList.remove('tab-active'));
            tabsContent[i].classList.add('tab-active');
            
        });
        
    }

}

/*=========================================
    MENU
==========================================*/

const menu=document.querySelector('.icon-menu');
const menuClose=document.querySelector('.cerrar-menu');

menu.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.add('active');
})

menuClose.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.remove('active');
})

// --------------------------------------- carrito version1----------------------------
document.addEventListener("DOMContentLoaded", function() {
  const itemsContainer = document.getElementById("items-container");
  const totalElement = document.getElementById("total");
  const checkoutBtn = document.getElementById("checkout-btn");
  let total = 0;


  // Función para agregar un elemento al carrito
  function addItem(name, price) {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
      <span>${name}</span>
      <span>$${price}</span>
    `;
    itemsContainer.appendChild(item);
    total += price;
    updateTotal();
  }

  // Función para actualizar el total
  function updateTotal() {
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
  }

  // Evento al hacer clic en el botón de pagar
  checkoutBtn.addEventListener("click", function() {
    alert("Gracias por su compra. Total a pagar: $" + total.toFixed(2));
    // Aquí podrías agregar lógica adicional, como enviar la información del carrito a un servidor, etc.
  });

  // Ejemplo: Agregar algunos elementos al carrito
   addItem("Call of Duty", 11001);
   addItem("Assasin Creed ",11002);
   addItem("God of Wars", 11003);
   addItem("Mortal Kombat11", 11008);


});

// ---------------------------------------fin  carrito version1 fin ----------------------------

//-----------------------------------inicio funciones para escribir en dat.json---------------   

        function guardarEnJSON2(nombre) {
            // Realizar una solicitud POST al servidor Node.js con los datos a guardar
            fetch('http://localhost:3000/agregar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre: nombre })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al enviar los datos');
                }
                return response.text();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }

//-----------------------------------fin funciones para escribir en dat.json---------------   

//para ver en carrito los datos del json
document.addEventListener('DOMContentLoaded', () => {
    fetch('/datos') // Realizar una solicitud GET al servidor para obtener los datos
        .then(response => response.json())
        .then(data => {
            const listaDatos = document.getElementById('listaDatos');
            data.forEach(dato => {
                const item = document.createElement('li');
                item.textContent = JSON.stringify(dato);
                listaDatos.appendChild(item);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
// para ver en carrito los datos del json