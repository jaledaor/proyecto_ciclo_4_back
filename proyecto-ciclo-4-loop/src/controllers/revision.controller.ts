import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Revision} from '../models';
import {RevisionRepository} from '../repositories';

export class RevisionController {
  constructor(
    @repository(RevisionRepository)
    public revisionRepository : RevisionRepository,
  ) {}
  @post('/revisions')
  @response(200, {
    description: 'Revision model instance',
    content: {'application/json': {schema: getModelSchemaRef(Revision)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Revision, {
            title: 'NewRevision',
            
          }),
        },
      },
    })
    revision: Revision,
  ): Promise<Revision> {
    return this.revisionRepository.create(revision);
  }

  @get('/revisions/count')
  @response(200, {
    description: 'Revision model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Revision) where?: Where<Revision>,
  ): Promise<Count> {
    return this.revisionRepository.count(where);
  }

  @get('/revisions')
  @response(200, {
    description: 'Array of Revision model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Revision, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Revision) filter?: Filter<Revision>,
  ): Promise<Revision[]> {
    return this.revisionRepository.find(filter);
  }

  @patch('/revisions')
  @response(200, {
    description: 'Revision PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Revision, {partial: true}),
        },
      },
    })
    revision: Revision,
    @param.where(Revision) where?: Where<Revision>,
  ): Promise<Count> {
    return this.revisionRepository.updateAll(revision, where);
  }

  @get('/revisions/{id}')
  @response(200, {
    description: 'Revision model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Revision, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Revision, {exclude: 'where'}) filter?: FilterExcludingWhere<Revision>
  ): Promise<Revision> {
    return this.revisionRepository.findById(id, filter);
  }

  @patch('/revisions/{id}')
  @response(204, {
    description: 'Revision PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Revision, {partial: true}),
        },
      },
    })
    revision: Revision,
  ): Promise<void> {
    await this.revisionRepository.updateById(id, revision);
  }

  @put('/revisions/{id}')
  @response(204, {
    description: 'Revision PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() revision: Revision,
  ): Promise<void> {
    await this.revisionRepository.replaceById(id, revision);
  }

  @del('/revisions/{id}')
  @response(204, {
    description: 'Revision DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.revisionRepository.deleteById(id);
  }
}
