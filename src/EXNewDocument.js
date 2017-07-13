/********************************************************************
 *                                                                  *
 * Exformatics SharePoint 2007 javascript functions                 *
 *                                                                  *
 *  New document                                                    *
 *                                                                  *
 * Copyright (c) Exformatics.  All rights reserved.                 *
 *                                                                  *
 ********************************************************************/
// exnewdocument.js

// Change log
// Date        User  Description
// ==========  ====  =================================================================
// 01-02-2008  mmq   FKIL modifications retrieved. %0% in DL_FolderParams
// 09-04-2008  mmq   Ikon ændret: Add user 3.gif';
// 25-06-2008  mmq   Function EXOnopen DL_FullName --> DL_Name	
// 15-08-2008  mmq   Modtager feltet vises ikke hvis der ikke er nogle modtagere
// 18-08-2008  mmq   Plads mellem drop down, HENT og pick ikon
// 06-09-2008  mmq   DL_TemplateType 4:Project now handled
// 06-09-2008  mmq   Standardized code. Now uses Exformatics.js functions rather than inline
// 20-11-2008  mmq   Web part converted to HTML page
// 31-03-2009  mmq   Extra properties handled - see EXNewDocument.html
// 07-10-2009  mmq   Sat op hos LO - mindre fejl rettet her - sPDFId
// 21-11-2009  mmq   EXCreateDocTest modified
// 20-12-2009  mmq   Obligatoriske meta-data
// 16-05-2010  mmq   EXXMLHTTP new function used instead of new ActiveXObject("MSXML2.XMLHTTP.3.0")
// 21-03-2012  mmq   IT Case 3067 - use SQL sp rather than DL_D610StandardLetterView - new procedure is [EXEntityGetStandardLetters]
// 17-05-2012  mmq   12-0598 - if any OpenXML phrases exists - include that in EXDOC xml
// 04-12-2012  mmq   fixdefsave fixed
// 07-01-2013  mmq   Logic for handling DL_StandardLetterCreateAction added
// 17-01-2013  mmq   EXProps logic updated
// 06-08-2013  mmq   EXProps logic - minor bug fix
// 20-11-2015  mmq   Prefix logic

