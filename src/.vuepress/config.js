module.exports = {
  title: 'glanceBehind\'s Blog', // Title for the site. This will be displayed in the navbar.
  theme: '@vuepress/theme-blog',
  themeConfig: {
    // Please keep looking down to see the available options.
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-texmath'), {
	engine: require('katex'),
	delimiters: 'dollars'
      });
    }
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.3/katex.min.css', grity: 'sha512-6VMVcy7XQNyarhVuiL50FzpgCFKsyTd6YO93aaQEyET+BNaWvj0IgKR86Bf6+AmWczxAcSnL+JGjo+iStgO1gQ==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' }]
  ]
}
