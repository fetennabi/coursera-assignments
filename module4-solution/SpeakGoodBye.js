
/*Goodbye speaker function*/
const byeSpeaker = {
	speakWord: 'Good Bye'
};

(function () {
	byeSpeaker.speak = function (name) {
		return (byeSpeaker.speakWord + " " + name);
	}
}());
