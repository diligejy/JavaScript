while(true) {
	var number1 = Math.ceil(Math.random() * 9)
	var number2 = Math.ceil(Math.random() * 9)
	var result = number1 * number2
	var condition = true;
	while(condition) {
		var answer = prompt(String(number1) + '곱하기' + String(number2) + '는?')
		if (result === Number(answer)){
			alert('딩동댕');
			condition = false;
        } else{
			alert('땡')
        }
    }
}