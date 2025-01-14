var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-my-favorite-examples",
  "level": "1",
  "url": "sec-my-favorite-examples.html",
  "type": "Section",
  "number": "2.1",
  "title": "My Favorite Examples",
  "body": " My Favorite Examples  Text of section.    This is a definition! It is great! This is the definition of a word .         This is a theorem!     This is an example!   "
},
{
  "id": "def-variance",
  "level": "2",
  "url": "sec-my-favorite-examples.html#def-variance",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  This is a definition! It is great! This is the definition of a word .      "
},
{
  "id": "thm-example-theorem",
  "level": "2",
  "url": "sec-my-favorite-examples.html#thm-example-theorem",
  "type": "Theorem",
  "number": "2.1.2",
  "title": "",
  "body": "  This is a theorem!   "
},
{
  "id": "sec-my-favorite-examples-5",
  "level": "2",
  "url": "sec-my-favorite-examples.html#sec-my-favorite-examples-5",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": " This is an example!  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
