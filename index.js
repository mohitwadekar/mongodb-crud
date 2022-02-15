const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/tasks');

const app = express();

const dbURI='mongodb://localhost/tasks';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000, () => console.log('server started on port 3000')))
    .catch((err) => console.log(err));

app.use(express.json());

app.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find();
        res.json(task);
    } catch (err) {
        res.send('Error' + err);
    }
})


app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (err) {
        res.send('Error' + err);
    }
})

app.post('/tasks', async (req, res) => {
    const task = new Task({
        description: req.body.description,
        completed: req.body.completed
    })

    try {
        await task.save();
        res.send('Added!');
    }
    catch (err) {
        res.send('Error' + err);
    }
})

app.patch('/tasks/:id', async(req, res) =>{
    try{
        const task = await Task.findById(req.params.id);
        task.completed = req.body.completed;
        await task.save();
        res.send('Updated!');
    }catch(err){
        res.send('Error' + err);
    }
})


app.delete('/tasks/:id', async(req, res) =>{
    try{
        const task = await Task.findById(req.params.id);
        const del = await task.delete();
        res.send('Deleted!');
    }catch(err){
        res.send('Error' + err);
    }
})
