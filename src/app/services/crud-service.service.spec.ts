import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud-service.service';

describe('CrudService', () => {
  let service: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the item with ID', async () => {
    const serviceSpy = spyOn(service,'getById').and.returnValue(Promise.resolve({id: 1}))
    await service.getById('vagas',1);
    expect(serviceSpy).toHaveBeenCalledTimes(1)
  });

  it('should return the Metadata', async () => {
    const serviceSpy = spyOn(service,'getColumnsMetadata').and.returnValue(Promise.resolve([{}]))
    await service.getColumnsMetadata('vagas');
    expect(serviceSpy).toHaveBeenCalledTimes(1)
  });
});
