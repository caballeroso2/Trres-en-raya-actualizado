const menu = [
  {id:'desayunos',title:'Desayunos',items:[
    ['Desayuno Español / Clásico','4,00 €','Pincho de tortilla artesana acompañado de café o infusión.'],
    ['Tostada con Tomate','3,00 €','Pan tostado con tomate natural rallado y aceite de oliva virgen extra, con café o infusión.'],
    ['Tostada con Jamón','4,00 €','Pan con tomate natural y jamón serrano, acompañado de café o infusión.'],
    ['Desayuno “Tres en Raya”','4,50 €','Tostada especial con base de aguacate fresco y jamón serrano, con café o infusión.'],
    ['Desayuno Francés','4,50 €','Jugosa tortilla francesa acompañada de tostadas y café o infusión.'],
    ['Croissant a la Plancha','3,00 €','Croissant artesano con mantequilla.'],
    ['Croissant Mixto','4,00 €','Croissant artesano con jamón york y queso fundido.'],
    ['Desayuno Alemán','6,50 €','Plato completo con salchichas, huevos fritos o revueltos, bacon crujiente y patatas; acompañado de café o infusión.']
  ]},
  {id:'cafes',title:'Cafés, infusiones y cacao',items:[
    ['Café Solo','1,90 €'],['Café con Leche','1,90 €'],['Cortado','1,90 €'],['Descafeinado','1,90 €'],
    ['Infusiones y Tés Variados','2,00 €','Manzanilla, menta poleo, té verde, té negro y frutos rojos.'],
    ['ColaCao','2,00 €','Cacao soluble servido con leche caliente o fría.']
  ]},
  {id:'bocadillos',title:'Bocadillos',items:[
    ['Bocadillo de Calamares','5,80 €','Crujientes calamares fritos en pan crujiente recién horneado.'],
    ['Bocadillo de Panceta / Lomo y Queso','5,80 €','Jugosas tiras de panceta o cinta de lomo a la plancha con queso fundido.'],
    ['Bocadillo de Pechuga','5,80 €','Tierna pechuga a la plancha con lechuga, tomate y mayonesa.'],
    ['Bocadillo Vegetal','5,80 €','Lechuga, tomate, atún, huevo y mayonesa.']
  ]},
  {id:'raciones',title:'Raciones',items:[
    ['Patatas Bravas','8,00 €'],['Patatas Alioli','8,00 €'],['Patatas Mixtas','8,50 €'],
    ['Huevos Rotos con Jamón','9,50 €'],['Huevos Rotos con Gambas y Gulas','9,50 €'],['Huevos Rotos con Chistorra','9,50 €'],
    ['Croquetas (1 sabor)','9,00 €'],['Croquetas Mixtas','10,00 €'],['Alitas de Pollo','10,00 €'],
    ['Fingers de Pollo','10,00 €'],['Morcilla con Pimientos del Padrón','10,00 €'],['Chopitos Fritos','11,50 €'],
    ['Calamares','13,00 €'],['Tabla Ibérica','24,50 €','Selección de embutidos y chacinas ibéricas de primera calidad.']
  ]},
  {id:'ensaladas',title:'Ensaladas',items:[
    ['Ensalada Mixta','8,50 €','Lechuga, tomate, cebolla, aceitunas, atún y huevo.'],
    ['Ensalada César','8,50 €','Pechuga de pollo, picatostes, parmesano y salsa César.']
  ]},
  {id:'hamburguesas',title:'Hamburguesas y perritos',items:[
    ['Hamburguesa Cabra en Raya','10,50 €','Hamburguesa gourmet con queso de cabra fundido y los mejores ingredientes de la casa.'],
    ['Hamburguesa 3 en Raya','12,50 €','Nuestra hamburguesa estrella de la casa con combinación completa de ingredientes especiales.'],
    ['Hamburguesa de Pollo','10,00 €','Jugosa pechuga de pollo a la plancha o empanada con lechuga, tomate y salsa especial.'],
    ['Hot Dog XXL','9,50 €','Perrito caliente gigante con salchicha XXL, cebolla crujiente y salsas al gusto.'],
    ['Hot Dog Porco Loco','10,50 €','Perrito caliente especial con salchicha gigante, toppings especiales y salsas de la casa.']
  ]},
  {id:'especialidades',title:'Especialidades y 
    platos principales',items:[
    ['Pollo al Horno','14,00 € / 15,00 €','Para llevar / consumo en restaurante. Pollo asado al horno, acompañado de patatas panaderas.']
  ]},
  {id:'bebidas',title:'Bebidas, refrescos, 
    vinos y licores',items:[
    ['Agua de Botella','1,70 €','Agua mineral natural.'],['Casera','2,00 €','Gaseosa casera.'],['Coca-Cola','3,00 €'],['Coca-Cola Zero','3,00 €'],
    ['Aquarius Limón','3,00 €'],['Aquarius Naranja','3,00 €'],['Nestea','3,00 €'],['Zumo de Melocotón','3,00 €'],['Zumo de Piña','3,00 €'],
    ['Agua con Gas','3,00€'],
    ['Vino Blanco Rueda','3,00 €','Copa de vino blanco D.O. Rueda.'],['Vino Alma (de la Casa)','3,00 €','Copa de vino de la casa.'],
    ['Vino Albariño','3,50 €','Copa de vino blanco D.O. Rías Baixas.'],['Vino Rioja','4,00 €','Copa de vino tinto D.O.Ca. Rioja.'],
    ['Vino Ribera','4,00 €','Copa de vino tinto D.O. Ribera del Duero.'],['Vermut Rojo','4,00 €'],['Vermut Blanco','4,00 €'],
    ['Vermut Blanco y Rojo','4,00 €','Vermut servido con hielo y aperitivo.'],['Licores','4,00 €','Crema, hierbas y licores variados.'],
    ['Chupitos','4,00 €','Chupitos variados.'],['Vino Blanco (Botella)','13,00 €','Botella entera de la casa.'],
    ['Vino Tinto (Botella)','16,00 €','Botella entera de la casa.'],['Copas de Whisky','8,50 €'],['Copas de Ron','8,50 €'],['Combinados','8,50 €','Combinados y copas preparados.']
  ]}
];

