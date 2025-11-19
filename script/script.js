/* LISTA DE CRUCEROS (POR BARCO) */
const CATALOGO_CRUCEROS = [
  { id:"ET-1", nombre:"OSAKAN ETERNITY", imagen:"./static/img/eternity.png", fechaSalida:"2026-05-05", duracionDias:5, puertoSalida:"Barcelona", puertoLlegada:"Civitavecchia", puertosEscala:["Palma","Marsella"], precioBase:850 },
  { id:"ET-2", nombre:"OSAKAN ETERNITY", imagen:"./static/img/eternity.png", fechaSalida:"2026-06-14", duracionDias:7, puertoSalida:"Civitavecchia", puertoLlegada:"Venecia", puertosEscala:["Nápoles","Rovigno"], precioBase:1200 },
  { id:"ET-3", nombre:"OSAKAN ETERNITY", imagen:"./static/img/eternity.png", fechaSalida:"2026-07-22", duracionDias:11, puertoSalida:"Civitavecchia", puertoLlegada:"Turquía", puertosEscala:["Kusadasi","Rodas"], precioBase:1950 },

  { id:"AU-1", nombre:"OSAKAN AURORA", imagen:"./static/img/aurora.png", fechaSalida:"2026-05-11", duracionDias:5, puertoSalida:"Civitavecchia", puertoLlegada:"Barcelona", puertosEscala:["Nápoles","Cagliari"], precioBase:850 },
  { id:"AU-2", nombre:"OSAKAN AURORA", imagen:"./static/img/aurora.png", fechaSalida:"2026-06-18", duracionDias:7, puertoSalida:"Barcelona", puertoLlegada:"Turquía", puertosEscala:["Palma","Santorini"], precioBase:1200 },
  { id:"AU-3", nombre:"OSAKAN AURORA", imagen:"./static/img/aurora.png", fechaSalida:"2026-07-25", duracionDias:11, puertoSalida:"Barcelona", puertoLlegada:"Venecia", puertosEscala:["Catania","Mykonos"], precioBase:1950 },

  { id:"OD-1", nombre:"OSAKAN ODYSSEY", imagen:"./static/img/odyssey.png", fechaSalida:"2026-05-18", duracionDias:5, puertoSalida:"Barcelona", puertoLlegada:"Venecia", puertosEscala:["Marseille","Ajaccio"], precioBase:850 },
  { id:"OD-2", nombre:"OSAKAN ODYSSEY", imagen:"./static/img/odyssey.png", fechaSalida:"2026-06-25", duracionDias:7, puertoSalida:"Civitavecchia", puertoLlegada:"Turquía", puertosEscala:["Napoli","Kotor"], precioBase:1200 },
  { id:"OD-3", nombre:"OSAKAN ODYSSEY", imagen:"./static/img/odyssey.png", fechaSalida:"2026-07-05", duracionDias:11, puertoSalida:"Civitavecchia", puertoLlegada:"Barcelona", puertosEscala:["Santorini","Rafina"], precioBase:1950 },

  { id:"SR-1", nombre:"OSAKAN SERENITY", imagen:"./static/img/serenity.png", fechaSalida:"2026-05-28", duracionDias:5, puertoSalida:"Civitavecchia", puertoLlegada:"Turquía", puertosEscala:["Naxos","Mykonos"], precioBase:850 },
  { id:"SR-2", nombre:"OSAKAN SERENITY", imagen:"./static/img/serenity.png", fechaSalida:"2026-06-04", duracionDias:7, puertoSalida:"Barcelona", puertoLlegada:"Venecia", puertosEscala:["Palma","Cagliari"], precioBase:1200 },
  { id:"SR-3", nombre:"OSAKAN SERENITY", imagen:"./static/img/serenity.png", fechaSalida:"2026-07-12", duracionDias:11, puertoSalida:"Barcelona", puertoLlegada:"Turquía", puertosEscala:["Kusadasi","Rodos"], precioBase:1950 },

  { id:"LG-1", nombre:"OSAKAN LEGACY", imagen:"./static/img/legacy.png", fechaSalida:"2026-05-09", duracionDias:5, puertoSalida:"Barcelona", puertoLlegada:"Turquía", puertosEscala:["Valencia","Ibiza"], precioBase:850 },
  { id:"LG-2", nombre:"OSAKAN LEGACY", imagen:"./static/img/legacy.png", fechaSalida:"2026-06-20", duracionDias:7, puertoSalida:"Civitavecchia", puertoLlegada:"Barcelona", puertosEscala:["Napoli","Palermo"], precioBase:1200 },
  { id:"LG-3", nombre:"OSAKAN LEGACY", imagen:"./static/img/legacy.png", fechaSalida:"2026-07-28", duracionDias:11, puertoSalida:"Civitavecchia", puertoLlegada:"Venecia", puertosEscala:["Dubrovnik","Split"], precioBase:1950 }
];

