import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryComponent } from './story-list/story/story.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxMatFileInputModule} from "@angular-material-components/file-input";
import { StoryDetailComponent } from './story-list/story-detail/story-detail.component';

@NgModule({
  declarations: [HomeComponent, StoryListComponent, StoryComponent, StoryDetailComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    SharedModule,
    MatToolbarModule,
    FontAwesomeModule,
    NgxMatFileInputModule,
  ],
})
export class HomeModule {}