var oEXndforminit;
var oEXndFeedbackHTTP; // 16.5.2010
function EXCreateDocTest(DL_Entity, template, defsaveGeneric, oentityview,DLStandardLetter) {
	var DL_Id = GetRecentValue(DL_Entity);
	EXCreateDoc(DL_Entity, DL_Id, template, defsaveGeneric, oentityview, '','','',DLStandardLetter);
}
var oEXTemplateEntity, oEXTemplateQueryParam;
var bEXTemplateHTML; // 20.11.2008
function EXCreateDoc(newGroup1,DL_Entity, DL_Id, template, defsaveGeneric, oentityview, oXMLOperation,group,sPDFId,DLStandardLetter,DLFileName,DLFolderParams) { // 19.10.2009 - DLStandardLetter added // 7.4.2011 DLFileName added 17.5.2012 - DLFolderParams added
try {
	var sDocNo = '';
	if (EXECMCustomFileName==1) { // 20.11.2015
		var oF = document.getElementById('FileName');
		if (oF.value == '') {
			oF.focus();
			alert('Filename is mandatory');
			return;
		}
		DLFileName = oF.value;
		var x = ExecuteProcedure('EXGetNextDocNo @DLEntityId='+DL_Id+',@DLEntityNameForeign=\''+DL_Entity+'\',@Update=1');
		sDocNo = getsafe(x,'//FileName');
		DLFileName = sDocNo + DLFileName;
        /* 1.3.2016 - IT Case 5869 - AddIn 7.6 already adds extra "docx"
		if (newGroup1 == '1') // Word
			DLFileName += '.docx';
		else if (newGroup1 == '2') // Excel
			DLFileName += '.xlsx';
		else if (newGroup1 == '3') // Powerpoint
			DLFileName += '.pptx';
		*/
	}
	var DLStandardLetterCreateAction = ''; // 7.1.2013
	if (typeof(DLFolderParams) == 'undefined')
		DLFolderParams = '';
	if (typeof(DLStandardLetter) == 'undefined')
		DLStandardLetter = '';
	if (typeof(group) == 'undefined') // 21.9.2009 - new paramter - 5=PDF
		group = '';
	if (typeof(DLFileName) == 'undefined') // 5.8.2011 - bugfix
		DLFileName = '';

//defsaveGeneric = 'C:\\debug\\';
//alert("EXCreateDoc(" + DL_Entity + "," + DL_Id + "," + template + "," + defsaveGeneric + "," + oentityview + "," + group + "," + DLStandardLetter + "," + DLFileName + ")");
	if (typeof(sExtraProps) == 'undefined')
		sExtraProps = '';
	var oEX;
	if (oentityview == null) {
		oentityview = DL_Entity;
	}
	if (oentityview == '') {
	oentityview = DL_Entity;
	}
	oEX = '<EXDOC><DL_Entity>' + DL_Entity + '</DL_Entity><DL_Id>' + DL_Id + '</DL_Id><DL_EntityOrViewName>' + oentityview + '</DL_EntityOrViewName>';
//alert("EXCreateDoc(" + DL_Entity + "," + DL_Id + "," + template + "," + defsaveGeneric + "," + oentityview + "," + group + "," + DLStandardLetter + "," + DLFileName + "," + DLFolderParams + ")");
//return;
	if (DLStandardLetter != '')
		oEX += '<DL_StandardLetter>' + DLStandardLetter + '</DL_StandardLetter><DL_TemplateFile>'+ template + '</DL_TemplateFile>';
//alert(oEX);
//return;

	if (DLStandardLetter != '') { // 17.5.2012 - any OpenXML phrases
		var oCount = getEntityData2('count(*) as Count','DL_StandardLetterPhraseView','DL_StandardLetter = ' + DLStandardLetter + ' AND DL_PhraseType = 10','');
		if (getsafe(oCount, '//Count') != 0) {
			oEX += EXAddPhases(DLStandardLetter, DL_Entity, DL_Id);
		}

	}
//alert('done');
//return;
	if (oXMLOperation != '')
		oEX = oEX + '<DL_XMLOperation>' + oXMLOperation + '</DL_XMLOperation>';
	var oProps = document.getElementById('EXProps');
	if (oProps != null) // 17.1.2013
		if (oProps.value == '')
			oProps = null;
	if (oProps == null) { // 31.3.2009
		if (sExtraProps != '') {
			for (var i=0;i<sExtraProps.split(',').length;i++) { // 20.12.2009 - obligatoriske meta-data skal være udfyldt
				if (sPropMandatory.split(',')[i] == '1') {
					var DLPropName = sExtraProps.split(',')[i];
					var oEle = document.getElementById('sExtra' + DLPropName);
					if (oEle.value == '') {
						alert('Feltet ' + sSPSPropDisplayNames.split(',')[i] + ' er obligatorisk.');
						oEle.focus();
						return;
					}
				}
			}
			sEXProps = '';
			for (var i=0;i<sExtraProps.split(',').length;i++) {
				var DLPropName = sExtraProps.split(',')[i];
				var SPSPropName = sSPSPropNames.split(',')[i];
				var oEle = document.getElementById('sExtra' + DLPropName);
				if (oEle.value != '') {
					sEXProps += '<' + SPSPropName + '>' + oEle.value + '</' + SPSPropName + '>';
				}
			}
			if (sEXProps != '') {
				oEX += '<EXProps>' + sEXProps + getDocNoProp(sDocNo) + '</EXProps>';
			}
//alert('DEBUG\n' + oEX);
//return;
		}
		else if (sDocNo != '') // 24.11.2015
			oEX += '<EXProps>' + getDocNoProp(sDocNo) + '</EXProps>';
	}
	else {
		if (oProps.value != '') { // 6.8.2013 . minor bug
			//oEX = oEX + '<EXProps>' + MakeXMLSafe(oProps.value) + '</EXProps>';
			oEX = oEX + '<EXProps>' + oProps.value + getDocNoProp(sDocNo) + '</EXProps>'; // 17.1.2013 - removed MakeXMLSafe
		}
	}
	// 7.4.2011 code moved up
	var objNewDocs;
	objNewDocs = null;
	var defsave;
	if (DLFolderParams == '')
		FolderParams = queryString('DL_FolderParams',bEXTemplateHTML);
	else
		FolderParams = DLFolderParams;
	if (FolderParams == '') {
		var oXML =  getEntityData(DL_Entity, 'DL_Id = ' + DL_Id, '');
		FolderParams = getsafe(oXML, '//DL_FolderParams');
	}
	defsaveGeneric = EXFixGenericPath(defsaveGeneric, FolderParams);
	defsave = defsaveGeneric;
	if (defsaveGeneric.indexOf('%')>=0) {
		defsave=defsaveGeneric.replace('%DL_Id%',DL_Id);
		if (defsave.indexOf('%') >= 0) {
			defsave = FixDefSave(DL_Entity, DL_Id, defsave);
		}
	}

	oProps = document.getElementById('EXAuthor');
	var EXAuthor = '%DL_sAMAccountName%';
	if (oProps != null)
		if (oProps.value != '')
			EXAuthor = oProps.value;
	oEX = oEX + '<EXAuthor>' + EXAuthor + '</EXAuthor>';
	if (DLFileName != '') { // 7.4.2011
		if (DLFileName.indexOf('%')>=0)
			DLFileName = FixDefSave(DL_Entity, DL_Id, DLFileName);
		oEX = oEX + '<SaveWhenCreated>' + MakeXMLSafe(defsave + '/' + DLFileName) + '</SaveWhenCreated>';
		if (DLStandardLetter != '') {
			DLStandardLetterCreateAction = GetEntityItemValue('DL_StandardLetter',DLStandardLetter,'DL_StandardLetterCreateAction');
		}

	}
//alert(defsave + '/' + DLFileName);
//return;
	oProps = document.getElementById('DLCaseAddress');
	if (oProps != null)
		if (oProps.value != '') {
			oEX = oEX + '<DLCaseAddress>' + oProps.value +  '</DLCaseAddress>';
		}
	oEX = oEX + '</EXDOC>';
	// 23.5.2012 - remove
	//SetRecentValue('EXDOC', oEX);
	setRecentValueXML('EXDOC', oEX); // 8.12.2010
//alert(oEX);
//return;
	if (group == 5) { // 21.9.2009
		var oPDF = document.getElementById('PDF' + sPDFId);
		oPDF.style.display = 'none';
		var oInput = document.getElementById('PDFName' + sPDFId);
		var sFileName = oInput.value;
		if (sFileName == '')
			return;
		sFileName += '.pdf';
		defsave = defsave + '/' + sFileName;
//alert('SPSNewDocument(' + defsave + '.' + template + ') started');
//return;
		SPSNewDocument(defsave, template);
		parent.EXDWPRefresh();
		window.open(defsave);
		return;
	}
  //alert('Template ' + template + ' Default save location ' + defsave)
	try {
//    alert('now invoke CreateDocument(' + template + ',' + defsave + ')');
    //CreateDocument(template, defsafe);
		CreateDocument(template, defsave); // 19.9.2008 - utroligt at denne fejl har eksisteret så længe!!!
		EXDocPostCreateAction(DLStandardLetterCreateAction, defsave + '/' + DLFileName, DL_Entity, DL_Id); // 7.1.2013
		if (EXECMCustomFileName==1) { // 24.11.2015 - reload 
			EXNewDocumentInit();
			parent.EXDWPRefresh();
		}
		return;
	}
	catch (e) {/*alert("SharePoint.OpenDocuments.2 fails");*/};
	try {
		objNewDocs = new ActiveXObject('SharePoint.OpenDocuments.3');
		objNewDocs.CreateNewDocument(template, defsave);
		EXDocPostCreateAction(DLStandardLetterCreateAction, defsave + '/' + DLFileName, DL_Entity, DL_Id); // 7.1.2013
		if (EXECMCustomFileName==1) { // 24.11.2015 - reload 
			EXNewDocumentInit();
			parent.EXDWPRefresh();
		}
		return;
	}
	catch (e) {alert(e.message);};
	try {
		objNewDocs = new ActiveXObject('SharePoint.OpenDocuments.2');
		objNewDocs.CreateNewDocument(template, defsave);
		EXDocPostCreateAction(DLStandardLetterCreateAction, defsave + '/' + DLFileName, DL_Entity, DL_Id); // 7.1.2013
		if (EXECMCustomFileName==1) { // 24.11.2015 - reload 
			EXNewDocumentInit();
			parent.EXDWPRefresh();
		}
		return;
	}
	catch (e) {alert("EXCreateDoc - SharePoint.OpenDocuments.2 fails");};
}
catch (e) {alert("EXCreateDoc - failed " + e.message);};
}
function getDocNoProp(sDocNo) { // 24.11.2015 - dDocNo QuickPart added if created this way - should also be done in Office AddIn - we cannot do this if uploading documents
	if (sDocNo == '') return '';
	sDocNo = '<dDocNo>'+sDocNo.substr(0,sDocNo.length-1)+'</dDocNo>';
	return sDocNo;
}
function EXDocPostCreateAction(DLStandardLetterCreateAction, url, DLEntity, DLId) { // 7.1.2013
	var sAction = "_EXDocPostCreateAction("+DLStandardLetterCreateAction+",'"+url+"','"+DLEntity+"',"+DLId+")";
//alert(sAction);
	setTimeout(sAction, 15000); // 15 seconds for document to be created and saved
}
function _EXDocPostCreateAction(DLStandardLetterCreateAction, url, DLEntity, DLId) { // 7.1.2013
//alert('_EXDocPostCreateAction(' + DLStandardLetterCreateAction + ', ' + url + ', ' + DLEntity + ', ' + DLId + ') started');
	if (DLStandardLetterCreateAction == '')
		return;
	var i;
	if (url.indexOf('http') == 0) { // https:// - 8 - remove HTTP prefix
		i = url.substr(8).indexOf('/');
		url = url.substr(8+i);
	}
	var xDoc = getEntityData2('TOP 1 *','DL_Documents','DL_URLDocument = \'' + url + '\'', 'DL_Id desc');
	if (getsafe(xDoc, '//DL_Id') != '') {
//alert(xDoc.xml);
		if (DLStandardLetterCreateAction == '10') { // Add document to basket
			var EXDocumentID = getsafe(xDoc,'//DL_DocumentId');
			i = url.lastIndexOf('/');
			var Title = url.substr(i+1);
			i = Title.lastIndexOf('.');
			if (i>0)
				Title = Title.substr(0,i);
			_EXAddDocumentToTransmittal(false, 'DL_sAMAccountName', 0, EXDocumentID, Title, getAbsoluteURL(url), true, '', '',0, null);
		}
		else if (DLStandardLetterCreateAction == '20') { // Set DL_URLDocument on business object
			var xObject = getEntityData(DLEntity,'DL_Id='+DLId,'');
			if (getsafe(xObject,'//DL_Id') == DLId) {
				SetEntityItemValue(DLEntity,DLId,getsafe(xObject,'//DL_Modified'),'DL_URLDocument',getAbsoluteURL(url));
			}
		}
		EXReload();
	}
}

