const toggleMenu = () => {
	// Toggle the "menu--open" class on your menu refence.
	menu.classList.toggle('menu--open');
	menu.classList.contains('menu--open') ? TweenMax.to('.menu--open', 2, { x: 350 }) : TweenMax.to('.menu', 2, { x: 0 });
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

const theWholeDocument = document.querySelectorAll('divs');

theWholeDocument.forEach(element =>
	element.addEventListener('click', e => {
		e.stopPropagation();
		console.log(e.target);
		if (menu.classList.contains('menu--open')) {
			menu.classList.toggle('menu-open');
			TweenMax('.menu', 2, { x: 0 });
		}
	}),
);
