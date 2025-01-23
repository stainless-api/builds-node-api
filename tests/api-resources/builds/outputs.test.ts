// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainless2 from 'stainless';

const client = new Stainless2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource outputs', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.builds.outputs.retrieve('id', { target: 'node' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.builds.outputs.retrieve('id', { target: 'node' });
  });
});
