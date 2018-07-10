import { Component, OnInit } from '@angular/core';
import { IRepository } from './repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repositories: IRepository[] = [
    {
      "id": 364,
      "name": "acts_as_geocodable",
      "description": "Simple geocoding for Active Record models",
      "html_url": "https://github.com/collectiveidea/acts_as_geocodable",
      "clone_url": "https://github.com/collectiveidea/acts_as_geocodable.git",
      "language": "Ruby",
    }
  ]

  _repoFilter: string;
  filteredRepos: IRepository[];

  get repoFilter(): string {
    return this._repoFilter;
  }
  set repoFilter(value: string) {
    this._repoFilter = value;
    this.filteredRepos = this.repoFilter ? this.performFilter(this.repoFilter) : this.repositories;
  }

  performFilter(filterBy: string): IRepository[] {
    var filterBy = filterBy.toLocaleLowerCase();
    return this.repositories.filter((repo: IRepository) => 
      repo.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor() {
    this.filteredRepos = this.repositories;
  }

  ngOnInit() {
  }

}
