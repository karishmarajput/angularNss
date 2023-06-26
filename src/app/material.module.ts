import {NgModule} from '@angular/core';
import {
  MatSlideToggleModule
} from '@angular/material/slide-toggle';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CarouselModule } from '@coreui/angular';

@NgModule({
  imports: [MatProgressSpinnerModule,CarouselModule,MatSlideToggleModule,MatCardModule,MatInputModule,MatFormFieldModule,MatIconModule,MatButtonModule,MatTableModule,MatPaginatorModule,MatSelectModule,MatOptionModule,MatCheckboxModule],
  exports: [MatProgressSpinnerModule,CarouselModule,MatSlideToggleModule,MatCardModule,MatInputModule,MatFormFieldModule,MatIconModule,MatButtonModule,MatTableModule,MatPaginatorModule,MatSelectModule,MatOptionModule,MatCheckboxModule]
})
export class MaterialModule {}