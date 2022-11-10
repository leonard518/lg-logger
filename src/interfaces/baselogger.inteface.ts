export interface BaseLogger {
  _logLevel?: string;
  _tags?: string[];
  end_ts: number;
  layer: string;
  level: string;
  msg: string;
  observability: string;
  owner: string;
  response_time: number;
  service: string;
  start_ts: number;
  timestamp: string;
  type: string;
}

// interface IHttp extends IBaseLogger {
//   _logLevel: string;
//   _tags: string[];
//   api: API;
//   end_ts: number;
//   http: HTTP;
//   layer: string;
//   level: string;
//   msg: string;
//   observability: string;
//   owner: string;
//   response_time: number;
//   service: string;
//   start_ts: number;
//   timestamp: Date;
//   type: string;
// }

// interface IHttp extends IBaseLogger {
//   component: Component;
//   dynamo: Dynamo;
//   end_ts: number;
//   layer: string;
//   level: string;
//   message_id: string;
//   observability: string;
//   owner: string;
//   response_time: number;
//   service: string;
//   source_library: SourceLibrary;
//   start_ts: number;
//   timestamp: Date;
//   type: string;
// }
