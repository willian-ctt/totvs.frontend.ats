import { faker } from '@faker-js/faker';
import { PoTableColumn } from '@po-ui/ng-components';
import { CandidatoItem } from './crud.interfaces';

const JOBS = ['Programador','UI/UX Designer','Project Owner','Vendedor','Marketing','Gerente']


const CRUD = {
	vagas: [
		{ property: 'id', key: true, disabled: true,label:"Código" },
		{ property: 'name',label:"Nome" },
	],
	candidatos: [
		{ property: 'id', key: true, disabled: true,label:"Código" },
		{ property: 'status',label:"Status",type: 'subtitle',subtitles:[
			{ value: 'active', color: 'color-01', label: 'Ativo', content: '1' },
			{ value: 'approved', color: 'color-11', label: 'Aprovado', content: '2' },
			{ value: 'in_progress', color: 'color-08', label: 'Em progresso', content: '3' },
			{ value: 'rejected', color: 'color-07', label: 'Rejeitado', content: '4' },
		] },
		{ property: 'name',label:"Nome" },
		{ property: 'email',label:"Email" },
		{ property: 'age',label:"Idade",type:'number' },
		{ property: 'job_description',label:"Descrição da Vaga" }
	] as PoTableColumn[]
}

const CRUDDATA = {
	candidatos: Array.from({ length: 10 }).reduce((acc: any[]) => {
		acc.push({
			id: acc.length + 1,
			status: faker.helpers.arrayElement(['active','approved','rejected','in_progress']),
			name: faker.name.firstName(),
			email: faker.internet.email(),
			age: faker.random.numeric(2),
			job_description: faker.helpers.arrayElement(JOBS)
		})
		return acc;
	},[]).sort((a,b) => a.id > b.id ? -1 : 1 ) as CandidatoItem[],
	vagas: [
		{name: 'Project Owner',id: 1},
		{name: 'Programador',id: 2},
		{name: 'UI/UX Designer',id: 3},
		{name: 'Vendedor',id: 4},
		{name: 'Marketing',id: 5},
		{name: 'Gerente',id: 6},
	]
}

export { CRUD, CRUDDATA, JOBS };

