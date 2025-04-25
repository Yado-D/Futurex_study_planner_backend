const mongoose=require('mongoose');
const questionSchema =new mongoose.Schema({
    questionText:{type:String,required:true},
    options :{type:[String],required:true},
    correctOptionIndex: {type:String,required:true}
});
const quizSchema =new mongoose.Schema({
    title: {type:String,required:true},
    subjectId:{type:mongoose.Schema.Types.ObjectId, 
        ref:'Subject',
        unique:true,
        required: true
    },
    grade: { type:Number,required:true},
    chapter: { type: String, required:true },
    explanation:{type : String,default:""},
    questions :{type:[questionSchema],required: true},
}, { timestamps: true });
module.exports =mongoose.model('Quiz',quizSchema);