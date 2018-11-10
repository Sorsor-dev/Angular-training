import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; 

@Injectable()

export class PostsService {

	post1: Post  = new Post("Qu'est-ce que le Lorem Ipsum?", "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,...", 0,0);
	post2: Post  = new Post("Pourquoi l'utiliser?", "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur,...", 2, 0);
	post3: Post  = new Post("Où puis-je m'en procurer?","Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d\'embarrassant caché dans le texte. ", 0, 5);		
	
	posts: Post[] = [this.post1, this.post2, this.post3];
	
	
	postsSubject = new Subject<Post[]>();

	emitPosts() {
		this.postsSubject.next(this.posts);
	}

	createNewPost(newPost: Post) {
		this.posts.push(newPost);
		this.emitPosts();

	}

	removePost(post: Post) {
		const postIndexToRemove = this.posts.findIndex(
			(postEL) => {
				if(postEL === post) {
					return true;
				}
			}
		);
		this.posts.splice(postIndexToRemove, 1);
		this.emitPosts();
	}

	addLoveIts(post: Post) {
		if(post.loveIts) {
			post.loveIts = post.loveIts + 1;

		} else {
			post.loveIts = 1;
		}		
		this.emitPosts();
		return post.loveIts
	}

	addDontLoveIts(post: Post) {
		if(post.dontLoveIts) {
			post.dontLoveIts = post.dontLoveIts + 1;

		} else {
			post.dontLoveIts = 1;
		}		
		this.emitPosts();
		return post.dontLoveIts
	}


}