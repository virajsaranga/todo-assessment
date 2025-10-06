const request = require('supertest');
const express = require('express');
const taskRoutes = require('../../routes/tasks');

const app = express();
app.use(express.json());
app.use('/api/tasks', taskRoutes);

describe('Tasks API integration (requires test DB)', () => {
  test('GET /api/tasks returns 200', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});