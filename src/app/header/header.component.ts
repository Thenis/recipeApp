import { AuthService } from '../auth/auth.service';
import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private dataStorageService: DataStorageService, public authService: AuthService) {}

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes();
    }

    onLogout() {
        this.authService.logout();
    }
}