/* CONFIGURACION PARA CAMAROTES, BEBIBAS E IMPUESTOS */
const CAMAROTES = [
  { id:"interior", nombre:"Interior", descripcion:"Camarote interior cómodo, 16 m², cama queen, armario amplio. Ideal si buscas ahorro.", extra:0, img:"./static/img/interior.png" },
  { id:"ventana", nombre:"Ventana", descripcion:"Camarote con ventana panorámica, 18 m². Luz natural y pequeño escritorio.", extra:180, img:"./static/img/ventana.png" },
  { id:"balcon", nombre:"Balcón", descripcion:"Camarote con balcón privado, 22 m². Sillón exterior y vista directa al mar.", extra:420, img:"./static/img/balcon.png" }
];

const BEBIDAS = [
  { id:"none", nombre:"Sin paquete", descripcion:"Sin paquete de bebidas. Consumo a bordo por separado.", extra:0, img:"./static/img/sinpaquete.png" },
  { id:"refrescos", nombre:"Refrescos", descripcion:"Paquete refrescos ilimitados (sin alcohol). Válido en bares oficiales.", extra:90, img:"./static/img/refrescos.png" },
  { id:"starbucks", nombre:"Starbucks Pass", descripcion:"Café ilimitado y bebidas calientes de la carta Starbucks.", extra:190, img:"./static/img/starbucks.png" },
  { id:"alcohol", nombre:"Bebidas alcohólicas", descripcion:"Selección de vinos y tragos básicos (según política de consumo).", extra:360, img:"./static/img/alcohol.png" }
];

const IMPUESTO_PORC = 0.12;
const TASAS_POR_PERSONA = 180;
const PROPINA_POR_DIA = 16;

/* STORAGE*/
const CLAVE_STORAGE = "osakan_reservas";
let carrito = JSON.parse(localStorage.getItem(CLAVE_STORAGE)) || [];

/*REFERENCIAS DOM*/
const selectMes = document.getElementById("selectMes");
const selectAnio = document.getElementById("selectAnio");
const selectPuertoSalida = document.getElementById("selectPuertoSalida");
const selectDuracion = document.getElementById("selectDuracion");
const selectCrucero = document.getElementById("selectCrucero");
const btnMostrar = document.getElementById("btnMostrar");

const areaResultado = document.getElementById("areaResultado");
const areaExtras = document.getElementById("areaExtras");

const btnAbrirCarrito = document.getElementById("btnAbrirCarrito");
const contadorCarrito = document.getElementById("contadorCarrito");

const modalCarrito = document.getElementById("modalCarrito");
const btnCerrarModal = document.getElementById("btnCerrarModal");
const listaModal = document.getElementById("listaModal");
const modalSubtotal = document.getElementById("modalSubtotal");
const modalImpuestos = document.getElementById("modalImpuestos");
const modalTasas = document.getElementById("modalTasas");
const modalPropinas = document.getElementById("modalPropinas");
const modalTotal = document.getElementById("modalTotal");
const btnVaciarModal = document.getElementById("btnVaciarModal");
const btnFinalizarCompra = document.getElementById("btnFinalizarCompra");
const mensajeErrorPago = document.getElementById("mensajeErrorPago");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxDetalle = document.getElementById("lightboxDetalle");
const lightboxCerrar = document.getElementById("lightboxCerrar");

