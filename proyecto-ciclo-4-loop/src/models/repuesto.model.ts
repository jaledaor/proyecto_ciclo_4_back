import {Entity, model, property, hasMany} from '@loopback/repository';
import {Revision} from './revision.model';

@model()
export class Repuesto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  RepuestoId: string;

  @property({
    type: 'string',
    required: true,
  })
  Tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  Cantidad: number;

  @hasMany(() => Revision)
  revisions_repuesto: Revision[];

  constructor(data?: Partial<Repuesto>) {
    super(data);
  }
}

export interface RepuestoRelations {
  // describe navigational properties here
}

export type RepuestoWithRelations = Repuesto & RepuestoRelations;
