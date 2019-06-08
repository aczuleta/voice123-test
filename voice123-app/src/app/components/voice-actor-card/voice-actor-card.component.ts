import { Component, OnInit, Input } from '@angular/core';
import { ActorsService } from '../../services/actors.service';

@Component({
  selector: 'voice-actor-card',
  templateUrl: './voice-actor-card.component.html',
  styleUrls: ['./voice-actor-card.component.css']
})
export class VoiceActorCardComponent implements OnInit {

  @Input() username:string;
  @Input() profilePic:string;
  @Input() summary:string;
  @Input() voiceSample: string;
  @Input() profileLink:string;
  keyword:string;

  constructor(private actorService:ActorsService) { }

  ngOnInit() {
    this.updateKeyword();
  }

  updateKeyword(){
    this.actorService.keywordSubject.subscribe( word => {
      this.keyword = word;
    })
  }
}
