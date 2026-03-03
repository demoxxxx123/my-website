	function submitToAPI(e) {
       e.preventDefault();
//       var URL = "API Gateway";
       var name1 = document.getElementById("name-input1").value;
       var email1 = document.getElementById("email-input1").value;
	   var name2 = document.getElementById("name-input2").value;
       var email2 = document.getElementById("email-input2").value;
       var ProjN = document.getElementById("ProjName-input").value;
	   var Location = document.getElementById("Location-input").value;
       var MName = document.getElementById("MName-input").value;
	   var WBS = document.getElementById("wbs-input").value;
	   var Cloud = document.getElementById("cloud-input").value;
	   var Pega = document.getElementById("Pega-input").value;
	   var OS = document.getElementById("OS-input").value;
	   
	   var Backup_name = document.getElementsByTagName('Backup').value;  
		var Backup_Value;
		if(Backup_name =='Yes')
			Backup_Value = document.getElementById("yes-input").value;
		else
			Backup_Value = document.getElementById("no-input").value;
			
	   var App = document.getElementById("APP-input").value;
	   var DB = document.getElementById("DB-input").value;
	   var msg = document.getElementById("description-input").value;
	   var date = document.getElementById("date-input").value;
	   var checkbox = document.getElementById("checkbox");
	  <!-- Add validation -->
	  
		if (name1=="" || ProjN =="" || WBS =="" )
        {
            alert("Please Fill All Required Field");
            return false;
        }
		
		nameRE = /^[A-Z]{1,3}[a-z]{2,20}[ ]{1,4}[A-Z]{1,3}[a-z]{2,20}$/;
		if(!nameRE.test(name1)) {
			alert("Enter valid Primary Owner FullName ");
				return false;
		}

		emailRE = /^[A-Za-z.]{3,}@[accenture]{9,9}[.]{1}[com]{3,3}$/;
		if(!emailRE.test(email1)) {
			alert("Enter valid email ID of the organization");
				return false;
		}
		if (name2!="")
		{
		nameRE = /^[A-Z]{1}[a-z]{2,20}[ ]{1,4}[A-Z]{1}[a-z]{2,20}$/;
		if(!nameRE.test(name2)) {
			alert("Enter valid Secondary Owner FullName");
				return false;
		}
		}
		if (email2!="")
		{
		emailRE = /^[A-Za-z.]{3,}@[accenture]{9,9}[.]{1}[com]{3,3}$/;
		if(!emailRE.test(email2)) {
			alert("Enter valid email ID of the organization");
				return false;
		}
		}
		ProjNRE = /^[A-Za-z. _()]{2,20}$/;
		if(!ProjNRE.test(ProjN)) {
			alert("Enter valid Project Name ");
				return false;
		}
		LocationRE = /^[A-Za-z( )]{2,20}$/;
		if(!LocationRE.test(Location)) {
			alert("Enter valid Location ");
				return false;
		}
		if (MName!="")
		{
		MNameRE = /^[A-Z]{1}[a-z]{2,20}[ ]{1,4}[A-Za-z ]{2,20}$/;
		if(!MNameRE.test(MName)) {
			alert("Enter valid MD FullName");
				return false;
		}
		}
		WBSRE = /^[A-Za-z]{1}[A-Za-z0-9]{7}$/;
		if(!WBSRE.test(WBS)) {
			alert("Enter valid WBSe ");
				return false;
		}
		if (Pega=="Default")
        {
            alert("Enter the required Pega version");
            return false;
        }
		if (OS=="Default")
        {
            alert("Enter the required Operating System");
            return false;
        }
		if (checkbox.checked != true)
		{
		alert("please check the checkbox");
				return false;
		}
		
		//       sending data by PK
       var data = {    
	      name1 : name1,
          email1 : email1,
		  name2 : name2,
          email2 : email2,
		  ProjN : ProjN,
		  Location : Location,
		  MName : MName,
		  WBS : WBS,
		  Cloud : Cloud,
		  Pega : Pega,
		  OS : OS,
		  Backup : Backup_Value,
		  App : App,
		  DB : DB,
		  date : date,
          msg : msg
        };

		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("POST", "https://v98qf3zoii.execute-api.ap-south-1.amazonaws.com/Prod/apimail");
		xmlhttp.setRequestHeader("Content-Type", "application/json");
		xmlhttp.send(JSON.stringify(data));
		xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState !== 0) {
			var response = JSON.parse(xmlhttp.responseText);
			if (xmlhttp.status === 200 ) {
				console.log('successful');
				document.getElementById("contact-form").innerHTML = "<h2>Thank you for your message<br>BPMDC_Pega_Sysadmin  team will get back to you soon!</h2>";
		    } else {
			    console.log('failed');
			}
		}
	}
	
	document.getElementById('contact-form').reset(); 
	} 