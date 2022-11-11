import { APIGatewayProxyEvent, Context } from 'aws-lambda';

export interface DataLogger {
  msg: string;
  event: APIGatewayProxyEvent;
  context: Context;
}