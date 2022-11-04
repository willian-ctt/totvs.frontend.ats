import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faker } from "@faker-js/faker";
import { PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import * as _ from 'lodash';

@Component({
	selector: 'app-candidatos-modals',
	templateUrl: './candidatos-modals.component.html',
	styleUrls: ['./candidatos-modals.component.scss'],

})
export class CandidatosModalsComponent implements OnInit {

	@ViewChild('modalCadastrarVaga') modalCadastrarVaga: PoModalComponent;

	@Input() selectedItem: any = null;
	@Input() isOpen: boolean = false;
	@Output() onClose = new EventEmitter()

	public data = [] as any[];
	public loading = false;
	public isCurrentlyOpen = false;

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
				this.onModalOpened()
			} else if (this.isCurrentlyOpen === true) {
				this.isCurrentlyOpen = false;
				this.modalCadastrarVaga.close()
			}
		}
	}

	public onModalOpened() {
		this.loading = true;
		this.data = [];
		setTimeout(() => {
			this.loading = false;
			this.data = Array.from({ length: _.random(1, 4) }).map((item, index) => {
				return {
					id: index + 1,
					status: faker.helpers.arrayElement(['active', 'approved', 'rejected', 'in_progress']),
					name: faker.name.firstName(),
					email: faker.internet.email(),
					age: faker.random.numeric(2)
				}
			})
		}, 1000)
	}


	public getModalConfirmAction(): PoModalAction {
		return {
			action: () => {
				this.onClose.emit(false);
			},
			label: 'Fechar'
		}
	}



}
