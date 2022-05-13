var mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	question: String,
	correct: String,
	answerA: String,
	answerB: String,
	answerC: String,
	category: String
});

module.exports = mongoose.model('question', questionSchema)
