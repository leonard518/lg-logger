import { logger } from '../src/index';

describe('blah', () => {
  it('works', () => {
    const fnLogger = logger({
      msg: '[INFO]',
      event: {
        body: '',
        headers: {},
        httpMethod: '',
        isBase64Encoded: false,
        multiValueHeaders: {},
        multiValueQueryStringParameters: {},
        path: '/hello',
        pathParameters: {},
        queryStringParameters: {},
        requestContext: {
          accountId: '123456789012',
          apiId: '1234',
          authorizer: {},
          httpMethod: 'get',
          identity: {
            accessKey: '',
            accountId: '',
            apiKey: '',
            apiKeyId: '',
            caller: '',
            clientCert: {
              clientCertPem: '',
              issuerDN: '',
              serialNumber: '',
              subjectDN: '',
              validity: {
                notAfter: '',
                notBefore: '',
              },
            },
            cognitoAuthenticationProvider: '',
            cognitoAuthenticationType: '',
            cognitoIdentityPoolId: '',
            cognitoIdentityId: '',
            principalOrgId: '',
            sourceIp: '',
            user: '',
            userAgent: '',
            userArn: '',
          },
          path: '/hello',
          protocol: 'HTTP/1.1',
          requestId: '',
          requestTimeEpoch: 1428582896000,
          resourceId: '123456',
          resourcePath: '/hello',
          stage: 'dev',
        },
        resource: '',
        stageVariables: {},
      },
      context: {
        callbackWaitsForEmptyEventLoop: false,
        functionName: 'string',
        functionVersion: 'string',
        invokedFunctionArn: 'string',
        memoryLimitInMB: 'string',
        awsRequestId: 'string',
        logGroupName: 'string',
        logStreamName: 'string',
        identity: {
          cognitoIdentityId: '',
          cognitoIdentityPoolId: '',
        },
        clientContext: {
          client: {
            installationId: '',
            appTitle: '',
            appVersionName: '',
            appVersionCode: '',
            appPackageName: '',
          },
          Custom: 'any',
          env: {
            platformVersion: '',
            platform: '',
            make: '',
            model: '',
            locale: '',
          },
        },
        getRemainingTimeInMillis: function(): number {
          throw new Error('Function not implemented.');
        },
        done: function(error?: Error | undefined, result?: any): void {
          throw new Error(`Function not implemented. ${error} ${result}`);
        },
        fail: function(error: string | Error): void {
          throw new Error(`Function not implemented. ${error}`);
        },
        succeed: function(messageOrObject: any): void {
          throw new Error(`Function not implemented. ${messageOrObject}`);
        },
      },
    });

    expect(fnLogger).toMatchObject({
      _logLevel: 'info',
      _tags: ['log', 'info', '[DATADOG_EVENT]'],
      end_ts: 1667998278065,
      layer: 'handler',
      level: '[ERROR]',
      msg: '[INFO]',
      observability: 'DataDog',
      owner: 'ranty',
      response_time: 1739,
      service: 'ranty-checkout-api',
      start_ts: 1667998276326,
      timestamp: '2022-11-09T12:51:18.065Z',
      type: 'http_request',
    });
  });
});
