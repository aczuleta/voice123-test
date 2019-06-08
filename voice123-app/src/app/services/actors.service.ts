// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Actor } from '../models/actor';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Paginator } from '../models/paginator';


const baseSample:string = "https://voice123.com/mp3/";
const baseProfile:string = "https://voice123.com/";

@Injectable({
    providedIn: 'root',
})
export class ActorsService {
    private env = environment;
    constructor(private http: HttpClient) { }
    
    public paginatorSubject: BehaviorSubject<Paginator> = new BehaviorSubject<Paginator>(null);

    public keywordSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");

    public search(keyword:string="", page:number = 1):Observable<Actor[]> {
        return this.http.get(this.env.apiVoice + `&keywords=${keyword}?page=${page}`, {observe: 'response'})
               .pipe(
                    map( (x:any) => {
                        let headers = x.headers;
                        let currentPage = headers.get('x-list-current-page'),
                            totalPages = headers.get('x-list-total-pages'),
                            pageSize = headers.get('x-list-page-size');
                        this.emitPaginator(totalPages, currentPage, pageSize);

                       let providers = x.body.providers;
                       let actors = [];
                       providers.forEach( actor => {
                            const newActor = 
                            new Actor(actor.user.username, actor.user.picture_small,
                            actor.summary, baseSample + actor.relevant_sample.file,
                            baseProfile + actor.user.username);
                            actors.push(newActor);
                        });
                       return actors;
                   })
               );
    }



    public updateKeyword(word){
        this.keywordSubject.next(word);
    }

    private emitPaginator(total, current, window){
        const np = new Paginator(total, current, window);
        this.paginatorSubject.next(np);
    }


}