import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbTallerDataSource} from '../datasources';
import {Cliente, ClienteRelations, Vehiculo} from '../models';
import {VehiculoRepository} from './vehiculo.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.ClienteId,
  ClienteRelations
> {

  public readonly vehiculos: HasManyRepositoryFactory<Vehiculo, typeof Cliente.prototype.ClienteId>;

  constructor(
    @inject('datasources.mongodb_taller') dataSource: MongodbTallerDataSource, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>,
  ) {
    super(Cliente, dataSource);
    this.vehiculos = this.createHasManyRepositoryFactoryFor('vehiculos', vehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculos', this.vehiculos.inclusionResolver);
  }
}
