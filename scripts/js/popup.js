// refs - http://stackoverflow.com/questions/11996053/detect-a-button-click-in-the-browser-action-form-of-a-google-chrome-extension


document.addEventListener('DOMContentLoaded', 
	function () {
		init();
	}
);

var init = function(){
	//authorize user, once authorized - move code block there.

	var pu_in_out = document.getElementById("pu_in_out");
	pu_in_out.value="Time In";
	pu_in_out.addEventListener("click", function(e){
		if("Time In" == pu_in_out.value){
			pu_in_out.value="Time Out";
			alert (new Date());
		} else {
			pu_in_out.value="Time In";
			alert (new Date());
		}

		//call Sheets API here to log date
	});
};


