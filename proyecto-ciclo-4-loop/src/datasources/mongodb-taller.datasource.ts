import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mongodb_taller',
  connector: 'mongodb',
  url: 'mongodb+srv://admin:Misiontic2022@clustertallerg4.tsga4ri.mongodb.net/TallerG33?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongodbTallerDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongodb_taller';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodb_taller', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
