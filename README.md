# raml-theme

This is a enhencemant for [raml2html](https://github.com/raml2html/raml2html) default theme. It only add a new tab to support trying online API feature. 

# Development

Use connect to start a static file server and watch for templates file changing. If any file is changed the browser will be reloaded automatically.

```
grunt dev
```

# Build

Edit the configuration in Gruntfile.js to set your own api.raml file path.

```
raml2html: {
  all: {
    options: {
      mainTemplate: 'layout.nunjucks',
      templatesPath: './themes/default'
    },
    files: {
      'dist/api.html': ['../examples/github.raml'],
    }
  }
}
```

Generate static html file using default theme.

```
grunt
```

The generated html is placed under dist folder.