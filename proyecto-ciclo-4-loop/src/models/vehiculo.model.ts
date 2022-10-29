import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Cliente} from './cliente.model';
import {Revision} from './revision.model';

@model()
export class Vehiculo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  VehiculoId?: string;

  @property({
    type: 'string',
    required: true,
  })
  Placa: string;

  @property({
    type: 'string',
    required: true,
  })
  Tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  Marca: string;

  @property({
    type: 'number',
    required: true,
  })
  Modelo: number;

  @property({
    type: 'number',
    required: true,
  })
  NumeroPasajeros: number;

  @property({
    type: 'number',
    required: true,
  })
  Cilindraje: number;

  @property({
    type: 'string',
    required: true,
  })
  Pais: string;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  @belongsTo(() => Cliente, {name: 'vehiculo_cliente'})
  clienteId: string;

  @hasMany(() => Revision)
  revisions: Revision[];

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
