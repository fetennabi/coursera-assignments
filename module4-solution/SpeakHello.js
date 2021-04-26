

const helloSpeaker = {
	speakWord: 'Hello',	
};
//This says Hello
(function () {
	helloSpeaker.speak = function (name) {
		return (helloSpeaker.speakWord + " " + name);
	}
}());