const markdownItAttrs = require('markdown-it-attrs')
const markdownItTable = require('markdown-it-multimd-table')
const prism = require('prismjs')
const loadLanguages = require('prismjs/components/')
const fs = require('fs')
const path = require('path')

module.exports = config => {
  let md

  config.amendLibrary('md', _md => {
    md = _md
    _md
      .use(markdownItAttrs)
      .use(markdownItTable, {
        headerless: true,
      })

      _md.options.highlight = (code, lang) => {
        loadLanguages([lang])
        return prism
          .highlight(code, prism.languages[lang], lang)
          .replace(/(.*?)\n/g, '<span class="line">$1</span>\n')
      }
  })

  config.addPassthroughCopy({
    './public/': '/',
  })

  config.addFilter('baseUrl', (urlObj, baseUrl) => baseUrl + urlObj)

  config.addFilter('standardDate', dateObj =>
    new Date(dateObj.setHours(12)).toISOString().substring(0, 10))

  config.addFilter('formatDate', new Intl.DateTimeFormat('en', {
    timeZone: 'America/Los_Angeles',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }).format)

  config.addShortcode('readingTime', function(content) {
    // https://support.zyro.com/en/articles/6877973-how-is-blog-post-reading-time-calculated
    let wordsTimes = (content || this.ctx.content)
      .replace(/&.{3,6};/g, ' ')
      .replace(/<img[^>]*?>/g, '')
      .replace(/<table[\s\S]*?<\/table>/g, '') // considering table as "image"
      .replace(/<pre[\s\S]*?<\/pre>/g, '') // considering code as "image"
      .replace(/<figure[\s\S]*?<math*?<\/figure>/g, '') // considering math inside figure as "image"
      .split(/[\s\t\r\n\v\t]+/)
      .length / 240
    let imagesTimes = ((content || this.ctx.content)
      .match(/<(figure|pre)/g)
      ?.reduce((time, _, i) => time + Math.max(12 - i, 3), 0) ?? 0) / 60
    return `${Math.ceil(wordsTimes + imagesTimes)} min read`
  })

  config.addShortcode('picture', function(imageName, caption) {
    fs.copyFileSync(
      path.join(path.dirname(this.ctx.environments.page.inputPath), imageName),
      path.join(path.dirname(this.ctx.environments.page.outputPath), imageName),
    )
    return `<figure><img loading="lazy" src="${imageName}" alt="${caption}"><figcaption>${md.renderInline(caption)}</figcaption></figure>`
  })

  config.addPairedShortcode('figure', function(content, caption) {
    return `<figure><div>${md.render(content)}</div>${caption ? `<figcaption>${md.renderInline(caption)}</figcaption>` : ''}</figure>`
  })

  config.addCollection('sortedPosts', collectionApi =>
    collectionApi
      .getFilteredByTag('posts')
      .sort((one, another) => another.data.publishingDate - one.data.publishingDate))

  return {
    dir: {
      input: 'content',
      includes: '../_includes',
      data:  '../_data',
      output: '_site',
    },
  }
}
