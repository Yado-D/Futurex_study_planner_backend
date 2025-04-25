const Subject = require('../models/Subject');
const StudyPlan = require('../models/StudyPlan');


// Controller to create a study plan for a specific day
exports.createStudyPlan = async (req, res) => {
  const { date, plan } = req.body;

  try {
    const newPlan = new StudyPlan({ date, plan });
    await newPlan.save();
    res.status(201).json({ message: 'Study plan created successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating study plan', error });
  }
};

// Controller to get the study plan for today
exports.getStudyPlanForToday = async (req, res) => {
  const today = new Date().toISOString().slice(0, 10);  // Format as YYYY-MM-DD
  try {
    const studyPlan = await StudyPlan.findOne({
      date: { $gte: new Date(today), $lt: new Date(today + 'T23:59:59.999Z') },
    });
    if (studyPlan) {
      res.json(studyPlan);
    } else {
      res.status(404).json({ message: 'No study plan found for today' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching study plan', error });
  }
};

// Controller to update a study plan for a specific day
exports.updateStudyPlan = async (req, res) => {
  const { date } = req.params;
  const { plan } = req.body;

  try {
    const studyPlan = await StudyPlan.findOneAndUpdate(
      { date },
      { plan },
      { new: true }
    );
    if (studyPlan) {
      res.json({ message: 'Study plan updated successfully!', studyPlan });
    } else {
      res.status(404).json({ message: 'Study plan not found for this date' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating study plan', error });
  }
};
