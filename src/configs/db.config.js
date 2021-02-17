import mongoose from 'mongoose';

const mongoConnection = url => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('Database connected'))
        .catch(err => console.log(err));

};

export default mongoConnection;