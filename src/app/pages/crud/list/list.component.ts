import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PoNotificationService, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import * as _ from "lodash";
import { CrudService } from 'src/app/services/crud-service.service';
import { CandidatoItem } from 'src/app/services/crud.interfaces';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	private customMetadata = {
		modalOpen: null as null | string
	}

	private routeInfo = {
		page: '',
		title: ''
	}

	private selectedItem: CandidatoItem | null = null;

	private data = [] as any[];
	private columns = [] as PoTableColumn[];

	private loading = true;

	constructor(private router: Router, private activatedRoute: ActivatedRoute, private crudService: CrudService, private notificationService: PoNotificationService) {
	}

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((data) => this.onPageStarted(data))
	}

	
	public setRouteInfo(value: {page: string,title: string}) {
		this.routeInfo = value;
	}

	private onPageStarted(data: Params) {
		const { crud } = data;
		this.routeInfo.page = crud;
		this.routeInfo.title = _.upperFirst(crud)
		this.columns = [];
		this.data = [];
		this.loading = true;
		this.selectedItem = null;
		this.crudService.getColumnsMetadata(crud).then((res) => {
			this.columns = res;
			this.crudService.getData(crud).then((res) => {
				this.data = res;
			}).finally(() => {
				this.loading = false;
			})
		}).catch(() => {
			this.loading = false;
		})
	}

	public onSelectItem(item: CandidatoItem | null) {
		this.selectedItem = item;
	}

	public getActions(): PoTableAction[] {
		switch (this.routeInfo.page) {
			case 'candidatos':
				return [
					{ label: "Cadastrar-se à vaga", action: () => this.customMetadata.modalOpen = 'cadastrar-vaga' },
					{ label: "Cadastrar currículo", action: () => this.customMetadata.modalOpen = 'cadastrar-curriculo' },
				]
			case 'vagas':
				return [
					{
						label: "Candidatos", action: (row: any) => {
							let rowIndex = this.data.findIndex((item) => item == row)
							this.data = this.data.map((item, index) => {
								item.$selected = false;
								if (index == rowIndex) {
									item.$selected = true;
								}
								return item;
							})
							this.customMetadata.modalOpen = 'visualizar-candidatos';
							this.selectedItem = row;
						}
					},
				]
		}
		return []
	}

	public onClickAddNew() {
		this.router.navigate(['/', this.routeInfo.page, 'create'])
	}

	public onClickEdit() {
		if (this.selectedItem !== null && this.selectedItem.id) {

			this.router.navigate(['/', this.routeInfo.page, this.selectedItem.id])
		}
	}

	public onClickDelete() {
		let rowIndex = this.data.findIndex((item) => item.id == this.selectedItem?.id);
		this.data.splice(rowIndex, 1);
		this.selectedItem = null;
		this.notificationService.success("Registro excluido com sucesso!")
	}

	public onModalClose() {
		this.customMetadata.modalOpen = null;
	}

	public getModalOpen() {
		return this.customMetadata.modalOpen
	}

	public getSelectedItem() {
		return this.selectedItem;
	}

	public hasItemSelected() {
		return this.selectedItem != null;
	}

	public isLoading() {
		return this.loading;
	}

	public getPageCrud() {
		return this.routeInfo.page;
	}

	public getPageTitle() {
		return this.routeInfo.title
	}

	public getItems() {
		return this.data;
	}

	public getColumns() {
		return this.columns;
	}
}
