// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainless from 'stainless';

const client = new Stainless({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource builds', () => {
  test('list: only required params', async () => {
    const responsePromise = client.builds.list({ project: 'project' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.builds.list({
      project: 'project',
      config_hash: 'config_hash',
      limit: 0,
      spec_hash: 'spec_hash',
    });
  });
});
