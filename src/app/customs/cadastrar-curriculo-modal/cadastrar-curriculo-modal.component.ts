import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';

@Component({
	selector: 'app-cadastrar-curriculo-modal',
	templateUrl: './cadastrar-curriculo-modal.component.html',
	styleUrls: ['./cadastrar-curriculo-modal.component.scss']
})
export class CadastrarCurriculoModalComponent implements OnInit {

	@ViewChild('modal') modal: PoModalComponent;

	@Input() isOpen: boolean = false;
	@Output() onClose = new EventEmitter()

	public fileSuccess = false;
	public isCurrentlyOpen = false;

	constructor(private notificationService: PoNotificationService) { }

	ngOnInit(): void {
		// this.modalCadastrarVaga.(() => {
		// 	this.modalCadastrarVaga.open()
		// 	this.onClose.emit();
		// })
	}

	ngOnChanges() {
		if (this.modal !== undefined) {
			if (this.isOpen === true && this.isCurrentlyOpen === false) {
				this.isCurrentlyOpen = true;
				this.fileSuccess = false;
				this.modal.open()
			} else if (this.isCurrentlyOpen === true) {
				this.isCurrentlyOpen = false;
				this.modal.close()
			}
		}
	}	

	public onSuccess() {
		this.fileSuccess = true;
	}


	public getModalConfirmAction(): PoModalAction {
		return {
			disabled: this.fileSuccess === false,
			action: () => {
				if (this.fileSuccess === true) {
					this.onClose.emit(false);
					this.notificationService.success("Curriculo adicionado ao candidato com sucesso!")
				} else {
					this.notificationService.error("Selecione um arquivo!")
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
