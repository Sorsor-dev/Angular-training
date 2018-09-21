import { Component,OnInit } from '@angular/core';
import {Post} from './shared/models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Blog project';
	posts : Post[] = [];
 
	litteralsPosts = [
		{
			title: "Qu'est-ce que le Lorem Ipsum?",
			content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,...",
			loveIts: 0
		},
		{
			title: "D'où vient-il?",
			content: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur,...",
			loveIts: 3
		},
		{
			title: "Pourquoi l'utiliser?",
			content: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' ",
			loveIts: -5
		},

		{
			title: "Où puis-je m'en procurer?",
			content: "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d\'embarrassant caché dans le texte. ",
			loveIts: 25
		}
	];

	ngOnInit() {
		this.litteralsPosts.forEach((post)=>
			this.posts.push(new Post(post.title, post.content, post.loveIts))
		)
	};
}


