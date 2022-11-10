import { BaseLogger } from './interfaces/baselogger.inteface';
import { info, error } from 'lambda-log';
import { DataLogger } from './interfaces/datalogger.inteface';

export const logger = (payload: DataLogger): BaseLogger => {
  const { msg } = payload;

  if (msg.toLocaleLowerCase().includes('info')) {
    info(msg, payload);
  } else {
    error(msg, payload);
  }
  const result: BaseLogger = {
    _logLevel: 'info',
    _tags: ['log', 'info', '[DATADOG_EVENT]'],
    end_ts: 1667998278065,
    layer: 'handler',
    level: '[ERROR]',
    msg,
    observability: 'DataDog',
    owner: 'ranty',
    response_time: 1739,
    service: 'ranty-checkout-api',
    start_ts: 1667998276326,
    timestamp: '2022-11-09T12:51:18.065Z',
    type: 'http_request',
  };

  return result;
};
