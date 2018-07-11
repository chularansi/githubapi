import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRepository } from './repository';
import { RepositoryService } from './repository.service';

@Component({
  selector: 'app-repository-detail',
  templateUrl: './repository-detail.component.html',
  styleUrls: ['./repository-detail.component.css']
})
export class RepositoryDetailComponent implements OnInit {
  errorMessage: string;
  repository: IRepository;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _repositoryService: RepositoryService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');

    this._repositoryService.getRepository(id)
      .subscribe(repo => this.repository = repo,
        error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/repo']);
  }
}
