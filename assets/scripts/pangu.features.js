const text = pangu.spacing("當你凝視著bug，bug也凝視著你");
// text = '當你凝視著 bug，bug 也凝視著你'

pangu.spacingElementById('main');
pangu.spacingElementByClassName('comment');
pangu.spacingElementByTagName('p');

document.addEventListener('DOMContentLoaded', () => {
	// listen to any DOM change and automatically perform spacing via MutationObserver()
	pangu.autoSpacingPage();
});