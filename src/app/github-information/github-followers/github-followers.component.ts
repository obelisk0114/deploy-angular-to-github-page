import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubFollowersService } from '../github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  userLogin: string = 'mosh-hamedani';
  followers: Observable<Object[]>;

  constructor(private githubFollowersService: GithubFollowersService) { }

  ngOnInit() {
    this.getFollowers();
  }

  generateLink(): string {
    return 'https://api.github.com/users/' + this.userLogin + '/followers';
  }

  setUserLogin(loginName: string): void {
    this.userLogin = loginName;
  }

  getFollowers(loginName?: string): void {
    if (loginName) {
      this.setUserLogin(loginName);
    }
    
    let link = this.generateLink();
    this.followers = this.githubFollowersService.getFollowers(link);
  }

}
