var EXServerRoot = 'http://servtestsagsys'; // 12.7.2010
var EXSPSVersion = 12; // 18.9.2011
var EXECMVersion = '6.8'; // 20.9.2011
var custUseMentionsAutoComplete=true;
var bEXClearBasket = true; // Clear document basket after sending an email
var EXECMCustomFileName = false
// 3.11.2009 - New functionality to ensure proper security management
EXUseRoleSecurity = true; // true | false - overwrite default functionality
EXECMMemberGroup = ''; // overwrite default functionality

function EXUserLastSeen() { // 21.8.2010
// 6.2.2013 - speed up performance
//	ExecuteProcedureAsync('dbo.EXUserLastSeen @sAMAccountName = %DL_sAMAccountName%',null);
}

function EXSetUserRole(DLEntityNameForeign, DLEntityId) {
	if (typeof(DLEntityNameForeign) == 'undefined' || typeof(DLEntityId) == 'undefined') {
		DLEntityNameForeign = '';
		DLEntityId = '';
	}
	if (EXECMMemberGroup != '') { // Check if user if member of group
		var xGroup = SearchAD('%root%','(&(objectcategory=user)(sAMAccountName=%DL_sAMAccountName%) (memberof=' + EXECMMemberGroup + '))','sAMAccountName');
		var s = getsafe(xGroup, '//SearchADResult');
		//alert('DEBUG\n' + s + '\n' + xGroup.xml);
		if (s == '') {
			_EXUserRole = 0;
			return;
		}
	}
	if (DLEntityId == '' || DLEntityId == '0' || DLEntityNameForeign == '')
		return 1; // User has access - as we don't know that they don't
	var xAccess = ExecuteProcedure('dbo.EXGetUserAccess @DLEntityNameForeign=\'' + DLEntityNameForeign + '\',@DLEntityId=' + DLEntityId + ',@WUser = %WUSER%');
	//alert('DEBUG\nEXSetUserRole(' + DLEntityNameForeign + ',' + DLEntityId + ') - ' + xAccess.xml);
	if (getsafe(xAccess,'//EXUserHasAccess') == '0')
		_EXUserRole = 0;
	else
		_EXUserRole = 1;
}

// oldstuff below
    function loadtanarosexcel(DL_Entity, sProject, sGroupCode, strHref)
    {
    	var strXML;
    	strXML='<DL_GenericDBParams><DL_EntityName>' + DL_Entity + '</DL_EntityName><TA_ProjectForeign>' + sProject + '</TA_ProjectForeign><TA_GroupCode>' + sGroupCode + '</TA_GroupCode>';
    	strXML=strXML + '</DL_GenericDBParams>';
    	OpenGenericTable(0, strXML, strHref)	
    }

function initialTester(x)
{
//alert('JW test');
	var oEL = document.all.item('DL_Responsible');
	var medArbStr = "";
if (oEL != null){
//alert(oEL.innerHTML);
//alert(oEL.options.length);
    for (i=0; i<oEL.options.length; i++)
	{
		medArbStr = medArbStr + oEL.options(i).value + ';';
	}
}
else
{
// alert('not found');
}
	medArbStr = medArbStr.toUpperCase();
	x = x.toUpperCase();

	var medArbArray = x.split(';');
	var numberOfParts = 0;

	numberOfParts = medArbArray.length;
		for (i=0; i<numberOfParts; i++)
		{
			if( medArbStr.search(medArbArray[i]+";")==-1)
			{
				alert(medArbArray[i] + " is not in the employee list")	;
				break;
			}
		}
}


var oSecurityGroups = null;
function EXValidateSecurityGroups(oEle) {
	if (oSecurityGroups == null)
		oSecurityGroups = getEntityData('DL_SecurityGroupView','','');
	var s, sgroup, sresult, sunknown;
	sunknown = '';
	s = oEle.value;
	s = s.replace(/,/g,';');
	s = s.replace(/;;/g,';');
	//alert('EXValidateSecurityGroups ' + s);
	sresult = '';
	for(var i=0; i < s.split(";").length; i++) {
		sgroup = s.split(";")[i];
		if (oSecurityGroups.selectSingleNode("//DL_ENTITYDATA/DL_SecurityGroupView[DL_ADSecurityGroup='" + sgroup + "']") == null) {
			if (sunknown != '')
				sunknown = sunknown + ';';
			sunknown = sunknown + sgroup;
		}
		else {
			//alert('group ok ' + sgroup);
			if (sresult != '')
				sresult = sresult + ';';
			sresult = sresult + sgroup;
		}
	}
	if (sunknown != '') {
	// 25.8.2008 - overwrite!!
	//	if (confirm('Unknown groups found \'' + sunknown + '\'. Modify to \'' + sresult + '\'?'))
			oEle.value = sresult;
	}
}

var oUsers = null;
function EXValidateUsers(oEle) {
	if (oUsers == null)
		oUsers = getEntityData2('DL_sAMAccountName','DL_sAMAccountName','','');
	var s, suser, sresult, sunknown;
	sunknown = '';
	sresult = '';
	s = oEle.value.replace(',',';');
	//alert('EXValidateUsers ' + oEle.id + ' ' + s);
	for(var i=0; i < s.split(";").length; i++) {
		//suser = s.split(";")[i].replace('Symphogen\\','');
		suser = s.split(";")[i];
		if (oUsers.selectSingleNode("//DL_ENTITYDATA/DL_sAMAccountName[DL_sAMAccountName='" + suser + "']") == null) {
			if (sunknown != '')
				sunknown = sunknown + ';';
			sunknown = sunknown + suser;
		}
		else {
			//alert('group ok ' + suser);
			if (sresult != '')
				sresult = sresult + ';';
			//sresult = sresult + 'Symphogen\\' + suser;
			sresult = sresult + suser;
		}
	}
	if (sunknown != '') {
	// 25.8.2008 - overwrite!!
oEle.value = sresult;
return;
		if (confirm('Unknown users found \'' + sunknown + '\'. Modify to \'' + sresult + '\'?'))
			oEle.value = sresult;
		else {
			oEle.value = ';' + oEle.value; // 25.8.2008
			oEle.focus();
			return false;
		}
	}
}
function EXSetDocLibType() {
	var oEle = document.getElementById('DL_SecurityDictionary');
	FillDropDown('SPS_DocLibType','DL_D810','SPS_DocLibType','SPS_DocLibType','DL_EntityNameForeign',oEle.value);
	FillDropDown('DL_FolderType','DL_D810FolderTypeView','DL_FolderType','DL_FolderTypeDecode','DL_EntityNameForeign',oEle.value);
}

function EXhandleDLCaseProtected(oEle) {
	try {
		var bOn;
		oEle = document.getElementById('DL_CaseProtected');
		bOn = oEle.value != '' && oEle.value != '0';
//alert('EXhandleDLCaseProtected ' + bOn + ' ' + oEle.id);
		PropNameRowOnOff('DL_SecurityPersons', bOn);
		PropNameRowOnOff('DL_ADSecurityGroups', bOn);
		if (bOn) {
			PropNameRowClass('DL_CaseProtected','trred');
			PropNameRowClass('DL_SecurityPersons','trred');
			PropNameRowClass('DL_ADSecurityGroups','trred');
		}
		else
			PropNameRowClass('DL_CaseProtected','');
	} catch (e) {alert('EXhandleDLCaseProtected ' + e.message);}
}
function setEXhandleDLCaseState() {
	var oEle = document.getElementById('DL_CaseState');
	oEle.onpropertychange = EXhandleDLCaseState;
	//alert('setEXhandleDLCaseState completed');
}
function EXhandleDLCaseState(oEle1) {
	try {
		var oCaseState = document.getElementById('DL_CaseState');
		var oEle = document.getElementById('DL_EndDate');
		if (oCaseState.checked && oEle.value == '')
			oEle.value = EXGetTodaysDateDK();
	//alert('EXhandleDLCaseState ' + oCaseState.checked);
	} catch (e) {alert('EXhandleDLCaseState ' + e.message);}
}

//25.03.2013 ITcase 1159 / 3977
function Max150Chars(longstring) 
{

	if (longstring.length > 150)
		longstring = longstring.substr(0,150);
       
}

function FTFNySagsfrist(FKeys, FValues) {
	//var oXML = getEntityData2('*','DL_Activities','DL_Id = ' + queryString('DL_Activities'),'');
	//var sTitle = 'Sagsfrist ' + getsafe(oXML, '//DL_CaseNo') + ' på ' + getsafe(oXML,'//DL_Title');
	//if (sTitle.length > 50)
	//	sTitle = sTitle.substr(0,50);
	//sTitle = sTitle.replace(/,/g,' ');
	newentity('DL_Tasks', 'FTF_Sagsfrist,BPM_PctComplete,' + FKeys, '1,0,' + FValues,'view=BPM_DueDate,BPM_Responsible,BPM_Body');
}

function FTFsetActivitiesSecurity(sGroup) {
	var oEle1 = document.getElementById('DL_CaseProtected');
	oEle1.value = '1';
	oEle1 = document.getElementById('DL_ADSecurityGroups');
	if (oEle1.value == '')
		oEle1.value = sGroup;
}

function EXhandleDLCaseType() {
	try {
		var oEle = document.getElementById('DL_CaseType');
		if (oEle == null)
			alert('EXhandleDLCaseType - error');
		switch (oEle.value) {
			case '10' : // General
				PropNameRowOnOff('DL_Responsible,DL_Employee,FTF_Klient,FTF_Lidelsesart,FTF_SkadeType,FTF_ANKEAfgorelse,FTF_ANKESagNr,FTF_AnmeldtAf,FTF_AnmeldtDato,FTF_ASKADEAFgorelse,FTF_ASKADESagNr,FTF_Erhvervssygdomsudvalget,FTF_Genoptaget,FTF_SagAnket', false); // Hide all rows
				break;
			case '20' : // Personale
				PropNameRowOnOff('FTF_Konsulent,FTF_Sekretaer,FTF_Klient,DL_CaseProtected,LO_Fagforbund,FTF_Lidelsesart,FTF_SkadeType,FTF_ANKEAfgorelse,FTF_ANKESagNr,FTF_AnmeldtAf,FTF_AnmeldtDato,FTF_ASKADEAFgorelse,FTF_ASKADESagNr,FTF_Erhvervssygdomsudvalget,FTF_Genoptaget,FTF_SagAnket', false); // Hide all rows
				FTFsetActivitiesSecurity('Personale');
				EXhandleDLCaseProtected(oEle1);
				var oEle1 = document.getElementById('DL_Process');
				if (oEle1.value == '')
					oEle1.value = 'Intern administration og service';
				break;
			case '30' : // Arbejdsskade
				PropNameRowOnOff('DL_Responsible,DL_Employee,DL_StartDate,DL_EndDate,DL_CaseProtected', false); // Hide all rows
				FTFsetActivitiesSecurity('ASkade');
				var oEle1 = document.getElementById('DL_StartDate');
				if (oEle1.value == '')
					oEle1.value = EXGetTodaysDateDK();
				break;
			case '40' : // Erstatningsansvar
				PropNameRowOnOff('DL_CaseProtected,DL_Responsible,DL_Employee,FTF_Lidelsesart,FTF_SkadeType,FTF_ANKEAfgorelse,FTF_ANKESagNr,FTF_AnmeldtAf,FTF_AnmeldtDato,FTF_ASKADEAFgorelse,FTF_ASKADESagNr,FTF_Erhvervssygdomsudvalget,FTF_Genoptaget,FTF_SagAnket', false); // Hide all rows
				break;
			case '50' : // Socialrådgiver
				PropNameRowOnOff('DL_CaseProtected,DL_Responsible,DL_Employee,FTF_Lidelsesart,FTF_SkadeType,FTF_ANKEAfgorelse,FTF_ANKESagNr,FTF_AnmeldtAf,FTF_AnmeldtDato,FTF_ASKADEAFgorelse,FTF_ASKADESagNr,FTF_Erhvervssygdomsudvalget,FTF_Genoptaget,FTF_SagAnket', false); // Hide all rows
				FTFsetActivitiesSecurity('Social');
				break;
			case '60' : // Arbejdsret mv
				PropNameRowOnOff('DL_Responsible,DL_Employee,FTF_Klient,FTF_Lidelsesart,FTF_SkadeType,FTF_ANKEAfgorelse,FTF_ANKESagNr,FTF_AnmeldtAf,FTF_AnmeldtDato,FTF_ASKADEAFgorelse,FTF_ASKADESagNr,FTF_Erhvervssygdomsudvalget,FTF_Genoptaget,FTF_SagAnket', false); // Hide all rows
				break;
			case '70' : // Juridisk sag, ASA
				PropNameRowOnOff('DL_Responsible,DL_Employee,FTF_Klient,FTF_Lidelsesart,FTF_SkadeType,FTF_ANKEAfgorelse,FTF_ANKESagNr,FTF_AnmeldtAf,FTF_AnmeldtDato,FTF_ASKADEAFgorelse,FTF_ASKADESagNr,FTF_Erhvervssygdomsudvalget,FTF_Genoptaget,FTF_SagAnket', false); // Hide all rows
				break;
			default:
				//alert('Que ' + oEle.value);
				break;
		}
	//alert('EXhandleDLCaseState ' + oCaseState.checked);
	} catch (e) {alert('EXhandleDLCaseType ' + e.message);}
}

// Loads DynamicForm with specific fields for various case types
function EXhandleDLCaseTypeView() {
}
function EXsethandleFTFKlient() {
	var oEle = document.getElementById('FTF_KlientDenorm');
	oEle.attachEvent('onchange', EXhandleFTFKlient);
//alert('EXsethandleFTFKlient');
}
function EXhandleFTFKlient() {
	var oKlient = document.getElementById('FTF_Klient');
	var oEle = document.getElementById('FTF_KlientDenorm');
//alert('EXhandleFTFKlient ' + oKlient.value + ' ' + oEle.value);
	if (oEle.value != '' && oEle.value.indexOf(':') == -1) { // (oKlient.value == '' || oKlient.value == '0')) {
		var oXML = getEntityData('FTF_Klient','HR_CPRNR = \'' + oEle.value + '\'','');
//alert(oXML.xml);
		if (getsafe(oXML, '//DL_Id') == '') {
			if (confirm('Klienten findes ikke - opret ham?')) {
alert('now open new window');
				newentity('FTF_Klient','HR_CPRNR',oEle.value,null,true);
			}
		}
	}

}

