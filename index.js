const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchText = "Search Now"
  let arr = ["hey",54,65]
  res.render('index',{siteName: siteName, searchText: searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
  let blogTittle = "Adidas"
  let blogContent = "Search Now"

  res.render ('blogpost',{blogTittle: blogTittle, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})