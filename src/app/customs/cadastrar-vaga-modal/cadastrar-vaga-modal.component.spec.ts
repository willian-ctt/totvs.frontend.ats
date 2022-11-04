import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { CadastrarVagaModalComponent } from './cadastrar-vaga-modal.component';

describe('CadastrarVagaModalComponent', () => {
  let component: CadastrarVagaModalComponent;
  let fixture: ComponentFixture<CadastrarVagaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarVagaModalComponent ],
      imports: [PoTemplatesModule,PoModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarVagaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
