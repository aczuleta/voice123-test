import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
        MatFormFieldModule, MatInputModule, MatIconModule, 
        MatProgressSpinnerModule, MatButtonModule, MatCardModule,
        MatTableModule,  MatSelectModule, MatCheckboxModule, MatPaginatorModule
  ],
  exports: [
        MatFormFieldModule, MatInputModule, MatIconModule, 
        MatProgressSpinnerModule, MatButtonModule,  MatCardModule,
         MatTableModule, MatSelectModule, MatCheckboxModule, MatPaginatorModule
  ]
})
export class SharedModule { }