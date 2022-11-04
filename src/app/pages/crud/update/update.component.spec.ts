import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { UpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateComponent ],
      imports: [RouterTestingModule,PoTemplatesModule,PoModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept data', () => {
    component.ngOnInit();
    component.data = {id: 1,name:'João'}
    expect(component).toBeTruthy();
  });

  it('should accept route info', () => {
    component.ngOnInit();
    component.setRouteInfo({page:'vagas',title:'Pesquisar'});
    expect(component).toBeTruthy();
  });
});
