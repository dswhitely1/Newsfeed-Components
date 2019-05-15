// Because classes are not hoisted you will need to start your code at the bottom of the page.
// Look for the comment "START HERE"

class Article {
	constructor(domElement) {
		// assign this.domElement to the passed in domElement
		this.domElement = domElement;
		// create a reference to the ".expandButton" class.
		this.expandButton = this.domElement.querySelector('.expandButton');
		// Using your expandButton reference, update the text on your expandButton to say "expand"
		this.expandButton.textContent = 'Click to Expand';
		// Set a click handler on the expandButton reference, calling the expandArticle method.
		this.expandButton.addEventListener('click', () => this.expandArticle());
	}

	expandArticle() {
		// Using our reference to the domElement, toggle a class to expand or hide the article.
		this.domElement.style.transition = 'height, 1s';
		this.domElement.classList.toggle('article-open');
		this.expandButton.textContent === 'Click to Expand'
			? (this.expandButton.textContent = 'Click to Close')
			: (this.expandButton.textContent = 'Click to Expand');
	}
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over 
  the articles NodeList and create a new instance of Article by passing in each article as a parameter 
  to the Article class.
*/

let articles = document.querySelectorAll('.article');

articles.forEach(article => {
	return new Article(article);
});

const formTitle = document.querySelector('input');
const formContent = document.querySelector('textarea');

[ formTitle, formContent ].forEach(element =>
	element.addEventListener('change', e => {
		// console.log(e.target);
	}),
);

const submitButton = document.querySelector('form button');
submitButton.addEventListener('click', e => {
	const options = { year: 'numeric', month: 'long', day: 'numeric' };
	let heading = formTitle.value;
	let content = formContent.value;
	const pArray = content.split('\n').filter(paragraph => paragraph !== '');
	const newArticle = document.createElement('div');
	newArticle.setAttribute('class', 'article');
	const newH2 = document.createElement('h2');
	newH2.textContent = heading;
	newArticle.appendChild(newH2);
	const newDate = document.createElement('p');
	const event = new Date();
	newDate.textContent = event.toLocaleDateString('es-ES', options);
	newDate.setAttribute('class', 'date');
	newArticle.appendChild(newDate);
	let newP;
	pArray.forEach(paragraph => {
		newP = document.createElement('p');
		newP.textContent = paragraph;
		newArticle.appendChild(newP);
	});
	const newButton = document.createElement('span');
	newButton.setAttribute('class', 'expandButton');
	newArticle.appendChild(newButton);
	const articleChildren = document.querySelector('.articles');
	articleChildren.appendChild(newArticle);
	console.log(newArticle);
	new Article(newArticle);
	formTitle.value = '';
	formContent.value = '';
});
