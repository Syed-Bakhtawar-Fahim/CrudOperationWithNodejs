import mongoose from 'mongoose';

// Database connection
mongoose.connect(`
mongodb+srv://bakhtawar:bakhtawar@cluster0.3xft5.mongodb.net/notes?retryWrites=true&w=majority`, 
	{
	 useNewUrlParser: true,
	 useUnifiedTopology: true,
	})
.then(()=>{
	console.log('Database connected successfully');
	})
.catch((e)=>{
	console.log("Something went wrong due to this error", e);
	})
