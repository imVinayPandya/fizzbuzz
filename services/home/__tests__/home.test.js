const request = require('supertest');
const { describe, expect, test } = require('@jest/globals');

const app = require('../../../app');

describe('Health check api', () => {
  test('Server is running', async () => {
    const res = await request(app).get('/').expect(200);
    const baseApi = res.text === 'Abandon all hope, ye who enter here.';
    expect(baseApi).toBeTruthy();
  });
});
