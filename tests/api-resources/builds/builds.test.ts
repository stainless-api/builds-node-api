// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainless2, { toFile } from 'stainless';

const client = new Stainless2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource builds', () => {
  test('create: only required params', async () => {
    const responsePromise = client.builds.create({
      oasSpec: await toFile(Buffer.from('# my file contents'), 'README.md'),
      projectName: 'projectName',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.builds.create({
      oasSpec: await toFile(Buffer.from('# my file contents'), 'README.md'),
      projectName: 'projectName',
      branch: 'branch',
      commitMessage: 'commitMessage',
      guessConfig: true,
      mergeBranch: 'mergeBranch',
      parentBuildId: 'parentBuildId',
      stainlessConfig: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

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
      branch: 'branch',
      config_hash: 'config_hash',
      limit: 0,
      spec_hash: 'spec_hash',
    });
  });
});