function EXAddPhases(DLStandardLetter, DL_Entity, DL_Id) { // 17.5.2012
	var oXML = getEntityData('DL_StandardLetterPhraseView','DL_StandardLetter = ' + DLStandardLetter,'DL_Bookmark,DL_SequenceNo');
	var xNodes = oXML.selectNodes('//DL_StandardLetterPhraseView');
	var sWhere = '';
	for (var i=0;i<xNodes.length;i++) {
		if (sWhere != '') sWhere += ',';
		sWhere += getsafe(xNodes[i],'DL_Phrase');
	}
	sWhere = 'DL_Id in (' + sWhere + ')';
	var xPhrases = getEntityData('DL_Phrase',sWhere, '');
	var xPhrase;
	var sXML = '<Phrases>';
	for (var i=0;i<xNodes.length;i++) {
		var DLId = getsafe(xNodes[i],'DL_Phrase');
		if (getsafe(xNodes[i], 'DL_PhraseType') == '10') { // OpenXML
			sXML += '<Phrase Type="XML" Bookmark="' + getsafe(xNodes[i], 'DL_Bookmark') + '">';	
			xPhrase = xPhrases.selectSingleNode('//DL_Phrase[DL_Id=' + DLId + ']');
			var sSQLSP = getsafe(xPhrase, 'DL_OpenXMLSQLSP');
//sSQLSP = 'X';
			if (sSQLSP != '') {
				sSQLSP = sSQLSP.replace('%DL_EntityNameForeign%', DL_Entity);
				sSQLSP = sSQLSP.replace('%DL_EntityId%', DL_Id);
				//alert(sSQLSP);
//sSQLSP = 'dbo.EXSysTemplateGetChangeLogBullet @AssemblyVersion=\'6.9.101\'';
				var xOpenXML = ExecuteProcedure(sSQLSP); //.selectSingleNode('//ExecuteProcedureResult').childNodes[0];
//alert(xOpenXML.xml);
var xOpenXML1 = xOpenXML.selectSingleNode('//OpenXML');
//alert(xOpenXML);
				if (xOpenXML1 == null) {
					// 20.11.2013 - text nodes
var xNodesX = xOpenXML.selectNodes('//row/data');
var s1 = '';
for (var jj=0;jj<xNodesX.length;jj++)
s1 += xNodesX[jj].text;
//alert(s1);
setRecentValueXML('ABC','<a>' + s1 + '</a>');
//EXCopyToClipboard(s1);
//					sXML += s1;
					sXML += '<OpenXML>' + s1 + '</OpenXML>';
//					sXML += '<OpenXML />';
				}
				else
					sXML += xOpenXML1.xml;
			}
			else
				sXML += '<OpenXML />';
			sXML += '</Phrase>';
//alert(sXML);
		}
		else {
			sXML += '<Phrase ID="' + DLId + '" Bookmark="' + getsafe(xNodes[i], 'DL_Bookmark') + '" URL="' + getsafe(xNodes[i], 'DL_URLDocument') + '" />';	
		}
	}
	sXML += '</Phrases>';
//alert('EXAddPhrases - Phrases retrieved\n' + sXML);
	return sXML;
}
function FixDefSave(DL_Entity, DL_Id, defsave) {
	var oXML = getEntityData(DL_Entity,'DL_Id = ' + DL_Id, '');
	try { // Replace all %<name>% with real value from xmlResponse!
		var i, j, XPath;
		i = defsave.indexOf('%');
		while (i > -1) {
			j = defsave.substr(i+1).indexOf('%') + i + 1;
			XPath = defsave.substring(i + 1, j);
			var v = getsafe(oXML, '//' + XPath);
//alert(XPath + '=' + v + '\n' + oXML.xml);
			defsave = defsave.replace('%' + XPath + '%', v);
			i = defsave.indexOf('%');
//alert(defsave + ' i=' + i);
		}
    //alert(defsave);
	} catch (e) {alert('FixDefSave2 ' + defsave + ' ' + e.message); };
	return defsave;
}
//
// - we probably need to change this to a class - so we can save DL_Entity as well as DL_Id as default save location
// then add a prototype to the class - render - which creates the details
// when clicked - do we need a prototype???
var oEXNDEntity;
var oEXNDQueryParam;
var oEXNDFlags; // 1 == author, 2 == interessent/modtager, 4 ==, 8 == add entity types drop down first
function EXgetEntityTemplates(DL_Entity, DL_QueryParam, iFlags, bParent) // 20.11.2008 - bParent added
{
	if (typeof(bParent) == 'undefined')
		bParent = false;
	bEXTemplateHTML = bParent;
	try {
		if (DL_QueryParam == null || DL_QueryParam == '')
			oEXNDQueryParam = DL_Entity;
		else
			oEXNDQueryParam = DL_QueryParam;
		oEXNDFlags = iFlags;
		if (oEXNDFlags & 0x8) {
			var oDiv = document.getElementById('myentities');

			oDiv.innerHTML = '<table><tr><td><DIV><SELECT id="DLCaseEntities" name="DLCaseEntities"><Option></Option></SELECT></DIV></td><td><INPUT type="button" name="EXBTN1" value="' + LEX_Go + '" onclick="EXonclickEntity()"></tr></table>';
			FillDropDown('DLCaseEntities','DL_WFCaseEntity','DL_EntityNameForeign','DL_Title',null,null,'');
			var oZ = document.getElementById('DLCaseEntities');
			oZ.size = 30;
	alert(oZ.outerHTML);
		}
		else
			_EXgetEntityTemplates(DL_Entity);

	} catch (e) {alert('EXgetEntityTemplates exception ' + e.message);}
}
function _EXgetEntityTemplates(DL_Entity) {
	try {
		if (typeof(DL_Entity) == 'undefined') // 10.9.2008
			DL_Entity = oEXNDEntity;
		oEXNDEntity = DL_Entity;
		if (oEXNDQueryParam == null || oEXNDQueryParam == 'undefined' || oEXNDQueryParam == '')
			oEXTemplateQueryParam = DL_Entity;
		else
			oEXTemplateQueryParam = oEXNDQueryParam;
//alert('que' + oEXTemplateQueryParam + queryString('DL_Activities'));
		var oDiv = document.getElementById("myid");
		var sId = queryString(oEXTemplateQueryParam,bEXTemplateHTML);
		if (sId == '' && !(oEXNDFlags & 0x8)) {
	//oDiv.innerHTML = 'No document templates found - please select an object';
			oDiv.innerHTML = LEX_NoTemplatesFound;
			return;
		}
		else
			oDiv.innerHTML = '';
		var oCase = getEntityData(DL_Entity, 'DL_Id = ' + sId, '');
		var DLWFCaseType = getsafe(oCase, '//DL_WFCaseType');
		var DLCaseLongState = getsafe(oCase, '//DL_CaseLongState');
//alert(sId + ' ' + DLWFCaseType);
//alert('EXgetEntityTemplates(' + DL_Entity + ',' + oEXNDQueryParam + ') started');
		var strWhere;
		if (DLWFCaseType == '')
			strWhere = 'DL_EntityNameForeign = \'' + DL_Entity + '\'';
		else
			strWhere = 'DL_EntityNameForeign = \'' + DL_Entity + '\' AND isnull(DL_WFCaseType,0) in (0,' + DLWFCaseType + ')';
		if (DLCaseLongState != '')
			strWhere += ' AND isnull(DL_CaseLongState,0) in (0, ' + DLCaseLongState + ')';

		// 21.3.2012 - use standard procedure
		//getEntityData2Async('*','DL_D610StandardLetterView',strWhere,'DL_TemplateType, DL_Title', EXhandleEntityTemplatesResponse);
		var sProc = '[EXEntityGetStandardLetters] @DLEntityNameForeign = \'' + DL_Entity + '\'';
		if (DLWFCaseType != '')
			sProc += ',@DLWFCaseType=' + DLWFCaseType;
		if (DLCaseLongState != '')
			sProc += ',@DLCaseLongState=' + DLCaseLongState;
//alert(sProc);
		ExecuteProcedureAsync(sProc, EXhandleEntityTemplatesResponse);
		return false;

		var xmldoc;
		xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
		xmldoc = xmldoc + '<getEntityData xmlns="http://doclife.net/svcDLEntity">';
		xmldoc = xmldoc + '<DL_Entity>DL_D610StandardLetterView</DL_Entity>';
		xmldoc = xmldoc + '<strWhere>' + strWhere + '</strWhere><strOrderBy>DL_TemplateType, DL_Title</strOrderBy>';
		xmldoc = xmldoc + '</getEntityData>';
		xmldoc = xmldoc + '</soap:Body></soap:Envelope>';
		oEXTemplateEntity = DL_Entity;
		SOAPAction = 'http://doclife.net/svcDLEntity/getEntityData';
		oEXndFeedbackHTTP = EXXMLHTTP();
		oEXndFeedbackHTTP.open("POST", getAbsoluteURL('/ex_sqlsvc/svcDLEntity.asmx?op=getEntityData'), true); 
		oEXndFeedbackHTTP.setRequestHeader("Content-Type","text/xml; charset=utf-8");
		oEXndFeedbackHTTP.setRequestHeader("SOAPAction", SOAPAction);
		oEXndFeedbackHTTP.onreadystatechange = EXhandleEntityTemplatesResponse;
		oEXndFeedbackHTTP.send(xmldoc);  
		return false;  //We return false so that the form doesn't attempt to POST or GET
	} catch (e) {alert('EXgetEntityTemplates exception ' + e.message); };
}
function EXhandleEntityTemplatesResponse() {
	try {
		if (oEXndFeedbackHTTP.readyState==4) {
			// Use responseXML directly
			//var xmlResponse = EXDOMDocument(); //new ActiveXObject("MSXML2.DOMDocument.3.0");
			//xmlResponse.async=false;
			//xmlResponse.loadXML(oEXndFeedbackHTTP.responseText);
      //var oDropDown = document.getElementById("EXDropDown"); //document.createElement("SELECT");
			var oDropDown = document.createElement("SELECT");
			oDropDown.id = "EXDOCSELECT";
//      oDropDown.name = "EXDropDown";
			if (false) { // xmlResponse == null) {
				alert('empty xmlResponse');
			}
			else {
				//var xNodes = xmlResponse.selectNodes("//DL_ENTITYDATA/DL_D610StandardLetterView");
				var xNodes = oEXndFeedbackHTTP.responseXML.selectNodes("//DL_ENTITYDATA/DL_D610StandardLetterView"); // 16.5.2010
				if (xNodes == null) {
// alert('null');
				}
				else {
					var optGroup;
					var oldGroup;
					oldGroup = "";
					var i, xN, newGroup;
					var oDiv = document.getElementById("myid");
// alert(xNodes.length);
					if (xNodes.length == 0) {
						oDiv.innerHTML = 'No document templates found';
						return;
					}
					for(var i=0; i<xNodes.length; i++) {
						xN = xNodes[i];
						var oOption = document.createElement("OPTION");
						newGroup = getsafe(xN, "DL_TemplateType")
						if (!(oldGroup == newGroup)) {
              // add Optgroup - Word, Excel, PowerPoint, Project
							if (!(oldGroup == ""))
								oDropDown.appendChild(optGroup);
							optGroup  = document.createElement("OPTGROUP");
							switch (newGroup) {
								case "1": optGroup.label = "Word"; break;
								case "2": optGroup.label = "Excel"; break;
								case "3": optGroup.label = "PowerPoint"; break;
								case "4": optGroup.label = "Project"; break;
							}
							optGroup.style.backgroundImage = "url(img/view.gif)";
							oldGroup = newGroup;
						}
						var s = getsafe(xN, "DL_Title")
						oOption.innerHTML = s;
						oOption.value = getsafe(xN, "DL_Id");
						oOption.oFile = getsafe(xN, "DL_TemplateFile");
						oOption.oDefSave = getsafe(xN, "DL_DefSave");
						oOption.oXMLOperation = getsafe(xN, "DL_XMLOperation");
						oOption.oEntityView = getsafe(xN, "DL_EntityOrViewName");
//alert('view=' + xN.xml);
//oOption.setAttribute("value", s);
						optGroup.appendChild(oOption);
					} // for
					if (!(optGroup == null))
						oDropDown.appendChild(optGroup);
				}
	     		}
			var oInput = document.createElement("INPUT");
			oInput.type = "BUTTON";
			oInput.value = LEX_Go;
			oInput.name = "EXBTN";
			oInput.onclick = EXonclick;
			var oSpan = document.createElement('SPAN'); // 18.8.2008
			oSpan.style.width = '2px';
			oSpan.innerHTML = ' '; // 20.11.2008 - add separator
			oDiv.appendChild(oSpan);
			oDiv.appendChild(oDropDown);
			oSpan = document.createElement('SPAN'); // 18.8.2008
			oSpan.style.width = '3px';
			oSpan.innerHTML = '&nbsp;'; // 20.11.2008 - add separator
			oDiv.appendChild(oSpan);
			oDiv.appendChild(oInput);

/*  drop down field for Author */
			if (oEXNDFlags > 0 && oEXNDFlags < 4) {
				var oInput;
				if (!bEXTemplateHTML) { // 20.11.2008
					oInput = document.createElement("IMG");
      //oInput.type = "BUTTON";
					oSpan = document.createElement('SPAN'); // 18.8.2008
					oSpan.style.width = '5px';
					oSpan.innerHTML = '&nbsp;'; // 20.11.2008 - add separator
					oDiv.appendChild(oSpan);
					oInput.src = '/EX_Resources/gif/16x16/Add user 3.gif';
					oInput.alt = LEX_SelectAuthorReceiver;
					oInput.style.cursor = 'pointer';
					oInput.name = "EXOPEN";
					oInput.id = "EXOPEN";
					oInput.onclick = EXonopen;
					oDiv.appendChild(oInput);
				}
				oInput = document.createElement("DIV")
				oInput.id = 'exndform';
				oInput.name = 'exndform';
     //oInput.onclick = EXexndformclick;
				if (!bEXTemplateHTML)
					oInput.style.backgroundColor = 'whitesmoke';
				oInput.style.display = 'none';
     //alert("done");
				oDiv.appendChild(oInput);
				var oEle = document.getElementById('exndform');
				if (oEle == null)
					alert('exndform not found');
     //oEle.innerHTML = '<table cellspacing="0" cellpadding="0"><tr><td colspan="2">Please pick document recipient</td></tr><tr><td>Person</td><td><input id="EXPerson" type="hidden" onpropertychange="javascript:EXPersonChange()"><input style="width:180px" id="EXPersonDenorm" type="text"><a href="javascript:EXPickPerson()"><img src="/EX_Resources/img/16x16/add.gif" border="0"></a></td></tr><tr><td>Organisation</td><td><input id="EXOrganisation" type="hidden" onpropertychange="javascript:EXOrganisationChange()"><input style="width:180px" id="EXOrganisationDenorm" type="text"><a href="javascript:EXPickOrganisation()"><img src="/EX_Resources/img/16x16/add.gif" border="0"></a></td><tr><td>CVR</td><td><input style="width:180px" id="EXCVR" type="text"><a href="javascript:EXPickCVR()"><img src="/EX_Resources/img/16x16/add.gif" border="0"></a></td></tr></tr><tr><td colspan="2">Debug info only: <input style="width:300px" type="text" id="EXProps" name="EXProps"></td></tr></table>';
				var sTable = '<table border="0" cellspacing="0" cellpadding="0">';
				if (oEXNDFlags & 0x1) 
					sTable = sTable + '<tr><td align="left"><select name="EXAuthor" id="EXAuthor"><OPTION></OPTION></select></td><td>&nbsp;</td><td class="ms-vb">' + LEX_Author + '</td></tr>';
				if (oEXNDFlags & 0x2) 
		//sTable = sTable + '<tr><td><select name="DLCaseAddress" id="DLCaseAddress"><OPTION></OPTION></select></td><td class="ms-vb">Modtager</td></tr>';
					sTable = sTable + '<tr id="trDLCaseAddress"><td align="left"><select name="DLCaseAddress" id="DLCaseAddress"><OPTION></OPTION></select></td><td>&nbsp;</td><td class="ms-vb">Modtager</td></tr>';
				sTable = sTable + '</table>';
				oEle.innerHTML = sTable;
     //FillDropDown('EXAuthor','DL_sAMAccountName','DL_sAMAccountName','DL_FullName');
				oEXndforminit = false;
			}
//alert(oEle.innerHTML);
/* */
//document.write(oDropDown);
			if (bEXTemplateHTML) { // 20.11.2008
				EXonopen();
				// Fix width of all SELECT
				var oSELECTS = document.getElementsByTagName('SELECT');
				var iWidth = 0;
				var iOffset = 4000;
				for (var i=0;i<oSELECTS.length;i++) {
					if (iWidth < oSELECTS[i].offsetWidth)
						iWidth = oSELECTS[i].offsetWidth;
					if (iOffset < oSELECTS[i].offsetLeft)
						iWidth = oSELECTS[i].offsetLeft;
					//alert(i + ' ' + oSELECTS[i].offsetLeft + ' ' + oSELECTS[i].offsetWidth);
				}
				for (var i=0;i<oSELECTS.length;i++) {
					oSELECTS[i].style.width = iWidth + 'px';
					oSELECTS[i].style.left = iOffset + 'px';
				}
			}
		}
	} catch (e) {alert('EXhandleEntityTemplatesResponse ' + e.message); };
}
function EXonclickEntity() {
	var oEle = document.getElementById('DLCaseEntities')
	if (oEle.value != '')
		_EXgetEntityTemplates(oEle.value);
}
function EXonclick() {
  var oSel = document.getElementById("EXDOCSELECT");
  var i = oSel.selectedIndex;
  var DL_Id = oSel.options[i].value; // DL_Id of DL_Template
  var oFile = oSel.options[i].oFile;
  var odefsave = oSel.options[i].oDefSave;
  var oentityview = oSel.options[i].oEntityView;
  var oXMLOperation = oSel.options[i].oXMLOperation;
  var DL_Entity = oEXTemplateEntity; // Must be saved in unique DIV
  var DL_Id = queryString(oEXTemplateQueryParam,bEXTemplateHTML);
  EXCreateDoc(DL_Entity, DL_Id, oFile, odefsave, oentityview, oXMLOperation);
}
function EXonopen() {
	var oEle = document.getElementById('EXOPEN');
	var oDiv = document.getElementById('exndform');
	if (oDiv.style.display == 'none') {
		if (!oEXndforminit) {
			if (oEXNDFlags & 0x1)
				FillDropDown('EXAuthor','DL_sAMAccountName','DL_sAMAccountName','DL_Name',null,null,'%DL_sAMAccountName%');
			if (oEXNDFlags & 0x2) {
				var DLEntityId = queryString(oEXNDQueryParam,bEXTemplateHTML);
				if (DLEntityId == '')
					alert('could not find param ' + oEXNDQueryParam + bEXTemplateHTML);
				else {
					FillDropDown('DLCaseAddress','DL_CaseAddressView','DL_Id','DL_AddressTitle','DL_EntityNameForeign',oEXNDEntity,null,'DL_EntityId',DLEntityId);
					var oEle = document.getElementById('DLCaseAddress'); // 15.8.2008
					if (oEle.options.length < 2) {
						//alert('Modtager ikke tændt');
						oEle = document.getElementById('trDLCaseAddress');
						oEle.style.display = 'none';
					}
				}
			}
		}
		oEXndforminit = true;
		oDiv.style.display = '';
	}
	else {
		oDiv.style.display = 'none';
	}
//alert('EXonopen');
}
function EXexndformclick() {
alert('EXexndformclick');
  EXHideForm();
}
function EXPickPerson() {
	try {
		EXDoDynamicSearch('EXPerson', 'DL_Contacts', null, null, 'EX_cn,DL_EXCompany', '')
	} catch (e) {alert('EXPickPerson ' + e.message);}
}
function EXPersonChange() {
//alert('EXPersonChange');
	var oEle = document.getElementById('EXPerson');
	var oXML = getEntityData('DL_Contacts','DL_Id=' + oEle.value,'');
//alert(oXML.xml);
	oEle = document.getElementById('EXProps');
	var oNode = oXML.selectSingleNode('//DL_ENTITYDATA/DL_Contacts');
	oEle.value = oEle.value + AddNode(oXML, '//DL_EXCompany','Company') + AddNode(oXML, '//EX_cn','Name') + AddNode(oXML, '//EX_street','Street') + AddNode(oXML, '//EX_postalcode','ZIP') + AddNode(oXML, '//EX_l','City');;
}

