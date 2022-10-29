import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbTallerDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations, Cliente, Revision} from '../models';
import {ClienteRepository} from './cliente.repository';
import {RevisionRepository} from './revision.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.VehiculoId,
  VehiculoRelations
> {

  public readonly vehiculo_cliente: BelongsToAccessor<Cliente, typeof Vehiculo.prototype.VehiculoId>;

  public readonly revisions: HasManyRepositoryFactory<Revision, typeof Vehiculo.prototype.VehiculoId>;

  constructor(
    @inject('datasources.mongodb_taller') dataSource: MongodbTallerDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('RevisionRepository') protected revisionRepositoryGetter: Getter<RevisionRepository>,
  ) {
    super(Vehiculo, dataSource);
    this.revisions = this.createHasManyRepositoryFactoryFor('revisions', revisionRepositoryGetter,);
    this.registerInclusionResolver('revisions', this.revisions.inclusionResolver);
    this.vehiculo_cliente = this.createBelongsToAccessorFor('vehiculo_cliente', clienteRepositoryGetter,);
    this.registerInclusionResolver('vehiculo_cliente', this.vehiculo_cliente.inclusionResolver);
  }
}
