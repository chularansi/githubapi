import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './repository.service';
import { IRepository } from './repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  errorMessage: string;
  repositories: IRepository[];
  _repoFilter: string;
  filteredRepos: IRepository[];

  get repoFilter(): string {
    return this._repoFilter;
  }
  set repoFilter(value: string) {
    this._repoFilter = value;
    //call performFilter function when repoFilter has some data
    this.filteredRepos = this.repoFilter ? this.performFilter(this.repoFilter) : this.repositories;
  }

  //filter function
  performFilter(filterBy: string): any[] {
    var filterBy = filterBy.toLocaleLowerCase();
    return this.repositories.filter((repo: any) => 
      repo.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor(private _repositoryService: RepositoryService) {
  
  }

  ngOnInit() {
    this._repositoryService.getRepositories()
      .subscribe(repos => {
                  // console.log(repos);
                  this.repositories = repos,
                  this.filteredRepos = this.repositories
                },
                  error => this.errorMessage = <any>error
      );
  }
}
