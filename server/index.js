const express = require('express')
const app = express()
const port = process.env.PORT
const url = process.env.SITE_URL
const path = require('path')
const cookieParser = require('cookie-parser')

const cors = require('cors')
const userRouter = require('./routes/user.routes')
const contentRouter = require('./routes/content.routes')
const sertificateRouter = require('./routes/sertificates.routes')
const categoriesRouter = require('./routes/categories.routes')
const productRouter = require('./routes/product.routes')


app.use( cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
}),)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.use('/user', userRouter)
app.use('/content', contentRouter)
app.use('/sertificates', sertificateRouter)
app.use('/categories', categoriesRouter)
app.use('/products', productRouter)
app.use('/static',express.static(path.join(__dirname, 'static')))
app.get('/', (req, res) => {
  res.send('Home')
});

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://${url}:${port}`)
);