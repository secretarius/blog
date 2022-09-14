import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { SearchComponent } from './search/search.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const exportModules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MaterialModule,
];

@NgModule({
  declarations: [
    ToolBarComponent,
    SearchComponent,
    FooterComponent,
    ToolBarComponent,
  ],
  exports: [
    ...exportModules,
    SearchComponent,
    ToolBarComponent,
    FooterComponent,
    ToolBarComponent,
  ],
  imports: [
    ...exportModules,
    RouterModule,
    MatToolbarModule,
    FontAwesomeModule,
  ],
  providers: [],
})
export class SharedModule {}
