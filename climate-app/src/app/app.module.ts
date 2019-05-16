import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatExpansionModule, MatChipsModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSortModule } from '@angular/material/sort';
import { ClimatePageComponent } from './climate-page/climate-page.component';

const appRoutes: Routes = [
    { path: "", component: ClimatePageComponent},
    { path: "home", redirectTo: "/", pathMatch: "full" },
    { path: "climate", redirectTo: "/", pathMatch: "full" },
];

@NgModule({
    declarations: [
        AppComponent,
        ClimatePageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatChipsModule,
        MatSnackBarModule,
        MatCardModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatBadgeModule,
        MatSortModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
