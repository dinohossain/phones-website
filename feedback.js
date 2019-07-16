/* validate feedback form*/
function validation(){
	if(document.feedback.name.value == "")
		
	//is full name is empty
	{
		alert("Full name can't be left empty")
		document.feedback.name.focus();
		return false;
	}
	else if(document.feedback.email.value == "")
	//is email is empty
	{
		alert("Email can't be left empty")
		document.feedback.email.focus();

		return false;
	}
	else if(document.feedback.message.value == "")
	//is message is empty
	{
		alert("Message can't be left empty")
		document.feedback.message.focus();

		return false;
	}
	else
	{
		return true;
	}
}
