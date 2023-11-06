import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsListComponent } from './components/plants-list/plants-list.component';

@NgModule({
  declarations: [PlantsListComponent],
  imports: [CommonModule],
  exports: [PlantsListComponent],
})
export class PlantModule {}
