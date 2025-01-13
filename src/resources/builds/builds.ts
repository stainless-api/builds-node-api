// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OutputsAPI from './outputs';
import {
  BuildStepOutputInProgress,
  BuildStepOutputNotStarted,
  BuildStepOutputQueued,
  CommitBuildStep,
  LintBuildStep,
  OutputRetrieveResponse,
  Outputs,
  TestBuildStep,
} from './outputs';

export class Builds extends APIResource {
  outputs: OutputsAPI.Outputs = new OutputsAPI.Outputs(this._client);

  /**
   * Create a build by uploading a spec along with some other info
   */
  create(body: BuildCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(
      '/api/spec',
      Core.multipartFormRequestOptions({ body, ...options, headers: { Accept: '*/*', ...options?.headers } }),
    );
  }

  /**
   * Retrieve a list of builds for a project
   */
  list(query: BuildListParams, options?: Core.RequestOptions): Core.APIPromise<BuildListResponse> {
    return this._client.get('/v1/builds', { query, ...options });
  }
}

export interface BuildResponse {
  id: string;
}

export type BuildListResponse = Array<BuildResponse>;

export interface BuildCreateParams {
  /**
   * The OpenAPI spec to upload
   */
  oasSpec: Core.Uploadable;

  /**
   * The name of the project to create the build in
   */
  project: string;

  /**
   * The name of the Stainless branch to upload the spec to
   */
  branch?: string;

  /**
   * The commit message to use in any resultant commits to the SDK repo
   */
  commitMessage?: string;

  /**
   * Whether or not to use an LLM to automatically guess config changes
   */
  guessConfig?: boolean;

  /**
   * The ID of the parent build
   */
  parentBuildId?: string;

  /**
   * The Stainless Config to upload
   */
  stainlessConfig?: Core.Uploadable;
}

export interface BuildListParams {
  /**
   * Project name
   */
  project: string;

  /**
   * Optional filter - the md5 hash of the Stainless config used for the build
   */
  config_hash?: string;

  /**
   * Optional limit for number of results
   */
  limit?: number;

  /**
   * Optional filter - the md5 hash of the OpenAPI spec used for the build
   */
  spec_hash?: string;
}

Builds.Outputs = Outputs;

export declare namespace Builds {
  export {
    type BuildResponse as BuildResponse,
    type BuildListResponse as BuildListResponse,
    type BuildCreateParams as BuildCreateParams,
    type BuildListParams as BuildListParams,
  };

  export {
    Outputs as Outputs,
    type BuildStepOutputInProgress as BuildStepOutputInProgress,
    type BuildStepOutputNotStarted as BuildStepOutputNotStarted,
    type BuildStepOutputQueued as BuildStepOutputQueued,
    type CommitBuildStep as CommitBuildStep,
    type LintBuildStep as LintBuildStep,
    type TestBuildStep as TestBuildStep,
    type OutputRetrieveResponse as OutputRetrieveResponse,
  };
}
