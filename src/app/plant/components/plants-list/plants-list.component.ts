import { Component, OnInit } from '@angular/core';
import { PlantRequestService } from 'src/app/core/plant-request.service';
import { Plant } from 'src/app/models/plant.model';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.scss'],
})
export class PlantsListComponent implements OnInit {
  plants: Plant[] = [];
  TotalExteriorPlants = 0;
  TotalInteriorPlants = 0;

  constructor(private planService: PlantRequestService) {}

  ngOnInit(): void {
    this.planService.getPants().subscribe(
      (data) => {
        this.plants = data;
        if (data && data.length) {
          this.TotalExteriorPlants = data.filter(
            (plant) => plant.tipo === 'Exterior'
          ).length;
          this.TotalInteriorPlants = data.filter(
            (plant) => plant.tipo === 'Interior'
          ).length;
        }
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }
}
