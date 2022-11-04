import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	private routeInfo = {
		title: 'Dashboard'
	}

	private routeSubscription: Subscription;
	constructor(private router: Router) {

	}

	ngOnInit(): void {
		this.routeSubscription = this.router.events.subscribe(event => {
			if (event instanceof RoutesRecognized) {
				let route = event.state.root.firstChild;
				this.routeInfo.title = route?.data['title'] ?? 'Dashboard'
			}
		})
	}

	ngOnDestroy() {
		if (this.routeSubscription) {
			this.routeSubscription.unsubscribe();
		}
	}

	readonly menus: Array<PoMenuItem> = [
		{ label: "Dashboard", link: '/' },
		{
			label: 'Candidatos',
			subItems: [
				{ label: "Pesquisar", link: '/candidatos/list' },
				{ label: "Cadastrar", link: '/candidatos/create' }
			]
		},
		{
			label: 'Vagas', subItems: [
				{ label: "Pesquisar", link: '/vagas/list' },
				{ label: "Cadastrar", link: '/vagas/create' }
			]
		}
	];

	public getCurrentPageTitle() {
		return this.routeInfo.title;
	}
}