/* UTILIDADES PARA FECHAS */
function formatearFecha(iso){
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString();
}
function calcularFechaFin(isoInicio, duracion){
  const d = new Date(isoInicio + "T00:00:00");
  d.setDate(d.getDate() + duracion - 1);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth()+1).padStart(2,"0");
  const dd = String(d.getDate()).padStart(2,"0");
  return `${yyyy}-${mm}-${dd}`;
}

/* SELECTS */
function inicializarSelects(){
  const mesesOrden = ["Mayo","Junio","Julio"];
  const presentes = [...new Set(CATALOGO_CRUCEROS.map(c=>{
    const m = new Date(c.fechaSalida+"T00:00:00").toLocaleString('es-ES',{month:'long'});
    return m.charAt(0).toUpperCase() + m.slice(1);
  }))];
  mesesOrden.forEach(m=>{
    if(presentes.includes(m)){
      const opt = document.createElement("option");
      opt.value = m;
      opt.textContent = m;
      selectMes.appendChild(opt);
    }
  });
  actualizarContadorCarrito();
}
inicializarSelects();

/* SELECTS DEPENDIENTES */
selectMes.addEventListener("change", ()=>{
  selectPuertoSalida.innerHTML = '<option value="">-- Seleccioná puerto --</option>'; selectPuertoSalida.disabled = true;
  selectDuracion.innerHTML = '<option value="">-- Primero elegí puerto --</option>'; selectDuracion.disabled = true;
  selectCrucero.innerHTML = '<option value="">-- Primero elegí duración --</option>'; selectCrucero.disabled = true;
  btnMostrar.disabled = true;
  areaResultado.innerHTML = '<p class="hint">Seleccioná mes → puerto → duración → crucero para ver los detalles.</p>';
  areaExtras.innerHTML = '<p class="hint">Seleccioná un crucero para configurar la reserva.</p>';

  const mes = selectMes.value;
  if(!mes) return;
  const mesNum = mes === "Mayo" ? "05" : (mes === "Junio" ? "06" : "07");
  const puertos = [...new Set(CATALOGO_CRUCEROS.filter(c => c.fechaSalida.startsWith("2026-"+mesNum)).map(c => c.puertoSalida))];
  if(puertos.length){
    selectPuertoSalida.disabled = false;
    puertos.forEach(p=>{
      const opt = document.createElement("option"); opt.value = p; opt.textContent = p;
      selectPuertoSalida.appendChild(opt);
    });
  } else {
    selectPuertoSalida.innerHTML = '<option value="">No hay salidas</option>';
  }
});

selectPuertoSalida.addEventListener("change", ()=>{
  selectDuracion.innerHTML = '<option value="">-- Seleccioná duración --</option>'; selectDuracion.disabled = true;
  selectCrucero.innerHTML = '<option value="">-- Primero elegí duración --</option>'; selectCrucero.disabled = true;
  btnMostrar.disabled = true;
  areaResultado.innerHTML = '<p class="hint">Seleccioná mes → puerto → duración → crucero para ver los detalles.</p>';
  areaExtras.innerHTML = '<p class="hint">Seleccioná un crucero para configurar la reserva.</p>';

  const mes = selectMes.value; const puerto = selectPuertoSalida.value;
  if(!mes || !puerto) return;
  const mesNum = mes === "Mayo" ? "05" : (mes === "Junio" ? "06" : "07");
  const duraciones = [...new Set(CATALOGO_CRUCEROS.filter(c => c.fechaSalida.startsWith("2026-"+mesNum) && c.puertoSalida === puerto).map(c => c.duracionDias))].sort((a,b)=>a-b);
  if(duraciones.length){
    selectDuracion.disabled = false;
    duraciones.forEach(d=>{
      const opt = document.createElement("option"); opt.value = d; opt.textContent = d + " días";
      selectDuracion.appendChild(opt);
    });
  }
});

