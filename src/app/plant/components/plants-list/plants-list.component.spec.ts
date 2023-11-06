import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsListComponent } from './plants-list.component';
import { Plant } from 'src/app/models/plant.model';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

const mock_plants: Plant[] = [
  {
    id: 1,
    nombre_comun: 'Lengua de vaca',
    nombre_cientifico: 'Sansevieria Trifasciata',
    tipo: 'Interior',
    altura_maxima: 140,
    clima: 'Templado, cálido',
    sustrato_siembra:
      'Tierra orgánica con buen drenaje, arena, cascarilla de arroz',
  },
  {
    id: 2,
    nombre_comun: 'Chachafruto',
    nombre_cientifico: 'Schefflera actinophylla',
    tipo: 'Exterior',
    altura_maxima: 1000,
    clima: 'Todos',
    sustrato_siembra: 'Sustrato para huerto',
  },
  {
    id: 3,
    nombre_comun: 'Espatifilo',
    nombre_cientifico: 'Spathiphyllum Wallasii',
    tipo: 'Interior',
    altura_maxima: 65,
    clima: 'Templado, cálido',
    sustrato_siembra: 'Tierra orgánica',
  },
];

describe('PlantsListComponent', () => {
  let component: PlantsListComponent;
  let fixture: ComponentFixture<PlantsListComponent>;

  // Mock PlantRequestService with a mock implementation
  const plantServiceMock = {
    getPants: () => of(mock_plants),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantsListComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(PlantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display plants in the table', () => {
    fixture.detectChanges(); // Trigger ngOnInit
    const tableRows = fixture.nativeElement.querySelectorAll('table tbody tr');
    expect(tableRows.length).toBe(component.plants.length);
  });

  it('should display the total number of interior and exterior plants', () => {
    fixture.detectChanges(); // Trigger ngOnInit
    const totalInteriorPlants = fixture.nativeElement.querySelector(
      '.total-plants p:first-child'
    ).textContent;
    const totalExteriorPlants = fixture.nativeElement.querySelector(
      '.total-plants p:last-child'
    ).textContent;
    expect(totalInteriorPlants).toContain(
      component.TotalInteriorPlants.toString()
    );
    expect(totalExteriorPlants).toContain(
      component.TotalExteriorPlants.toString()
    );
  });
});
