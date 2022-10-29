import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbTallerDataSource} from '../datasources';
import {JefeOperaciones, JefeOperacionesRelations} from '../models';

export class JefeOperacionesRepository extends DefaultCrudRepository<
  JefeOperaciones,
  typeof JefeOperaciones.prototype.JefeOperacionesId,
  JefeOperacionesRelations
> {
  constructor(
    @inject('datasources.mongodb_taller') dataSource: MongodbTallerDataSource,
  ) {
    super(JefeOperaciones, dataSource);
  }
}
