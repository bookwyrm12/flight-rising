function checkIfMoreThanFive() {
	for (var i = 0; i < 28; i += 1) {
		var v = document.getElementsByName("v" + i)[0];
		if (v.length <= 5) continue;
		v.value = v.length - 5;
		document.getElementsByName("a" + i)[0].checked = true;
	}
}
