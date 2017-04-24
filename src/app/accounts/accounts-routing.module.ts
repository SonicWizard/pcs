import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  imports: [
	RouterModule.forChild([
		{
			path: 'accounts',
			component: AccountsComponent
		}
	])
  ],
  exports: [ RouterModule ]
})
export class AccountsRoutingModule { }
