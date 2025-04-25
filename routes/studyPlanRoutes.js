const express = require('express');
const router = express.Router();
const studyPlanController = require('../controllers/plancontroller');

// Route to create a study plan for a specific day
router.post('/study-plan', studyPlanController.createStudyPlan);

// Route to get the study plan for today
router.get('/study-plan', studyPlanController.getStudyPlanForToday);

// Route to update the study plan for a specific day
router.put('/study-plan/:date', studyPlanController.updateStudyPlan);

module.exports = router;