function EXPickOrganisation() {
	try {
		EXDoDynamicSearch('EXOrganisation', 'DL_EXCompany', null, null, 'DL_EXCompany', '')
	} catch (e) {alert('EXPickOrganisation ' + e.message);}
}
function EXOrganisationChange() {
	var oEle = document.getElementById('EXOrganisation');
	var oXML = getEntityData('DL_EXCompany','DL_Id=' + oEle.value,'');
//alert(oXML.xml);
	oEle = document.getElementById('EXProps');
	oEle.value = oEle.value + AddNode(oXML, '//DL_EXCompany','Company') + AddNode(oXML, '//DL_Street','Street') + AddNode(oXML, '//DL_PostalCode','ZIP') + AddNode(oXML, '//DL_City','City');
}
function AddXML(value, tag) {
	return '<' + tag + '>' + MakeXMLSafe(value) + '</' + tag + '>';
}
function AddNode(oXML, XPath, tag) {
	return AddXML(getsafe(oXML,XPath), tag)
}

// CVR - NNMarkedsdata
function EXPickCVR() {
	try {
		var oEle = document.getElementById('EXCVR');
		if (oEle != null) {
			if (oEle.value != '') {
				var oXML = EXgetCompanyFromCVR(oEle.value);
				oEle = document.getElementById('EXProps');
				oEle.value = oEle.value + AddNode(oXML, '//officialName','Company') + AddNode(oXML, '//street','Street') + AddNode(oXML, '//zipCode','ZIP') + AddNode(oXML, '//district','City');
			}
		}
	} catch (e) {alert('EXPickCVR ' + e.message);}
}

