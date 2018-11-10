import { Component,Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
	
	@Input() postTitle : string;
	@Input() postContent : string;
	@Input() postLoveIts : number;
	@Input() postDontLoveIts : number;
	@Input() postCreated_at : Date;
	@Input() index : number;

	constructor(private postsService: PostsService) { }

	ngOnInit() {}

	onLoveIts(){

		this.postsService.addLoveIts(this.postsService.posts[this.index]);
		
	}

	onDontLoveIts(){

		this.postsService.addDontLoveIts(this.postsService.posts[this.index]);
		console.log(this.postsService.posts);
	}

	onRemove(index: number) {
		console.log('this.postsService.postsSubject', this.postsService.postsSubject);
		this.postsService.removePost(this.postsService.posts[index]);
	}

}