import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Video } from '../video';

 // REF:\zVIDEO\.17\(min.2.30)
@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  outputs: ['Selectvideo']
  // editor não reconhece, mas funciona... usei @Input() abaixo na class
  // inputs: ['videos']
})
export class VideoListComponent implements OnInit {
 // array-videos da BD passados via video-center.component
  // @Input() videos: String = ''; // orig: funciona com String!!
  @Input() videos: Array <Video>;

  // REF:\zVIDEO\.18\(min.7.30) EXPLAIN-ALL!!
  // "outputs: ['Selectvideo']": ("Selectvideo")=("public Selectvideo")
  public Selectvideo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  // "onSelect(vid: Video)" invoca evento que vai ser capturado em video-center.component
  // necessita outputs: ['Selectvideo']
  onSelect(vid: Video){
    this.Selectvideo.emit(vid);

    // Teste - para ver na consola do browser
    // console.log(JSON.stringify(vid));
  }

}
