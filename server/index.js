const express = require('express')
const app = express()
const port = process.env.PORT
const url = process.env.SITE_URL

const userRouter = require('./routes/user.routes')
const contentRouter = require('./routes/content.routes')
const sertificateRouter = require('./routes/sertificates.routes')
const categoriesRouter = require('./routes/categories.routes')
const productRouter = require('./routes/product.routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/user', userRouter)
app.use('/content', contentRouter)
app.use('/sertificates', sertificateRouter)
app.use('/categories', categoriesRouter)
app.use('product', productRouter)

app.get('/', (req, res) => {
  res.send('Home')
});

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://${url}:${port}`)
);