import mongoose from 'mongoose';
import { getSearchParamsForLocation } from 'react-router-dom/dist/dom';

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
    },
    
    password: {
        type: String,
        required: true, }

    }, { timestamps : true}
    
);
const User = mongoose.model('User',userSchema);

export default User;