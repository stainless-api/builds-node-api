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