selectDuracion.addEventListener("change", ()=>{
  selectCrucero.innerHTML = '<option value="">-- Seleccioná un viaje --</option>'; selectCrucero.disabled = true;
  btnMostrar.disabled = true;
  areaResultado.innerHTML = '<p class="hint">Seleccioná mes → puerto → duración → crucero para ver los detalles.</p>';
  areaExtras.innerHTML = '<p class="hint">Seleccioná un crucero para configurar la reserva.</p>';

  const mes = selectMes.value; const puerto = selectPuertoSalida.value; const dur = parseInt(selectDuracion.value,10);
  if(!mes || !puerto || !dur) return;
  const mesNum = mes === "Mayo" ? "05" : (mes === "Junio" ? "06" : "07");
  const matches = CATALOGO_CRUCEROS.filter(c => c.fechaSalida.startsWith("2026-"+mesNum) && c.puertoSalida === puerto && c.duracionDias === dur);
  if(matches.length){
    selectCrucero.disabled = false;
    matches.forEach(m=>{
      const opt = document.createElement("option"); opt.value = m.id;
      opt.textContent = `${m.nombre} — Salida ${formatearFecha(m.fechaSalida)}`;
      selectCrucero.appendChild(opt);
    });
  }
});

selectCrucero.addEventListener("change", ()=> { btnMostrar.disabled = !selectCrucero.value; });

/* MOSTRAR CRUCERO SELECCIONADO */
btnMostrar.addEventListener("click", ()=> {
  const id = selectCrucero.value;
  const viaje = CATALOGO_CRUCEROS.find(c => c.id === id);
  if(!viaje) return;
  mostrarCruceroSeleccionado(viaje);
  renderizarFormularioExtras(viaje);
});

function mostrarCruceroSeleccionado(viaje){
  areaResultado.innerHTML = "";
  const cont = document.createElement("div"); cont.className = "card-seleccionado";
  const fechaFin = calcularFechaFin(viaje.fechaSalida, viaje.duracionDias);

  cont.innerHTML = `
    <img class="crucero-imagen" src="${viaje.imagen}" alt="${viaje.nombre}">
    <div class="info">
      <h3>${viaje.nombre}</h3>
      <p><strong>Salida:</strong> ${formatearFecha(viaje.fechaSalida)} — <strong>${viaje.puertoSalida}</strong></p>
      <p><strong>Llega:</strong> ${formatearFecha(fechaFin)} — <strong>${viaje.puertoLlegada}</strong></p>
      <p><strong>Duración:</strong> ${viaje.duracionDias} días</p>
      <p><strong>Escalas:</strong> ${viaje.puertosEscala.join(", ")}</p>
      <p class="precio">Precio base por persona: $${viaje.precioBase}</p>
    </div>
  `;
  areaResultado.appendChild(cont);
}

