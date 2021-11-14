import express from 'express';
import mongoose from 'mongoose';
import axios from 'axios';
import morgan from 'morgan';
import cors from "cors";
const app = express()
const port = process.env.PORT || 5000

// App Use Methods
app.use(cors())
app.use(express.json())
app.use(morgan('short'))

// Databse Coneection
mongoose.connect(`
mongodb+srv://bakhtawar:bakhtawar@cluster0.3xft5.mongodb.net/notes?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((e) => {
        console.log("Something went wrong due to this error", e);
    })

// Database Structure / Scehema
const User = mongoose.model('User', {
    name: String,
    email: String,
    address: String
});


// Create Note
app.post('/user', (req, res) => {

    if (!req.body.name || !req.body.email || !req.body.address) {
        res.status(400).send("invalid data");
    } else {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address
        });
        newUser.save().then(() => {
            console.log('user created success')
            res.send("users created");
        });
    }
})

// Get All Notes
app.get('/users', (req, res) => {

    User.find({}, (err, users) => {
        if (!err) {
            res.send(users)
        } else {
            res.status(500).send("error happened")
        }
    })

})

// Get Single Note
app.get('/user/:id', (req, res) => {

    User.findOne({ _id: req.params.id }, (err, user) => {
        if (!err) {
            res.send(user)
        } else {
            res.status(500).send("error happened")
        }
    })

})
// Update Note
app.put('/user/:id', (req, res) => {
    let updateObj = {}

    if (req.body.name) {
        updateObj.name = req.body.name
    }
    if (req.body.email) {
        updateObj.email = req.body.email
    }
    if (req.body.address) {
        updateObj.address = req.body.address
    }

    User.findByIdAndUpdate(req.params.id, updateObj, { new: true },
        (err, data) => {
            if (!err) {
                res.send(data)
            } else {
                res.status(500).send("error happened")
            }
        })
})

// Delete Note
app.delete('/user/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, data) => {
        if (!err) {
            res.send("user deleted")
        } else {
            res.status(500).send("error happened")
        }
    })
})
app.get('/', (req, res) => {
    res.send('Hi I am a hello world Server program')
  })
app.get('/home', (req, res){
    res.send('Hello Viewer! Here is your home page')
})

// Get data
const BASE_URL = 'http://localhost:5000/users';

const getTodoItems = async () => {
  try {
    const response = await axios.get(BASE_URL);

    const todoItems = response.data;

    console.log(`GET: Here's the list of todos`, todoItems);

    return todoItems;
  } catch (errors) {
    console.error(errors);
  }
};

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



