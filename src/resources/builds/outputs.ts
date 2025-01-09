// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Outputs extends APIResource {
  /**
   * Get the output status and details for a specific target for a specific build
   */
  retrieve(
    id: string,
    target: 'node' | 'python' | 'go' | 'java' | 'kotlin' | 'ruby',
    options?: Core.RequestOptions,
  ): Core.APIPromise<OutputRetrieveResponse> {
    return this._client.get(`/v1/builds/${id}/outputs/${target}`, options);
  }
}

export interface BuildStepOutputInProgress {
  status: 'in_progress';
}

export interface BuildStepOutputNotStarted {
  status: 'not_started';
}

export interface BuildStepOutputQueued {
  status: 'queued';
}

export type CommitBuildStep =
  | BuildStepOutputNotStarted
  | BuildStepOutputQueued
  | BuildStepOutputInProgress
  | CommitBuildStep.CommitBuildStepOutputCompleted;

export namespace CommitBuildStep {
  export interface CommitBuildStepOutputCompleted {
    completed: CommitBuildStepOutputCompleted.Completed;

    status: 'completed';
  }

  export namespace CommitBuildStepOutputCompleted {
    export interface Completed {
      commit: string;

      conclusion:
        | 'success'
        | 'failure'
        | 'skipped'
        | 'cancelled'
        | 'action_required'
        | 'neutral'
        | 'timed_out';
    }
  }
}

export type LintBuildStep =
  | BuildStepOutputNotStarted
  | BuildStepOutputQueued
  | BuildStepOutputInProgress
  | LintBuildStep.LintBuildStepOutputCompleted;

export namespace LintBuildStep {
  export interface LintBuildStepOutputCompleted {
    completed: LintBuildStepOutputCompleted.Completed;

    status: 'completed';
  }

  export namespace LintBuildStepOutputCompleted {
    export interface Completed {
      conclusion:
        | 'success'
        | 'failure'
        | 'skipped'
        | 'cancelled'
        | 'action_required'
        | 'neutral'
        | 'timed_out';
    }
  }
}

export type TestBuildStep =
  | BuildStepOutputNotStarted
  | BuildStepOutputQueued
  | BuildStepOutputInProgress
  | TestBuildStep.TestBuildStepOutputCompleted;

export namespace TestBuildStep {
  export interface TestBuildStepOutputCompleted {
    completed: TestBuildStepOutputCompleted.Completed;

    status: 'completed';
  }

  export namespace TestBuildStepOutputCompleted {
    export interface Completed {
      conclusion:
        | 'success'
        | 'failure'
        | 'skipped'
        | 'cancelled'
        | 'action_required'
        | 'neutral'
        | 'timed_out';
    }
  }
}

export interface OutputRetrieveResponse {
  commit: CommitBuildStep;

  lint: LintBuildStep;

  test: TestBuildStep;
}

export declare namespace Outputs {
  export {
    type BuildStepOutputInProgress as BuildStepOutputInProgress,
    type BuildStepOutputNotStarted as BuildStepOutputNotStarted,
    type BuildStepOutputQueued as BuildStepOutputQueued,
    type CommitBuildStep as CommitBuildStep,
    type LintBuildStep as LintBuildStep,
    type TestBuildStep as TestBuildStep,
    type OutputRetrieveResponse as OutputRetrieveResponse,
  };
}
