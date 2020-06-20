const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

//load config
dotenv.config({path:'./config/config.env'})

//loading connect
connectDB()

const app = express()

if(process.env.NODE_ENV ==='developent'){
    app.use(morgan('dev'))
}
// handlebars
// Handlebars Helpers
const {
    formatDate,
    stripTags,
    truncate,
    editIcon,
    select,
} = require('./helpers/hbs')

// Handlebars
app.engine(
    '.hbs',
    exphbs({
        helpers: {
            formatDate,
            stripTags,
            truncate,
            editIcon,
            select,
        },
        defaultLayout: 'main',
        extname: '.hbs',
    })
)
app.set('view engine', '.hbs')



const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

