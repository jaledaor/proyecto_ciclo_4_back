import {Entity, model, property} from '@loopback/repository';

@model()
export class JefeOperaciones extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  JefeOperacionesId: string;

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


  constructor(data?: Partial<JefeOperaciones>) {
    super(data);
  }
}

export interface JefeOperacionesRelations {
  // describe navigational properties here
}

export type JefeOperacionesWithRelations = JefeOperaciones & JefeOperacionesRelations;
