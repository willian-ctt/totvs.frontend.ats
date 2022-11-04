import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { CandidatosModalsComponent } from './candidatos-modals.component';

describe('CandidatosModalsComponent', () => {
  let component: CandidatosModalsComponent;
  let fixture: ComponentFixture<CandidatosModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidatosModalsComponent],
      imports: [PoTemplatesModule, PoModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CandidatosModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
