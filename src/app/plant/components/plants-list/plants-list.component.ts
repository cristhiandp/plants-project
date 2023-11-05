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

  constructor(private planService: PlantRequestService) {}

  ngOnInit(): void {
    this.planService.getPants().subscribe(
      (data) => {
        this.plants = data;
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }
}
