# Builds

Types:

- <code><a href="./src/resources/builds/builds.ts">BuildResponse</a></code>
- <code><a href="./src/resources/builds/builds.ts">BuildListResponse</a></code>

Methods:

- <code title="get /v1/builds">client.builds.<a href="./src/resources/builds/builds.ts">list</a>({ ...params }) -> BuildListResponse</code>

## Outputs

Types:

- <code><a href="./src/resources/builds/outputs.ts">BuildStepOutputInProgress</a></code>
- <code><a href="./src/resources/builds/outputs.ts">BuildStepOutputNotStarted</a></code>
- <code><a href="./src/resources/builds/outputs.ts">BuildStepOutputQueued</a></code>
- <code><a href="./src/resources/builds/outputs.ts">CommitBuildStep</a></code>
- <code><a href="./src/resources/builds/outputs.ts">LintBuildStep</a></code>
- <code><a href="./src/resources/builds/outputs.ts">TestBuildStep</a></code>
- <code><a href="./src/resources/builds/outputs.ts">OutputRetrieveResponse</a></code>

Methods:

- <code title="get /v1/builds/{id}/outputs/{target}">client.builds.outputs.<a href="./src/resources/builds/outputs.ts">retrieve</a>({ ...params }) -> OutputRetrieveResponse</code>
