import {NgModule} from '@angular/core';
import {
  MatSlideToggleModule
} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  imports: [MatSlideToggleModule,MatCardModule,MatInputModule,MatFormFieldModule,MatIconModule,MatButtonModule,MatTableModule],
  exports: [MatSlideToggleModule,MatCardModule,MatInputModule,MatFormFieldModule,MatIconModule,MatButtonModule,MatTableModule]
})
export class MaterialModule {}