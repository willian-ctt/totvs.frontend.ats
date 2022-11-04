import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { CadastrarCurriculoModalComponent } from './cadastrar-curriculo-modal.component';

describe('CadastrarCurriculoModalComponent', () => {
  let component: CadastrarCurriculoModalComponent;
  let fixture: ComponentFixture<CadastrarCurriculoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCurriculoModalComponent ],
      imports: [PoTemplatesModule,PoModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarCurriculoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