function EXgetCompanyFromCVR(cvrnr) {
	var s = '<mns:search xmlns:mns="http://com.stibo.net/nne/3.0/NNE" SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><Question_1 xsi:type="ns2:Question"><cvrNo xsi:type="xsd:int">' + cvrnr + '</cvrNo><district xsi:type="xsd:string"></district><houseNo xsi:type="xsd:string"></houseNo><name xsi:type="xsd:string"></name><nameStartsWith xsi:type="xsd:boolean">1</nameStartsWith><phone xsi:type="xsd:string"></phone><street xsi:type="xsd:string"></street><streetStartsWith xsi:type="xsd:boolean">1</streetStartsWith><tdcId xsi:type="xsd:int">0</tdcId><zipCode xsi:type="xsd:int">0</zipCode></Question_1><int_2 xsi:type="xsd:int">1</int_2><int_3 xsi:type="xsd:int">1</int_3><int_4 xsi:type="xsd:int">1</int_4><String_5 xsi:type="xsd:string">uffe</String_5></mns:search>';
	var xmldoc, FeedbackHTTP;
	xmldoc='<?xml version="1.0" encoding="utf-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://com.stibo.net/nne/3.0/NNE" xmlns:ns2="http://com.stibo.net/nne/3.0/Types/NNE" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"><SOAP-ENV:Body>';
	xmldoc = xmldoc + s;
	xmldoc = xmldoc + '</SOAP-ENV:Body></SOAP-ENV:Envelope>';

	FeedbackHTTP = EXXMLHTTP();
//    FeedbackHTTP.Open("POST", 'http://service.nnerhverv.dk/nne-ws/2.1/NNE?op=NNE_PortType_search">', false); 
	FeedbackHTTP.open("POST", 'http://service.nnerhverv.dk:80/nne-ws/3.0/NNE', false); 
	FeedbackHTTP.setRequestHeader("Content-Type","text/xml; charset=utf-8");
    //FeedbackHTTP.setRequestHeader("SOAPAction", 'nms:search');
	try {
		FeedbackHTTP.send(xmldoc);
	} catch (e) {alert('EXgetCompanyFromCVR ' + e.message);}
	var oXML;
	oXML = FeedbackHTTP.responseXML;
	FeedbackHTTP = null;
	return oXML;
}


//alert('EXNewDocument.js loaded');
