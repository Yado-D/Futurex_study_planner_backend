const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// UserProfile Schema
const userProfileSchema = new Schema({
    name: { type: String, required: true },
    grade: { 
        type: Number, 
        required: true, 
        enum: [9, 10, 11, 12],  // Restrict to values 9-12
        message: 'Grade must be between 9 and 12.'
    },
    school: { type: String, default: '' },
    curriculumType: { type: String, required: true }, // Semester or Quarter
    avgGrade: { type: Number, required: true },
    rank: { type: Number, default: null },
    studyDurationMin: { type: Number, required: true },
    studyDurationMax: { type: Number, required: true },
    preferredTimes: { type: [String], required: true }, // Morning, Afternoon, Evening
    restDaysPerWeek: { type: Number, required: true },
    wakeUpTime: { type: String, required: true }, // Format: HH:MM
    learningStyle: { type: String, required: true }, // Video, Notes, Textbook
    subjects: [{
        name: { type: String, required: true },
        difficulty: { type: Number, required: true }, // 1-5
    }],
    favoriteSubjects: { type: [String], default: [] },
    improveSubjects: { type: [String], default: [] },
    leisureGeneral: { type: [String], default: [] },
    moviePrefs: { type: [String], default: [] },
    gamePrefs: { type: [String], default: [] },
    finalExamDate: { type: Date, required: true },
    dreamCareer: { type: String, default: '' },
    motivations: { type: [String], default: [] },
    competeWithFriends: { type: Boolean, default: false },
    admiredFigure: { type: String, default: '' },
    admiredReason: { type: String, default: '' },
    detailedActivities: { type: Schema.Types.Mixed, default: {} }, // Optional but helpful details
}, { timestamps: true });

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
