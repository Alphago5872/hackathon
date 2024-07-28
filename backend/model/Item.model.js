import mongoose from "mongoose";

const allowedTypes = ['scholarship', 'extracurricular', 'internship', 'summer program'];

export const ItemSchema = new mongoose.Schema({
    type: {
        type: String,
        required : [true, "Please provide correct Item Type"],
        validate: {
            validator: function(value) {
                return allowedTypes.includes(value.toLowerCase());
            },
            message: 'Please provide a valid Item Type: Scholarship, Extracurricular, Internship, or Summer Program'
        },
    },
    name : {
        type: String,
        required: [true, "Please provide a name for the item"]
    },
    industry : {
        type: [String],
        required : [true, "Please provide an industry for item"]
    },
    description : {
        type: String,
        required : [true, "Please provide a description for the item"]
    },
    image : {
        type : String,
    }
});

export default mongoose.model.Item || mongoose.model('Item', ItemSchema);