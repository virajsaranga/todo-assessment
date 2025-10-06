jest.mock('../../db', () => {
  return {
    sql: {
      NVarChar: jest.fn(),
      MAX: -1,
      Int: jest.fn()
    },
    getPool: jest.fn()
  };
});

const { getPool } = require('../../db');
const tasksController = require('../../controllers/tasksController');

describe('tasksController unit tests', () => {
  beforeEach(() => jest.resetAllMocks());

  test('getTasks returns array', async () => {
    const fakePool = { request: () => ({ query: async () => ({ recordset: [{ id: 1, title: 'a' }] }) }) };
    getPool.mockResolvedValue(fakePool);

    const req = {};
    const json = jest.fn();
    const res = { json, status: jest.fn().mockReturnThis() };

    await tasksController.getTasks(req, res);
    expect(json).toHaveBeenCalledWith([{ id: 1, title: 'a' }]);
  });

  test('createTask missing title returns 400', async () => {
    const req = { body: { description: 'x' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await tasksController.createTask(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});
