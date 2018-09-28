import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
	
	@Input() postTitle : string;
	@Input() postContent : string;
	@Input() postLoveIts : number;
	@Input() postCreated_at : Date;

	constructor() { }

	ngOnInit() {}

	onLoveIt(){
		this.postLoveIts = this.postLoveIts+1
		return this.postLoveIts
	}

	onDontLoveIt(){
		this.postLoveIts = this.postLoveIts-1
		return this.postLoveIts
	}

}