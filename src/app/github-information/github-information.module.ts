import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GithubFollowersComponent } from './github-followers/github-followers.component';



@NgModule({
  declarations: [GithubFollowersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'github/followers', component: GithubFollowersComponent }
    ])
  ]
})
export class GithubInformationModule { }
