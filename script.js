document.addEventListener("DOMContentLoaded", app);

function app() {
	class Fortune {
		constructor(fortuneList) {
			this.text = fortuneList.length > 0 ? fortuneList[~~(Math.random() * fortuneList.length)] : "No fortune";
		}
	}

	var fcBtn = document.querySelector("button"),
		fortuneText = document.querySelector(".fc-fortune-text"),
		fortuneList = [
            "A smile will open all doors.",
            "Your hard work will pay off in the near future.",
            "Good things come to those who wait.",
            "You will find happiness in unexpected places.",
            "A pleasant surprise is waiting for you.",
            "Your creativity will lead you to success.",
            "New opportunities will present themselves soon.",
            "Your kindness will be rewarded tenfold.",
            "Adventure awaits just around the corner.",
            "Your positive attitude will bring you great joy."
		],
		fortune = new Fortune(fortuneList);

	function getFortune() {
		fortune = new Fortune(fortuneList);
		fortuneText.innerHTML = fortune.text;
	}

	function nextState() {
		let elClass = this.classList,
			spawned = "spawned",
			opened = "opened";

		// open cookie
		if (elClass.contains(spawned)) {
			elClass.remove(spawned);
			elClass.add(opened);

			// new cookie
		} else {
			elClass.remove(opened);
			elClass.add(spawned);
			getFortune();
		}
	}

	getFortune();
	fcBtn.addEventListener("click", nextState);
}
