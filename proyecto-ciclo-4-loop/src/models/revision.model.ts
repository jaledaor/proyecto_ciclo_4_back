import {Entity, model, property} from '@loopback/repository';

@model()
export class Revision extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  RevisionId: string;

  @property({
    type: 'string',
    required: true,
  })
  FechaEntrada: string;

  @property({
    type: 'string',
    required: false,
  })
  FechaSalida: string;

  @property({
    type: 'string',
    required: true,
  })
  Observaciones: string;

  @property({
    type: 'string',
    required: false,
  })
  vehiculoId?: string;

  @property({
    type: 'string',
    required: false,
  })
  repuestoId?: string;

  @property({
    type: 'string',
    required: false,
  })
  mecanicoId?: string;

  constructor(data?: Partial<Revision>) {
    super(data);
  }
}

export interface RevisionRelations {
  // describe navigational properties here
}

export type RevisionWithRelations = Revision & RevisionRelations;
