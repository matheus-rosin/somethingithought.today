module.exports = {
	tags: ['posts'],
	layout: 'layouts/post.njk',
	permalink: '/article/{{ title | slugify }}/',
}
