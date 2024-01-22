import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListDbzComponent } from './components/list/list.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  exports: [
    MainPageComponent,
  ],
  declarations: [
    MainPageComponent,
    ListDbzComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
