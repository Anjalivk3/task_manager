const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  data: Buffer,
  contentType: String,
  filename: String,
});

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["TODO", "DONE"],
    default: "TODO"
  },
  linkedFile: { type: fileSchema, required: false }, 
  // optional blob
  createdOn: { type: Date, required: true, default: Date.now },
  deadline: { type: Date, required: true },
  
},
{ timestamps: true }
);



const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
