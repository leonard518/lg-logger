import { logger } from '../src/index';

describe('blah', () => {
  it('works', () => {
    const mockData = {
      msg: '[INFO]',
      version: '2.0',
      routeKey: 'POST /signer/integration/{typeStoreId}',
      rawPath: '/signer/integration/qwerty',
      rawQueryString: '',
      cookies: [],
      headers: {
        'User-Agent': 'PostmanRuntime/7.29.2',
        Accept: '*/*',
        'Postman-Token': 'wqe121312312e12e3213212312we',
        Host: '127.0.0.1:3000',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
        'Content-Length': '0',
        'X-Forwarded-Proto': 'http',
        'X-Forwarded-Port': '3000',
      },
      requestContext: {
        accountId: '123456789012',
        apiId: '1234567890',
        http: {
          method: 'POST',
          path: '/signer/integration/qwerty',
          protocol: 'HTTP/1.1',
          sourceIp: '127.0.0.1',
          userAgent: 'Custom User Agent String',
        },
        requestId: 'asdaqwe112312312e1edsds1ds12',
        routeKey: 'POST /signer/integration/{typeStoreId}',
        stage: 'Environment',
        time: '10/Nov/2022:02:25:38 +0000',
        timeEpoch: 1668047138,
        domainName: 'localhost',
        domainPrefix: 'localhost',
      },
      body: '',
      pathParameters: { typeStoreId: 'qwerty' },
      stageVariables: null,
      isBase64Encoded: false,
      start_ts: 1668047418243,
      functionName: 'SignerFunction',
      functionVersion: '$LATEST',
      invokedFunctionArn:
        'arn:aws:lambda:us-east-1:111111111111:function:SignerFunction',
    };

    const fnLogger = logger(mockData);

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
