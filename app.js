import express from 'express'
import swaggerJsDoc from 'swagger-jsdoc'
import { serve, setup } from 'swagger-ui-express'
import clt from './database.js'
import dotenv from 'dotenv'
dotenv.config()

const { client } = clt

const app = express()

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Sanjar",
            version: "1.0.0"
        }
    },
    apis: ['app.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', serve, setup(swaggerDocs))

/**
 * @swagger
 * /teachers:
 *   get:
 *     description: Get all teachers
 *     responses:
 *       200:
 *         description: Success
*/

app.get("/teachers", (req, res) => client.query(`SELECT * FROM teachers`, (err1, res1) => res.send(res1.rows)))

/**
 * @swagger
 * /teachers:
 *   post:
 *     description: Create a new teacher
 *     parameters:
 *       - in: body
 *         name: teacher
 *         description: The teacher to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - surname
 *             - number
 *             - gender
 *           properties:
 *             name:
 *               type: string
 *             surname:
 *               type: string
 *             number:
 *               type: integer
 *             gender:
 *               type: boolean
 *             lessoncount:
 *               type: integer
 *     responses:
 *       201:
 *         description: Created
*/

app.post('/teachers', (req, res) => res.status(201).send())

/**
 * @swagger
 * /students:
 *   get:
 *     description: Get all students
 *     responses:
 *       200:
 *         description: Success
*/

app.get("/students", (req, res) => client.query(`SELECT * FROM students`, (err1, res1) => res.send(res1.rows)))

/**
 * @swagger
 * /students:
 *   post:
 *     description: Create a new student
 *     parameters:
 *       - in: body
 *         name: teacher
 *         description: The student to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - surname
 *             - number
 *             - gender
 *           properties:
 *             name:
 *               type: string
 *             surname:
 *               type: string
 *             number:
 *               type: integer
 *             gender:
 *               type: boolean
 *             lessoncount:
 *               type: integer
 *     responses:
 *       201:
 *         description: Created
*/

app.post('/students', (req, res) => res.status(201).send())

/**
 * @swagger
 * /groups:
 *   get:
 *     description: Get all groups
 *     responses:
 *       200:
 *         description: Success
*/

app.get("/groups", (req, res) => client.query(`SELECT * FROM groups`, (err1, res1) => res.send(res1.rows)))

/**
 * @swagger
 * /groups:
 *   post:
 *     description: Create a new group
 *     parameters:
 *       - in: body
 *         name: group
 *         description: The group to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - subject_id
 *             - teacher_id
 *             - day
 *           properties:
 *             name:
 *               type: string
 *             subject_id:
 *               type: string
 *             teacher_id:
 *               type: string
 *             day:
 *               type: string
 *     responses:
 *       201:
 *         description: Created
*/

app.post('/groups', (req, res) => res.status(201).send())

/**
 * @swagger
 * /subject:
 *   get:
 *     description: Get all subjects
 *     responses:
 *       200:
 *         description: Success
*/

app.get("/subject", (req, res) => client.query(`SELECT * FROM subjects`, (err1, res1) => res.send(res1.rows)))

/**
 * @swagger
 * /subject:
 *   post:
 *     description: Create a new subject
 *     parameters:
 *       - in: body
 *         name: subject
 *         description: The subject to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *           properties:
 *             name:
 *               type: string
 *     responses:
 *       201:
 *         description: Created
*/

app.post('/subject', (req, res) => res.status(201).send())

/**
 * @swagger
 * /schedule:
 *   get:
 *     description: Get all schedule
 *     responses:
 *       200:
 *         description: Success
*/

app.get("/schedule", (req, res) => client.query(`SELECT * FROM schedule`, (err1, res1) => res.send(res1.rows)))

/**
 * @swagger
 * /schedule:
 *   post:
 *     description: Create a new schedule
 *     parameters:
 *       - in: body
 *         name: schedule
 *         description: The schedule to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - group_id
 *             - day_id
 *           properties:
 *             group_id:
 *               type: integer
 *             day_id:
 *               type: integer
 *     responses:
 *       201:
 *         description: Created
*/

app.post('/schedule', (req, res) => res.status(201).send())

app.listen(process.env.PORT, () => console.log("Server working. " + process.env.PORT))