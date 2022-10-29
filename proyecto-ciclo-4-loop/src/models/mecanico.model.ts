import {Entity, model, property, hasMany} from '@loopback/repository';
import {Revision} from './revision.model';

@model()
export class Mecanico extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  MecanicoId: string;

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
  Direccion: string;

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

  @property({
    type: 'string',
    required: true,
  })
  NivelEstudio: string;

  @hasMany(() => Revision)
  revisions_mecanico: Revision[];

  constructor(data?: Partial<Mecanico>) {
    super(data);
  }
}

export interface MecanicoRelations {
  // describe navigational properties here
}

export type MecanicoWithRelations = Mecanico & MecanicoRelations;