function FTFHentLidelsesart() {
	var oEle = document.getElementById('FTF_Skadetype');
	FillDropDown('FTF_Lidelsesart','FTF_LidelsesartView','FTF_LidelsesartKEY','','FTF_SkadetypeKEY',oEle.value);
}

//15-04-2008
function FTFSoegSag() {
alert(1);
	EXDoDynamicSearch('DL_CaseNo','DL_CMAllView','','','DL_CaseNo,DL_Title,DL_Responsible','','', 'parent.DLPostboxhandleCaseNo();','DL_CaseNo');
}

//JW 130907
function EXhandleDLWFCaseEntity() {
	var oEle = document.getElementById('DL_WFCaseEntity');
	var oEle2 = document.getElementById('DL_FolderPathForeign');
//alert(oEle.value + ' ' + oEle2.value);
	FillDropDown('DL_FolderPathForeign','DL_D810View','DL_Id','DL_Title2','DL_EntityNameForeign',oEle.value,oEle2.value);
}

function EXhandleDLPhraseType() {
	var oEle = document.getElementById('DL_PhraseType');
	if (oEle == null)
		return;
	if (oEle.value == '2')
		PropNameRowOnOff('DL_TextBox', false);
}

function EXHandleMailTemplate() {
// 15.4.2008 - FIX THIS ASAP
	var oEle = document.getElementById('DL_HTMLText');
	if (oEle == null) {
		return;
	}
	if (oEle.value != '' && oEle.value != ' ' ) {
		return;
	}

	var ForeignKeys = queryString('ForeignKeys');
	var ForeignValues = queryString('ForeignValues');
	var aKeys = ForeignKeys.split(',');
	var aValues = ForeignValues.split(',');
	var ITMailTemplate;
	var DLEntityNameForeign;
	var DLEntityId;
	for (var i=0; i < aKeys.length; i++) {
		switch (aKeys[i]) {
		case 'DL_EntityNameForeign' : DLEntityNameForeign = aValues[i]; break;
		case 'DL_EntityId' : DLEntityId = aValues[i]; break;
		case 'IT_MailTemplate' : ITMailTemplate = aValues[i]; break;
		}
	}
	if (ITMailTemplate == '')
		return;
	var o;
	var oXML = getEntityData('IT_MailTemplate','DL_Id = ' + ITMailTemplate,'');
	var sHTML = getsafe(oXML, '//DL_HTMLText');

	var xSag = getEntityData(DLEntityNameForeign, 'DL_Id = ' + DLEntityId, '');
	sHTML = sHTML.replace('#Titel#',getsafe(xSag, '//DL_Title'));
	sHTML = sHTML.replace(/#Id#/g,getsafe(xSag, '//DL_Id'));
	sHTML = sHTML.replace('#Oprettet af#',GetEntityItemValue('IT_CaseView',DLEntityId,'DL_FullName'));
	sHTML = sHTML.replace('#Levnavn#',GetEntityItemValue('IT_CaseView',DLEntityId,'IT_SupplierName'));
	sHTML = sHTML.replace('#Beskrivelse#',getsafe(xSag, '//DL_TextBox'));
	sHTML = sHTML.replace('#her#','<a href="http://intranet/Delte dokumenter/ITSupport.aspx?IT_Case=#DL_Id#&DL_FolderParams=#DL_FolderParams#">her</a>');
	sHTML = sHTML.replace('#Luk#','<a href="http://intranet/EX_CUSTOM/JS/CloseITCase.HTML?IT_Case=#Id#" target="_blank">LUK</a>');
	sHTML = sHTML.replace('#Genbehandle#','<a href="http://intranet/EX_CUSTOM/JS/ReopenITCase.HTML?IT_Case=#Id#" target="_blank">ÅBEN</a>');
	sHTML = sHTML.replace(/#Id#/g,getsafe(xSag, '//DL_Id'));
	sHTML = sHTML.replace(/&#198;/g,'Æ');
	sHTML = sHTML.replace(/&#216;/g,'Ø');
	sHTML = sHTML.replace(/&#197;/g,'Å');
	sHTML = sHTML.replace(/&#230;/g,'æ');
	sHTML = sHTML.replace(/&#248;/g,'ø');
	sHTML = sHTML.replace(/&#229;/g,'å');
	oEle.value = sHTML;
}


function EXHandleFromMail() {
	var oEle1 = document.getElementById('DL_FromMail');
	if (oEle1 == null)
		return;
	var bShow = false;
	if (oEle1.value != '') {
		bShow = true;
	}
	else
	{
		var ForeignKeys = queryString('ForeignKeys');
		if (ForeignKeys != '') {

			if (ForeignKeys.indexOf('IT_MailTemplate') != -1)
			{
				bShow = true;
			}
		}
		else 
		{
			var oEle2 = document.getElementById('IT_MailTemplate');
			if (oEle2 != null) {
				if (oEle2.value != '')
				bShow = true;
			}
		}
	}
	if (bShow == true)
	{
		PropNameRowOnOff('DL_FromMail',true);
		if (oEle1.value == '')
			oEle1.value = 'info@exformatics.com' 

	}
	else {
		PropNameRowOnOff('DL_FromMail,IT_MailTemplate,IT_MailSent',false);
	}

}

//10-04-2008 JW kopieret fra FTF

function FTFShowHTMLNotes(DLEntityNameForeign, DLEntityId, bPrint) {
	if (bPrint) {
		var win = window.open('http://intranet/EX_SQLSVC/DynamicList.html?DLEntity=DL_HTMLDocuments&DLView=DL_HTMLNotesView&Where=DL_EntityNameForeign = \'' + DLEntityNameForeign + '\' and DL_EntityId = ' + DLEntityId + '&OrderBy=DL_Modified DESC&PropList=DL_Title&Action=none','Journalark');
		var WebBrowser = '<OBJECT ID="WebBrowser1" WIDTH=0 HEIGHT=0 CLASSID="CLSID:8856F961-340A-11D0-A96B-00C04FD705A2"></OBJECT>';
	var oEle = win.document.getElementById('EXDSResultDiv');
//alert(oEle);
		oEle.insertAdjacentHTML('beforeEnd', WebBrowser);
		win.document.body.WebBrowser1.ExecWB(7,2);


			
	}
	loadcontent2('http://intranet/EX_SQLSVC/DynamicList.html?DLEntity=DL_HTMLNotes&DLView=DL_HTMLNotesView&Where=DL_EntityNameForeign = \'' + DLEntityNameForeign + '\' and DL_EntityId = ' + DLEntityId + '&OrderBy=DL_Modified DESC&PropList=DL_Title&Action=none','Journalark');
}


//JW 15-04-2008 hentet fra FTF

function DLPostboxhandleCaseNo() {
	var oEle = document.getElementById('DL_sAMAccountNameForeign');
	if (oEle == null)
		return;
	//alert(oEle.value);
	var oEle1 = document.getElementById('DL_CaseNo');
	if (oEle1 == null)
		return;
	//alert('DLPostboxhandleCaseNo ' + oEle.value + '-' + oEle1.value);
	if (oEle1.value != '' && oEle.value == '') {
		var oXML = getEntityData('DL_CMAllView','DL_CaseNo = \'' + oEle1.value + '\'','');
		var s = getsafe(oXML, '//DL_Responsible');
		if (s != '')
			oXML = getEntityData('DL_sAMAccountName','DL_sAMAccountName = \'' + s + '\'','');
		var sPostbox = getsafe(oXML, '//DL_Postbox');
		oEle1 = document.getElementById('DL_Postbox');
		if (oEle1 != null && sPostbox != '') { // 15.4.2008 - WHAT DOES THIS CODE REALLY DO???
			oEle1.value = sPostbox;
			DLPostboxSetEmployee();
//alert(s + ' ' + sPostbox);
		}
		oEle = document.getElementById('DL_sAMAccountNameForeign');

		//alert(s + ' ' + oXML.xml);
		oEle.value = s;
	}
}
function LOGotoPostbox() { // 27.11.2014
	var s = '/Postbakke/Pages/default.aspx?DL_PostBox=21&Initialer=' + GetEntityItemWhere('DL_sAMAccountName','DL_sAMAccountName=%DL_sAMAccountName%','DL_sAMAccountName');
//alert(s);
	EXGotoUrl(s);
}
function SendITEmail(DLCaseNote)
{
	var xCaseNote = getEntityData('IT_CaseNotes', 'DL_Id = ' +DLCaseNote, '');
	var DLBody = getsafe(xCaseNote, '//DL_HTMLText');
	var TemplateId = getsafe(xCaseNote, '//IT_MailTemplate');
	var ITCase = getsafe(xCaseNote, '//DL_EntityId');
	var xSag = getEntityData('IT_Case', 'DL_Id = ' + ITCase, '');
	var ITCaseTitle = getsafe(xSag, '//DL_Title');
	var ITCaseUser = getsafe(xSag, '//DL_CreatedByUser');
	var ITEmailTo = getsafe(xCaseNote, '//DL_ToMail');

	var DLMailType = GetEntityItemValue('IT_MailTemplate',TemplateId,'IT_EmailRecipientType');
	var DLMailFrom = ''; //'ITSupport@alka.dk';

	var outlookApp;
	outlookApp = getOutlook();
	if (outlookApp == null) {
		outlookApp = null;
	}
	else {
		try {
			var oItem;
			var sOldBody = '';
			var oDoc;

			oItem = outlookApp.CreateItem(0);
			oItem.HTMLBody = DLBody;
			oItem.Subject = 'IT Support: ' + ITCaseTitle;
			oItem.SentOnBehalfOfName = DLMailFrom;
			oItem.To = ITEmailTo;
			oItem.Display();
			//alert('newjournal(' + DL_Company + ',' + name + ',' + type1 + ')');
			outlookApp = null;
			oItem = null;
			var today = new Date();
	var sYear  = today.getFullYear();
	var sMonth = today.getMonth() + 1;
	var sDay  = today.getDate();
	var sHours = today.getHours();
	var sMinutes = today.getMinutes();

			SetEntityItemValue('IT_CaseNotes',DLCaseNote,GetEntityItemValue('IT_CaseNotes',DLCaseNote,'DL_Modified'),'IT_MailSent',sYear + '-' + sMonth + '-' + sDay + ' ' + sHours + ':'  + sMinutes);
//			alert('SetEntityItemValue');
		}
		catch (e) { alert('exception'); }
	}
}
//alert('Exformatics_cust.js loaded');
function RKRGotoCase(DLCaseNo) { // 25.2.2008
//alert('EXGotoCase(' + DLCaseNo + ')');
	var oXML;
	if (DLCaseNo.indexOf('-') == -1) { // 29.9.2008
		var s = EXGetTodaysDate();
		if (DLCaseNo.length < 4)
			DLCaseNo = '0' + DLCaseNo;
		if (DLCaseNo.length < 4)
			DLCaseNo = '0' + DLCaseNo;
		if (DLCaseNo.length < 4)
			DLCaseNo = '0' + DLCaseNo;
		DLCaseNo = s.substr(2,2) + '-' + DLCaseNo;
	}
	if (DLCaseNo.length >= 7)
		oXML = getEntityData('RKR_Activities','DL_CaseNo = \'' + DLCaseNo + '\'', '');
	else
		oXML = getEntityData('RKR_Activities','DL_CaseNo LIKE \'' + DLCaseNo + '%\'', '');
	var sId = getsafe(oXML, '//DL_Id');
	if (sId != '')
		EXGotoObject('RKR_Activities', sId);
	else { // 9.9.2008
		//var LEXCannotFindCase = 'Cannot find case {0}';
		var LEXCannotFindCase = 'Kan ikke finde sag {0}';
		alert(LEXCannotFindCase.format(DLCaseNo));
	}
}
function EXRolloutEmployeeCases(HRID) {
alert('2');
	var oXML  = getEntityData('DL_Employee', 'DL_HRID = \'' + HRID + '\'', '');
alert('1');
	loadcontent2(getAbsoluteURL('/EX_SQLSVC/DynamicList.html?DLEntity=DL_CaseTemplates&PropList=checkbox,DL_Title&Action=none&y=1003&ClickAction=543&ForeignKeys=DL_Name,DL_Manager&ForeignValues=' + getsafe(oXML, '//DL_Name') + ',' + HRID),'Udrul sager for ' + getsafe(oXML, '//DL_Name'));
}
// CN_PublishDocBasket
function CN_PublishDocBasket(DLId)
{
	ExecuteProcedure('dbo.EXPublishDocBasket @DLEntityNameForeign = \'DL_DocPublishing\', @DLEntityId = ' + DLId + ',@WUser = \'\'');
}
function EXGotoOpenDepartmentTasks() {
EXGotoUrl('http://servsagssystem/Pages/Aabneafdelingsopgaver.aspx');
//	alert('Not implemented yet - Exformatics_cust.js');
}

function TV2EditExponering(key, date, DLId) {
//alert('TV2EditBooking ' + DLId);
	var oXML = getEntityData('DL_Exponering', 'DL_Id = ' + DLId, '');
	var TV2Element = getsafe(oXML, '//TV2_ElementMedie');
	var DLBookingType = getsafe(oXML, '//DL_ExponeringType');
	var sTitle;
	if (DLBookingType == 'Ferie' || DLBookingType == 'Sygdom')
		sTitle = DLBookingType;
	else {
		oXML = getEntityData('TV2_ElementView', 'DL_Id = ' + TV2Element, '');
		sTitle = getsafe(oXML, '//TV2_KampagneTitle');
	}
	var url = getAbsoluteURL('/EX_SQLSVC/DynamicForm.aspx?update=true&DL_ENTITY=DL_Booking&where=DL_Id=' + DLId + '&PageTitle=' + sTitle + '&check=' + Math.random());
	
	modalDialog.dialog('open');	
	modalDialog.dialog( "option", "title", 'Rediger exponering for ' + key + ' den ' + date );
	modalDialog.html('<iframe id="JQInfo" frameborder="0" width="100%" height="95%" src="'+url+'" ></iframe>');
}

function TV2EditBooking(key, date, DLId) {
//alert('TV2EditBooking ' + DLId);
	var oXML = getEntityData('DL_Booking', 'DL_Id = ' + DLId, '');
	var TV2Element = getsafe(oXML, '//TV2_Element');
	var DLBookingType = getsafe(oXML, '//DL_BookingType');
	var sTitle;
	if (DLBookingType == 'Ferie' || DLBookingType == 'Sygdom')
		sTitle = DLBookingType;
	else {
		oXML = getEntityData('TV2_ElementView', 'DL_Id = ' + TV2Element, '');
		sTitle = getsafe(oXML, '//TV2_KampagneTitle');
	}
	var url = getAbsoluteURL('/EX_SQLSVC/DynamicForm.aspx?update=true&DL_ENTITY=DL_Booking&where=DL_Id=' + DLId + '&PageTitle=' + sTitle + '&check=' + Math.random());
	
	modalDialog.dialog('open');	
	modalDialog.dialog( "option", "title", 'Rediger booking for ' + key + ' den ' + date );
	modalDialog.html('<iframe id="JQInfo" frameborder="0" width="100%" height="95%" src="'+url+'" ></iframe>');
}

function TV2CreateBooking(key, date, bookingType) {
	var oXML = getEntityData('DL_sAMAccountName', 'DL_Name = \'' + key + '\'', '');
	var sAMAccountName = getsafe(oXML, '//DL_sAMAccountName/DL_sAMAccountName');
	var url = '';

	if (bookingType != '') {
    	url = getAbsoluteURL('/EX_SQLSVC/DynamicForm.aspx?new=true&DL_ENTITY=DL_Booking&DefaultKeys=TV2_Resource,DL_StartDate,DL_BookingType&DefaultValues=' + sAMAccountName + ',' + date + ',' + bookingType + '&PageTitle=Opret ' + bookingType.toLowerCase() + '-booking for ' + key + ' den ' + date + '&check=' + Math.random());
	} else {
		url = getAbsoluteURL('/EX_SQLSVC/DynamicSearch.html?DLEntity=TV2_ElementView&SearchParameters=TV2_KampagneTitle,TV2_Season,TV2_Customer,TV2_TrailerDate,TV2_ProgramDate,TV2_ProdType:Trailer&ClickAction=Create,DL_Booking,DL_Id:::,TV2_Element:DL_sAMAccountNameForeign:DL_StartDate:DL_BookingType,:' + sAMAccountName + ':' + date + ':Element,Opret booking for ' + key + ' den ' + date + '&&check=' + Math.random());
	}
//	EXCopyToClipboard(url);
	
	// Til brug for titel
	if (bookingType == '') bookingType = 'booking';
	modalDialog.dialog('open');	
	modalDialog.dialog( "option", "title", 'Opret '+bookingType.toLowerCase()+' for ' + key + ' den ' + date );
	modalDialog.html('<iframe id="JQInfo" frameborder="0" width="100%" height="95%" src="'+url+'" ></iframe>');
}

function TV2CreateMilestone(date, sElement) {
		var sTitle = '';
	var url = getAbsoluteURL('/EX_SQLSVC/DynamicForm.aspx?new=true&DL_ENTITY=DL_Milestone&DefaultKeys=TV2_Element,DL_DueDate&DefaultValues=' + sElement + ',' + date + '&PageTitle=' + sTitle + '&check=' + Math.random());
	
	modalDialog.dialog('open');	
	modalDialog.dialog( "option", "title", 'Opret milestone den ' + date );
	modalDialog.html('<iframe id="JQInfo" frameborder="0" width="100%" height="95%" src="'+url+'" ></iframe>');	
}
function EXShowWFCaseType(DLEntityNameForeign, DLWFCaseType) {
	loadcontent2('/EX_Resources/EXExformation.html?DL_EntityNameForeign=DL_WFCaseType&DL_EntityId=' + DLWFCaseType,LEX_KnowledgeExchanges);

	// Load several lists
	var oXML = getEntityData('DL_WFCaseType', 'DL_Id=' + DLWFCaseType, '');
	var DLsAMAccountNameForeign = getsafe(oXML, '//DL_sAMAccountNameForeign');
	var xOwner = getEntityData('DL_sAMAccountName','DL_sAMAccountName = \'' + DLsAMAccountNameForeign + '\'', '');
	var DLURLImage = getsafe(xOwner, '//DL_URLImage');
	var DLName = getsafe(xOwner, '//DL_Name');

	var sTable;

	// Entity detail
	sTable = '<table>';
	sTable += AddTableRow('Title', '<a href="javascript:" onclick="loadentity(\'DL_WFCaseType\', ' + DLWFCaseType + ')">' + getsafe(oXML, '//DL_Title') + '</a>');
	sTable += AddTableRow('Owner', DLName + (DLURLImage==''?'':'<img border="0" src="' + DLURLImage + '" width="32px"></img>'));
	var sDesc = getsafe(oXML, '//DL_HTMLText');
	sDesc = sDesc.replace('PHASEDESCRIPTION', '');
	if (sDesc != '')
		sTable += '<tr><td class="ms-vb" colspan="2">' + sDesc + '</td></tr>';
	sTable += '</table>';
	var oEle = document.getElementById('EXWFCaseTypeHeader');
	oEle.innerHTML = sTable;

	// Usage
	oEle = document.getElementById('EXWFCaseTypeUsage');
oEle.innerHTML = '2';

	// Distribution
	oEle = document.getElementById('EXWFCaseTypeDistribution');
/*
       google.load("visualization", "1", {packages:["corechart"]});
       google.setOnLoadCallback(
	function () {
		var oPhases = getEntityData('DL_WFCaseTypePhase','DL_WFCaseType = ' + DLWFCaseType + ' AND isnull(DL_WFCaseIsComplete, 0) = 0', 'DL_SequenceNo');
		DoDraw(DLEntityNameForeign, oPhases);
	}
);
*/

oEle.innerHTML = '<iframe frameborder="0" width="100% height="480px" id="EXWFCaseTypeDistributionIFRAME"></iframe>';
	loadcontent('http://intranet/EX_Resources/EXWFPhaseStatistics.html?DL_WFCaseType=' + DLWFCaseType, 'EXWFCaseTypeDistributionIFRAME');

	// Last modified
	oEle = document.getElementById('EXWFCaseTypeLatest')
	EXshowListData('EXWFCaseTypeLatest',DLEntityNameForeign,'DL_WFCaseType=' + DLWFCaseType,'DL_Modified DESC','DL_ProjectName,DL_LastModified,DL_LastModifiedBy','javascript:EXGotoObject(\'' + DLEntityNameForeign + '\',%DL_Id%)','','',false,'','5');
//oEle.innerHTML = '4';

	// Active users
	oEle = document.getElementById('EXWFCaseTypeActiveUsers');
	var xUsers = getEntityData2('DL_sAMAccountName,DL_Name,DL_URLImage','DL_sAMAccountName', '', '');
	var oUsers = getEntityData3('top 5 DL_LastModifiedBy,count(*) as Count',DLEntityNameForeign,'DL_WFCaseType=' + DLWFCaseType + ' AND NOT DL_LastModifiedBy is null','2 DESC','DL_LastModifiedBy');
	var xNodes = oUsers.selectNodes('//' + DLEntityNameForeign);
	var content, sAMAccountName, j, xUser;
	sTable = '<table>';
	for (var i=0;i<xNodes.length;i++) {
		sAMAccountName = getsafe(xNodes[i], 'DL_LastModifiedBy');
		j = sAMAccountName.indexOf('\\');
		if (j>0)
			sAMAccountName = sAMAccountName.substr(j+1);
		xUser = xUsers.selectSingleNode('//DL_sAMAccountName[DL_sAMAccountName=\'' + sAMAccountName + '\']');
//alert(sAMAccountName + ' ' + xUser);
		content = '<img width="32px" border="0" alt="' + getsafe(xUser, 'DL_Name') + '" src="' + getsafe(xUser, 'DL_URLImage') + '"></img>'  + getsafe(xNodes[i], 'Count');
		sTable += AddTableRow('', content);
	}
	sTable += '</table>';
	oEle.innerHTML = sTable;
}
function DoDraw(DLWFCaseEntity, oPhases) {
	data = new google.visualization.DataTable();
	data.addColumn('string', 'Phase');
	data.addColumn('number', 'Total');
	data.addColumn('number', 'Overdue');
	var xNodes = oPhases.selectNodes('//DL_WFCaseTypePhase');
	var sWhere = 'isnull(DL_CaseState,0) = 0 AND DL_WFCaseType = ' + DLWFCaseType;

	var xCase = getEntityData3('isnull(DL_CaseLongState,0) as DL_CaseLongState,count(*) as Count',DLWFCaseEntity,sWhere,'DL_CaseLongState','DL_CaseLongState');
	var xOverdue;
	if (DLWFCaseEntity == 'IT_Case')
		xOverdue = getEntityData3('DL_CaseLongState,count(*) as Count',DLWFCaseEntity,sWhere + ' AND DL_DueDate < getdate()','DL_CaseLongState','DL_CaseLongState');
	else
		xOverdue = getEntityData3('DL_CaseLongState,count(*) as Count',DLWFCaseEntity,sWhere + ' AND EXISTS (SELECT DL_Id from DL_CaseMilestones where DL_EntityNameForeign=\'' + DLWFCaseEntity +'\' AND DL_EntityId = ' + DLWFCaseEntity + '.DL_Id AND DL_SequenceNo = ' + DLWFCaseEntity + '.DL_CaseLongState AND DL_DueDate < getdate())','DL_CaseLongState','DL_CaseLongState');
         data.addRows(xNodes.length);
	var DLTitle, DLCount, DLSequenceNo, DLOverdue;
	for (var i=0; i<xNodes.length;i++) {
		DLTitle = getsafe(xNodes[i], 'DL_Title');
		DLSequenceNo = getsafe(xNodes[i], 'DL_SequenceNo');
		DLCount = getsafe(xCase,'//' + DLWFCaseEntity + '[DL_CaseLongState=' + DLSequenceNo + ']/Count');
		DLOverdue = getsafe(xOverdue,'//' + DLWFCaseEntity + '[DL_CaseLongState=' + DLSequenceNo + ']/Count');
		if (DLOverdue == '')
			DLOverdue = '0';
		data.setValue(i, 0, DLTitle); // Phase
		data.setValue(i, 1, 1 * DLCount);
		data.setValue(i, 2, 1 * DLOverdue);	
	}
	chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	chart.draw(data, {width: 400, height: 240, title: 'Cases by phase',                           
hAxis: {title: 'Phase', titleTextStyle: {color: 'red'}}                          });

google.visualization.events.addListener(chart,'select',ChartSelectionHandler); 

} 

function LONewMeeting(Entity,Id) { // 9.3.2009
	var DLEntity = queryString('ForeignKeys');
	var DLId = queryString('ForeignValues');
	var aValues = DLId.split(',');
	Entity = aValues[0];
	Id = aValues[1];
	if (!confirm('M\370de oprettet - opret nyt m\370de?')) {
		EXReload();
		return;
	}
	//alert('LONewMeeting(' + Entity + ',' + Id + ')');
	parent.newentity('LO_SuggestMeetingDate','DL_EntityNameForeign,DL_EntityId,LO_SuggestMeetingOrigin',Entity + ',' + Id + ',LO','Action=646');
}
function LOSetPersonAddressPrimary(DLId) {
  var oXML = getEntityData('DL_PersonAddress','DL_Id=' + DLId,'');
  SetEntityItemValue('DL_PersonAddress',DLId,getsafe(oXML,'//DL_Modified'),'DL_IsPrimaryAddress','1');
  EXReload();
}

function LOSetPersonEmailPrimary(DLId) {
  var oXML = getEntityData('DL_Communication','DL_Id=' + DLId,'');
  SetEntityItemValue('DL_Communication',DLId,getsafe(oXML,'//DL_Modified'),'DL_CommunicationTypePrimary','1');
  EXReload();
}

function LOSetOrganisationAddressPrimary(DLId) {
  var oXML = getEntityData('DL_OrganisationAddress','DL_Id=' + DLId,'');
  SetEntityItemValue('DL_OrganisationAddress',DLId,getsafe(oXML,'//DL_Modified'),'DL_IsPrimaryAddress','1');
  EXReload();
}
function FEAGotoPerson(DL_Id) {
	// LH+MMQ 5/10 2012 Changed to solve IT Case 1115
	EXGotoObject('DL_Person',DL_Id);
}
function LOEUCockpitLoadEntity(DLEntityNameForeign, DLEntityId) { 
    
	var oDiv = parent.document.getElementById('LOEUCockpitEntityDetail');
	var xSag = getEntityData(DLEntityNameForeign, 'DL_Id = ' + DLEntityId, '');
	var responsible = '';
	var responsibles = xSag.selectNodes('//DL_Responsible');
	
	// 2964: 31 jan 2012 js/maig  - responsible / responsibles
	//
	
	for(var i = 0; i < responsibles.length; i++){
	    var node = responsibles[i];
		
	    if(node.firstChild.nodeValue && node.firstChild.nodeValue.length != 0) { 
			responsible += ' @' + node.firstChild.nodeValue + ' '; // 1112 LH/MAIG 14-9 2012
			
		}
	}
	
	var userProfile = ExecuteProcedure("EXGetUserProfile @sAMAccountName = '" + responsible + "'");
	//alert(userProfile.xml);
    var fullName = getsafe(userProfile, '//DL_FullName');
    var phone = getsafe(userProfile, '//DL_Phone');
	var sExtra = getsafe(xSag, '//DL_Fagkonsulent');
	var sFagkonsulent = '';
	if (sExtra != '') {
		
		var xFagK = getEntityData('DL_sAMAccountName', 'DL_sAMAccountName = \'' + sExtra + '\'', '');
		sFagkonsulent = 'Fagkonsulent: ' + getsafe(xFagK, '//DL_Name') + '<br/>';
		sExtra = ' @' + sExtra + ' ';
		
	}

	var sInfo = getsafe(xSag, '//DL_Info');
	if (sInfo != '') {
		
		sInfo = sInfo.replace(/;/g, ' @');
		if (sInfo.length-1 == sInfo.lastIndexOf('@')) {
			sInfo = sInfo.substr(0,sInfo.length-1);
		}
		
		 // 1112 LH/MAIG 14-9 2012
		if (sInfo.indexOf(' @') > 0) {
			sInfo = ' @' + sInfo;
		}		
		if (sInfo.indexOf('@') == -1) {
			sInfo = ' @' + sInfo;
		}
			
		sExtra += sInfo;  // ' @' Also part of 2964 See also: below str\370mmen: ' was earlier: str\370mmen: @'
	}


 

var ss=
		'<table width="90%">\
		    <tr>\
		        <td width="50%">\
		            <table style="border-style: solid; border-width:1px;" width="100%">\
		                <tr>\
		                    <td width="100%">\
		                        <h3 class="ms-standardheader ms-WPTitle">\
		                            <span><a href="javascript:" title="Til sag" onclick="EXGotoObject(\'' + DLEntityNameForeign + '\',' + DLEntityId + ')">' + getsafe(xSag, '//DL_Title') + '</a></span>\
		                        </h3>\
		                    </td>\
		                </tr>\
		                <tr>\
		                    <td>\
		                        Sagsansvarlig: ' + fullName + '<br/>Telefon: ' + phone + '<br/>' + sFagkonsulent + '<br/><a href="#" title="Besked, direkte i ' + responsible + 's inbox" onclick="top.frames[1].FocusExformation(\''
		                            + responsible + sExtra
		                            + ' \');return false;">L\346g en besked til sagsansvarlig i str\370mmen: ' 
		                            + responsible + sExtra +
		                        '</a>\
		                    </td>\
                        </tr>\
                    </table>\
                </td>\
            </tr>\
        </table>';

	oDiv.innerHTML = ss;
	parent.EXLoadActivityStream(DLEntityNameForeign,DLEntityId,false,0);
//        parent.loadcontent(getAbsoluteURL('/EX_Resources/EXExformation.html?DL_EntityNameForeign=' 
//        + DLEntityNameForeign + '&DL_EntityId=' + DLEntityId) + '&DLType=0', '', 'Aktivitetsstr\370m: ' + getsafe(xSag, '//DL_Title'));
}
function LONySagslog(DLEntityNameForeign, DLEntityId) { // 6.8.2008
	var oXML = getEntityData('LO_CaseLog','DL_EntityNameForeign = \'' + DLEntityNameForeign + '\' AND DL_EntityId = ' + DLEntityId,'');
	if (getsafe(oXML, '//DL_Id') == '') {
		newentity('LO_CaseLog','DL_EntityNameForeign,DL_EntityId',DLEntityNameForeign + ',' + DLEntityId);
	}
	else {
		if (window.event) { // 23.2.2009
			if (window.event.ctrlKey) {
				var sUrl = getLoadEntityUrl('LO_CaseLog', getsafe(oXML, '//DL_Id'));
				
				var ew = window.open(sUrl);
				ew.focus();
				return;
			}
		}
		loadentity('LO_CaseLog', getsafe(oXML, '//DL_Id'));
	}
}
function LONewCaseAddress(CaseAddressType, DLEntityNameForeign, DLEntityId) { // 4.1.2009
	var sForeignKeys = 'DL_EntityNameForeign,DL_EntityId,DL_CaseAddressType';
	var sForeignValues = '' + DLEntityNameForeign + ',' + DLEntityId + ',' + CaseAddressType;
	switch(CaseAddressType) {
	case 1: // Explicit
		newentity('DL_CaseAddresses',sForeignKeys,sForeignValues);
		break;
	case 77: // FEA Person
		var sUrl = getAbsoluteURL('/EX_SQLSVC/DynamicSearch.html?DLEntity=DL_PersonOrganisationSearchView&ForeignKeys=' + sForeignKeys + '&ForeignValues=' + sForeignValues + '&SearchParameters=DL_Name,DL_OrganisationTitle&DisplayParameters=DL_Name,DL_OrganisationTitle&Tooltip=Choose value&ClickAction=533&SearchOnLoad=false&Pro1pName=DL_Contacts&XPat1hDLId=DLContactID&CaseType=77');
		loadcontent2(sUrl, 'Opret FEA person som ' + LEXCaseAddress);
		break;
	case 99: // Medarbejder
		var sUrl = getAbsoluteURL('/EX_SQLSVC/DynamicSearch.html?DLEntity=DL_sAMAccountName&ForeignKeys=' + sForeignKeys + '&ForeignValues=' + sForeignValues + '&SearchParameters=DL_FullName,DL_JobTitle&DisplayParameters=DL_FullName,DL_JobTitle&Tooltip=Choose value&ClickAction=533&SearchOnLoad=false&PropName=DL_Contacts&CaseType=99');
		loadcontent2(sUrl, 'Opret medarbejder som ' + LEXCaseAddress); // 16.12.2008
		break;
	}
}
function LONewCaseActor(CaseActorType, DLEntityNameForeign, DLEntityId) { // 26.12.2008
//alert('LONewCaseActor(' + CaseActorType + ',' + DLEntityNameForeign + ',' + DLEntityId + ') started');
	switch(CaseActorType) {
	case 10: // Hovedorganisation - D760,LO_DAOrganiseretCodes
		loadcontent2(getAbsoluteURL('/EX_SQLSVC/DynamicSearch.html?DLEntity=DL_D760&WhereExtra=DL_PropDictionary=\'LO_DAOrganiseretCodes\'&SearchParameters=DL_PropCodeDecode&Rows=16&SearchOnLoad=true&ClickAction=610&ForeignKeys=DL_CaseActorType,DL_EntityNameForeign,DL_EntityId&ForeignValues=10,' + DLEntityNameForeign + ',' + DLEntityId),'Opret sagsakt\370r - hovedorganisation');
		break;
	case 20: // Organisation - DA m.fl. medlemsorganisationer - kan vi søge dem i FEA?
		loadcontent2(getAbsoluteURL('/EX_SQLSVC/DynamicSearch.html?DLEntity=DL_Organisation&WhereExtra=DL_OrganisationType=\'ARBGIV\' AND DL_Add=1&SearchParameters=DL_Title,DL_ParentOrganisationDenorm&Rows=16&SearchOnLoad=true&ClickAction=612&ForeignKeys=DL_CaseActorType,DL_EntityNameForeign,DL_EntityId&ForeignValues=20,' + DLEntityNameForeign + ',' + DLEntityId),'Opret sagsakt\370r - organisation');
		break;
	case 30: // Firma
		newentity2('DL_CaseActor','DL_CaseActorType,DL_EntityNameForeign,DL_EntityId','30,' + DLEntityNameForeign + ',' + DLEntityId,'','Opret ny sagspart: firma');
		break;
	case 40: // Advokat
		newentity('DL_CaseActor','DL_CaseActorType,DL_EntityNameForeign,DL_EntityId','40,' + DLEntityNameForeign + ',' + DLEntityId,'','Opret ny sagspart: advokat');
		break;
	case 50: // Hovedforbund - altid LO selv - meningsløst at oprette
		alert('LO vil altid v\346re hovedforbund p\345 sager. Kan derfor ikke oprette.');
		break;
	case 60: // Forbund - DL_EXCompany, DL_CompanyShort:DL_EXCompany, where DL_AddressType=100
		loadcontent2(getAbsoluteURL('/EX_SQLSVC/DynamicSearch.html?DLEntity=DL_EXCompany&WhereExtra=DL_AddressType=100&SearchParameters=DL_CompanyShort,DL_EXCompany&Rows=16&SearchOnLoad=true&ClickAction=611&ForeignKeys=DL_CaseActorType,DL_EntityNameForeign,DL_EntityId&ForeignValues=60,' + DLEntityNameForeign + ',' + DLEntityId),'Opret sagsakt\370r - forbund');
		break;
	case 70: // Advokat (fagforbund)
		newentity('DL_CaseActor','DL_CaseActorType,DL_EntityNameForeign,DL_EntityId','70,' + DLEntityNameForeign + ',' + DLEntityId,'','Opret ny sagspart: advokat (fagforbund)');
		break;
	case 80: // Andet
		newentity('DL_CaseActor','DL_CaseActorType,DL_EntityNameForeign,DL_EntityId','80,' + DLEntityNameForeign + ',' + DLEntityId,'','Opret ny sagspart: andet');
		break;
	}
}
function LONewCaseActorHovedorganisation(DLId, ForeignKeys, ForeignValues) {
	var oXML = getEntityData('DL_D760','DL_Id = ' + DLId, '');
	var title = getsafe(oXML, '//DL_PropCodeDecode');
	var s = '<DL_CaseActor><DL_Title>' + MakeXMLSafe(title) + '</DL_Title>';
	var aKeys = ForeignKeys.split(',');
	var aValues = ForeignValues.split(',');
	for (var i=0;i<aKeys.length;i++) {
		s += '<' + aKeys[i] + '>' + aValues[i] + '</' + aKeys[i] + '>';
	}
	s += '<DL_EntityNameForeign2>DL_D760</DL_EntityNameForeign2>';
	s += '<DL_EntityId2>' + DLId + '</DL_EntityId2>';
	s += '</DL_CaseActor>';
	DLId = setEntityDetail('DL_CaseActor',s);
	parent.loadentity('DL_CaseActor', DLId);
}
function LONewCaseActorForbund(DLId, ForeignKeys, ForeignValues) {
	var oXML = getEntityData('DL_EXCompany','DL_Id = ' + DLId, '');
	var title = getsafe(oXML, '//DL_EXCompany/DL_EXCompany');
	var s = '<DL_CaseActor><DL_Title>' +  MakeXMLSafe(title) + '</DL_Title>';
	s += '<DL_Street>' +  MakeXMLSafe(getsafe(oXML, '//DL_Street')) + '</DL_Street>';
	s += '<DL_PostalCode>' + getsafe(oXML, '//DL_PostalCode') + '</DL_PostalCode>';
	s += '<DL_City>' + getsafe(oXML, '//DL_City') + '</DL_City>';
	s += '<DL_Phone>' + getsafe(oXML, '//DL_Phone') + '</DL_Phone>';
	var aKeys = ForeignKeys.split(',');
	var aValues = ForeignValues.split(',');
	for (var i=0;i<aKeys.length;i++) {
		s += '<' + aKeys[i] + '>' + aValues[i] + '</' + aKeys[i] + '>';
	}
	s += '<DL_EntityNameForeign2>DL_EXCompany</DL_EntityNameForeign2>';
	s += '<DL_EntityId2>' + DLId + '</DL_EntityId2>';
	s += '</DL_CaseActor>';
	DLId = setEntityDetail('DL_CaseActor',s);
	parent.loadentity('DL_CaseActor', DLId);
}
function LONewCaseActorOrganisation(DLId, ForeignKeys, ForeignValues) {
//alert('start');
	var oXML = getEntityData('DL_OrganisationAddressPrimaryView','DL_Organisation = ' + DLId, '');
//alert(oXML.xml);
	var title = getsafe(oXML, '//DL_Title');
	var s = '<DL_CaseActor><DL_Title>' + MakeXMLSafe(title) + '</DL_Title>';
	s += '<DL_Street>' + MakeXMLSafe(getsafe(oXML, '//DL_Street')) + '</DL_Street>';
	s += '<DL_PostalCode>' + getsafe(oXML, '//DL_PostalCode') + '</DL_PostalCode>';
	s += '<DL_City>' + getsafe(oXML, '//DL_City') + '</DL_City>';
	s += '<DL_Phone>' + getsafe(oXML, '//DL_Phone') + '</DL_Phone>';
	s += '<DL_CVRNR>' + getsafe(oXML, '//DL_CVRNR') + '</DL_CVRNR>';
	var aKeys = ForeignKeys.split(',');
	var aValues = ForeignValues.split(',');
	for (var i=0;i<aKeys.length;i++) {
		s += '<' + aKeys[i] + '>' + aValues[i] + '</' + aKeys[i] + '>';
	}
	s += '<DL_EntityNameForeign2>DL_Organisation</DL_EntityNameForeign2>';
	s += '<DL_EntityId2>' + DLId + '</DL_EntityId2>';
	s += '</DL_CaseActor>';
//alert(s);
	DLId = setEntityDetail('DL_CaseActor',s);
	parent.loadentity('DL_CaseActor', DLId, 'Action=50'); // 9.3.2009 - Action=50 added
}
function LOCreateFagforbundTransmittal(DLId) { // 31.1.2011
	var oXML = getEntityData('DL_Case','DL_Id=' + DLId, '');
	var DLTransmittal = _EXnewTransmittal('DL_Case',DLId,'Fagforbund dokumenter: ' + getsafe(oXML, '//DL_Title'));
	EXReload();
	//loadentity('DL_Transmittal', DLTransmittal);
}
function LOShowTransmittalDocuments(DL_Transmittal,title) { // 31.1.2011
	if (typeof(title) == 'undefined')
		title = '';
	if (title == '')
		title = "Dokumenter til/fra fagforbund...";
	loadcontent2("/ex_sqlsvc/DynamicList.html?DLEntity=DL_CaseDocuments&DLView=DL_CaseDocumentsView&Where=DL_EntityNameForeign='DL_Transmittal' and DL_EntityId=" + DL_Transmittal + "&PropList=DL_DocumentExtension,DL_Title,DL_Modified,DL_ModifiedBy&ClickAction=703&DL_Transmittal=" + DL_Transmittal,title);
}
function LOADDBasket2TransmittalDocuments(DL_Transmittal,bNotify) { // 31.1.2011
	if (typeof(bNotify) == 'undefined') bNotify=true;
	if (bNotify) // 2.12.2015
		ExecuteProcedure("LONotifyDocBasket @DLEntityNameForeign='DL_Transmittal',@DLEntityId=" + DL_Transmittal); // 16.8.2011
	ExecuteProcedure("EXMoveDocBasket2Entity @DLEntityNameForeign='DL_Transmittal',@DLEntityId=" + DL_Transmittal);
	parent.EXDocBasketRefresh();
	parent.LOShowTransmittalDocuments(DL_Transmittal,'Dokumenter flyttet fra kurven til dokumentpakken...');
}

function EXShowProtectedCase(DLCaseNo) {
	var oXML = getEntityData('DL_CMAllProtectedView','DL_caseNo = \'' + DLCaseNo + '\'', '');
	var EntityName = '_' + getsafe(oXML, '//DL_EntityNameForeign');
if (EntityName == '_DL_Acctivities') EntityName = '_LO_PCase';
	var Id = getsafe(oXML, '//DL_Id');
	loadentity(EntityName, Id);
}
function LOHentSagInit() {
	var oEle = document.getElementById('LOType');
	var sType = getCookie('LOType');
    //alert('HentSagInit ' + sType);
	if (sType != '' && sType != null) {
		if (oEle != null)
			oEle.value = sType;
	}
}
function LOSendMessageToForbund(DLId) { // 3.8.2011
	ExecuteProcedure('LODLCaseSendBeskedderTilForbund @DLId=' + DLId);
	alert('Mail sendt til forbund');
}
function LOVisFakturaXML(DLId) {
	var xInvoice = getEntityData('DL_Invoice','DL_Id = ' + DLId, '');
	var Id = getsafe(xInvoice, '//DL_SyncDocuments');
	var xDoc = getEntityData('DL_SyncDocuments','DL_Id = ' + Id, '');
	var sUrl = getsafe(xDoc, '//DL_OriginalURL').replace('.pdf','.xml');
	window.open(sUrl)
}
function LOFakturaToggleType(DLId) { // 14.7.2009
	ExecuteProcedure('dbo.LOFakturaToggleType @DLInvoice = ' + DLId);
	EXReload();
}
function LOVisFakturaGodkendelse(DLTask) {
	var oXML = getEntityData('DL_InvoiceTask','DL_Id=' + DLTask, '');
	var DLInvoice = getsafe(oXML, '//DL_EntityId');
	//alert(DLInvoice + ' :' + oXML.xml);
	loadentity('DL_InvoiceTask',DLTask,'Action=50');
	var oInvoice = getEntityData('DL_Invoice','DL_Id = ' + DLInvoice, '');
	var URL = getsafe(oInvoice, '//DL_URLDocument');
	loadcontent(URL,'DL_Information2');
	URL = getAbsoluteURL('/EX_SQLSVC/DynamicList.html?DLEntity=DL_HTMLNotesView&Where=DL_EntityNameForeign=\'DL_Invoice\' AND DL_EntityId = ' + DLInvoice + '&OrderBy=DL_Modified DESC&PropList=DL_Title&Action=none&ShowTitle=false');
	loadcontent(URL,'DL_Information3'); // 14.5.2009 - Show list data med noter
}
// 3.1.2013
function LOSuggestMeetingAccept(DLId) {
	var oXML = getEntityData('LO_SuggestMeetingDate','DL_Id=' + DLId,'');
	var xDate = getsafe(oXML, '//LO_SuggestDate1');
	if (xDate.indexOf('T00:00:00')  > 0) {
		var sInterval = getsafe(oXML,'//LO_SuggestTimeInterval1');
		var tid = prompt('Hvilket tidspunkt skal m\370det holder p\345? (hh:mm) ' + sInterval,'');
		if (tid == '' || tid == null) // || typeof(tid) == 'undefined' || tid == null)
			return;
		tid = tid.replace('.',':'); // 13.3.2009
		if (tid.length < 5)
			tid = '0' + tid;
		tid = tid + ':00';
		xDate = xDate.replace('T00:00:00','T'+ tid);
	}
//alert(xDate); // 11.3.2009
//return;
	var DLCase = getsafe(oXML,'//DL_EntityId');
	LOSendSag(DLCase, xDate, DLId);
}
function LOSuggestNewMeeting(DLId) {
	var oXML = getEntityData('LO_SuggestMeetingDate','DL_Id = ' + DLId, '');
	setEntityItemValue('LO_SuggestMeetingDate',DLId,getsafe(oXML, '//DL_Modified'), 'DL_CaseState','1');
	newentity('LO_SuggestMeetingDate','DL_EntityNameForeign,DL_EntityId,LO_SuggestMeetingOrigin','DL_Case,' + DLId +',1','Action=627');
}
function LOSendSag(DLCase, LOSuggestDate, DLMeeting) { // 9.6.2010 - DLMeeting added
	if (typeof(DLMeeting) == 'undefined')
		DLMeeting = '';
	loadcontent2(getAbsoluteURL('/EX_Custom/LOSendSag.html?DL_Case=' + DLCase + '&Date=' + LOSuggestDate + (DLMeeting==''?'':'&DLMeeting=' + DLMeeting) + '&EXCheck=' + Math.random()),'Send accept af m\370dedato');
}
var LEX_PrintEnterTitle = 'Indtast titel';
// 4.1.2013
function DLPostboxSagsnrChange() {
	var oEle = document.getElementById('LO_Sagsnrs'); //document.getElementById('LO_Sagsnr');
	if (oEle == null) {
		alert('DLPostboxSagsnrChange - strange');
		return;
	}
	if (oEle.value.indexOf('.') > 0) {
if (true) {
	var sS = oEle.value.replace(/,/g,';');
	var aS = sS.split(';');
	var sRes = '';
	for (var i=0;i < aS.length; i++) {
		if (i > 0)
			sRes = sRes + ';';
		if (aS[i].indexOf('.') > 0) {
			var oXML = getEntityData('DL_Case','LO_ArbejdsretsID = \'' + aS[i] + '\'','');
			var sSagsnr = getsafe(oXML, '//LO_Sagsnr');
			if (sSagsnr == '')
				alert('Ukendt arbejdsretsid ' + aS[i] + '. Vil ignorere det');
			else
				sRes = sRes + sSagsnr;
		}
		else {
			sRes = sRes + aS[i];
		}
	}
	oEle.value = sRes;
}
else {
		var oXML = getEntityData('DL_Case','LO_ArbejdsretsID = \'' + oEle.value + '\'','');
		var sSagsnr = getsafe(oXML, '//LO_Sagsnr');
		if (sSagsnr == '')
			alert('Ukendt arbejdsretsid ' + oEle.value);
		else
			oEle.value = sSagsnr;
}
	}
return; // 3-12-2007
	if (oEle.value != '') {
//alert('parent invocation');
//parent.DLPosthusItemJournalise(null);
//return;
		var oXML = getEntityData('DL_Case','LO_Sagsnr = \'' + oEle.value + '\'', '');
//		var oPXML = getEntityData('LO_PCase','LO_Sagsnr = \'' + oEle.value + '\'', '');
		var oPXML = getEntityData('DL_Activities','LO_Sagsnr = \'' + oEle.value + '\'', '');
		if ((getsafe(oXML, '//DL_Id') != '') && (getsafe(oPXML, '//DL_Id') != '')) {
			alert('***\nADVARSEL\n***\n\nSagsnummeret ' + oEle.value + ' findes B\305DE som juridisk og politisk sag! Brug menuen "journaliser brev" for at uploade.\n\nKlik OPDATER for at gemme \346ndringen f\370r du journaliserer'); //\n'+ oXML.xml + '\n' + oPXML.xml);
			return;
		}
		if (getsafe(oXML, '//DL_Id') == '')
//			oXML = getEntityData('LO_PCase','LO_Sagsnr = \'' + oEle.value + '\'', '');
			oXML = getEntityData('DL_Activities','LO_Sagsnr = \'' + oEle.value + '\'', '');
		if (getsafe(oXML, '//DL_Id') == '')  {
			alert('Ukendt sag');
			oEle.value = '';
			oEle.focus();
			return;
		}
		//var sMsg = 'Vil du journalisere brevet under sag ' + oEle.value + ' ' + getsafe(oXML, '//DL_Title') + '?';
		//if (confirm(sMsg)) {
			//alert('TEST - om kort tid vil brevet blive journaliseret');
			var oSyncDoc = getEntityData('DL_SyncDocuments','DL_Id=' + parent.DLPosthusLast,'');
			var oTitle = document.getElementById('DL_Title');
			SetEntityItemValue('DL_SyncDocuments',parent.DLPosthusLast,getsafe(oSyncDoc,'//DL_Modified'),'LO_Sagsnr',oEle.value, 'DL_Title', oTitle.value);
			oTitle = document.getElementById('DL_sAMAccountNameForeign');
			if (oTitle.value != getsafe(oSyncDoc,'//DL_sAMAccountNameForeign')) {
				oSyncDoc = getEntityData('DL_SyncDocuments','DL_Id=' + parent.DLPosthusLast,'');
				SetEntityItemValue('DL_SyncDocuments',parent.DLPosthusLast,getsafe(oSyncDoc,'//DL_Modified'),'DL_sAMAccountNameForeign',oTitle.value);
			}
			oTitle = document.getElementById('DL_KeyWords');
			if (oTitle.value != getsafe(oSyncDoc,'//DL_KeyWords')) {
				oSyncDoc = getEntityData('DL_SyncDocuments','DL_Id=' + parent.DLPosthusLast,'');
				SetEntityItemValue('DL_SyncDocuments',parent.DLPosthusLast,getsafe(oSyncDoc,'//DL_Modified'),'DL_KeyWords',oTitle.value);
			}
			window.status = 'journaliserer brev....';
			parent.DLPosthusItemJournalise(null);
			widow.status = 'journalisering afsluttet';
		//}
	}
}
function DLPostboxSetEmployee() {
	try {
		var oDept = document.getElementById('DL_Postbox');
		var oEle = document.getElementById('DL_sAMAccountNameForeign');
		if (oDept == null || oEle == null) {
			alert('DLPostboxSetEmployee - strange');
			return;
		}
		FillDropDown('DL_sAMAccountNameForeign','DL_sAMAccountName','DL_sAMAccountName','DL_Name','DL_Postbox',oDept.value, oEle.value);
	} catch (e) {alert('DLPostboxSetEmployee ' + e.message);}
}

function EXSpaceToSearch(s) {
  s = s.replace(/ /g, '%');
//alert('EXSpaceToSearch ' + s);
  return s;
}
function EXCaseExchange2Case(DLId) {
	var oXML = getEntityData('DL_CaseExchange', 'DL_Id = ' + DLId, '');
	var DLEntityNameForeign = getsafe(oXML, '//DL_EntityNameForeign');
	var DLEntityId = getsafe(oXML, '//DL_EntityId');
	if (DLEntityNameForeign == '' || DLEntityId == '') {
		alert('Ingen sag fundet for den p\345g\346ldende operation');
		LODisplayXML('DL_CaseExchange',DLId);
		return;
	}
	EXGotoObject(DLEntityNameForeign, DLEntityId);
}
function LOGotoCase(LOSagsnr,DLEntityNameForeign) { // 5.1.2013 - oprettet
	if (LOSagsnr == '')
		return;
	var sWhere;
	if (DLEntityNameForeign = 'DL_Activities' || DLEntityNameForeign == 'DL_Case')
		sWhere = 'LO_Sagsnr = \'' + LOSagsnr + '\'';
	else
		sWhere = 'DL_CaseNo = \'' + LOSagsnr + '\'';
	var xCase = getEntityData(DLEntityNameForeign,sWhere,'');
	if (getsafe(xCase,'//DL_Id') == '')
		alert('Ukendt sag ' + LOSagsnr);
	else
		EXGotoObject(DLEntityNameForeign,getsafe(xCase,'//DL_Id')); //,null,null,null,true);
}
// 8.1.2013
function EXfetchCompany(tdcId) { // 9.12.2012
  var s = '<mns:fetchCompany xmlns:mns="http://com.stibo.net/nne/3.1/NNE" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><int_1 xsi:type="xsd:int">' + tdcId + '</int_1><int_2 xsi:type="xsd:int">0</int_2><String_3 xsi:type="xsd:string"></String_3><String_4 xsi:type="xsd:string">uffe</String_4></mns:fetchCompany>';
    var xmldoc, FeedbackHTTP;
    xmldoc='<?xml version="1.0" encoding="utf-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://com.stibo.net/nne/3.1/NNE" xmlns:ns2="http://com.stibo.net/nne/3.1/Types/NNE" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"><SOAP-ENV:Body>';
    xmldoc = xmldoc + s;
    xmldoc = xmldoc + '</SOAP-ENV:Body></SOAP-ENV:Envelope>';

    FeedbackHTTP = new ActiveXObject("Microsoft.XMLHTTP")
    FeedbackHTTP.Open("POST", 'http://service.nnerhverv.dk:80/nne-ws/3.1/NNE', false); 
    FeedbackHTTP.setRequestHeader("Content-Type","text/xml; charset=utf-8");
    //FeedbackHTTP.setRequestHeader("SOAPAction", 'nms:search');
try {
    FeedbackHTTP.Send(xmldoc);
} catch (e) {alert('EXgetCompanyFromCVR ' + e.message);}
    var oXML;
    oXML = FeedbackHTTP.ResponseXML;
//  oXML.setProperty('SelectionNamespaces', 'xmlns:ns0="http://com.stibo.net/nne/3.1/Types/NNE"');
//alert(getsafe(oXML, '//legalEntity') + '\n' + oXML.xml);
return oXML;
}

function EXgetCompanyFromCVR(cvrnr) { // 4.12.2012 - new service version used
try {
  var s = '<mns:search xmlns:mns="http://com.stibo.net/nne/3.1/NNE" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><Question_1 xsi:type="ns2:Question"><cvrNo xsi:type="xsd:int">' + cvrnr + '</cvrNo><district xsi:type="xsd:string"></district><houseNo xsi:type="xsd:string"></houseNo><name xsi:type="xsd:string"></name><nameStartsWith xsi:type="xsd:boolean">1</nameStartsWith><phone xsi:type="xsd:string"></phone><street xsi:type="xsd:string"></street><streetStartsWith xsi:type="xsd:boolean">1</streetStartsWith><tdcId xsi:type="xsd:int">0</tdcId><zipCode xsi:type="xsd:int">0</zipCode></Question_1><int_2 xsi:type="xsd:int">2</int_2><int_3 xsi:type="xsd:int">1</int_3><int_4 xsi:type="xsd:int">0</int_4><String_5 xsi:type="xsd:string">uffe</String_5></mns:search>';
    var xmldoc, FeedbackHTTP;
    xmldoc='<?xml version="1.0" encoding="utf-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://com.stibo.net/nne/3.1/NNE" xmlns:ns2="http://com.stibo.net/nne/3.1/Types/NNE" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"><SOAP-ENV:Body>';
    xmldoc = xmldoc + s;
    xmldoc = xmldoc + '</SOAP-ENV:Body></SOAP-ENV:Envelope>';

    FeedbackHTTP = new ActiveXObject("Microsoft.XMLHTTP")
    FeedbackHTTP.Open("POST", 'http://service.nnerhverv.dk:80/nne-ws/3.1/NNE', false); 
    FeedbackHTTP.setRequestHeader("Content-Type","text/xml; charset=utf-8");
    //FeedbackHTTP.setRequestHeader("SOAPAction", 'nms:search');
try {
    FeedbackHTTP.Send(xmldoc);
} catch (e) {alert('EXgetCompanyFromCVR ' + e.message);}
    var oXML;
    oXML = FeedbackHTTP.ResponseXML;
  oXML.setProperty('SelectionNamespaces', 'xmlns:ns0="http://com.stibo.net/nne/3.1/Types/NNE"');

var xNodes = oXML.selectNodes('//tdcId');
//alert(xNodes.length);
if (xNodes.length>1) {
var xRes = null;
for (var i=0;i<xNodes.length;i++) {
 xRes = EXfetchCompany(xNodes[i].text);
 xRes.setProperty('SelectionNamespaces', 'xmlns:ns0="http://com.stibo.net/nne/3.1/Types/NNE"');
 if (getsafe(xRes,'//legalEntity') == '1') {
//  alert('Found ' + xRes.xml);
return xRes;
 }
}
//alert(xNodes[0].xml);
//EXCopyToClipboard(oXML.xml);
}
//alert(xNodes);
//alert(cvrnr + '\n'+ xmldoc + '\n' + oXML.xml);
if (FeedbackHTTP.status != 200)
alert('Kan ikke finde firma på CVRNR=' + cvrnr + '. Intern fejl - kontakt administrator.\nEXgetCompanyFromCVR(...) = ' + FeedbackHTTP.status + ' ' + getsafe(oXML, '//faultstring'));
    FeedbackHTTP = null;
    return oXML;
} catch (e) {alert('EXgetCompanyFromCVRNew ' + e.message);}
}
// FEA
function FEAKnytPersonTilOrganisation(DL_Person, DL_Organisation) {
  try {
    var xOps;
    // Add document to DL_OrganisationPerson
    xOps = '<DL_OrganisationPerson><DELETE/><UPDATE/><INSERT>';
    xOps = xOps + '<Row><DL_Organisation>' + DL_Organisation + '</DL_Organisation><DL_Person>' + DL_Person + '</DL_Person><DL_StartDate>getdate()</DL_StartDate>';
    xOps = xOps + '</Row></INSERT></DL_OrganisationPerson>';
    setEntity('DL_OrganisationPerson', xOps);
    alert('Person tilknyttet til organisation');
  } catch (e) {alert('FEAKnytPersonTilOrganisation ' + e.message);}
}
function FEAKnytObject2Object(DLEntity, DLEntityKey1, DLEntityKey2, DLEntityId1, DLEntityId2, message, bExtra) {
  try {
    var xOps;
    xOps = '<' + DLEntity + '><DELETE/><UPDATE/><INSERT>';
    xOps = xOps + '<Row><' +DLEntityKey1  + '>' + DLEntityId1 + '</' + DLEntityKey1 + '><' + DLEntityKey2 + '>' + DLEntityId2 + '</' + DLEntityKey2 + '>';
    if (bExtra) {
      var s = '';
      s = prompt('År-måned - yyyymm');
      if (s == null || s == '' || s == 'undefined')
        return;
      xOps = xOps + '<DL_YearMonth>' + s + '</DL_YearMonth>';
      s = '';
      s = prompt('Titel');
      if (s == null || s == '' || s == 'undefined')
        return;
      xOps = xOps + '<DL_Title>' + s + '</DL_Title>';
    }
    xOps = xOps + '</Row></INSERT></' + DLEntity + '>';
    setEntity(DLEntity, xOps);
    if (message)
      alert(message);
  } catch (e) {alert('FEAKnytObject2Object ' + e.message);}
}

function FEAKnytObject2Object2(DLEntity, DLEntityKey1, DLEntityKey2, DLEntityId1, DLEntityId2, message, errmsg) {
  try {
    var sWhere = DLEntityKey1 + ' = ' + DLEntityId1 + ' AND ' + DLEntityKey2 + ' = ' + DLEntityId2;
    //alert(sWhere);
    var oXML = getEntityData2('count(*)',DLEntity,sWhere,'');
    var c = getsafe(oXML, '//' + DLEntity);
    if (1 * c > 0)  {
      alert(errmsg + ' #=' + c + '. (FEAKnytObject2Object2)');
      return;
    }
    var xOps;
    xOps = '<' + DLEntity + '><' +DLEntityKey1  + '>' + DLEntityId1 + '</' + DLEntityKey1 + '><' + DLEntityKey2 + '>' + DLEntityId2 + '</' + DLEntityKey2 + '>';
    xOps = xOps + '</' + DLEntity + '>';
    var DLId = setEntityDetail(DLEntity, xOps);
    if (message)
      alert(message);
//alert('loadentity(' + DLEntity + ',' + DLId + ') invoked now');
    loadentity(DLEntity, DLId);
  } catch (e) {alert('FEAKnytObject2Object ' + e.message);}
}


function FEAKnytObject2Object3(DLEntity, DLEntityKey1, DLEntityKey2, DLEntityId1, DLEntityId2, message, errmsg) {
  try {
    var sWhere = DLEntityKey1 + ' = ' + DLEntityId1 + ' AND ' + DLEntityKey2 + ' = ' + DLEntityId2;
    //alert('DEBUG\nFEAKnytObject2Object3\n' + sWhere);
    var oXML = getEntityData2('count(*)',DLEntity,sWhere,'');
    var c = getsafe(oXML, '//' + DLEntity);
    if (1 * c > 0)  {
      alert(errmsg + ' #=' + c + '. (FEAKnytObject2Object3)' + sWhere);
      return;
    }
    //if (message)
    //  alert(message);
    var sKeys, sValues;
    sKeys = DLEntityKey1 + ',' + DLEntityKey2;
    sValues = '' + DLEntityId1 + ',' + DLEntityId2;
    parent.newentity2(DLEntity, sKeys, sValues, '',message); // 27.11.2008 - parent. tilføjet
  } catch (e) {alert('FEAKnytObject2Object3 ' + e.message);}
}
// 9.1.2013
function EXDocBasketGetTitleDL_Case(DLId) {
	var oXML = getEntityData('DL_Case', 'DL_Id = ' + DLId, '');
	var subject = getsafe(oXML, '//LO_Sagsnr') + ' ' + getsafe(oXML, '//LO_EXCompany') + ' ' + getsafe(oXML, '//LO_FagforbundSagsnr');
	return subject;
}
/* 21.8.2010
function EXDocBasketGetTitleDL_Activities(DLId) {
	var oXML = getEntityData('DL_Activities', 'DL_Id = ' + DLId, '');
	var subject = 'Sag ' + getsafe(oXML, '//DL_CaseNo') + ' ' + getsafe(oXML, '//DL_Title');
	return subject;
}
*/
var bFEAGetNameListEmails;
function FEAGetNameListEmails(DL_Id) {
  try {
    bFEAGetNameListEmails = true;
    var oXML = ExecuteProcedure('EXExpandNameList @DLNameList = ' + DL_Id);
    var res = '';
    var xNodes, xNode, i;
    xNodes = oXML.selectNodes("//DL_Email");
    for (i=0; i<xNodes.length; i++) {
      xNode = xNodes[i];
      if (xNode.text == '')
        bFEAGetNameListEmails = false;
      else {
        if (res != '')
          //res = res + ','; // 5/2-2007 - MMQ - ';';
          res = res + ';'; // 4/1-2009 - MMQ
        res = res + xNode.text;
      }
    }
//alert('FEAGetNameListEmails ' + res);
    return res;
  } catch(e) {alert('FEAGetNameListEmails ' + e.message);}
}

function FEAGetPersonEmail(DL_Person) {
  try {
    var oXML = getEntityData2('*','DL_PersonCommunicationView','DL_Person = ' + DL_Person + ' AND DL_CommunicationType = \'EMAIL\'','');
    var res = getsafe(oXML,'//DL_Title');
    return res;
  } catch(e) {alert('FEAGetPersonEmail ' + e.message);}
}

function FEAGetTransmittalEmails(DL_Id) {
  try {
    var oXML = getEntityData2('*', 'DL_Transmittal', 'DL_Id=' + DL_Id, '');
    var res = '';
    var NameList = getsafe(oXML,'//DL_NameList');
    if (NameList != '') {
      res = FEAGetNameListEmails(NameList);
      if (!bFEAGetNameListEmails)
        if (!confirm('Ikke alle personer har en email adresse - continue?'))
          return '';
//alert('DEBUG\n' + NameList + '=' + res);
    }
    var Person = getsafe(oXML,'//DL_Person');
    if (Person != '') {
      if (res != '')
        //res = res + ','; // 5/2-2007 - MMQ - ';';
	res += ';'; // 13.11.2008 - Outlook must be ";"
      res = res + FEAGetPersonEmail(Person);
    }
    var Email = getsafe(oXML,'//DL_Email');
    if (Email != '') {
      if (res != '')
        res = res + ';';
      res = res + Email;
    }
//alert(NameList + ' ' + Person + ' ' + Email);
//alert('FEAGetTransmittalEmails =' + res);
    return res;
  } catch(e) {alert('FEAGetTransmittalEmails ' + e.message);}
}
function LOCreateTransmittal(DLTransmittal,sEle) {
	if (sEle == '') {
		var oEle = document.getElementById('DL_NameList');
		if (oEle.value != '')
			sEle = 'DL_NameList';
		else {
			oEle = document.getElementById('DL_Person');
			if (oEle.value != '')
				sEle = 'DL_Person';
			else
				sEle = 'DL_Emails';
		}
	}
	var oEle = document.getElementById(sEle);
	if (oEle == null)
		alert('LOCreateTransmittal - unknown property ' + sEle);
	var sEleDenorm;
	if (sEle == 'DL_Emails')
		sEleDenorm = sEle;
	else
		sEleDenorm = sEle + 'Denorm';
	var oEleDenorm = document.getElementById(sEleDenorm);
	if (oEle.value == '') {
		alert('Venligst v\346lg en person, navneliste eller email');
		return;
	}
	SetRecentValue('DL_Transmittal', DLTransmittal);

	// Flyt dokumenter i dokumentkurven til forsendelsen
	ExecuteProcedure('dbo.EXMoveDocBasketToTransmittal @DLTransmittal = ' + DLTransmittal);
	if (typeof(EXDocBasketRefresh) == 'function')
		parent.EXDocBasketRefresh();
oEle=document.getElementById('DL_Title');
	var emails = FEAGetTransmittalEmails(DLTransmittal);
	EXBRMCreateMail('', oEle.value, 'DL_Transmittal', DLTransmittal, emails, false); // 25.5.2008 - which function should we REALLY USE
return;

	var oDiv = document.getElementById('EXDocPackage');
	oDiv.innerHTML = '<a href="javascript:EXGotoObject(\'DL_Transmittal\',' + DLTransmittal + ')">Ny dokumentpakke skabt (' + DL_Transmittal + ')</a> og Outlook email er klar til afsendelse.';
}
function EXDWPNewDocumentExtraReceiver(DLEntity) {
return null;
	if (DLEntity == 'DL_Activities')
		return ['Modtager','FEA',LODWPPickExtraReceiver];
	return null;
}
function LOFEAPickPersonOrganisation(iType) { // iType=Person:0,Organisation:1
	var oDiv = document.getElementById('LOExtraReceiverDIV');
	if (oDiv == null) {
		oDiv = document.createElement('DIV');
		oDiv.id = 'LOExtraReceiverDIV';
		oDiv.style.display = 'None';
//		oDiv.style.position = 'absolute';
//		oDiv.style.top = '0px';
		var sHTML = '<iframe frameborder="0" style="width:510px;height:510px;" id="EXSearch"></iframe>';
		oDiv.innerHTML = sHTML;
//alert(sHTML);
		document.body.appendChild(oDiv);
		oDiv = document.getElementById('LOExtraReceiverDIV');
	}
	var sTitle, sUrl;
	if (iType == 0) {
		sTitle = 'FEA person som modtager';
		var sUrl = getAbsoluteURL('/EX_SQLSVC/DynamicSearch.html?DLEntity=DL_PersonOrganisationSearchView&&SearchParameters=DL_Name,DL_OrganisationTitle&DisplayParameters=DL_Name,DL_OrganisationTitle&Tooltip=Choose value&ClickAction=533&SearchOnLoad=false&HideSave=true');
	}
	else {
		sTitle = 'FEA organisation som modtager';
		var sUrl = getAbsoluteURL('/EX_SQLSVC/DynamicSearch.html?DLEntity=DL_OrganisationAddressPrimaryView&SearchParameters=DL_DL_OrganisationTitle&DisplayParameters=DL_Name,DL_OrganisationTitle&Tooltip=Choose value&ClickAction=533&SearchOnLoad=false');
	}
	loadcontent(sUrl,'EXSearch');
	$( "#LOExtraReceiverDIV" ).dialog({
		position: [0,0],
		resizable: false,
		height: 520,
		width: 540,
		modal: true,
		title: sTitle,
		open: function(event, ui) {
			//$("input").val([EXDWPShowCreatedModified]);
		},
		buttons: {
			"OK": function() {
//				EXDWPShowCreatedModified = $('input:radio[name=displayType]:checked').val(); 
//				setCookie('EXDWPShowCreatedModified' + EXDWPFolderEntityName, EXDWPShowCreatedModified);
//				EXDWPRefresh();
				$( this ).dialog( "close" );
			},
			Cancel: function() {
				$( this ).dialog( "close" );
			}
		}
	});
alert('LOFEAPickPersonOrganisation ' + iType);
}
function LODWPPickExtraReceiver() {
	alert('extra receiver clicked ');
	var oDiv = document.getElementById('LOExtraReceiverDIV');
	if (oDiv == null) {
		oDiv = document.createElement('DIV');
		oDiv.id = 'LOExtraReceiverDIV';
		oDiv.style.display = 'None';
//		oDiv.style.position = 'absolute';
//		oDiv.style.top = '0px';
		var sHTML = '<table bg1color="white" width="100%">';
		sHTML += '<tr id="trFEAPerson" sty1le="display:none" class="ms-vb"><td><b>Person</b></td><td><input id="LOFEAPerson" type="hidden" onpropertychange="javascript:LOFEAPersonChange()"><input style="width:200px" id="LOFEAPersonDenorm" type="text"><a href="javascript:LOFEAPickPerson()"><img src="/EX_Resources/img/16x16/add.gif" border="0"></a></td></tr>';
		sHTML += '<tr id="trFEAOrganisation" styl1e="display:none" class="dltablerow"><td  class="ms-vb"><b>Organisation</b></td><td><input id="LOFEAOrganisation" type="hidden" onpropertychange="javascript:EXOrganisationChange()"><input style="width:200px" id="LOFEAOrganisationDenorm" type="text"><a href="javascript:LOFEAPickOrganisation()"><img src="/EX_Resources/img/16x16/add.gif" border="0"></a></td></tr>';
		sHTML += '</table>';
		oDiv.innerHTML = sHTML;
//alert(sHTML);
		document.appendChild(oDiv);
		oDiv = document.getElementById('LOExtraReceiverDIV');
	}
oEXPickForm = new EXPickForm('pickform');

//	var position = $(this).position();
	$( "#LOExtraReceiverDIV" ).dialog({
		position: [0,0],
		resizable: false,
		height: 220,
		width: 440,
		modal: true,
		title: 'FEA person/organisation som modtager',
		open: function(event, ui) {
			//$("input").val([EXDWPShowCreatedModified]);
		},
		buttons: {
			"OK": function() {
//				EXDWPShowCreatedModified = $('input:radio[name=displayType]:checked').val(); 
//				setCookie('EXDWPShowCreatedModified' + EXDWPFolderEntityName, EXDWPShowCreatedModified);
//				EXDWPRefresh();
				$( this ).dialog( "close" );
			},
			Cancel: function() {
				$( this ).dialog( "close" );
			}
		}
	});
}
function LOFEAPersonChange() {
  var oEle = document.getElementById('LOFEAPerson');
  if (oEle.value == '') // 16-11-2007
    return;
  var oXML = getEntityData('DL_PersonOrganisationAddressView','DL_Id=' + oEle.value,'');
//alert(oXML.xml);
  oEle = document.getElementById('EXProps');
  //var oNode = oXML.selectSingleNode('//DL_ENTITYDATA/DL_PersonOrganisationAddressView');
  oEle.value = AddNode(oXML, '//DL_OrganisationTitle','Company') + AddNode(oXML, '//DL_Name','Person') + AddNode(oXML, '//DL_Street','Street') + AddNode(oXML, '//DL_PostalCode','ZIP') + AddNode(oXML, '//DL_City','City');
  _LOFEAClearOrganisation();
  alert('Modtager: Person ' + getsafe(oXML, '//DL_Name') + ' fra firma ' + getsafe(oXML, '//DL_OrganisationTitle') + ' valgt.');
}
function _LOFEAClearPerson() {return;
  var oEle = document.getElementById('LOFEAPersonDenorm');
  oEle.value = '';
}
function _LOFEAClearOrganisation() {return;
  var oEle = document.getElementById('LOFEAOrganisationDenorm');
  oEle.value = '';
}
function LOFEAPickPerson() {
  try {
    EXDoDynamicSearch('LOFEAPerson', 'DL_PersonOrganisationSearchView', null, null, 'DL_Name,DL_JobTitle,DL_Role,DL_OrganisationTitle', '')
  } catch (e) {alert('LOFEAPickPerson ' + e.message);}
}
function LOFEAPickOrganisation() {
  try {
    EXDoDynamicSearch('LOFEAOrganisation', 'DL_Organisation', null, null, 'DL_Title,DL_OrganisationShort', '')
  } catch (e) {alert('LOFEAPickOrganisation ' + e.message);}
}
function LOFEAOrganisationChange() {
  var oEle = document.getElementById('LOFEAOrganisation');
  var oXML = getEntityData('DL_OrganisationAddressPrimaryView','DL_Organisation=' + oEle.value,'');
//alert(oXML.xml);
  oEle = document.getElementById('EXProps');
  oEle.value = AddNode(oXML, '//DL_Title','Company') + AddNode(oXML, '//DL_Street','Street') + AddNode(oXML, '//DL_PostalCode','ZIP') + AddNode(oXML, '//DL_City','City');
  _LOFEAClearPerson();
  alert('Modtager: Firma ' + getsafe(oXML, '//DL_Title') + ' valgt.');
}
function LODisplayXML(DLEntity, DLId) {
	loadcontent(getAbsoluteURL('/EX_Custom/EXCaseExchangeXML.html?DLId=' + DLId));
}
function LOPostboxSagsnrChange() { // 26.1.2013
	var oEle = document.getElementById('LO_Sagsnrs'); //document.getElementById('LO_Sagsnr');
parent.EXLoadLetterFunctions(oEle.value);
return;
	if (oEle == null) {
		alert('DLPostboxSagsnrChange - strange');
		return;
	}
alert(oEle.value);
	if (oEle.value.indexOf('.') > 0) {
if (true) {
	var sS = oEle.value.replace(/,/g,';');
	var aS = sS.split(';');
	var sRes = '';
	for (var i=0;i < aS.length; i++) {
		if (i > 0)
			sRes = sRes + ';';
		if (aS[i].indexOf('.') > 0) {
			var oXML = getEntityData('DL_Case','LO_ArbejdsretsID = \'' + aS[i] + '\'','');
			var sSagsnr = getsafe(oXML, '//LO_Sagsnr');
			if (sSagsnr == '')
				alert('Ukendt arbejdsretsid ' + aS[i] + '. Vil ignorere det');
			else
				sRes = sRes + sSagsnr;
		}
		else {
			sRes = sRes + aS[i];
		}
	}
	oEle.value = sRes;
}
else {
		var oXML = getEntityData('DL_Case','LO_ArbejdsretsID = \'' + oEle.value + '\'','');
		var sSagsnr = getsafe(oXML, '//LO_Sagsnr');
		if (sSagsnr == '')
			alert('Ukendt arbejdsretsid ' + oEle.value);
		else
			oEle.value = sSagsnr;
}
	}
}
function LOBeskedTilFagforbund(DLId) { // 20.2.2013
	EXActionSubMenu('DL_CaseSendSagFagforbund','DL_CaseActor',DLId);
return;
	var oXML = getEntityData('DL_CaseActor','DL_Id=' + DLId,'');
	alert(oXML.xml);
}
// 25.2.2013
function LOMoveCaseDocumentToBasket(DL_Id) {
 var oXML = getEntityData('DL_CaseDocuments','DL_Id=' + DL_Id,'');
 SetEntityItemValue('DL_CaseDocuments',DL_Id,getsafe(oXML,'//DL_Modified'),'DL_EntityNameForeign','DL_sAMAccountName','DL_EntityId',0);
 EXReload();
}

// 8.3.2013
function EXAssignHRIDToCase(DLEntityNameForeign, DLEntityId) { // 17.3.2009
	var sUrl = getAbsoluteURL('/EX_SQLSVC/DynamicSearch.html?DLEntity=DL_Employee&SearchParameters=DL_HRID,DL_Name,DL_CaseState:0&ClickAction=648&ForeignKeys=DL_EntityNameForeign,DL_EntityId&ForeignValues=' + DLEntityNameForeign + ',' + DLEntityId);
	loadcontent2(sUrl,'S\370g medarbejder og knyt til sagen');
}
function EXAssignHRIDToCaseDoIt(DLEntityNameForeign, DLEntityId, DLId) { // 17.3.2009
	var oXML = getEntityData('DL_Employee','DL_Id=' + DLId, '');
	var DLHRID = getsafe(oXML, '//DL_HRID');
	if (DLHRID == '') {
		alert('Ukendt medarbejder\nEXAssignHRIDToCase - contact administrator');
		return;
	}
	var xCase = getEntityData(DLEntityNameForeign,'DL_Id=' + DLEntityId, '');
	SetEntityItemValue(DLEntityNameForeign,DLEntityId,getsafe(xCase,'//DL_Modified'),'DL_HRIDForeign',DLHRID);
	EXReload();
//alert('DoIt ' + DLEntityNameForeign + ':' + DLEntityId + ':' + DLId);
}
function FEAMergePerson(DL_TargetPerson, DL_Person) { // 4.4.2013 - IT sag 1160
	if (DL_TargetPerson == DL_Person) {
		alert('Kan ikke merge personen ind i sig selv');
		return;
	}
	var oTarget, oXML;
	oTarget = getEntityData('DL_Person', 'DL_Id=' + DL_TargetPerson,'');
	oXML = getEntityData('DL_Person', 'DL_Id=' + DL_Person,'');
	var s;
	s = 'Vil du merge ' + getsafe(oXML,'//DL_Name') + ' ind i personen ' + getsafe(oTarget,'//DL_Name') + '?';
	if (confirm(s)) {
		ExecuteProcedure('dbo.FEAMergePerson @DLTargetPerson = ' + DL_TargetPerson + ', @DLPerson=' + DL_Person);
		alert('Completed');
		EXReload();
	}
//alert('FEAMergePerson ' + DL_TargetPerson + ' ' + DL_Person + ' ' + queryString('DL_Person'));
	return;
}
function FEAMergeOrganisation(DL_TargetOrganisation, DL_Organisation) { // 17.6.2014 - tilfoejet
try {
//alert('FEAMergeOrganisation invoked ' + DL_TargetOrganisation + ' ' + DL_Organisation);
	if (DL_TargetOrganisation == DL_Organisation) {
		alert('Kan ikke merge organisationen ind i sig selv');
		return;
	}
	var oTarget, oXML;
	oTarget = getEntityData('DL_Organisation', 'DL_Id=' + DL_TargetOrganisation,'');
	oXML = getEntityData('DL_Organisation', 'DL_Id=' + DL_Organisation,'');
	var s;
	s = 'Vil du merge ' + getsafe(oXML,'//DL_OrganisationTitle') + ' ind i organisationen ' + getsafe(oTarget,'//DL_OrganisationTitle') + '?';
	if (confirm(s)) {
		ExecuteProcedure('dbo.FEAMergeOrganisation @DLTargetOrganisation = ' + DL_TargetOrganisation + ', @DLOrganisation=' + DL_Organisation);
		alert('Completed');
		EXReload();
	}
	return;
} catch (e) {alert('FEAMergeOrganiastion ' + e.message);}
}


function LOOpenSagsnoterWord(DLId) { // 1.8.2013
//alert('LOOpenSagsnoterWord(' + DLId + ')');
$.getScript("/EX_Resources/js/EXNewDocument.js", function(data, textStatus, jqxhr) {
//   console.log(data); //data returned
//   console.log(textStatus); //success
//   console.log(jqxhr.status); //200
//   console.log('Load was performed.');
	var xDoc = getEntityData('DL_StandardLetterView','DL_Id=547','');
//alert(xDoc.xml);
	try {
		EXCreateDoc('DL_Case',DLId,getsafe(xDoc,'//DL_TemplateFile'),'','LO_CaseAllView','','','','547','',queryString('DL_FolderParams'));
	} catch(e) {alert('error ' + e.message);}
});
}
// 6.8.2013 - IT Case 1138
function EXCustomNewDocument(oTable, DLEntity) { 
if (DLEntity!= 'IT_Case' && DLEntity != 'DL_Activities')
return;

//alert('Custom ' + DLEntity);
	var lastRow = oTable.rows.length-1;
	var oTR;


	oTR = oTable.insertRow(lastRow);
	oTR.id = 'trFEAOrganisation';
	cell = oTR.insertCell(0);
	cell.className = 'ms-vb';
	cell.innerHTML = '<b>Organisation</b>';
	cell = oTR.insertCell(1);
	cell.className = 'ms-vb';
	cell.innerHTML = '<input id="EXOrganisation" type="hidden" style="width:0px" onpropertychange="javascript:LOOrganisationChange()"><input style="width:300px" id="EXOrganisationDecode" type="text">';

	oTR = oTable.insertRow(lastRow);
	oTR.id = 'trFEAPerson';
	var cell = oTR.insertCell(0);
	cell.className = 'ms-vb';
	cell.innerHTML = '<b>Person</b>';
	cell = oTR.insertCell(1);
	cell.className = 'ms-vb';
	cell.innerHTML = '<input id="EXPerson" type="hidden" style="width:0px" onpropertychange="javascript:LOPersonChange()"><input style="width:300px" id="EXPersonDecode" type="text">';
setTimeout(function(){
$.getScript("/EX_Resources/plugins/AutoComplete/JS/AutoComplete.js", function(data, textStatus, jqxhr) {
//alert('loaded');
	EXattachAutoComplete('EXPersonDecode','EXPerson',2,80,{ 'DL_Dictionary': 'DL_Person' ,'DL_PropCodeKey': 'DL_Id' ,'DL_PropCodeDecode1': 'DL_Name' }, '');
	EXattachAutoComplete('EXOrganisationDecode','EXOrganisation',2,80,{ 'DL_Dictionary': 'DL_Organisation' ,'DL_PropCodeKey': 'DL_Id' ,'DL_PropCodeDecode1': 'DL_Title' }, '');
//alert('attached');
});

},7000); 


}

function LOOrganisationChange() {
	var oEle = document.getElementById('EXOrganisation');
	if (oEle.value == '' || oEle.value== '-1') return;
	var oXML = getEntityData('DL_OrganisationAddressPrimaryView','DL_Organisation=' + oEle.value,'');
	oEle = document.getElementById('EXProps');
	oEle.value = AddNode(oXML, '//DL_Title','Company') + AddNode(oXML, '//DL_Street','Street') + AddNode(oXML, '//DL_PostalCode','ZIP') + AddNode(oXML, '//DL_City','City');
	oEle = document.getElementById('EXPerson'); oEle.value='';
	oEle = document.getElementById('EXPersonDecode'); oEle.value='';
//  alert('Modtager: Firma ' + getsafe(oXML, '//DL_Title') + ' valgt.');
}

function LOPersonChange() {
	var oEle = document.getElementById('EXPerson');
	if (oEle.value == '' || oEle.value== '-1') return;
	var oXML = getEntityData('DL_PersonOrganisationAddressView','DL_Id=' + oEle.value,'');
	oEle = document.getElementById('EXProps');
  //var oNode = oXML.selectSingleNode('//DL_ENTITYDATA/DL_PersonOrganisationAddressView');
	oEle.value = AddNode(oXML, '//DL_OrganisationTitle','Company') + AddNode(oXML, '//DL_Name','Person') + AddNode(oXML, '//DL_Street','Street') + AddNode(oXML, '//DL_PostalCode','ZIP') + AddNode(oXML, '//DL_City','City');
	oEle = document.getElementById('EXOrganisation'); oEle.value='';
	oEle = document.getElementById('EXOrganisationDecode'); oEle.value='';
//  alert('Modtager: Person ' + getsafe(oXML, '//DL_Name') + ' fra firma ' + getsafe(oXML, '//DL_OrganisationTitle') + ' valgt.');
}

function EXPostboxCaseNoLooup(DLCaseNo) {
	var xSag;
	if (DLCaseNo.indexOf('AR') == 0)
		xSag = getEntityData2('*,\'DL_Case\' as DL_EntityNameForeign,DL_Id as DL_EntityId,\'Juridisk sag\' as DL_EntityDescription,LO_Sagsnr as DL_CaseNo','DL_Case','LO_ArbejdsretsID LIKE \'%' + DLCaseNo.substr(3) + '\'', '');
	else
		xSag = getEntityData('DL_CMAllView','DL_CaseNo=\'' + DLCaseNo + '\'','');
	return xSag;
}
function LOUdskrivSagsfremstilling(DLId) {
//alert(DLId);
	var xHTML = getEntityData('DL_HTMLNotes','DL_Id=' + DLId,'');
//alert(xHTML.xml);
	var html = getsafe(xHTML,'//DL_HTMLText');
html = html.replace(/\n\n/g,'<p>'); // 23.6.2015
html = html.replace(/\n/g,'<br>'); // 23.6.2015
//alert(html);

	var DLCase = queryString('DL_Case');
	var xCase = getEntityData('DL_Case','DL_Id=' + DLCase,'');

	html = '<html><head><title>' + getsafe(xCase,'//LO_Sagsnr') + ' ' + getsafe(xCase, '//LO_EXCompany') + ' ' + getsafe(xHTML,'//DL_Created').substr(0,10) + '</title></head><body>' + html + '</body></html>';
//alert(html);

	var printWin = window.open("","printSpecial");
	if (printWin == null) {
		alert('Kan ikke printe - pop-up blocker?');
		return;
	}
	printWin.document.open();
	printWin.document.write(html);
	printWin.document.close();
	printWin.print();
	printWin.close();
}
// 27.5.2014 / ups / mere glemt
function FEAAddPersonOrgViewTD(xNode, XPath,bAddHref, XPathAlt) {
  var s, value;
  value = getsafe(xNode, XPath);
  if (value == '' && XPathAlt != '' && XPathAlt != null)
	value =getsafe(xNode, XPathAlt);
  if (bAddHref) {
    s = '<td><a href="javascript:FEAGotoPerson(' + getsafe(xNode, 'DL_Id') + ')">' + value + '</a></td>';
  }
  else 
    s = '<td>' + value + '</td>';
  return s;
}
function FEAAddPersonOrgView(xNode) {
  var s;
  s = '<tr>';
  s = s + FEAAddPersonOrgViewTD(xNode,'DL_Name',1,'DL_FullName');
  s = s + FEAAddPersonOrgViewTD(xNode,'DL_OrganisationTitle');
  s = s + FEAAddPersonOrgViewTD(xNode,'DL_Role');
  s = s + '</tr>';
  return s;
}

// 11.2.2014 - UPS - glemt noget - 13/6-2014 - mmq - rettet
function FEAcheckperson() {
 try {
   var sFirstName, sLastName;
   var oEle = document.getElementById('DL_FirstName');
   if (oEle == null) {
	//alert('FEAcheckperson - DL_FirstName missing');
	oEle = document.getElementById('DL_FullName');
	var s = oEle.value;
	var i = s.lastIndexOf(' ');
	sFirstName = s.substr(0,i);
	sLastName = s.substr(i+1,s.length);
   }
   else {
	sFirstName = oEle.value;
	oEle = document.getElementById('DL_LastName');
	sLastName = oEle.value;
   }
//alert('start' + sFirstName + ' ' + sLastName);
   var oXML, sWhere;
   sWhere = 'DL_FirstName LIKE \'%' + sFirstName + '%\' AND DL_LastName LIKE \'%' + sLastName + '%\'';
   sWhere = 'DL_Name LIKE \'%' + sFirstName + '%' + sLastName + '%\'';
   //oXML = getEntityData2('count(*)','DL_Person',sWhere,'');
   oXML = getEntityData2('count(*)','DL_PersonOrganisationSearchView',sWhere,'');
//alert('Antal=' + oXML.xml);
//   var sAntal = getsafe(oXML, "//DL_Person");
   var sAntal = getsafe(oXML, "//DL_PersonOrganisationSearchView");
//alert(sAntal);
   if (sAntal == "")
     return;
   var iAntal = 1 * sAntal;
   if (iAntal > 0) {
     if (confirm('Der findes ' + sAntal + ' personer med samme navn. Vil du se dem')) {
       oXML = getEntityData2('*','DL_PersonOrganisationSearchView','DL_Name LIKE \'%' + sFirstName + '%' + sLastName + '%\'','');
//alert('Så viser vi personerne ' + oXML.xml);
       var sTable, xNodes, xNode;
       xNodes = oXML.selectNodes('//DL_ENTITYDATA/DL_PersonOrganisationSearchView');
       sTable = '<table class="dltable" 	bgcolor="whitesmoke" border="0"><tr><th>Navn</th><th>Organisation</th><th>Rolle</th></tr>';
       for (var i=0; i<xNodes.length; i++) {
         xNode = xNodes[i];
         sTable = sTable + FEAAddPersonOrgView(xNode);
       }
       sTable = sTable + '<tr><td align="center" colspan="3"><input type="submit" value="Luk" onclick="FEAcloseperson()"></td></tr>';
       sTable = sTable + '</table>';
//alert('FEAcheckperson ' + sTable + ' ' + oXML.xml);	
       //oEle = document.getElementById('EXDDL2DIV');
       oEle = document.getElementById('DL_LastName');
	if (oEle == null)
		oEle = document.getElementById('DL_FullName');
       var oDIV = document.getElementById('EXDDL2DIV');
       if (oDIV == null)
         alert('EXDDL2DIV not found');
       else {
         oDIV.innerHTML = sTable;
         var x,y;
//oEle = document.getElementById('btnGoto');
         x = getElementLeft1(oEle);
         y = getElementTop1(oEle);
         //oDIV.style.width = oType.width;
         oDIV.style.left = x;
         oDIV.style.top =  y+16;
         oDIV.style.visibility = "visible";
//alert('Venter...');
//         oDIV.style.visibility = "hidden";     
       }
     }
   }
 } catch (e) {alert('FEAcheckperson ' + e.message);}
 return false;
}
function FEAcloseperson() {
   var oDIV = document.getElementById('EXDDL2DIV');
   if (oDIV != null)
     oDIV.style.visibility = "hidden";     
}
function FEAKnytOrganisationTilOrganisation(DLOrganisation) {
  try {
	var x = ExecuteProcedure('FEAKnytOrganisationTilOrganisation ' + DLOrganisation);
	EXGotoObject('DL_Organisation',DLOrganisation);
  } catch (e) {alert('FEAKnytOrganisationTilOrganisation ' + e.message);}
}

function Basket2Transmittal(DLId) {
//alert(DLId);
	ExecuteProcedure('EXMoveDocBasketToTransmittal @DLTransmittal='+DLId);
	EXReload();
}
function LOGotoTransmittalNamelist(DLId) { // 18.8.2014
    var oXML = getEntityData2('*', 'DL_Transmittal', 'DL_Id=' + DLId, '');
    var res = '';
//alert(oXML.xml);
    var NameList = getsafe(oXML,'//DL_NameList');
    if (NameList != '') {
		EXGotoObject('DL_NameList',NameList);
	}
}
function LOTransmittalRecipients(DLId) {
 var xTr=getEntityData('DL_Transmittal','DL_Id='+DLId,'');
 var DLNameList = getsafe(xTr,'//DL_NameList');
 var DLPerson = getsafe(xTr,'//DL_Person');
 var sRecipients = getsafe(xTr,'//DL_Email');
 if (DLNameList != '') {
//   var xNL = getEntityData('DL_NameList','DL_Id='+DLNameList,'');
// alert(DLNameList + ' ' + xNL.xml);
   var xEN = ExecuteProcedure('EXExpandNameList ' + DLNameList);
//alert(xEN.xml);
 var xNodes = xEN.selectNodes('//DL_Email');
   for (var i=0;i<xNodes.length;i++) {
     if (sRecipients != '') sRecipients += ';';
	 sRecipients += getsafe(xNodes[i],'../DL_Email');
   }
 }
 if (DLPerson != '') {
//   var xP = getEntityData('DL_Person','DL_Id='+DLPerson,'');
// alert(DLPerson + ' ' + xP.xml);
 var xM = getEntityData('DL_Communication','DL_EntityNameForeign=\'DL_Person\' AND DL_EntityId='+DLPerson+' AND DL_CommunicationType=\'EMAIL\'','');
 var sM = getsafe(xM,'//DL_Title');
   if (sM != '') {
     if (sRecipients != '') sRecipients += ';';
	 sRecipients += sM;
   }
 }
var sTitel = getsafe(xTr,'//DL_TItle');
 alert('DEBUG - recipients are\n' + sTitel + '\n' + sRecipients);
//return;
//newcaseemail('DLTransmittal','DL_Transmittal',DLId,sTitel,'',getsafe(xTr,'//DL_CaseNo'),sRecipients);
EXCopyToClipboard(sRecipients);
}
function FEAShowPersonAddresses(DLNameList,DLPerson,DLName) {
	loadcontent2('http://servsagssystem/EX_Custom/EXDynamicForm.html?Entity=DL_PersonAddressView&Where=DL_Person=' + DLPerson + '&D710s=DL_IsPrimaryAddress,DL_AddressXTypeDecode,DL_Street,DL_PostalCode,DL_City&ForeignKeys=DL_NameList,DL_Person&ForeignValues=' + DLNameList + ',' + DLPerson + '&Link=380','Adresser for ' + DLName);
}
function FEAShowPersonEmails(DLNameList,DLPerson,DLName) {
	loadcontent2('http://servsagssystem/EX_Custom/EXDynamicForm.html?Entity=DL_PersonEmailView&Where=DL_Person=' + DLPerson + '&D710s=DL_IsPrimaryEmail,DL_Email1&ForeignKeys=DL_NameList,DL_Person&ForeignValues=' + DLNameList + ',' + DLPerson + '&Link=409','Emails for ' + DLName);
}
function FEASetNameListEmail(DLNameList,DLPerson,DLEmailID) {
//alert('FEASetNameListEmail ' + DLNameList + ' ' + DLEmailID);
	var oXML = getEntityData('DL_NameListPersonExtra','DL_NameList=' + DLNameList + ' AND DL_Person = ' + DLPerson,'');
	var DLId = getsafe(oXML, '//DL_Id');
	if (DLId == '') { // New record
		var xOps
		xOps = '<DL_NameListPersonExtra>';
		xOps = xOps + '<DL_NameList>' + DLNameList + '</DL_NameList><DL_Person>' + DLPerson + '</DL_Person><DL_EntityId>' + DLEmailID + '</DL_EntityId>';
		xOps = xOps + '</DL_NameListPersonExtra>';
//alert(xOps);
		DLId = setEntityDetail('DL_NameListPersonExtra', xOps);
	}
	else { // Update existing record
		SetEntityItemValue('DL_NameListPersonExtra',DLId,getsafe(oXML,'//DL_Modified'),'DL_EntityId',DLEmailID);
	}
	alert('Specifik email for personen sat p\345 denne navneliste');
}
function FEASetNameListAddress(DLNameList,DLPerson,DLAddress) {
//alert('FEASetNameListAddress ' + DLNameList + ' ' + DLAddress);
	var oXML = getEntityData('DL_NameListPersonExtra','DL_NameList=' + DLNameList + ' AND DL_Person = ' + DLPerson,'');
	var DLId = getsafe(oXML, '//DL_Id');
	if (DLId == '') { // New record
		var xOps
		xOps = '<DL_NameListPersonExtra>';
		xOps = xOps + '<DL_NameList>' + DLNameList + '</DL_NameList><DL_Person>' + DLPerson + '</DL_Person><DL_Address>' + DLAddress + '</DL_Address>';
		xOps = xOps + '</DL_NameListPersonExtra>';
//alert(xOps);
		DLId = setEntityDetail('DL_NameListPersonExtra', xOps);
	}
	else { // Update existing record
		SetEntityItemValue('DL_NameListPersonExtra',DLId,getsafe(oXML,'//DL_Modified'),'DL_Address',DLAddress);
	}
	alert('Specifik adresse for personen sat på denne navneliste');
}
function EXZ() {
g_varSkipRefreshOnFocus = true;
$.getScript( "/EX_Resources/JS/RefreshOnFocus.js", function( data, textStatus, jqxhr ) {
  console.log( "RefreshOnFocus was performed." );
});
}
setTimeout('EXZ()',7000); // IT Case 1411
//alert('Exformatics_cust.js loaded');
$(function(){$('#EXWFITCRDIV:not(:contains("No Object"))').parents('.s4-wpcell-plain').first().addClass('displayBlock');});	