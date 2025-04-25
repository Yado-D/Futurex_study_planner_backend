const Quiz = require('../models/Quiz');
const Subject = require('../models/Subject');


exports.createQuiz = async (req, res) => {
  try {
    const { title, subjectId, grade,chapter, questions,explanation } = req.body;

    // Validation
    const subjectExists = await Subject.findById(subjectId);
    if (!subjectExists) {
      return res.status(400).json({ error: "Invalid subjectId" });
    }
    if (!chapter) {
      return res.status(400).json({ error: "Chapter is required" });
     
    }
    const quiz = new Quiz({ title, subjectId, grade, chapter,questions,explanation});
    await quiz.save();

    res.status(201).json({ message: "Quiz created successfully", quiz });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getQuizzes = async (req, res) => {
  const { subject, grade,chapter } = req.query;
  const filter = {};

  if (subject) filter.subjectId = subject;
  if (grade) filter.grade = Number(grade);
  if (chapter) filter.chapter=chapter;

  try {
    // Fetch quizzes with only the necessary fields: questions and options
    const quizzes = await Quiz.find(filter)
      .populate('subjectId', 'name')
      .lean() 
      .select('questions');  // Only select the questions field

    // Format the result to remove unnecessary fields
    const formattedQuestions = quizzes.flatMap(quiz => quiz.questions.map(question => ({
      questionText: question.questionText,
      options: question.options,
    })));
    res.send(JSON.stringify(formattedQuestions));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
