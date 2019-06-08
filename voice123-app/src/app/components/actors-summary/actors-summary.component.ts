import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {VoiceActorCardComponent} from '../voice-actor-card/voice-actor-card.component';
import { ActorsService } from '../../services/actors.service';
import { Observable, fromEvent, forkJoin } from 'rxjs';
import { Actor } from '../../models/actor';
import { map } from 'rxjs/internal/operators/map';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { concat } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'actors-summary',
  templateUrl: './actors-summary.component.html',
  styleUrls: ['./actors-summary.component.scss']
})
export class ActorsSummaryComponent implements OnInit, AfterViewInit {
  @ViewChild("searchBox", null) input: ElementRef;
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private actorService:ActorsService) { }


  actors$:Observable<Actor[]>;
  searchActors$:Observable<Actor[]>;
  keyword:string = "";
  loading:boolean = false;

  length:number;
  pageSize:number;
  currentPage:number;
  pageEvent: PageEvent = new PageEvent();
  
  ngOnInit() {
    this.updatePaginator();
  }


  ngAfterViewInit(){
    this.searchActors$ = fromEvent<any>(this.input.nativeElement, 'keyup')
    .pipe(
        map(event => event.target.value as string),
        debounceTime(400),
        distinctUntilChanged(),
        tap( word => this.actorService.updateKeyword(word)),
        switchMap(search => {
            this.loading = false;
            this.updatePaginator();
            return this.actorService.search(search);
        })
    );

    this.actors$ = concat(this.actorService.search("", 1), this.searchActors$);
  }

  search(keyword){
    this.actors$ = concat(this.actorService.search(keyword), this.searchActors$);
  }

  updatePaginator(){
    this.actorService.paginatorSubject
    .subscribe( paginator => {
      if(paginator){
        this.length = paginator.size * paginator.window;
        this.pageSize = paginator.window;
        this.currentPage = paginator.currentPage-1;
      }
    })
  }


  changePage(keyword, event){
    this.pageEvent = event;
    let page = this.pageEvent.pageIndex + 1;
    this.currentPage = this.pageEvent.pageIndex;
    this.actors$ = concat(this.actorService.search(keyword, page), this.searchActors$);
    this.updatePaginator();
  }
}
