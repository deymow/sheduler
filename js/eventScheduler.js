
	function validate() 
	{
		if(document.myForm.eventType.value == "-1")
		{

			alert("Please select your event type!");
			document.myForm.eventType.focus();
			return false;
		}
		if(document.myForm.addTitle.value == " ")
		{
			alert("Please provide your title");
			document.myForm.addTitle.focus();
			return false;
		}
		if(document.myForm.yourName.value == "")
		{
			alert("Please provide your name");
			document.myForm.yourName.focus();
			return false;
		}
		if(document.myForm.email.value == "")
		{
			alert("Please provide your Email address!");
			document.myForm.email.focus();
			return false;
		}
		if(document.myForm.date.value == "")
		{
			alert("Please provide your start date!");
			document.myForm.date.focus();
			return false;
		}
		if(document.myForm.datee.value == "")
		{
			alert("Please provide your end date!");
			document.myForm.datee.focus();
			return false;
		}
		if(document.myForm.time.value == "")
		{
			alert("Please provide your start time!");
			document.myForm.time.focus();
			return false;
		}
		if(document.myForm.timee.value == "")
		{
			alert("Please provide your end time!");
			document.myForm.timee.focus();
			return false;
		}
		if(document.myForm.addReminder.value == "-1")
		{
			alert("Please set a reminder!");
			document.myForm.addReminder.focus();
			return false;
		}
		return(true);
	}
