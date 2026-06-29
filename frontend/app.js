const API_BASE = 'http://localhost:3000/api/events';

const form = document.getElementById('event-form');
const btnLocation = document.getElementById('get-location');
const list = document.getElementById('events-list');

btnLocation.addEventListener('click', () => {
  if (!navigator.geolocation) {
    return alert('Geolocalización no soportada en este navegador');
  }

  navigator.geolocation.getCurrentPosition(
    pos => {
      document.getElementById('latitude').value = pos.coords.latitude;
      document.getElementById('longitude').value = pos.coords.longitude;
    },
    err => {
      console.error(err);
      alert('No se pudo obtener la ubicación');
    }
  );
});

form.addEventListener('submit', async e => {
  e.preventDefault();

  const body = {
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    category: document.getElementById('category').value,
    latitude: parseFloat(document.getElementById('latitude').value),
    longitude: parseFloat(document.getElementById('longitude').value),
    createdBy: 'demo-user'
  };

  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const error = await res.json();
    alert('Error al crear evento: ' + (error.message || res.status));
    return;
  }

  form.reset();
  loadEvents();
});

async function loadEvents() {
  const res = await fetch(API_BASE);
  const data = await res.json();

  list.innerHTML = '';
  data.forEach(ev => {
    const li = document.createElement('li');
    li.textContent = `${ev.title} (${ev.category || 'sin categoría'}) - [${ev.latitude}, ${ev.longitude}]`;
    list.appendChild(li);
  });
}

loadEvents();
