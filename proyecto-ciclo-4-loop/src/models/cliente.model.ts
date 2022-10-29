import {Entity, model, property, hasMany} from '@loopback/repository';
import {Vehiculo} from './vehiculo.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  ClienteId: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellido: string;

  @property({
    type: 'number',
    required: true,
  })
  Telefono: number;

  @property({
    type: 'string',
    required: true,
  })
  Correo: string;

  @property({
    type: 'string',
    required: true,
  })
  CiudadResidencia: string;

  @property({
    type: 'string',
  })
  FechaNacimiento?: string;

  @property({
    type: 'string',
    required: true,
  })
  Contrasenia: string;

  @property({
    type: 'string',
    required: true,
  })
  Rol: string;

  @hasMany(() => Vehiculo)
  vehiculos: Vehiculo[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