/* FORMULARIOS EXTRA (CAMAROTES, BEBIDAS) */
function renderizarFormularioExtras(viaje){
  areaExtras.innerHTML = "";
  const wrapper = document.createElement("div"); wrapper.className = "extras-contenedor";

  // TARJETA INFO CRUCERO
  const infoCard = document.createElement("div"); infoCard.className = "card-mini";
  infoCard.innerHTML = `
    <img src="${viaje.imagen}" alt="${viaje.nombre}">
    <div>
      <h4 style="margin:0">${viaje.nombre}</h4>
      <p style="margin:6px 0;color:var(--muted)">${formatearFecha(viaje.fechaSalida)} • ${viaje.duracionDias} días</p>
      <p style="margin:4px 0;color:var(--muted)"><strong>${viaje.puertoSalida}</strong> → <strong>${viaje.puertoLlegada}</strong></p>
    </div>
  `;
  wrapper.appendChild(infoCard);

  // CAMAROTES
  const camDiv = document.createElement("div"); camDiv.innerHTML = "<h4>Tipo de camarote</h4>";
  const gridCam = document.createElement("div"); gridCam.className = "tarjetas-grid";
  CAMAROTES.forEach(c=>{
    const t = document.createElement("article"); t.className = "tarjeta-seleccion";
    t.tabIndex = 0;
    t.dataset.id = c.id;
    t.innerHTML = `
      <div class="thumb"><img src="${c.img}" alt="${c.nombre}"></div>
      <div class="body">
        <h4>${c.nombre}</h4>
        <p>${c.descripcion}</p>
        <div class="precio-extra">+ $${c.extra}</div>
      </div>
    `;
    gridCam.appendChild(t);
  });
  camDiv.appendChild(gridCam);
  wrapper.appendChild(camDiv);

  // BEBIDAS
  const bebDiv = document.createElement("div"); bebDiv.innerHTML = "<h4>Paquete de bebidas</h4>";
  const gridBeb = document.createElement("div"); gridBeb.className = "tarjetas-grid";
  BEBIDAS.forEach(b=>{
    const t = document.createElement("article"); t.className = "tarjeta-seleccion";
    t.tabIndex = 0;
    t.dataset.id = b.id;
    t.innerHTML = `
      <div class="thumb"><img src="${b.img}" alt="${b.nombre}"></div>
      <div class="body">
        <h4>${b.nombre}</h4>
        <p>${b.descripcion}</p>
        <div class="precio-extra">+ $${b.extra}</div>
      </div>
    `;
    gridBeb.appendChild(t);
  });
  bebDiv.appendChild(gridBeb);
  wrapper.appendChild(bebDiv);

  // PASAJEROS Y BOTONES
  const paxDiv = document.createElement("div"); paxDiv.innerHTML = `<h4>Cantidad de personas</h4><input id="inputPax" type="number" min="1" max="8" value="1">`;
  wrapper.appendChild(paxDiv);

  const contBtns = document.createElement("div"); contBtns.style.display = "flex"; contBtns.style.gap = "12px"; contBtns.style.marginTop = "6px";
  const btn = document.createElement("button"); btn.className = "btn btn-primary"; btn.textContent = "Agregar al carrito";
  contBtns.appendChild(btn);
  wrapper.appendChild(contBtns);

  areaExtras.appendChild(wrapper);

  // LOGICA PARA ELEGIR EN LAS TARJETAS
  function activarTarjeta(grid, id){
    grid.querySelectorAll('.tarjeta-seleccion').forEach(el => el.classList.toggle('activa', el.dataset.id === id));
  }

  // ORDEN
  const primeroCam = gridCam.querySelector('.tarjeta-seleccion');
  if(primeroCam) activarTarjeta(gridCam, primeroCam.dataset.id);
  const primeroBeb = gridBeb.querySelector('.tarjeta-seleccion');
  if(primeroBeb) activarTarjeta(gridBeb, primeroBeb.dataset.id);

  // CLICK EN TARJETAS DE CAMAROTE
  gridCam.addEventListener('click', (e) => {
    const tarjeta = e.target.closest('.tarjeta-seleccion');
    if(!tarjeta) return;
    activarTarjeta(gridCam, tarjeta.dataset.id);
  });
  gridCam.addEventListener('keydown', (e) => {
    if(e.key === "Enter" || e.key === " ") {
      const tarjeta = e.target.closest('.tarjeta-seleccion');
      if(!tarjeta) return;
      activarTarjeta(gridCam, tarjeta.dataset.id);
    }
  });

  //CLICK EN TARJETAS DE BEBIDAS
  gridBeb.addEventListener('click', (e) => {
    const tarjeta = e.target.closest('.tarjeta-seleccion');
    if(!tarjeta) return;
    activarTarjeta(gridBeb, tarjeta.dataset.id);
  });
  gridBeb.addEventListener('keydown', (e) => {
    if(e.key === "Enter" || e.key === " ") {
      const tarjeta = e.target.closest('.tarjeta-seleccion');
      if(!tarjeta) return;
      activarTarjeta(gridBeb, tarjeta.dataset.id);
    }
  });

  // ABRIR LIGHTBOX
  function abrirDetalleDesdeTarjeta(tarjeta, tipo){
    const id = tarjeta.dataset.id;
    let fuente = "";
    let titulo = "";
    let detalle = "";
    if(tipo === "camarote"){
      const c = CAMAROTES.find(x=>x.id===id);
      if(!c) return;
      fuente = c.img; titulo = c.nombre; detalle = `${c.descripcion} • Superficie aproximada: ${ c.id === 'balcon' ? '22 m²' : (c.id === 'ventana' ? '18 m²' : '16 m²') } • Servicios: toallas de playa, caja de seguridad.` ;
    } else {
      const b = BEBIDAS.find(x=>x.id===id);
      if(!b) return;
      fuente = b.img; titulo = b.nombre; detalle = `${b.descripcion} • Incluye: atención en bares adheridos y consumos según política del pack.` ;
    }
    abrirLightboxConDetalle(fuente, `<strong>${titulo}</strong><br>${detalle}`);
  }

  // CLICK PARA FOTOS DE LAS TARJETAS
  gridCam.addEventListener('click', (e) => {
    const imgEl = e.target.closest('.thumb img');
    if(!imgEl) return;
    const tarjeta = e.target.closest('.tarjeta-seleccion');
    abrirDetalleDesdeTarjeta(tarjeta, "camarote");
  });
  gridBeb.addEventListener('click', (e) => {
    const imgEl = e.target.closest('.thumb img');
    if(!imgEl) return;
    const tarjeta = e.target.closest('.tarjeta-seleccion');
    abrirDetalleDesdeTarjeta(tarjeta, "bebida");
  });

  // USAR LA TARJETA ACTIVA PARA AGREGAR AL CARRITO
  btn.addEventListener('click', ()=> {
    const camActivo = gridCam.querySelector('.tarjeta-seleccion.activa');
    const bebActivo = gridBeb.querySelector('.tarjeta-seleccion.activa');
    const pax = parseInt(document.getElementById('inputPax').value,10) || 1;
    if(!camActivo || !bebActivo) return;

    const camObj = CAMAROTES.find(x=> x.id === camActivo.dataset.id);
    const bebObj = BEBIDAS.find(x=> x.id === bebActivo.dataset.id);

    const reserva = {
      reservaId: `${viaje.id}-${Date.now()}`,
      cruceroId: viaje.id,
      nombre: viaje.nombre,
      fechaSalida: viaje.fechaSalida,
      duracionDias: viaje.duracionDias,
      puertoSalida: viaje.puertoSalida,
      puertoLlegada: viaje.puertoLlegada,
      puertosEscala: viaje.puertosEscala,
      precioBase: viaje.precioBase,
      pax: pax,
      camarote: { id: camObj.id, nombre: camObj.nombre, extra: camObj.extra, img: camObj.img },
      bebidas: { id: bebObj.id, nombre: bebObj.nombre, extra: bebObj.extra, img: bebObj.img }
    };

    agregarReservaAlCarrito(reserva);
    abrirModalCarrito();
    renderizarModalCarrito();
  });
}

