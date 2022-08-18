require('dotenv').config()

const express = require('express')
const router = require('./routes/index')
const fileupload = require('express-fileupload')

const sequelize = require('./db')
const path = require('path')
const cors = require('cors')
const errorHandler = require('./middleware/errorHandlingMiddleware')


const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileupload({}))
app.use(express.json())
app.use("/api", router)

app.get('/', (req, res) => {
	res.status(200).json({message: "Work.."})
})

//Error handling, it's last middleware
app.use(errorHandler)

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () =>
			console.log(`Server was been started in port ${PORT}`)
		)
	} catch (e) {
		console.log(e)
	}
}

start()
