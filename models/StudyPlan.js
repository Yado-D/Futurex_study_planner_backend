const mongoose = require('mongoose');

// Schema for the study plan for a specific day
const studyPlanSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  plan: [{
    subjectName: { type: String, required: true },
    chapters: [{ type: String, required: true }],  // List of selected chapters
  }],
});

const StudyPlan = mongoose.model('StudyPlan', studyPlanSchema);

module.exports = StudyPlan;
