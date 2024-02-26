import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() id:string = '';
  @Input() imageUrl:string = '';
  @Input() creditsUrl:string = '';
  @Input() shortContent:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
