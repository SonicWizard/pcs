import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AddAccountComponent } from './add-account/add-account.component';

@NgModule({
  imports: [
    CommonModule, AccountsRoutingModule
  ],
  declarations: [AccountsComponent, AccountListComponent, AddAccountComponent]
})
export class AccountsModule { }
