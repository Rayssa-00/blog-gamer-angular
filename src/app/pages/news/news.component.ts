import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private id:string | null = '0';
  newsPhotoUrl:string = '';
  newsCreditsUrl:string = '';
  newsTitle:string = '';
  newsShortContent = '';
  newsText:string = '';

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("id"))
      
  }

  

}
