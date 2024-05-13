const Microinvoice = require('./lib/index');


jest.mock('./lib/index', () => ({
  MicroInvoice: jest.fn().mockImplementation(() => ({
    generate: jest.fn().mockResolvedValue('Invoice saved'),
  })),
}));

describe('MicroInvoice', () => {
  it('generates an invoice PDF', async () => {
    const myInvoice = new Microinvoice.MicroInvoice({});
    const result = await myInvoice.generate('example.pdf');
    expect(result).toEqual('Invoice saved');
    expect(myInvoice.generate).toHaveBeenCalledWith('example.pdf');
  });
});
