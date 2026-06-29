// Representación del modelo de Evento
class Event {
  constructor({ title, description, category, latitude, longitude, createdBy }) {
    this.id = Date.now().toString();
    this.title = title;
    this.description = description;
    this.category = category;
    this.latitude = latitude;
    this.longitude = longitude;
    this.createdBy = createdBy || 'anónimo';
    this.createdAt = new Date().toISOString();
  }
}

module.exports = Event;
