import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PoDynamicFormField, PoNotificationService } from '@po-ui/ng-components';
import * as _ from 'lodash';
import { CrudService } from 'src/app/services/crud-service.service';

@Component({
	selector: 'app-update',
	templateUrl: './update.component.html',
	styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

	private routeInfo = {
		page: '',
		title: ''
	}
	private loading = true;
	public data = {} as {[k:string]: any};
	public fields = [] as PoDynamicFormField[];
	public method = 'update' as 'create' | 'update';

	constructor(private activatedRoute: ActivatedRoute, private crudService: CrudService, private router: Router, private notificationService: PoNotificationService) { }

	ngOnInit(): void {
		this.activatedRoute.params.subscribe((data) => this.onPageStarted(data))
	}

	public setRouteInfo(value: {page: string,title: string}) {
		this.routeInfo = value;
	}

	public onPageStarted(data: Params) {
		const { crud, id } = data;
		if (id === 'create') {
			this.method = 'create'
		}
		this.routeInfo.page = crud;
		this.routeInfo.title = _.upperFirst(crud)
		this.data = {};
		this.fields = [];
		this.loading = true;
		this.crudService.getColumnsMetadata(crud).then((res) => {
			let data = res.map((item: any) => {
				if (item.key !== true) {
					return {
						property: item.property?.toString(),
						label: item.label,
						columns: 6,
						type: item.type,
						options: item.subtitles ?? undefined
					} as PoDynamicFormField
				}
				return null;
			}).filter((item) => item) as PoDynamicFormField[]
			this.fields = data != null ? data : [];
			if (this.method == 'update') {
				this.crudService.getById(crud, id).then((res) => {
					this.data = res;
				}).finally(() => {
					this.loading = false;
				})
			} else {
				this.loading = false;
			}
		}).catch(() => {
			this.loading = false;
		})
	}

	public isValid() {
		for(var i in this.fields) {
			let field = this.fields[i];
			let value = this.data[field.property]
			if(value === undefined || value.length <= 0) {
				this.notificationService.error("Campo "+field.label+' é obrigatório!');
				return false;
			}
		}
		return true;
	}

	public isLoading() {
		return this.loading;
	}
	public onSave() {
		if (this.isValid()) {
			this.notificationService.success("Registro atualizado com sucesso!")
			this.loading = true;
			setTimeout(() => {
				this.router.navigate(['/', this.routeInfo.page, 'list'])
			}, 1000)
		}
	}
	public onSaveNew() {
		if (this.isValid()) {
			this.notificationService.success("Registro criado com sucesso!")
			this.loading = true;
			setTimeout(() => {
				this.router.navigate(['/', this.routeInfo.page, 'list'])
			}, 1000)
		}
	}
	public onCancel() { }

}
