import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from './services';
import {ShareModule} from '../../../share/share.module';


@NgModule({
    declarations: [AllUsersComponent, UserComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        HttpClientModule,
        ShareModule
    ],
    exports: [
        AllUsersComponent
    ],
    providers: [UserService]
})
export class UserModule { }