/* FUNCIONES CARRITO */
function agregarReservaAlCarrito(item){
  carrito.push(item);
  persistirCarrito();
  actualizarContadorCarrito();
}
function persistirCarrito(){ localStorage.setItem(CLAVE_STORAGE, JSON.stringify(carrito)); }
function actualizarContadorCarrito(){ contadorCarrito.textContent = String(carrito.length); }

/* MODAL RESUMEN Y CARGOS CARRITO */
function renderizarModalCarrito(){
  listaModal.innerHTML = "";
  mensajeErrorPago.classList.remove('activo');
  mensajeErrorPago.textContent = "";

  let subtotal = 0; let totalPropinas = 0; let totalTasas = 0;

  carrito.forEach(item => {
    const precioPorPersona = item.precioBase + item.camarote.extra + item.bebidas.extra;
    const subtotalItem = precioPorPersona * item.pax;
    const propinasItem = item.duracionDias * PROPINA_POR_DIA * item.pax;
    const tasasItem = TASAS_POR_PERSONA * item.pax;

    subtotal += subtotalItem;
    totalPropinas += propinasItem;
    totalTasas += tasasItem;

    const itemDiv = document.createElement("div"); itemDiv.className = "item-modal";
    const fechaFin = calcularFechaFin(item.fechaSalida, item.duracionDias);

    itemDiv.innerHTML = `
      <img src="${(CATALOGO_CRUCEROS.find(c=>c.id===item.cruceroId) || {}).imagen || './static/img/eternity.png'}" alt="${item.nombre}">
      <div class="item-meta">
        <h4>${item.nombre}</h4>
        <p>${formatearFecha(item.fechaSalida)} → ${formatearFecha(fechaFin)} • ${item.duracionDias} días</p>
        <p>Pax: ${item.pax} • Camarote: ${item.camarote.nombre} (+$${item.camarote.extra}) • Bebidas: ${item.bebidas.nombre} (+$${item.bebidas.extra})</p>
        <p style="color:var(--muted)">Subtotal: $${subtotalItem.toFixed(2)} • Propinas: $${propinasItem.toFixed(2)} • Tasas: $${tasasItem.toFixed(2)}</p>
        <div class="mini-extras">
          <img src="${item.camarote.img}" alt="camarote">
          <img src="${item.bebidas.img}" alt="bebida">
        </div>
        <div style="margin-top:8px"><button data-id="${item.reservaId}" class="btn btn-outline btn-eliminar">Eliminar</button></div>
      </div>
    `;
    listaModal.appendChild(itemDiv);
  });

  const impuesto = +(subtotal * IMPUESTO_PORC).toFixed(2);
  const total = +(subtotal + impuesto + totalTasas + totalPropinas).toFixed(2);

  modalSubtotal.textContent = subtotal.toFixed(2);
  modalImpuestos.textContent = impuesto.toFixed(2);
  modalTasas.textContent = totalTasas.toFixed(2);
  modalPropinas.textContent = totalPropinas.toFixed(2);
  modalTotal.textContent = total.toFixed(2);

  // ELIMINAR DEL CARRITO
  listaModal.querySelectorAll(".btn-eliminar").forEach(b=>{
    b.addEventListener("click", ()=>{
      const id = b.getAttribute("data-id");
      carrito = carrito.filter(i => i.reservaId !== id);
      persistirCarrito();
      actualizarContadorCarrito();
      renderizarModalCarrito();
    });
  });
}

