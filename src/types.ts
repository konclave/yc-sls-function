export type ActionInputs = {
    folderId: string
    functionName: string
    runtime: string
    entrypoint: string
    memory: number
    include: string[]
    excludePattern: string[]
    sourceRoot: string
    executionTimeout: number
    environment: string[]
    serviceAccount: string
    bucket: string
    description: string
    secrets: string[]
    networkId: string
    tags: string[]
    logsDisabled: boolean
    logsGroupId: string
    logLevel: number
    asyncRetriesCount?: number
    asyncSuccessEmtpyTarget?: object
    asyncSuccessYmqTargetQueueArn: string
    asyncSuccessYmqTargetServiceAccountId: string
    asyncFailureEmtpyTarget?: object
    asyncFailureYmqTargetQueueArn: string
    asyncFailureYmqTargetServiceAccountId: string
    asyncServiceAccountId: string
}
