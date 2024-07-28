import mongoose from "mongoose";

export const ItemSchema = new mongoose.Schema({
    ItemType: {
        type: String,
        required : [true, "Please provide correct Item Type"],
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

export default mongoose.model.Item || mongoose.model('User', ItemSchema);