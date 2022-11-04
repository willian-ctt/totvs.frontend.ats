import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import * as _ from 'lodash';
import { CRUD, CRUDDATA } from './crud.environment';

@Injectable({
	providedIn: 'root'
})
export class CrudService {

	constructor() { }


	public getById(crudName: string,id: string | number): Promise<any> {
		return new Promise((resolve, reject) => {
			if (CRUDDATA.hasOwnProperty(crudName)) {
				setTimeout(() => {
					let selectedData = _.sample((CRUDDATA as any)[crudName]);
					resolve(selectedData)
				}, 1000)
			} else {
				reject("Crud not found.")
			}
		})
	}


	public getColumnsMetadata(crudName: string): Promise<PoTableColumn[]> {
		return new Promise((resolve, reject) => {
			if (CRUD.hasOwnProperty(crudName)) {
				setTimeout(() => {
					resolve((CRUD as any)[crudName])
				}, 1000)
			} else {
				reject("Crud not found.")
			}
		})
	}

	public getData(crudName: string): Promise<any[]> {
		return new Promise((resolve, reject) => {
			if (CRUDDATA.hasOwnProperty(crudName)) {
				setTimeout(() => {
					resolve((CRUDDATA as any)[crudName])
				}, 1000)
			} else {
				reject("Crud not found.")
			}
		})
	}
}
