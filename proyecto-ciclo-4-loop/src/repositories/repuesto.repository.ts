import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbTallerDataSource} from '../datasources';
import {Repuesto, RepuestoRelations, Revision} from '../models';
import {RevisionRepository} from './revision.repository';

export class RepuestoRepository extends DefaultCrudRepository<
  Repuesto,
  typeof Repuesto.prototype.RepuestoId,
  RepuestoRelations
> {

  public readonly revisions_repuesto: HasManyRepositoryFactory<Revision, typeof Repuesto.prototype.RepuestoId>;

  constructor(
    @inject('datasources.mongodb_taller') dataSource: MongodbTallerDataSource, @repository.getter('RevisionRepository') protected revisionRepositoryGetter: Getter<RevisionRepository>,
  ) {
    super(Repuesto, dataSource);
    this.revisions_repuesto = this.createHasManyRepositoryFactoryFor('revisions_repuesto', revisionRepositoryGetter,);
    this.registerInclusionResolver('revisions_repuesto', this.revisions_repuesto.inclusionResolver);
  }
}
