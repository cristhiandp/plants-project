import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsListComponent } from './components/plants-list/plants-list.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [PlantsListComponent],
  imports: [CommonModule],
  exports: [PlantsListComponent],
})
export class PlantModule {}
