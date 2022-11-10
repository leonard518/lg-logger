import { APIGatewayProxyEvent } from 'aws-lambda';

export interface DataLogger extends APIGatewayProxyEvent {
  msg: string;
  version: string;
  start_ts: number;
  functionName: string;
  functionVersion: string;
  invokedFunctionArn: string;
  routeKey: string;
  rawPath: string;
  rawQueryString: string;
}
