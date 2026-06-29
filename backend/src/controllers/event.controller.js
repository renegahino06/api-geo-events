const { events } = require('../config/db');
const Event = require('../models/event.model');

function getAllEvents(req, res) {
  res.json(events);
}

function getEventById(req, res) {
  const { id } = req.params;
  const event = events.find(e => e.id === id);
  if (!event) {
    return res.status(404).json({ message: 'Evento no encontrado' });
  }
  res.json(event);
}

function createEvent(req, res) {
  const { title, description, category, latitude, longitude, createdBy } = req.body;

  if (!title || !latitude || !longitude) {
    return res.status(400).json({ message: 'title, latitude y longitude son obligatorios' });
  }

  const newEvent = new Event({ title, description, category, latitude, longitude, createdBy });
  events.push(newEvent);

  res.status(201).json(newEvent);
}

function updateEvent(req, res) {
  const { id } = req.params;
  const index = events.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Evento no encontrado' });
  }
  const current = events[index];
  const updated = {
    ...current,
    ...req.body,
    id: current.id,
    createdAt: current.createdAt
  };
  events[index] = updated;
  res.json(updated);
}

function deleteEvent(req, res) {
  const { id } = req.params;
  const index = events.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Evento no encontrado' });
  }
  events.splice(index, 1);
  res.status(204).send();
}

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
};
