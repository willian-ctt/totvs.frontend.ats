import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PoDynamicFormFieldChanged, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import { JOBS } from 'src/app/services/crud.environment';

@Component({
	selector: 'app-cadastrar-vaga-modal',
	templateUrl: './cadastrar-vaga-modal.component.html',
	styleUrls: ['./cadastrar-vaga-modal.component.scss']
})
export class CadastrarVagaModalComponent implements OnInit {

	@ViewChild('modalCadastrarVaga') modalCadastrarVaga: PoModalComponent;

	@Input() isOpen: boolean = false;
	@Output() onClose = new EventEmitter()

	public isCurrentlyOpen = false;
	public formValues = {
		vaga: null
	};
	public validateFields = []
	public fields = [
		{
			property: 'vaga',
			gridColumns: 12,
			options: JOBS.map((item) => {
				return { value: item }
			}),
			fieldLabel: 'value',
			fieldValue: 'value'
		}
	]

	constructor(private notificationService: PoNotificationService) { }

	ngOnInit(): void {
		// this.modalCadastrarVaga.(() => {
		// 	this.modalCadastrarVaga.open()
		// 	this.onClose.emit();
		// })
	}

	ngOnChanges() {
		if (this.modalCadastrarVaga !== undefined) {
			if (this.isOpen === true && this.isCurrentlyOpen === false) {
				this.isCurrentlyOpen = true;
				this.modalCadastrarVaga.open()
			} else if (this.isCurrentlyOpen === true) {
				this.isCurrentlyOpen = false;
				this.modalCadastrarVaga.close()
			}
		}
	}

	public onChangeFields(changedValue: PoDynamicFormFieldChanged) {
		return {}
	}

	public getVagas() {
		return JOBS.map((item) => {
			return { value: item }
		})
	}

	public getModalConfirmAction(): PoModalAction {
		return {
			action: () => {
				if (this.formValues.vaga != null) {
					this.onClose.emit(false);
					this.notificationService.success("Candidato cadastrado na vaga com sucesso!")
				} else {
					this.notificationService.error("Selecione uma vaga!")
				}
			},
			label: 'Confirmar'
		}
	}

	public getModalCancelAction(): PoModalAction {
		return {
			action: () => {
				this.onClose.emit(false);
			},
			label: 'Cancelar'
		}
	}
}
