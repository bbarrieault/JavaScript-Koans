
var __ = "blank";

// ignore this. It simplifies determining array equality
Array.prototype.equalTo = function(compareTo) {
	if (this.length !== compareTo.length) {
		return false;
	}
	for(var i = 0; i < compareTo.length; i++) {
		if (this[i] !== compareTo[i]) {
			return false;
		}
	}
	return true;
};

(function() {

	var lastAssertLogReason, ignoreFurtherFailures = false;
	var zenMessages = [
		"The path to enlightenment has many stones.",
		"Do not stray from your path, for enlightenment comes with perseverance.",
		"The only Zen you find on tops of mountains is the Zen you bring there.",
		"Enlightenment occurs when someone becomes inspired by information and uses it to enhance their life.",
		"Be master of mind rather than mastered by mind.",
		"Zen is not some kind of excitement, but concentration on our usual everyday routine.",
		"I think self-awareness is probably the most important thing towards being a champion.",
		"The reward of all action is to be found in enlightenment.",
		"lasting enlightenment can be achieved only through persistent exercise of real love.",
		"The real meaning of enlightenment is to gaze with undimmed eyes on all darkness.",
		"Do not think you will necessarily be aware of your own enlightenment.",
		"Enlightenment must come little by little - otherwise it would overwhelm.",
		"The greatest gift is to give people your enlightenment, to share it. It has to be the greatest.",
		"In the beginner's mind there are many possibilities, but in the expert's mind there are few.",
		"Only the hand that erases can write the true thing.",
		"Enlightenment is ego's ultimate disappointment.",
		"Man suffers only because he takes seriously what the gods made for fun.",
		"It is easy to believe we are each waves and forget we are also the ocean.",
		"Working out is my biggest hobby. It's my Zen hour. I just zone out.",

		// Some added inspiration from the old masters of the early internet https://www.mit.edu/~xela/tao.html
		"A self-motivation is an enlightenment of mind, empowerment of heart and enrichment of soul to arise, awake and ascend to achieve the noble and coveted goal even if it entails walking on its enervating path all alone.",
		"Programmers that do not comprehend the Tao are always running out of time and space for their programs. Programmers that comprehend the Tao always have enough time and space to accomplish their goals.",
		"Even a perfect program still has bugs.",
		"After three days without programming, life becomes meaningless.",
		"The Grand Master Turing once dreamed that he was a machine. When he awoke, he exclaimed:\n" +
		     "\"I don't know whether I am Turing dreaming that I am a machine, or a machine dreaming that I am Turing!\"",
		"A well-written program is its own Heaven; a poorly-written program is its own Hell.",
		"A program should be light and agile. There should be neither too little nor too much. Neither needless loops nor useless variables; neither lack of structure nor overwhelming rigidity.",
		"Though a program be but three lines long, someday it will have to be maintained.",
		"Let the programmers be many and the managers few -- then all will be productive.",
		"You can demonstrate a program for a corporate executive, but you can't make him computer literate.",
		"Without the wind, the grass does not move. Without software hardware is useless.",
		'Apprentice programmer: "When will I achieve enlightenment?" Master programmer: "When your program runs."',

		// and some motivation from Douglas Hofstadter's opus "Gödel, Escher, Bach"
		"Sometimes it seems as though each new step towards AI, rather than producing something which everyone agrees is real intelligence, merely reveals what real intelligence is not.",
		"Provability is a weaker notion than truth.",
		"For now, what is important is not finding the answer, but looking for it.",
		"To paraphrase Descartes: \"I think; therefore I have no access to the level where I sum.",
		"Perhaps what differentiates highly creative ideas from ordinary ones is some combined sense of beauty, simplicity, and harmony.",
		"Meaning cannot be kept out of formal systems when sufficiently complex isomorphisms arise. Meaning comes in despite one's best efforts to keep symbols meaningless!",
	];

	QUnit.config.reorder = false;

	QUnit.done(function(results) {
		var failures = results.failed;
		var total = results.total;
		if (failures > 0) {
			var failed = $('ol#qunit-tests > li.fail');
			failed.hide();
			$(failed[0]).show();
		}
		if (failures < total) {
			$('h3.welcome_message').hide();
		}
		if (failures > 0) {
			$("#zen-help").show();
		}
		$("body").scrollTop($(document).height());
	});

	QUnit.log(function(result) {
		lastAssertLogReason = result.message;
	});

	QUnit.testDone(function(result) {
		var message;
		if (!ignoreFurtherFailures && result.failed > 0) {
			ignoreFurtherFailures = true;
			const hint = lastAssertLogReason ? `(${lastAssertLogReason})` : ""
			message = `${randomZenMessage()} \nTry meditating on this: ${result.module}: ${result.name} ${hint}`;
			$("#zen-help").html(message.replace(/\n/g, "<br /><br />"));
			console.log(message);
		}
	});

	function randomZenMessage() {
		var randomIndex = Math.floor(Math.random() * zenMessages.length);
		var zenMessage = zenMessages[randomIndex];
		zenMessage = zenMessage.charAt(0).toUpperCase() + zenMessage.substr(1);
		return zenMessage;
	}

})();