/* ABRIR Y CERRAR MODAL CARRITO */
function abrirModalCarrito(){ modalCarrito.setAttribute("aria-hidden","false"); renderizarModalCarrito(); }
function cerrarModalCarrito(){ modalCarrito.setAttribute("aria-hidden","true"); }

btnAbrirCarrito.addEventListener("click", ()=> abrirModalCarrito());
btnCerrarModal.addEventListener("click", ()=> cerrarModalCarrito());
modalCarrito.addEventListener("click", (e)=> { if(e.target === modalCarrito) cerrarModalCarrito(); });

/* VACIAR CARRITO */
btnVaciarModal.addEventListener("click", ()=> {
  carrito = [];
  persistirCarrito();
  actualizarContadorCarrito();
  renderizarModalCarrito();
  cerrarModalCarrito();
});

/* FINALIZAR COMPRA (MENSAJE DE ERROR) */
btnFinalizarCompra.addEventListener("click", ()=> {
  // MENSAJE
  mensajeErrorPago.textContent = "Ups... ocurrió un error al procesar tu reserva. Intenta nuevamente más tarde.";
  mensajeErrorPago.classList.add('activo');
});

/* + FUNCIONES LIGHTBOX */
function abrirLightboxConDetalle(src, htmlDetalle){
  lightboxImg.src = src;
  lightboxDetalle.innerHTML = htmlDetalle;
  lightbox.setAttribute("aria-hidden","false");
}
function cerrarLightbox(){
  lightbox.setAttribute("aria-hidden","true");
  lightboxImg.src = "";
  lightboxDetalle.innerHTML = "";
}
lightboxCerrar.addEventListener("click", ()=> cerrarLightbox());
lightbox.addEventListener("click", (e)=> { if(e.target === lightbox) cerrarLightbox(); });

/* ACTUALIZAR CONTADOR CARRITO */
if(carrito.length > 0) actualizarContadorCarrito();


