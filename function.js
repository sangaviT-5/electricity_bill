function checkBill(){
	let unit=Number(document.getElementById('iUnit').value);
	const fix_charge=480;
	let result;
	if (unit<=60) {
		result=unit*7.85;
	}
	else if (60<unit && unit<=90) {
		result=60*7.85+(unit-60)*10;
	}
	else if (90<unit && unit<=120) {
		result=60*7.85+30*10+(unit-90)*27.75;
	}
	else if (120<unit && unit<=180) {
		result=60*7.85+30*10+30*27.75+(unit-120)*32;
	}
	let result=result+fix_charge;
	let txtResult=document.getElementById('Your_bill');
	txtResult.innerHTML="Your bill amount is: "+result;
}