const nav = document.querySelector('#category-nav');
const sections = document.querySelector('#menu-sections');
const search = document.querySelector('#search');
const noResults = document.querySelector('#no-results');
const normalize = value => value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'');

menu.forEach((section,index) => {
  const link = document.createElement('a'); link.href = `#${section.id}`; link.textContent = section.title;
  if(index===0) link.classList.add('active'); nav.append(link);
  const block = document.createElement('section'); block.className='menu-section'; block.id=section.id;
  const heading = document.createElement('div'); heading.className='section-heading';
  heading.innerHTML = `<span class="shape" aria-hidden="true">${index%2?'○':'×'}</span><h2>${section.title}</h2>`;
  const list = document.createElement('div'); list.className='menu-list';
  section.items.forEach(([name,price,description,pending])=>{
    const item=document.createElement('article'); item.className='menu-item'; item.dataset.search=normalize(`${name} ${description||''} ${section.title}`);
    const title=document.createElement('div'); title.className='item-name'; title.textContent=name;
    if(pending){const badge=document.createElement('span');badge.className='pending';badge.textContent='Confirmar';title.append(badge)}
    const amount=document.createElement('div');amount.className='item-price';amount.textContent=price;
    item.append(title,amount);
    if(description){const desc=document.createElement('div');desc.className='item-desc';desc.textContent=description;item.append(desc)}
    list.append(item);
  });
  block.append(heading,list); sections.append(block);
});

search.addEventListener('input',()=>{
  const query=normalize(search.value.trim()); let visible=0;
  document.querySelectorAll('.menu-section').forEach(section=>{
    let count=0;
    section.querySelectorAll('.menu-item').forEach(item=>{const show=!query||item.dataset.search.includes(query);item.hidden=!show;if(show)count++});
    section.hidden=count===0;if(count)visible+=count;
  });
  noResults.hidden=visible!==0;
  nav.querySelectorAll('a').forEach(link=>{const target=document.querySelector(link.getAttribute('href'));link.hidden=!!query&&target.hidden});
});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){nav.querySelectorAll('a').forEach(link=>link.classList.toggle('active',link.hash===`#${entry.target.id}`))}
}),{rootMargin:'-20% 0px -70% 0px'});
document.querySelectorAll('.menu-section').forEach(section=>observer.observe(section));
