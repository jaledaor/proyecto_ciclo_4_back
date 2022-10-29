import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbTallerDataSource} from '../datasources';
import {Revision, RevisionRelations} from '../models';

export class RevisionRepository extends DefaultCrudRepository<
  Revision,
  typeof Revision.prototype.RevisionId,
  RevisionRelations
> {
  constructor(
    @inject('datasources.mongodb_taller') dataSource: MongodbTallerDataSource,
  ) {
    super(Revision, dataSource);
  }
}
