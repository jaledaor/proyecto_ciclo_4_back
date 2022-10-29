import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbTallerDataSource} from '../datasources';
import {Mecanico, MecanicoRelations, Revision} from '../models';
import {RevisionRepository} from './revision.repository';

export class MecanicoRepository extends DefaultCrudRepository<
  Mecanico,
  typeof Mecanico.prototype.MecanicoId,
  MecanicoRelations
> {

  public readonly revisions_mecanico: HasManyRepositoryFactory<Revision, typeof Mecanico.prototype.MecanicoId>;

  constructor(
    @inject('datasources.mongodb_taller') dataSource: MongodbTallerDataSource, @repository.getter('RevisionRepository') protected revisionRepositoryGetter: Getter<RevisionRepository>,
  ) {
    super(Mecanico, dataSource);
    this.revisions_mecanico = this.createHasManyRepositoryFactoryFor('revisions_mecanico', revisionRepositoryGetter,);
    this.registerInclusionResolver('revisions_mecanico', this.revisions_mecanico.inclusionResolver);
  }
}
