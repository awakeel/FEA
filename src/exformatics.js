<<<<<<< HEAD
ï»¿/*
=======
/*
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
*                                                                  *
* Exformatics SharePoint 2003, 2007 javascript functions           *
*                                                                  *
* Copyright (c) Exformatics.  All rights reserved.                 *
*                                                                  *
********************************************************************/

// Change log
// Date        User  Description
// ==========  ====  =================================================================
// 01-02-2008  mmq   FKIL modifications retrieved. %0% in DL_FolderParams
// 07-02-2008  mmq   EXBRMCreateMail - new functions fo er creating BRM emails with case documents attached
// 13-02-2008  mmq   InitDLDashboard modified - Initialize web parts here rather than invoking javascript directly in web part
// 21-02-2008  mmq   EXActivitiesRollout - stored procedure
// 21-02-2008  mmq   SetEntityItemValue - added 3. property
// 21-02-2008  mmq   EXCloseTask - set text decoration on line when closed
// 25-02-2008  mmq   EXGotoCase - new function, go to a DL_CaseNo (generalised from LO and FTF)
// 26-02-2008  mmq   AJAXDocumentBasket function added - EXInitMainEntity
// 27-02-2008  mmq   EXDocBasketToEntity implemented
// 04-03-2008  mmq   SearchAD functionality added
// 06-03-2008  mmq   getsafe function - duplicate removed. Critical error!
// 11-03-2008  mmq   EXTrackMail - new function in Outlook
// 12-03-2008  mmq   mapcontact - displays Google Map for contact location
// 26-03-2008  mmq   ActionSubMenu - changed from 4 to 8 seconds
// 01-04-2008  mmq   FKIL code merged into this.
// 09-04-2008  mmq   EXInitAJAXDocumentBasket - New icons
// 09-04-2008  mmq   EXDocBasketRefresh - New delete icon
// 09-04-2008  mmq   EXshowListData - new HTML column width
// 09-04-2008  mmq   getEntityData3 created.
// 10-04-2008  mmq   Query modified to use MSSQLFT search - can now search for documents in specific areas
// 13-04-2008  mmq   Floating Document basket - EXInitMainEntity
<<<<<<< HEAD
// 15-04-2008  mmq   Flere justeringer - smÃ¥fejl - rettet.
// 19-04-2008  jrd   Lille Ã¦ndring i EXCloseTask for bagud kompatibilitet
=======
// 15-04-2008  mmq   Flere justeringer - småfejl - rettet.
// 19-04-2008  jrd   Lille ændring i EXCloseTask for bagud kompatibilitet
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
// 23-04-2008  mmq   showAppointment, new javascript and Outlook AddIn function - only if CreatedBy = %WUSER% should be added as criteria!
// 24-04-2008  mmq   Upgraded CorpNordic - fixed small stuff in JS
// 29-04-2008  mmq   _EXInitAJAXDocumentBasket function copied from CN
// 12-05-2008  mmq   EXAssignTaskToCase added
// 18-05-2008  mmq   _EXShowListData - minor fix
// 01-06-2008  mmq   getDictionaryData added
// 02-06-2008  mmq   newappointment - dlmeetingtype added as parameter
// 02-06-2008  mmq   EXBRMNewContact - negative contact for Frie
// 03-06-2008  mmq   EXInitMainEntity - bDispalyENtity parameter used in meeting
// 09-06-2008  mmq   mapexcompany - new function
// 11-06-2008  mmq   Code from Frie merged into solution - excluding LOCALIZATION - what do we do?'
// 11-06-2008  mmq   _EXInitAJAXDOcumentBasket localized - EXLanguage modified
// 17-07-2008  mmq   EXOpenPickFacet added
// 28-07-2008  mmq   Minor modifications, loadentityexcel adjusted
// 29-07-2008  mmq   FillDropDown modified - overwrite value only if field has no value - strange it worked before
// 08-08-2008  mmq   PickDictionary routines moved to same location
// 14-08-2008  mmq   EXLoadQuickSearch - portaltype added
// 16-08-2008  mmq   EXLoadQuickSearch - now opens in new DIV rather than DL_Information
// 18-08-2008  mmq   EXInitMainEntity - case log added as flag
// 19-08-2008  mmq   getResource localized
// 19-08-2008  mmq   EXInitMainEntity - foreign key added
// 26-08-2008  mmq   LEXSearchCaseDocuments localized
// 28-08-2008  mmq   EXTX - stress test measurement and logging
// 01-09-2008  mmq   Changes from Tele Greenland taken back. QuickSearch modified a little.
// 03-09-2008  mmq   EXAdvDrop retrieved from LO and made standard functionality (needed for Tele)
// 07-09-2008  mmq   loadentity - appendparam missing as parameter - fix
// 07-09-2008  mmq   displayentity modified - now uses EXDisplayEntity.html
// 09-09-2008  mmq   Default security values for workflow - EXhandleDLWFCaseTypeChange
// 09-09-2008  mmq   EXGotoCase - localized
// 11-09-2008  mmq   EXAdvDropaddChar modified to support DynamicSearch and AJAX
// 16-09-2008  mmq   loadentitysecurity - new function
// 29-09-2008  mmq   EXGotoCase - now search much better
// 01-10-2008  mmq   EXGotoObject - check to see if object exists - if not warn user.
// 09-10-2008  jd    ShowAppointment: changed error message.
// 23-10-2008  mmq   DLopentask, opentask - if cannot open in Outlook loadentity instea
// 23-10-2008  mmq   EXAdvDropaddchar - arrow up and down adjusted
// 09-11-2008  mmq   EXTX - stress testing logic - removed
// 15-02-2009  jrd   Changed Freetext to Contains in MSSQLFT freetext search to handle wildcard search
// 12-03-2009  mmq   LO functionality, Covert2PDF, added
// 15-03-2009  mmq   _EXshowListData - optimized for speed - 3 getEntity changed to 1
// 30-03-2009  mmq   EXShowDeleteCase added, EXformatData moved from EXDynamicForm.js to this file
// 08-05-2009  mmq   EXGotoObject optimized. SetRecentValue now works asynchronously.
// 19-05-2009  mmq   EXConvertDocBasket2PDF - errors only reported once
// 19-05-2009  mmq   Page title set based on DL_CMAllView in EXInitMainEntity
// 20-06-2009  mmq   IT Case 393 - DocBasket 2 PDF nu en konfigurationsparameter
// 16-08-2009  mmq   Dynamic reload - 09-0099
// 21-08-2009  mmq   getEntityData2Async added - together with response handler
// 15-09-2009  mmq   IT Case 748 - SELECT FillDropDown og EXFillWFCaseType fejler begge to - da koden fjerner onchange event'en.
// 03-11-2009  mmq   Security model on portal added
// 04-12-2009  mb    Added bDisable parameter to FillDropDown enabling emptying and disabeling DropDowns based on input.
// 18-12-2009  mmq   Document basket menu is now a drop down list
// 30-12-2009  mmq   EXAddToFavorites - ingen alert mere
// 03-01-2010  mmq   09-0319 - modifications
// 12-02-2010  mmq   ctrlKey -->shiftKey - as this is more standard internet functionality
// 13-02-2010  mmq   http://intranet removed from code
// 03-05-2010   mb   Added RemoveOnClick function and updated EXPrintSpecial to remove all onclick's and href's from teh html code.
// 16-05-2010  mmq   EXXMLHTTP - new function - replaces XMLHTTP
// 16-05-2010  mmq   XMLHTTP - .Open-.open, .Send-.send, .ResponseXML-.responseXML
<<<<<<< HEAD
// 23-05-2010  mmq   Twitter funktionalitet tilfÃ¸jet - omdÃ¸bt til Exformatics
=======
// 23-05-2010  mmq   Twitter funktionalitet tilføjet - omdøbt til Exformatics
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
// 17-06-2010  mmq   EXInitMainEntity - now using setTimeout in order to increase loading speed - start all functions asap
// 12-07-2010  mmq   http://intranet moved to Exformatics_cust.js as variable EXServerRoot
// 15-07-2010  mmq   EXformatValue - DL_Money added and formatted nice
// 18-07-2010  mmq   IT Case 1323 - PickDictionarySearch added
// 24-07-2010  mmq   DL_ExformationType included in exforamtions
// 05-08-2010  mmq   EXPickDictionarySearch - default value added
// 16-08-2010  mmq   EXDocBasketCreateMail added
// 06-10-2010  mmq   Added ExformaticsOutlookAddIn.Connect
// 29-10-2010  mmq   EXReportITCase modified - now link with Exformatics SharePoint Master Page
// 28-01-2011  mmq   Added iButtonNames. 
// 12-03-2011  mmq   EXWFSearchCases - added case specific data in search
// 21-03-2011  mmq   Workflow specific data search - parent node can be empty - we might need to change this
// 26-03-2011  jd    Rettet fejl i loadentityexcel: where clause ej XMLSafe
// 26-03-2011  jd    Rettet fejl i MakeXMLSafe: Quote og dobbelt-quote ej XMLSafe
// 30-03-2011  mmq   IT-sag 2034
// 06-04-2011  mmq   Year databases supported in EXGotoObject
// 07-04-2011  mb    Added support for new AddIn (ExformaticsOfficeExtension.AddinModule)
// 15-04-2011  mmq   EXResetAllFavorites added - avoid having to click all favorites one by one
// 29-04-2011  mmq   IT Case 2035 - InfoPath - MapToAll
// 30-05-2011  mmq   IT Case 2186 - avoid alert if Outlook not started
// 06-06-2011  mmq   IT Case 2186 - getOutlook altered to use new ActiveXObject only and give an alert to check security
// 21-06-2011  mmq   Added debug functionality
// 06-07-2011  mmq   IT-Case 679
// 12-07-2011  mmq   IT Case 2367 - cross browser support
// 15-07-2011  mmq   IT Case 2362 - EXFillWFCaseType
// 25-07-2011  mmq   IT Case 2403 - getsafe fails
// 05-08-2011  mmq   IT Case 2414 - onmouseover on images set using the title property in IE8
// 29-08-2011  mmq   IT Case 2478 - identifical to 2403.
// 05-09-2011  mmq   EXWPMenuGet - now supports multiple keypairs
// 08-09-2011  mmq   DLLinkObject2Object2 added
// 01-11-2011  mmq   IT_Case 2558
<<<<<<< HEAD
// 09-11-2011  mmq   IT_Case 2750 TilfÃ¸jet versionstjek
=======
// 09-11-2011  mmq   IT_Case 2750 Tilføjet versionstjek
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
// 18-11-2011  mmq   IT-Case 2679
// 15-12-2011  mmq   setCookie - if expires is null then cookies are NOT saved between sessions
// 21-01-2012  mmq   Set width for DL_Information IFRAME in order to avoid scrollbars
// 26-01-2012  mmq   loadentityexcel modified - new parameters
// 30-01-2012  mmq   ApproveDocumentProcess
// 25-02-2012  mmq   EXLoadNewDocument localization
// 25-02-2012  mmq   EXIWould - EXInitMainEntity - set title to specific DL_WFCaseType when creating new object
// 28-03-2012  mmq   EXHTML2XLS - minor modifications - error found at VBA - workflow decode didn't work
// 16-04-2012  mmq   EXLoadActivityStream added
// 10-05-2012  mmq   IT Case 3218 - document.all.item(..) modified
// 02-06-2012  mmq   EXGotoCase updated - code from LO
// 05-06-2012  mmq   EXWPMenuGet - minor modifications
// 05-06-2012  mb    EXHTML2XLS - Added lookup of jQuery - type ahead dictionaries when exporting to Excel.
// 15-06-2012  mmq   EXHTML2XLS - format date in a new way - need to consider this for DynamicSearch - localization needed
// 01-08-2012  mmq   userLanguage function added - retrieve ASP.Net language setting in browser - NOT POSSIBLE IN javascript !!!
// 07-08-2012  mmq   EXWPMenuGet - handle workflow actions
// 09-08-2012  mmq   12-0845 - LO wish - show icons in Document Basket and Document Web Parts rather than just functions
// 29-08-2012  mmq   I would like ... DL_WFCaseType - load right object if data exists
// 11-12-2012  mmq   Document package creation will display stamkort
// 04-01-2013  mmq   Join document package into one PDF document, sort sequence etc (used at LO - and VBA)
// 15-01-2013  mmq   Add documents in basket to activity stream
// 19-06-2013  mmq   EXConvertBasket2PDF modified - so MSG files are not converted. This mean that we cannot combine all documents into one bug PDF file
// 26-07-2013  mmq   SetEntityItemValue - return true|false
// 02-08-2013  mmq   date functions now use jQuery datepicker - formatting etc should now work in any language
// 01-12-2014  tas   Changed width of center column to 41%, on 43% it was causing UI issue (3rd column dropped to bottom)
// 05-12-2014  tas   Creating overlay and show loading icon while switching business object
// 20-12-2014  os    Added ExformaticsMovePost method to move one post to another one
// iButtonNames - check numbers below - duplicate
// Naming standard iButton<Function> (CamelCase)
// 31.3.2013 - check out DL_D760:DL_DocumentBasketButtonCodes for detail - documentation found here
// 13-02-2015 tas  To avoid alert box when leaving page with some data altered in DynamicForm
// 03-09-2015 tas  Added method resizeIframe to reset height of iframe
// 06-11-2015  mmq   Use jQuery dialog in EXLoadQuickSearch
// 14+04+2016  mmq  Add EXWFOpenCasesExcel
<<<<<<< HEAD
//Testing purpose new LO angular 4
var LEX_CannotGotoObjectProbablyNoAccess = 'No access';
function  goToURL(page, id){
	document.location = 'http://sagssystem/EX_Custom/FEA/index.html?&DL_Id='+id+'&page='+page.split('_')[1];
}
function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    document.getElementById("iframeheader").style.display = 'inline-block';
}
=======


>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
var iButtonDelete = 1; 	 //   01 - Empty document basket button
var iButtonNotify = 2; 	 //   02 - Notify document basket
var iButtonTransmittal = 4;  //   04 - Create transmittal based on document basket
var iButtonCreateEmail = 8;  //   08 - Create new email with document basket documents contained
var iButtonLink = 16; 	 //   16 - Copy document basket to actual business object as linked documents
var iButtonExportBasket = 32;  //   32 - Export document basket to desktop
//   64 - EXMoveCopyDocuments action
var iButtonConvert2PDF = 128;    //  128 - Convert to PDF
var iButtonPasteDocuments = 256; //  256 - Paste to folder //06-07-2011 BH Corpnordic update
var iButtonCreateDocumentApproval = 512; // 30.1.2012
var iButtonShowIcons = 1024; 	//  1024 - show icons on top - LO wish - 120845 - 9.8.2012
var iButtonPrint = 2048;
var iButtonJoinBasket = 4096;    // 4096 - join basket into one PDF document
var iButtonToStream = 8192; // 8192 - add documents to activity stream on current object - one message for each document

var SPSAudience = '';
var ns4 = document.layers;
var ie4 = document.all;
var ns6 = document.getElementById && !document.all;
var loadedobjects = ""

String.prototype.format = function () {
    var str = this;
    for (var i = 0; i < arguments.length; i++) {
        var re = new RegExp('\\{' + (i) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}
String.prototype.trim = function () { // 15.7.2011
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
}


// http://km0.la/js/mozXPath/
// mozXPath [http://km0ti0n.blunted.co.uk/mozxpath/] km0ti0n@gmail.com
// Code licensed under Creative Commons Attribution-ShareAlike License 
// http://creativecommons.org/licenses/by-sa/2.5/
if (document.implementation.hasFeature("XPath", "3.0")) {
    if (typeof XMLDocument == "undefined") { XMLDocument = Document; }
    XMLDocument.prototype.selectNodes = function (cXPathString, xNode) {
        if (!xNode) { xNode = this; }
        var oNSResolver = this.createNSResolver(this.documentElement)
        var aItems = this.evaluate(cXPathString, xNode, oNSResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
        var aResult = [];
        for (var i = 0; i < aItems.snapshotLength; i++) { aResult[i] = aItems.snapshotItem(i); }
        return aResult;
    }
    XMLDocument.prototype.selectSingleNode = function (cXPathString, xNode) {
        if (!xNode) { xNode = this; }
        var xItems = this.selectNodes(cXPathString, xNode);
        if (xItems.length > 0) { return xItems[0]; }
        else { return null; }
    }
    Element.prototype.selectNodes = function (cXPathString) {
        if (this.ownerDocument.selectNodes) { return this.ownerDocument.selectNodes(cXPathString, this); }
        else { throw "For XML Elements Only"; }
    }
    Element.prototype.selectSingleNode = function (cXPathString) {
        if (this.ownerDocument.selectSingleNode) { return this.ownerDocument.selectSingleNode(cXPathString, this); }
        else { throw "For XML Elements Only"; }
    }
}

// 1.3.2012
function ExDefaultNamespaceResolver(sPrefix) {
    switch (sPrefix) {
        case "rs":
            return "urn:schemas-microsoft-com:rowset";
            break;
        case "z":
            return "#RowsetSchema";
            break;

        default:
            return null;
            break;
    }
}


try {
    Element.prototype.xml = function () {
        var doc = this.ownerDocument || this;
        return doc.documentElement.textContent;
    }

    Element.prototype.selectNodes = function (xPathExpression) {


        var doc = this.ownerDocument || this;
        var resolver = doc.createNSResolver(doc.documentElement);
        var oResult = doc.evaluate(xPathExpression, this, ExDefaultNamespaceResolver, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        var aNodes = new Array();

        if (oResult != null) {
            var oElement = oResult.iterateNext();

            while (oElement) {
                aNodes.push(oElement);
                oElement = oResult.iterateNext();
            }
        }

        return aNodes;
    };

} catch (e) { }

function EXensureLanguageScriptAreLoaded() {
    try {
        if (self.EXLanguageScript) { // Already exists
            return;
        }
        var head = document.getElementsByTagName("head")[0];
        script = document.createElement('script');
        script.id = 'EXLanguageScript';
        script.type = 'text/javascript';
        script.src = "/EX_Resources/js/EXLanguage.js";
        head.appendChild(script)
    } catch (e) { alert('EXensureLanguageScriptAreLoaded ' + e.message); }
}
// EXensureLanguageScriptAreLoaded();
/* 13.8.2013 - removed
function getResource(resource) { // 17.1.2012 - need to leverage EXLanguage.js
try {
if (EXLCID == undefined) {
EXLCID = '1033';
} } catch (e) {EXLCID = '1030';}

if (EXLCID == '1030') {
switch(resource) { // 18.8.2008 - localization
case 'Search': return 'S\370g';
case 'Reset': return 'Nulstil';
case 'CreateNew': return 'Skab ny: ';
case 'DeleteRecord': return 'Slet posten? ';
default: return '';
}
}
else { // EXLCID = 1033
switch(resource) {
case 'Search': return 'Search';
case 'Reset': return 'Reset';
case 'CreateNew': return 'Create new: ';
case 'DeleteRecord': return 'Delete record? ';
default: return '';
}
}
}
*/
function EXXMLHTTP() { // 16.5.2010
    /*
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
    else {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    */
    var xmlhttp = null;
    try {
        xmlhttp = new ActiveXObject("MSXML2.XMLHTTP.3.0");
    } catch (e) { xmlhttp = null; }
    if (xmlhttp == null) // Google Chrome, Apple Safari
        xmlhttp = new XMLHttpRequest();
    return xmlhttp;
}
function EXDOMDocument() { // 16.5.2010
    var domdoc = null;
    try {
        domdoc = new ActiveXObject('MSXML2.DOMDocument');
    } catch (e) { domdoc = null; }
    if (domdoc == null)
        domdoc = document.implementation.createDocument("", "", null); // ActiveXObject('MSXML2.DOMDocument');
    return domdoc;
}
function EXgetEntityTitle(entity) {
    var title = GetEntityItemWhere('DL_D610', 'DL_EntityName = \'' + entity + '\'', 'DL_EntityDescription');
    return title;
}

function EXgetSVCURL() {
    var s;
    s = '' + window.location;
    if (s.indexOf('file') == 0) {
        if (typeof (EXServerRoot) == 'undefined') // 12.7.2010
            alert('Please add EXServerRoot to Exformatics_cust.js\nContact administrator');
        return EXServerRoot; // 12.7.2010 'http://intranet';
    }
    else {
        var i, j;
        i = s.indexOf('//');
        j = s.substr(i + 2).indexOf('/');
        s = s.substring(0, i + 2 + j);
        return s;
    }
}

function EXgetSVCURLFromSite() {
    var s;
    s = '' + window.location;
    if (s.indexOf('file') == 0) {
        if (typeof (EXServerRoot) == 'undefined') // 12.7.2010
            alert('Please add EXServerRoot to Exformatics_cust.js\nContact administrator');
        return EXServerRoot; // 12.7.2010 'http://intranet';
    }
    else {
        var i, j;
        i = s.indexOf('//');
        j = s.substr(i + 2).indexOf('/');
        if (s.indexOf('/sites/') > 0) { // 12.11.2012
            i = s.indexOf('/sites/');
            j = s.substr(i + 7).indexOf('/');
            //alert('URL=' + s + ' result=' + s.substring(0,i+7+j));
            s = s.substring(0, i + 7 + j);
        }
        else {
            //alert('EXgetSVCURLFromSite() - NOT /sites/ i=' + i + ' j=' + j + ' s=' + s.substring(0,i+2+j));
            s = s.substring(0, i + 2 + j);
        }
        return s;
    }
}
function getAbsoluteURLFromSite(url) { // 12.11.2012
    if (typeof (url) == 'undefined') // 23.6.2009
        url = '';
    //alert('getAbsoluteURL(' + url + ') started');
    var s;
    try {
        if (url.indexOf('http') == 0)
            return url;
        if (url.indexOf('file://') == 0) // 8.8.2001
            return url;
        if (url == '' || url == null) {
            s = EXgetSVCURLFromSite();
        }
        else {
            if (url.indexOf('/') == 0)
                s = EXgetSVCURLFromSite() + url;
            else
                s = EXgetSVCURLFromSite() + '/' + url;
        }
        //    alert('getAbsoluteURL = ' + s);
        return s;
    }
    catch (e) { alert('getAbsoluteURLFromSite(' + url + ') failed >>> ' + e.message); }
}
function getAbsoluteURL(url) {
    if (typeof (url) == 'undefined') // 23.6.2009
        url = '';
    //alert('getAbsoluteURL(' + url + ') started');
    var s;
    try {
        if (url.indexOf('http') == 0)
            return url;
        if (url.indexOf('file://') == 0) // 8.8.2001
            return url;
        if (url == '' || url == null) {
            s = EXgetSVCURL();
        }
        else {
            if (url.indexOf('/') == 0)
                s = EXgetSVCURL() + url;
            else
                s = EXgetSVCURL() + '/' + url;
        }
        //    alert('getAbsoluteURL = ' + s);
        return s;
    }
    catch (e) { alert('getAbsoluteURL(' + url + ') failed >>> ' + e.message); }
}
function AddMod() {
    return; // 28.9.2009 - Ignore this function
    var tblTR = document.getElementsByTagName("tr");
    try {
        for (var x = 0; x < tblTR.length; x++) {
            var trElm = tblTR(x);
            var strClass = trElm.className;
            if ((strClass == 'ms-WPHeader') || (strClass.indexOf('dl-') > -1)) {
                var strcontent = trElm.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.innerHTML;
                var i = strcontent.indexOf('DL_Color');
                if (i > -1) {
                    var strColorType = strcontent.substr(i, 11);
                    switch (strColorType) {
                        case 'DL_ColorStd': trElm.className = "MS-WPHeader"; break;
                        case 'DL_ColorBlu': trElm.className = "dl-BlueColor"; break;
                        case 'DL_ColorGrn': trElm.className = "dl-GreenColor"; break;
                        case 'DL_ColorRed': trElm.className = "dl-RedColor"; break;
                        default:
                    }
                }
            }
        }
    }
    catch (e) {
        alert('AddMod exception ' + e.tostring);
    };
}
function ModifyWPTitle(frame) {
    //return; // 28.9.2009
    var sFrame = '';
    if (frame != null && frame != '') { sFrame = frame; } else { sFrame = 'DL_Information'; }
    var oEle = document.getElementById(sFrame);
    if (oEle == null) {
        oEle = parent.document.getElementById(sFrame);
    }
    var oDiv = oEle.parentNode.parentNode.parentNode.parentNode;

    var tblTR = oDiv.getElementsByTagName("div");
    try {
        for (var x = 0; x < tblTR.length; x++) {
            var trElm = tblTR[x]; // 14.9.2012 IT Case 3455
            if (trElm.className == "ms-WPTitle") {
                //alert('DEBUG\nModifyWPTitle(' + frame + ') trElm=' + trElm.innerHTML + '\n' + oEle.parentNode.title + '\n' + trElm.parentNode.parentNode.outerHTML);
                //trElm.innerText = oEle.parentNode.title; // 28.9.2009
                trElm.innerHTML = ' ' + oEle.parentNode.title;
            }
        }
    }
    catch (e) { alert('ModifyWPTitle exception ' + e.tostring); };
}
function AddWPTitle(sTitle, frame) {
    //return; // 28.9.2009
    var sFrame = '';
    if (frame != null && frame != '') { sFrame = frame; } else { sFrame = 'DL_Information'; }
    try {
        //alert('AddWPTitle ' + document.getElementById(sFrame).parentNode.title + ' --> ' + sTitle);
        var oInfo;

        oInfo = document.getElementById(sFrame);
        if (oInfo == null) {
            oInfo = parent.document.getElementById(sFrame);
        }
        oInfo.parentNode.title = sTitle;
        /* 28.9.2009 - REMOVE
        oInfo.parentNode.name = 'DL_ColorStd';
        if (sTitle.indexOf('Activity') > - 1)
        {
        oInfo.parentNode.name = 'DL_ColorBlu';}
        if (sTitle.indexOf('Task') > - 1)
        {	
        oInfo.parentNode.name = 'DL_ColorGrn';}
        */
        ModifyWPTitle(frame);
        AddMod();
    } catch (e) { alert('AddWPTitle(' + sTitle + ') >>> ' + e.message); }
}
function GetProjectMailbox(sProject) {
    var sQueryStr = 'DL_ProjectID = \'' + sProject + '\'';
    var sProjMail = '//' + GetEntityItemWhere('DL_ProjectDefinition', sQueryStr, 'DL_MailboxURL') + '/Inbox';
    return sProjMail;
}

// GetEntityItemWhere
function GetEntityItemWhere(dlentity, sWhere, dlproperty) {
    var strResult;
    try {
        var objXMLHTTP;
        var xmlParamDoc; // As New MSXML2.DOMDocument30
        objXMLHTTP = EXXMLHTTP();
        objXMLHTTP.open('Post', '/EX_SQLSVC/svcDLEntity.asmx/getEntityData2', false);
        objXMLHTTP.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var strParam;
        strParam = 'strNames=' + dlproperty + '&DL_Entity=' + dlentity + '&strWhere=' + escape(sWhere) + '&strOrderBy=DL_Id DESC';
        objXMLHTTP.send(strParam);
        // 16.5.2010
        var res = getsafe(objXMLHTTP.responseXML, '//DL_ENTITYDATA/' + dlentity + '/' + dlproperty);
        objXMLHTTP = null;
        return res;

        xmlParamDoc = EXDOMDocument();
        xmlParamDoc.loadXML(objXMLHTTP.responseText);
        strResult = xmlParamDoc.text;
        //alert(strResult);
        var xN;
        xN = xmlParamDoc.selectSingleNode('//DL_ENTITYDATA/' + dlentity + '/' + dlproperty);
        if (xN != null)
            strResult = xN.text;
        xmlParamDoc = null; xN = null;
        objXMLHTTP = null;
    }
    catch (e) {
        alert('GetEntityItemWhere ' + e.message);
        strResult = '';
    };
    return strResult;
}
// GetEntityItemValue
function GetEntityItemValue(dlentity, dlid, dlproperty) {
    var strResult;
    try {
        var objXMLHTTP;
        var xmlParamDoc; // As New MSXML2.DOMDocument30
        objXMLHTTP = EXXMLHTTP();
        objXMLHTTP.open('Post', '/EX_SQLSVC/svcDLEntity.asmx/getEntityData2', false);
        objXMLHTTP.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var strParam;
        strParam = 'strNames=' + dlproperty + '&DL_Entity=' + dlentity + '&strWhere=DL_Id=' + dlid + '&strOrderBy=DL_Id';
        objXMLHTTP.send(strParam);
        // 16.5.2010
        var res = getsafe(objXMLHTTP.responseXML, '//DL_ENTITYDATA/' + dlentity + '/' + dlproperty);
        objXMLHTTP = null;
        return res;

        xmlParamDoc = EXDOMDocument();
        xmlParamDoc.loadXML(objXMLHTTP.responseText);
        strResult = xmlParamDoc.text;
        xmlParamDoc = null;
        objXMLHTTP = null;
    }
    catch (e) {
        strResult = '';
    };
    return strResult;
}
// SetEntityItemValue
// 21.2.2008 - property 3 added
function SetEntityItemValue(dlentity, dlid, dlmodified, dlproperty, dlvalue, dlproperty2, dlvalue2, dlproperty3, dlvalue3) {
    if (typeof (dlproperty2) == 'undefined') // 10.9.2008
        dlproperty2 = '';
    if (typeof (dlproperty3) == 'undefined')
        dlproperty3 = '';
    var objXMLHTTP;
    var getSoapEnvelope;
    var strParam = '<oEntity><xmlEntityData><delEntityData></delEntityData><updEntityData><xmlEntityData xmlns=""><DL_Id>' + dlid + '</DL_Id><DL_Modified>' + dlmodified + '</DL_Modified><' + dlproperty + '>' + dlvalue + '</' + dlproperty + '>';
    if (dlproperty2 != '') {
        strParam = strParam + '<' + dlproperty2 + '>' + dlvalue2 + '</' + dlproperty2 + '>';
    }
    if (dlproperty3 != '') {
        strParam = strParam + '<' + dlproperty3 + '>' + dlvalue3 + '</' + dlproperty3 + '>';
    }
    strParam = strParam + '<DL_RowNumber>1</DL_RowNumber></xmlEntityData></updEntityData><addEntityData></addEntityData></xmlEntityData></oEntity>';
    //alert('DEBUG\nSetEntityItemValue ' + strParam);
    getSoapEnvelope = '<?xml version="1.0" encoding="utf-8" ?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><setEntity xmlns="http://doclife.net/svcDLEntity"><strEntity>' + dlentity + '</strEntity>' + strParam + '</setEntity></soap:Body></soap:Envelope>';
    objXMLHTTP = EXXMLHTTP();
    objXMLHTTP.open('Post', '/EX_SQLSVC/svcDLEntity.asmx', false);
    objXMLHTTP.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    objXMLHTTP.setRequestHeader('SOAPAction', 'http://doclife.net/svcDLEntity/setEntity');
    objXMLHTTP.setRequestHeader('Content-Length', getSoapEnvelope.length);
    objXMLHTTP.send(getSoapEnvelope);
    var bOK = objXMLHTTP.status == 200;
    //alert(objXMLHTTP.status);
    //alert(objXMLHTTP.responseText);
    objXMLHTTP = null;
    return bOK; // 26.7.2013 - return status true | false
}
// SetRecentValue
function SetRecentValue(urn, value) {
    try {
        var xmldoc, FeedbackHTTP;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<setRecentValue xmlns="http://doclife.net/svcDLState">\n';
        xmldoc = xmldoc + '<urnPropertyID>' + urn + '</urnPropertyID>\n';
        //xmldoc = xmldoc +'<strValue>' + value + '</strValue>\n';
        value = '' + value;
        //	alert('sdf urn:' + urn + '=' + value);
        xmldoc = xmldoc + EXBuildXML('strValue', value);
        xmldoc = xmldoc + '</setRecentValue>\n';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';
        //alert('SetRecentValue ' + xmldoc);

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLState.asmx?op=setRecentValue'), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLState/setRecentValue');
        FeedbackHTTP.send(xmldoc);
        //FeedbackHTTP.Send(xmlParamDoc);
        // alert('SetRecentValue completed ' + FeedbackHTTP.responseText);
        FeedbackHTTP = null;
    } catch (e) { alert('SetRecentValue ' + e.message); }
}

// SetRecentValueXML
function setRecentValueXML(href, xml) { // 17.10.2009
    try {
        var xmldoc, FeedbackHTTP;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<setRecentValueXML xmlns="http://doclife.net/svcDLState">\n';
        xmldoc = xmldoc + '<href>' + href + '</href>\n';
        xml = '' + xml;
        xmldoc = xmldoc + EXBuildXML('xml', xml);
        xmldoc = xmldoc + '</setRecentValueXML>\n';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';
        //alert('SetRecentValueXML ' + xmldoc);

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLState.asmx?op=setRecentValueXML'), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLState/setRecentValueXML');
        FeedbackHTTP.send(xmldoc);
        //FeedbackHTTP.Send(xmlParamDoc);
        //alert('SetRecentValue completed ' + FeedbackHTTP.responseText);
        FeedbackHTTP = null;
    } catch (e) { alert('SetRecentValueXML(' + href + ',' + xml + ')' + e.message); }
}
// GetRecentValue
function GetRecentValue(urn) {
    var strResult;
    try {
        var objXMLHTTP;
        var xmlParamDoc; // As New MSXML2.DOMDocument30
        objXMLHTTP = EXXMLHTTP();
        objXMLHTTP.open('Post', getAbsoluteURL('/EX_SQLSVC/svcDLState.asmx/getRecentValue'), false);
        objXMLHTTP.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var strParam;
        strParam = 'urnPropertyID=' + urn;
        objXMLHTTP.send(strParam);

        if (objXMLHTTP.responseXML.getElementsByTagName('string')[0].firstChild == null) return ''; // 15.4.2016 - avoid error
        return objXMLHTTP.responseXML.getElementsByTagName('string')[0].firstChild.nodeValue; // 27.10.2010 - Google Chrome + IE 8 + ...
        /*
        xmlParamDoc = EXDOMDocument();
        xmlParamDoc.loadXML (objXMLHTTP.responseText);
        strResult = xmlParamDoc.text;
        xmlParamDoc = null;
        objXMLHTTP = null;
        */
    }
    catch (e) {
        alert('GetRecentValue exception ' + e.message);
        strResult = '';
    };
    return strResult;
}


// getRecentValueXML
function getRecentValueXML(href) { // 17.12.2009
    var strResult;
    try {
        var objXMLHTTP;
        var xmlParamDoc; // As New MSXML2.DOMDocument30
        objXMLHTTP = EXXMLHTTP();
        objXMLHTTP.open('Post', getAbsoluteURL('/EX_SQLSVC/svcDLState.asmx/getRecentValueXML'), false);
        objXMLHTTP.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var strParam;
        strParam = 'href=' + href;
        objXMLHTTP.send(strParam);

        xmlParamDoc = EXDOMDocument();
        xmlParamDoc.loadXML(objXMLHTTP.responseText);
        strResult = xmlParamDoc.text;
        xmlParamDoc = null;
        objXMLHTTP = null;
    } catch (e) {
        alert('getRecentValueXML exception ' + e.message);
        strResult = '';
    }
    return strResult;
}

function setPickerValue(s, urn) {
    SetRecentValue(urn, s);
    return true;
}
function setGenericDBKeys(strXML) {
    SetRecentValue('DL_GenericDB', strXML);
}
/* 24.4.2014 - hide - duplicate
function OpenGenericDB(strTemplate) { // 15.8.2012
var objDoc3 = new ActiveXObject("Sharepoint.OpenDocuments.3");
objDoc3.CreateNewDocument(strTemplate, '');
}
*/
function CreateDocument(strTemplate, strDefSave) {
    //alert('CreateDocument(' + strTemplate + ',' + strDefSave + ') invoked');
    if (typeof (createNewDocumentWithProgIDCore) == 'function') { // 28.7.2008
        return createNewDocumentWithProgIDCore(strTemplate, strDefSave, "SharePoint.OpenDocuments.3", null, "Could not find office");
    }
    //alert(11);     	
    var objDoc2 = new ActiveXObject("Sharepoint.OpenDocuments.2");
    objDoc2 = null;
    if (objDoc2) // Office 2003
    {
        //if (objDoc2.CreateNewDocument(strTemplate, strDefSave))
        if (objDoc2.CreateNewDocument2(window, strTemplate, strDefSave)) {
            if (typeof (RefreshOnFocus) == 'function') // 28.7.2008 - check added
                window.onfocus = RefreshOnFocus;
        }
    }
    else {
        var objDoc3 = new ActiveXObject("Sharepoint.OpenDocuments.2");
        if (objDoc3) {
            try {
                objDoc3.CreateNewDocument(strTemplate, strDefSave);
                return;
            }
            catch (e) { alert(e.message); }
        }
        if (!objDoc3) objDoc3 = new ActiveXObject("Sharepoint.OpenDocuments.3");
        //alert('8 >' + objDoc3 + '<');
        if (!objDoc3) objDoc3 = new ActiveXObject("Sharepoint.OpenDocuments.4"); // 20.5.2012 - Office 2010?
        //alert(9 + '  - ' + objDoc3);
        if (objDoc3) {
            //if (objDoc3.CreateNewDocument(strTemplate, strDefSave))
            //alert('a ' + objDoc3);
            if (objDoc3.CreateNewDocument2(window, strTemplate, strDefSave)) {
                //alert('b')
                if (typeof (RefreshOnFocus) == 'function') // 28.7.2008 - check added
                    window.onfocus = RefreshOnFocus;
            }
            else // 28.7.2008
                alert('CreateDocument(' + strTemplate + ',' + strDefSave + ') failed');
        }
        else {
            alert(LEX_OfficeMustBeInstalled);
        }
    }
}
function CreateDocument1() {
    var o = document.getElementById('NewDocument');
    o = document.all.NewDocument;
    var i = o.selectedIndex;
    /*alert('CreateDocument1 --> ');*/
    var defsave = o.options[i].value;
    var template = o.options[i].id;
    CreateDocument(template, defsave);
}
function makeSnapshot(DL_Entity, DL_Id, defsave, templatehref) {
    SetRecentValue('DLSmartDoc', '<DLSmartDoc><DLEntity>' + DL_Entity + '</DLEntity><DLId>' + DL_Id + '</DLId><Replace>true</Replace></DLSmartDoc>');
    CreateDocument(templatehref, defsave);
}
// makesnapshop
function makeSnapshop(DL_EntityName, DL_EntityId, defsave, URLTemplate) {
    SetRecentValue('DLSmartDoc', '<DLSmartDoc><DLEntity>' + DL_EntityName + '</DLEntity><DLId>' + DL_EntityId + '</DLId><Replace>true</Replace></DLSmartDoc>');
    CreateDocument(URLTemplate, defsave);
}
function OpenGenericDB(strHref) {
    if (strHref == null || strHref == '') { // 28.7.2008
        strHref = getAbsoluteURL('/EX_Custom/Templates/GenericDB.xlt');
    }
    //alert('OpenGenericDB(' + strHref + ')');
    var objDoc3 = new ActiveXObject("Sharepoint.OpenDocuments.3"); // 24.3.2014 - avoid issue in SharePoint
    objDoc3.CreateNewDocument(strHref, '');
    //    	CreateDocument(strHref, '');
}

// EXOpenDoc2 - similar to SharePoint's DispDocItem
// _spUserId is actual user - defined by SharePoint
// SzExtension - returns extension of a URL
// SzServer    - returns server
// g_ExtensionDefaultForRead - ReadOnly extensions - PDF should probably be added
// FDefaultOpenForReadOnly - returns true if read only extension
// StsOpenEnsureEx - returns ActiveX object for provided szProgId
function EXStsOpenEnsureEx(szProgId) {
    var sVersion = 0;
    if (szProgId.indexOf('.3') > 0)
        sVersion = 3;
    stsOpen = StsOpenEnsureEx(szProgId);
    if (stsOpen == null && sVersion == 3) {
        szProgId = szProgId.replace('.3', '.2');
        sVersion = 2;
        stsOpen = StsOpenEnsureEx(szProgId);
    }
    return stsOpen;
}
function EXOpenDoc2(Path, strCheckedoutUser, IsCheckedoutToLocal) {
    var Ext = SzExtension(Path);
    var i = Path.lastIndexOf('.');
    var Ext = Path.substr(i + 1);
    //var Ext = SzExtension(Path);
    var sControl = MapToAll('', Ext, '@OpenControl');
    if (sControl.indexOf('SharePoint.OpenDocument') > -1) {
        stsOpen = EXStsOpenEnsureEx(sControl);
        if (strCheckedoutUser == _spUserId || strCheckedoutUser == '')
            if (typeof (_spUserId) == 'undefined')
                _spUserId = '';
        if (strCheckedoutUser == _spUserId || strCheckedoutUser == '') {
            // alert('stsOpen.EditDocument2(window, ' + Path + ',' + sControl + ')');
            stsOpen.EditDocument2(window, Path, sControl);
        }
        else if (strCheckedoutUser != '') {
            if (confirm(LEX_DocumentCheckedOutToUser.format(strCheckedoutUser)))
                stsOpen.ViewDocument2(window, Path, sControl);
        }
        else
            stsOpen.ViewDocument2(window, Path, sControl);
    }
    else { // Display item
        loadcontent(Path);
    }
}
function EXOpenDoc(Path) {
    var oIF = document.getElementById('DL_Information');
    if (oIF != null) {
        if (oIF.src == Path) {
            //alert('EXOpenDoc - now free DL_Information');
            oIF.src = '';
        }
    }
    OpenDoc(Path);
}
function OpenDoc(Path) {
    try {
        var doctype;
        var docpostfix = Path.substr(Path.length - 3, Path.length);
        switch (docpostfix) {
            case 'ppt': doctype = 'Powerpoint.Slide'; break;
            case 'doc': doctype = 'Word.Document'; break;
            case 'mht': doctype = 'Word.Document'; break;
            case 'dot': doctype = 'Word.Document'; break;
            case 'mht': doctype = 'Word.Document'; break;
            case 'xls': doctype = 'Excel.Sheet'; break;
            // case 'xlt' : doctype = 'Excel.Sheet';break; 
            case 'htm': doctype = 'Word.Document'; break;
            default: doctype = 'Browser';
        }
        if (doctype == 'Browser') {
            window.open(Path);
        }
        else {
            try {
                var objDoc = new ActiveXObject("Sharepoint.OpenDocuments.2");
                //alert('ObjDoc loaded: ' + Path + '/' + doctype);
            }
            catch (e) {
                alert('OpenDoc(' + Path + ') failed ' + e.message);
                try {
                    objDoc = new ActiveXObject("Sharepoint.OpenDocuments.3");
                }
                catch (e) { alert('OpenDoc(' + Path + ') failed ' + e.message); }
            }
            switch (docpostfix) {
                case 'xlt': objDoc.CreateNewDocument(Path, ''); break;
                case 'dot': objDoc.CreateNewDocument(Path, ''); break;
                default: objDoc.EditDocument(Path); break;
            }
        }
    } catch (e) { alert('OpenDoc(' + Path + ') failed ' + e.message); }
}

function DLopentask(DL_Entity, DL_Id) {
    //alert('Open Task --> ' + DL_Id + ' not implemented yet!');
    if (true) {
        if (DL_Entity == 'BPM_Task') {
            DL_Entity = 'BPM'
        }
        var OutlookID;
        OutlookID = DL_Entity + DL_Id;
        //alert(OutlookID);
        opentask(OutlookID);
    }
    else
        loadentity(DL_Entity, DL_Id);
}

function newentity2(entity, foreignkeys, foreignvalues, appendparam, title, defaultkeys, defaultvalues) // 11.12.2012 - default keys and values added
{
    if (typeof (defaultkeys) == 'undefined') // 11.12.2012
        defaultkeys = '';
    var oIF = document.getElementById('DL_Information');
    if (oIF == null && parent)
        oIF = parent.document.getElementById('DL_Information');
    if (oIF != null) {
        if (EXGetUserRole() == 0) {// 3.11.2009
            alert(LEX_UserNoAccessCannotCreate);
            return;
        }
        var url = ''
        if (foreignkeys == '') {
            url = "/EX_SQLSVC/DynamicForm.aspx?new=true&DL_ENTITY=" + entity + "&" + appendparam;
        }
        else {
            url = "/EX_SQLSVC/DynamicForm.aspx?new=true&DL_ENTITY=" + entity + "&ForeignKeys=" + foreignkeys + "&ForeignValues=" + foreignvalues + "&" + appendparam;
            /*alert('URL=' + document.all.DL_Information.src);*/
        }
        if (defaultkeys != '') // 11.12.2012
            url += '&DefaultKeys=' + defaultkeys + '&DefaultValues=' + defaultvalues;
        url += "&EXcheck=" + Math.random();
        oIF.src = url;
        if (title == '' || title == null)
            title = LEX_CreateNew + EXgetEntityTitle(entity) + "";
        AddWPTitle(title);
    }
    //        	else
    //       		alert('new entity(' + entity + ',' + id + ') - Information Web Part missing');
}

// 30.11.2007
function EXNewLoadEntity(entity, foreignkeys, foreignvalues, appendparam) {
    try {
        if (typeof (foreignkeys) == 'undefined' || foreignkeys == null)
            foreignkeys = '';
        if (typeof (foreignvalues) == 'undefined' || foreignvalues == null)
            foreignvalues = '';
        if (typeof (appendparam) == 'undefined' || appendparam == null)
            appendparam = '';

        var xOps = '<' + entity + '>';
        var aKeys = foreignkeys.split(',');
        var aValues = foreignvalues.split(',');
        var sValue;
        for (var i = 0; i < aKeys.length; i++) {
            sValue = aValues[i];
            if (sValue == '%DL_sAMAccountName%')
                sValue = GetEntityItemWhere('DL_sAMAccountName', 'DL_sAMAccountName = %DL_sAMAccountName%', 'DL_sAMAccountName');
            xOps = xOps + '<' + aKeys[i] + '>' + MakeXMLSafe(sValue) + '</' + aKeys[i] + '>';
        }
        xOps = xOps + '</' + entity + '>';
        //alert('EXNewLoadEntity ' + xOps);
        //return;
        var DLId = setEntityDetail(entity, xOps);
        if (DLId != '')
            loadentity(entity, DLId, appendparam);
    } catch (e) { alert('EXNewLoadEntity ' + e.message); }
}
function EXHTMLNotesAsMail(DLId) {
    var oXML = getEntityData('DL_HTMLNotes', 'DL_Id = ' + DLId, '');
    //alert('EXHTMLNotesAsMail ' + oXML.xml);
    var outlookApp;
    outlookApp = getOutlook();
    if (outlookApp == null) {
        outlookApp = null;
    }
    else {
        var sHTML = getsafe(oXML, '//DL_HTMLText');
        //alert(sHTML);
        var oItem;
        oItem = outlookApp.CreateItem(0); // Email
        oItem.HTMLBody = sHTML;
        oItem.Subject = 'Test email';
        oItem.Display();
        outlookApp = null;
    }

}
function newentity(entity, foreignkeys, foreignvalues, appendparam, frame) {
    if (EXGetUserRole() == 0) {// 3.11.2009
        alert(LEX_UserNoAccessCannotCreate);
        return;
    }
    if (frame == 'NEW') { // 10.12.2008
        window.open(getAbsoluteURL("/EX_SQLSVC/DynamicForm.aspx?new=true&DL_ENTITY=" + entity + "&ForeignKeys=" + foreignkeys + "&ForeignValues=" + foreignvalues + "&" + appendparam + "&EXcheck=" + Math.random()), '', 'width=380,height=200,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,copyhistory=no,resizable=no');
        return;
    }
    if (typeof (frame) == 'undefined') // 27.10.2008
        frame = '';
    //alert('newentity ' + entity);
    if (frame == '')
        frame = 'DL_Information';
    if (document.getElementById(frame)) {
        if (foreignkeys == '') {
            // 23-8-2006 - adding focus
            var oIF = document.getElementById(frame)
            oIF.src = "/EX_SQLSVC/DynamicForm.aspx?new=true&DL_ENTITY=" + entity + "&ForeignKeys=" + foreignkeys + "&ForeignValues=" + foreignvalues + "&" + appendparam + "&EXcheck=" + Math.random();
            if (oIF != null) {
                //alert('IFRAME focus on');
                oIF.focus = true;
            }
            //if (document.all.DL_Information.focus() != true) {
            //window.status = 'not on top';
            //}
        }
        else {
            // 23-8-2006 - adding focus
            var oIF = document.getElementById(frame)
            oIF.src = "/EX_SQLSVC/DynamicForm.aspx?new=true&DL_ENTITY=" + entity + "&ForeignKeys=" + foreignkeys + "&ForeignValues=" + foreignvalues + "&" + appendparam + "&EXcheck=" + Math.random();
            if (oIF != null) {
                //alert('IFRAME focus on');
                oIF.focus = true;
            }
            //if (document.all.DL_Information.focus() != true) {
            //window.status = 'not on top';
            //}
        }
        AddWPTitle(LEX_CreateNew + EXgetEntityTitle(entity) + '');
    }
    else {
        var oEle = parent.document.getElementById(frame);
        //alert('newentity - DL_Information missing'); //alert('new entity(' + entity + ',' + id + ') - Information Web Part missing');
        if (oEle != null)
            oEle.src = "/EX_SQLSVC/DynamicForm.aspx?new=true&DL_ENTITY=" + entity + "&ForeignKeys=" + foreignkeys + "&ForeignValues=" + foreignvalues + "&" + appendparam + "&EXcheck=" + Math.random();
    }
}
function EXNewEntityCopy(DL_Entity, DL_Id, sMsg) {
    var oXML = ExecuteProcedure('dbo.EXNewEntityCopy @DLEntity=\'' + DL_Entity + '\', @DL_Id = ' + DL_Id + ',@WUser = %WUSER%'); // 2.2.2010 - %WUSER% added
    if (typeof (sMsg) == 'undefined') {
        //sMsg = 'Ny aktivitet oprettet';
        var s = getsafe(oXML, '//DL_EntityDescription');
        sMsg = LEX_NewBusinessObjectCreated.format(s);
    }
    alert(sMsg);
    //EXGotoObject(DL_Entity, 0);
    //EXGotoObject(DL_Entity, GetRecentValue(DL_Entity)); // 3.2.2010 - hentet fra BDK
    var Id = getsafe(oXML, '//' + DL_Entity + '/DL_Id');
    EXCreateFolder(DL_Entity, Id);
    EXGotoObject(DL_Entity, Id);

}
function newlink(DL_Entity, DL_Id) {
    newentity('DL_DocumentLinks', 'DL_EntityNameForeign,DL_EntityId', DL_Entity + "," + DL_Id);
}
function loadentitysecurity(entity, id, DLCaseProtected, DLSecurityPersons, DLADSecurityGroups, WUser) { // 16.9.2008
    var bOK;
    if (DLCaseProtected == -1) {
        // 13-1-2008/JRD: Corrected error: %DL_sAMAccountName% does not work as input parameter to EXCheckUserAuthorized
        //		var xN = ExecuteProcedure('dbo.EXCheckUserAuthorized @User=%DL_sAMAccountName%, @DLSecurityPersons = \'' + DLSecurityPersons + '\', @DLADSecurityGroups = \'' + DLADSecurityGroups + '\'');
        // 17.10.2010		var xN = ExecuteProcedure('dbo.EXCheckUserAuthorized @User=\'\', @DLSecurityPersons = \'' + DLSecurityPersons + '\', @DLADSecurityGroups = \'' + DLADSecurityGroups + '\'');
        var xN = ExecuteProcedure('dbo.EXCheckUserAuthorized @User=\'' + WUser + '\', @DLSecurityPersons = \'' + DLSecurityPersons + '\', @DLADSecurityGroups = \'' + DLADSecurityGroups + '\'');
        var Count = getsafe(xN, '//Count');
        bOK = (Count == '1');
    }
    else
        bOK = true;
    if (bOK)
        loadentity(entity, id);
    else
        displayentity(entity, id);
}
function exloadentity(entity, id) { // 11.3.2011
    if (typeof (EXwfloadentity) == 'function')
        EXwfloadentity();
    else
        loadentity(entity, id);
}
function loadentity(entity, id, appendparam, keyname, title, bFirstFieldFocus, bReloadOnChange) {
    if (typeof (appendparam) == 'undefined') // 30.7.2009
        appendparam = '';
    //alert('loadentity ' + entity + ' ' + id);
    var sTitle = title;
    if (sTitle == null) {
        sTitle = '';
    }
    if (typeof (keyname == 'undefined')) // 10.9.2008
        keyname = '';
    var sKeyName = keyname;
    if (sKeyName == null) {
        sKeyName = "";
    }
    if (sKeyName == "") {
        sKeyName = "DL_Id";
    }
    if (bReloadOnChange && (appendparam == null || appendparam == ''))
        appendparam = 'action=127';
    // 16.5.2010 - generalize
    var oIF = document.getElementById('DL_Information');
    if (oIF == null && parent)
        oIF = parent.document.getElementById('DL_Information');
    //if (document.all.item("DL_Information"))
    if (oIF) {
        if (EXGetUserRole() == 0) // 3.11.2009
            displayentity(entity, id);
        else {
            if (bFirstFieldFocus == null) {
                //document.all.DL_Information.src="/EX_SQLSVC/DynamicForm.aspx?update=true&DL_ENTITY=" + entity + "&where=" + sKeyName + "=" + id + "&" + appendparam + "&EXcheck=" + Math.random();
                oIF.src = "/EX_SQLSVC/DynamicForm.aspx?update=true&DL_ENTITY=" + entity + "&where=" + sKeyName + "=" + id + "&" + appendparam + "&EXcheck=" + Math.random();
            }
            else {
                //document.all.DL_Information.src="/EX_SQLSVC/DynamicForm.aspx?update=true&DL_ENTITY=" + entity + "&where=" + sKeyName + "=" + id + "&" + appendparam + "&FirstFieldFocus=false" + "&EXcheck=" + Math.random();
                oIF.src = "/EX_SQLSVC/DynamicForm.aspx?update=true&DL_ENTITY=" + entity + "&where=" + sKeyName + "=" + id + "&" + appendparam + "&FirstFieldFocus=false" + "&EXcheck=" + Math.random();
            }
        }
        if (sTitle == '') {
            if (entity == 'DL_Tasks') {
                AddWPTitle(EXgetEntityTitle(entity));
            }
            else {
                AddWPTitle(EXgetEntityTitle(entity));
            }
            //    		AddWPTitle(EXgetEntityTitle(entity) + " #" + id);}
        }
        else {
            AddWPTitle(sTitle);
        }
    }
    /*
    else
    {

    if (parent.document.getElementById("DL_Information")) {
    //alert('DL_Information2 exists in parent');
    if (EXGetUserRole() == 0) // 3.11.2009
    parent.displayentity(entity,id);
    else
    parent.document.all.DL_Information.src="/EX_SQLSVC/DynamicForm.aspx?update=true&DL_ENTITY=" + entity + "&where=DL_Id=" + id + "&" + appendparam + "&EXcheck=" + Math.random();
    }
    //		else{
    //       		alert('loadentity(' + entity + ',' + id + ') - Information Web Part missing');
    //                }
    }
    */
}
function loadentityI2(entity, id, appendparam) {
    //alert('loadentityI2 ' + entity + ' ' + id);
    if (document.getElementById("DL_Information2")) {
        if (EXGetUserRole() == 0) // 3.11.2009
            displayentity2(entity, id);
        else
            document.all.DL_Information2.src = "/EX_SQLSVC/DynamicForm.aspx?update=true&DL_ENTITY=" + entity + "&where=DL_Id=" + id + "&" + appendparam + "&EXcheck=" + Math.random(); // 27.8.2008
    }
    else {
        // Can we locate the parent of this IFRAME and find DL_Information2 in another IFRAME?
        if (parent.document.getElementById("DL_Information2")) {
            //alert('DL_Information2 exists in parent');
            if (EXGetUserRole() == 0) // 3.11.2009
                displayentity2(entity, id);
            else
                parent.document.all.DL_Information2.src = "/EX_SQLSVC/DynamicForm.aspx?update=true&DL_ENTITY=" + entity + "&where=DL_Id=" + id + "&EXcheck=" + Math.random();
        }
        else
            loadentity(entity, id);
        //alert('loadentityI2(' + entity + ',' + id + ') - Information2 Web Part missing');
    }
}
function loadentity2(entity, id, frame, appendparam) { // 25.3.2013 frame added, appendparam
    if (typeof (frame) == 'undefined') frame = 'DL_Information2';
    if (typeof (appendparam) == 'undefined') appendparam = '';
    var oI2 = document.getElementById(frame);
    if (oI2 == null)
        oI2 = parent.document.getElementById(frame);
    if (oI2 != null) {
        if (EXGetUserRole() == 0) // 3.11.2009
            displayentity2(entity, id, '', frame);
        else
            oI2.src = "/EX_SQLSVC/DynamicForm.aspx?update=true&DL_ENTITY=" + entity + "&where=DL_Id=" + id + appendparam + "&EXcheck=" + Math.random();
    }
    else
        loadentity(entity, id);
}
function displayentity2(entity, id, title, frame) // 25.3.2013 frame added
{
    if (typeof (frame) == 'undefined') frame = 'DL_Information2'; // 25.3.2013
    if (document.getElementById(frame)) {
        //document.all.DL_Information2.src="/EX_SQLSVC/DynamicForm.aspx?DL_ENTITY=" + entity + "&where=DL_Id=" + id + "&EXcheck=" + Math.random();
        //document.all.DL_Information2.src = '/EX_Resources/EXDisplayEntity.html?DL_ENTITY=' + entity + '&DL_Id=' + id + "&EXcheck=" + Math.random();
        var oFrame = document.getElementById(frame);
        oFrame.src = '/EX_Resources/EXDisplayEntity.html?DL_ENTITY=' + entity + '&DL_Id=' + id + "&EXcheck=" + Math.random();
        if (title != null && title != '')
            AddWPTitle(title, frame);
    }
    else
        displayentity(entity, id);
}

function loadcontact(entity, DLContactID, appendparam) {
    if (document.getElementById("DL_Information")) {
        document.all.DL_Information.src = "/EX_SQLSVC/DynamicForm.aspx?update=true&DL_ENTITY=" + entity + "&where=DLContactID=" + DLContactID + "&" + appendparam + "&EXcheck=" + Math.random();
        AddWPTitle(EXgetEntityTitle(entity) + " #" + DLContactID);
    }
    //        	else
    //    	{
    //       		alert('loadentity(' + entity + ',' + DLContactID + ') - Information Web Part missing');
    //    	}
}
function mapcontact(DLContactID, title) { // 12.3.2008 - modified 26.5.2008 - add name to title
    if (typeof (title) == 'undefined')
        title = 'Google Map';
    else
        title = 'Google Map ' + title;
    //alert('mapcontact(' + DLContactID + ',' + title + ')');
    loadcontent2('/EX_Resources/EXGMap.html?DLContactID=' + DLContactID + '&EXcheck=' + Math.random(), title);
    //return false; // 26.5.2008 avoid link being active
}
function mapexcompany(DLId, title) { // 9.6.2008
    if (typeof (title) == 'undefined')
        title = 'Google Map';
    else
        title = 'Google Map ' + title;
    loadcontent2('/EX_Resources/EXGMap.html?DLEXCompany=' + DLId + '&EXcheck=' + Math.random(), title);
}

function EXGMapField(obj, DLPropName) {
    this.obj = obj;
    this.DLPropName = DLPropName;
    var oEle = document.getElementById(DLPropName);
    //oEle.style.display = 'none;'; // hide the field
    var oA = document.createElement('A');
    var oImg = document.createElement('IMG');
    //var s = '<A href="javascript:' + this.obj + '.display();"><img border="0" src="/EX_Resources/img/16x16/marker.png" alt="View Google Map" style="cursor:pointer;" id="GMapImg' + DLPropName + '"></img></A>';
    //alert(s);
    //oImg.outerHTML = s;
    var url = 'javascript:' + this.obj + '.display();';
    oA.setAttribute('href', url);
    oImg.id = 'GMapImg' + DLPropName;
    oImg.border = "0";
    if (oEle.value == '') {
        oImg.alt = "Please select a coordinate";
        oImg.src = "/EX_Resources/img/view.gif";
    }
    else {
        oImg.alt = "View and modify coordinates";
        oImg.src = "/EX_Resources/img/16x16/marker.png";
    }
    oA.appendChild(oImg);
    //alert(oImg + ' ' + oImg.outerHTML);
    oEle.parentNode.appendChild(oA);
    //alert('1');
    oImg = null;
    //alert('2' + oEle.parentNode.outerHTML);
    oEle.style.width = '0px';
    //oEle.style.visibility = 'hidden';
    //oEle.style.display = 'none;'; // hide the field
    oImg = document.getElementById('GMapImg' + DLPropName);
    //alert('2' + oImg);
}
EXGMapField.prototype.display = function () {
    var oEle = document.getElementById(this.DLPropName);
    //alert('EXGMapField.display ' + oEle.value);
    var oA = document.getElementById(this.DLPropName);
    var oA2 = document.getElementById("LABEL" + this.DLPropName);
    //if (oA2 == null)
    //	oA2 = oA;
    var s = oEle.value;
    var lat, lng, i;
    i = s.indexOf('-');
    lat = s.substring(0, i);
    lng = s.substring(i + 1);
    var url = getAbsoluteURL("/EX_Resources/EXGMap.html?PropName=" + this.DLPropName + "&Div=" + oEXPickForm.name + "&Lat=" + lat + "&Lng=" + lng + "&EXcheck=" + Math.random());
    oEXPickForm.showURL(this.DLPropName, url, getElementLeft1(oA2), getElementTop1(oA), null, '500px', '400px');
}

function loadentitywforeign(entity, id, foreignkeys, foreignvalues, appendparam) {
    if (document.getElementById("DL_Information")) {
        document.all.DL_Information.src = "/EX_SQLSVC/DynamicForm.aspx?update=true&DL_ENTITY=" + entity + "&where=DL_Id=" + id + "&ForeignKeys=" + foreignkeys + "&ForeignValues=" + foreignvalues + "&" + appendparam + "&EXcheck=" + Math.random();
        AddWPTitle(EXgetEntityTitle(entity) + " #" + id);
    }
    //    	else
    //   		alert('loadentity(' + entity + ',' + id + ') - Information Web Part missing');
}

function loadentitynew(entity, foreignkeys, foreignvalues, view, appendparam) {
    if (document.getElementById("DL_Information")) {
        document.all.DL_Information.src = "/EX_SQLSVC/DynamicForm.aspx?create=true&DL_ENTITY=" + entity + "&ForeignKeys=" + foreignkeys + "&ForeignValues=" + foreignvalues + "&view=" + view + "&" + appendparam + "&EXcheck=" + Math.random();
        AddWPTitle(EXgetEntityTitle(entity));
    }
    //    	else
    //   		alert('loadentitynew(' + entity + ',' + foreignkeys + ',' + foreignvalues + ') - Information Web Part missing');
}
function displayentity(entity, id, bNewWindow, where, title) // 12.3.2010 - title added
{
    if (typeof (title) == 'undefined')
        title = '';
    if (typeof (where) == 'undefined' || where == '' || where == null)
        where = 'DL_Id = ' + id;
    if (bNewWindow) {
        //var sUrl ="/EX_SQLSVC/DynamicForm.aspx?DL_ENTITY=" + entity + "&where=" + where + "&EXcheck=" + Math.random();
        if (id == '' || id == null)
            id = GetEntityItemWhere(entity, where, 'DL_Id');
        var sUrl = "/EX_Resources/EXDisplayEntity.html?DL_ENTITY=" + entity + "&DL_Id=" + id + "&EXcheck=" + Math.random();
        var printwin = window.open(getAbsoluteURL(sUrl));
        return;
    }
    var oFrame = document.getElementById("DL_Information"); // 8.3.2012
    if (!oFrame && (parent))
        oFrame = parent.document.getElementById('DL_Information');
    if (!oFrame && (parent)) {
        //		alert('displayentity - try parent');
        oFrame = parent.document.getElementById("DL_Information");
    }
    if (oFrame) {
        //document.all.DL_Information.src="/EX_SQLSVC/DynamicForm.aspx?DL_ENTITY=" + entity + "&where=" + where + "&EXcheck=" + Math.random();
        //oFrame.src="/EX_SQLSVC/DynamicForm.aspx?DL_ENTITY=" + entity + "&Where=" + where + "&EXcheck=" + Math.random();
        if (id == '' || id == null)
            id = GetEntityItemWhere(entity, where, 'DL_Id');
        oFrame.src = '/EX_Resources/EXDisplayEntity.html?DL_ENTITY=' + entity + '&DL_Id=' + id + "&EXcheck=" + Math.random();
        if (title == '') title = EXgetEntityTitle(entity);
        AddWPTitle(title); // 11.2.2008
    }
    //        else
    //       		alert('displayentity - DL_Information not found - strange' + entity + ' ' + id + ' ' + where);
}
function loadrelation(FixEntity, FixEntityId, DisplayEntity, DisplayFields, RelationEntity) {
    if (document.getElementById("DL_Information")) {
        document.all.DL_Information.src = "/EX_SQLSVC/GenericRelationPicker.aspx?FixEntity=" + FixEntity + "&FixEntityId=" + FixEntityId + "&DisplayEntity=" + DisplayEntity + "&DisplayFields=" + DisplayFields + "&RelationEntity=" + RelationEntity + "&AddExcel=true" + "&EXcheck=" + Math.random();
    }
    else
        alert('loadrelation - strange' + FixEntity + ' ' + FixEntityId);
}
function loadrelationextra(FixEntity, FixEntityId, DisplayEntity, DisplayFields, RelationEntity, where, orderby, title) {
    var url;
    url = "/EX_SQLSVC/GenericRelationPicker.aspx?FixEntity=" + FixEntity + "&FixEntityId=" + FixEntityId + "&DisplayEntity=" + DisplayEntity + "&DisplayFields=" + DisplayFields + "&RelationEntity=" + RelationEntity + "&AddExcel=false&where=" + where + "&EXcheck=" + Math.random();
    loadcontent2(url, title);
}
function loadrelationfull(FixEntity, FixEntityId, DisplayEntity, DisplayFields, RelationEntity, RelationFixForeign, RelationDisplayForeign) {
    if (document.getElementById("DL_Information")) {
        document.all.DL_Information.src = "/EX_SQLSVC/GenericRelationPicker.aspx?FixEntity=" + FixEntity + "&FixEntityId=" + FixEntityId + "&DisplayEntity=" + DisplayEntity + "&DisplayFields=" + DisplayFields + "&RelationEntity=" + RelationEntity + "&RelationFixForeign=" + RelationFixForeign + "&RelationDisplayForeign=" + RelationDisplayForeign + "&AddExcel=true" + "&EXcheck=" + Math.random();
    }
    else
        alert('loadrelationfull - strange' + FixEntity + ' ' + FixEntityId);
}
function setupload(contentclass, id, title, path, meta, value, enhanced) {
    if (document.getElementById("DLUpload")) {
        document.all.DLUpload.src = '/EX_SQLSVC/UploadFile.aspx?CC=' + contentclass + '&title=' + escape(title) + '&DL_Id=' + id + '&path=' + escape(path) + '&meta=' + meta + '&value=' + escape(value) + '&enhanced=' + enhanced;
    }
    else
        alert('setupload(' + contentclass + ',' + id + ') requires DLUpload iframe');
}
function openupload(contentclass, id, title, path, meta, value, enhanced) {
    if (true) {
        openupload = window.open('/EX_SQLSVC/UploadFile.aspx?CC=' + contentclass + '&title=' + escape(title) + '&DL_Id=' + id + '&path=' + escape(path) + '&meta=' + meta + '&value=' + escape(value) + '&enhanced=' + enhanced, 'Upload', 'width=380,height=80,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,copyhistory=no,resizable=no');
    }
    else
        alert('openupload(' + contentclass + ',' + id + ') requires DLUpload iframe');
}
function loadcontent(url, frameid, title) // 28.10.2008 - title added
{
    if (typeof (frameid) == 'undefined')
        frameid = null;
    if (typeof (title) == 'undefined') // 28.10.2008
        title = '';
    if (frameid == 'NEW') {
        window.open(url);
        return;
    }
    //alert('loadcontent ' +url);
    if (url.indexOf('http') == -1)  // 5-11-2007 - only add http if not already there !!!
        url = getAbsoluteURL(url);
    if (frameid == '' || frameid == null) // 28.10.2008
        frameid = 'DL_Information';
    if (frameid != '' && frameid != null) {
        var frame = document.getElementById(frameid);
        if (!frame) // 20.8.2008 - also search parent
            frame = parent.document.getElementById(frameid);
        if (frame)
            frame.src = url;
        if (title != '')
            AddWPTitle(title, frameid); // 12.11.2008 - frameid added
    }
    else {
        if (document.getElementById("DL_Information")) {
            document.all.DL_Information.src = url;
            AddWPTitle("View Content");
        }
        else { // 21-9-2006 - MMQ - search for DL_Information in parent if it doesn't exists
            if (parent.document.getElementById("DL_Information")) {
                parent.document.all.DL_Information.src = url;
                AddWPTitle("View Content");
            }
        }
    }
}
function EXLoadPicture(url, title, bNewWindow) { // 30.11.2010
    url = '/EX_Resources/EXShowPicture.html?URL=' + escape(url) + '&check=' + Math.random();
    loadcontent2(url, title, bNewWindow);
}
function loadcontent2(url, title, bNewWindow) // 17.6.2008 - bNewWindow
{
    var e = window.event;
    var ctrl;
    if (e)
    //ctrl = e.ctrlKey;
        ctrl = e.shiftKey; // 12.2.2010
    else
        ctrl = false;
    if (ctrl && !bNewWindow) // 7.8.2009
        bNewWindow = true;
    if (bNewWindow) { // 17.6.2008
        var printwin = window.open(url);
        return;
    }

    //alert('loadcontent2 ' + url + ' ' + title);
    var oIF = document.getElementById('DL_Information');
    if (oIF == null)
        oIF = parent.document.getElementById('DL_Information'); // 29.11.2010 - parent added
    if (oIF != null) {
        oIF.src = url;
        try { AddWPTitle(title); } catch (e) { }
    }
    return;
    if (document.getElementById("DL_Information")) {
        document.all.DL_Information.src = url;
        AddWPTitle(title);
    }
    else { // 21-9-2006 - MMQ - search for DL_Information in parent if it doesn't exists
        if (parent.document.getElementById("DL_Information")) {
            parent.document.all.DL_Information.src = url;
            AddWPTitle(title);
        }
    }
    //alert('loadcontent2 done');
}

function EXDeleteCaseMeeting(DLEntity, DLId) {
    var sWhere = 'DL_EntityNameForeign = \'' + DLEntity + '\' AND DL_EntityId = ' + DLId;
    var oXML = getEntityData2('COUNT(*) as DL_Count', 'DL_CaseDocuments', sWhere, '');
    var sCount = getsafe(oXML, '//DL_Count');
    //alert(sWhere + ' ' + sCount + ' ' + oXML.xml);
    if (sCount == '' || sCount == '0') {
        EXdeleteentity(DLEntity, DLId, null, false, false);
        return;
    }
    if (!confirm('Delete link to meeting including ' + sCount + ' documents?'))
        return;
    var xOps;
    xOps = '<' + DLEntity + '><DELETE><row><DL_Id>' + DLId + '</DL_Id></row></DELETE></' + DLEntity + '>';
    setEntity(DLEntity, xOps);
    ExecuteProcedure('dbo.EXDeleteCaseDocuments @DLEntityNameForeign=\'' + DLEntity + '\', @DLEntityId=' + DLId);
    EXReload();
}
function EXdeleteentity(DLEntity, DLId, msg, DLCreatedBysAMAccountName, bDoNotReload, sMarkAsDeleted) { // 21.11.2008 - sMarkAsDeleted added as parameter
    if (EXGetUserRole() == 0) {// 3.11.2009
        alert(LEX_UserNoAccessCannotDelete);
        return;
    }

    var s;
    if (typeof (sMarkAsDeleted) == 'undefined')
        sMarkAsDeleted = '';
    if (msg == null || msg == '')
        s = LEX_DeleteRecord;
    else
        s = msg;
    if (DLCreatedBysAMAccountName) {
        var oXML = getEntityData('DL_sAMAccountName', 'DL_sAMAccountName = %DL_sAMAccountName%', '');
        //var oEntity = getEntityDat(DLEntity, 'DL_Id = ' + DLId, '');
        if (getsafe(oXML, '//DL_sAMAccountName/DL_sAMAccountName').toLowerCase() != DLCreatedBysAMAccountName.toLowerCase()) {
            alert('Can only delete own records. Owner is ' + DLCreatedBysAMAccountName + '.');
            oXML = null;
            return;
        }
    }
    if (confirm(s)) {
        var xOps;
        xOps = '<' + DLEntity + '><DELETE><row><DL_Id>' + DLId + '</DL_Id></row></DELETE></' + DLEntity + '>';
        setEntity(DLEntity, xOps);

        if (!bDoNotReload) {
            if (typeof (EXDynWPRefresh) == 'function') // 16.8.2009 - dynamic reload
                EXDynWPRefresh(DLEntity);
            else
                EXReload();
        }
        else if (sMarkAsDeleted != '') {
            var oTR = document.getElementById(sMarkAsDeleted);
            if (oTR != null)
                oTR.style.textDecoration = 'line-through';
        }
    }
}
function EXdeleteentityWhere(DLEntity, Where) {
    if (EXGetUserRole() == 0) {// 3.11.2009
        alert(LEX_UserNoAccessCannotDelete);
        return;
    }
    if (confirm(LEX_DeleteRecord)) {
        var oXML, DLId;
        oXML = getEntityData(DLEntity, Where, '');
        DLId = getsafe(oXML, '//DL_Id');
        if (DLId = '')
            return;
        var xOps;
        xOps = '<' + DLEntity + '><DELETE><row><DL_Id>' + DLId + '</DL_Id></row></DELETE></' + DLEntity + '>';
        setEntity(DLEntity, xOps);

        EXReload();
    }
}
function OpenTableWP(strXML, strHref) {
    /*SetGenericDBKeys(strXML);*/
    SetRecentValue('DL_GenericDB', strXML);
    //  	loadcontent(strHref);
}
function OpenGenericTable(iLogon, strXML, strHref) {
    if (strHref == null) // 28.7.2008
        strHref = '';
    /*alert('OpenGenericTable ' + strXML);*/
    if (iLogon == 1) {
        self.location = 'Logon.aspx?XML=' + strXML + '&Href=' + strHref;
    }
    else {
        /*SetGenericDBKeys(strXML);*/
        //alert('GenericDB ' + strXML);
        SetRecentValue('DL_GenericDB', strXML);
        OpenGenericDB(strHref);
    }
}
function loadentityexcel(DL_Entity, strHref, ForeignKey, ForeignValue, ForeignKey2, ForeignValue2, strWhere, strPropNames, GroupBy, SumFields, LoadSize, SheetCaption, bReadOnly, GroupByColor, NoFilter, NoGridlines, strOrderBy, bAllowDelete) // 23.7.2010 - GroupBy og SumFields added // 9.8.2010 - LoadSize added // 7.10.2010 SheetCaption added // 26.10.2011 - bReadOnly added // 26.1.2012 GropByColor, NoFilter, NoGridlines added // 29.8.2012 - strOrderBy added
{
    var sUser = '';
    if (typeof (strWhere) == 'undefined') // 4.4.2016
        strWhere = '';
    if (typeof (ForeignValue) == 'undefined') // 14.4.2016
        ForeignValue = '';
    if (typeof (ForeignValue2) == 'undefined') // 14.4.2016
        ForeignValue2 = '';
    ForeignValue = '' + ForeignValue;
    ForeignValue2 = '' + ForeignValue2;
    if (ForeignValue.indexOf('%DL_sAMAccountName%') > -1 || ForeignValue2.indexOf('%DL_sAMAccountName%') > -1 || strWhere.indexOf('%DL_sAMAccountName%') > -1) {
        sUser = GetEntityItemWhere('DL_sAMAccountName', 'DL_sAMAccountName = %DL_sAMAccountName%', 'DL_sAMAccountName'); // 4.2.2016
        //alert(sUser);
    }
    if (typeof (strOrderBy) == 'undefined') // 29.8.2012
        strOrderBy = '';
    if (typeof (GroupByColor) == 'undefined') // 26.1.2012
        GroupByColor = '';
    if (typeof (NoFilter) == 'undefined') // 26.1.2012
        NoFilter = '';
    if (typeof (NoGridlines) == 'undefined') // 26.1.2012
        NoGridlines = '';
    if (typeof (SheetCaption) == 'undefined')
        SheetCaption = '';
    if (typeof (LoadSize) == 'undefined')
        LoadSize = '';
    if (typeof (SumFields) == 'undefined')
        SumFields = '';
    if (typeof (GroupBy) == 'undefined')
        GroupBy = '';
    if (typeof (strPropNames) == 'undefined')
        strPropNames = '';
    if (typeof (bReadOnly) == 'undefined')
        bReadOnly = false;
    var strXML;
    strXML = '<DL_GenericDBParams><DL_EntityName>' + DL_Entity + '</DL_EntityName><TA_ProjectForeign/><TA_GroupCode/>';
    if (EXGetUserRole() == 0 || bReadOnly) // 3.11.2009
        strXML += '<DL_ReadOnly>true</DL_ReadOnly>';
    if (ForeignKey != '' && ForeignKey != null) {
        if (ForeignValue == '%DL_sAMAccountName%') ForeignValue = sUser;
        strXML = strXML + '<DL_ForeignKey>' + ForeignKey + '</DL_ForeignKey>';
        strXML = strXML + '<DL_ForeignValue>' + ForeignValue + '</DL_ForeignValue>';
    }
    if (ForeignKey2 != '' && ForeignKey2 != null) {
        if (ForeignValue2 == '%DL_sAMAccountName%') ForeignValue2 = sUser;
        strXML = strXML + '<DL_ForeignKey2>' + ForeignKey2 + '</DL_ForeignKey2>';
        strXML = strXML + '<DL_ForeignValue2>' + ForeignValue2 + '</DL_ForeignValue2>';
    }
    if ((strWhere != null) && (strWhere != '')) {
        strWhere = strWhere.replace('%DL_sAMAccountName%', '\'' + sUser + '\''); // 4.2.2016
        strXML = strXML + '<strWhere>' + MakeXMLSafe(strWhere) + '</strWhere>';
    }
    if (strOrderBy != '') // 29.8.2012
        strXML = strXML + '<strOrderBy>' + MakeXMLSafe(strOrderBy) + '</strOrderBy>';
    if ((strPropNames != null) && (strPropNames != '')) // 28.7.2008
    {
        strXML = strXML + '<strPropNames>' + strPropNames + '</strPropNames>';
    }
    if (GroupBy != '') // 23.7.2010
    {
        strXML = strXML + '<GroupBy>' + GroupBy + '</GroupBy>';
    }
    if (SumFields != '') // 23.7.2010
    {
        strXML = strXML + '<SumFields>' + SumFields + '</SumFields>';
    }
    if (LoadSize != '') // 9.8.3010
    {
        strXML = strXML + '<LoadSize>' + LoadSize + '</LoadSize>';
    }
    if (SheetCaption != '') // 7.10.3010
    {
        strXML = strXML + '<SheetCaption>' + SheetCaption + '</SheetCaption>';
    }
    if (GroupByColor != '') // 26.1.2012
        strXML = strXML + '<GroupByColor>' + GroupByColor + '</GroupByColor>';
    if (NoFilter != '') // 26.1.2012
        strXML = strXML + '<NoFilter>' + NoFilter + '</NoFilter>';
    if (NoGridlines != '') // 26.1.2012
        strXML = strXML + '<NoGridlines>' + NoGridlines + '</NoGridlines>';
	if (bAllowDelete) // 4.11.2014
		strXML += '<DL_AllowDelete>true</DL_AllowDelete>';
    strXML = strXML + '</DL_GenericDBParams>';
    //alert('DEBUG\nloadentityexcel - not OpenGenericTable - ' + strXML + ' ' + strHref);
    OpenGenericTable(0, strXML, strHref);
}
function FunctionExists(name) {
    var bFound;
    var i;
    bFound = false;
    i = 0;
    for (i = 0; i < document.scripts.length; i++) {
        txt = document.scripts[i].text; // first script tag on the page 
        //alert(txt);
        if (txt.indexOf('function ' + name) > -1) {
            bFound = true;
        }
    };
    if (bFound)
        return true;
    else
        return false;
}

function InitDLDebug() {
    // BH 23-06-2011 Function added
    // Use URLParameter Debug=<Writediagnostics - value>
    if (queryString('DebugDestination') != '') {

    }

    if (queryString('Debug') != '') {
        if (queryString('Debug') == -1) {
            deleteCookie('WriteDiagnostics');
        }
        else {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + 10);
            setCookie('WriteDiagnostics', queryString('Debug'), exdate);
            setCookie('DebugDestination', queryString('DebugDestination'), exdate);
        }
    }
    initedDebug = true;
    DebugAlert('Initialized', 100, 'EX_Resources.exformatics.js.InitDLDebug()');

}

var initedDebug = false;
var debugInfo = '';
function DebugAlert(msg, writeDiagnostics, src) {
    if (!initedDebug) {
        InitDLDebug();
    }
    if (writeDiagnostics <= getCookie('WriteDiagnostics')) {
        if (getCookie('DebugDestination') == 'ClipBoard') {
            EXCopyToClipboard((new Date().toUTCString()) + ' ' + src + ': ' + msg);
        }
        else {
            alert('Debug: ' + src + ": " + msg);
        }
    }
}

function InitDLGlobalMenu() {
    var oXML = getEntityData2('*', 'DL_Favorites', 'DL_ModifiedBy=%WUSER%', '');

    var sTest = '<ul class="sf-menu"><li class="current"> <a href="#a">Exformatics</a> <ul>';
    var favorites = oXML.selectNodes("//DL_Favorites");
    for (var i = 0; i < favorites.length; i++) {
        sTest += "<li><a href='javascript:EXGotoObject(\"" + favorites[i].selectNodes("DL_EntityNameForeign")[0].text + "\", " + favorites[i].selectNodes("DL_EntityId")[0].text + ");'>" + favorites[i].selectNodes("DL_Title")[0].text + "</a></li>";
    }
    sTest += "</ul></li></ul>"
    oDiv = document.getElementById('exformaticsmenu');
    oDiv.innerHTML = sTest;
    $(function () {
        $('ul.sf-menu').superfish();
    });
}

function InitDLDashBoard() {
    // 23-06-2011 bh Added debug functionality
    InitDLDebug();
    //InitDLGlobalMenu()
    //    	alert('InitDLDashBoard()');
    if (window.InitMainEntity) {
        //    		alert('InitMain()');
        InitMainEntity();
    }
    //else alert('InitMainEntity undefined');
    //if (window.EXInitLoadFolder) { // 13.2.2008 - code copied from FTF
    if (typeof (EXInitLoadFolder) == "function") { // Folder web part
        EXInitLoadFolder();
    }
    if (typeof (EXInitLoadDocuments) == "function") { // 13.2.2008 - code copied from FTF
        EXInitLoadDocuments();
    }
}
// SignOff record
function signoff(DL_Entity, DL_IDs, Instruction, Description) {
    if (DL_Entity == '' || DL_IDs == '')
        alert('signoff(' + DL_Entity + ',' + DL_IDs + ') - invalid parameters');
    if (typeof (Instruction) == 'undefined' || Instruction == null) // 23.7.2008
        Instruction = '';
    if (typeof (Description) == 'undefined' || Description == null) // 23.7.2008
        Description = '';
    /*alert('signoff(' + DL_Entity + ',' + DL_IDs + ')');*/
    if (false) {
        signoff = window.open('/EX_SQLSVC/SignOff.aspx?DL_ENTITY=' + DL_Entity + '&DL_IDs=' + DL_IDs, 'SignOff', 'width=300,height=280,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,copyhistory=no,resizable=no');
    }
    else {
        return window.showModalDialog('/EX_SQLSVC/SignOff.aspx?DL_ENTITY=' + DL_Entity + '&DL_IDs=' + DL_IDs + '&Duplicates=true&Instruction=' + Instruction + '&Description=' + Description + "&EXcheck=" + Math.random(), 'SignOff', 'dialogWidth:326px;dialogHeight:350px;toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,copyhistory=no,resizable=no,modal=yes');
    }
}
// SelectAll
function SelectAll(CheckBoxControl) {
    // alert('SelectAll');
    if (CheckBoxControl.checked == true) {
        var i;
        for (i = 0; i < document.forms[0].elements.length; i++) {
            if ((document.forms[0].elements[i].type == 'checkbox') && (document.forms[0].elements[i].name.indexOf('ItemCheckBox') > -1)) {
                var chkBox;
                chkBox = document.forms[0].elements[i]
                //alert("control " + chkBox.name + " enabled " + chkBox.enabled + " checked " + chkBox.checked);
                //if (document.forms[0].elements[i].enabled) {
                document.forms[0].elements[i].checked = true;
                //alert("set checked");
                //}
            }
        }
    }
    else {
        var i;
        for (i = 0; i < document.forms[0].elements.length; i++) {
            if ((document.forms[0].elements[i].type == 'checkbox') && (document.forms[0].elements[i].name.indexOf('ItemCheckBox') > -1)) {
                document.forms[0].elements[i].checked = false;
            }
        }
    }
}
function getSelected2() { // 2.1.2011
    var oEles = document.getElementsByTagName('INPUT');
    var s = '';
    for (var i = 0; i < oEles.length; i++) {
        if (oEles[i].type == 'checkbox') {
            if (oEles[i].checked) {
                if (s != '') s += ',';
                s += oEles[i].id.replace('cbDF', '');
            }
        }
    }
    return s;
}
function getSelected(id) {
    if (typeof (id) == 'undefined') // 27.10.2010
        id = '';
    var i;
    var s;
    var ss;
    s = '';
    var oForm;
    if (id == '')
        oForm = document.forms[0];
    else
        oForm = document.getElementById(id);
    for (i = 0; i < oForm.elements.length; i++) {
        if ((oForm.elements[i].type == 'checkbox') && (document.forms[0].elements[i].name.indexOf('ItemCheckBox') > -1)) {
            if (oForm.elements[i].checked) {
                if (s != '') {
                    s = s + ':';
                }
                ss = oForm.elements[i].name;
                ss = ss.replace('ItemCheckBox', '');
                s = s + ss;
            }
        }
    }
    return s;
}
// FindHREF
function FindHREF(DL_Id, DLName) {
    var e;
    e = document.getElementById('DL_MainEntity');
    if (e == null) {
        alert('Could not find DL_MainEntity in document!');
        FindHREF = '';
        return;
    }
    var i;
    var txt;
    txt = e.innerHTML;
    if (DLName == null) {
        DLName = 'DL_Id';
    }
    i = txt.indexOf(DLName + '=' + DL_Id);
    if (i > -1) {
        var j;
        var k;
        j = txt.lastIndexOf('__doPostBack', i);
        k = txt.indexOf('\'', i);
        k = txt.indexOf(')', k - 1);
        var s;
        s = txt.substr(j, k - j + 1);
        return s;
    }
    else {
        return '';
    }
}
// GotoDocument
function GotoDocument(DL_DocumentId) {
    var strResult;
    //alert('GotoDocument(' + DL_DocumentId + ')');
    try {
        var objXMLHTTP;
        var xmlParamDoc; // As New MSXML2.DOMDocument30
        objXMLHTTP = EXXMLHTTP();
        objXMLHTTP.open('Post', '/EX_PKMCDO/svcDLPKMCDO.asmx/getLink', false);
        objXMLHTTP.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var strParam;
        strParam = 'DL_DocumentId=' + DL_DocumentId;
        objXMLHTTP.send(strParam);
        //strResult=objXMLHTTP.responseText;
        xmlParamDoc = EXDOMDocument();
        xmlParamDoc.loadXML(objXMLHTTP.responseText);
        if (xmlParamDoc.documentElement.selectSingleNode("//DLLinks/DL_URL") == null) {
            strResult = xmlParamDoc.text;
            strResult = xmlParamDoc.xml;
        }
        else {
            strResult = xmlParamDoc.documentElement.selectSingleNode("//DLLinks/DL_URL").text
        };

        objXMLHTTP = null;
        // alert('GotoDocument=' + strParam);
    }
    catch (e) {
        alert('exception ' + e.tostring);
        strResult = '';
    };
    //alert('GotoDocument(' + DL_DocumentId + ')=' + strResult);
    if (strResult != '') {
        loadcontent(strResult);
    }
    //return strResult;
}

// PickDictionary
function PickDictionarySearch(DLPropName, sReturnField) { // 18.7.2010
    var oXML = getEntityData('DL_D710', 'DL_PropName = \'' + DLPropName + '\'', '');
    var DLPropDictionary = getsafe(oXML, '//DL_PropDictionary');
    var Title = getsafe(oXML, '//DL_PropDisplayName').toLowerCase();
    var DLPropCodeKey = getsafe(oXML, '//DL_PropCodeKey');
    var DLPropCodeDecode = getsafe(oXML, '//DL_PropCodeDecode');
    var DLPropCodeDecode2 = getsafe(oXML, '//DL_PropCodeDecode2');
    var DLPropCodeDecode3 = getsafe(oXML, '//DL_PropCodeDecode3');
    var oEle = document.getElementById(sReturnField);
    var sValue;
    if (oEle == null)
        sValue = '';
    else
        sValue = oEle.value;
    var sSearchParameters = DLPropCodeKey;
    if (sValue != '')
        sSearchParameters += ':' + sValue;
    if (DLPropCodeDecode != '')
        sSearchParameters += ',' + DLPropCodeDecode;
    if (DLPropCodeDecode2 != '')
        sSearchParameters += ',' + DLPropCodeDecode2;
    if (DLPropCodeDecode3 != '')
        sSearchParameters += ',' + DLPropCodeDecode3;
    //var url = getAbsoluteURL('/EX_SQLSVC/DynamicSearch.html?DLEntity=' + DLPropDictionary + '&Field=' + sReturnField + '&XPathValue=' + DLPropCodeKey + '&SearchParameters=' + sSearchParameters + '&DefaultKeys=' + DLPropCodeKey + '&DefaultValues=' + sValue + '&HideSave=true&DocumentTitle=' + LEX_Select + ' ' + Title + '&ClickAction=searchmodal');
    var url = getAbsoluteURL('/EX_SQLSVC/DynamicSearch.html?DLEntity=' + DLPropDictionary + '&Field=' + sReturnField + '&XPathValue=' + DLPropCodeKey + '&SearchParameters=' + sSearchParameters + '&HideSave=true&DocumentTitle=' + LEX_Select + ' ' + Title + '&ClickAction=searchmodal');
    sValue = window.showModalDialog(url, '', 'height=450,width=380');
    if (typeof (sValue) == 'undefined')
        return;
    if (oEle != null)
        oEle.value = sValue;
}
function EXPickDictionary(sReturnField, DLPropName) {
    var ew = window.open(getAbsoluteURL('/EX_SQLSVC/PickDictionary.aspx?Multi=false&DL_PropName=' + DLPropName + '&returnfield=' + sReturnField, 'ew', 'height=450,width=320'));
    ew.focus();
}
function PickDictionary(DL_PropName, returnfield, bMulti) {
    var dictionary_window;
    var url;
    //url = '/EX_SQLSVC/PickDictionary.aspx?returnfield=Form1.' + returnfield;
    url = getAbsoluteURL('/EX_SQLSVC/PickDictionary.aspx?DL_PropName=' + DL_PropName + '&returnfield=Form1.' + returnfield);
    if (bMulti)
        url = url + '&Multi=true';
    dictionary_window = window.open(url, '', 'width=296,height=350');
    dictionary_window.focus();
    //		window.showModalDialog(url,'','width=296,height=450'); // 8.8.2008 - tried to make it work - cannot make it work with ASPX :-(
}
// Handle return value from PickDictionary.aspx
function EXReturnValueFromForm(field, value, sDIV) {
    try {
        if (sDIV == null || sDIV == '')
            sDIV = 'Gnyf';
        var oEle;
        oEle = parent.document.getElementById('urn:schemas-microsoft-com:office:office#' + field);
        if (oEle == null) {
            oEle = parent.document.getElementById(field);
        }
        if (oEle == null)
            alert('EXReturnValueFromForm ' + field + ' not found');
        oEle.value = value;
        var oDIV;
        oDIV = parent.document.getElementById(sDIV);  // PickForm - naming?!?!
        if (oDIV != null) {
            oDIV.style.visibility = 'hidden';
            oDIV.style.visibility = 'hidden';
        }
        oEle.focus();
    }
    catch (e) { alert('EXReturnValueFromForm ' + e.message); }
}
function EXPickDictionaryReturnValue(field, values) { // 16.4.2008 - this function was missing - how is that possible?
    try {
        var i = field.indexOf('.');
        if (i > -1)
            field = field.substring(i + 1);
        //alert(field +  ' ' + i);
        var bMulti = window.location.href.indexOf('Multi=true') > -1; // 8.8.2008
        //alert('EXPickDictionaryReturnValue(' + field + ',' + values + ') invoked ' + bMulti);
        var oEle = window.opener.document.getElementById(field);
        if (oEle == null)
            oEle = parent.window.getElementById(field);
        if (oEle == null)
            alert('EXPickDictionaryReturnValue(' + field + ',' + values + ') ERROR');
        //alert(oEle);
        if (bMulti) {
            oEle.value = oEle.value + ';' + values;
            oEle.value = oEle.value.replace(/;;/g, ";");
        }
        else
            oEle.value = values;
        window.close();
    } catch (e) { alert('EXPickDictionaryReturnValue(' + field + ',' + values + ') >> ' + e.message); }
}
// loadmatrix
function loadmatrix(Title, HorizontalTitle, HorizontalKey, VerticalTitle, VerticalKey, MatrixEntity, MatrixView, MatrixWhere, MatrixOrderBy, MatrixTitle, MatrixHorizontalKey, MatrixVerticalKey) {
    //alert('loadmatrix');
    if (1) //document.all.i("DL_Information"))
    {
        //document.all.DL_Information.src="/EX_SQLSVC/MatrixRelationPicker.aspx?title=" + Title + "&horizontaltitle=" + HorizontalTitle + "&horizontalkey=" + HorizontalKey + "&verticaltitle=" + VerticalTitle + "&verticalkey=" + VerticalKey + "&matrixentity=" + MatrixEntity + "&matrixview=" + MatrixView + "&matrixwhere=" + MatrixWhere + "&matrixorderby=" + MatrixOrderBy + "&matrixtitle=" + MatrixTitle + "&matrixhorizontalkey=" + MatrixHorizontalKey + "&matrixverticalkey=" + MatrixVerticalKey + "&EXcheck=" + Math.random();
        loadmatrix = window.open('/EX_SQLSVC/MatrixRelationPicker.aspx?title=' + Title + '&horizontaltitle=' + HorizontalTitle + '&horizontalkey=' + HorizontalKey + '&verticaltitle=' + VerticalTitle + '&verticalkey=' + VerticalKey + '&matrixentity=' + MatrixEntity + '&matrixview=' + MatrixView + '&matrixwhere=' + MatrixWhere + '&matrixorderby=' + MatrixOrderBy + '&matrixtitle=' + MatrixTitle + '&matrixhorizontalkey=' + MatrixHorizontalKey + "&matrixverticalkey=" + MatrixVerticalKey + "&EXcheck=" + Math.random(), 'Upload', 'width=640,height=400,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=no,resizable=no');
    }
    else
        alert('loadmatrix - strange ' + Title + ' ' + HorizontalTitle);
}
function f_open_window_max(aURL, aWinName) {
    var wOpen;
    var sOptions;

    sOptions = 'status=yes,menubar=yes,scrollbars=yes,resizable=yes,toolbar=yes';
    sOptions = sOptions + ',width=' + (screen.availWidth - 10).toString();
    sOptions = sOptions + ',height=' + (screen.availHeight - 122).toString();
    sOptions = sOptions + ',screenX=0,screenY=0,left=0,top=0';

    wOpen = window.open('', aWinName, sOptions);
    wOpen.location = aURL;
    wOpen.focus();
    wOpen.moveTo(0, 0);
    wOpen.resizeTo(screen.availWidth, screen.availHeight);
    //   return wOpen;
}

function loadlist(sD610, sD710s, sFKey, sFValue, sAction, orderby, bReport, sTitle) { // 24.9.2008 - sTitle added
    //alert('loadlist sD610=' + sD610 + ' sD710s=' + sD710s + ' sFKey=' + sFKey + ' sFValue=' + sFValue + ' sAction='+ sAction + ' bReport=' + bReport + ' sTitle=' + sTitle);
    var sDoAction;
    if (sAction != '' && sAction != null)
        sDoAction = sAction;
    else
        sDoAction = '568'; // 30.3.2009 '69';

    // MMQ 20-9-2006
    //  loadcontent('/EX_SQLSVC/DynamicListForm.aspx?DL_ENTITY=' + sD610 + '&view=' + sD710s + '&ForeignKeys=' + sFKey + '&ForeignValues=\'' + sFValue + '\'&Action=' + sDoAction + "&EXcheck=" + Math.random());
    if (bReport)
        loadcontent('/EX_SQLSVC/DynamicListForm.aspx?DL_REPORT=' + sD610 + '&view=' + sD710s + '&ForeignKeys=' + sFKey + '&ForeignValues=' + sFValue + '&orderby=' + orderby + '&Action=' + sDoAction + "&EXcheck=" + Math.random());
    else { // MMQ 9-8-2007 - D760 cannot be loaded using quicksearch
        if (sD610 != 'DL_D760') { // MMQ 21-6-2007 - function EXLoadQuickSearch(Entity,bSearchOnLoad,ForeignKey,ForeignValue) {
            EXLoadQuickSearch(sD610, true, sFKey, sFValue, null, 1);
        }
        else {
            //var sTitle = GetEntityItemWhere('DL_D610','DL_EntityName = \'' + sD610 + '\'', 'DL_EntityDescription'); // 24.8.2008
            loadcontent2('/EX_SQLSVC/DynamicListForm.aspx?DL_ENTITY=' + sD610 + '&view=' + sD710s + '&ForeignKeys=' + sFKey + '&ForeignValues=' + sFValue + '&Action=' + sDoAction + "&EXcheck=" + Math.random(), sTitle);
        }
    }
    //loadcontent('','DL_Information2');
    newentityMMQ(sD610, sFKey, sFValue, '');
}

function exloadlist(entity, view, where, proplist, clickaction, title, orderby) { // 14.4.2011 - title added // 12.9.2012 - orderby added
    if (typeof (orderby) == 'undefined')
        orderby = '';
    if (typeof (title) == 'undefined')
        title = '';
    if (typeof (proplist) == 'undefined')
        proplist = '';
    if (typeof (clickaction) == 'undefined')
        clickaction = '';
    var s;
    s = '/EX_SQLSVC/DynamicList.html?DLEntity=' + entity;
    if (view != null & view != '')
        s = s + '&DLView=' + view;
    if (proplist != '')
        s += '&PropList=' + proplist;
    if (clickaction != '')
        s += '&ClickAction=' + clickaction;
    s = s + '&Where=' + where;
    if (orderby != '')
        s += '&Orderby=' + orderby;
    loadcontent2(s, title);
}

function newentityMMQ(entity, foreignkeys, foreignvalues, appendparam) {
    if (document.getElementById("DL_Information2")) {
        if (foreignkeys == '') {
            document.all.DL_Information2.src = "/EX_SQLSVC/DynamicForm.aspx?new=true&DL_ENTITY=" + entity + "&" + appendparam;
            // 23-8-2006 - adding focus
            var oIF = document.getElementById("DL_Information2")
            if (oIF != null) {
                //alert('IFRAME focus on');
                oIF.focus = true;
            }
            if (document.all.DL_Information2.focus() != true) {
                window.status = 'not on top';
            }
        }
        else {
            document.all.DL_Information2.src = "/EX_SQLSVC/DynamicForm.aspx?new=true&DL_ENTITY=" + entity + "&ForeignKeys=" + foreignkeys + "&ForeignValues=" + foreignvalues + "&" + appendparam;
            // 23-8-2006 - adding focus
            var oIF = document.getElementById("DL_Information2")
            if (oIF != null) {
                //alert('IFRAME focus on');
                oIF.focus = true;
            }
            if (document.all.DL_Information2.focus() != true) {
                window.status = 'not on top';
            }
        }
        AddWPTitle(LEX_CreateNew + EXgetEntityTitle(entity) + '', 'DL_Information2');
    }
    //        	else
    //       		alert('new entity(' + entity + ',' + id + ') - Information Web Part missing');
}


// DYnamicForm javascript functions to put a row ON/OFF - as well as set the style of a row
function PropNameRowOnOff(DL_PropName, bOn) {
    try {
        if (DL_PropName.indexOf(',') == -1) {
            var oEle = document.getElementById('CELL' + DL_PropName);
            if (oEle == null)
                return;
            var oPELE = oEle.parentNode;
            if (bOn == 1)
                oPELE.style.display = '';
            else
                oPELE.style.display = 'none';
        }
        else {
            for (var i = 0; i < DL_PropName.split(",").length; i++) {
                PropNameRowOnOff(DL_PropName.split(",")[i], bOn);
            }
        }
    } catch (e) { alert('PropNameRowOnOff(' + DL_PropName + ') ' + e.message); }
}
function PropNameRowClass(DL_PropName, className) {
    try {
        var oEle = document.getElementById('CELL' + DL_PropName);
	if (oEle == null) return; // 12.9.2014
        var oPELE = oEle.parentNode;
        oPELE.className = className;
    } catch (e) { alert('PropNameRowClass(' + DL_PropName + ')'); }
}
function PropNameRowTitle(DL_PropName, title) {
    try {
        var oEle = document.getElementById('LABEL' + DL_PropName); // Title is placed in a local SPAN
        if (oEle == null)
            alert('PropNameRowTitle(' + DL_PropName + ',' + title + ') not found');
        oEle.innerHTML = title;
    } catch (e) { alert('PropNameRowTitle(' + DL_PropName + ') >>> ' + e.message); }
}
function PropNameRowProtect(DL_PropName) { // 21.11.2011
    try {
        var oEle = document.getElementById(DL_PropName);
        if (oEle == null)
            alert('PropNameRowProtect(' + DL_PropName + ') not found');
        else { // 26.09.2012
            //oEle.readonly = true;
            oEle.readOnly = 'readonly'; // 26.9.2012 - capital readOnly
            oEle.disabled = true;
        }
    } catch (e) { alert('PropNameRowProtect(' + DL_PropName + ') >>> ' + e.message); }
}
function EXsetTitle(id, value) {
    var oEle = document.getElementById(id);
    if (oEle != null)
        oEle.innerHTML = value;
}
function EXSendToAll() {

}
// userLanguage
function userLanguage() {
    try {
        var xmldoc, FeedbackHTTP;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<userLanguage xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '</userLanguage>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP();
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=userLanguage'), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/userLanguage');
        FeedbackHTTP.send(xmldoc);

        var s = getsafe(FeedbackHTTP.responseXML, '//UserLanguage');
        FeedbackHTTP = null;
        return s;
    }
    catch (e) {
        alert('userLanguage() failed ' + e.message);
    }
}

// getEntityData
function getEntityData(DL_Entity, strWhere, strOrderBy) {
    try {
        var xmldoc, FeedbackHTTP;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<getEntityData xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<DL_Entity>' + DL_Entity + '</DL_Entity>';
        xmldoc = xmldoc + '<strWhere>' + strWhere + '</strWhere>';
        xmldoc = xmldoc + '<strOrderBy>' + strOrderBy + '</strOrderBy>';
        xmldoc = xmldoc + '</getEntityData>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP();
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=getEntityData'), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/getEntityData');
        FeedbackHTTP.send(xmldoc);

        var oXML = FeedbackHTTP.responseXML;
        FeedbackHTTP = null;
        return oXML;
    }
    catch (e) {
        alert('getEntityData(' + DL_Entity + ',' + strWhere + ',' + strOrderBy + ') failed ' + e.message);
    }
}
// getEntityData2
function getEntityData2(strNames, DL_Entity, strWhere, strOrderBy) {
    try {
        var xmldoc, FeedbackHTTP;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<getEntityData2 xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<strNames>' + strNames + '</strNames>';
        xmldoc = xmldoc + '<DL_Entity>' + DL_Entity + '</DL_Entity>';
        xmldoc = xmldoc + '<strWhere>' + MakeXMLSafe(strWhere) + '</strWhere>';
        xmldoc = xmldoc + '<strOrderBy>' + strOrderBy + '</strOrderBy>';
        xmldoc = xmldoc + '</getEntityData2>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP();
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=getEntityData2'), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/getEntityData2');
        FeedbackHTTP.send(xmldoc);

        //alert('getEntityData2 - ' + xmldoc + ' - ' + FeedbackHTTP.ResponseText);
        var oXML = FeedbackHTTP.responseXML;
        FeedbackHTTP = null;
        return oXML;
    }
    catch (e) {
        alert('getEntityData2(' + strNames + ',' + DL_Entity + ',' + strWhere + ',' + strOrderBy + ') failed ' + e.message);
    }
}
function getEntityData2Async(strNames, DL_Entity, strWhere, strOrderBy, fct) { // 21.8.2009
    try {
        var xmldoc, FeedbackHTTP;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<getEntityData2 xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<strNames>' + strNames + '</strNames>';
        xmldoc = xmldoc + '<DL_Entity>' + DL_Entity + '</DL_Entity>';
        xmldoc = xmldoc + '<strWhere>' + MakeXMLSafe(strWhere) + '</strWhere>';
        xmldoc = xmldoc + '<strOrderBy>' + strOrderBy + '</strOrderBy>';
        xmldoc = xmldoc + '</getEntityData2>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        var FeedbackHTTP = EXXMLHTTP();
        var handlerFunction = getReadyStateHandler(FeedbackHTTP, fct);
        FeedbackHTTP.onreadystatechange = handlerFunction;
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=getEntityData2'), true);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/getEntityData2');
        FeedbackHTTP.send(xmldoc);

        //alert('getEntityData2 - ' + xmldoc + ' - ' + FeedbackHTTP.ResponseText);
        //var oXML = FeedbackHTTP.ResponseXML;
        //FeedbackHTTP = null;
        //return oXML;
    }
    catch (e) {
        alert('getEntityData2Async(' + strNames + ',' + DL_Entity + ',' + strWhere + ',' + strOrderBy + ') failed ' + e.message);
    }
}
function getReadyStateHandler(req, responseHandler) { // Return an anonymous function that listens to the XMLHttpRequest instance 
    return function () {
        if (req.readyState == 4) { // If the request's status is "complete" 
            var message = req.getResponseHeader("status");
            // Check that a successful server response was received 
            if (req.status == 200) {          //todo: catch 404 error.         
                // Pass the payload of the response to the handler function 
                if (responseHandler != null) // 4.10.2010 - avoid error if no responseHandler
                    responseHandler(req);
            }
            else if (message != undefined && message != null && message.length > 0) {
                alert("Error status  [" + req.status + "] with message [" + message + "].");
            }
        }
    }
}
// getEntityData3
function getEntityData3(strNames, DL_Entity, strWhere, strOrderBy, strGroupBy) {
    try {
        var xmldoc, FeedbackHTTP;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<getEntityData3 xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<strNames>' + strNames + '</strNames>';
        xmldoc = xmldoc + '<DL_Entity>' + DL_Entity + '</DL_Entity>';
        xmldoc = xmldoc + '<strWhere>' + MakeXMLSafe(strWhere) + '</strWhere>';
        xmldoc = xmldoc + '<strOrderBy>' + strOrderBy + '</strOrderBy>';
        xmldoc = xmldoc + '<strGroupBy>' + strGroupBy + '</strGroupBy>';
        xmldoc = xmldoc + '</getEntityData3>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=getEntityData3'), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/getEntityData3');
        FeedbackHTTP.send(xmldoc);

        //alert('getEntityData3 - ' + xmldoc + ' - ' + FeedbackHTTP.ResponseText);
        var oXML = FeedbackHTTP.responseXML;
        FeedbackHTTP = null;
        return oXML;
    }
    catch (e) {
        alert('getEntityData3(' + strNames + ',' + DL_Entity + ',' + strWhere + ',' + strOrderBy + ',' + strGroupBy + ') failed ' + e.message);
    }
}
// getEntityData34JSON
function getEntityData34JSON(strNames, DL_Entity, strWhere, strOrderBy, strGroupBy) {
    try {
        var xmldoc, FeedbackHTTP;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<getEntityData34JSON xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<strNames>' + strNames + '</strNames>';
        xmldoc = xmldoc + '<DL_Entity>' + DL_Entity + '</DL_Entity>';
        xmldoc = xmldoc + '<strWhere>' + MakeXMLSafe(strWhere) + '</strWhere>';
        xmldoc = xmldoc + '<strOrderBy>' + strOrderBy + '</strOrderBy>';
        xmldoc = xmldoc + '<strGroupBy>' + strGroupBy + '</strGroupBy>';
        xmldoc = xmldoc + '<strWUser>%WUSER%</strWUser><showNodeName>true</showNodeName>';
        xmldoc = xmldoc + '</getEntityData34JSON>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=getEntityData34JSON'), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/getEntityData34JSON');
        FeedbackHTTP.send(xmldoc);

        //alert('getEntityData34JSON - ' + xmldoc + '\n' + FeedbackHTTP.responseText);
        var oXML = FeedbackHTTP.responseText;
        FeedbackHTTP = null;
        return oXML;
    }
    catch (e) {
        alert('getEntityData3(' + strNames + ',' + DL_Entity + ',' + strWhere + ',' + strOrderBy + ',' + strGroupBy + ') failed ' + e.message);
    }
}
// getDictionaryData
function getDictionaryData(DLDictionary, DLPropCodeKey, DLPropCodeDecode) // 1.6.2008
{
    try {
        var xmldoc, FeedbackHTTP;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<getDictionaryData xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<DL_Dictionary>' + DLDictionary + '</DL_Dictionary>';
        xmldoc = xmldoc + '<DL_PropCodeKey>' + DLPropCodeKey + '</DL_PropCodeKey>';
        xmldoc = xmldoc + '<DL_PropCodeDecode1>' + DLPropCodeDecode + '</DL_PropCodeDecode1>';
        xmldoc = xmldoc + '<DL_PropCodeDecode2/><DL_PropCodeDecode3/><DL_DictKey1/><DL_DictValue1/>';
        xmldoc = xmldoc + '</getDictionaryData>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP()
        var sUrl = getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=getDictionaryData');
        FeedbackHTTP.open("POST", sUrl, false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/getDictionaryData');
        FeedbackHTTP.send(xmldoc);

        if (FeedbackHTTP.Status != 200) {
            //	EXCopyToClipboard(xmldoc);
            alert(sUrl + ' getDictionaryData(' + DLDictionary + ',' + DLPropCodeKey + ',' + DLPropCodeDecode + ') failed ' + FeedbackHTTP.Status + '\n' + xmldoc + '\n' + FeedbackHTTP.ResponseText);
        }
        var oXML = FeedbackHTTP.responseXML;
        FeedbackHTTP = null;
        return oXML;
    }
    catch (e) {
        alert('getDictionaryData(' + DLDictionary + ',' + DLPropCodeKey + ',' + DLPropCodeDecode + ') failed ' + e.message);
    }
}
function getDictionaryData2(DLDictionary, DLPropCodeKey, DLPropCodeDecode, DLPropCodeDecode2, DLPropCodeDecode3, DLDictKey1, DLDictValue1, DLDictKey2, DLDictValue2, DLDictKey3, DLDictValue3) // 6.11.2011
{
    try {
        if (typeof (DLDictKey1) == 'undefined') { DLDictKey1 = ''; DLDictValue1 = ''; }
        if (typeof (DLDictKey2) == 'undefined') { DLDictKey2 = ''; DLDictValue2 = ''; }
        if (typeof (DLDictKey3) == 'undefined') { DLDictKey3 = ''; DLDictValue3 = ''; }
        var xmldoc, FeedbackHTTP;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<getDictionaryData2 xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<DL_Dictionary>' + DLDictionary + '</DL_Dictionary>';
        xmldoc = xmldoc + '<DL_PropCodeKey>' + DLPropCodeKey + '</DL_PropCodeKey>';
        xmldoc = xmldoc + '<DL_PropCodeDecode1>' + DLPropCodeDecode + '</DL_PropCodeDecode1>';
        xmldoc = xmldoc + '<DL_PropCodeDecode2>' + DLPropCodeDecode2 + '</DL_PropCodeDecode2><DL_PropCodeDecode3>' + DLPropCodeDecode3 + '</DL_PropCodeDecode3>';
        xmldoc = xmldoc + '<DL_DictKey1>' + DLDictKey1 + '</DL_DictKey1><DL_DictValue1>' + DLDictValue1 + '</DL_DictValue1>';
        xmldoc = xmldoc + '<DL_DictKey2>' + DLDictKey2 + '</DL_DictKey2><DL_DictValue2>' + DLDictValue2 + '</DL_DictValue2>';
        xmldoc = xmldoc + '<DL_DictKey3>' + DLDictKey3 + '</DL_DictKey3><DL_DictValue3>' + DLDictValue3 + '</DL_DictValue3>';
        xmldoc = xmldoc + '</getDictionaryData2>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP()
        var sUrl = getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=getDictionaryData2');
        FeedbackHTTP.open("POST", sUrl, false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/getDictionaryData2');
        FeedbackHTTP.send(xmldoc);

        if (FeedbackHTTP.Status != 200) {
            //	EXCopyToClipboard(xmldoc);
            alert(sUrl + ' getDictionaryData2(' + DLDictionary + ',' + DLPropCodeKey + ',' + DLPropCodeDecode + ') failed ' + FeedbackHTTP.Status + '\n' + xmldoc + '\n' + FeedbackHTTP.ResponseText);
        }
        var oXML = FeedbackHTTP.responseXML;
        FeedbackHTTP = null;
        return oXML;
    }
    catch (e) {
        alert('getDictionaryData2(' + DLDictionary + ',' + DLPropCodeKey + ',' + DLPropCodeDecode + ') failed ' + e.message);
    }
}
// getEntity
function getEntity(DL_Entity, strWhere, strOrderBy) {
    try {
        var xmldoc, FeedbackHTTP;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<_getEntity xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<strEntity>' + DL_Entity + '</strEntity>';
        xmldoc = xmldoc + '<strWhere>' + MakeXMLSafe(strWhere) + '</strWhere>'; // 31.5.2008 - MakeXMLSafe
        xmldoc = xmldoc + '<strOrderBy>' + strOrderBy + '</strOrderBy>';
        xmldoc = xmldoc + '</_getEntity>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';
        // alert('getEntity ' + xmldoc);

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=_getEntity'), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/_getEntity');
        FeedbackHTTP.send(xmldoc);
        // alert('getEntity completed ' + FeedbackHTTP.ResponseText);
        var oXML;
        oXML = FeedbackHTTP.responseXML;
        FeedbackHTTP = null;
        return oXML;
    }
    catch (e) {
        alert('getEntity(' + DL_Entity + ',' + strWhere + ',' + strOrderBy + ') failed ' + e.message);
    }
}
// ExecuteProcedure 
function ExecuteProcedure(Operation, bReportError) { // 1.8.2012 - bReportError added
    if (typeof (bReportError) == 'undefined')
        bReportError = true;
    try {
        var xmldoc;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<ExecuteProcedure xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<sProcedure>' + MakeXMLSafe(Operation) + '</sProcedure>'; // 18.5.2012 - MakeXMLSafe added
        xmldoc = xmldoc + '</ExecuteProcedure>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';
        //alert('ExecuteProcedure ' + xmldoc);

        FeedbackHTTP = EXXMLHTTP();
        FeedbackHTTP.open("POST", '/EX_SQLSVC/svcDLEntity.asmx?op=ExecuteProcedure', false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/ExecuteProcedure');
        FeedbackHTTP.send(xmldoc);
        //alert('ExecuteProcedure completed ' + FeedbackHTTP.ResponseText);
        //return (getsafe(FeedbackHTTP.responseXML, 'boolean') == 'true');
        return FeedbackHTTP.responseXML;
    }
    catch (e) {
        if (bReportError)
            alert('ExecuteProcedure(' + Operation + ') failed ' + e.message);
        return null;
    }
}
function ExecuteProcedureAsync(Operation, callback) // 21.8.2010
{
    try {
        var xmldoc;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<ExecuteProcedure xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<sProcedure>' + Operation + '</sProcedure>';
        xmldoc = xmldoc + '</ExecuteProcedure>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';
        //alert('ExecuteProcedure ' + xmldoc);

        FeedbackHTTP = EXXMLHTTP();
        var handlerFunction = getReadyStateHandler(FeedbackHTTP, callback);
        FeedbackHTTP.onreadystatechange = handlerFunction;
        FeedbackHTTP.open("POST", '/EX_SQLSVC/svcDLEntity.asmx?op=ExecuteProcedure', false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/ExecuteProcedure');
        FeedbackHTTP.send(xmldoc);
    }
    catch (e) {
        alert('ExecuteProcedureAsync(' + Operation + ') failed ' + e.message);
    }
}
// 6.3.2008
function EXADSearchInitField(PropName) {
    var oEle = document.getElementById(PropName);
    if (oEle == null)
        return;
    if (oEle.value == '')
        return;
    var s = GetEntityItemWhere('DL_sAMAccountName', 'DL_sAMAccountName = \'' + oEle.value + '\'', 'DL_FullName');
    //alert('EXADSearchInitField(' + PropName + ') = ' + s + '\n' + oEle.parentNode.outerHTML);
    oEle.parentNode.title = s;
}
// 4.3.2008
function SearchAD(strPath, strFilter, strProperty) {
    try {
        var xmldoc, FeedbackHTTP;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<SearchAD xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<strPath>' + strPath + '</strPath>';
        xmldoc = xmldoc + '<strFilter>' + MakeXMLSafe(strFilter) + '</strFilter>';
        xmldoc = xmldoc + '<strProperty>' + strProperty + '</strProperty>';
        xmldoc = xmldoc + '</SearchAD>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=SearchAD'), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/SearchAD');
        FeedbackHTTP.send(xmldoc);
        if (FeedbackHTTP.Status != 200)
            alert('SearchAD(' + strPath + ',' + strFilter + ',' + strProperty + ') failed ' + FeedbackHTTP.Status + '\n' + xmldoc + '\n--- ' + FeedbackHTTP.responseText);
        var oXML = FeedbackHTTP.responseXML;
        FeedbackHTTP = null;
        return oXML;
    }
    catch (e) {
        alert('SearchAD(' + strPath + ',' + strFilter + ',' + strProperty + ') failed ' + e.message);
    }
}
// CreateFolder - SQL Services interface
function CreateFolder(DLEntity, DLId) {
    try {
        var xmldoc;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<CreateFolder xmlns="http://doclife.net/svcDLState">';
        xmldoc = xmldoc + '<DL_Entity>' + DLEntity + '</DL_Entity>';
        xmldoc = xmldoc + '<DL_Id>' + DLId + '</DL_Id>';
        xmldoc = xmldoc + '</CreateFolder>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", '/EX_SQLSVC/svcDLState.asmx?op=CreateFolder', false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLState/CreateFolder');
        FeedbackHTTP.send(xmldoc);
        //alert('ExecuteProcedure completed ' + FeedbackHTTP.ResponseText);
        return (getsafe(FeedbackHTTP.responseXML, 'boolean') == 'true');
    } catch (e) { alert('CreateFolder(' + DLEntity + ',' + DLId + ') failed ' + e.message); }
}


// EXCreateFolder - SharePoint Services interface
function EXCreateFolder(DLEntity, DLId) {
    try {
        var xmldoc;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<CreateFolder xmlns="http://exformatics.net/SharePointServices">';
        xmldoc = xmldoc + '<DL_EntityName>' + DLEntity + '</DL_EntityName>';
        xmldoc = xmldoc + '<DL_Id>' + DLId + '</DL_Id>';
        xmldoc = xmldoc + '</CreateFolder>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", '/EX_SPSADMSVC/svcSharePoint.asmx?op=CreateFolder', false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://exformatics.net/SharePointServices/CreateFolder');
        FeedbackHTTP.send(xmldoc);
        return (getsafe(FeedbackHTTP.responseXML, '//CreateFolderResult') == 'true');
    } catch (e) { alert('EXCreateFolder(' + DLEntity + ',' + DLId + ') failed ' + e.message); }
}

// getDocumentsFromView
function getDocumentsFromView(URL, DL_ViewName) {
    try {
        var xmldoc;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<getDocumentsFromView xmlns="http://exformatics.net/SharePointServices">';
        xmldoc = xmldoc + '<URL>' + URL + '</URL>';
        xmldoc = xmldoc + '<DL_ViewName>' + DL_ViewName + '</DL_ViewName>';
        xmldoc = xmldoc + '</getDocumentsFromView>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", '/EX_SPSSVC/svcSharePoint.asmx?op=getDocumentsFromView', false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://exformatics.net/SharePointServices/getDocumentsFromView');
        FeedbackHTTP.send(xmldoc);
        //alert(FeedbackHTTP.responseText);
        return FeedbackHTTP.responseXML;
    }
    catch (e) { alert('getDocumentsFromView(' + DL_Entity + ',' + strWhere + ',' + strOrderBy + ') failed ' + e.message); }
}


function _EXnewTransmittal(DLEntityNameForeign, DLEntityId, title) {
    var xOps = '<DL_Transmittal>';
    xOps = xOps + '<DL_Title>' + title + '</DL_Title><DL_DueDate>now</DL_DueDate><DL_EntityNameForeign>' + DLEntityNameForeign + '</DL_EntityNameForeign><DL_EntityId>' + DLEntityId + '</DL_EntityId>';
    xOps = xOps + '</DL_Transmittal>';
    //alert(xOps);
    var DL_Transmittal = setEntityDetail('DL_Transmittal', xOps);
    return DL_Transmittal;
}
function EXnewTransmittalFromOld(DLsAMAccountName, DLId) {
    try {
        var oXML;
        oXML = ExecuteProcedure('EXCopyTransmittal @DL_sAMAccountName = ' + DLsAMAccountName + ', @DLId = ' + DLId);
        var DL_Transmittal;
        DL_Transmittal = GetRecentValue('DL_Transmittal');
        // Create new folder
        CreateFolder('DL_Transmittal', DL_Transmittal);
        EXGotoUrl(getAbsoluteURL(EXgetTransmittalPortalURL()) + DL_Transmittal);
    } catch (e) { alert('EXnewTransmittalFromOld ' + e.message); }
}

function EXnewTransmittal(portal) {
    try {
        var xOps, DL_Transmittal;
        // create new transmittal, open portal page, and assign that to view
        var DL_Case;
        DL_Case = GetRecentValue('DL_Case');
        if (confirm(LEX_TransmittalCreate.format(DL_Case))) {
            var DL_Title;
            DL_Title = '';
            DL_Title = prompt(LEX_TransmittalEnterTitle);
            if (DL_Title == '' || DL_Title == 'undefined') {
                alert(LEX_TransmittalNoTitle);
                return;
            }
            xOps = '<DL_Transmittal>';
            //xOps = xOps + '<DL_Title>Transmittal - AJAX created</DL_Title>';
            xOps = xOps + '<DL_Title>' + DL_Title + '</DL_Title><DL_DueDate>now</DL_DueDate><DL_EntityNameForeign>DL_Case</DL_EntityNameForeign><DL_EntityId>' + DL_Case + '</DL_EntityId>';
            xOps = xOps + '</DL_Transmittal>';
            //alert(xOps);
            DL_Transmittal = setEntityDetail('DL_Transmittal', xOps);

            // open portal page
            //      alert('new transmittal #' + DL_Transmittal + ' created for activity ' + DL_Case + ' - please specify various data');
            if (portal == 1) {
                //loadcontent(getAbsoluteURL('/C7/Transmittal/default.aspx?DL_Transmittal=') + DL_Transmittal);
                loadentity('DL_Transmittal', DL_Transmittal);
            }
            else {
                window.open(getAbsoluteURL(EXgetTransmittalPortalURL()) + DL_Transmittal);
            }
            return DL_Transmittal;
        }
        else {
            alert(LEX_TransmittalSelectAnother);
            return '';
        }
    } catch (e) { alert('EXnewTransmittal() - ' + e.message); }
}
function EXAddDocumentToCase(EXDocumentID, Title, sSite, sURL, portal, EXVersion) {
    //alert('EXAddDocumentToCase(' + EXDocumentID + ',' + Title + ',' + sSite + ',' + sURL + ',' + EXVersion + ')');
    var DL_Entity = 'DL_Transmittal';
    var DL_Transmittal = GetRecentValue('DL_Transmittal');
    //alert('getRecentValue ' + DL_Entity + '=' + DL_Transmittal);

    var xOps;

    // get LastModified date for Transmittal
    var DL_LastModified, DL_Title;
    var bCreate;
    bCreate = false;
    DL_LastModified = '';
    DL_Title = '';
    if (DL_Transmittal != null && DL_Transmittal != '') {
        var xTransmittalLastModified;
        xTransmittalLastModified = getEntityData('DL_TransmittalLastModified', "DL_Id=" + DL_Transmittal, "");
        DL_LastModified = getsafe(xTransmittalLastModified, "//DL_Modified");
        DL_Title = getsafe(xTransmittalLastModified, "//DL_Title");
        xTransmittalLastModified = null;

        if (DL_LastModified == '') {
            bCreate = true;
        }
    }
    else {
        bCreate = true;
    }

    if (bCreate) {
        alert(LEX_TransmittalNoActiveAbort);
        return false;
    }
    if (confirm(LEX_TransmittalAddDocument.format(DL_Transmittal, DL_Title, DL_LastModified))) {
        _EXAddDocumentToTransmittal(bCreate, DL_Entity, DL_Transmittal, EXDocumentID, Title, sURL, portal, EXVersion);
    }
}
function EXConvertBasket2PDF(bAsk, DLEntityNameForeign, DLEntityId) { // 12.3.2009 // 16.1.2013 - DLEntityNameForeign+DLEntityId added
    if (typeof (bAsk) == 'undefined')
        bAsk = true;
    if (typeof (DLEntityNameForeign) == 'undefined')
        DLEntityNameForeign = '';
    if (typeof (DLEntityId) == 'undefined')
        DLEntityId = '';
    var bConvert = false;
    var sWhere = 'DL_EntityNameForeign = \'DL_sAMAccountName\' AND DL_ModifiedBy = %WUSER%';
    if (DLEntityNameForeign != '')
        sWhere = 'DL_EntityNameForeign = \'' + DLEntityNameForeign + '\' AND DL_EntityId=' + DLEntityId;
    var xDocs = getEntityData('DL_CaseDocuments', sWhere, '');
    var xNodes = xDocs.selectNodes('//DL_CaseDocuments');
    sDocs = '';
    for (var i = 0; i < xNodes.length; i++) {
        var sUrl = getsafe(xNodes[i], 'DL_URLDocument');
        var j = sUrl.lastIndexOf('.');
        var ext = sUrl.substring(j);
        if (ext.toLowerCase() != '.pdf' && ext.toLowerCase() != '.msg') { // 12.3.2009
            bConvert = true;
        }
    }
    if (bConvert) {
        if (bAsk)
            bConvert = confirm(LEX_DocumentBasket2PDF); // 19.4.2013 - localization check
        if (bConvert) {
            var sRes = '';
            for (var i = 0; i < xNodes.length; i++) {
                var sUrl = getsafe(xNodes[i], 'DL_URLDocument');
                var j = sUrl.lastIndexOf('.');
                var ext = sUrl.substring(j);
                if (ext.toLowerCase() != '.pdf' && ext.toLowerCase() != '.msg') { // 12.3.2009
                    if (ConvertFile2PDF(sUrl, 'pdf')) {
                        j = sUrl.lastIndexOf('/');
                        var sNewUrl = sUrl.substring(0, j) + '/pdf/';
                        sUrl = sUrl.substring(j + 1);
                        j = sUrl.lastIndexOf('.');
                        sNewUrl = sNewUrl + sUrl.substring(0, j) + '.pdf';
                        //alert(sNewUrl);
                        j = sNewUrl.substring(8).indexOf('/');
                        var sUrl2 = sNewUrl.substring(8 + j);
                        var xDoc = getEntityData2('Top 1 *', 'DL_Documents', "DL_URLDocument = '" + sUrl2 + "'", 'DL_Id desc');
                        var sDocumentID = getsafe(xDoc, '//DL_DocumentId');
                        var xMeta = EXgetDocumentMetaData(sNewUrl);
                        var sVersion = getsafe(xMeta, '//_UIVersionString');
                        //alert('DEBUG\n' + sUrl2 + ' ' + xDoc.xml + ' ' + sDocumentID + ' ' + sVersion + '\n' + xMeta.xml);
                        //alert(xMeta.xml);
                        SetEntityItemValue('DL_CaseDocuments', getsafe(xNodes[i], 'DL_Id'), getsafe(xNodes[i], 'DL_Modified'), 'DL_URLDocument', sNewUrl, 'DL_DocumentID', sDocumentID, 'DL_DocumentVersion', sVersion);
                        sUrl = sNewUrl;
                    }
                    else
                        sRes += 'Kunne ikke konvertere ' + sUrl + ' til pdf\n';
                }
            }
            if (sRes != '')
                alert(sRes);
            if (typeof (EXDocBasketRefresh) == 'function' && DLEntityNameForeign == '') // 17.11.2009
                EXDocBasketRefresh();
        }
    }
}
// iType: 0=docs,1=Emails,2=Attachments
function EXAdd2DocBasket(EXDocumentID, Title, sURL, EXVersion, szCheckedOutUser, iType) {
    // 30.03.2011 - BH - IT-sag 2034
    // 7.6.2011 - MMQ - REMOVED AGAIN - strange
    //Title = unescape(unescape(Title));
    //sURL = unescape(unescape(sURL));
	Title = decodeURIComponent(Title);
	sURL = decodeURIComponent(sURL);
    //alert('EXAdd2DocBasket ' + Title);
    //271111, JRD: Removed...
    //if (EXDocumentID == '') {
    //  alert(LEX_DocBasketEXDocumentIDEmpty);
    //  return;
    //}
    if (szCheckedOutUser == null)
        szCheckedOutUser = '';
    if (szCheckedOutUser != '') {
        if (szCheckedOutUser.indexOf(';#') > 0)
            szCheckedOutUser = szCheckedOutUser.substr(szCheckedOutUser.indexOf(';#') + 2);
        if (!confirm(LEX_DocumentCheckedOutAddAnyway.format(szCheckedOutUser)))
            return;
    }
    // 3.1.2010
    var e = window.event;
    var ctrl;
    if (e)
    //ctrl = e.ctrlKey;
        ctrl = e.shiftKey; // 12.2.2010
    else
        ctrl = false;
    //alert('DEBUG\nEXAdd2DocBasket(' + EXDocumentID + ',' + Title + ',' + sURL + ',' + EXVersion + ',' + szCheckedOutUser + ',' + iType + ') started. ctrl=' + ctrl);

    //_EXAddDocumentToTransmittal(false, 'DL_sAMAccountName', 0, EXDocumentID, Title, sURL, true, EXVersion, 'Document \'' + Title + '\' added to basket.');
    //_EXAddDocumentToTransmittal(false, 'DL_sAMAccountName', 0, EXDocumentID, Title, sURL, true, EXVersion, LEX_DocBasketDocumentAdded.format(Title),iType);
    _EXAddDocumentToTransmittal(false, 'DL_sAMAccountName', 0, EXDocumentID, Title, sURL, true, EXVersion, '', iType, ctrl); // 26.2.2008
    EXDocBasketRefresh(); // 26.2.2008
}
var EXaddMetaData2CaseDocuments = false;
function _EXAddDocumentToTransmittal(bCreate, DL_Entity, DL_Transmittal, EXDocumentID, Title, sURL, portal, EXVersion, sMsg, iType, ctrl) { // 3.1.2010 - ctrl added
    if (typeof (ctrl) == 'undefined')
        ctrl = false;
    if (bCreate) {
        DL_Transmittal = EXnewTransmittal(portal);
        if (DL_Transmittal == '')
            return;
        SetRecentValue('DL_Transmittal', DL_Transmittal);
    }

    // already in case documents
    var xDocuments;
    //271111, JRD: Removed check on DocumentID
    //  var sWhere = "DL_EntityNameForeign='" + DL_Entity + "' AND DL_EntityId=" + DL_Transmittal + " AND DL_DocumentId='" + EXDocumentID + "' AND DL_ModifiedBy = %WUSER%";
    var sWhere = "DL_EntityNameForeign='" + DL_Entity + "' AND DL_EntityId=" + DL_Transmittal + " AND DL_URLDocument='" + sURL + "' AND DL_ModifiedBy = %WUSER%";
    if (iType > 0) {
        sWhere = sWhere + " AND DL_URLDocument = '" + sURL.replace(/'/g, "''") + "'";
        //alert('_EXAddDocumentToTransmittal ' + iType + ' ' + sWhere);
    }
    xDocuments = getEntityData('DL_CaseDocuments', sWhere, "");
    //if (xDocuments.text != "") {
    if (getsafe(xDocuments, '//DL_Id') != '') { // 19.5.2010 - cross browser support
        if (DL_Entity == 'DL_sAMAccountName')
            alert(LEX_DocBasketAlreadyExists.format(Title));
        else
            alert(LEX_TransmittalAddCaseDocuments.format(DL_Entity, DL_Transmittal));
        return;
    }

    // Add document to DL_CaseDocuments
    xOps = '<DL_CaseDocuments><DELETE/><UPDATE/><INSERT>';
    xOps = xOps + '<Row><DL_EntityNameForeign>' + DL_Entity + '</DL_EntityNameForeign><DL_EntityId>' + DL_Transmittal + '</DL_EntityId><DL_URLDocument>' + sURL + '</DL_URLDocument><DL_Title>' + Title + '</DL_Title><DL_DocumentId>' + EXDocumentID + '</DL_DocumentId>';
    if (EXVersion != '')
        xOps = xOps + '<DL_DocumentVersion>' + EXVersion + '</DL_DocumentVersion>';
    if (ctrl) // 3.1.2010
        xOps += '<DL_UseSpecificVersion>1</DL_UseSpecificVersion>';
    // HINT - EX_DocProperties MUST be the last element in the xml dataset - if not it is ignored!!
    if (EXaddMetaData2CaseDocuments) {
        var oXML = EXgetDocumentMetaData(sURL);
        if (oXML != null) {
            xOps = xOps + '<EX_DocProperties>' + MakeXMLSafe(oXML.xml) + '</EX_DocProperties>';
        }
    }
    xOps = xOps + '</Row></INSERT></DL_CaseDocuments>';
    //alert(xOps);
    setEntity('DL_CaseDocuments', xOps);
    if (sMsg != '' && sMsg != null)
        alert(sMsg);
}



// loadtransmittals
function loadtransmittals(DL_Entity, EXDocumentID, portal) {
    if (portal == 1) {
        loadcontent("/ex_sqlsvc/DynamicListForm.aspx?DL_Entity=DL_CaseTransmittalsDocs&list=true&view=DL_Id,DL_Title&orderby=DL_Id%20DESC&Action=171&where=DL_DocumentId='" + EXDocumentID + "'" + "&EXcheck=" + Math.random());
    }
    else {
        window.open(getAbsoluteURL("/ex_sqlsvc/DynamicListForm.aspx?DL_Entity=DL_CaseTransmittalsDocs&list=true&view=DL_Id,DL_Title&orderby=DL_Id%20DESC&Action=156&where=DL_DocumentId='" + EXDocumentID + "'" + "&EXcheck=" + Math.random()));
    }
}
// setEntity
function setEntity(strEntity, oEntity) {
    try {
        var xmldoc;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<setEntity xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<strEntity>' + strEntity + '</strEntity>';
        xmldoc = xmldoc + '<oEntity>' + oEntity + '</oEntity>';
        xmldoc = xmldoc + '</setEntity>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';
        //alert('setEntity ' + xmldoc);

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=setEntity'), false);  // 31.5.2008
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/setEntity');
        FeedbackHTTP.send(xmldoc);
        //alert(FeedbackHTTP.responseText);
        //alert('setEntity completed');
        if (FeedbackHTTP.status != 200) {
            alert('setEntity ' + FeedbackHTTP.status + ' ' + FeedbackHTTP.ResponseText);
        }
        return true;
    }
    catch (e) {
        alert('setEntity(' + strEntity + ',' + oEntity + ') failed ' + e.message);
        return false;
    }
}


// setEntityDetail
function setEntityDetail(strEntity, oEntity) {
    try {
        var xmldoc;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<setEntityDetail xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<strEntity>' + strEntity + '</strEntity>';
        xmldoc = xmldoc + '<oEntity>' + oEntity + '</oEntity>';
        xmldoc = xmldoc + '</setEntityDetail>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';
        //alert('setEntityDetail ' + xmldoc);

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=setEntityDetail'), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://doclife.net/svcDLEntity/setEntityDetail');
        FeedbackHTTP.send(xmldoc);
        //alert(FeedbackHTTP.ResponseText);
        var xmlParamDoc;
        if (FeedbackHTTP.status != 200)
            alert('setEntityDetail(' + strEntity + ',' + oEntity + ') >>> ' + FeedbackHTTP.status + ' ' + FeedbackHTTP.responseText);
        // 10.5.2012 - re-active code as it fails at AddPro
        xmlParamDoc = EXDOMDocument();
        xmlParamDoc.loadXML(FeedbackHTTP.responseText);
        FeedbackHTTP = null;
        var DL_Id;
        DL_Id = getsafe(xmlParamDoc, "//" + strEntity + "/DL_Id");
        xmlParamDoc = null;
        //    DL_Id = getsafe(FeedbackHTTP.responseXML, "//" + strEntity + "/DL_Id"); // 12.7.2011
        //alert('DL_Id=' + DL_Id);
        return DL_Id;
    }
    catch (e) {
        alert('setEntityDetail(' + strEntity + ',' + oEntity + ') failed ' + e.message);
        return null;
    }
}


// getsafe(xNode, XPath)
function getsafe(xNode, XPath) {
    if (xNode == null)
        return '';
    var xN;
    xN = xNode.selectSingleNode(XPath);
    if (xN == null) {
        return '';
    }
    if (xN.firstChild == null)
        return '';
    if (xN.firstChild.nodeValue != null) // 25.7.2011
        return xN.firstChild.nodeValue; // 16.5.2010 - Safari and general support
    return xN.firstChild.text;
    return xN.text;
}


/********************************************************************
*                                                                  *
*  EXWEB functions - SPS 2003                                      *
*                                                                  *
********************************************************************/
function EXSetProperty(sField, sValue) {
    try {
        var oEle = EXgetField(sField);
        if (oEle != null) {
            oEle.value = sValue;
        }
    }
    catch (e) { alert('EXSetProperty ' + e.message); }
}
function EXProtectEXDocumentID(i) {
    try {
        //var EXDocumentID = document.getElementById('urn:schemas-microsoft-com:office:office#EXDocumentID');
        var EXDocumentID = EXgetField('EXDocumentID');
        if (EXDocumentID == null) {
            alert('EXDocumentID not found - critical error');
        }
        EXDocumentID.readOnly = true;

        var oEleMultiple = document.getElementById('diidIOUploadMultipleLink');
        if (oEleMultiple) {  // Hide row
            oEleMultiple.style.display = 'none';
        }
    } catch (e) { alert('EXProtectEXDocumentID failed'); }
}
function EXhandlechange(e) {
    var oEle;
    oEle = document.getElementById('onetidIOFile');
    var s, i;
    s = oEle.value;
    i = s.lastIndexOf('.');
    s = s.substring(i + 1);
    s = s.toLowerCase();
    if (s != 'pdf') {
        // <INPUT type=file ...> ***CANNOT*** be modified
        alert('Only PDF documents can be uploaded ' + s);
        //oEle.disabled = true;
        //alert(oEle.value);
    }
    else { // 20/9-2006 - MMQ - parse properties based on filename
        if (oEXDocLibFunction.bAddExtraUploadButton) {
            BWSCParseFileName(oEle.value);
        }
    }
    //else
    //  oEle.disabled = false;
    //alert('handlechange - ' + oEle.value);
}

function EXhandleIMG(e) {
    var sMessage;
    sMessage = 'start';
    try {
        var oImg = window.event.srcElement;
        var sID = oImg.id.substring(3);
        sMessage = 'ID ' + sID;
        //alert(sID + ' clicked');
        var oXML;
        //oXML = EXaddDropDown(1); // Retrieve XML structure
        var sDID = sID.replace('_x0020_', ' ');
        sMessage = 'EXgetFormMetaData';
        oXML = EXgetFormMetaData();
        sMessage = 'EXShowForm ' + sID;
        EXShowForm(sID, sDID, oXML);
        return;
        //alert('now open');
        var oField;
        //oField = document.getElementById('urn:schemas-microsoft-com:office:office#' + sID);
        oField = EXgetField(sID);
        oField.id = sID;
        //alert(oField.outerHTML);
        var sPath;
        sPath = getAbsoluteURL('/EX_SQLSVC/PickDictionary.aspx?DL_PropName=') + sID + '&returnfield=_ctl1.' + sID + '&SPS=true'; //&XML=' + oXML;
        //sPath = 'http://www.dr.dk';
        //alert('sPath=' + sPath);
        var oW;
        sMessage = 'oW';
        oW = window.open(sPath); //,'Pick a value'); //,'width=500,height=150');
        //alert('ok');
        sMessage = 'focus';
        oW.focus();
    } catch (e) { alert('EXhandleIMG failed ' + e.message + ' ' + sMessage); }
}

function EXgetField(field) {
    try {
        return (document.getElementById('urn:schemas-microsoft-com:office:office#' + field));
    } catch (e) { alert('EXgetField(' + field + ') ' + e.message); }
}
function EXgetFieldValue(field) {
    var oField, value;
    oField = EXgetField(field);
    if (oField == null)
        value = '';
    else {
        value = oField.value;
        oField = null;
    }
    return value
}

function EXgetDocumentMetaData(url) {
    try {
        var xmldoc;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'
        xmldoc = xmldoc + '<getDocumentMetaData xmlns="http://exformatics.net/SharePointServices">';
        xmldoc = xmldoc + '<URL>' + url + '</URL>'
        xmldoc = xmldoc + '</getDocumentMetaData></soap:Body></soap:Envelope>';

        SOAPAction = 'http://exformatics.net/SharePointServices/getDocumentMetaData';
        FeedbackHTTP = EXXMLHTTP();
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SPSSVC/svcSharePoint.asmx?op=getDocumentMetaData'), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", SOAPAction);
        FeedbackHTTP.send(xmldoc);

        // alert('headers ' + FeedbackHTTP.getAllResponseHeaders() );
        // alert('Status ' + FeedbackHTTP.responseXML);
        var oXML;
        //oXML = FeedbackHTTP.responseXML.xml;
        oXML = FeedbackHTTP.responseXML;
        // alert(oXML);
        // alert('EXgetDocumentMetaData ' + FeedbackHTTP.ResponseText + ' ' + oXML.xml);
        FeedbackHTTP = null;
        return oXML;
    }
    catch (e) { alert('EXgetDocumentMetaData ' + e.message); }
}

function ConvertFile2PDF(Url, subfolder) { // 12.3.2009
    try {
        var xmldoc;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<ConvertFile2PDF xmlns="http://exformatics.net/SharePointServices">';
        xmldoc = xmldoc + '<Url>' + Url + '</Url>';
        xmldoc = xmldoc + '<subfolder>' + subfolder + '</subfolder>';
        xmldoc = xmldoc + '</ConvertFile2PDF>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", '/EX_SPSSVC/svcSharePoint.asmx?op=ConvertFile2PDF', false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://exformatics.net/SharePointServices/ConvertFile2PDF');
        FeedbackHTTP.send(xmldoc);
        return (getsafe(FeedbackHTTP.responseXML, '//ConvertFile2PDFResult') == 'true');
    } catch (e) { alert('ConvertFile2PDF(' + Url + ',' + subfolder + ') failed ' + e.message); }
}
function getEXDocumentIDFromURL(url) {
    var oXML;
    url = getAbsoluteURL(url);
    //alert('url=' + url);
    oXML = EXgetDocumentMetaData(url);
    // alert('getEXDocumentIDFromURL( ' + url + ')=' + oXML.xml);
    if (oXML == null)
        return null;
    else
        return oXML.selectSingleNode("//EXDocumentID").text;
}
function EXValidateProperties(URL, xProperties) {
    try {
        var xmldoc;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<ValidateProperties xmlns="http://exformatics.net/SharePointServices">';
        xmldoc = xmldoc + '<URL>' + URL + '</URL>';
        xmldoc = xmldoc + '<xProperties>' + xProperties + '</xProperties>';
        xmldoc = xmldoc + '</ValidateProperties></soap:Body></soap:Envelope>';
        //alert(xmldoc);

        var SOAPAction;
        SOAPAction = 'http://exformatics.net/SharePointServices/ValidateProperties';
        FeedbackHTTP = EXXMLHTTP();
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SPSSVC/svcSharePoint.asmx?op=ValidateProperties'), false);
        //    FeedbackHTTP.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", SOAPAction);
        FeedbackHTTP.send(xmldoc);

        //alert('EXValidateProperties1 = ' + FeedbackHTTP.responseText);
        //var xmlResponse = new ActiveXObject("MSXML2.DOMDocument.4.0");
        //xmlResponse.async = false;
        //xmlResponse.loadXML(FeedbackHTTP.responseText);
        //FeedbackHTTP = null;
        //alert('EXValidateProperties2 = ' + xmlResponse.xml);

        var oXML;
        oXML = FeedbackHTTP.responseXML.selectSingleNode("//ValidatePropertiesResult");
        //oXML = xmlResponse.selectSingleNode('.//ValidatePropertiesResult');
        //oXML = xmlResponse.childNodes[1].childNodes[0].childNodes[0].childNodes[0];
        //alert('EXValidateProperties3 = ' + oXML.xml);
        return oXML;
    } catch (e) { alert('EXValidateProperties(' + URL + ',' + xProperties + ') >>>' + e.message); };
}


function getEXDocumentID(i) {
    try {
        var xmldoc;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'
        xmldoc = xmldoc + '<getNextID xmlns="http://doclife.net/svcDLEntity">';
        xmldoc = xmldoc + '<strURN>DL_DocumentId</strURN>'
        xmldoc = xmldoc + '</getNextID></soap:Body></soap:Envelope>';

        SOAPAction = 'http://doclife.net/svcDLEntity/getNextID';
        FeedbackHTTP = EXXMLHTTP();
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=getNextID'), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", SOAPAction);
        FeedbackHTTP.send(xmldoc);

        var EXDocumentID;
        EXDocumentID = FeedbackHTTP.responseXML.selectSingleNode("//getNextIDResult").text;
        FeedbackHTTP = null;
        var i;
        i = EXDocumentID.length;
        if (i < 9) {
            EXDocumentID = '000000000'.substr(0, 9 - i) + EXDocumentID;
        }
        //alert(EXDocumentID);
        return EXDocumentID;
    } catch (e) { alert('getEXDocumentID ' + e.message); };
}
function EXSetID(FileName, bFileExists) {
    var sMessage = '';
    try {
        var EXDocumentID = document.getElementById('urn:schemas-microsoft-com:office:office#EXDocumentID');
        if (EXDocumentID == null) {
            alert('EXDocumentID not found - retry');
            return false;
        }
        EXDocumentID.readOnly = false;
        if (EXDocumentID.value == '') {
            if (bFileExists) { // read DocumentID from existing file
                // alert('file already exists FileName=' + FileName);
                var sId;
                sMessage = 'getId ' + FileName;
                if (FileName == '') {
                    var sFile = EXgetTargetFile();
                    sMessage = 'getEXDocumentIDFromURL(' + sFile + ')';
                    sId = getEXDocumentIDFromURL(sFile);
                    sMessage = '2';
                }
                else
                    sId = getEXDocumentIDFromURL(FileName);
                // alert('file already exists with id=' + sId);
                EXDocumentID.value = sId;
                return true;
            }
            else { // Generate new id
                var sId;
                sMessage = 'getEXDocumentID';
                sId = getEXDocumentID(0);
                EXDocumentID.value = sId;
                return true;
            }
        }
        else {
            return true;
        }
    } catch (e) { alert('EXSetID(' + bFileExists + ') - ' + sMessage + ' - failed ' + e.message); return false; }
}
function EXValidateForm() {
    try {
        // alert('EXValidateForm started');
        var oXML, oResult;
        if (exfrm == null) {
            return true;
        }
        oXML = EXgetFormMetaData();
        oResult = EXValidateProperties('url', oXML);
        if (oResult == null) {
            return true;
        }

        var ifld;
        var fld;
        var stName;
        //alert('EXValidateForm - now traverse fields');
        for (ifld = 0; ifld < exfrm.ifldMax; ifld++) {
            fld = exfrm.rgfld[ifld];
            stName = fld.stName;
            //alert(ifld + ' ' + stName);
            if (oResult.selectSingleNode('//' + stName) != null) {
                //alert('field found ' + stName);
                fld.FieldFocus();
                alert(stName + ' ' + oResult.selectSingleNode('//' + stName).text);
                return false;
            }
        }
        return true;
    } catch (e) { alert('EXValidateForm - ' + e.messsage); return false; }
}
function EXgetDocLibAndFolder() {
    try {
        //var oEleDestination = document.getElementById('destination'); // INPUT
        //alert('DocLibAndFolder=' + oEleDestination.value);
        //return oEleDestination.value;

        var s, root, i;
        s = '' + window.location;
        root = unescapeProperly(queryString('RootFolder'));
        i = s.indexOf('/Forms/Upload.aspx');
        s = s.substring(0, i);
        //alert('window.location=' + s + ' root=' + root);
        if (root != '') {
            i = s.substring(8).indexOf('/') + 8;
            s = s.substring(0, i) + root;
        }
        //  alert('EXgetDocLibAndFolder=' + s);
        return s;
    } catch (e) { alert('EXgetDocLibAndFolder - ' + e.message); }
}

function EXURLExists(sURL) {
    try {
        if (sURL == '')
            return false;

        var FeedbackHTTP;
        FeedbackHTTP = EXXMLHTTP();
        FeedbackHTTP.open("HEAD", sURL, false);
        FeedbackHTTP.send();
        var iStatus;
        iStatus = FeedbackHTTP.status;
        //alert(FeedbackHTTP.responseText);
        //alert('EXURLExists(' + sURL + ')=' + iStatus);
        FeedbackHTTP = null;
        return (iStatus == 200);
    } catch (e) { alert('EXURLExists(' + sURL + ') failed ' + e.message); }
}

function EXgetTargetFile() {
    var oEleDestination = document.getElementById('destination'); // INPUT
    //alert(oEleDestination.outerHTML);
    //alert(oEleDestination.value);
    var oEleFilename = document.getElementById('onetidIOFile') // INPUT
    //alert(oEleFilename.outerHTML);
    //alert(oEleFilename.value);
    var Path, filename, i;
    Path = oEleDestination.value;
    filename = oEleFilename.value;

    // Generic code start
    // if (window['EXgetCustomFileName']) {
    if (oEXDocLibFunction.EXgetCustomFileName != null) {
        filename = oEXDocLibFunction.EXgetCustomFileName(filename, '');
        return filename;
    }
    // Generic code end

    i = filename.lastIndexOf('\\');
    filename = filename.substring(i + 1);
    // alert('EXgetTargetFile Target=' + Path + '/' + filename);
    if (filename == '')
        return '';
    else
        return Path + '/' + filename;
}
function EXFileExists() {
    return EXURLExists(EXgetTargetFile());
}
function EXgetFormMetaData() {
    var oXML;
    oXML = '<data xmlns=\'\'>';
    var ifld;
    var fld;
    var stName, stValue;
    var oField;
    if (exfrm == null) {
        alert('EXgetFormMetaData - exfrm is null - remember to set this variable in DocLib');
        return null;
    }
    for (ifld = 0; ifld < exfrm.ifldMax; ifld++) {
        fld = exfrm.rgfld[ifld];
        stName = fld.stName;
        oField = document.getElementById('urn:schemas-microsoft-com:office:office#' + stName);
        //oField = getField(stName);
        if (oField == null)
            alert('oField is null ' + stName);
        else {
            stValue = MakeXMLSafe(oField.value);
            if (oField.tagName == 'SELECT') {
                stValue = 'ID:' + stValue;
                // alert('SELECT field found ' + stName + ' value is an ID value ' + stValue);
            }
            // Dictionary fields that has no value is not added in order to avoid to have to check them
            if (stValue != '') {
                oXML = oXML + '<' + stName + '>';
                oXML = oXML + stValue;
                oXML = oXML + '</' + stName + '>';
            }
        }
    }
    oXML = oXML + '</data>';
    return oXML;
}

function EXBuildXML(stName, stValue) {
    var oXML;
    oXML = '<' + stName + '>';
    oXML = oXML + MakeXMLSafe(stValue);
    oXML = oXML + '</' + stName + '>';
    return oXML;
}

function MakeXMLSafe(s) {
    s = '' + s; // 22.7.2009
    s = s.replace(/&/g, '&amp;');
    s = s.replace(/</g, '&lt;');
    s = s.replace(/>/g, '&gt;');
    //JRD: 26-03-2011 START

    s = s.replace(/\"/g, '&quot;');

    s = s.replace(/\'/g, '&apos;');

    // JRD: 26-03-2011 END
    return s;
}
function MakeJSSafe(s) {
    if (s.indexOf('\'') > 0) {
        //alert(s);
    }
    s = s.replace(/'/g, '');
    s = s.replace(/"/g, '');
    s = s.replace(/\n/g, ''); // 2-7-2007 - remember to remove spaces
    return s;
}
function EXgetExtensionCAB() {
    var oObject = document.createElement('DIV');
    oObject.id = 'EXExtensionDiv';
    document.body.appendChild(oObject);
    oObject = null;
    var s = '<OBJECT id="EXmycontrol1" name="EXmycontrol1" classid="clsid:20B65F67-C8F5-4674-916C-0E03772BB0EC" codebase="http://intranet/EX_Resources/ExformaticsWindowsExtension.CAB#5,4,0,0" class1d="/EX_Resources/EXUtilities.dll#Exformatics.Utilities" width="0px" height="0px"></OBJECT>\n';
    var oA = document.getElementById('EXExtensionDiv');
    if (oA == null)
        alert('EXgetExtensionCAB - critical error');
    oA.innerHTML = s;
    //alert('EXgetExtensionCAB - will install EXExtension - ' + oA.innerHTML);
    oA = null;
    var LEX_ExformaticsWindowsExtensionBeingInstalled = 'Exformatics Windows Extension is currently being installed - please wait a second for it to finish before you proceed';
    alert(LEX_ExformaticsWindowsExtensionBeingInstalled);
}
function EXgetOfficeExtensionCAB() {
    var oObject = document.createElement('DIV');
    oObject.id = 'EXExtensionDiv2';
    document.body.appendChild(oObject);
    oObject = null;
    var s = '<OBJECT id="EXmycontrol2" name="EXmycontrol2" classid="CLSID:CBFAE475-DBD8-45b7-9708-75D2B23DC8D6" codebase="http://intranet/EX_Resources/ExformaticsOfficeExtension.CAB#5,5,0,0" classi1d="EXOfficeExtension.Connect" width="0px" height="0px"></OBJECT>\n';
    var oA = document.getElementById('EXExtensionDiv2');
    if (oA == null)
        alert('EXgetOfficeExtensionCAB - critical error');
    oA.innerHTML = s;
    //alert('EXgetOfficeExtensionCAB - will install EXOfficeExtension - ' + oA.innerHTML);
    oA = null;
    var LEX_ExformaticsOfficeExtensionBeingInstalled = 'Exformatics Office Extension is currently being installed - please wait a second for it to finish before you proceed';
    alert(LEX_ExformaticsOfficeExtensionBeingInstalled + '\n' + s);
}
function getEXSystemTray() {
    try {
        //var oX = new ActiveXObject("clsid:20B65F67-C8F5-4674-916C-0E03773BB0FC");
        var oX = new ActiveXObject("Exformatics.EXSystemTray");
        //var oX = GetObject("", "Exformatics.EXSystemTray");
        return oX;
    } catch (e) {
        alert('Exformatics System Tray - Not found >>> ' + e.message);
    }
    return null;
}
function getEXUtilities() {
    var oX = null;

    try {
        oX = new ActiveXObject("Exformatics.Utilities");
        //alert('getEXUtilities Version=' + oX.Version);
    } catch (e) {
    }
    try {
        var oX1 = new ActiveXObject("ExformaticsOfficeExtension.AddinModule");
        oX = oX1.WindowsExtension;
        //alert('getEXUtilities Version=' + oX.Version);
    } catch (e) {
        var sVer = navigator.userAgent.toLowerCase();
        alert("Error: " + e.message + "\nVersion=" + sVer);
        //alert(e.message);
        if (sVer.indexOf('msie 7.') > 0) {
            alert('Please download and install Exformatics Windows Extension manually');
            return;
        }
        EXgetExtensionCAB();
        oX = null;
    }
    if (oX == null) {
        for (var i = 0; i < 100; i++) {
            try {
                oX = new ActiveXObject("Exformatics.Utilities");
                break;
            } catch (e) {
                //alert('Please download and install Exformatics Windows Extension manually');
                var j = 2121212 / 2121 * i;
            }
        }
    }
    if (oX == null) {
        alert('Please wait a second for Exformatics Windows Extension to be installed. If it fails retry the operation');
        try {
            oX = new ActiveXObject("Exformatics.Utilities");
        } catch (e) {
            //alert('Please download and install Exformatics Windows Extension manually');
        }
    }
    if (oX == null) {
        alert(LEX_ExformaticsWindowsExtensionNotInstalled);
        //var ew; ew=window.open('http://www.exformatics.com/support/EXExtension.html');
        return null;
    }
    // Optionally - upgrade version if not the newest
    if (1 == 0) { // oX.Version != '5.4.0.0') {
        var LEX_ExformaticsWindowsExtensionPleaseUpgrade = 'Not newest version of Extension - now try to upgrade';
        alert(LEX_ExformaticsWindowsExtensionPleaseUpgrade + '\n' + oX.Version);
        oX = null;
        EXgetExtensionCAB();
        try {
            oX = new ActiveXObject("Exformatics.Utilities");
        } catch (e) {
        }
    }

    if (oX == null) {
        try {
            var oX2 = new ActiveXObject("ExformaticsOfficeExtension.AddinModule");
            var oX = oX2.WindowsExtension;
        }
        catch (e) {
            alert('New model tried but failed');
        }

    }

    return oX;
}
function getEXOfficeExtension() {
    var oX = null;
    //alert('getEXOfficeExtension started');
    try {
        oX = new ActiveXObject("EXOfficeExtension.Connect");
        //alert('getEXUtilities Version=' + oX.Version);
    } catch (e) {
        alert('Now invoke EXgetOfficeExtensionCAB()');
        EXgetOfficeExtensionCAB();
        oX = null;
    }
    if (oX == null) {
        for (var i = 0; i < 100; i++) {
            try {
                oX = new ActiveXObject("EXOfficeExtension.Connect");
                break;
            } catch (e) {
                //alert('Please download and install Exformatics Windows Extension manually');
                var j = 2121212 / 2121 * i;
            }
        }
    }
    if (oX == null) {
        alert('Please wait a second for Exformatics Office Extension to be installed. If it fails retry the operation');
        try {
            oX = new ActiveXObject("EXOfficeExtension.Connect");
        } catch (e) {
            //alert('Please download and install Exformatics Office Extension manually');
        }
    }
    if (oX == null) {
        alert(LEX_ExformaticsOfficeExtensionNotInstalled);
        //var ew; ew=window.open('http://www.exformatics.com/support/EXExtension.html');
        return null;
    }
    // Optionally - upgrade version if not the newest
    if (oX.Version != '5.4.2883.41713') {
        var LEX_ExformaticsOfficeExtensionPleaseUpgrade = 'Not newest version of Office Extension - now try to upgrade';
        alert(LEX_ExformaticsOfficeExtensionPleaseUpgrade + '\n' + oX.Version);
        oX = null;
        EXgetOfficeExtensionCAB();
        try {
            oX = new ActiveXObject("EXOfficeExtension.Connect");
        } catch (e) {
        }
    }
    return oX;
}
function oldgetEXUtilities() {
    var oX = null;
    try {
        oX = new ActiveXObject("Exformatics.Utilities");
        // alert('getEXUtilities');
    }
    catch (e) {
        alert(LEX_ExformaticsWindowsExtensionNotInstalled);
        var ew; ew = window.open('http://www.exformatics.com/support/EXExtension.html');
    }
    return oX;
}
function EXUpload(filename, sDocLibPath, newfilename, properties) {
    try {
        var oX = getEXUtilities();
        if (!oX)
            return false;

        var s;
        s = oX.Upload(filename, sDocLibPath, newfilename, properties);
        oX = null;
        if (s != '') {
            alert(s);
            return false;
        }
        else
            return true;
    } catch (e) { alert('EXUpload failed - check extensionerr.txt in %temp% folder >>> ' + e.message); } // 15.2.2008
}
function EXReload() {
    if (parent)
        parent.window.location = parent.window.location;
    else
        window.location = window.location;
}
function EXGotoUrl(url, bparent) { // 25.8.2009 - 09-0205 - performance - memory leak
    //  alert('EXGotoUrl ' + url);
    if (bparent) {
        if (parent.window) {
            //parent.window.location = url;
            parent.window.location.replace(url);
        }
        else {
            //window.location = url;
            window.location.replace(url);
        }
    }
    else {
        //window.location = url;
        window.location.replace(url);
    }
}


function viewImage(url) {

    var theImage = document.getElementById("the-display-image");
    var jqImg = $(theImage);
    theImage.src = url;
    var dlg = $("#display-image");

    dlg.dialog({
        modal: true,
        title: "Image view (press Esc to close)",
        width: 800,
        height: 600,
        open: function (event, ui) {
            $(this).parents(".ui-dialog:first").find(".ui-widget-header").css('background', '#99b0c5');
            $(this).parents(".ui-dialog:first").find(".ui-widget-header").css('border-color', '#33618b');
        }
    });

    dlg.dialog("open");

    if (theImage.width > 600) {
        theImage.width = 600;
        theImage.onclick = function () { window.open(theImage.src); };
        jqImg.mouseover(function () { $(this).css('cursor', 'hand'); });
    }
}




function EXLoadActivityStream(DLEntity, DLId, bFollowing, DLType) { // 16.4.2012
    if (typeof (DLEntity) == 'undefined')
        DLEntity = '';
    if (typeof (DLId) == 'undefined')
        DLId = '';
    if (typeof (bFollowing) == 'undefined')
        bFollowing = false;
    if (typeof (DLType) == 'undefined')
        DLType = '';

    var oIF = document.getElementById('DL_Information');
    //alert(oIF.width + '\n' + oIF.clientWidth);
    //var sUrl = getAbsoluteURL('/EX_ActivityStream/Default.aspx?ViewPortWidth=' + (DLId != '' ? '374' : '405'));
    var sUrl = getAbsoluteURL('/EX_ActivityStream/Default.aspx?ViewPortWidth=' + oIF.clientWidth); // scrollbar width - 18px ?
    // 2.9.2012 - due to error in new stream
    //var sUrl = getAbsoluteURL('/EX_Resources/EXExformation.html?x=y');
    if (DLEntity != '')
        sUrl += '&DL_EntityNameForeign=' + DLEntity;
    if (DLId != '')
        sUrl += '&DL_EntityId=' + DLId;
    if (bFollowing == 'team')
        sUrl += '&Following=team';
    else if (bFollowing)
        sUrl += '&Following=true';
    if (DLType != '') {
        sUrl += '&DLType=' + DLType;
    }
    loadcontent2(sUrl, LEX_KnowledgeExchanges);
}
function EXLoadAdvancedSearch(Entity) { // 7.12.2014
    var sWhere = 'DL_EntityNameForeign = \'' + Entity + '\'';
    var oXML = getEntityData('DL_D617', sWhere, '');
    var url = getsafe(oXML, '//DL_URLSearch');
    if (url == '')
        alert('DL_SearchURL in DL_D617 is empoty for ' + Entity + '. Please contact Administrator' + oXML.xml);
    EXGotoUrl(url);

}
<<<<<<< HEAD
function EXLoadQuickSearch(Entity, bSearchOnLoad, ForeignKey, ForeignValue, PortalType, bInitMainEntity, sParams) { // 1.9.2008 - bInitMainEntity added - set to true if form should be opened in DL_Information web part // 17.12.2010 - sParams tilfÃ¸jet
=======
function EXLoadQuickSearch(Entity, bSearchOnLoad, ForeignKey, ForeignValue, PortalType, bInitMainEntity, sParams) { // 1.9.2008 - bInitMainEntity added - set to true if form should be opened in DL_Information web part // 17.12.2010 - sParams tilføjet
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
    if (typeof (sParams) == 'undefined')
        sParams = '';
    if (typeof (PortalType) == 'undefined' || PortalType == null)
        PortalType = '';
    if (typeof (bInitMainEntity) == 'undefined' || bInitMainEntity == null)
        bInitMainEntity = false;
    var sWhere = 'DL_EntityNameForeign = \'' + Entity + '\'';
    if (PortalType != '')
        sWhere = sWhere + ' AND DL_PortalType = ' + PortalType;
    var oXML = getEntityData('DL_D617', sWhere, '');
    var url = getsafe(oXML, '//DL_QuickSearch');
	 
    //alert(sWhere + '\n' + oXML.xml);
    if (url == '') {
        alert('EXLoadQuickSearch(' + Entity + ',' + bSearchOnLoad + ',' + ForeignKey + ',' + ForeignValue + ') object not defined in DL_D617 - please contact administrator');
        return;
    }
    if (bSearchOnLoad)
        url = url + '&SearchOnLoad=true';
    if (sParams != '')
        url = url + '&' + sParams;
    //alert('EXLoadQUickSearch url=' + url);
    if (ForeignKey != '' && ForeignKey != null) {
        if (url.indexOf('%' + ForeignKey) > 0)
            url = url.replace('%' + ForeignKey + '%', ForeignValue);
        else if (url.indexOf(ForeignKey) > 0) { // 26.9.2012
            var ii = url.indexOf(ForeignKey);
            url = url.substr(0, ii + ForeignKey.length) + ':' + ForeignValue + url.substr(ii + ForeignKey.length);
        }
    }
    //alert('EXLoadQUickSearch url=' + url);
    if (url != '') {
        //if (false) {//(
        if (!bInitMainEntity) { // 16.8.2008
            if (url.indexOf('Rows=') == -1) // 29.12.2008
                url += '&Rows=30';
            if (true) {
                // 6.11.2015 - use JQuery dialog
                var oDiv = document.getElementById('EXDialog');
                if (oDiv == null) {
                    var oDiv = document.createElement('DIV');
                    oDiv.id = 'EXDialog';
                    oDiv.innerHTML = '<IFRAME id="IFRAMEFACET" frameboder="0" width="100%" height="100%"></IFRAME>';
                    document.body.appendChild(oDiv);
                }
                loadcontent(url, 'IFRAMEFACET', '');
                $("#EXDialog").dialog({
                    resizable: true,
                    autoOpen: true,
                    modal: true,
                    width: 900,
                    height: 900,
                    title: LEX_QuickSearchTitle + ' ' + EXgetEntityTitle(Entity).toLowerCase(),
                    buttons: {
                        'Close': function () {
                            $(this).dialog('close');
                        }
                    }//end buttons
                }); //end dialog

            }
            else {
                var oQSIFrame = document.getElementById('IFRAMEQS');
                if (oQSIFrame == null) {
                    var oIFrame = document.createElement('IFRAME');
                    oIFrame.id = 'IFRAMEQS';
                    oIFrame.style.width = '200px';
                    oIFrame.style.height = '200px';
                    oIFrame.style.zIndex = '3';
                    oIFrame.style.position = 'absolute';
                    oIFrame.frameborder = 0;
                    document.body.appendChild(oIFrame);
                    oIFrame = null;

                    var oDiv = document.createElement('DIV');
                    oDiv.style.position = 'absolute';
                    oDiv.id = 'DIVHeaderQS';
                    oDiv.style.zIndex = '4';
                    document.body.appendChild(oDiv);

                    oDiv = document.createElement('DIV');
                    oDiv.style.position = 'absolute';
                    oDiv.id = 'DIVQS';
                    oDiv.style.zIndex = '2';
                    document.body.appendChild(oDiv);
                    oQSIFrame = document.getElementById('IFRAMEQS');
                }
                var oQSDiv = document.getElementById('DIVQS');
                var oQSHeaderDiv = document.getElementById('DIVHeaderQS');
                var h, w;
                w = document.body.clientWidth;
                h = document.body.clientHeight;

                oQSHeaderDiv.style.backgroundColor = '#dddddd'; //06.01.2009 Jw Changed color
                //oQSHeaderDiv.style.filter = 'alpha(opacity=7)';
                oQSHeaderDiv.style.display = '';

                oQSDiv.style.left = 0;
                oQSDiv.style.top = 0;
                oQSDiv.style.width = w;
                oQSDiv.style.height = h;
                oQSDiv.style.backgroundColor = 'blue';
                //oQSDiv.style.opacity = 0.8;
                oQSDiv.style.filter = 'alpha(opacity=9)';
                oQSDiv.style.display = '';

                var oIF = document.getElementById('DL_Information');
                if (oIF != null) {
                    w = w - getElementLeft1(oIF);
                }

                h = h - 120;
                if (oIF == null) // 29.12.2008 - only subtract if we could not find element
                    w = w - 100;
                oQSHeaderDiv.style.height = '20px';
                oQSHeaderDiv.style.width = w;
                if (oIF != null) {
                    oQSHeaderDiv.style.top = getElementTop1(oIF) - 20;
                    oQSHeaderDiv.style.left = getElementLeft1(oIF);
                }
                else {
                    oQSHeaderDiv.style.top = 60;
                    oQSHeaderDiv.style.left = 50;
                }
                oQSHeaderDiv.innerHTML = '<table><tr align="right"><td width="' + (w - 24) + 'px"></td><td align="right" title="Luk..."><a href="javascript:EXQSDIVClose()"><img src="/EX_Resources/gif/16x16/Checkbox Crossed.gif" border="0"></a></td></tr></table>';

                if (oIF != null) {
                    oQSIFrame.style.left = getElementLeft1(oIF);
                    oQSIFrame.style.top = getElementTop1(oIF);
                }
                else {
                    oQSIFrame.style.left = 50;
                    oQSIFrame.style.top = 80;
                }
                oQSIFrame.style.width = w;
                oQSIFrame.style.height = h;
                oQSIFrame.style.display = '';
                oQSIFrame.src = url;
            }
} // 6.11.2015
         else
            loadcontent2(url, LEX_QuickSearchTitle + ' ' + EXgetEntityTitle(Entity).toLowerCase());  // 18.5.2012
    }
}
function EXQSDIVClose() {
    var oEle = document.getElementById('IFRAMEQS');
    if (oEle != null)
        oEle.style.display = 'none';
    oEle = document.getElementById('DIVQS');
    if (oEle != null)
        oEle.style.display = 'none';
    oEle = document.getElementById('DIVHeaderQS');
    if (oEle != null)
        oEle.style.display = 'none';
}
function EXGotoObjectFromURL(url) {
    //alert('EXGotoObjectFromURL ' + url);
    EXTryGotoURL(url);
}
function EXGotoOrDisplayObject(Entity, Id) {
    if (Entity == 'DL_CaseDocuments') {
        var oXML = getEntityData('DL_CaseDocuments', 'DL_Id = ' + Id, '');
        var sUrl = getsafe(oXML, '//DL_URLDocument');
        loadcontent(sUrl);
    }
    else
        alert('EXGotoOrDisplayObject(' + Entity + ',' + Id + ') Unknown entity');
}
function EXGotoObjectExplorer(Entity, Id, DLEntity) {
    if (DLEntity != '')
        Entity = DLEntity;
    if (Entity == '' || Id == '') {
        alert('EXGotoObjectExplorer(' + Entity + ',' + Id + ') please specify data');
        return;
    }
    var oXML = getEntityData2('Top 1 *', 'DL_D617', 'DL_EntityNameForeign = \'' + Entity + '\'', '');
    var prop = getsafe(oXML, '//DL_Href');
    SetRecentValue(prop, Id);
    var oEntity = getEntityData2('*', Entity, 'DL_Id = ' + Id, '');
    var DLFolderParams = getsafe(oEntity, '//DL_FolderParams');
    EXGotoUrl(getAbsoluteURL('/EX_Resources/EXSharePointExplorer.html?DLEntity=' + Entity + '&' + prop + '=' + Id + '&DL_FolderParams=' + DLFolderParams), true);
}
function EXGotoCase(DLCaseNo, DLEntityNameForeign) { // 25.2.2008 - 2.6.2012 - updated with code from LO
    if (typeof (DLEntityNameForeign) == 'undefined')
        DLEntityNameForeign = '';
    //alert('EXGotoCase(' + DLCaseNo + ',' + DLEntityNameForeign + ')');
    var oXML;
    if (DLCaseNo.indexOf('-') == -12) { // 29.9.2008 // 31.12.2008 - remove this logic at LO
        var s = EXGetTodaysDate();
        if (DLCaseNo.length < 4)
            DLCaseNo = '0' + DLCaseNo;
        if (DLCaseNo.length < 4)
            DLCaseNo = '0' + DLCaseNo;
        if (DLCaseNo.length < 4)
            DLCaseNo = '0' + DLCaseNo;
        DLCaseNo = s.substr(2, 2) + '-' + DLCaseNo;
    }
    if (DLCaseNo.length >= 7) {
        if (DLEntityNameForeign == '')
            oXML = getEntityData('DL_CMAllView', 'DL_CaseNo = \'' + DLCaseNo + '\'', '');
        else
            oXML = getEntityData('DL_CMAllView', 'DL_CaseNo = \'' + DLCaseNo + '\' AND DL_EntityNameForeign=\'' + DLEntityNameForeign + '\'', '');
    }
    else
        if (DLEntityNameForeign == '')
            oXML = getEntityData('DL_CMAllView', 'DL_CaseNo LIKE \'' + DLCaseNo + '%\'', '');
        else
            oXML = getEntityData('DL_CMAllView', 'DL_CaseNo LIKE \'' + DLCaseNo + '%\' AND DL_EntityNameForeign=\'' + DLEntityNameForeign + '\'', '');
    var sEntity = getsafe(oXML, '//DL_EntityNameForeign');
    var sId = getsafe(oXML, '//DL_EntityId');
    //alert('EXGotoCase(' + DLCaseNo + ') Entity=' + sEntity + ' Id=' + sId);
    if (sEntity != '' && sId != '')
        EXGotoObject(sEntity, sId);
    else { // 9.9.2008
        alert(LEXCannotFindCase.format(DLCaseNo));
    }
}

var bGlobalPortalPreferences = false; // 8.5.2009 - use portal preferences in function for each user - or simply ignore (FKIL, CorpNordic uses this - others don't)
function EXGotoObject(Entity, Id, bSearch, where, PortalType, bNewWindow, sTask) {
    //alert('DEBUG\nEXGotoObject ' + Entity + ' ' + Id);
    try {
        if (window.event) // 23.10.2008
        //if (window.event.ctrlKey && !bNewWindow)
            if (window.event.shiftKey && !bNewWindow) // 12.2.2010
                bNewWindow = true;
	if (!bNewWindow){
		CreateOverlay();
	}
        if (typeof (PortalType) == 'undefined' || PortalType == null)
            PortalType = ''; // 14.4.2008
        //var UserPreference = GetEntityItemWhere('DL_sAMAccountName','DL_sAMAccountName = %DL_sAMAccountName%','DL_PortalPreference');
        var UserPreference = '';
        if (bGlobalPortalPreferences) {
            var oUser = getEntityData('DL_sAMAccountName', 'DL_sAMAccountName = %DL_sAMAccountName%', '');
            UserPreference = getsafe(oUser, '//DL_PortalPreference');
            oUser = null;
        }
        if (Entity == 'DL_SecurityGroupMember') {
            EXGotoUrl('/Pages/securityGroup.aspx?GroupId=' + Id + '&GroupName=' + bSearch, true);
            return;
        }
        if (Entity == 'DL_Tasks') { // 12.4.2011
            var oT = getEntityData('DL_Tasks', 'DL_Id = ' + Id, '');
            sTask = Id;
            Entity = getsafe(oT, '//DL_EntityNameForeign');
            Id = getsafe(oT, '//DL_EntityId');
            if (Entity == '') {
                parent.loadentity('DL_Tasks', sTask);
                return;
            }
        }
        var oObject;
        if (typeof (where) == 'undefined' || where == null)
            where = '';
        if (Id == 0 && where == '') {
            Id = GetRecentValue(prop); // 12.4.2011 - what is prop - strange!
        }
        if (Id == null || Id == '') {
            oObject = getEntityData(Entity, where, '');
            Id = getsafe(oObject, '//DL_Id');
        }
        else
            oObject = getEntityData(Entity, 'DL_Id = ' + Id, '');
        Id = getsafe(oObject, '//DL_Id');
        //alert(Id);
        if (Id == '') { // 1.10.2008 - no access
            //var LEX_CannotGotoObjectProbablyNoAccess = 'Kan ikke g\345 til objektet - du har formodentlig ikke adgang';
            if (sTask != '') { // 22.1.2010 - IT Case 961
                var oIF = document.getElementById('DL_Information');
                var url = "/EX_SQLSVC/DynamicForm.aspx?update=true&DL_ENTITY=DL_Tasks&where=DL_Id=" + sTask + "&EXcheck=" + Math.random();
                if (oIF == null) {
                    window.open(getAbsoluteURL(url));
                }
                else
                    loadentity('DL_Tasks', sTask, '', '', LEX_CannotGotoObjectProbablyNoAccess);
            }
            alert(LEX_CannotGotoObjectProbablyNoAccess);
            oObject = null;
            return;
        }
        /*		var prop;
        var url;
        if (Entity == 'DL_Activities' && !bSearch) { // 8.5.2009 - hard coded URL for some very highly used objects
        prop = 'DL_Activities';
        url = 'http://intranet/Activities/Pages/default.aspx?DL_Activities=%DL_Id%&DL_FolderParams=%DL_FolderParams%&DL_CaseNo=%DL_CaseNo%';
        }
        else { */
        var D617Where = 'DL_EntityNameForeign=\'' + Entity + '\'';
        if (UserPreference != '') {
            D617Where = D617Where + ' AND isnull(DL_PortalPreference,0) = ' + UserPreference;
        }
        if (PortalType == '' || PortalType == null) {
            //PortalType = GetEntityItemValue(Entity,Id,'DL_PortalType');
            PortalType = getsafe(oObject, '//DL_PortalType');
        }
        if (PortalType != '') {
            D617Where = D617Where + ' AND isnull(DL_PortalType,0) = ' + PortalType;
        } // 1.4.2008 FKIL

        //alert('D617Where: ' + D617Where);
        var oXML = getEntityData2('*', 'DL_D617', D617Where, '');
        var sParent = getsafe(oXML, '//DL_WFCaseEntity');
        //alert(sParent);
        if (sParent != '') {
            D617Where = 'DL_Id = ' + Id;
            var sId = GetEntityItemWhere(Entity, D617Where, getsafe(oXML, '//DL_PropNameForeign'));
            //alert('Id modified from ' + Id + ' to ' + sId + ' where=' + D617Where);
            if (sId != '') { // 21.3.2011 - only if value found we should do this
                Id = sId;
                Entity = sParent;
                D617Where = 'DL_EntityNameForeign=\'' + Entity + '\'';
                oXML = getEntityData2('*', 'DL_D617', D617Where, '');
            }
        }
        prop = getsafe(oXML, '//DL_Href');
        if (bSearch)
            url = getsafe(oXML, '//DL_URLSearch');
        else
            url = getsafe(oXML, '//DL_URLPortal');
        //		}

        SetRecentValue(prop, Id);
        url = url.replace('%DL_Id%', Id);

        // 6.4.2011 - year databases supported
        if (url.indexOf('%0%') > -1 || url.indexOf('%1%') > -1 || url.indexOf('%2%') > -1) {
            var DLFolderParams = getsafe(oObject, '//DL_FolderParams');
            var aFolderParams = DLFolderParams.split('/');
            url = url.replace('%0%', aFolderParams[0]);
            url = url.replace('%1%', aFolderParams[1]);
            url = url.replace('%2%', aFolderParams[2]);
        }

        if (url.indexOf('%') > -1) {
            var xObj = oObject; // 8.5.2009 - don't retrieve two times - getEntityData2('*', Entity, sWhere,'');

            var i, j, XPath;
            i = url.indexOf('%');
            j = url.substr(i + 1).indexOf('%');
            XPath = url.substr(i + 1, j);
            if (XPath == Entity)
                sValue = getsafe(xObj, '//' + Entity + '/' + XPath);
            else
                sValue = getsafe(xObj, '//' + XPath);
            url = url.replace('%' + XPath + '%', sValue);
            if (url.indexOf('%') > -1) {
                i = url.indexOf('%');
                j = url.substr(i + 1).indexOf('%');
                XPath = url.substr(i + 1, j);
                sValue = getsafe(xObj, '//' + XPath);
                url = url.replace('%' + XPath + '%', sValue);
            }
            if (url.indexOf('%') > -1) {
                i = url.indexOf('%');
                j = url.substr(i + 1).indexOf('%');
                XPath = url.substr(i + 1, j);
                sValue = getsafe(xObj, '//' + XPath);
                url = url.replace('%' + XPath + '%', sValue);
            }
            if (url.indexOf('%') > -1) { // 1.4.2008 - FKIL - extra substitution
                i = url.indexOf('%');
                j = url.substr(i + 1).indexOf('%');
                XPath = url.substr(i + 1, j);
                sValue = getsafe(xObj, '//' + XPath);
                url = url.replace('%' + XPath + '%', sValue);
            }
            xObj = null;
        }
        if (sTask != '' && sTask != null)
            url = url + '&DL_Task=' + sTask;

        //alert('EXGotoObject url=' + url + ' bNewWindow=' + bNewWindow);

        oObject = null;
        if (bNewWindow) {
            window.open(url);
            return; // 15.9.2010
        }
        else {
            if (url.indexOf('javascript:') == 0) { // 10.8.2010
                try {
                    eval(url);
                } catch (e) {
                    alert('EXGotoObject url=' + url + ' >>> ' + e.message);
                }
            }
            else
                EXGotoUrl(url, true);
        }
        return true;
    } catch (e) { 
		if(e.message != ''){
			//13-02-2015: To avoid alert box when leaving page with some data altered in DynamicForm
			alert('EXGotoObject ' + e.message); 
		}
	}
}

function EXGotoObject2(Entity, Id, bSearch, where, PortalType, bNewWindow, sTask) {
    //alert('EXGotoObject ' + Entity + ' ' + Id);
    //alert('EXGotoObject ' + Entity + ' ' + Id);
    try {
        if (typeof (PortalType) == 'undefined' || PortalType == null) PortalType = ''; // 14.4.2008
        //var UserPreference = GetEntityItemWhere('DL_sAMAccountName','DL_sAMAccountName = %DL_sAMAccountName%','DL_PortalPreference');
        var oUser = getEntityData('DL_sAMAccountName', 'DL_sAMAccountName = %DL_sAMAccountName%', '');
        var UserPreference = getsafe(oUser, '//DL_PortalPreference');
        var oObject;
        if (typeof (where) == 'undefined' || where == null)
            where = '';
        if (Id == 0 && where == '') {
            Id = GetRecentValue(prop);
        }
        if (Id == null || Id == '') {
            oObject = getEntityData(Entity, where, '');
            Id = getsafe(oObject, '//DL_Id');
        }
        else
            oObject = getEntityData(Entity, 'DL_Id = ' + Id, '');
        Id = getsafe(oObject, '//DL_Id');
        if (Id == '') { // 1.10.2008 - no access
            //var LEX_CannotGotoObjectProbablyNoAccess = 'Kan ikke g\345 til objektet - du har formodentlig ikke adgang';
            alert(LEX_CannotGotoObjectProbablyNoAccess);
            return;
        }
        var sWhere = 'DL_EntityNameForeign=\'' + Entity + '\'';
        if (UserPreference != '') {
            sWhere = sWhere + ' AND isnull(DL_PortalPreference,0) = ' + UserPreference;
        }
        if (PortalType == '' || PortalType == null) {
            //PortalType = GetEntityItemValue(Entity,Id,'DL_PortalType');
            PortalType = getsafe(oObject, '//DL_PortalType');
        }
        //else {sWhere = sWhere + ' AND DL_PortalType = \'0\'';}
        if (PortalType != '') {
            sWhere = sWhere + ' AND isnull(DL_PortalType,0) = ' + PortalType;
        } // 1.4.2008 FKIL
        //alert('sWhere: ' + sWhere);
        var oXML = getEntityData2('*', 'DL_D617', sWhere, '');
        var sParent = getsafe(oXML, '//DL_WFCaseEntity');
        if (sParent != '') {
            sWhere = 'DL_Id = ' + Id;
            var sId = GetEntityItemWhere(Entity, sWhere, getsafe(oXML, '//DL_PropNameForeign'))
            //alert('Id modified from ' + Id + ' to ' + sId + ' where=' + sWhere);
            Id = sId;
            Entity = sParent;
            sWhere = 'DL_EntityNameForeign=\'' + Entity + '\'';
            oXML = getEntityData2('*', 'DL_D617', sWhere, '');
        }
        //alert('EXGotoObject ' + oXML.xml);
        var prop = getsafe(oXML, '//DL_Href');
        if ((Id == null || Id == 0 || Id == '') && (where == null)) {
            Id = GetRecentValue(prop);
        }
        else {
            //      if (where != null)
            SetRecentValue(prop, Id);
        }
        var url;
        if (bSearch)
            url = getsafe(oXML, '//DL_URLSearch');
        else
            url = getsafe(oXML, '//DL_URLPortal');
        if (Id != null)
            url = url.replace('%DL_Id%', Id);
        //if (url == '')
        //alert('EXGotoObject - SERIOUS ERROR ' + oXML.xml);
        if (url.indexOf('%') > -1) {
            var sWhere;
            if (where == null || where == '')
                sWhere = 'DL_Id = ' + Id;
            else
                sWhere = where;
            //alert('gED ' + Entity + ' ' + sWhere + ' ' + Id);
            var xObj = getEntityData2('*', Entity, sWhere, '');
            if (where != null) {
                Id = getsafe(xObj, '//DL_Id');
                if (Id == null || Id == '')
                    return false;
                SetRecentValue(prop, Id);
            }
            url = url.replace('%DL_Id%', Id);
            var i, j, XPath;
            i = url.indexOf('%');
            j = url.substr(i + 1).indexOf('%');
            XPath = url.substr(i + 1, j);
            if (XPath == Entity)
                sValue = getsafe(xObj, '//' + Entity + '/' + XPath);
            else
                sValue = getsafe(xObj, '//' + XPath);
            url = url.replace('%' + XPath + '%', sValue);
            if (url.indexOf('%') > -1) {
                i = url.indexOf('%');
                j = url.substr(i + 1).indexOf('%');
                XPath = url.substr(i + 1, j);
                sValue = getsafe(xObj, '//' + XPath);
                url = url.replace('%' + XPath + '%', sValue);
            }
            if (url.indexOf('%') > -1) {
                i = url.indexOf('%');
                j = url.substr(i + 1).indexOf('%');
                XPath = url.substr(i + 1, j);
                sValue = getsafe(xObj, '//' + XPath);
                url = url.replace('%' + XPath + '%', sValue);
            }
            if (url.indexOf('%') > -1) { // 1.4.2008 - FKIL - extra substitution
                i = url.indexOf('%');
                j = url.substr(i + 1).indexOf('%');
                XPath = url.substr(i + 1, j);
                sValue = getsafe(xObj, '//' + XPath);
                url = url.replace('%' + XPath + '%', sValue);
            }
        }
        if (sTask != '' && sTask != null)
            url = url + '&DL_Task=' + sTask;

        if (window.event) // 23.10.2008
        //if (window.event.ctrlKey && !bNewWindow)
            if (window.event.shiftKey && !bNewWindow) // 12.2.2010
                bNewWindow = true;
        //alert('EXGotoObject url=' + url + ' bNewWindow=' + bNewWindow);
        if (bNewWindow)
            window.open(url);
        else
            EXGotoUrl(url, true);
        return true;
    } catch (e) { alert('EXGotoObject ' + e.message); }
}
function EXGotoUrlWSource(url) {
    try {
        url = url + GetSource();
        // alert('EXGotoUrlWSource - ' + url);
        EXGotoUrl(url);
    } catch (e) { alert('EXGotoUrlWSource(' + url + ') failed ' + e.message); }
}
function EXgetCaseDocuments(DL_Entity, DL_Id) {
    try {
        var oX = getEXUtilities();
        if (!oX)
            return;

        var s;
        //      s = oX.Hello();
        s = oX.getCaseDocuments(getAbsoluteURL(''), DL_Entity, DL_Id);
        if (s != '' && s != null)
            alert(s);
        oX = null;
        //return true;
    } catch (e) { alert('EXgetCaseDocuments ' + e.message); };
}
function EXCreateMail(DL_Entity, DL_Id) {
    try {
        var objAddin;
        objAddin = getOutlookAddIn();
        var bResult;
        if (objAddin == null) {
            bResult = false;
        }
        else {
            //alert('CreateMail - ' + DL_Entity + ' ' + DL_Id);
            var sOperation;
            sOperation = '<x><EXOperation>NewCaseEmail</EXOperation><DL_Entity>' + DL_Entity + '</DL_Entity><DL_Case>' + DL_Id + '</DL_Case><DL_Subject>New email</DL_Subject><Attachments>true</Attachments></x>';
            bResult = objAddin.object.EXOperation(sOperation);
            if (bResult == false) {
                alert(LEX_OutAddInEmailCouldNotCreate.format(DL_Entity, DL_Id));
            }
        }
        objAddin = null;
    }
    catch (e) { alert('EXCreateMail failed ' + e.message); }
}
function EXTrackMail(Folder, criteria, DLEntityNameForeign, DLEntityId) { // 11.3.2008 - FKIL
    try {
        var objAddin;
        objAddin = getOutlookAddIn();
        var bResult;
        if (objAddin == null) {
            return false;
        }
        objAddin.object.EXTrackMail(Folder, criteria, DLEntityNameForeign, DLEntityId);
        objAddin = null;
    }
    catch (e) { alert('EXTrackMail failed ' + e.message); }
}
function EXBRMNewContact(DLCompanyID) { //, DLEntityNameForeign, DLEntityId) { // 2.6.2008
    //newentity('DL_Contacts','DL_CompanyID,DL_EntityNameForeign,DL_EntityId',DLCompanyID + ',' + DLEntityNameForeign + ',' + DLEntityId);
    var oXML = getEntityData2('min(DLContactID)-1 as DLContactID', 'DL_Contacts', '', '');
    var DLContactID = 1 * getsafe(oXML, '//DLContactID'); // negative contactid
    if (DLContactID >= 0)
        DLContactID = -1;
    //alert(DLContactID + ' ' + oXML.xml);
    newentity('DL_Contacts', 'DL_CompanyID,DLContactID', DLCompanyID + ',' + DLContactID);
}
function EXBRMCreateMail(DL_Company, DL_Subject, DLEntityNameForeign, DLEntityId, DL_ToMail, bLinkAttachments) { // 7.2.2008
    try {
        var objAddin;
        objAddin = getOutlookAddIn();
        var bResult;
        if (objAddin == null) {
            bResult = false;
        }
        else {
            var sOperation;
            sOperation = '<x><EXOperation>NewCaseEmail</EXOperation>';
            if (DL_Company != '') // BRM tracking
                sOperation = sOperation + '<DL_Entity>DL_BRMConfig</DL_Entity><DL_Company>' + DL_Company + '</DL_Company>';
            sOperation = sOperation + '<DL_EntityCaseDocuments>' + DLEntityNameForeign + '</DL_EntityCaseDocuments><DL_EntityId>' + DLEntityId + '</DL_EntityId><Attachments>true</Attachments>';
            if (DL_Subject != '')
                sOperation = sOperation + '<DL_Subject>' + MakeXMLSafe(DL_Subject) + '</DL_Subject>';
            if (DL_ToMail != '')
                sOperation = sOperation + '<DL_ToMail>' + MakeXMLSafe(DL_ToMail) + '</DL_ToMail>';
            if (bLinkAttachments)
                sOperation = sOperation + '<LinkAttachments>true</LinkAttachments>';
            sOperation = sOperation + '</x>';
            bResult = objAddin.object.EXOperation(sOperation);
        }
        // 24.6.2011 - bResult moved up
        // bResult = objAddin.object.EXOperation(sOperation);
        if (bResult == false) {
            //var LEX_OutAddInEmailBRMCouldNotCreate = "Could not create email for with attachments for company {0} to {1}";
            alert(LEX_OutAddInEmailBRMCouldNotCreate.format(DL_Company, DL_ToMail));
        }
        objAddin = null;
    }
    catch (e) { // 29.6.2009 - modified logic
        if (e.message.indexOf("'object' ") > 0)
            alert('EXBRMCreateMail failed - Outlook probably not started');
        else
            alert('EXBRMCreateMail failed ' + e.message);
    }
}
// NOT USED ANYMORE
/*
function EXsendFile(filename, sDocLib, newfilename, xProperties) {
try {
var oDoc;
oDoc = new ActiveXObject("MSXML2.DOMDocument.4.0");
oDoc.async = false;
var adoStream;
adoStream = new ActiveXObject("ADODB.Stream");
//adoStream.Mode = 1; // read only , 3 read write <-- THIS property make the operation fail!!!
adoStream.Type = 1; // adTypeBinary
adoStream.open();
//alert('EXsendFile invoked - ' + filename + ',' + sDocLib + ',' + newfilename + ' now LoadFromFile');
adoStream.LoadFromFile(filename);
//alert('LoadFromFile completed');
var URL;
URL = sDocLib + filename.substr(filename.lastIndexOf("\\")+1);
if (newfilename == '')
newfilename = filename.lastIndexOf("\\"+1);
//alert('URL=' + URL);
var xmldoc;
xmldoc='<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>'
xmldoc = xmldoc + '<UploadDocument2 xmlns="http://exformatics.net/SharePointServices">';
xmldoc = xmldoc +'<xProperties>' + xProperties + '</xProperties>';
xmldoc = xmldoc +'<URL>' + URL + '</URL>';
xmldoc = xmldoc +'<FileName>' + newfilename + '</FileName>';
xmldoc = xmldoc +'<docsize>' + adoStream.Size + '</docsize>';
xmldoc = xmldoc +'<docbinaryarray></docbinaryarray>';
xmldoc = xmldoc + '</UploadDocument2></soap:Body></soap:Envelope>';
//alert(xmldoc);

oDoc.loadXML(xmldoc);
var oFile;
oFile = oDoc.selectSingleNode('//docbinaryarray');
oFile.dataType = "bin.base64";
oFile.nodeTypedValue = adoStream.Read(-1);//adoStream.Read(-1); // -1=adReadAll
//var oDocSize;
//oDocSize = oDoc.selectSingleNode('//docsize');
//oDocSize.dataType = "int";
//oDocSize.nodeTypedValue = '' + adoStream.Size;
//alert(oDoc.xml);

var xmlhttp = EXXMLHTTP();
xmlhttp.open("POST", getAbsoluteURL('/EX_SPSSVC/svcSharePoint.asmx'), false);
xmlhttp.setRequestHeader("Content-Type","text/xml; charset=utf-8");
//xmlhttp.setRequestHeader("Content-Length", oDoc.xml.length);
xmlhttp.setRequestHeader("SOAPAction", "http://exformatics.net/SharePointServices/UploadDocument2");
xmlhttp.send(xmldoc);
var oResult;
oResult = xmlhttp.responseXML.selectSingleNode('//UploadDocument2Result');
if (oResult == null) {
alert('CRITICAL ERROR IN UPLOAD ' + xmlhttp.responseText);
}
else {
if (oResult.text == 'true') {
alert(LEX_UploadFilesCompleted.format(''));
}
else {
alert(LEX_UploadFilesFailed.format(xmlhttp.responseText));
}
}
xmlhttp = null;
} catch (e) {alert('EXsendFile(' + filename + ',' + sDocLib + ') >>> ' + e.message); }
}
*/

/********************************************************************
*                                                                  *
* Exformatics Outlook Extension Javascript                         *
*                                                                  *
********************************************************************/

// getOutlook()
function getOutlook() {
    DebugAlert('Started', 100, 'EX_Resources.exformatics.js.getOutlook()');
    var LEX_OutlookCouldNotStart = "Outlook could not start. Please check your Internet Explorer securitysettings according to documentation!";
    var outlookApp = null; try {
        // 06-06-2011 BH: Alteret to New ActiveXObject
        outlookApp = new ActiveXObject("Outlook.Application"); //GetObject("", "Outlook.Application");
    }
    catch (e) {
        DebugAlert('Error: Name: ' + e.name + '\nMessage: ' + e.message + '\nNumber: ' + e.number, 10, 'EX_Resources.exformatics.js.getOutlook()');
        // 28-06-2011 BH: Found out, that if outlook is closing the new ActiveXObject will fail
        if (e.number == -2147418111) {
            DebugAlert('Trying to reload outlook', 50, 'EX_Resources.exformatics.js.getOutlook()');
            wait(2000);
            try {
                outlookApp = new ActiveXObject("Outlook.Application"); //GetObject("", "Outlook.Application");
            }
            catch (e) {
                alert(LEX_OutlookCouldNotStart);
                outlookApp = null;
            }
        }
        else {
            alert(LEX_OutlookCouldNotStart);
            outlookApp = null;
        }
    }
    //	try {
    //		if (outlookApp == null) {
    //			//alert('Now ActiveXObject');
    //		    outlookApp = GetObject("", "Outlook.Application");// new ActiveXObject("Outlook.Application"); 
    //		}
    //	} catch (e) {
    //		//alert(LEX_OutlookNotStarted + e.message) // 30.5.2011 - remove alert
    //		outlookApp = null;
    //	};
    // 30.5.2011 - remove alert here - error handling moved to invoking function
    if (outlookApp == null && false) {
        alert(LEX_OutlookNotStarted);
        window.open('http://www.exformatics.com/support/EXOutlookExtension.html');
    }
    return outlookApp;
}
// getOutlookAddIn()
function getOutlookAddIn() {
    DebugAlert('Started', 100, 'EX_Resources.exformatics.js.getOutlookAddin()');
    var outlookApp;
    var objAddin;
    try {
        outlookApp = getOutlook();
        if (outlookApp == null) { // 30.5.2011 - IT Case 2186 - don't continue if Outlook not open - And don't alert this has happened once in the getOutlook
            //alert('Could not get access to Outlook - please start');
            return;
        }
        DebugAlert('Outlook loaded', 100, 'EX_Resources.exformatics.js.getOutlookAddin()');
        //outlookApp = new ActiveXObject("DLRDocLife.DLRContactItem");
        //alert('Redemption loaded');
        //outlookApp = outlookApp.Application;
        //objAddin = new ActiveXObject("DocLifeExtensionforOutlookAddIn.Connect"); // This works for security - but not for functionality :-(
        //objAddin = GetObject("", "DocLifeExtensionforOutlookAddIn.Connect"); // doesn't work - cannot find object :-(
        //alert('Object loaded');
        //		outlookApp = objAddin.getApplication;
        //alert('Now were ready');
        //		objAddin = null;

        for (i = 1; i <= outlookApp.COMAddIns.COunt; i++) {
            DebugAlert('Comaddins: ' + outlookApp.COMAddIns.Item(i).ProgID, 200, 'EX_Resources.exformatics.js.getOutlookAddin()');
            //DebugAlert('Comaddins: ', 200, 'EX_Resources.exformatics.js.getOutlookAddin()');
        }
        DebugAlert('Comaddins: ' + outlookApp.COMAddIns.COunt, 50, 'EX_Resources.exformatics.js.getOutlookAddin()');
        objAddin = outlookApp.COMAddIns.Item("DocLifeExtensionforOutlookAddIn.Connect"); // This works for functionality - but not for security
        outlookApp = null;
        //objAddin = new ActiveXObject("DocLifeExtensionforOutlookAddIn.Connect"); // This works for security - but not for functionality :-(
        //objAddin = GetObject("", "DocLifeExtensionforOutlookAddIn.Connect"); // doesn't work - cannot find object :-(
        //objAddin = GetObject("", "{CB5BDC81-93C1-11CF-8F20-00805F2CD064}");
    }
    catch (e) {
        // 06-10-2010 BH: Added ExformaticsOutlookAddIn.Connect Kept DocLifeExtensionforOutlookAddIn.Connect for backward compatibility
        DebugAlert('Error1: ' + e.message, 100, 'EX_Resources.exformatics.js.getOutlookAddin()');
        objAddin = null;
        try {
            objAddin = outlookApp.COMAddIns.Item("ExformaticsOutlookAddIn.Connect");
        }
        catch (e2) {
            DebugAlert('Error2: ' + e.message, 100, 'EX_Resources.exformatics.js.getOutlookAddin()');
            objAddin = null;
        }
        if (objAddin == null) { // 6.4.2011
            try {
                objAddin = outlookApp.COMAddIns.Item("ExformaticsOfficeExtension.AddinModule");   // 7.4.2011 mb
            }
            catch (e2) {
                DebugAlert('Error3: ' + e.message, 100, 'EX_Resources.exformatics.js.getOutlookAddin()');
                objAddin = null;
            }
        }
    }
    if (objAddin == null) {
        alert(LEX_ExformaticsOutlookExtensionNotInstalled + e.message);
        var ew; ew = window.open('http://www.exformatics.com/support/EXOutlookExtension.html');
    }
    outlookApp = null; // 16.2.2008 - ensure Outlook is released
    DebugAlert('Return: ' + objAddin, 10, 'EX_Resources.exformatics.js.getOutlookAddin()');

    return objAddin;
}

function getSecureOutlookAddIn() {
    var objAddin;
    try {
        objAddin = new ActiveXObject("DocLifeExtensionforOutlookAddIn.Connect"); // This works for security - but not for functionality :-(
    }
    catch (e) { objAddin = null; }
    return objAddin;
}
// newphone
function newphone(name, DL_Company) {
    //	alert('newphone(' + name + ',' + DL_Company + ')');
    newjournal(DL_Company, name, 'Phone call');
}
// newminute
function newminute(name, DL_Company) {
    newjournal(DL_Company, name, 'Meeting');
    return false;
}
// newjournal
function newjournal(DL_Company, name, type1) {
    //	alert('newjournal(' + DL_Company + ',' + name + ',' + type1 + ')');
    var outlookApp;
    outlookApp = getOutlook();
    if (outlookApp == null) {
        outlookApp = null;
    }
    else {
        var oItem;
        oItem = outlookApp.CreateItem(4);
        oItem.Companies = DL_Company;
        oItem.Mileage = name;
        oItem.Subject = name;
        oItem.Type = type1;
        oItem.StartTimer();
        oItem.Display();
        //alert('newjournal(' + DL_Company + ',' + name + ',' + type1 + ')');
        outlookApp = null;
    }
    //alert('done');
}
function newappointment(DLEntity, DLEntityId, subject, location, recipient, dlmeetingtype) {
    //	alert('newappointment(' + DLEntity + ',' + DLEntityId + ')');
    var outlookApp;
    outlookApp = getOutlook();
    //dlmeetingtype="Test";
    if (outlookApp == null) {
        outlookApp = null;
    }
    else {
        var oItem;
        oItem = outlookApp.CreateItem(1);
        oItem.UserProperties.Add('DLMeeting', 1);
        oItem.UserProperties('DLMeeting').Value = "0"; // Meeting not yet created
        if (DLEntity != null) {
            oItem.UserProperties.Add('DLEntity', 1);
            oItem.UserProperties('DLEntity').Value = DLEntity;
            oItem.UserProperties.Add('DLEntityId', 1);
            oItem.UserProperties('DLEntityId').Value = '' + DLEntityId;
        }
        if (subject != null) // 23.4.2008
            oItem.Subject = subject;
        if (location != null) // 23.4.2008
            oItem.location = location;
        if (recipient != null) {
            oItem.Recipients.Add(recipient)
        }
        if (dlmeetingtype != null) { // 2.6.2008
            oItem.UserProperties.Add('DLMeetingType', 1);
            oItem.UserProperties('DLMeetingType').Value = dlmeetingtype;
            oItem.body = 'M\370detype: ' + dlmeetingtype; // 5.6.2008
        }
        oItem.Display(); // 23.4.2008 - how do we get the "signal" back from Outlook to the browser?
        oItem = null;
        outlookApp = null;
    }
    //alert('done');
}
function newcasenotification(sTitle) { // 18.12.2009 - title added
    if (typeof (sTitle) == 'undefined')
        sTitle = '';
    var outlookApp;
    outlookApp = getOutlook();
    if (outlookApp == null) {
        outlookApp = null;
    }
    else {
        try {
            var oItem;
            oItem = outlookApp.CreateItem(0);
            oItem.Body = window.location.href;
            if (sTitle != '')
                oItem.Subject = sTitle;
            oItem.Display();
            //alert('newjournal(' + DL_Company + ',' + name + ',' + type1 + ')');
            outlookApp = null;
        }
        catch (e) { alert('newcasenotification(' + sTitle + ')' + e.message); }
    }
    //alert('done');
}
function newcaseemail(DL_TrackTag, DL_Entity, DL_Id, sSubject, sHTML, DL_CaseNo, sRecipients) // 27.7.2009 - sSubject, sHTML added 15.5.2011 - DL_CaseNo added
{
    if (typeof (DL_CaseNo) == 'undefined')
        DL_CaseNo = DL_Id;
    if (typeof (sSubject) == 'undefined')
        sSubject = '';
    if (typeof (sHTML) == 'undefined')
        sHTML = '';
    //alert('newcaseemail(' + DL_Entity + ',' + DL_Id + ')');
    var outlookApp;
    outlookApp = getOutlook();
    if (outlookApp == null) {
        outlookApp = null;
    }
    else {
        try {
            var oItem;
            oItem = outlookApp.CreateItem(0);
            if (DL_TrackTag != '') {
                oItem.UserProperties.Add('DLTrackTag', 1);
                oItem.UserProperties('DLTrackTag').Value = DL_TrackTag;
                oItem.UserProperties.Add(DL_TrackTag, 1);
                oItem.UserProperties(DL_TrackTag).Value = DL_CaseNo; // 15.5.2011 DL_Id;
                oItem.UserProperties.Add('DLEntity', 1);
                oItem.UserProperties('DLEntity').Value = DL_Entity;
                oItem.UserProperties.Add('DLEntityId', 1);
                oItem.UserProperties('DLEntityId').Value = DL_Id;
            }
            //oItem.UserProperties.Add('DLCaseId', 1);
            //oItem.UserProperties('DLCaseId').Value = DL_Id;
            if (sSubject != '')
                oItem.Subject = sSubject;
            if (sHTML != '')
                oItem.HTMLBody = sHTML;
            if (sRecipients != '')
                oItem.To = sRecipients;
            oItem.Display();
            //alert('newjournal(' + DL_Company + ',' + name + ',' + type1 + ')');
            outlookApp = null;
        }
        catch (e) { alert(e.message); }
    }
    //alert('done');
}
function newcaseemail2(DL_TrackTag, DL_Entity, DL_Id, ProjectMailFolder) {
    //alert('newcaseemail2(' + DL_Entity + ',' + DL_Id + ')');
    var outlookApp;
    outlookApp = getOutlook();
    if (outlookApp == null) {
        outlookApp = null;
    }
    else {
        try {
            var oItem;
            oItem = outlookApp.CreateItem(0);
            oItem.UserProperties.Add('DLTrackTag', 1);
            oItem.UserProperties('DLTrackTag').Value = DL_TrackTag;
            oItem.UserProperties.Add(DL_TrackTag, 1);
            oItem.UserProperties(DL_TrackTag).Value = DL_Id;
            oItem.UserProperties.Add('DLEntity', 1);
            oItem.UserProperties('DLEntity').Value = DL_Entity;
            oItem.UserProperties.Add('DLEntityId', 1);
            oItem.UserProperties('DLEntityId').Value = DL_Id;
            oItem.UserProperties.Add('DLMailFolder', 1);
            oItem.UserProperties('DLMailFolder').Value = ProjectMailFolder;
            //oItem.UserProperties.Add('DLCaseId', 1);
            //oItem.UserProperties('DLCaseId').Value = DL_Id;
            oItem.Display();
            //alert('newjournal(' + DL_Company + ',' + name + ',' + type1 + ')');
            outlookApp = null;
        }
        catch (e) { alert('newcaseemail2 exception ' + e.message); }
    }
    //alert('done');
}
function newcaseemail3(DL_TrackTag, DL_Entity, DL_Id) {
    //alert('openmail2(' + DL_FolderPath + ',' + DL_MSGID + ')');
    var objAddin;
    objAddin = getOutlookAddIn();
    var bResult;
    if (objAddin == null) {
        bResult = false;
    }
    else {
        bResult = objAddin.object.newCaseEmail(DL_TrackTag, DL_Entity, DL_Id);
        if (bResult == false) {
            alert(LEX_OutAddInEmailCouldNotCreate.format(DL_TrackTag, DL_Id));
        }
    }
    objAddin = null;
}
// newcontact
function newcontact(DL_CompanyID) {
    //alert('newcontact(' + DL_CompanyID + ')');
    var objAddin;
    objAddin = getOutlookAddIn();
    var bResult;
    if (objAddin == null) {
        bResult = false;
    }
    else {
        bResult = objAddin.object.newContact(DL_CompanyID);
        if (bResult == false) {
            alert(LEX_OutAddInContactCouldNotCreate.format(DL_CompanyID));
        }
    }
    objAddin = null;
}
// opencontact
function opencontact(DL_CompanyID, name) {
    //alert('opencontact(' + DL_CompanyID + ',' + name + ')');
    var objAddin;
    objAddin = getOutlookAddIn();
    var bResult;
    if (objAddin == null) {
        bResult = false;
    }
    else {
        bResult = objAddin.object.showContact(DL_CompanyID, name);
        if (bResult == false) {
            alert(LEX_OutAddInContactCouldNotOpen.format(name));
        }
    }
    objAddin = null;
}
// opencontact
function EXOpenContact(DL_ContactID) {
    return showcontact2(DL_ContactID);
}
function showcontact2(DL_ContactID) {
    var objAddin;
    try {
        objAddin = getOutlookAddIn();
        var bResult;
        if (objAddin == null) {
            bResult = false;
        }
        else {
            //alert('showcontact2(' + DL_ContactID + ')');
            //bResult = objAddin.object.showContact(102, 'Michael Rasmussen'); // TEST PURPOSE ONLY
            //bResult = objAddin.object.showContact2(DL_ContactID);
            //alert('now do it');
            bResult = objAddin.object.showContact2(DL_ContactID);
            if (bResult == false) {
                alert(LEX_OutAddInContactCouldNotOpen.format(DL_ContactID));
            }
        }
    } catch (e) { alert('showcontact2(' + DL_ContactID + ') failed >>> ' + e.message); }
    objAddin = null; // 3.2.2009 - ensure object is deleted - whether error occur or not
}
// opentask
function opentask(DL_TaskId) {
    //alert('opentask(' + DL_TaskId + ')');
    var objAddin;
    objAddin = getOutlookAddIn();
    var bResult;
    if (objAddin == null) {
        bResult = false;
    }
    else {
        bResult = objAddin.object.showTask(DL_TaskId);
        if (bResult == false) {
            alert(LEX_OutAddInTaskCouldNotOpen.format(DL_TaskId));
        }
    }
    objAddin = null;
    return bResult; // 23.10.2008
}
function showAppointment(DLMeeting) { // 23.4.2008
    var objAddin;
    objAddin = getOutlookAddIn();
    var bResult;
    if (objAddin == null) {
        bResult = false;
    }
    else {
        bResult = objAddin.object.showAppointment(DLMeeting);
        if (bResult == false) {
            // 09-10-2008/JRD: Changed alert from LEX_OutAddInTaskCouldNotOpen to new alert LEX_OutAddInCalendarCouldNotOpen
            alert(LEX_OutAddInCalendarCouldNotOpen.format(DLMeeting));
        }
    }
    objAddin = null;
}
// opencontactsfolder
function opencontactsfolder(DL_CompanyFolder) {
    //alert('opencontactsfolder');
    var objAddin;
    objAddin = getOutlookAddIn();
    var bResult;
    if (objAddin == null) {
        bResult = false;
    }
    else {
        bResult = objAddin.object.openContactsFolder(DL_CompanyFolder);
        if (bResult == false) {
            alert(LEX_BRMCouldNotOpenContactFolder);
        }
    }
    objAddin = null;
}
// openmailfolder
function openmailfolder(DL_CompanyFolder) {
    try {
        //alert('openmailfolder(' + DL_CompanyFolder + ')');
        var objAddin;
        objAddin = getOutlookAddIn();
        var bResult;
        if (objAddin == null) {
            bResult = false;
        }
        else {
            var oAO = objAddin.object;
            //bResult = objAddin.Object.openMailFolder(DL_CompanyFolder);
            if (oAO == null)
                oAO = objAddin;
            bResult = oAO.openMailFolder(DL_CompanyFolder);
            if (bResult == false) {
                alert(LEX_BRMCouldNotOpenMailFolder.format(DL_CompanyFolder));
            }
        }
        objAddin = null;
    } catch (e) { alert('openmailfolder(' + DL_CompanyFolder + ') >>> ' + e.message); }
}
// openmailfolder
function openPKMCDOfolder(DL_CompanyFolder) {
    //alert('openmailfolder(' + DL_CompanyFolder + ')');
    var objAddin;
    objAddin = getOutlookAddIn();
    var bResult;
    if (objAddin == null) {
        alert(LEX_ExformaticsOutlookExtensionNotInstalled);
        bResult = false;
    }
    else {
        bResult = objAddin.object.openMailFolder(DL_CompanyFolder);
        if (bResult == false) {
            alert(LEX_BRMCouldNotOpenMailFolder.format(DL_CompanyFolder));
        }
    }
    objAddin = null;
}
// openmail
function openmail(DL_CompanyFolder, DL_MSGID) {
    //alert('openmail(' + DL_CompanyFolder + ',' + DL_MSGID + ')');
    var objAddin;
    objAddin = getOutlookAddIn();
    var bResult;
    if (objAddin == null) {
        bResult = false;
    }
    else {
        bResult = objAddin.object.openMail(DL_CompanyFolder, DL_MSGID);
        if (bResult == false) {
            alert(LEX_BRMCouldNotOpenEmail.format(DL_CompanyFolder, DL_MSGID));
        }
    }
    objAddin = null;
}
function openmailD(DL_CompanyFolder, DL_DocumentId) {
    try {
        //alert('openmailD(' + DL_CompanyFolder + ',' + DL_DocumentId + ')');
        var objAddin;
        objAddin = getOutlookAddIn();
        var bResult;
        if (objAddin == null) {
            bResult = false;
        }
        else {
            bResult = objAddin.object.openEmailD(DL_CompanyFolder, DL_DocumentId);
            if (bResult == false) {
                alert(LEX_BRMCouldNotOpenEmail.format(DL_CompanyFolder, DL_DocumentId));
            }
        }
        objAddin = null;
    } catch (e) { alert('openmailD(' + DL_CompanyFolder + ',' + DL_DocumentId + ') failed ' + e.message); }
}
// openmail
function replymail(DL_CompanyFolder, DL_MSGID) {
    //alert('replymail(' + DL_CompanyFolder + ',' + DL_MSGID + ')');
    var objAddin;
    objAddin = getOutlookAddIn();
    var bResult;
    if (objAddin == null) {
        bResult = false;
    }
    else {
        bResult = objAddin.object.replyMail(DL_CompanyFolder, DL_MSGID);
        if (bResult == false) {
            alert(LEX_BRMCouldNotOpenReplyEmail.format(DL_CompanyFolder, DL_MSGID));
        }
    }
    objAddin = null;
}
// openmail
function openmail2(DL_FolderPath, DL_MSGID) {
    //alert('openmail2(' + DL_FolderPath + ',' + DL_MSGID + ')');
    var objAddin;
    objAddin = getOutlookAddIn();
    var bResult;
    if (objAddin == null) {
        bResult = false;
    }
    else {
        bResult = objAddin.object.openEmail2(DL_FolderPath, DL_MSGID);
        if (bResult == false) {
            alert(LEX_BRMCouldNotOpenEmail.format(DL_FolderPath, DL_MSGID));
        }
    }
    objAddin = null;
}
// openmail
function replymail2(DL_FolderPath, DL_MSGID) {
    //alert('replymail2(' + DL_FolderPath + ',' + DL_MSGID + ')');
    var objAddin;
    objAddin = getOutlookAddIn();
    var bResult;
    if (objAddin == null) {
        bResult = false;
    }
    else {
        bResult = objAddin.object.replyEmail2(DL_FolderPath, DL_MSGID);
        if (bResult == false) {
            alert(LEX_BRMCouldNotOpenReplyEmail.format(DL_FolderPath, DL_MSGID));
        }
    }
    objAddin = null;
}
// SkypeCall
function skypecall(SkypeName) {
    //alert('skypecall(' + SkypeName + ')');
    var objAddin;
    objAddin = getOutlookAddIn();
    var bResult;
    if (objAddin == null) {
        bResult = false;
    }
    else {
        bResult = objAddin.object.SkypeCall(SkypeName);
        if (bResult == false) {
            alert('Could not Skype Call ' + SkypeName);
        }
    }
    objAddin = null;
}
// SkypeChat
function skypechat(SkypeName) {
    //alert('skypechat(' + SkypeName + ')');
    var objAddin;
    objAddin = getOutlookAddIn();
    var bResult;
    if (objAddin == null) {
        bResult = false;
    }
    else {
        bResult = objAddin.object.SkypeChat(SkypeName);
        if (bResult == false) {
            alert('Could not Skype Chat ' + SkypeName);
        }
    }
    objAddin = null;
}
/********************************************************************
*                                                                  *
* Exformatics Download CSV file                                    *
*                                                                  *
********************************************************************/
// EXdownloadCSV
function EXdownloadCSV(DL_Entity) {
    openupload = window.open('/EX_SQLSVC/getEntityData.aspx?DL_Entity=' + DL_Entity, 'Download', 'width=200,height=40,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,copyhistory=no,resizable=no');
}

/********************************************************************
*                                                                  *
* queryString functions                                            *
*                                                                  *
********************************************************************/
// Parse Query String
// http://www.eggheadcafe.com/articles/20020107.asp
function PageQuery(q) {
    if (q.length > 1) this.q = q.substring(1, q.length);
    else this.q = null;
    this.keyValuePairs = new Array();
    if (q) {
        for (var i = 0; i < this.q.split("&").length; i++) {
            this.keyValuePairs[i] = this.q.split("&")[i];
        }
    }
    this.getKeyValuePairs = function () { return this.keyValuePairs; }
    this.getValue = function (s) {
        for (var j = 0; j < this.keyValuePairs.length; j++) {
            if (this.keyValuePairs[j].split("=")[0] == s) {
                // MMQ: 28/8-2006
                var i = this.keyValuePairs[j].indexOf('=');
                return this.keyValuePairs[j].substr(i + 1);
                return this.keyValuePairs[j].split("=")[1];
            }
        }
        //    return false;
        return '';
    } // getvalue - object oriented
    this.getParameters = function () {
        var a = new Array(this.getLength());
        for (var j = 0; j < this.keyValuePairs.length; j++) {
            a[j] = this.keyValuePairs[j].split("=")[0];
        }
        return a;
    } // getParameters - object oriented
    this.getLength = function () { return this.keyValuePairs.length; }
} // PageQuery
function queryString(key, bParent) {
    try {
        var page;
        if (bParent)
            page = new PageQuery(parent.window.location.search);
        else
            page = new PageQuery(window.location.search);
        return unescape(page.getValue(key));
    } catch (e) { alert('queryString(' + key + ',' + bParent + ') failed ' + e.message); } // 18.2.2013 - minor bug
}
//alert('exformatics.js - querystring');
/********************************************************************
*                                                                  *
* FillDropDown                                                     *
*                                                                  *
* Notice - the drop down list must be within an element with NO    *
* id or other stuff is this element is reset - use a DIV, TD,      *
* SPAN or similar                                                  *
*                                                                  *
********************************************************************/
function FillDropDown(sEle, sDictionary, sPropCodeKey, sPropCodeDecode, sDictKey, sDictValue, sDefault, sDictKey2, sDictValue2, sDictKey3, sDictValue3, bDisable, strWhere) // 23.9.2012 - strWhere added
{
    //alert('DEBUG\nFillDropDown(' + sEle + ',' + sDictionary + ',' + sPropCodeDecode + ',' + sDictKey + ',' + sDictValue + ',' + sDefault + ' started');
    var oEle = document.getElementById(sEle);
    if (oEle == null) {
        alert('ERROR\nFillDropDown(' + sEle + ', ...) failed - element not found - please contact administrator');
        return;
    }
    try {
        var xmldoc;

        if (typeof (strWhere) == 'undefined')
            strWhere = '';

        if (bDisable == null)
            bDisable = false;

        if (sDictKey == null)
            sDictKey = '';

        if (sDictValue == null)
            sDictValue = '';

        if (sDictKey3 == null)
            sDictKey3 = '';

        if (sDictValue3 == null)
            sDictValue3 = '';

        if (typeof (sDictKey2) == 'undefined' || sDictKey2 == null)
            sDictKey2 = '';

        if (typeof (sDictValue2) == 'undefined' || sDictValue2 == null)
            sDictValue2 = '';

        if (typeof (sDictKey3) == 'undefined' || sDictKey3 == null)
            sDictKey3 = '';

        if (typeof (sDictValue3) == 'undefined' || sDictValue3 == null)
            sDictValue3 = '';

        if (sPropCodeDecode == null)
            sPropCodeDecode = '';

        //if (sDefault == null)
        //  sDefault = '';

        if (sDictKey == 'DL_WFCaseEntity' && sDictValue.indexOf('DL_WF') == 0) // 11.6.2008
        {
            sDictKey = '';
            sDictValue = '';
        }

        //mb - 04.12.2009
        if (bDisable == true) {
            if (sDictValue == null || sDictValue == '') {
                oEle.options.length = 0;
                oEle.disabled = true;
                return;
            }
        }

        var op;

        if (sDefault == '%DL_sAMAccountName%') {
            var oSAM = getEntityData('DL_sAMAccountName', 'DL_sAMAccountName = %DL_sAMAccountName%', '');
            sDefault = getsafe(oSAM, '//DL_sAMAccountName/DL_sAMAccountName');
        }

        if (strWhere == '') {
            if (sDictKey2 != '') {
                xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
                xmldoc = xmldoc + '<getDictionaryData2 xmlns="http://doclife.net/svcDLEntity">';
                xmldoc = xmldoc + '<DL_Dictionary>' + sDictionary + '</DL_Dictionary>';
                xmldoc = xmldoc + '<DL_PropCodeKey>' + sPropCodeKey + '</DL_PropCodeKey><DL_PropCodeDecode1>' + sPropCodeDecode + '</DL_PropCodeDecode1><DL_PropCodeDecode2/><DL_PropCodeDecode3/><DL_DictKey1>' + sDictKey + '</DL_DictKey1><DL_DictValue1>' + sDictValue + '</DL_DictValue1>';
                xmldoc = xmldoc + '<DL_DictKey2>' + sDictKey2 + '</DL_DictKey2><DL_DictValue2>' + sDictValue2 + '</DL_DictValue2><DL_DictKey3>' + sDictKey3 + '</DL_DictKey3><DL_DictValue3>' + sDictValue3 + '</DL_DictValue3>';
                op = 'getDictionaryData2';
                SOAPAction = 'http://doclife.net/svcDLEntity/getDictionaryData2';
                xmldoc = xmldoc + '</getDictionaryData2>';
            }
            else {
                xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
                xmldoc = xmldoc + '<getDictionaryData xmlns="http://doclife.net/svcDLEntity">';
                xmldoc = xmldoc + '<DL_Dictionary>' + sDictionary + '</DL_Dictionary>';
                xmldoc = xmldoc + '<DL_PropCodeKey>' + sPropCodeKey + '</DL_PropCodeKey><DL_PropCodeDecode1>' + sPropCodeDecode + '</DL_PropCodeDecode1><DL_PropCodeDecode2/><DL_PropCodeDecode3/><DL_DictKey1>' + sDictKey + '</DL_DictKey1><DL_DictValue1>' + MakeXMLSafe(sDictValue) + '</DL_DictValue1>';
                op = 'getDictionaryData';
                SOAPAction = 'http://doclife.net/svcDLEntity/getDictionaryData';
                xmldoc = xmldoc + '</getDictionaryData>';
            }
        }
        else {
            op = 'getDictionaryData6';
            SOAPAction = 'http://doclife.net/svcDLEntity/getDictionaryData6';
            xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
            xmldoc = xmldoc + '<getDictionaryData6 xmlns="http://doclife.net/svcDLEntity">';
            xmldoc = xmldoc + '<DL_Dictionary>' + sDictionary + '</DL_Dictionary>';
            xmldoc = xmldoc + '<DL_PropCodeKey>' + sPropCodeKey + '</DL_PropCodeKey><DL_PropCodeDecode1>' + sPropCodeDecode + '</DL_PropCodeDecode1>';
            xmldoc = xmldoc + '<strWhere>' + MakeXMLSafe(strWhere) + '</strWhere>';
            //	if (strOrderBy != '')
            //		xmldoc = xmldoc + '<strOrderBy>' + strOrderBy + '</strOrderBy>';
            xmldoc = xmldoc + '<b4JSON>false</b4JSON>';
            xmldoc = xmldoc + '</getDictionaryData6>';
        }

        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';
        //EXCopyToClipboard(xmldoc);
        //alert('DEBUG\nsoap=' + xmldoc);
        var FeedbackHTTP = EXXMLHTTP(); // 29.1.2013 - "var" added - no global variable - unknown side effect
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SQLSVC/svcDLEntity.asmx?op=' + op), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", SOAPAction);
        FeedbackHTTP.send(xmldoc);

        // 17.5.2010 - prepare for multi browser support - and save time
        //var xmlResponse = EXDOMDocument();
        //xmlResponse.async=false;
        //xmlResponse.loadXML(FeedbackHTTP.responseText);

        if (FeedbackHTTP.status != 200) {
            //EXCopyToClipboard('Status: ' + FeedbackHTTP.status + ' - ' + FeedbackHTTP.statusText + '\n\n' + FeedbackHTTP.responseXML.xml);
            alert('FillDropDown(' + sEle + ',' + sDictionary + ',' + sPropCodeKey + ') - Status:' + FeedbackHTTP.status);
        }
        else {
            var xmlResponse = FeedbackHTTP.responseXML;
            FeedbackHTTP = null;
            //alert(FeedbackHTTP.status + ' ' + FeedbackHTTP.responseText);

            if (xmlResponse == null) {
                //alert('empty xmlResponse');
            }
            else {
                //mb when '' as indata should the result be all or nothing?
                //EXCopyToClipboard(xmlResponse.xml);
                //alert('xmlResponse=' + xmlResponse.xml);

                var xNodes;

                if (sDictionary == 'DL_D760')
                    xNodes = xmlResponse.selectNodes(".//DL_D760/DL_D760");
                else
                    xNodes = xmlResponse.selectNodes(".//" + sDictionary + "/" + sDictionary);

                if (xNodes.length == 0) {
                    //alert('FillDropDown(' + sDictionary + ') - no nodes found');
                    oEle.disabled = true;
                }
                else {
                    oEle.disabled = false;
                    var i, xNode;
                    var sValue, s;

                    if (oEle.value == '')  // 29.7.2008 - use default value only if field has no value
                    {
                        if (sDefault == null)
                            sValue = getCookie(sEle);
                        else // get sValue from already selected field - if any
                        {
                            sValue = sDefault;
                        }
                    }
                    else {
                        sValue = oEle.value;
                        //alert(sValue + ' ' + oEle.selectedIndex);
                    }

                    oEle.options.length = 0; // 15.9.2009

                    var oP;

                    oP = document.createElement('option');
                    oP.value = ''; oP.text = '';
                    if (!oEle.multiple) // 26.2.2015 - do not add row in this situation
                        oEle.add(oP);

                    i = xNodes.length;
                    var arr = new Array(i + 1);

                    // Add empty element initially - handling of default values?
                    arr[0] = "<OPTION></OPTION>";
                    if (xNodes.length != 0) {
                        for (i = 0; i < xNodes.length; i++) {
                            xNode = xNodes[i];
                            var DL_PropCodeKey = getsafe(xNode, "DL_PropCodeKey");
                            var DL_PropCodeDecode = getsafe(xNode, "DL_PropCodeDecode");

                            if (DL_PropCodeDecode == '')
                                DL_PropCodeDecode = DL_PropCodeKey;

                            s = '<OPTION value="' + DL_PropCodeKey + '"';

                            if (sValue != null && sValue != '' && sValue == DL_PropCodeKey)
                                s = s + ' SELECTED ';

                            s = s + '>' + DL_PropCodeDecode + '</OPTION>';
                            arr[i + 1] = s;
                            oP = document.createElement('option'); // 15.9.2009
                            oP.value = DL_PropCodeKey;
                            oP.text = DL_PropCodeDecode;

                            if (sValue != null && sValue != '' && sValue == DL_PropCodeKey)
                                oP.selected = true;

                            oEle.add(oP);
                        };

                        //mb code below never run???
                        if (false) // 15.9.2009
                        {
                            var ss, s1;
                            var oParent;

                            oParent = oEle.parentElement;
                            s = oEle.outerHTML;
                            i = s.toLowerCase().indexOf('<option');

                            if (i == -1)
                                i = s.toLowerCase().indexOf('</select>');

                            ss = s.substr(0, i);
                            ss = ss + arr.join('');
                            i = s.toLowerCase().indexOf('</select>');
                            ss = ss + s.substr(i, s.length);
                            oParent.innerHTML = ss;
                            //alert('DEBUG\nFillDropDown ss=' + ss);
                        }

                        i = 2;
                        //alert('onchange event set ' + oEle.id);
                        //oEle.attachEvent('onclick', EXhandleSELECTCHANGE);

                        if (sDefault == null) {
                            oEle = document.getElementById(sEle);
                            //oEle.onchange = EXhandleSELECTCHANGE;
                        }
                    }
                }
            }
        }
    }
    catch (e) {
        alert('FillDropDown(' + sEle + ',' + sDictionary + ',' + sPropCodeKey + ') - ' + e.message);
    };
}

function EXhandleSELECTCHANGE() {
    //alert('EXhandleSELECTCHANGE');
    var sMessage;
    sMessage = 'start';
    try {
        var oSelect = window.event.srcElement;
        var sID = oSelect.id;
        var sValue = oSelect.options[oSelect.selectedIndex].value;
        //    alert(sID + ' clicked =' + sValue);
        setCookie(sID, sValue);
    } catch (e) { alert('EXhandleSELECTCHANGE failed ' + e.message + ' ' + sMessage); }
}

// 6.3.2008 - function removed as it is already there
//function getsafe(xNode, XPath) {
//  var xN = xNode.selectSingleNode(XPath);
//  if (xN == null)
//    return '';
//  else
//    return xN.text;
//}

function EXdate2ISO(sDate, sAdd) { // 23.1.2008 - sAdd added as field
    if (typeof (sAdd) == 'undefined')
        sAdd = '';
    // 2.8.2013 - modified to use jQuery datepicker
    var oD;
    if (typeof (sDate) == 'string')
        oD = $.datepicker.parseDate($.datepicker._defaults.dateFormat, sDate);
    else
        oD = sDate;
    var s = $.datepicker.formatDate('yy-mm-dd', oD);
    if (sAdd != '')
        s += sAdd;
    return s;
    //alert('sDate=' + sDate + ' ' + typeof(sDate));
    if (typeof (sDate) == 'string') { // 31.5.2008
        var i, y, m, d;
        i = sDate.indexOf('-');
        d = sDate.substr(0, i);
        sDate = sDate.substr(i + 1);
        //alert('d=' + d + ' sDate=' + sDate);
        i = sDate.indexOf('-');
        m = sDate.substr(0, i);
        y = sDate.substr(i + 1);
        if (d * 1 > 1000) { // 15.9.2008 - swap day and year
            var t = d;
            d = y;
            y = t;
        }
        //alert('m=' + m + ' y=' + y);
        if (m.length == 1)
            m = '0' + m;
        if (d.length == 1)
            d = '0' + d;
        if (typeof (sAdd) == 'undefined' || sAdd == null || sAdd == '')
            return y + '-' + m + '-' + d;
        else // 23.1.2008
            return y + '-' + m + '-' + d + sAdd;
    }
    else {// 31.5.2008 - new functionality
        if (typeof (sAdd) == 'undefined' || sAdd == null || sAdd == '')
            return sDate.getFullYear() + '-' + (sDate.getMonth() + 1) + '-' + sDate.getDate();
        else
            return sDate.getFullYear() + '-' + (sDate.getMonth() + 1) + '-' + sDate.getDate() + sAdd;
    }
}
/**
* http://www.netspade.com/articles/2005/11/16/javascript-cookies/
* Cookie with the given name and value.
*
* name       Name of the cookie
* value      Value of the cookie
* [expires]  Expiration date of the cookie (default: end of current session)
* [path]     Path where the cookie is valid (default: path of calling document)
* [domain]   Domain where the cookie is valid
*              (default: domain of calling document)
* [secure]   Boolean value indicating if the cookie transmission requires a
*              secure transmission
*/
function setCookie(name, value, expires, path, domain, secure) {
    if (typeof (expires) == 'undefined' || expires == 'undefined') { // 15.12.2011
        expires = new Date();
        expires.setDate(expires.getDate() + 365);
    }
    //alert('setCookie(' + name + ',' + value + ',' + expires + ',' + path + ',' + domain + ')');
    var oDoc; // 28.8.2008
    if (parent)
        oDoc = parent.document;
    else
        oDoc = document;
    var s = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
    oDoc.cookie = s;
}

/**
* Gets the value of the specified cookie.
*
* name  Name of the desired cookie.
*
* Returns a string containing value of specified cookie,
*   or null if cookie does not exist.
*/
function getCookie(name) {
    var dc;
    if (parent) { // 28.8.2008 - check cookie from parent
        dc = parent.document.cookie;
        //alert('getCookie - parent - ' + dc);
    }
    else
        dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
    }
    // 12.2.2013 - VBA error
    // var end = document.cookie.indexOf(";", begin);
    var end = dc.indexOf(";", begin);
    if (end == -1) {
        end = dc.length;
    }
    //alert('getCookie(' + name + ')=' + dc.substring(begin + prefix.length, end));
    var value = dc.substring(begin + prefix.length, end);
    if (value.indexOf(';') != -1) // 28.8.2008
        value = value.substr(0, value.indexOf(';'));
    //alert('getCookie(' + name + ')=' + value);
    return unescape(value);
}

/**
* Deletes the specified cookie.
*
* name      name of the cookie
* [path]    path of the cookie (must be same as path used to create cookie)
* [domain]  domain of the cookie (must be same as domain used to create cookie)
*/
function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}

function getElementLeft(Elem) {
    var elem, xPos;
    if (typeof (Elem) == 'object') { // 8.1.2013
        elem = Elem;
    }
    else if (document.getElementById) {
        elem = document.getElementById(Elem);
    } else if (document.all) {
        elem = document.all[Elem];
    }
    xPos = elem.offsetLeft;
    tempEl = elem.offsetParent;
    while (tempEl != null) {
        xPos += tempEl.offsetLeft;
        tempEl = tempEl.offsetParent;
    }
    return xPos;
}

function getElementRight(Elem) { // 16.8.2012
    var xPos = getElementLeft(Elem);
    var elem;
    if (typeof (Elem) == 'object') { // 8.1.2013
        elem = Elem;
    }
    else if (document.getElementById) {
        elem = document.getElementById(Elem);
    } else if (document.all) {
        elem = document.all[Elem];
    }
    xPos = xPos + 1.0 * elem.style.width.replace('px', '');
    return xPos;
}


function getElementTop(Elem) {
    var elem;
    if (typeof (Elem) == 'object') { // 8.1.2013
        elem = Elem;
    }
    else if (document.getElementById) {
        elem = document.getElementById(Elem);
    } else if (document.all) {
        elem = document.all[Elem];
    }
    yPos = elem.offsetTop;
    tempEl = elem.offsetParent;
    while (tempEl != null) {
        yPos += tempEl.offsetTop;
        tempEl = tempEl.offsetParent;
    }
    return yPos;
}


function getElementLeft1(elem) {
    try {
        var xPos;
        xPos = elem.offsetLeft;
        tempEl = elem.offsetParent;
        while (tempEl != null) {
            xPos += tempEl.offsetLeft;
            tempEl = tempEl.offsetParent;
        }
        return xPos;
    } catch (e) { alert('getElementLeft1 ' + elem.id + ' >>> ' + e.message); }
}


function getElementTop1(elem) {
    try {
        yPos = elem.offsetTop;
        tempEl = elem.offsetParent;
        //alert(elem.id + ' ' + elem.innerHTML + ' ' + yPos + ' ' + tempEl);
        while (tempEl != null) {
            yPos += tempEl.offsetTop;
            tempEl = tempEl.offsetParent;
            //alert(yPos + ' ' + tempEl);
        }
        return yPos;
    } catch (e) { alert('getElementTop1 ' + elem.id + ' >>> ' + e.message); }
}

function EXsetFieldFocus(field) {
    //setTimeout('_EXsetFieldFocus(\'' + field + '\')', 50); // 9.1.2009 - timeout to ensure focus is set correctly
    setTimeout('_EXsetFieldFocus(\'' + field + '\')', 150); // 21.3.2011 - IT Case 2018 - timeout to 100, 24.4.2015 100 to 150
}
function _EXsetFieldFocus(field) {
    try {
        var oEle = document.getElementById(field);
        if (oEle != null) {
            oEle.focus();
            //alert('DEBUG\n' + field + ' ' + oEle);
        }
    } catch (e) { }
}
/********************************************************************
*                                                                  *
* Document Library functions                                       *
*                                                                  *
********************************************************************/

function EXgetSiteAreaURL(url) {
    try {
        var i, s, j;
        i = url.indexOf('/sites/');
        j = url.substr(i + 8).indexOf('/');
        return url.substr(0, i + 8 + j);
    } catch (e) { alert('EXgetSiteAreaURL(' + url + ') >>> ' + e.message); }
}
function EXgetDocLibName(url) {
    try {
        var i, s, j, k;
        i = url.indexOf('/sites/');
        j = url.substr(i + 8).indexOf('/');
        k = url.substr(i + 8 + j + 1).indexOf('/');
        return url.substr(i + 8 + j + 1, k);
    } catch (e) { alert('EXgetDocLibName(' + url + ') >>> ' + e.message); }
}
function EXgetSPSDocLibType(url) {
    try {
        var sURL;
        if (url == null || url == '')
            sURL = '' + window.location;
        else
            sURL = url;
        var SPSDocLibName = EXgetDocLibName(sURL);
        if (SPSDocLibName == 'EX_SQLSVC' || SPSDocLibName == 'EX_SPSSVC')
            return '';
        var SPSSiteAreaURL = EXgetSiteAreaURL(sURL);

        var sWhere = 'SPS_SiteAreaURL = \'' + SPSSiteAreaURL + '\' AND SPS_ListName=\'' + SPSDocLibName + '\'';
        //alert(sWhere);
        var oXML = getEntityData('SPS_SiteAreaCollectionView', sWhere, '');
        //alert(oXML.xml);
        s = getsafe(oXML, '//SPS_ListTypeForeign');
        oXML = null;
        return s;
    } catch (e) { alert('EXgetSPSDocLibType ' + e.message); }
}
function EXSubmitUploadForm() {
    // Don't do anything for folders
    if (queryString("Type") == "1")
        return true;

    // Try to modify filename (target) only
    // Will it work - would be great
    var oField;  // = document.getElementById('urn:schemas-microsoft-com:office:office#FileLeafRef');
    oField = document.getElementById('onetidIOFile');
    var s, i;
    s = oField.value;
    i = s.lastIndexOf('\\');
    s = s.substring(0, i) + '\\gnyf.pdf';

    var b, bDocID;
    // DocumentID can be empty - we need to set a value before we invoke validate
    var EXDocumentID = EXgetField('EXDocumentID'); //document.getElementById('urn:schemas-microsoft-com:office:office#EXDocumentID');
    bDocID = false;
    if (EXDocumentID.value == '') {
        EXDocumentID.value = '000000001';
        bDocID = true;
    }
    // Don't do anything unless the form is valid
    b = exfrm.FValidate(true);
    if (bDocID) {
        EXDocumentID.value = '';
    }
    if (!b)
        return false;

    // Exformatics Validation of fields
    b = EXValidateForm();
    if (!b)
        return false;

    // Does the file already exists?
    if (FileName == '')
        b = EXFileExists();
    else
        b = true;

    b = EXSetID(FileName, b);
    if (b) {
    };
    if (!b) {
        alert('EXSubmitUploadForm - error in submission - please fix');
        return false;
    }

    //oField.value = s; // Doesn't work - cannot change value of INPUT in javascript

    //  return true; // stuff below doesn't work  
    if (oEXDocLibFunction.EXSubmitFormCustom != null)
        return oEXDocLibFunction.EXSubmitFormCustom();
    else
        return true;
}

function EXgetFormFieldNames() {
    try {
        var ifld;
        var fld;
        var stName;
        var oField;
        var s = "";
        for (ifld = 0; ifld < exfrm.ifldMax; ifld++) {
            fld = exfrm.rgfld[ifld];
            if (s != "")
                s = s + ",";
            stName = fld.stName;
            s = s + stName;
        }
        return s;
    } catch (e) { alert('EXgetFormFieldNames ' + e.message); }
}
function EXInitializeEditDlg() {
    try {
        exfrm = frm;
        EXSetID('', false);
        EXProtectEXDocumentID(0);
        //if (window['EXaddDropDownList']) {
        if (oEXDocLibFunction.bAddDropDownList != null) {
            EXaddDropDownList(EXaddDropDownFields());
        }
        /*
        //if (window['EXgetCustomFileName']) {
        if (oEXDocLibFunction.EXgetCustomFileName != null) {
        var oEle = document.getElementById('onetidIOFile');
        oEle.readOnly = true;
        }
        */
        if (oEXDocLibFunction.EXCustomFieldHandling != null) {
            var ifld;
            var fld;
            var stName;
            var oField;
            for (ifld = 0; ifld < exfrm.ifldMax; ifld++) {
                fld = exfrm.rgfld[ifld];
                stName = fld.stName;
                oField = EXgetField(stName);
                // if (window['EXcustomFieldHandling']) {
                oEXDocLibFunction.EXCustomFieldHandling(stName, oField);
            } // for
        }
    } catch (e) { alert('EXInitializeEditDlg ' + e.message); }
}

function EXInitializeEditForm() {
    try {
        exfrm = frm;
        // 25/10-2006 - if DocumentId is empty - add a value NOW
        var EXDocumentID = EXgetField('EXDocumentID');
        if (EXDocumentID == null) {
            alert('EXDocumentID not found - retry');
            return false;
        }
        if (EXDocumentID.value == '') {
            EXDocumentID.value = getEXDocumentID(0);
        }
        EXProtectEXDocumentID(0);
        //if (window['EXaddDropDownList']) {
        if (oEXDocLibFunction.bAddDropDownList != null) {
            EXaddDropDownList(EXaddDropDownFields());
        }

        //if (window['EXgetCustomFileName']) {
        if (oEXDocLibFunction.EXgetCustomFileName != null) {
            var oEle = document.getElementById('onetidIOFile');
            oEle.readOnly = true;
        }

        var oSubmit = document.getElementById('diidIOSaveItem');
        if (oSubmit == null)
            alert('oSubmit is null');
        else {
            /* Unfortunately this doesn't work - href cannot be updated dynamically
            // add validation event
            var href = oSubmit.href;
            var i;
            i=href.indexOf(':');
            href = href.substr(0,i) + ':alert(\'hej\');' + href.substr(i+1);
            // alert(href);
            oSubmit.href = href;
            //      alert('oSubmit validate? ' + oSubmit.outerHTML);
            //      alert('oSubmit validate? ' + oSubmit.innerHTML);
            */
        }
        if (oEXDocLibFunction.EXCustomFieldHandling != null) {
            var ifld;
            var fld;
            var stName;
            var oField;
            for (ifld = 0; ifld < exfrm.ifldMax; ifld++) {
                fld = exfrm.rgfld[ifld];
                stName = fld.stName;
                oField = EXgetField(stName);
                // if (window['EXcustomFieldHandling']) {
                oEXDocLibFunction.EXCustomFieldHandling(stName, oField);
            } // for
        }
    } catch (e) { alert('EXInitializeEditForm ' + e.message); }
}
function EXInitializeUploadForm() {
    //try {
    FileName = queryString('File');
    EXProtectEXDocumentID(0);
    exfrm = frm;
    //  if (window['EXAddExtraUploadButton']) {
    if (oEXDocLibFunction == null)
        alert('oEXDocLibFunction is null');
    if (oEXDocLibFunction.bAddExtraUploadButton) {
        EXAddExtraUploadButton(0);
    }
    //if (window['EXaddDropDownList']) {
    if (oEXDocLibFunction.bAddDropDownList) {
        var s = EXgetFormFieldNames();
        EXaddDropDownList(s);
    }
    var oXML;
    if (FileName == '') {
        // Retrieve document default values?
        oXML = null;
        //if (window['EXgetDefaultValues'])
        if (oEXDocLibFunction.EXgetDefaultValues != null) {
            //alert('EXgetDefaultValues - will be invoked');
            oXML = oEXDocLibFunction.EXgetDefaultValues(EXgetFormFieldNames());
        }
    }
    else {
        oXML = EXgetDocumentMetaData(getAbsoluteURL(FileName));
    }
    if (oXML != null) {
        // Retrieve attributes from existing file and place on form
        var oProp;
        var ifld;
        var fld;
        var stName;
        var oField;
        var s
        for (ifld = 0; ifld < exfrm.ifldMax; ifld++) {
            fld = exfrm.rgfld[ifld];
            stName = fld.stName;
            //oField = document.getElementById('urn:schemas-microsoft-com:office:office#' + stName);
            oField = EXgetField(stName);
            // if (window['EXcustomFieldHandling']) {
            if (oEXDocLibFunction.EXCustomFieldHandling != null) {
                if (oField.value != '') {
                    oEXDocLibFunction.EXCustomFieldHandling(stName, oField);
                }
            }
            oProp = oXML.selectSingleNode("//" + stName);

            if (oProp == null) {
                s = '';
            }
            else {
                s = oProp.text;
            }
            if ((oField != null) && (s != '')) {
                oField.value = s;
            } // if

        } // for
    } // if FileName

    // } catch (e) {alert('EXInitializeUploadForm - ' + e.message);}
} // EXInitializeUploadForm

function EXPrintSpecial(title, bTR, sDiv) {
    var sMessage = 'start';
    if (sDiv == '' || sDiv == null)
        sDiv = "EXprintPart";
    try {
        var html = '<HTML>\n<HEAD>\n';
        if (document.getElementsByTagName != null) {
            var headTags = document.getElementsByTagName("head");
            if (headTags.length > 0) {
                html += headTags[0].innerHTML;
            }
        }

        if (bTR) {
            html += '<style>tr {height: 70px;}</style>';
        }

        html = html.replace('src="/', 'src=' + EXgetSVCURL() + '/');
        html = html.replace('src="/', 'src=' + EXgetSVCURL() + '/');
        html = html.replace('src="/', 'src=' + EXgetSVCURL() + '/');
        html = html.replace('src="/', 'src=' + EXgetSVCURL() + '/');
        html = html.replace('LINK href="/', 'LINK href="' + EXgetSVCURL() + '/');
        html = html.replace('LINK href="/', 'LINK href="' + EXgetSVCURL() + '/');
        html += '\n</HEAD>\n<BODY>\n';
        var ii, jj;
        // replace title
        sMessage = 'title';

        if (title != null) {
            var t = prompt(LEX_PrintEnterTitle, title);
            if (t == null)
                return;
            title = t;
            ii = html.indexOf('<TITLE');
            if (ii == -1)
                ii = html.indexOf('<title');
            sMesage = "ii=" + ii;
            jj = html.substr(ii).indexOf('</TITLE>');
            if (jj == -1)
                jj = html.substr(ii).indexOf('</title>');
            sMessage = "jj=" + jj;
            html = html.substr(0, ii - 1) + '<TITLE>' + title + '</TITLE>' + html.substr(ii + jj + 8);
        }

        // remove browseris
        sMessage = "html";
        ii = html.indexOf('browseris.mac');
        if (ii > 0) {
            jj = html.substr(ii).indexOf('/SCRIPT>');
            if (jj == -1)
                jj = html.substr(ii).indexOf('/script>');
            ii = ii - 13; // <script start
            html = html.substr(0, ii - 1) + html.substr(ii + jj + 13 + 7 + 1);
        }

        var printReadyElem = document.getElementById(sDiv);
        if (printReadyElem != null) {
            var sHtml;
            sHtml = RemoveHREF(printReadyElem.innerHTML);
            html += RemoveOnClick(sHtml);

        }
        else {
            sMessage = 'Unknown';
            alert(LEX_PrintUnknownDiv.format(sDiv));
            return;
        }

        html += '\n</BODY>\n</HTML>';

        //var printwin = window.showModalDialog('','PrintSpecial','dialogWidth:800px;dialogHeight:800px;toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,copyhistory=no,resizable=no,modal=yes'); 
        sMessage = "printWin";
        var printWin = window.open("", "printSpecial");
        if (printWin == null) {
            alert('Kan ikke printe - pop-up blocker?');
            return;
        }
        printWin.document.open();
        printWin.document.write(html);
        printWin.document.close();
        sMessage = "printWin print";
        printWin.print();
    } catch (e) { alert('EXPrintSpecial(' + title + ',' + bTR + ',' + sDiv + ') - ' + sMessage + ' >>> ' + e.message); }
}

function EXFixGenericPath(URL, FolderParams) {
    try {
        //var FolderParams;
        if (FolderParams == null || FolderParams == '')
            FolderParams = queryString('DL_FolderParams');
        //alert('FolderParams=' + FolderParams);
        var i, j, SiteG, DocLibG, FolderPG;
        i = FolderParams.indexOf('/');
        if (i > 0) {
            SiteG = FolderParams.substr(0, i);
        }
        else {
            SiteG = '';
        }
        // alert(i);
        DocLibG = FolderParams.substr(i + 1);
        j = DocLibG.indexOf('/');
        // alert(j + ' ' + DocLibG);
        FolderPG = DocLibG.substr(j + 1);
        DocLibG = DocLibG.substr(0, j);
        //alert(URL + ' %0=' + SiteG + ' %1=' + DocLibG + ' %2=' + FolderPG);
        URL = URL.replace(/%0%/g, SiteG);
        URL = URL.replace(/%1%/g, DocLibG);
        URL = URL.replace(/#1#/g, DocLibG);
        URL = URL.replace(/%2%/g, FolderPG);
        //alert('EXFixGenericPath ' + URL);
        if (false) { // LO specific code to create folder
            // alert('URL=' + URL);
            var sURL, i;
            i = URL.indexOf('RootFolder=');
            if (i != -1) {
                sURL = URL.substr(i);
                i = sURL.indexOf('=');
                sURL = getAbsoluteURL(sURL.substr(i + 1));
            }
            else
                sURL = URL;
            // alert('EXFixGenericPath - now check URL ' + sURL);
            if (!EXURLExists(sURL)) {
                // alert(sURL + ' does not exists');
                var oXML;
                var DLEntity, DLId;
                DLEntity = '';
                DLId = queryString('DL_Case');
                if (DLId != '') {
                    DLEntity = 'DL_Case';
                }
                else {
                    DLId = queryString('DL_Meeting');
                    if (DLId != '') {
                        DLEntity = 'DL_Meeting';
                    }
                    else {
                        DLId = queryString('DL_Transmittal');
                        if (DLId != '') {
                            DLEntity = 'DL_Transmittal';
                        }
                        else {
                            DLId = queryString('DL_News');
                            if (DLId != '') {
                                DLEntity = 'DL_News';
                            }
                            else {
                            }
                        }
                    }
                }
                if (DLEntity != '') {
                    //        alert('EXCreateFolder(' + DLEntity + ',' + DLId + ') started');
                    if (!EXCreateFolder(DLEntity, DLId)) {
                        alert('EXCreateFolder(' + DLEntity + ',' + DLId + ') failed');
                    }
                }
            }
        } // if false
        return URL;
    } catch (e) { alert('EXFixGenericPath(' + URL + ') failed ' + e.message); }

}
function EXOpenGenericURL(URL, DLFolderParams, appendparam) {
    //alert('EXOepnGenericURL(' + URL + ',' + DLFolderParams + ',' + appendparam + ') started');
    URL = EXFixGenericPath(URL);
    if (typeof (appendparam) != 'undefined' && appendparam != '' && appendparam != null) {
        if (URL.indexOf('?') == -1)
            URL = URL + '?' + appendparam;
        else
            URL = URL + '&amp;' + appendparam;
    }
    window.open(URL);
}


function EXCopyToClipboard(value) {
    try {
        if (value == '') {
            windows.clipboardData.clearData();
        }
        else {
            window.clipboardData.setData("Text", value);
        }
    }
    catch (e) { alert('EXCopyToClipboard' + e.message); }
}

function EXgetDocLibFromURL(sURL) {
    try {
        // alert(sURL);
        var s, i;
        i = sURL.indexOf('/sites/');
        s = sURL.substr(i + 6 + 1);
        // alert(s);
        i = s.indexOf('/');
        s = s.substr(i + 1);
        // alert(s);
        i = s.indexOf('/');
        s = s.substr(0, i);
        // alert(s);
        return s;
    }
    catch (e) { alert('EXgetDocLibFromURL' + e.message); }
}
//alert('exformatics.js loaded');

function EXInitDate(sDate) {
    var oEle = document.getElementById(sDate);
    if (oEle == null)
        return;
    if (oEle.value == '')
        oEle.value = EXGetTodaysDateDK();
}
function EXSetDate(sDateFrom, sDateTo) {
    //alert('EXSetDate');
    var oEleFrom = document.getElementById(sDateFrom);
    var oEleTo = document.getElementById(sDateTo);
    if (oEleFrom == null || oEleTo == null)
        return;
    oEleTo.value = oEleFrom.value;
}
function EXCheckTime(sPropName) {
    try {
        var oEle = document.getElementById('TIME' + sPropName);
        var s = oEle.value;
        s = s.replace('.', ':');
        var i = s.length;
        //if (i > 2)
        //	s = s.substr(0, i-2) + ':' + s.substr(i-2,2);
        if (s.indexOf(':') == -1)
            if (i > 2)
                s = s.substr(0, i - 2) + ':' + s.substr(i - 2, 2);
            else
                s = s + ':00';
        oEle.value = s;
        if (sPropName == 'DL_Date' && (document.getElementById('TIMEDL_DateTimeEnd'))) {
            var oEle2 = document.getElementById('TIMEDL_DateTimeEnd');
            i = s.indexOf(':');
            var h = 1 * s.substring(0, i);
            var m = 1 * s.substring(i + 1, s.length);
            //alert(h + ' ' + m);
            m = 1 * m + 60;
            if (m >= 60) {
                h = h + 1;
                m = m - 60;
            }
            if (h > 23) {
                oEle = document.getElementById('DL_DateTimeEnd');
                try {
                    //var date = new Date(oEle.value).addDay(1);
                    //oEle.value = EXFormatDate(date);
                } catch (e) { alert('Date ' + e.message); }
                h = h - 24;
            }
            if (m < 10)
                oEle2.value = '' + h + ':0' + m;
            else
                oEle2.value = '' + h + ':' + m;
            oEle2.focus();
        }
    } catch (e) { }
}
function EXhandleDLMeetingDate() {
    var oEle1 = document.getElementById('DL_Date');
    var oEle2 = document.getElementById('DL_DateTimeEnd');
    //alert('EXhandleDLMeetingDate ' + oEle1.value + ' ' + oEle2.value);
    if (oEle2.value == '')
        oEle2.value = oEle1.value;
    try { // DOesn't work at the moment
        var oD1 = new Date(oEle1.value);
        var oD2 = new Date(oEle2.value);
        if (oD1 > oD2)
            oEle2.value = oEle1.value;
    } catch (e) { alert('EXhandleDLMeetingDate ' + e.message); }
}
function EXGetTodaysDate() {
    try {
        var oToday = new Date();
        var year = oToday.getFullYear();
        var month = oToday.getMonth() + 1;
        var day = oToday.getDate();
        //return '' + year + '-' + month + '-' + day;
        return '' + year + '-' + (month < 10 ? '0' : '') + month + '-' + day; // 25.4.2010
    } catch (e) { alert('EXGetTodaysDate ' + e.message); }
}
function EXFormatDate(date) {
    // 2.8.2013 - format date using jQuery datepicker - to support any language format
    var s;
    s = $.datepicker.formatDate($.datepicker._defaults.dateFormat, date);
    return s;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return '' + day + '-' + month + '-' + year;
}
function EXFormatDateTime(date) {
    var s = EXFormatDate(date);
    var hour = date.getHours();
    var minute = date.getMinutes();
    if (minute < 10)
        minute = '0' + minute;
    return s + ' ' + hour + ':' + minute;
}
Date.prototype.addDays = function (days) { this.setDate(this.getDate() + days); } // 14.10.2010
//2.8.2013 now work in ANY language - EXForamtDate return date in proper format
function EXGetTodaysDateDK(iDays) { // 14.10.2010 - iAdd added
    if (typeof (iDays) == 'undefined')
        iDays = 0;
    try {
        var oToday = new Date();
        //alert(iDays + ' ' + oToday);
        if (iDays != 0)
            oToday.addDays(1 * iDays);
        //alert(iDays + ' ' + oToday);
        return EXFormatDate(oToday);
    } catch (e) { alert('EXGetTodaysDateDK ' + e.message); }
}
function EXGetTodaysYear() {
    try {
        var oToday = new Date();
        var year = oToday.getFullYear();
        return '' + year;
    } catch (e) { alert('EXGetTodaysYear ' + e.message); }
}
function EXGetTodaysYearMonth() {
    try {
        var oToday = new Date();
        var year = oToday.getFullYear();
        var month = oToday.getMonth() + 1;
        if (month < 10)
            month = '0' + month;
        return '' + year + month;
    } catch (e) { alert('EXGetTodaysYearMonth ' + e.message); }
}

function EXDLFixDate(sDate) { // yyyy-mm-dd --> dd-mm-yy
    if (sDate.length < 10)
        return '';
    return sDate.substr(8, 2) + '-' + sDate.substr(5, 2) + '-' + sDate.substr(2, 2);
}
function EXDKDate2SQLDate(sDate) { // dd-mm-yyyy --> yyyy-mm-dd
    try {
        // 2.8.2013 - now use jQUery datepicker
        var date = $.datepicker.parseDate($.datepicker._defaults.dateFormat, sDate);
        var s = $.datepicker.formatDate('yy-mm-dd', date);
        return s;
        var d, m, y, i;
        i = sDate.indexOf('-');
        d = sDate.substring(0, i);
        sDate = sDate.substring(i + 1, sDate.length);
        i = sDate.indexOf('-');
        m = sDate.substring(0, i);
        y = sDate.substring(i + 1, sDate.length);
        sDate = '' + y + '-' + m + '-' + d;
        //alert('EXDKDate2SQLDate ' + sDate);
        return sDate;
    } catch (e) { alert('EXDKDate2SQLDate ' + e.message); }
}
function EXgetDocumentURL(URLDocument, DocumentVersion, EXDocumentID) {
    try {
        var oMeta = EXgetDocumentMetaData(URLDocument);
        var oVersion = getsafe(oMeta, 'owshiddenversion');
        if (oVersion == DocumentVersion) {
            return URLDocument;
        }
        else {
            var i, j, s1, s2;
            i = URLDocument.indexOf('/sites');
            j = URLDocument.substr(i + 7).indexOf('/');
            s1 = URLDocument.substr(0, i + 7 + j + 1);
            s2 = URLDocument.substr(i + 7 + j);
            // alert('s1=' + s1 + ' s2=' + s2);
            URLDocument = s1 + '_vti_history/' + DocumentVersion + s2;
            // alert('URLDocument=' + URLDocument);
            return URLDocument;
        }
    } catch (e) { alert('EXgetDocumentURL(' + URLDocument + ', ' + DocumentVersion + ', ' + EXDocumentID + ') ' + e.message); }
}

function IsNumeric(sText) {
    var ValidChars = "0123456789.";
    var IsNumber = true;
    var Char;

    for (i = 0; i < sText.length && IsNumber == true; i++) {
        Char = sText.charAt(i);
        if (ValidChars.indexOf(Char) == -1) {
            IsNumber = false;
            return IsNumber;
        }
    }
    return IsNumber;
}


// Workflow functionality
function EXwfInitDIV(sWFDIV) {
    try {
        var oEle = document.getElementById(sWFDIV);
        var formLength = document.all.testSelect.length;
        var s, i;
        s = "<table id='EXwftable'><tr>";
        for (i = 0; i < formLength; i++) {
            if (document.all.testSelect[i].selected) {
                s = s + "<a onmouseover='javascript:EXwfover(" + i + ")' onmouseout='javascript:EXwfout(" + i + ")' onclick='javascript:EXwfchange(" + i + ")'><td align='center' id='EXwftd" + i + "' class='EXwfselect' height='29' width='50'>" + document.all.testSelect[i].name + "</td></a>";
            }
            else {
                s = s + "<a onmouseover='javascript:EXwfover(" + i + ")' onmouseout='javascript:EXwfout(" + i + ")' onclick='javascript:EXwfchange(" + i + ")'><td align='center' id='EXwftd" + i + "' class='EXwfunselect' height='29' width='50' >" + document.all.testSelect[i].name + "</td></a>";
            }
        } // for

        s = s + '</tr></table>';
        oEle.innerHTML = s;
    } catch (e) { alert('EXwfInitDIV ' + e.message); }
} // EXwfInitDIV
function EXwfover(i) {
    try {
        var oEle = document.getElementById('EXwftd' + i);
        oEle.className = 'EXwfover';
    } catch (e) { alert('EXwfselectover ' + i + ' ' + e.message); }
}
function EXwfout(i) {
    try {
        var oEle = document.getElementById('EXwftd' + i);
        if (document.all.testSelect[i].selected)
            oEle.className = 'EXwfselect';
        else
            oEle.className = 'EXwfunselect';
    } catch (e) { alert('EXwfselectover ' + i + ' ' + e.message); }
}

function EXwfDoOverOut(b) {
    try {
        var oEle = document.all.testSelect;
        if (b)
            oEle.style.display = '';
        else
            oEle.style.display = 'none';
    } catch (e) { alert('EXwfDoOverOut ' + e.message); }
}
function EXwfchange1() {
    try {
        //alert(document.all.testSelect.value);
        //alert(document.all.testSelect.options[document.all.testSelect.selectedIndex].name + ' ' + document.all.testSelect.selectedIndex);
        var formLength = document.all.testSelect.length;
        var i, iSelect, oEle;
        iSelect = -1;
        for (i = 0; i < formLength; i++) {
            oEle = document.getElementById('EXwftd' + i);
            if (oEle.className == 'EXwfselect') {
                iSelect = i;
                break;
            }
        }
        EXwfchange(document.all.testSelect.selectedIndex, iSelect);
    } catch (e) { alert('EXwfchange1 ' + e.message); }
}
function EXwfchange(i, iSelect) {
    try {
        var s, ii;
        if ((iSelect == null) || (iSelect == undefined))
            iSelect = document.all.testSelect.selectedIndex;
        //alert('EXwfchange ' + i + ' ' + iSelect + ' invoked');
        if (i == iSelect)
            return;

        if (iSelect == -1)
            s = LEX_WFChangeStatusTo.format(document.all.testSelect.options[i].name);
        else
            s = LEX_WFChangeStatusFromTo.format(document.all.testSelect.options[iSelect].name, document.all.testSelect.options[i].name);
        if (confirm(s)) {
            var j;
            var oEle = document.getElementById('EXwftable');
            var oEle2 = oEle.getElementsByTagName('TD');
            for (j = 0; j < oEle2.length; j++) {
                if (j == i)
                    oEle2[j].className = 'EXwfselect';
                else
                    oEle2[j].className = 'EXwfunselect';
            }
            oEle = document.getElementById('testSelect');
            oEle.value = i;
            EXwfupdate();
            //window.location.href = window.location.href;
        }
    } catch (e) { alert('EXwfchange - ' + e.message); }
    return false;
}
function EXwfupdate() {
    try {
        var oCase, oState, i;
        oCase = queryString('LO_PCase');
        i = document.all.testSelect.selectedIndex;
        oState = document.all.testSelect.options[i].value;
        //alert('now update ' + oCase + ' to value ' + oState);
        var oXML;
        oXML = getEntityData('LO_PCase', 'DL_Id=' + oCase, '');
        SetEntityItemValue('LO_PCase', oCase, getsafe(oXML, '//DL_Modified'), 'LO_PCaseState', oState);
        window.location.href = window.location.href;
    } catch (e) { alert('EXwfupdate ' + e.message); }
}
function EXwfSet(i) {
    try {
        if ((i == undefined) || (i == -1) || (i == ''))
            return;
        //alert('EXwfSet ' + i + ' invoked');
        var s, ii;

        var j;
        var oEle = document.getElementById('EXwftable');
        var oEle2 = oEle.getElementsByTagName('TD');
        for (j = 0; j < oEle2.length; j++) {
            if (j == i)
                oEle2[j].className = 'EXwfselect';
            else
                oEle2[j].className = 'EXwfunselect';
        }
        oEle = document.getElementById('testSelect');
        oEle.value = i;
    } catch (e) { alert('EXwfSet - ' + e.message); }
    return false;
}


function trim(sString) {
    while (sString.substring(0, 1) == ' ') {
        sString = sString.substring(1, sString.length);
    }
    while (sString.substring(sString.length - 1, sString.length) == ' ') {
        sString = sString.substring(0, sString.length - 1);
    }
    return sString;
}

function EXAddToFavorites(DLEntity, DLId, DLTitle) {
    try {
        var oXML;
        // Already a favorites
        oXML = getEntityData('DL_Favorites', 'DL_CreatedBy = %WUSER% AND DL_EntityNameForeign = \'' + DLEntity + '\' AND DL_EntityId = ' + DLId, '');
        if (oXML.selectSingleNode('//DL_ENTITYDATA/DL_Favorites') == null) {
            oXML = getEntityData(DLEntity, 'DL_Id = ' + DLId, '');
            var sTitle = '';

            if ((DLTitle != '') && (DLTitle != null)) {
                sTitle = getsafe(oXML, '//' + DLTitle);
            }
            else {
                switch (DLEntity) {
                    case 'DL_Person': sTitle = getsafe(oXML, '//DL_Name'); if (sTitle == '') sTitle = getsafe(oXML, '//DL_FullName'); break;
                    case 'DL_Organisation': sTitle = getsafe(oXML, '//DL_Company'); break;
                    case 'LO_PMeeting': sTitle = getsafe(oXML, '//LO_PMeetingType') + ' ' + getsafe(oXML, '//DL_Date').substr(0, 10); break;
                    case 'DL_ProjectDefinition': sTitle = getsafe(oXML, '//DL_ProjectID') + ' ' + getsafe(oXML, '//DL_ProjectName'); break;
                    case 'EX_Project': sTitle = getsafe(oXML, '//DL_ProjectID') + ' ' + getsafe(oXML, '//DL_ProjectName'); break; // 29.1.2012
                    case 'DL_sAMAccountName': sTitle = getsafe(oXML, '//DL_FullName'); break;
                    case 'DL_BRMConfig': sTitle = getsafe(oXML, '//DL_Company'); break;
                    case 'BRM_Case': sTitle = getsafe(oXML, '//DL_Title'); break;
                    case 'IT_Case': sTitle = getsafe(oXML, '//DL_Title'); break;
                    default: sTitle = getsafe(oXML, '//DL_CaseNo') + ' ' + getsafe(oXML, '//DL_Title'); break;
                }
            }

            // Add object to DL_Favorites
            var xOps = '<DL_Favorites><DELETE/><UPDATE/><INSERT>';
            xOps = '';
            xOps = xOps + '<Row><DL_EntityNameForeign>' + DLEntity + '</DL_EntityNameForeign><DL_EntityId>' + DLId + '</DL_EntityId><DL_Title>' + MakeXMLSafe(sTitle) + '</DL_Title>'; // 29.12.2010 - MakeXMLSafe added
            xOps = xOps + '</Row>';
            //xOps = xOps + '</INSERT></DL_Favorites>';
            //alert(xOps);
            //setEntity('DL_Favorites', xOps);
            var DLId = setEntityDetail('DL_Favorites', xOps);
            //var DLId = getsafe(oX, '//DL_Favorites/DL_Id');
            loadentity('DL_Favorites', DLId); // 4.12.2009
            //alert(sTitle + LEX__FavoritesObjectAdded + ' ' + DLId);
        }
        else {
            //    function loadentity(entity, id, appendparam, keyname, title, bFirstFieldFocus, bReloadOnChange)
            loadentity('DL_Favorites', getsafe(oXML, '//DL_Id'), '', '', LEX_FavoritesAlreadyExists); // 30.12.2009
            //alert(LEX_FavoritesAlreadyExists);
        }
    } catch (e) { alert('EXAddToFavorites ' + e.message); }
    return false; // 24.2.2009
}

//alert('exforamtics.js loaded');


function EXvalidateLength50(oSrc, args) { _EXvalidateLength(oSrc, args, 50); }
function EXvalidateLength100(oSrc, args) { _EXvalidateLength(oSrc, args, 100); }
function EXvalidateLength200(oSrc, args) { _EXvalidateLength(oSrc, args, 200); }
function EXvalidateLength256(oSrc, args) { _EXvalidateLength(oSrc, args, 256); }
function _EXvalidateLength(oSrc, args, iLen) {
    //alert(oSrc.id + ' ' + iLen + ' ' + args.Value);
    args.IsValid = (args.Value.length <= iLen);
}

function EXGotoDictionaryObject(DLPropDictionaryForeign, DLEntityKeyText) {
    var oXML = getEntityData('DL_D620', 'DL_PropDictionaryForeign = \'' + DLPropDictionaryForeign + '\'', '');
    var DLEntityNameForeign = getsafe(oXML, '//DL_EntityNameForeign');
    var DLPropName = getsafe(oXML, '//DL_PropNameForeign');
    var sWhere = DLPropName + ' = \'' + DLEntityKeyText + '\'';
    //alert('EXGotoDictionaryObject ' + sWhere);
    EXGotoObject(DLEntityNameForeign, null, false, sWhere);
}

function EXOpenTask(DLEntity, DLId, BPMResponsible) {
    try {
        var oXML = getEntityData('DL_sAMAccountName', 'DL_sAMAccountName = %DL_sAMAccountName%', '');
        var DLsAMAccountName = getsafe(oXML, '//DL_sAMAccountName/DL_sAMAccountName');
        //alert('DEBUG\nEXOpenTask ' + DLsAMAccountName + ' ' + BPMResponsible);
        if (DLsAMAccountName.toLowerCase() == BPMResponsible.toLowerCase()) // 14.9.2008 - added toLowerCase
            try {
                DLopentask(DLEntity, DLId);
            } catch (e) { loadentity(DLEntity, DLId); }
        else
            loadentity(DLEntity, DLId);
    } catch (e) { alert('EXOpenTask ' + e.message); }
}
function EXSeenTask(DLEntity, DLId, DLModified) { // 14.12.2010
    if (EXGetUserRole() == 0) { // 3.11.2009
        alert(LEX_UserNoAccessCannotCloseTask);
        return;
    }
    SetEntityItemValue(DLEntity, DLId, DLModified, 'DL_SeenByUser', '1');
    var oEle = document.getElementById('EXSeenTask' + DLId);
    if (oEle == null)
        alert('Could not find "EXSeenTask' + DLId + '"');
    else
        oEle.style.display = 'none'; // Once seen don't do anything
}
function EXCloseTaskX(DLEntity, DLId, DLModified, DLENF, DLEId) { // used in the front page web part
    EXCloseTask(DLEntity, DLId, DLModified);
}
function EXCloseTask(DLEntity, DLId, DLModified, bNotApplicable, iApprovalStatus) { // 9.8.2011 bNotApplicable added
    if (typeof (iApprovalStatus) == 'undefined')
        iApprovalStatus = 0;
    if (typeof (bNotApplicable) == 'string') // 21.10.2013 - IT Case 4229
        bNotApplicable = false;
    if (typeof (bNotApplicable) == 'undefined')
        bNotApplicable = false;
    if (EXGetUserRole() == 0) { // 3.11.2009
        alert(LEX_UserNoAccessCannotCloseTask);
        return;
    }
    if (iApprovalStatus > 0) { // 21.8.2013
        var sUser = GetEntityItemWhere('DL_sAMAccountName', 'DL_sAMAccountName=%DL_sAMAccountName%', 'DL_sAMAccountName');
        var sResponsible = GetEntityItemValue('DL_ApprovalTasks', DLId, 'BPM_Responsible');
        if (sResponsible.toLowerCase() != sUser.toLowerCase()) {
            return;
        }
        //SetEntityItemValue(DLEntity,DLId,DLModified,'BPM_PctComplete',1,'BPM_ClosedOnPortal',1,'BPM_ApprovalStatus',iApprovalStatus);
        SetEntityItemValue(DLEntity, DLId, DLModified, 'BPM_Status', 2, 'BPM_ClosedOnPortal', 1, 'BPM_ApprovalStatus', iApprovalStatus);
    }
    else if (bNotApplicable) // 9.8.2011
        SetEntityItemValue(DLEntity, DLId, DLModified, 'BPM_PctComplete', 1, 'BPM_ClosedOnPortal', 1, 'BPM_Status', 5);
    else
        SetEntityItemValue(DLEntity, DLId, DLModified, 'BPM_PctComplete', 1, 'BPM_ClosedOnPortal', 1, 'BPM_Status', 2); // 24.4.2008 - CorpNordic
    try {
        var oEle = document.getElementById('BPMPctComplete' + DLId);
        if (oEle != null)
            oEle.innerHTML = '100%';
        oEle = document.getElementById('EXCloseTask' + DLId); // Close on task image, 21.2.2008
        if (oEle == null) // 14.8.2009
            oEle = document.getElementById('tr' + DLEntity + DLId); // EXDynWP
        else
            oEle = oEle.parentNode.parentNode.parentNode;
<<<<<<< HEAD
        if (oEle != null) // 19-04-2008/JRD: TilfÃ¸jet if-omkring
=======
        if (oEle != null) // 19-04-2008/JRD: Tilføjet if-omkring
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
        {
            oEle.style.textDecoration = 'line-through';
        }
    } catch (e) { alert('EXCloseTask(' + DLEntity + ',' + DLId + ',' + DLModified + ') ' + e.message); }
    if (typeof (EXDynWPRefresh) == 'function') // 16.8.2009 - dynamic reload
        EXDynWPRefresh(DLEntity);
}
function EXAssignTaskToCase(DLId) { // 12.5.2008
    alert('EXAssignTaskToCase(' + DLId + ') not implemented yet');
    var xTask = getEntityData('DL_Tasks', 'DL_Id = ' + DLId, '');
<<<<<<< HEAD
    // 2 drop down lister - een med Sagsgrene - og een med recent objekter - skal det vÃ¦re muligt at tilfÃ¸je helt generelt?
=======
    // 2 drop down lister - een med Sagsgrene - og een med recent objekter - skal det være muligt at tilføje helt generelt?
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
}
function EXModifyWPTitle(oEle, sText) {
    //alert('EXModifyWPTitle');
    var oDiv = oEle.parentNode;
    var s = '' + oDiv.id;
    s = s.replace('WebPartWP', 'WebPartTitleWP');
    oDiv = document.getElementById(s);
    /*
    var tblTR = oDiv.getElementsByTagName('div');
    for (var i=0; i<tblTR.length;i++) {
    var trElm = tblTR(i);
    if (trElm.className == 'ms-WPTitle') {
    trElm.innerHTML = trElm.innerHTML + ' hejsa';
    return;
    }
    }
    */
    if (oDiv != null) {
        oEle = oDiv.childNodes[0];
        if (oEle != null)
            oEle = oEle.childNodes[0];
        if (oEle != null)
            oEle = oEle.childNodes[0];
        if (oEle != null)
            oEle.innerHTML = oEle.innerHTML + ' ' + sText;
    }
}
// Clipboard functionality
function EXgetClipboardDataTypeAsText() {
    var i;
    i = EXgetClipboardDataType();
    switch (i) {
        case -200: return '#ERROR: Exformatics Windows Extension not installed - please install';
        case -100: return '#ERROR: Internal exception - please contact system administrator';
        case -1: return 'Clipboard is empty';
        case 1: return 'Text';
        case 2: return 'File';
        case 3: return 'File attachment';
        case 4: return 'Bitmap';
        default: return '';
    }
}
function EXgetClipboardDataType() {
    var oX = getEXUtilities();
    if (!oX)
        return -200;
    var s = oX.getClipboardDataType();
    oX = null;
    return s;
}
function EXgetClipboardFileName() {
    var oX = getEXUtilities();
    if (!oX)
        return;
    var s = oX.getClipboardFileName();
    oX = null;
    return s;
}
function EXUploadClipboardToDocLib(sServer, DL_Entity, DL_Id, DL_FolderType, sProperties) {
    var oX = getEXUtilities();
    if (!oX)
        return;
    var s = oX.UploadClipboardToDocLib(sServer, DL_Entity, DL_Id, DL_FolderType, sProperties);
    oX = null;
    return s;
}
function EXhandlePasteFile(sEle, sServer, DL_Entity, DL_FolderType, DL_Id, sProperties) {
    try {
        var oX = getEXUtilities();
        if (!oX)
            return;

        if (DL_Id == null)
            DL_Id = queryString(DL_Entity);
        //window.event.returnValue = false; // block further values

        var sFile = oX.getClipboardFileName();
        if (sFile == '') {
            alert(LEX_ClipboardNoFile);
            return;
        }
        if (confirm(LEX_UploadFileToServer.format(sFile))) {
            var oEle = null;
            var sHTML = '';
            if (sEle != null) {
                oEle = document.getElementById(sEle);
                sHTML = oEle.innerHTML;
                oEle.innerHTML = 'ZZ';
                oEle = null;
                if (sEle != '') {
                    oEle = document.getElementById(sEle);
                    oEle.innerHTML = 'Please wait' + ' ';
                }
            }
            if (sProperties == '')
                sProperties = '<Props/>';
            sFile = oX.UploadClipboardToDocLib(sServer, DL_Entity, DL_Id, DL_FolderType, sProperties);
            oX = null; // 6.12.2008 - release object
            if (sFile == '#ERROR') {
                alert(LEX_UploadFilesFailed.format(sFile));
                if (oEle != null) oEle.innerHTML = sHTML;
            }
            else {
                if (oEle != null) oEle.innerHTML = LEX_UploadFilesCompleted.format(sFile);
                alert('File uploaded ' + sFile);
                EXReload();
            }
        }
    } catch (e) { alert('EXhandlePasteFile ' + e.message); }
    return;
}
function EXClipboardToEntity(sServer, DLEntity, DLFolderParams, DLFolderType) {
    alert('EXClipboardToEntity - not implemented yet!');
}

function DLLinkObject2Object(DLEntity, sVars, sValues, message, errmsg, bDelay, bDontLoad) {
    try {
        var i;
        var aVars = sVars.split(",");
        var aValues = sValues.split(",");
        if (aVars.length != aValues.length) {
            alert('DLLinkObject2Object length issue ' + sVars + ':' + sValues);
            return;
        }
        var sWhere = '';
        for (i = 0; i < aVars.length; i++) {
            if (i > 0)
                sWhere = sWhere + ' AND ';
            sWhere = sWhere + ' ' + aVars[i] + ' = \'' + aValues[i] + '\'';
        }
        //alert(sWhere);
        var oXML = getEntityData2('count(*)', DLEntity, sWhere, '');
        var c = getsafe(oXML, '//' + DLEntity);
        if (1 * c > 0) {
            alert(errmsg); // 19.8.2008 + ' #=' + c);
            return;
        }
        if (bDelay) {
            newentity2(DLEntity, sKeys, sValues, '');
        }
        else {
            var xOps;
            xOps = '<' + DLEntity + '>';
            for (i = 0; i < aVars.length; i++) {
                xOps = xOps + '<' + aVars[i] + '>' + aValues[i] + '</' + aVars[i] + '>';
            }
            xOps = xOps + '</' + DLEntity + '>';
            var DLId = setEntityDetail(DLEntity, xOps);
            if (message)
                alert(message);
            if (!bDontLoad)
                loadentity(DLEntity, DLId);
        }
    } catch (e) { alert('DLLinkObject2Object ' + e.message); }
}
function DLLinkObject2Object2(DLEntity, sVars, sValues, message, errmsg, bDelay, bDontLoad) { // 8.9.2011 - new version of above - no alerts - but empty string if ok
    try {
        var i;
        var aVars = sVars.split(",");
        var aValues = sValues.split(",");
        if (aVars.length != aValues.length) {
            alert('DLLinkObject2Object length issue ' + sVars + ':' + sValues);
            return;
        }
        var sWhere = '';
        for (i = 0; i < aVars.length; i++) {
            if (i > 0)
                sWhere = sWhere + ' AND ';
            sWhere = sWhere + ' ' + aVars[i] + ' = \'' + aValues[i] + '\'';
        }
        var oXML = getEntityData2('count(*)', DLEntity, sWhere, '');
        var c = getsafe(oXML, '//' + DLEntity);
        if (1 * c > 0) {
            return (errmsg);
        }
        if (bDelay) {
            newentity2(DLEntity, sKeys, sValues, '');
        }
        else {
            var xOps;
            xOps = '<' + DLEntity + '>';
            for (i = 0; i < aVars.length; i++) {
                xOps = xOps + '<' + aVars[i] + '>' + aValues[i] + '</' + aVars[i] + '>';
            }
            xOps = xOps + '</' + DLEntity + '>';
            var DLId = setEntityDetail(DLEntity, xOps);
            if (!bDontLoad)
                loadentity(DLEntity, DLId);
        }
        return '';
    } catch (e) { return ('DLLinkObject2Object2 ' + e.message); }
}
function EXApproveDocumentProcess(DLEntityNameForeign, DLEntityId) { // 30.1.2012
    var oXML = ExecuteProcedure('EXApproveDocumentProcess @DLEntityNameForeign=\'' + DLEntityNameForeign + '\',@DLEntityId=' + DLEntityId + ',@WUser=%WUSER%');
    //alert(oXML.xml);
    var url = getsafe(oXML, '//Url');
    //alert(url);
    if (url != '')
        eval(url);
    else {
        EXDocBasketRefresh();
    }
}
// 23-9-2007 - code moved from LO --> general (FTF,Symphogen)
function EXDocBasketToEntity(DLEntity, DLId, bFromDocBasket, bSilence) { // 17.9.2008
    if (typeof (bSilence) == 'undefined')
        bSilence = false;
    if (typeof (bFromDocBasket) == 'undefined') // 17.9.2008
        bFromDocBasket = false;
    if (DLId == '') return; // 1.4.2008
    if (DLEntity == 'DL_Transmittal') {
        EXMoveDocBasketToTransmittal(DLId);
        EXReload();
    }
    else {
        //alert('EXDocBasketToEntity(' + DLEntity + ',' + DLId + ') not implemented yet!');
        ExecuteProcedure('dbo.EXMoveDocBasket2Entity @DLEntityNameForeign=\'' + DLEntity + '\', @DLEntityId=' + DLId + ', @WUser = %WUSER%'); // 27.2.2008
        //ExecuteProcedure('dbo.EXCopyDocBasket2Entity @DLEntityNameForeign=\'' + DLEntity + '\', @DLEntityId=' + DLId + ', @WUser = %WUSER%');
        //EXDocBasketRefresh(); // 15.4.2008 - update document basket
        //try {EXWPLoadLinkedDocuments('Linked Documents'); } catch (e) {}
        if (bFromDocBasket) { // 17.9.2008
            try {
                EXWPLoadLinkedDocuments(LEX_LinkedDocuments);
            } catch (e) { }
            if (!bSilence)
            //var LEX_DocBasketLinkedCompleted = 'Dokumenter linked til sagen';
                alert(LEX_DocBasketLinkedCompleted);
            EXDocBasketRefresh(); // 2.2.2010
        }
        else
            EXReload();
    }
}

function EXDocBasket2Copy(DLEntity, DLEntityIdParam) { // 06-07-2011 BH IT-Case 679 - 23.6.2012 - UNCLEAR WHAT THIS DOES
    loadcontent2('/ex_resources/EXCopyFiles.html?destination=' + oExBasketFolder, 'Copying!');
}

function EXMoveDocBasketToTransmittal(DL_Transmittal) {
    var oEle = document.getElementById('%WUser%');
    var sUser = '';
    if (oEle != null) {
        sUser = oEle.innerHTML
        //alert(sUser);
    }
    ExecuteProcedure('dbo.EXMoveDocBasketToTransmittal @DLEntityId = ' + DL_Transmittal + ', @WUser = \'' + sUser + '\'');
}

function EXDocBasketNotify() {
    window.open(getAbsoluteURL('/EX_Resources/EXNotify.html'));
}

function EXDocBasket2TransmittalCallback(DLId) { // 11.12.2012 - click action below must point to this function - DL_TitleUnique has this value
    SetRecentValue('DL_Transmittal', DLId);

    EXMoveDocBasketToTransmittal(DLId);
    EXGotoObject('DL_Transmittal', DLId);
    //displayentity2('DL_Transmittal',DLId,'Dokumentpakke...');
}
function EXDocBasket2Transmittal(EntityNameForeign, EntityId) {
    // alert('EXDocBasket2Transmittal');
    var DL_Transmittal, title;
    title = LEX_DocBasketTransmittalTitle.format(queryString('DL_CaseNo'));
    newentity2('DL_Transmittal', 'DL_EntityNameForeign,DL_EntityId', EntityNameForeign + ',' + EntityId, '&Action=1390', title); // check 1390 in DL_Action
    return;
    DL_Transmittal = _EXnewTransmittal(EntityNameForeign, EntityId, title);
    SetRecentValue('DL_Transmittal', DL_Transmittal);

    // Flyt alle dokumenterne i kurven til forsendelsen
    EXMoveDocBasketToTransmittal(DL_Transmittal);
    if (true) { // 3.1.2010
        displayentity2('DL_Transmittal', GetRecentValue('DL_Transmittal'), 'Dokumentpakke...');
    }
    else {
        alert(LEX_DocBasketTransmittalCreated.format(title));
        //EXGotoObject('DL_Transmittal',GetRecentValue('DL_Transmittal')); // 1.4.2008 - FKIL
        EXReload();
    }
}

function EXLinkToCase(DLEntity, DLId) { // 29.5.2008
    //alert('EXLinkToCase(' + DLEntity + ',' + DLId + ') invoked');
    if (DLEntity == '' || DLId == '' || DLId == 0)
        return;
    var DLEntity2 = queryString('ForeignEntity', true);
    var DLEntityId2 = queryString('ForeignId', true);
    //alert(DLEntity2 + ' ' + DLEntityId2);
    if (DLEntity2 == '' || DLEntityId2 == '')
        return;
    var xOps = '<DL_Case2Case>';
    xOps = xOps + '<DL_EntityNameForeign2>' + DLEntity + '</DL_EntityNameForeign2><DL_EntityId2>' + DLId + '</DL_EntityId2><DL_EntityNameForeign>' + DLEntity2 + '</DL_EntityNameForeign><DL_EntityId>' + DLEntityId2 + '</DL_EntityId><DL_IsHierarchyLink>1</DL_IsHierarchyLink>';
    xOps = xOps + '</DL_Case2Case>';
    //alert(xOps);
    var DLCase2Case = setEntityDetail('DL_Case2Case', xOps);
    //alert('EXLinkToCase - Linked to case ' + DLCase2Case + ' now EXGotoObject(' + DLEntity + ',' + DLId + '1 )');
    EXGotoObject(DLEntity, DLId); // Goto page after link
    //alert('EXGotoObject - completed - strange');
    //return false; // Do we really need this?
}
var sEXEntity; // 6.6.2010
var sEXEntityId;
function EXInitMainEntity(DLEntity, DLAction, DLEntityIdParam, DLParams, DLTask, appendparams, bDoNotLoad, bDisplayEntity, bShowCaseLog, DLCaseProtected) { // 3.6.2008 -  bDisplayEntity added - used in meeting // 18.8.2008  bShowCaseLog added
    if (typeof (DLCaseProtected) == 'undefined' || DLCaseProtected == null) // 12.8.2009
        DLCaseProtected = '0';
    if (typeof (bShowCaseLog) == 'undefined' || bShowCaseLog == null)
        bShowCaseLog = false;
    if (bDoNotLoad == null || bDoNotLoad == 'undefined')
        bDoNotLoad = false;
    if (appendparams == null || typeof (appendparams) == 'undefined')
        appendparams = '';
    if (typeof (bDisplayEntity) == 'undefined')
        bDisplayEntity = false;
    sEXEntity = DLEntity; // 6.6.2010
    //alert('DEBUG\nEXInitMainEnttiy(' + DLEntity + ',' + DLAction + ',' + DLEntityIdParam + ',' + DLParams + ',' + DLTask + ',' + bDoNotLoad + ',' + bDisplayEntity + ',' + bShowCaseLog + ')');
    var bOK = true;
    //alert(DLParams);
    if (appendparams == '')
        appendparams = 'Action=50';
    if (DLParams != '') {
        var oParams = DLParams.split(',');
        for (var i = 0; i < oParams.length; i++) {
            if (queryString(oParams[i]) == '') {
                bOK = false;
                break;
            }
        }
    }
    var DLId = queryString(DLEntityIdParam);
    sEXEntityId = DLId;
    if (typeof (EXSetUserRole) == 'function') { // 3.11.2009
        EXSetUserRole(DLEntity, DLId);
    }
    if (typeof (EXUserLastSeen) == 'function') // 21.8.2010
        EXUserLastSeen();
    if (DLId == '')
        bOK = false;
    if (!bOK) {
        //alert(DLId);
        //if (DLId == '')
        //	DLId = '0';
        //EXGotoObject(DLEntity, DLId);
        if (DLAction == 'new') {
            var sForeignEntity = trim(queryString('ForeignEntity')); // 19.8.2008
            var sForeignId = trim(queryString('ForeignId'));
            var DLENF = '';
            var DLEId = '';
            if (sForeignEntity != '') {
                DLENF = 'DL_DenormEntityNameForeignAndId,DL_EntityNameForeign,DL_EntityId';
                DLEId = '1,' + sForeignEntity + ',' + sForeignId;
            }
            var sDLWFCaseType = queryString('DLWFCaseType'); // 31.1.2010 - Tele logic
            var sTitle = '';
            if (sDLWFCaseType != '') {
<<<<<<< HEAD
                // 11.3.2011 - opret ny sag vÃ¦lger rigtige objekt
=======
                // 11.3.2011 - opret ny sag vælger rigtige objekt
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
                var oCaseType = getEntityData('DL_WFCaseType', 'DL_Id = ' + sDLWFCaseType, '');
                var DLWFCaseEntityData = getsafe(oCaseType, '//DL_WFCaseEntityData');
                if (DLWFCaseEntityData != '') { // 29.8.2012 - default values won't work if workflow specific data
                    //if (1 == 0) { // 25.2.2012 - use default values rather than foreign keys
                    if (DLENF != '') {
                        DLENF += ',';
                        DLEId += ',';
                    }
                    DLENF += 'DL_WFCaseType';
                    DLEId += sDLWFCaseType;
                }
                else {
                    if (appendparams == 'undefined' || typeof (appendparams) == 'undefined')
                        appendparams = '';
                    if (appendparams != '')
                        appendparams += '&';
                    appendparams += 'DefaultKeys=DL_WFCaseType&DefaultValues=' + sDLWFCaseType; // 25.2.2012
                }
                //alert(oCaseType.xml + ' ' + DLWFCaseEntityData);
                if (DLWFCaseEntityData != '')
                    DLEntity += 'WF' + DLWFCaseEntityData;
                sTitle = LEX_CreateNew + ' ' + getsafe(oCaseType, '//DL_Title'); // 25.2.2012
            }
            //alert('DEBUG\n' + sDLWFCaseType + ' ' + DLENF + ':' + DLEId + '\nDLEntity=' + DLEntity);
            if (1 == 0 && (DLEntity == 'DL_Activities' || DLEntity == 'DL_EmployeeCase'))
                newentity2(DLEntity, '', '', 'view=ADD:DL_CaseProtected,DL_SecurityPersons,DL_ADSecurityGroups&' + appendparams);
            //			else if (DLEntity == 'DL_ProjectDefinition')
            //				newentity2(DLEntity,'','','Action=159',sTitle);
            else
                newentity2(DLEntity, DLENF, DLEId, appendparams, sTitle);
        }
        else {
            //EXLoadQuickSearch(DLEntity);
            EXLoadQuickSearch(DLEntity, false, null, null, null, true); // 1.9.2008
        }
    }
    else {
        //		alert('DLAction=' + DLAction + 'lll');
        if (DLAction == 'new') { // add parameters
            var sForeignEntity = queryString('ForeignEntity');
            var sForeignId = queryString('ForeignId');
            var DLENF = '';
            var DLEId = '';
            if (sForeignEntity != '') {
                DLENF = 'DL_DenormEntityNameForeignAndId,DL_EntityNameForeign,DL_EntityId';
                DLEId = '1,' + sForeignEntity + ',' + sForeignId;
            }
            //alert(DLENF + ':' + DLEId);
            newentity2(DLEntity, DLENF, DLEId, appendparams);
        }
        else {
            //alert('Correct');
            SetRecentValue(DLEntityIdParam, DLId);
<<<<<<< HEAD
            if (true) { // 19.5.2009 - browserens titel sÃ¦ttes til sagsnr og sagstitel
=======
            if (true) { // 19.5.2009 - browserens titel sættes til sagsnr og sagstitel
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
                //var oXX = getEntityData('DL_CMAllView',"DL_EntityNameForeign = '" + DLEntity + "' AND DL_EntityId=" + DLId,'');
                var oXX = getEntityData(DLEntity, 'DL_Id=' + DLId, ''); // 7.11.2011 - IT Case 2703 - faster retrieval of title
                var sTitle, sCaseNo;
                sTitle = getsafe(oXX, '//DL_Title');
                sCaseNo = getsafe(oXX, '//DL_CaseNo');
                if (DLEntity == 'DL_ProjectDefinition' || DLEntity == 'EX_Project') { // 29.1.2012
                    sTitle = getsafe(oXX, '//DL_ProjectName');
                    sCaseNo = getsafe(oXX, '//DL_ProjectID');
                }
                //alert('DEBUG\n ' + sTitle);
                document.title = getsafe(oXX, '//DL_EntityDescription') + ' ' + sCaseNo + ' ' + sTitle;
            }
            if (DLTask != '')
                loadentity('DL_Tasks', DLTask);
            else
                if (!bDoNotLoad && (DLEntity == 'DL_BRMConfig' || DLEntity == '_DL_BRMConfig') || bShowCaseLog) { // 1.4.2008 - FKIL
                    //loadcontent2(getAbsoluteURL('/EX_SQLSVC/DynamicList.html?DLEntity=DL_CaseDocuments&DLView=DL_CaseNotesView&Where=DL_EntityNameForeign=\'DL_BRMConfig\' AND DL_EntityId = ' + DLId + '&OrderBy=DL_Modified DESC&PropList=DL_Title&Action=none'),LEX_Notes);
                    //loadcontent2(getAbsoluteURL('/EX_SQLSVC/DynamicList.html?DLEntity=DL_CaseDocuments&DLView=DL_HTMLNotesView&Where=DL_EntityNameForeign=\'' + DLEntity + '\' AND DL_EntityId = ' + DLId + '&OrderBy=DL_Modified DESC&PropList=DL_Title&Action=none'),LEX_Notes);
                    //var sUrl = getAbsoluteURL('/EX_Resources/EXExformation.html?DL_EntityNameForeign=' + DLEntity + '&DL_EntityId=' + DLId);
                    //var sL = "loadcontent2('" + sUrl + "','" + LEX_Notes + "')";
                    //var LEX_KnowledgeExchanges = 'Aktivitetsstr\370m...'; // 'Knowledge exchanges...';
                    //var sL = "loadcontent2('" + sUrl + "','" + LEX_KnowledgeExchanges + "')";
                    //setTimeout(sL,1);
                    //loadcontent2(sUrl,LEX_Notes);
                    //loadcontent2(sUrl, LEX_KnowledgeExchanges);
					var s1 = 'EXLoadActivityStream(\''+DLEntity+'\', '+DLId+')';
					setTimeout(s1,1000); // 6.3.2017
                    //EXLoadActivityStream(DLEntity, DLId);
                }
                else if (!bDoNotLoad) { // 18.8.2008 - else statement added
                    var sL;
                    if (bDisplayEntity)
                        displayentity(DLEntity, DLId);
                    //sL = "displayentity('" + DLEntity + "', " + DLId + ")";
                    else
                        loadentity(DLEntity, DLId, appendparams);
                    //sL = "loadentity('" + DLEntity + "', " + DLId + ",'" + appendparams + "')";
                    //setTimeout(sL,1);
                }
        }
    }
    // 15.8.2009 - EXDynWP - AJAX web parts
    //alert(EXDynWPPageInit);
    if (typeof (EXDynWPPageInit) == 'function') {
        //alert('EXDynWPPageInit now start');
        EXDynWPPageInit(DLEntity, DLEntityIdParam + ',' + DLParams);
    }
    //else
    //	alert('EXDynWPPageInit not found');
    // 8.6.2008
    if (typeof (EXDoInitFolderDocsBasket) == 'function') {
        //alert('DEBUG\nEXDoInitFolderDocsBasket starts now');
        try {
            //setTimeout("EXDoInitFolderDocsBasket()",1);
            EXDoInitFolderDocsBasket();
        } catch (e) { alert('DEBUG\nEXDoInitFolderDocsBasket >>> ' + e.message); }
    }
    //else alert('EXDoInitFolderDocBsket not defined');
    // 26.2.2007 - AJAXDocumentBasket
    var oBasket = document.getElementById('AJAXDocumentBasket');
    //if (oBasket != null)
    //	EXInitAJAXDocumentBasket(DLEntity, DLEntityIdParam);
    //alert('type=' + typeof(InitAJAXDocumentBasket));
    if (typeof (InitAJAXDocumentBasket) == 'function') {
        //alert('Function');
        ///setTimeout("InitAJAXDocumentBasket()",1);
        InitAJAXDocumentBasket();
    }
    // 13.4.2008 - Floating document basket
    if (typeof (InitAJAXFloatingDocumentBasket) == 'function') {
        //setTimeout("InitAJAXFloatingDocumentBasket()",1);
        InitAJAXFloatingDocumentBasket();
    }
    // 23.5.2010 - add function keys
    if (typeof (EXInitFunctionKeys) == 'function') {
        //setTimeout("EXInitFunctionKeys()",1);
        EXInitFunctionKeys();
    }
    // 12.2.2015 - ensure parent web part works
    var oPE = document.getElementById('EXParentObject');
    if (oPE != null) {
        var a = oPE.innerHTML.split(':');
        var x = getEntityData(a[0], 'DL_Id=' + a[1], '');
        var s = getsafe(x, '//DL_Title');
        if (s != '')
            oPE.innerHTML = s;
    }
    return true;
}

// Buttons
//  01 - Empty document basket button
//  02 - Notify document basket
//  04 - Create transmittal based on document basket
//  08 - Create new email with document basket documents contained
//  16 - Copy document basket to actual business object as linked documents
//  32 - Export document basket to desktop
//  64 - EXMoveCopyDocuments action
// 128 - Convert to PDF
// 256 - paste to folder ???
// 512 - Create document approval process (similar to transmittal - but runs a SQL sp - customize)

var sEXAJAXDocBasketDiv;
var sEXDocBasketFooter; // 18.12.2009
function EXInitAJAXDocumentBasket(DLEntity, DLEntityIdParam, iButtons) { // 26.2.2008
    try {
        if (DLEntityIdParam == null || DLEntityIdParam == '')
            DLEntityIdParam = DLEntity;
        var sHeader = _EXInitAJAXDocumentBasketHeader(DLEntity, DLEntityIdParam, iButtons);
        //alert(sHeader);
        var sEXDocBasketFooter = _EXInitAJAXDocumentBasketFooter(DLEntity, DLEntityIdParam, iButtons); // 18.12.2009
        //alert('EXInitAJAXDocumentBasket(' + DLEntity + ',' + DLEntityIdParam + ',' + iButtons + ')=\n' + sHeader);
        var oBasketHeader = document.getElementById('AJAXDocumentBasketHeader');
        oBasketHeader.innerHTML = sHeader;
        sEXAJAXDocBasketDiv = 'AJAXDocumentBasket';
        var oBasket = document.getElementById(sEXAJAXDocBasketDiv);
        EXDocBasketRefresh();
    } catch (e) { alert('EXInitAJAXDocumentBasket ' + e.message); }
}
function EXDocBasketExport() {// 21.12.2009
    window.open(getAbsoluteURL('/EX_Resources/EXDownloadCase.html?Type=1'), '', 'width=530,height=360,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=auto,copyhistory=no,resizable=yes');
}
function EXBatchPrint() {
    window.open(getAbsoluteURL('/EX_Resources/EXBatchPrint.html'), '', 'width=530,height=360,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=auto,copyhistory=no,resizable=yes');
}
function EXDocBasketJoinSort() { // 4.1.2013
    //loadcontent(getAbsoluteURL('/EX_Resources/EXDocumentBasket.html?ToPDF=true&MergePDF=true&DLEntityNameForeign=' + EXDWPFolderEntityName));
    var bToPDF = 'false';
    if (PDFConverterInstalled())
        bToPDF = 'true';
    loadcontent2(getAbsoluteURL('/EX_Resources/EXDocumentBasket.html?ToPDF=' + bToPDF + '&MergePDF=true&ShowBasket=true&MergePath=RETRIEVE&DLEntityNameForeign=' + EXDWPFolderEntityName), LEX_DocumentBasketSortPDF);
}
function EXDocBasketToStream(DLEntityNameForeign, DLEntityId) { // 15.1.2013
    ExecuteProcedure('EXDocBasketToStream @DLEntityNameForeign=\'' + DLEntityNameForeign + '\',@DLEntityId=' + DLEntityId + ',@WUSER=%WUSER%');
    EXLoadActivityStream(DLEntityNameForeign, DLEntityId);
}
function EXHandleBasketDo(oEle, DLEntity, DLEntityIdParam) { // 18.12.2009
    if (oEle.selectedIndex == 0)
        return;

    switch (oEle.value) {
        case 'EXDocBasketEmpty': EXDocBasketEmpty(); EXInitDocBasket(); break; //5.2.17 update button counter after reset
        case 'EXDocBasketNotify': EXDocBasketNotify(); break;
        case 'EXDocBasket2Transmittal': EXDocBasket2Transmittal(DLEntity, queryString(DLEntityIdParam)); EXDocBasketRefresh(); break;
        case 'EXBRMCreateMail': EXDocBasketCreateMail(DLEntity, queryString(DLEntityIdParam));
            if (typeof (bEXClearBasket) != 'undefined') // 10.1.2013
                if (bEXClearBasket) {
                    EXDocBasketEmpty();
                    EXDocBasketRefresh();
                }
            break; // 16.8.2010 EXBRMCreateMail('','','DL_sAMAccountName',0,'',false); break;
        case 'EXDocBasketExport': EXDocBasketExport(); break;
        case 'EXConvertBasket2PDF': EXConvertBasket2PDF(); break;
        case 'EXDocBasketJoinSort': EXDocBasketJoinSort(); break; // 4.1.2013
        case 'EXDocBasketToStream': EXDocBasketToStream(DLEntity, queryString(DLEntityIdParam)); break; // 15.1.2013
        case 'EXApproveDocumentProcess': EXApproveDocumentProcess(DLEntity, queryString(DLEntityIdParam)); break; // 30.1.2012
        case 'EXDocBasketToEntity': EXDocBasketToEntity(DLEntity, queryString(DLEntityIdParam), false, false);EXInitDocBasket(); break; // 3.1.2010 and EXInitDocBasket(); added to refresh Basked Button Counter 12-FEB-2016
        case 'EXPasteDocuments': EXDocBasket2Copy(DLEntity, queryString(DLEntityIdParam)); EXDocBasketRefresh(); break;
        case 'EXBatchPrint': EXBatchPrint(); EXDocBasketRefresh(); break;
        default: alert('EXHandleBasketDo(' + oEle.value + ',' + DLEntity + ',' + DLEntityIdParam + ') not defined!!!'); break;
    }
    oEle.selectedIndex = 0;
}

function PDFConverterInstalled() {
    //18-11-2011 BH IT-Case 2679
    // return true for Backward compatibility
    try {
        DebugAlert('custPDFConverterInstalled: ' + custPDFConverterInstalled, 100, 'EX_Resources.js.Exformatics.js.PDFConverterInstalled');
        return custPDFConverterInstalled;
    }
    catch (e) {
        DebugAlert('Fejl: ' + e, 50, 'EX_Resources.js.Exformatics.js.PDFConverterInstalled');
        return true;
    }
    return true;
}

function _EXInitAJAXDocumentBasketFooter(DLEntity, DLEntityIdParam, iButtons) { // 18.12.2009
    //28.11.2011 BH: Added iButtonNames
    //var sSel = '&nbsp;<img border="0" src="/EX_Resources/gif/16x16/Wizard.gif"></img><select onchange="EXHandleBasketDo(this,\'' + DLEntity + '\',\'' + DLEntityIdParam + '\')"><options><option value="">' +  LEX_BasketSelectAction + '</option>';
    var sSel = '&nbsp;<select onchange="EXHandleBasketDo(this,\'' + DLEntity + '\',\'' + DLEntityIdParam + '\')"><options><option value="">' + LEX_BasketSelectAction + '</option>';
    if (iButtons & iButtonDelete) // Delete document basket
        sSel += '<option value="EXDocBasketEmpty">' + LEX_EmptyDocumentBasket + '</option>';
    if (iButtons & iButtonNotify) // Notify
        sSel += '<option value="EXDocBasketNotify">' + LEX_NotifyDocumentBasket + '</option>';
    if (iButtons & iButtonTransmittal) // Transmittal - document 
        sSel += '<option value="EXDocBasket2Transmittal">' + LEX_CreateTransmittal + '</option>';
    if (iButtons & iButtonCreateEmail) // Create email
        sSel += '<option value="EXBRMCreateMail">' + LEX_MailFromDocumentBasket + '</option>';
    if (iButtons & iButtonLink) // Link
        sSel += '<option value="EXDocBasketToEntity">' + LEX_LinkDocumentsToEntity + '</option>';
    if (iButtons & iButtonExportBasket) // Export basket to desktop
        sSel += '<option value="EXDocBasketExport">' + LEX_ExportDocumentBasket + '</option>';
    if (iButtons & iButtonConvert2PDF) // 13.3.2009 - Convert 2 PDF // 20.6.2009 - ensure logic is ok
    {
        DebugAlert('test ' + PDFConverterInstalled(), 10, 'test');
        //18-11-2011 BH IT-Case 2679
        if (PDFConverterInstalled()) {
            sSel += '<option value="EXConvertBasket2PDF">' + LEX_DocumentBasket2PDF + '</option>';
        }
    }
    if (iButtons & iButtonJoinBasket) { // 4.1.2013 - Join basket into one document
        //sSel += '<option value="EXDocBasketJoinSort">Sorter kurv, saml til PDF</option>';
        sSel += '<option value="EXDocBasketJoinSort">' + LEX_DocumentBasketSortPDF + '</option>';
    }
    if (1 == 1 || iButtons & iButtonToStream) { // 15.1.2013 - Add basket to activity stream
        sSel += '<option value="EXDocBasketToStream">' + LEX_BasketToStream + '</option>';
    }
    if (iButtons & iButtonCreateDocumentApproval) // 30.1.2012
        sSel += '<option value="EXApproveDocumentProcess">Start document approval</option>';
    if (iButtons & iButtonPasteDocuments) { // 13.3.2009 - Convert 2 PDF // 20.6.2009 - ensure logic is ok
        //var  LEX_DocumentBasketPasteDocuments = 'LEX_DocumentBasketPasteDocuments'; // 30.1.2012 - move to EXLanguage.js ASAP
        sSel += '<option value="EXPasteDocuments">' + LEX_DocumentBasketPasteDocuments + '</option>'; // 30.1.2012 ' around LEX variable removed
    }
    if (iButtons & iButtonPrint)
    //sSel += '<option value="EXBatchPrint">Print basket</option>';
        sSel += '<option value="EXBatchPrint">' + LEX_DocumentBasketPrintDocuments + '</option>';


    sSel += '</options></select>';
    return sSel;
}
function _EXInitAJAXDocumentBasketHeader(DLEntity, DLEntityIdParam, iButtons) { // 13.4.2008
    try {
        if (DLEntityIdParam == '') // 14.4.2008
            DLEntityIdParam = DLEntity;
        var sHeader = '<h3 class="ms-standardheader ms-WPTitle"><nobr><span>' + LEX_DocumentBasket + '&nbsp;';
        sHeader = '<span style="color:white;font-size:12pt;font-family:Arial;font-weight:bold;" ondblclick="void(0);" onmouseover="EXMoveover=true;" onmouseout="EXMoveover=false;" style="cursor:move;height:18px">' + LEX_DocumentBasket + '&nbsp;'; // 9.8.2012
        //sHeader = LEX_DocumentBasket + '&nbsp;';
        //alert(iButtons);
        //	iButtons = 31 // - 4; //127; // MUST BE REMOVED
        if (true) { // 18.12.2009 - use a drop down menu instead of icons
            var sSel = '&nbsp;<img border="0" src="/EX_Resources/gif/16x16/Wizard.gif"></img><select onchange="EXHandleBasketDo(this,\'' + DLEntity + '\',\'' + DLEntityIdParam + '\')"><options><option value="">' + LEX_BasketSelectAction + '</option>';
            if (iButtons & 1) // Delete document basket
                sSel += '<option value="EXDocBasketEmpty">' + LEX_EmptyDocumentBasket + '</option>';
            if (iButtons & 2) // Notify
                sSel += '<option value="EXDocBasketNotify">' + LEX_NotifyDocumentBasket + '</option>';
            if (iButtons & 4) // Transmittal - document 
                sSel += '<option value="EXDocBasket2Transmittal">' + LEX_CreateTransmittal + '</option>';
            if (iButtons & 8) // Create email
                sSel += '<option value="EXBRMCreateMail">' + LEX_MailFromDocumentBasket + '</option>';
            if (iButtons & 16) // Link
                sSel += '<option value="EXDocBasketToEntity">' + LEX_LinkDocumentsToEntity + '</option>';
            if (iButtons & 32) // Export files
                sSel += '<option value="EXDocBasketExport">' + LEX_ExportDocumentBasket + '</option>';
            //if (iButtons & 128) // 13.3.2009 - Convert 2 PDF // 20.6.2009 - ensure logic is ok
            sSel += '<option value="EXConvertBasket2PDF">' + LEX_DocumentBasket2PDF + '</option>';
            if (iButtons & iButtonCreateDocumentApproval) // 30.1.2012
                sSel += '<option value="EXApproveDocumentProcess">Start document approval</option>';
            sSel += '</options></select>';
            //sHeader += sSel;
        }
        else {
            if (iButtons & 1) // Delete document basket
                sHeader = sHeader + '<a href="javascript:EXDocBasketEmpty()"><img border="0" alt="' + LEX_EmptyDocumentBasket + '" src="/EX_Resources/gif/16x16/Delete from cart.gif"></img></a>';
            if (iButtons & 2) // Notify
                sHeader = sHeader + '<a href="javascript:EXDocBasketNotify()">&nbsp;<img border="0" alt="' + LEX_NotifyDocumentBasket + '" src="/EX_Resources/gif/16x16/send mail.gif"></img>&nbsp;</a>';
            if (iButtons & 4) // Transmittal - document package
                sHeader = sHeader + '<a href="javascript:EXDocBasket2Transmittal(\'' + DLEntity + '\', queryString(\'' + DLEntityIdParam + '\'))"><img border="0" alt="' + LEX_CreateTransmittal + '" src="/EX_Resources/gif/16x16/parcel.gif"></img></a>&nbsp;';
            if (iButtons & 8) // Create email
            //sHeader = sHeader + '<a href="javascript:EXBRMCreateMail(\'\',\'\',\'DL_sAMAccountName\',0,\'\',false)"><img border="0" alt="' + LEX_MailFromDocumentBasket + '" src="/EX_Resources/gif/16x16/email attachment.gif"></img></a>&nbsp;'; // 24.4.2008 - fixed function and alt text
                sHeader = sHeader + '<a href="javascript:EXDocBasketCreateMail(\'' + DLEntity + '\', queryString(\'' + DLEntityIdParam + '\'))"><img border="0" alt="' + LEX_MailFromDocumentBasket + '" src="/EX_Resources/gif/16x16/email attachment.gif"></img></a>&nbsp;'; // 24.4.2008 - fixed function and alt text
            if (iButtons & 16) // Link
<<<<<<< HEAD
                sHeader = sHeader + '<a href="javascript:EXDocBasketToEntity(\'' + DLEntity + '\', queryString(\'' + DLEntityIdParam + '\'),true)"><img border="0" alt="' + LEX_LinkDocumentsToEntity + '" src="/EX_Resources/gif/16x16/link.gif"></img></a>&nbsp;'; // 24.4.2008 - fixed function // 17.9.2008 - true tilfÃ¸jet
=======
                sHeader = sHeader + '<a href="javascript:EXDocBasketToEntity(\'' + DLEntity + '\', queryString(\'' + DLEntityIdParam + '\'),true)"><img border="0" alt="' + LEX_LinkDocumentsToEntity + '" src="/EX_Resources/gif/16x16/link.gif"></img></a>&nbsp;'; // 24.4.2008 - fixed function // 17.9.2008 - true tilføjet
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
            //	if (true) // 10.12.2008 - add
            //		sHeader = sHeader + '<a href="javascript:EXDWPNewTask(\'' + DLEntity + '\', queryString(\'' + DLEntityIdParam + '\'))"><img border="0" alt="' + // LEX_CreateTaskDocBasket  + '" src="/EX_Resources/gif/16x16/Tasks.gif"></img></a>&nbsp;';
            if (iButtons & 32) // Export files
                sHeader = sHeader + '<a href="javascript:EXDocBasketExport()"><img border="0" alt="' + LEX_ExportDocumentBasket + '" src="/EX_Resources/gif/16x16/Blue arrow right.gif"></img></a>&nbsp;';
            //if (iButtons & 128) // 13.3.2009 - Convert 2 PDF // 20.6.2009 - ensure logic is ok
            sHeader = sHeader + '<a href="javascript:EXConvertBasket2PDF()"><img border="0" alt="' + LEX_DocumentBasket2PDF + '" src="/_layouts/images/pdf.gif"></img></a>&nbsp;';
            // 14.4.2008 - this functionality is moved into AjaxDocuments
            //	if (iButtons & 64) // EXMoveCopyDocuments - 26.3.2008
            //		sHeader = sHeader + '<a href="javascript:EXMoveCopyDocBasket2Entity(\'' + DLEntity + '\', queryString(\'' + DLEntityIdParam + '\'))"><img border="0" alt="' + LEX_MoveCopyBasketJob + '" src="/EX_Resources/gif/16x16/shopping cart.gif"></img></a>&nbsp;';
            //sHeader = sHeader + '</span><span id="WebPartCaptionWPQ10ADB"></span></nobr></h3>';
        }
        if (iButtons & iButtonShowIcons) { // 9.8.2012
            if (iButtons & 1)
                sHeader += '<a href="javascript:EXDocBasketEmpty()"><img border="0" title="' + LEX_EmptyDocumentBasket + '" alt="' + LEX_EmptyDocumentBasket + '" src="/EX_Resources/gif/16x16/Delete from cart.gif"></img></a>';
            if (iButtons & 8) // Create email
                sHeader = sHeader + '<a href="javascript:EXDocBasketCreateMail(\'' + DLEntity + '\', queryString(\'' + DLEntityIdParam + '\'))"><img border="0" title="' + LEX_MailFromDocumentBasket + '" alt="' + LEX_MailFromDocumentBasket + '" src="/EX_Resources/gif/16x16/email attachment.gif"></img></a>&nbsp;';
            if (iButtons & 128)
                sHeader = sHeader + '<a href="javascript:EXConvertBasket2PDF()"><img border="0" title="' + LEX_DocumentBasket2PDF + '" alt="' + LEX_DocumentBasket2PDF + '" src="/EX_Resources/img/pdf.gif"></img></a>&nbsp;';
        }
        sHeader = sHeader + '</span>'; // 9.8.2012
        //	sHeader = sHeader + '</span></nobr></h3>'; // 28.9.2009
        //alert(sHeader);
        //EXCopyToClipboard(sHeader); // 18.12.2009
        return sHeader;
    } catch (e) { alert('Header >>> ' + e.message); }
}
function EXDocBasketCreateMail(DLEntityNameForeign, DLEntityId) { // IT Case 1289 - add subject - if any
    var subject = '';
    var sFunction = 'EXDocBasketGetTitle' + DLEntityNameForeign;
    if (typeof (sFunction) == 'funcion') {
        sFunction += '(' + DLEntityId + ')';
        try {
            subject = eval(sFunction);
        } catch (e) { subject = ''; }
    }
    //alert(subject);
    return EXBRMCreateMail('', subject, 'DL_sAMAccountName', 0, '', false);
}
function EXDWPNewTask(DLEntityNameForeign, DLEntityId) { // 19.5.2009
    newentity('DL_Tasks', 'DL_EntityNameForeign,DL_EntityId', DLEntityNameForeign + ',' + DLEntityId, 'Action=546');
}
<<<<<<< HEAD
=======

>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
function EXDocBasketRefresh() { // 26.2.2008
    //EXshowListData('AJAXDocumentBasket','DL_CaseDocuments','DL_ModifiedBy = %WUSER%','DL_Id','img:../../gif/16x16/delete document 1.gif,DL_Title:DL_URLDocument','','','331');
    // 29.3.2009 - image now in right column
    //	var oEle = document.getElementById(sEXAJAXDocBasketDiv);
    //alert('DEBUG\nEXDocBasketRefresh - Div=' + sEXAJAXDocBasketDiv + ' ' + oEle);
<<<<<<< HEAD
	
=======

>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
    if (sEXAJAXDocBasketDiv == 'AJAXDocumentBasket')
        EXshowListData(sEXAJAXDocBasketDiv, 'DL_CaseDocuments', 'DL_EntityNameForeign = \'DL_sAMAccountName\' AND DL_ModifiedBy = %WUSER%', 'isnull(DL_SequenceNo,DL_Id)', 'icon,DL_Title:DL_URLDocument,img:../../gif/16x16/delete document 1.gif', '', '', '0,,331', true, 'DL_Id', '', LEX_BasketIsEmpty); // 22.12.2009 - true added - hide header
    else {
        EXshowListData('EXFDB', 'DL_CaseDocuments', 'DL_EntityNameForeign = \'DL_sAMAccountName\' AND DL_ModifiedBy = %WUSER%', 'isnull(DL_SequenceNo,DL_Id)', 'icon,DL_Title:DL_URLDocument,img:../../gif/16x16/delete document 1.gif', '', '', '0,,331', true, 'DL_Id', '', LEX_BasketIsEmpty); // 22.12.2009 - true added - hide header
    }
<<<<<<< HEAD
	if (typeof(EXInitDocBasket) == 'function') // 25.6.2017
	EXInitDocBasket(false);
	//EXInitDocBasket();
=======
    if (typeof (EXInitDocBasket) == 'function') // 25.6.2017 
        EXInitDocBasket(false);
    //EXInitDocBasket();
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
    //	var oDiv = document.getElementById(sEXAJAXDocBasketDiv);
    //alert(sEXDocBasketFooter + '\n' + oDiv.innerHTML);
    //	oDiv.innerHTML = oDiv.innerHTML.substr(0,oDiv.innerHTML.length-8) + '<tr><td colspan="99">' + sEXDocBasketFooter + '</td></tr></table>'; // 18.12.2009
}
<<<<<<< HEAD
=======


>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
function EXDocBasketEmpty() { // 26.2.2008
    //var LEX_DocBasketEmpty = 'Delete all documents from basket?';
    if (!confirm(LEX_DocBasketEmpty))
        return;
    ExecuteProcedure('dbo.EXDocBasketEmpty @WUser = %WUSER% ');
    EXDocBasketRefresh();
}
// 26.2.2008 - moved from EXDynamicForm.js
function EXshowListData(sDiv, sEntity, sWhere, sOrderBy, sD710s, sLink, sClickAction, sActions, bWOutTitle, XPathDLId, sTop, sEmptyMsg) {
    if (typeof (sEmptyMsg) == 'undefined') // 22.4.2013
        sEmptyMsg = '';
    if (typeof (sTop) == 'undefined') // 21.8.2010
        sTop = '';
    if (typeof (XPathDLId) == 'undefined') // 8.8.2010
        XPathDLId = 'DL_Id';
    if (typeof (bWOutTitle) == 'undefined') // 22.12.2009
        bWOutTitle = false;
    var oDiv = document.getElementById(sDiv);
    if (oDiv == null) // 30.3.2009
        oDiv = parent.document.getElementById(sDiv);
    if (oDiv == null) // 24.4.2008 - backward compatability
        return;
    oDiv.innerHTML = ''; // 15.4.2008
    oDiv.innerHTML = _EXshowListData(sEntity, sWhere, sOrderBy, sD710s, sLink, sClickAction, sActions, bWOutTitle, XPathDLId, sTop, sEmptyMsg);
    oDiv = null;
}
function _EXshowListData(sEntity, sWhere, sOrderBy, sD710s, sLink, sClickAction, sActions, bWOutTitle, XPathDLId, sTop, sEmptyMsg) {
    if (typeof (sEmptyMsg) == 'undefined') // 22.4.2013
        sEmptyMsg = '';
    if (typeof (sTop) == 'undefined') // 21.8.2010
        sTop = '';
    if (typeof (XPathDLId) == 'undefined' || XPathDLId == '') // 8.8.2010
        XPathDLId = 'DL_Id';
    if (typeof (bWOutTitle) == 'undefined') // 22.12.2009
        bWOutTitle = false;
    //var startTime, endTime; // 15.3.2009
    //startTime = new Date().getTime();// 15.3.2009
    var xData;
    if (typeof (sActions) == 'undefined')
        sActions = '';
    var oEXEntity;
    if (false) {
        xData = getEntityData(sEntity, sWhere, sOrderBy);
        oEXEntity = getEntity(sEntity, 'DL_Id = 0', ''); // 15.9.2008 - retrieve information
    }
    else {
        if (sTop == '') {
            oEXEntity = getEntity(sEntity, sWhere, sOrderBy);
            xData = oEXEntity.selectSingleNode('//DL_ENTITYDATA');
        }
        else {
            xData = getEntityData2('TOP ' + sTop + ' *', sEntity, sWhere, sOrderBy);
            oEXEntity = getEntity(sEntity, 'DL_Id = 0', '');
        }
    }
    //alert('DEBUG\ngetEntityData(' + sEntity + ',' + sWhere + ',' + sOrderBy + ' ) sD710s=' + sD710s + '\n' + xData.xml);
    var oD710s = sD710s.split(",");
    var sTable;
    var xActions = null;
    var DLPropName, sLinks;
    var ForeignKeys, ForeignValues; // 27.11.2008
    ForeignKeys = queryString('ForeignKeys');
    ForeignValues = queryString('ForeignValues');
    if (sActions != '') { // 18.2.2008
        xActions = getEntityData('DL_Action', 'DL_Id in (' + sActions.replace(',,', ',') + ')', ''); // 29.3.2009 - replace added
        sLink = '';
    }
    sLinks = sActions.split(','); // 30.3.2009 - move out
    sTable = '<table style="border-color:#A7B4CE;border-width:1px;border-style:solid;" width="100%" bgcolor="white">';
    if (bWOutTitle)
        sTable = '<table border="0" width="100%">';
    /*
    var sW = ''; //'DL_PropName in (';
    for(var i=0; i < oD710s.length; i++) {
    if (sW != '') // 26.2.2008
    sW = sW + ',';
    DLPropName = oD710s[i];
    if (DLPropName.indexOf(':') > 0)
    DLPropName = DLPropName.substring(0,DLPropName.indexOf(':'));
    if (DLPropName.indexOf('img') == -1 && DLPropName.indexOf('icon') == -1 && DLPropName != '') {
    if (DLPropName.indexOf(':') > 0)
    DLPropName = DLPropName.substring(0, DLPropName.indexOf(':'));
    sW = sW + '\'' + DLPropName + '\'';
    }
    }
    sW = 'DL_PropName in (' + sW + ')';
    //alert('getEntityData ' + sW);
    var xD710 = getEntityData('DL_D710',sW,'');
    */
    var DLPropType, DLPropDisplayName, sValue;
    // Build header
    if (!bWOutTitle) { // 22.12.2009
        sTable = sTable + '<tr valign="top">';
        var DLPropDictionary;
        for (var i = 0; i < oD710s.length; i++) {
            DLPropName = oD710s[i];
            if (DLPropName.indexOf(':') > 0)
                DLPropName = DLPropName.substring(0, DLPropName.indexOf(':'));
            if (DLPropName == 'checkbox') {
                sTable = sTable + '<th class="ms-vh" align="left"><input id="cbAll" type="checkbox" onclick="javascript:EXDSCheckAll()"></th>';
            }
            else if (DLPropName == 'input') { // 12.1.2010
                sTable = sTable + '<th class="ms-vh" align="left"></th>';
            }
            else if (DLPropName == '') // 19.8.2009
                sTable = sTable + '<th class="ms-vh"></th>';
            else if (DLPropName == 'icon') { // 13.4.2008
                sTable = sTable + '<th class="ms-vh" width="16px" align="left"></th>';
            }
            else {
                DLPropDisplayName = getsafe(oEXEntity, "//DL_ENTITYCOLS/DL_D610D710[DL_PropNameForeign='" + DLPropName + "']/DL_PropDisplayName");
                //alert(i + ' ' + DLPropDisplayName + oEXEntity.xml);
                if (DLPropDisplayName == '')
                //DLPropDisplayName = getsafe(xD710, "//DL_D710[DL_PropName='" + DLPropName + "']/DL_PropDisplayName");
                    DLPropDisplayName = getsafe(oEXEntity, "//DL_COLFORMATS/DL_D710[DL_PropName='" + DLPropName + "']/DL_PropDisplayName");
                if (DLPropName == 'DL_TableIcon' || DLPropName == 'BPM_ImgState') // 15.4.2008 + 25.6.2008
                    DLPropDisplayName = '';
                //sTable = sTable + '<th class="ms-vh" width="29">' + DLPropDisplayName + '</th>';
                var sWidth = '';
                if (oD710s[i].indexOf('img:') == 0)
                    sWidth = ' width="16px" ';
                sTable = sTable + '<th class="ms-vh"' + sWidth + '>' + DLPropDisplayName + '</th>'; // 13.4.2008 - width removed!
            }
        }
        sTable = sTable + '</tr>';
    }
    //alert(sTable);
    // Build data
    //var xNodes = xData.childNodes[1].childNodes;
    var xNodes, iNodes;
    if (xData == null) {
        xNodes = null;
        iNodes = 0;
    }
    else {
        xNodes = xData.selectNodes('//DL_ENTITYDATA/' + sEntity);
        iNodes = xNodes.length;
    }
    //alert('#nodes=' + xNodes.length);
    //return;
    if (iNodes == 0) {
        if (sEmptyMsg == 'EMPTY')
            sTable = sTable;
        else if (sEmptyMsg == '')
            sTable = sTable + '<tr><td class="ms-vb" colspan="' + (oD710s.length + 1) + '">' + LEX_SearchNoRowsFound + '</td></tr>'; // 26.2.2008
        else
            sTable = sTable + '<tr><td class="ms-vb" colspan="' + (oD710s.length + 1) + '">' + sEmptyMsg + '</td></tr>';
    }
    else {
        var iMax = iNodes;
        var DLPropDictionary, DLPropNameLink;
        if (iMax > 100)
            iMax = 100;
        var sLinkSaved = sLink; // 18.5.2008
        var aFKeys, aFValues; // 27.11.2008
        aFKeys = ForeignKeys.split(',');
        aFValues = ForeignValues.split(',');
        //alert('DEBUG\n' + iMax);
        for (var j = 0; j < iMax; j++) {
            sLink = sLinkSaved; // 18.5.2008
            if (mod(j, 2) == 0)
                sTable = sTable + '<tr class="ms-alternating">'; //'<tr class="dltablealtenaterow">';
            else
                sTable = sTable + '<tr>'; // '<tr class="dltablerow">';
            for (var i = 0; i < oD710s.length; i++) {
                DLPropName = oD710s[i];
                if (DLPropName.indexOf(':') > 0 && DLPropName.indexOf('img:') == -1) // 15.3.2009 - img: added
                    DLPropName = DLPropName.substring(0, DLPropName.indexOf(':'));
                DLPropNameAlt = '';
                if (DLPropName.indexOf(':') > 0 && DLPropName.indexOf('img:') != 0) {
                    DLPropNameAlt = DLPropName.substring(DLPropName.indexOf(':') + 1);
                    DLPropName = DLPropName.substring(0, DLPropName.indexOf(':'));
                }
                //alert('Node ' + j + ' Prop=' + i + ' DLPropName=' + DLPropName + '-' + DLPropNameAlt + ' sLink=' + sLink);
                if (DLPropName.indexOf('img:') == 0) {
                    sValue = '';
                    DLPropType = '';
                }
                else if (DLPropName == '') // 19.8.2009
                    sValue = '';
                else if (DLPropName == 'DL_TableIcon')
                // sValue = '<img border="0" src="/EX_Resources/gif/16x16/' + sValue + '"></img>';
                // 15.4.2011
                    sValue = '<img border="0" src="/EX_Resources/gif/16x16/' + getsafe(xNodes[j], DLPropName) + '"></img>';
                else if (DLPropName == 'BPM_ImgState') {
                    sValue = '<img border="0" src="/EX_Resources/gif/16x16/flag ' + sValue + '.gif"></img>';
                }
                else {
                    sValue = getsafe(xNodes[j], DLPropName);
                    for (var z = 0; z < aFKeys.length; z++)
                        sValue = sValue.replace('%' + aFKeys[z] + '%', aFValues[z]);

                    //if (j == 3) alert('DLPropName=' + DLPropName + ' ' + sValue + xNodes[j].xml);
                    //DLPropType = getsafe(xD710, "//DL_D710[DL_PropName='" + DLPropName + "']/DL_PropType");
                    //DLPropDictionary = getsafe(xD710, "//DL_D710[DL_PropName='" + DLPropName + "']/DL_PropDictionary");
                    DLPropType = getsafe(oEXEntity, "//DL_COLFORMATS/DL_D710[DL_PropName='" + DLPropName + "']/DL_PropType");
                    DLPropDictionary = getsafe(oEXEntity, "//DL_COLFORMATS/DL_D710[DL_PropName='" + DLPropName + "']/DL_PropDictionary");
                    //alert('i=' + i + ' j=' + j + ' ' + sValue + ' ' + DLPropType + ' ' + DLPropDictionary + ' ' + xNodes[j].xml + ' ' + sLink);
                }
                //	if (DLPropDictionary != '')
                //		sValue = DLPropDictionary + sValue;
                if (i == 0 && sLink != '') {
                    // 23.1.2008 - we must support several ids
                    //var sLinkNew = EXReplaceGeneric(sLink, xNodes[j]);
                    //alert('EXReplaceGeneric ' + sLink);
                    var sLinkNew = EXReplaceGeneric(EXReplaceGeneric(sLink, xNodes[j]), xNodes[j]);
                    if (sLinkNew.indexOf('javascript:') == 0) // 21.8.2010
                        sTable = sTable + '<td class="ms-vb"><a href="javascript:" onclick="' + sLinkNew.substr(11) + '">' + EXformatData(DLPropName, DLPropType, sValue) + '</a></td>';
                    else
                        sTable = sTable + '<td class="ms-vb"><a href="' + sLinkNew + '">' + EXformatData(DLPropName, DLPropType, sValue) + '</a></td>';
                }
                else if (DLPropName == 'icon') { // 13.4.2008
                    var sUrl = getsafe(xNodes[j], 'DL_URLDocument');
                    var ii = sUrl.lastIndexOf('.');
                    var szExt = sUrl.substr(ii + 1);
                    var sIconImg = '/_layouts/images/' + MapToAll('', szExt, '@Value');
                    //alert('icon ' + szExt + ' ' + sIconImg);
                    // 22.12.2009 - sTable = sTable + '<td class="ms-vb"><a href="' + sUrl + '"><img border="0" src="' + sIconImg + '"></a></td>';
                    sTable = sTable + '<td class="ms-vb" width="16px"><a href="' + sUrl + '"><img border="0" src="' + sIconImg + '"></a></td>';
                }
                else if (DLPropName == 'checkbox')
                    sTable = sTable + '<td class="ms-vb"><input id="cbDF' + getsafe(xNodes[j], XPathDLId) + '" type="checkbox"></td>';
                else if (DLPropName == 'input') // 12.1.2010
                    sTable = sTable + '<td class="ms-vb"><input id="tbDF' + getsafe(xNodes[j], XPathDLId) + '" type="text"></td>';
                else if (DLPropName == 'DL_LastSeen') { // 21.1.2010
                    var sAgo;
                    if (sValue == '')
                        sAgo = '';
                    else {
                        var oD = new Date;
                        oD.setISO8601(sValue);
                        sAgo = dateAgo(oD);
                    }
                    sTable = sTable + '<td class="ms-vb">' + sAgo + '</td>';
                }
                else {
                    sLink = '';
                    //alert('123 - ' + i);
                    if (sLinks != null && i < sLinks.length) {
                        if (sLinks[i] != '') {
                            var xA = xActions.selectSingleNode('//DL_Action[DL_Id=' + sLinks[i] + ']');
                            //alert('DEBUG\nsLinks[i]=' + sLinks[i] + ' xA=' + xA);
                            if (xA != null)
                                sLink = getsafe(xA, 'DL_Action');
                            if (sLink != '')
                                sLink = EXReplaceGeneric(EXReplaceGeneric(sLink, xNodes[j]), xNodes[j]); // 23.1.2013 - VF fix
                        }
                    }
                    //alert(DLPropNameAlt);
                    if (DLPropNameAlt != '' && sLink == '') {
                        sLink = "javascript:loadcontent('" + getsafe(xNodes[j], DLPropNameAlt) + "');";
                        //alert(DLPropNameAlt + ' ' + sLink);
                    }
                    //if (j == 0 && i == 1)
                    //alert('DEBUG\nDLPropname=' + DLPropName + ':' + DLPropType + ' sLink=' + sLink + ' sValue=' + sValue + ' sLinks.length=' + sLinks.length);
                    if (sLink == '') {
                        if (DLPropType == 'DL_Money')
                            sTable = sTable + '<td class="ms-vb" align="right">' + EXformatData(DLPropName, DLPropType, sValue) + '</td>';
                        else
                            sTable = sTable + '<td class="ms-vb">' + EXformatData(DLPropName, DLPropType, sValue) + '</td>';
                    }
                    else {
                        //alert('DEBUG\nif - ' + i + ' ' + DLPropName + ' ' + sValue);
                        if (DLPropName.indexOf('img:') == 0) {
                            var sImgSrc = DLPropName.substring(4); // 15.3.2009
                            if (sImgSrc.indexOf('/') != 0)
                                sImgSrc = '/EX_Resources/img/16x16/' + sImgSrc;
                            //alert('DEBUG\nImage DLPropName=' + DLPropName + ' sImgSrc=' + sImgSrc);
                            // 22.12.2009 - sTable = sTable + '<td class="ms-vb"><a href="' + sLink + '"><img border="0" src="' + sImgSrc + '"></a></td>';
                            sTable = sTable + '<td class="ms-vb" width="16px"><a href="' + sLink + '"><img border="0" src="' + sImgSrc + '"></a></td>';
                        }
                        else {
                            //alert(sLink + '\n' + sLink.substr(11));
                            if (sLink.indexOf('javascript:') == 0) // 21.8.2010
                                sTable = sTable + '<td class="ms-vb"><a href="javascript:" onclick="' + sLink.substr(11) + '">' + EXformatData(DLPropName, DLPropType, sValue) + '</a></td>';
                            else
                                sTable = sTable + '<td class="ms-vb"><a href="' + sLink + '">' + EXformatData(DLPropName, DLPropType, sValue) + '</a></td>';
                        }
                    }
                    sLink = '';
                    //alert('3' + sTable);
                }
            }
            sTable = sTable + '</tr>';
        }
    } // if
    if (sClickAction != '') {
        var xAction = getEntityData('DL_Action', 'DL_Id = ' + sClickAction, '');
        var sTitle = getsafe(xAction, '//DL_Tooltip');
        //alert(sClickAction + ' ' + sTitle + ' ' + getsafe(xAction, '//DL_Action/DL_Action'));
        sTable = sTable + '<tr><td aclass="ms-vb" lign="center" colspan="' + (oD710s.length + 1) + '"><input type="button" value="' + sTitle + '" onclick="' + getsafe(xAction, '//DL_Action/DL_Action') + '"></td></tr>';
    }
    sTable = sTable + '</table>';
    //alert(sTable);
    //endTime = new Date().getTime();// 15.3.2009
    //alert('OLD ' + sEntity + ' Time elapsed=' + (endTime-startTime)); // 15.3.2009
    xData = null; xNodes = null;
    return sTable;
}
Number.prototype.formatMoney = function (c, d, t) { // 15.7.2010 http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
    var n = this, c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
// 30.3.2009 - Moved from EXDynamicForm.js
function EXformatData(DLPropName, DLPropType, s1) {
    //alert('EXformatData(' + DLPropName + ',' + DLPropType + ',' + s1 + ')');
    if (DLPropName == 'DL_DocumentExtension') {
        var sIconImg = '/_layouts/images/' + MapToAll('', s1, '@Value');
        return '<img alt="" border="0" src="' + sIconImg + '">';
    }
    else if (DLPropName == 'DL_Modified') // 20.2.2008
        return s1.substring(0, 10);
    else if (DLPropName == 'DL_ModifiedBy') // 20.2.2008
        return s1.substring(s1.indexOf('\\') + 1);
    else if (DLPropType == 'DL_Date')
        return s1.substr(0, 10);
    else if (DLPropType == 'DL_Image') {
        return '<img alt="' + s1 + '" title="' + s1 + '" src="' + s1 + '">';
    }
    else if (DLPropType == 'DL_Money') { // 15.7.2010
        var f = 1.0 * s1;
        //alert('EXformatData(' + DLPropName + ',' + DLPropType + ',' + s1 + ') f=' + f);
        return f.formatMoney(2, ',', '.');
    }
    else if (DLPropType == 'DL_Float') { // 7.9.2010
        var f = 1.0 * s1;
        //alert('EXformatData(' + DLPropName + ',' + DLPropType + ',' + s1 + ') f=' + f);
        return f.formatMoney(2, ',', '.');
    }
    else if (DLPropType == 'DL_TextBox') { // 13.1.2009
        return s1.replace('\n', '<P>');
    }
    else if (DLPropType == 'DL_Email') {
        if (s1 == '')
            return '';
        return '<a href="mailto:' + s1 + '">' + s1 + '</a>';
    }
    else
        return s1; // + DLPropType;
}

function EXReplaceGeneric(sData, xNode, sDelimiter) { // 26.2.2008 - moved from EXDynamicForm.js // 24.3.2011 sDelimiter added
    if (typeof (sDelimiter) == 'undefined')
        sDelimiter = '%';
    return _EXReplaceGeneric(sData, xNode, sDelimiter, 1, ''); // 21.8.2012 - 0 --> 1
}
function _EXReplaceGeneric(sData, xNode, sDelimiter, iMax, sPrefix, xExtra, xExtra2) { // 26.2.2008 - moved from EXDynamicForm.js // 24.3.2011 sDelimiter added
    try {
        if (typeof (xExtra) == 'undefined') xExtra = null;
        if (typeof (xExtra2) == 'undefined') xExtra2 = null;
        var i, j, XPath;
        i = sData.indexOf(sDelimiter);
        if (i == -1)
            return sData;
        j = sData.substr(i + 1).indexOf(sDelimiter);
        XPath = sData.substr(i + 1, j);
        if (XPath.indexOf(' ') > -1) XPath = 'UNKNOWN' + XPath.replace(/ /g, ''); // 24.3.2011 - avoid errors
        //alert(XPath);
        try { sValue = getsafe(xNode, sPrefix + XPath); } catch (e) { sValue = ''; }
        if (sValue == '' && xExtra != null)
            try { sValue = getsafe(xExtra, sPrefix + XPath); } catch (e) { sValue = ''; }
        if (sValue == '' && xExtra2 != null)
            try { sValue = getsafe(xExtra2, sPrefix + XPath); } catch (e) { sValue = ''; }
        //alert(sValue + ' ' + XPath + ' xml=' + xNode);
        sData = sData.replace(sDelimiter + XPath + sDelimiter, sValue);
        sData = sData.replace(sDelimiter + XPath + sDelimiter, sValue); // 14.8.2009 - replace 3 times
        sData = sData.replace(sDelimiter + XPath + sDelimiter, sValue);
        if (iMax > 0) {
            j = j - sDelimiter.length - XPath.length - sDelimiter.length + sValue.length + 1;
            j = sData.substr(j + 1).indexOf(sDelimiter);
            if (j > 0)
                sData = _EXReplaceGeneric(sData, xNode, sDelimiter, iMax - 1, sPrefix, xExtra, xExtra2);
        }
        return sData;
    } catch (e) { alert('_EXReplaceGeneric(' + sData.substr(0, 50) + ', ' + xNode.xml.substr(0, 50) + ',' + sDelimiter + ') failed >>> ' + e.message); return ''; }
}

function EXSetCaseSecurity(DL_SecurityDictionary, DL_SecurityDictionaryId) {
    EXGotoUrl(getAbsoluteURL('/IT-SITE/Pages/ManageCaseSecurity.aspx?DL_SecurityDictionary=' + DL_SecurityDictionary + '&DL_SecurityDictionaryId=' + DL_SecurityDictionaryId));
}

var oEXDocIcon = null;
function EXCheckDocIcon() {
    if (oEXDocIcon == null) {
        try {
            if (true) { // 17.5.2010 - prepare for multi browser support
                var objXMLHTTP = EXXMLHTTP();
                objXMLHTTP.open('get', getAbsoluteURL('/EX_Resources/DOCICON.xml'), false);
                objXMLHTTP.send();
                oEXDocIcon = objXMLHTTP.responseXML;
                objXMLHTTP = null;
            }
            else {
                oEXDocIcon = EXDOMDocument(); //new ActiveXObject('MSXML2.DOMDocument');
                oEXDocIcon.async = false;
                oEXDocIcon.load(getAbsoluteURL('/EX_Resources/DOCICON.xml'));
            }
            //alert('CheckDocIcon ' + oEXDocIcon.xml);
            return true;
        } catch (e) { alert('EXCheckDocIcon ' + e.message); }
        oEXDocIcon = null;
    }
    else
        return true;
    return false;
}
function MapToAll(szProgId, szExt, XPath1) {
    if (!EXCheckDocIcon()) return szExt;
    var XPath;
    if (szExt.indexOf('htm') == 0) szExt = 'htm'; // 24.2.2015 fix
    if (szProgId == '') // 29.4.2011
        XPath = "//ByExtension/Mapping[@Key='" + szExt.toLowerCase() + "']";
    else
        XPath = "//ByProgID/Mapping[@Key='" + szProgId + "']"; // 29.4.2011
    var xNode = oEXDocIcon.selectSingleNode(XPath);
    if (xNode == null) {
        //alert('MapToAll(' + szProgId + ',' + szExt + ') failed ' + XPath);
        if (XPath1 == '@Value')
            return 'icgen.gif';
        else if (XPath1 == '' || XPath1 == null)
            return 'icgen.gif||';
        else
            return '';
    }
    else
        if (XPath1 == '' || XPath1 == null)
            return getsafe(xNode, '@Value') + '|' + getsafe(xNode, '@EditText') + '|' + getsafe(xNode, '@OpenControl');
        else
            return getsafe(xNode, XPath1);
}
function EXCheckSetCaseSecurityR810(DLEntityNameForeign, DLEntityId) {
    //alert('EXCheckSetCaseSecurityR810(' + DLEntityNameForeign + ',' + DLEntityId + ')');
    ExecuteProcedure('EXCheckSetCaseSecurityR810 @DLEntityNameForeign = ' + DLEntityNameForeign + ', @DLEntityId = ' + DLEntityId);
    var sWhere = 'DL_SecurityDictionary = \'' + DLEntityNameForeign + '\' and DL_SecurityDictionaryId = ' + DLEntityId;
    var oXML = getEntityData('DL_R810', sWhere, '');
    var DLId = getsafe(oXML, '//DL_Id');
    var oDiv = document.getElementById('DL_Information');
    //alert('DL_R810 ' + DLId + ' ' + sWhere + ' ' + oXML.xml + ' ' + oDiv);
    // FOR SOME STRANGE REASON WE CANNOT ACCESS loadentity - DL_Information is not present at load time???
    setTimeout('loadentity(\'DL_R810\',' + DLId + ')', 100);
    //alert('done');
}
function EXCaseSecurityMenu(DLSecurityDictionary, DLSecurityDictionaryId) {
    var s = '<table><tr><td><a href="javascript:loadentity(\'' + DLSecurityDictionary + ' \',' + DLSecurityDictionaryId + ')">show</a></td></tr>';
    var sWhere = 'DL_SecurityDictionary = \'' + DLSecurityDictionary + '\' and DL_SecurityDictionaryId = ' + DLSecurityDictionaryId;
    var oXML = getEntityData('DL_R810', sWhere, '');
    var DLId = getsafe(oXML, '//DL_Id');
    if (DLId != '') {
        s = s + '<tr><td><a href="javascript:loadentity(\'DL_R810\', ' + DLId + ')">rule</td></tr>';
    }
    s = s + '<tr><td><a href="javascript:EXGotoObject(\'' + DLSecurityDictionary + '\', ' + DLSecurityDictionaryId + ');">return to case</td></tr>';
    s = s + '</table>';
    //alert('EXCaseSecurityMenu ' + DLId + '\n' + s);
    return s;
}

function EXGotoDocument(url, EXDocumentID) {
    if (url.indexOf('http') != 0)
        url = getAbsoluteURL(url);
    var i = url.lastIndexOf('/');
    url = url.substr(0, i);
    EXGotoUrl(url + '?FilterField1=DocumentId&FilterValue1=8%5F' + EXDocumentID);
}

function pasteClipboardToEntity(sServer, DL_Entity, DL_FolderParams, DL_FolderType, bReturnResult) { // 2.9.2009 - bReturnResult added
    if (typeof (bReturnResult) == 'undefined')
        bReturnResult = false;
    try {
        if (DL_FolderParams == '' || DL_FolderParams == '//0')
            return;

        var oX = getEXUtilities();
        if (!oX)
            return;
        //oX.prtSC(); // Capture current screen
        //alert('pasteClipboardToEntity - prtSC completed');
        var sResult = oX.pasteClipboardToEntity(sServer, DL_Entity, DL_FolderParams, DL_FolderType);
        //var ITCase = queryString('IT_Case');
        //var sResult = oX.pasteClipboardToEntity(getAbsoluteURL(''),'IT_Case','//' + ITCase,'10'); // 10 is foldertype for pictures
        if (sResult.indexOf('#ERROR') == 0)
            alert('pasteClipboardToEntity = ' + sResult);
        else if (sResult == '')
            alert('Clipboard is empty - please selet a picture');
        else if (!bReturnResult) // 14.1.2010 - wrong spelling - fixed
            alert('Picture added to case: ' + sResult);
        oX = null; // 6.12.2008 - release object
        if (bReturnResult)
            return sResult;
    } catch (e) { alert('pasteClipboardToEntity ' + e.message); }
}

function EXReportITCase(title, bPrtSc, bGoto) {
    alert('Currently not supported'); // 3.8.2011 - avoid reporting IT cases through this channel
    return;
    try {
        var oX;
        if (bPrtSc) {
            oX = getEXUtilities();
            if (!oX)
                bPrtSc = false;
        }
        else
            oX = null;
        if (bPrtSc) oX.prtSC(); // Capture current screen
        if (title == '' || title == null || title == 'null')
            return;
        var oXML = getEntityData('DL_sAMAccountName', 'DL_sAMAccountName = %DL_sAMAccountName%', '');
        var sLocation = window.location.href;
        var xOps = '<IT_Case>';
        xOps = xOps + '<DL_Title>' + MakeXMLSafe(title.substr(0, 45)) + '</DL_Title><DL_Severity>3</DL_Severity><DL_SeverityType>3</DL_SeverityType><DL_TextBox>' + MakeXMLSafe(title) + '\nLocation: ' + MakeXMLSafe(sLocation) + '</DL_TextBox><DL_Responsible>' + getsafe(oXML, '//DL_sAMAccountName/DL_sAMAccountName') + '</DL_Responsible>';
        xOps = xOps + '</IT_Case>';
        var ITCase = setEntityDetail('IT_Case', xOps);
        if (ITCase == '') {
            alert(LEX_ITCaseCouldNotCreate);
            return;
        }
        xOps = '<DL_Exformation>';
        xOps += '<DL_Description>@' + getsafe(oXML, '//DL_sAMAccountName/DL_sAMAccountName') + '  Tak for din besked. Vi ser p\345 det snarest</DL_Description>';
        xOps += '<DL_EntityNameForeign>IT_Case</DL_EntityNameForeign>';
        xOps += '<DL_EntityId>' + ITCase + '</DL_EntityId>';
        xOps += '<DL_sAMAccountNameForeign>support</DL_sAMAccountNameForeign>';
        xOps += '</DL_Exformation>';
        setEntityDetail('DL_Exformation', xOps);
        //var sResult = oX.prtSCToEntity(getAbsoluteURL(''),'IT_Case','//' + ITCase,'10'); // 10 is foldertype for pictures
        var sResult = '';
        if (bPrtSc) sResult = oX.pasteClipboardToEntity(getAbsoluteURL(''), 'IT_Case', '//' + ITCase, '10'); // 10 is foldertype for pictures
        if (sResult.indexOf('#ERROR') == 0)
            alert('Could not upload picture ' + sResult);
        //alert('EXReportITCase ' + sResult + ' ITCase=' + ITCase);
        var sConfig;
        //sConfig = oX.saveMachineConfiguration(); // Produces an xml file
        oX = null;
        if (bGoto) EXGotoObject('IT_Case', ITCase);
    } catch (e) { alert('EXReportITCase ' + e.message); }
}

function EXCloseExformation() {
    var oDiv = document.getElementById('EXExformation');
    if (oDiv != null)
        oDiv.style.display = 'none';
    //alert(oDiv.innerHTML);
}
function EXSaveExformation(sEle, bReload) { // 22.1.2011 - bReload added
    if (typeof (bReload) == 'undefined')
        bReload = true;
    if (typeof (sEle) == 'undefined')
        sEle = '';
    if (sEle == '')
        sEle = 'txtExformation';
    EXCloseExformation();
    var DLEntityNameForeign = queryString('DL_EntityNameForeign');
    var DLEntityId = queryString('DL_EntityId');
    //alert('EXSaveExformation ' + DLEntityNameForeign + ':' + DLEntityId);
    //var s = window.location.search;
    var s = window.location.href; // 12.7.2011 - modified - IT Case 2367 - cross-browser support
    //alert('window.location.search=' + s);
    var i = s.indexOf('?');
    //alert('i=' + i);
    /*
    if (i>-1)
    s = s.substr(i+1);
    i = s.indexOf('&');
    if (i>0)
    s = s.substr(0,i);
    //alert(s);
    i = s.indexOf('=');
    if (i>0) {
    DLEntityNameForeign = s.substr(0,i);
    DLEntityId = s.substr(i+1);
    }
    */
    var oEle = document.getElementById(sEle);
    if (oEle.value == '')
        return;
    s = '<a>';
    var oXML = getEntityData('DL_sAMAccountName', 'DL_sAMAccountName = %DL_sAMAccountName%', '');
    s += '<DL_sAMAccountNameForeign>' + getsafe(oXML, '//DL_sAMAccountName/DL_sAMAccountName') + '</DL_sAMAccountNameForeign>';
    s += '<DL_Description>' + MakeXMLSafe(EXExpandHREF(oEle.value)) + '</DL_Description>'; // 16.8.2011 - EXExpandHREF added
    if (i > 0) {
        //alert(DLEntityNameForeign + ':' + DLEntityId);
        if (DLEntityNameForeign != 'undefined' && DLEntityNameForeign != '') {
            s += '<DL_EntityNameForeign>' + DLEntityNameForeign + '</DL_EntityNameForeign>';
            s += '<DL_EntityId>' + DLEntityId + '</DL_EntityId>';
        }
    }
    else {
        if (oEle.DLEntityNameForeign != '' && typeof (oEle.DLEntityNameForeign) != 'undefined') {
            DLEntityNameForeign = oEle.DLEntityNameForeign;
            DLEntityId = oEle.DLEntityId;
            if (DLEntityNameForeign != 'undefined' && DLEntityNameForeign != '') {
                s += '<DL_EntityNameForeign>' + oEle.DLEntityNameForeign + '</DL_EntityNameForeign>';
                s += '<DL_EntityId>' + oEle.DLEntityId + '</DL_EntityId>';
            }
        }
    }
    var oInstr = document.getElementById('DLExformationTypeInstruction');
    if (oInstr != null)
        if (oInstr.checked) {
            s += '<DL_ExformationType>2</DL_ExformationType>';
        }
    // 12.7.2011 - cross-browser support
    var newexf = oEle.id.replace('newexformation', '');
    //if (oEle.DLId != '' && typeof(oEle.DLId) != 'undefined')
    //s += '<DL_ProfileParent>' + oEle.DLId + '</DL_ProfileParent>';
    if (newexf != '')
        s += '<DL_ProfileParent>' + newexf + '</DL_ProfileParent>';
    //alert('Exformation ' + newexf + ' - ' + s + '\n' + oEle.outerHTML + ' ' + oEle.dlid);
    //return;
    s += '</a>';
    //alert(oEle.outerHTML + ' ' + queryString('DL_EntityNameForeign'));
    //alert(s);
    setEntityDetail('DL_Exformation', s);
    if (bReload) {
        if (window.location.href.indexOf('/EXExformation.html') > 0)
            window.location.href = window.location.href;
        else {
            loadcontent2(getAbsoluteURL('/EX_Resources/EXExformation.html?DL_EntityNameForeign=' + DLEntityNameForeign + '&DL_EntityId=' + DLEntityId), LEX_Notes);
        }
    }
    //alert(window.location.href);
}
function EXExpandHREF(s) { // 16.8.2011 - replace http://www.abc.def --> <a href="..." target="new">url</a>
    if (s.indexOf('<img') != -1) // 25.8.2011 - don't modify pictures
        return s;
    //var res = s.replace(/(http:\/\/[^ ]+)/g,'<a href="$1" target="new">$1</a>/');
    //var res = res.replace(/(https:\/\/[^ ]+)/g,'<a href="$1" target="new">$1</a>/'); // 18.8.2011
    var res = s.replace(/(http:\/\/[^ \r\n<]+)/g, '<a href="$1" target="new">$1</a>'); // 12.9.2011 - remove trailing /
    res = res.replace(/(https:\/\/[^ \r\n<]+)/g, '<a href="$1" target="new">$1</a>');
    return res;
}
function EXShowAddExformation(oEle, DLId, DLModified, DLEntityNameForeign, DLEntityId, sValue) {
    if (typeof (sValue) == 'undefined') // 4.8.2010
        sValue = '';
    if (typeof (DLEntityNameForeign) == 'undefined') {
        DLEntityNameForeign = ''; DLEntityId = 0;
    }
    if (parent) {
        //parent.EXShowAddExformation(oEle,DLId,DLModified,DLEntityNameForeign,DLEntityId);
        //return;
        DLId = DLId;
    }
    if (DLEntityNameForeign == '') {
        if (typeof (parent.sEXEntity) != 'undefined') {
            DLEntityNameForeign = parent.sEXEntity;
            DLEntityId = parent.sEXEntityId;
        }
        else {
            if (typeof (sEXEntity) != 'undefined') {
                DLEntityNameForeign = sEXEntity;
                DLEntityId = sEXEntityId;
            }
        }
    }
    var oDiv = document.getElementById('EXExformation');
    if (oDiv == null) {
        oDiv = document.createElement('DIV');
        oDiv.id = 'EXExformation';
        //20100825: BH Added class
        oDiv.className = 'exf-exformation-pad';
        oDiv.style.zIndex = 6;
        //20100825: BH removed style
        //oDiv.style.height = "440px"; // 300px
        //oDiv.style.width = "360px"; // 400
        oDiv.style.visibility = "";
        oDiv.style.display = 'none';
        document.body.appendChild(oDiv);
        oDiv = document.getElementById('EXExformation');
    }
    oDiv.style.display = '';
    oDiv.style.position = "absolute";
    var left, top;
    if (oEle == null) {
        var evt = window.event;
        left = -20 + evt.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        top = -20 + evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    }
    else {
        left = getElementLeft1(oEle) + 40;
        top = getElementTop1(oEle);
    }
    //alert(left + ' ' + top);
    if (left < 10)
        left = 10;
    if (top < 10)
        top = 10;
    if ((left + 380) > document.width)
        left = document.width - 380;
    if ((left + 380) > document.body.offsetWidth)
        left = document.body.offsetWidth - 380;
    if ((top + 460) > document.height)
        top = document.height - 460;
    //alert(left + ' ' + top);
    oDiv.style.left = left;
    oDiv.style.top = top;
    var sInstruction = '';
    //var LEX_Instruction = 'Instruktion';
    if (DLEntityNameForeign != '')
        sInstruction = '<input type="checkbox" id="DLExformationTypeInstruction"> ' + LEX_Instruction + DLEntityNameForeign;
    //20100825 BH Altered
    //var sTable = '<table width="100%" border="0" bgcolor="#cccccc" zz="#efefef"><tr><td class="ms-vb"></td><td class="ms-vb" align="right"><a href="javascript:" onclick="EXCloseExformation()"> - </a></td></tr><tr><td class="ms-vb" colspan="2"><textarea id="txtExformation" rows="12" columns="180" style="background-color:#F7C65A; width:350px" DLId="' + DLId + '" DLModified="' + DLModified + '" DLEntityNameForeign="' + DLEntityNameForeign + '" DLEntityId="' + DLEntityId + '"></textarea></td></tr><tr><td class="ms-vb">' + sInstruction + '</td><td class="ms-vb" align="right"><a href="javascript:" onclick="EXCloseExformation()">' + LEX_Close + '</a> <input type="button" value="' + LEX_AddComment + '" onclick="EXSaveExformation()"></td></tr></table>';
    var sTable = '<table width="100%" border="0" bgcolor="#cccccc" zz="#efefef"><tr class=" ms-WPheader"><td class="ms-vb ms-WPheader" colspan="2" id="dragbar" align="right" onMousedown="initializedrag2(event)">';
    sTable += '<ilayer width="100%" onSelectStart="return false"><layer width="100%" onMouseover="dragswitch=1;if (ns4) drag_dropns(EXExformation)" onMouseout="dragswitch=0"><font face="Verdana" color="#FFFFFF"><strong><small>Announcement Box</small></strong></font></layer></ilayer>';
    sTable += '<a href="javascript:" onclick="EXCloseExformation()"> - </a></td></tr><tr><td class="ms-vb" colspan="2"><textarea id="txtExformation" rows="12" columns="180" class="exf-exformation-postit" DLId="' + DLId + '" DLModified="' + DLModified + '" DLEntityNameForeign="' + DLEntityNameForeign + '" DLEntityId="' + DLEntityId + '"></textarea></td></tr><tr><td class="ms-vb">' + sInstruction + '</td><td class="ms-vb" align="right"><a href="javascript:" onclick="EXCloseExformation()">' + LEX_Close + '</a> <input class="exf-button" type="button" value="' + LEX_AddComment + '" onclick="EXSaveExformation()"></td></tr></table>';
    //alert(sTable);
    oDiv.innerHTML = sTable;
    var oEle = document.getElementById('txtExformation');
    oEle.value = sValue; // 4.8.2010
    oEle.focus();
    setTimeout("EXFocus('txtExformation')", 200); // ensure it happens
}

//20100825: BH Added draganddrop

function drag_drop2(e) {
    if (ie4 && dragapproved) {
        crossobj.style.left = tempx + event.clientX - offsetx
        crossobj.style.top = tempy + event.clientY - offsety
        return false
    }
    else if (ns6 && dragapproved) {
        crossobj.style.left = tempx + e.clientX - offsetx + "px"
        crossobj.style.top = tempy + e.clientY - offsety + "px"
        return false
    }
}

function initializedrag2(e) {
    crossobj = ns6 ? document.getElementById("EXExformation") : document.all.EXExformation
    var firedobj = ns6 ? e.target : event.srcElement
    var topelement = ns6 ? "html" : document.compatMode && document.compatMode != "BackCompat" ? "documentElement" : "body"
    while (firedobj.tagName != topelement.toUpperCase() && firedobj.id != "dragbar") {
        firedobj = ns6 ? firedobj.parentNode : firedobj.parentElement
    }

    if (firedobj.id == "dragbar") {
        offsetx = ie4 ? event.clientX : e.clientX
        offsety = ie4 ? event.clientY : e.clientY

        tempx = parseInt(crossobj.style.left)
        tempy = parseInt(crossobj.style.top)

        dragapproved = true
        document.onmousemove = drag_drop2
    }
}

document.onmouseup = new Function("dragapproved=false")

function EXFocus(sEle) {
    var oEle = document.getElementById(sEle);
    oEle.focus();
}
// Function keys
// {'f1':112,'f2':113,'f3':114,'f4':115,'f5':116,'f6':117,'f7':118,'f8':119,'f9':120,'f10':121,'f11':122,'f12':123}
function EXHandleFunctionKeys() {
    //alert('EXHandleFunctionKey ' + event.keyCode);
    if (event.keyCode == 119) // 23.5.2010
        EXShowAddExformation(null, '', '');
    if (event.keyCode == 113 || event.keyCode == 117) { // 16.8.2011 - QuickSearch
        if (typeof (sEXEntity) != 'undefined') {
            if (event.keyCode == 113)
                EXLoadQuickSearch(sEXEntity, false, '', '', null, true, '');
            else if (event.keyCode == 117)
                loadcontent2('/EX_Resources/EXExformation.html?DL_EntityNameForeign=' + sEXEntity + '&DL_EntityId=' + sEXEntityId, LEX_KnowledgeExchanges);
        }
    }
    //if (event.keyCode == 123) // 27.10.2010 - remove
    //	EXReportITCase();
}
function EXInitFunctionKeys() {
    var oEle = document;
    if (oEle.addEventListener) { // IT Case 2367 - 12.7.2011
        oEle.addEventListener('keydown', EXHandleFunctionKeys, false);
    }
    else
        oEle.attachEvent('onkeydown', EXHandleFunctionKeys);
}
// EXInitFunctionKeys();


function EXLoadSearch(DLId, sTitle) {
    try {
        //loadcontent2(getAbsoluteURL('/EX_SQLSVC/DynamicList.html?DLId=' + DLId + "&EXcheck=" + Math.random()), sTitle); // 15.4.2008 - Math.random added
        loadcontent2(getAbsoluteURL('/EX_SQLSVC/DynamicSearch.html?D410=' + DLId + "&EXcheck=" + Math.random()), sTitle); // 15.9.2008 - modified to DynamicSearch
    } catch (e) { alert('EXLoadSearch(' + DLId + ') failed ' + e.message); }
}
function mod(div, base) {
    return Math.round(div - (Math.floor(div / base) * base));
}

function EXApproveMeeting(entity, id, modified, bApprove) {
    if (typeof (bApprove) == 'undefined') bApprove = true;
    var oXML = getEntityData(entity, 'DL_Id = ' + id, '');
    modified = getsafe(oXML, '//DL_Modified');
    //alert('EXApproveMeeting ' + id + ' ' + modified);
    //SetEntityItemValue(entity,id, modified, 'DL_CaseApproved', 1, 'DL_AgendaNo','X');
    ExecuteProcedure('EXApproveRejectDLCaseMeetings @DLId=' + id + ',@Approved=' + (bApprove ? '1' : '0'));
    if (bApprove) {
        SetEntityItemValue(entity, id, modified, 'DL_CaseApproved', 1); // 11.9.2008
    }
    else {
        EXdeleteentity(entity, id);
    }
    //alert('done');
    EXReload();
}
function EXUnApproveMeeting(entity, id, modified) {
    var oXML = getEntityData(entity, 'DL_Id = ' + id, '');
    modified = getsafe(oXML, '//DL_Modified');
    //alert('EXApproveMeeting ' + id + ' ' + modified);
    ExecuteProcedure('EXApproveRejectDLCaseMeetings @DLId=' + id + ',@Approved=0');
    SetEntityItemValue(entity, id, modified, 'DL_CaseApproved', 0);
    //alert('done');
    EXReload();
}
function EXSearchEntityDocuments(DLEntityNameForeign, DLFolderParams) { // 10.4.2008
    var oD810 = getEntityData('DL_D810FolderView', 'DL_EntityNameForeign = \'' + DLEntityNameForeign + '\'', '');
    var xNodes = oD810.selectNodes('//DL_D810FolderView');
    var path = '';
    var sURL;
    for (var i = 0; i < xNodes.length; i++) {
        sURL = getsafe(xNodes[i], 'DL_URLFolder');
        sURL = EXReplaceFolderParams(sURL, DLFolderParams);
        if (path != '')
            path = path + ',';
        path = path + sURL;
    }
    // oEXDWPURL
    loadcontent2(getAbsoluteURL('/EX_Resources/EXSiteDocumentSearch.html?Path=' + escape(path)), LEXSearchCaseDocuments); // 18.8.2008 26.8.2008
}

// 20111101 BH Added function IT_Case 2558
function SPVersion() {
    try {
        return EXSPSVersion;
    }
    catch (e) {
        return 12;
    }
}

function Query(freetext, SearchPath) {
    try {
        if (typeof (SearchPath) == 'undefined')
            SearchPath = '';
        //var queryXml = '<?xml version="1.0" encoding="utf-8" ?><QueryPacket xmlns="urn:Microsoft.Search.Query" Revision="1000"><Query domain="QDomain"><SupportedFormats><Format>urn:Microsoft.Search.Response.Document.Document</Format></SupportedFormats><Context><QueryText language="en-US" type="MSSQLFT">' + freetext + '</QueryText></Context><Range><StartAt>1</StartAt><Count>5</Count></Range></Query></QueryPacket>';
        //var queryXml = "<QueryPacket xmlns='urn:Microsoft.Search.Query'><Query><SupportedFormats><Format revision='1'>urn:Microsoft.Search.Response.Document:Document</Format></SupportedFormats><Context><QueryText language='da-DK' type='STRING'>" + freetext + "</QueryText></Context><Range><StartAt>1</StartAt><Count>20</Count></Range></Query></QueryPacket>";
        var sCount = '40';
        var sProperties = '<Properties><Property name="Title"/><Property name="Path"/><Property name="description"/><Property name="Write"/><Property name="Rank"/><Property name="Size"/><Property name="FileType"/><Property name="Created"/><Property name="Author"/></Properties>';
        //sProperties = '';
        //var queryXml = '<QueryPacket xmlns="urn:Microsoft.Search.Query"><Query><SupportedFormats><Format>urn:Microsoft.Search.Response.Document:Document</Format></SupportedFormats><Context><QueryText type="STRING" language="en-us">' + freetext + '</QueryText></Context><Range><StartAt>1</StartAt><Count>' + sCount + '</Count></Range>' + sProperties + '<EnableStemming>true</EnableStemming><TrimDuplicates>true</TrimDuplicates><IgnoreAllNoiseQuery>false</IgnoreAllNoiseQuery><ImplicitAndBehavior>true</ImplicitAndBehavior><IncludeRelevanceResults>true</IncludeRelevanceResults><IncludeSpecialTermResults>true</IncludeSpecialTermResults><IncludeHighConfidenceResults>true</IncludeHighConfidenceResults></Query></QueryPacket>';
        // 10.4.2008 - modified to SQL search
        var queryXml;
        if (SearchPath == '')
        // 090215, JRD changed freetext to contains 
        //	queryXml = '<QueryPacket xmlns="urn:Microsoft.Search.Query"><Query><SupportedFormats><Format>urn:Microsoft.Search.Response.Document:Document</Format></SupportedFormats><Context><QueryText type="MSSQLFT" language="en-us">select Size,FileType,Rank,Path,Author,Title,description,hithighlightedsummary from scope() where freetext(\'' + freetext + '\')</QueryText></Context><Range><StartAt>1</StartAt><Count>' + sCount + '</Count></Range>' + sProperties + '<EnableStemming>true</EnableStemming><TrimDuplicates>true</TrimDuplicates><IgnoreAllNoiseQuery>true</IgnoreAllNoiseQuery><ImplicitAndBehavior>true</ImplicitAndBehavior><IncludeRelevanceResults>true</IncludeRelevanceResults><IncludeSpecialTermResults>true</IncludeSpecialTermResults><IncludeHighConfidenceResults>true</IncludeHighConfidenceResults></Query></QueryPacket>';
            queryXml = '<QueryPacket xmlns="urn:Microsoft.Search.Query"><Query><SupportedFormats><Format>urn:Microsoft.Search.Response.Document:Document</Format></SupportedFormats><Context><QueryText type="MSSQLFT" language="en-us">select Size,FileType,Rank,Path,Author,Title,description,hithighlightedsummary from scope() where Contains(\'"' + freetext + '*"\') and "scope" = \'All Sites\'</QueryText></Context><Range><StartAt>1</StartAt><Count>' + sCount + '</Count></Range>' + sProperties + '<EnableStemming>true</EnableStemming><TrimDuplicates>true</TrimDuplicates><IgnoreAllNoiseQuery>false</IgnoreAllNoiseQuery><ImplicitAndBehavior>true</ImplicitAndBehavior><IncludeRelevanceResults>true</IncludeRelevanceResults><IncludeSpecialTermResults>true</IncludeSpecialTermResults><IncludeHighConfidenceResults>true</IncludeHighConfidenceResults></Query></QueryPacket>';
        else {
            var aPath = SearchPath.split(',');
            // 090215, JRD changed freetext to contains 
            //		queryXml = '<QueryPacket xmlns="urn:Microsoft.Search.Query"><Query><SupportedFormats><Format>urn:Microsoft.Search.Response.Document:Document</Format></SupportedFormats><Context><QueryText type="MSSQLFT" language="en-us">select Size,FileType,Rank,Path,Author,Title,description,hithighlightedsummary,Write from scope() where freetext(\'' + freetext + '\') and (';
            queryXml = '<QueryPacket xmlns="urn:Microsoft.Search.Query"><Query><SupportedFormats><Format>urn:Microsoft.Search.Response.Document:Document</Format></SupportedFormats><Context><QueryText type="MSSQLFT" language="en-us">select Size,FileType,Rank,Path,Author,Title,description,hithighlightedsummary,Write from scope() where Contains(\'"' + freetext + '*"\') and "scope" = \'All Sites\' and (';
            for (var i = 0; i < aPath.length; i++) {
                if (i > 0)
                    queryXml += ' OR ';
                // 20111101 BH Added function IT_Case 2558
                if (SPVersion() == 12) {
                    queryXml += ' Path like \'' + aPath[i] + '%\' ';
                }
                else {
                    queryXml += ' Contains(Path, \'' + aPath[i] + '\') ';
                }
            }
            queryXml += ')</QueryText></Context><Range><StartAt>1</StartAt><Count>' + sCount + '</Count></Range>' + sProperties + '<EnableStemming>true</EnableStemming><TrimDuplicates>true</TrimDuplicates><IgnoreAllNoiseQuery>false</IgnoreAllNoiseQuery><ImplicitAndBehavior>true</ImplicitAndBehavior><IncludeRelevanceResults>true</IncludeRelevanceResults><IncludeSpecialTermResults>true</IncludeSpecialTermResults><IncludeHighConfidenceResults>true</IncludeHighConfidenceResults></Query></QueryPacket>';
        }

        var d1, d2;
        d1 = new Date();
        var xNode = QueryEx(queryXml);
        d2 = new Date(); // 10.4.2008 - now figure out how long time it took
        var difference = d2.getTime() - d1.getTime();

        var sDocs = getsafe(xNode, '//QueryResult');
        //    var fso = new ActiveXObject("Scripting.FileSystemObject");
        //    var s = fso.CreateTextFile("C:\\test.txt", true);
        //    s.WriteLine(sDocs);
        //    s.Close();
        var xmlDoc = EXDOMDocument();
        xmlDoc.loadXML(sDocs);
        var xNodes = xmlDoc.selectNodes('//Results/Document');
        var szTotal = getsafe(xmlDoc, '//TotalAvailable');
        var s = '#matches: ' + szTotal + '. Your search took ' + difference / 1000 + ' seconds.<br><table style="border-color:#A7B4CE;border-width:1px;border-style:solid;" width="100%" bgcolor="white">';
        //var s = '#matches: ' + szTotal + '. Din s\370gning tog ' + difference/1000 + ' sekunder.<br><table style="border-color:#A7B4CE;border-width:1px;border-style:solid;" width="100%" bgcolor="white">';
        //s += '<tr><th class="ms-vh">#</th><th class="ms-vh"></th><th class="ms-vh">Author</th><th class="ms-vh">Titel</th></tr>';
        var szExt, szSize, sIconImg;
        for (var i = 0; i < xNodes.length; i++) {
            if (i % 2 == 0)
                s = s + '<tr class="dltablerow">';
            else
                s = s + '<tr class="dltablealtenaterow">';
            //szExt = getsafe(xNodes(i), 'Action/LinkUrl/@fileExt');
            //szSize = getsafe(xNodes(i), 'Action/LinkUrl/@size');
            szExt = getPropValue(xNodes(i), 'FileType');
            szSize = getPropValue(xNodes(i), 'Size');
            if (szExt == '')
                if (szSize == '0')
                    sIconImg = '/EX_Resources/img/16x16/folder.gif';
                else
                    sIconImg = '';
            else
                sIconImg = '/_layouts/images/' + MapToAll('', szExt, '@Value');
            if (i == 8433) {
                alert('Title=' + getPropValue(xNodes(i), 'Title') + ' Node=' + xNodes(i).xml);
                //alert(szExt + ' ' + szSize + ' ' + sIconImg);
            }
            var sAction = getsafe(xNodes(i), 'Action/LinkUrl');
            s = s + '<td class="ms-vb" title="View ..."><a href="' + sAction + '" onclick="javascript:loadcontent2(\'' + sAction + '\',\'' + sTitle + '\')"><img border="0" src="' + sIconImg + '"></img></a></td>';
            var sAuthor = getPropValue(xNodes(i), 'Author');
            var sSize = getPropValue(xNodes(i), 'Size');
            var sModified = getPropValue(xNodes(i), 'Write');
            s = s + '<td class="ms-vb" title="Goto ..."><a href="';
            var ii = sAction.lastIndexOf('/');
            var HitHighlightedSummary = getPropValue(xNodes(i), 'HitHighlightedSummary');
            var sAction1;
            if ((szSize == '0' && szExt == '') || sAction.indexOf('.aspx') > 0 || ii == sAction.length)
                sAction1 = sAction;
            else
                sAction1 = sAction.substr(0, ii);
            s = s + sAction1;
            var sTitle;
            sTitle = getPropValue(xNodes(i), 'Title');
            s = s + '" onclick="javascript:EXTryGotoURL(\'' + sAction1 + '\');return false;">' + sTitle;
            s = s + '</a></td></tr>';
            var sDesc = getPropValue(xNodes(i), 'description');
            sDesc = HitHighlightedSummary; // 10.4.2008
            var ii; // 15.9.2008 - fix strange error
            ii = sDesc.indexOf(';#');
            if (ii > 0) sDesc = sDesc.substr(ii + 2);

            if (sDesc == sAuthor)
                sDesc = '';
            s += '<tr><td colspan="2" class="ms-vb">';
            if (sDesc != '') {
                sDesc = sDesc.replace('<c0>', '<b>');
                sDesc = sDesc.replace('</c0>', '</b>');
                //s = s + '<tr><td colspan="3" class="ms-vb">' + sDesc + '</td></tr>';
                s += sDesc + '<br>';
            }
            s += '<a href="' + sAction + '" target="_blank" title="Open document ...">' + sAction + '</a> - ' + Math.round(sSize / 1024) + 'KB - ' + sAuthor + ' - ' + sModified.substring(0, 10) + '</td></tr>';
            //s += '<a href="' + sAction + '" target="_blank" title="\305bn dokumentet ...">' + sAction + '</a> - ' + Math.round(sSize/1024) + 'KB - ' + sAuthor + ' - ' + sModified.substring(0,10) + '</td></tr>';
        }
        s = s + '</table>';
        //alert('Query(' + freetext + ') = ' + s);
        return s;
    } catch (e) { alert('Query(' + freetext + ') >>> ' + e.message); }
    return '';
}
function getPropValue(xNode, name) {
     //var xN = xNode.selectSingleNode('Properties/Property[Name=\'' + name.toUpperCase() + '\']/Value'); // 10.4.2008 - toUpper needed for MSSQLFT
	var xN = xNode.selectSingleNode('Properties/Property[Name=\'' + name + '\']/Value'); // 12-01-2016 [sak] - original case needed for VF SP2013
    if (xN == null)
        return '';
    //alert('getPropValue ' + xN.xml + ' ' + xN.text);
    return xN.text;
}
function QueryEx(queryXml) {
    try {
        var xmldoc, FeedbackHTTP;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<Query xmlns="urn:Microsoft.Search">';
        xmldoc = xmldoc + '<queryXml>' + MakeXMLSafe(queryXml) + '</queryXml>';
        xmldoc = xmldoc + '</Query>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';
        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("Post", getAbsoluteURL('/_vti_bin/search.asmx'), false);
        //		FeedbackHTTP.Open("Post", getAbsoluteURL('/ITSupport/_vti_bin/search.asmx'), false); 
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("Content-Length", xmldoc.length);
        FeedbackHTTP.setRequestHeader("SOAPAction", 'urn:Microsoft.Search/Query');
        FeedbackHTTP.send(xmldoc);
        if (FeedbackHTTP.status == 400)
            alert('bad request ' + xmldoc);
        else if (FeedbackHTTP.status != 200)
            alert(xmldoc + ' ' + xmldoc.length + ' ' + FeedbackHTTP.status + ' ' + FeedbackHTTP.responseText);
        var oXML = FeedbackHTTP.responseXML;
        FeedbackHTTP = null;
        return oXML;
    } catch (e) { alert('QueryEx(' + queryXml + ') Exception >>> ' + e.message); }
}
function EXTryGotoURL(s) {
    s = s.replace('%20', ' ');
    s = s.replace('%20', ' ');
    s = s.replace('%20', ' ');
    if (s.lastIndexOf('/') != s.length - 1) {
        //alert(s.lastIndexOf('/') + ' ' + s.length);
        s = s + '/';
    }
    var oD810 = getEntityData('DL_D810FolderView', '', '');
    var xNodes = oD810.selectNodes('//DL_D810FolderView');
    var sEX;
    for (var i = 0; i < xNodes.length; i++) {
        var sURL = getsafe(xNodes[i], 'DL_URLFolder');
        //sEX = sURL.replace('%1%','(?<DocLib>\\d+)');	
        sEX = sURL.replace('%0%', '(\\w+)');  // 17.9.2008
        sEX = sEX.replace('%1%', '(\\w+)');
        //sEX = sEX.replace('%2%','(?<CaseNo>(\\w|-)+)');
        sEX = sEX.replace('%2%', '((\\w|-| )+)');
        //alert(i + ' ' + sURL + ' - ' + sEX);
        var rex = new RegExp(sEX, 'i');
        var sResult = rex.exec(s);
        if (sResult != null) {
            var DLEntityNameForeign = getsafe(xNodes[i], 'DL_EntityNameForeign');
            var DLPropNameForeign = getsafe(xNodes[i], 'DL_PropNameForeign');
            if (DLPropNameForeign == '')
                alert('Match found - DL_PropNameForeign must be set to key in DL_D810 table ' + xNodes[i].xml);
            else {
                var DLId, key;
                if (sURL.indexOf('%0%') > 0 & sURL.indexOf('%1%') > 0 & sURL.indexOf('%2%') > 0)
                    key = sResult[3];
                else if (sURL.indexOf('%1%') > 0 & sURL.indexOf('%2%') > 0)
                    key = sResult[2];
                else
                    key = sResult[1];
                //alert('DEBUG\nsResult = ' + sResult + ' ' + sResult[1] + ' > ' + key + ' ' + DLEntityNameForeign + ' ' + DLPropNameForeign);
                if (DLPropNameForeign == 'DL_Id')
                    DLId = key;
                else {
                    var sWhere = DLPropNameForeign + ' = \'' + key + '\'';
                    var oObject = getEntityData(DLEntityNameForeign, sWhere, '');
                    DLId = getsafe(oObject, '//DL_Id');
                }
                //alert('*** MATCH FOUND *** ' + sEX + ' match ' + s + ' >' + DLEntityNameForeign + ':' + DLId + '<');	
                if (IsNumeric(DLId)) {
                    EXGotoObject(DLEntityNameForeign, DLId);
                    return;
                }
            }
        }
    }
    alert('EXTryGotoURL - Could not find URL ' + s);
    //alert('EXTryGotoURL - Kunne ikke finde en sag der matcher URL\'en ' + s);
}
// 16.1.2008 - Dynamic menu
var bEXSubMenuRunning = false;
var EXSubMenuTimer;
function EXActionSubMenu(DLEntityNameForeign, DLEntity, DLId) {
    try {
        if (window.event == null)
            return;
        var oEle = window.event.srcElement; // requires onclick=..., href= doesn't work
        if (oEle == null)
            return;
        var xActions = getEntityData('DL_Action', 'DL_EntityNameForeign = \'' + DLEntityNameForeign + '\'', 'DL_SequenceNo');
        var xNodes = xActions.selectNodes('//DL_ENTITYDATA/DL_Action');
        var sTable, iRows;
        iRows = xNodes.length;
<<<<<<< HEAD
        sTable = '<table onclick="EXSubMenuHide()" bg1color="#ccccff" width="180px" height="' + (iRows * 20) + 'px" border="0" bgcolor="#F0F0F0" background-color="#F0F0F0">';
=======
        sTable = '<table onclick="EXSubMenuHide()" bg1color="#ccccff" width="180px" height="' + (iRows * 20) + 'px" border="0" bgcolor="#F0F0F0">';
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
        var sTitle, sAction, sImage;
        for (var i = 0; i < iRows; i++) {
            sTitle = getsafe(xNodes[i], 'DL_Tooltip');
            sAction = getsafe(xNodes[i], 'DL_Action');
            sAction = sAction.replace('#DL_Entity#', DLEntity);
            sAction = sAction.replace('#DL_Id#', DLId);
            sAction = sAction.replace('#DL_Id#', DLId);
            sImage = getsafe(xNodes[i], 'DL_TableIcon');
            if (sImage.indexOf('http') == 0) // 19.8.2009
                sTable = sTable + '<tr><td class="ms-vb"><img border="0" src="' + trim(sImage) + '"></img></td><td class="ms-vb"><a href="' + sAction + '">' + sTitle + '</a></td></tr>'; // 16.2.2009 - img --> gif
            else
                sTable = sTable + '<tr><td class="ms-vb"><img border="0" src="/EX_Resources/gif/' + trim(sImage) + '"></img></td><td class="ms-vb"><a href="' + sAction + '">' + sTitle + '</a></td></tr>'; // 16.2.2009 - img --> gif
        }
        sTable = sTable + '</table>';
        var oDiv = document.getElementById('EXSubMenuDIV');
        if (oDiv == null) {
            oDiv = document.createElement('DIV');
            oDiv.id = 'EXSubMenuDIV';
            oDiv.style.zIndex = 6;
            oDiv.style.width = "180px";
<<<<<<< HEAD
			oDiv.style.backgroundColor = "white"; //"#F0F0F0";
=======
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
            document.body.appendChild(oDiv);
            //			oEle.parentElement.appendChild(oDiv);
            oDiv = document.getElementById('EXSubMenuDIV');
        }
<<<<<<< HEAD
        oDiv.style.height = (iRows * 20 +  20) + "px";
        oDiv.style.position = "absolute";
        oDiv.style.left = getElementLeft1(oEle) + "px";
        oDiv.style.top = getElementTop1(oEle) + "px";
=======
        oDiv.style.height = (iRows * 20) + "px";
        oDiv.style.position = "absolute";
        oDiv.style.left = getElementLeft1(oEle);
        oDiv.style.top = getElementTop1(oEle);
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
        //oDiv.onmouseout = EXSubMenuHide;
        //alert(sTable);
        oDiv.innerHTML = sTable;
        oDiv.style.visibility = "visible";
        if (bEXSubMenuRunning)
            clearTimeout(EXSubMenuTimer);
        //alert('EXActionSubMenu(' + DLEntityNameForeign + ',' + DLEntity + ',' + DLId + ') invoked');
        EXSubMenuTimer = setTimeout('EXSubMenuHide()', 8000); // 8 seconds before we hide DIV
        bEXSubMenuRunning = true;
        window.event.preventDefault?window.event.preventDefault:window.event.returnValue = false;
		//window.event.preventDefault();
<<<<<<< HEAD
		return true;
=======
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
    } catch (e) { alert('EXActionSubMenu ' + e.message); }
}
function EXSubMenuHide() {
    //alert('EXSubMenuHide bEXSubMenuRunning=' + bEXSubMenuRunning);
    clearTimeout(EXSubMenuTimer);
    bEXSubMenuRunning = false;
    var oDiv = document.getElementById('EXSubMenuDIV');
    if (oDiv == null)
        return;
    oDiv.style.visibility = "hidden";
}
function EXPositionSubMenu() { // 19.8.2009
    var EXSubMenu = document.getElementById('EXSubMenuDIV');
    var rightedge = document.body.clientWidth - event.clientX;
    var bottomedge = document.body.clientHeight - event.clientY;
    if (rightedge < EXSubMenu.offsetWidth)
        EXSubMenu.style.left = document.body.scrollLeft + event.clientX - EXSubMenu.offsetWidth;
    else
        EXSubMenu.style.left = document.body.scrollLeft + event.clientX;
    if (bottomedge < EXSubMenu.offsetHeight)
        EXSubMenu.style.top = document.body.scrollTop + event.clientY - EXSUbMenu.offsetHeight;
    else
        EXSubMenu.style.top = document.body.scrollTop + event.clientY;
    EXSubMenu.style.visibility = "visible";
}

function EXinitDLMoveCopyStatus() {
    var oEle = document.getElementById('DL_MoveCopyStatus');
    if (oEle.value == '')
        oEle.value = '0';
    // SELECT
}
function EXinitDLFolderPathForeign() {
    var aFK = queryString('ForeignKeys');
    var aFV = queryString('ForeignValues');
    var oEle = document.getElementById('DL_FolderPathForeign');
    //FillDropDown(sEle, sDictionary, sPropCodeKey, sPropCodeDecode, sDictKey, sDictValue, sDefault
    var DLEntityNameForeign = aFV.split(',')[0];
    FillDropDown('DL_FolderPathForeign', 'DL_D810View', 'DL_Id', 'DL_Title2', 'DL_EntityNameForeign', DLEntityNameForeign, oEle.value);
}
function EXMoveCopyDocumentsDisplay(DLId) {
    loadcontent2(getAbsoluteURL("/EX_SQLSVC/DynamicList.html?DLEntity=DL_SyncDocuments&DLView=DL_SyncDocumentsView&Where=DL_EntityNameForeign='DL_MoveCopyDocuments' AND DL_EntityId=" + DLId + "&PropList=DL_Title,DL_SyncActionDecode,DL_SyncMessage&Action=none", "Move Copy Documents Status"));
}
function EXMoveCopyDocBasket2Entity(DLEntityNameForeign, DLEntityId) {
    newentity('DL_MoveCopyDocuments', 'DL_EntityNameForeign,DL_EntityId', DLEntityNameForeign + ',' + DLEntityId, 'Action=320', 'Move basket to current entity');
}
function EXMoveCopyDocBasket2EntityDWP(DLEntityNameForeign, iType, subfolder) { // 12.9.2009 subfolder added
    if (typeof (subfolder) == 'undefined')
        subfolder = '';
    if (iType == 0) {
        alert('EXMoveCopyDocBasket2EntityDWP - please select a folder (maybe again) in order to paste documents');
        return;
    }
    var oXML = getEntityData('DL_D617', 'DL_EntityNameForeign  = \'' + DLEntityNameForeign + '\'', '');
    var DLEntityIdParam = getsafe(oXML, '//DL_PropNameForeign');
    if (DLEntityIdParam == '')
        DLEntityIdParam = DLEntityNameForeign;
    var DLEntityId = queryString(DLEntityIdParam);
    if (DLEntityId == '') {
        alert('EXMoveCopyDocBasket2EntityDWP(' + DLEntityNameForeign + ') no entity selected');
        return;
    }
    // Now create DL_MoveCopyDocuments entity - then copy basket to area, then execute EXMoveCopyDocuments action
    var oD810 = getEntityData('DL_D810FolderView', 'DL_Id = ' + iType, '');
    var oDate = new Date();
    var sTitle = 'Copied from basket to folder ' + getsafe(oD810, '//DL_Title') + ' at ' + oDate;
    var xOps = '<DL_MoveCopyDocuments>';
    xOps += '<DL_Title>' + sTitle + '</DL_Title><DL_MoveCopyAction>20</DL_MoveCopyAction><DL_MoveCopyStatus>0</DL_MoveCopyStatus><DL_IncludeVersions>1</DL_IncludeVersions><DL_FolderPathForeign>' + iType + '</DL_FolderPathForeign>';
    xOps += '<DL_EntityNameForeign>' + DLEntityNameForeign + '</DL_EntityNameForeign><DL_EntityId>' + DLEntityId + '</DL_EntityId>';
    xOps += '<DL_SubFolder>' + subfolder + '</DL_SubFolder>'; // 12.9.2009
    xOps += '</DL_MoveCopyDocuments>';
    var DLId = setEntityDetail('DL_MoveCopyDocuments', xOps);
    //alert('DL_MoveCopyDocuments created \n' + DLId + '\n' + xOps);
    var sUser = 'EXF\\' + GetEntityItemWhere('DL_sAMAccountName', 'DL_sAMAccountName = %DL_sAMAccountName%', 'DL_sAMAccountName');
    ExecuteProcedure('dbo.EXMoveDocBasket2SyncDocuments @WUser=\'' + sUser + '\',@DLEntity=\'DL_MoveCopyDocuments\', @DLEntityID = ' + DLId);
    //alert('Documents copied from basket for user ' + sUser);
    EXMoveCopyDocumentsRetry(DLId);
    //alert('Documents copied into folder');
}
function EXMoveCopyDocumentsRetry(DLId) {
    if (MoveCopyDocuments(DLId))
        EXMoveCopyDocumentsDisplay(DLId);
    else {
        alert('Could not move documents safely');
    }
}
function EXMoveCopyDocBasket2EntityDoIt(WUser, DLId) {
    //alert('EXMoveCopyDocBasket2EntityDoIt(' + WUser + ',' + DLId + ') started');
    ExecuteProcedure('dbo.EXMoveDocBasket2SyncDocuments @WUser=\'' + WUser + '\',@DLEntity=\'DL_MoveCopyDocuments\', @DLEntityID = ' + DLId);
    EXReload();
}
function MoveCopyDocuments(DLId) {
    try {
        var xmldoc;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<MoveCopyDocuments xmlns="http://exformatics.net/SharePointServices">';
        xmldoc = xmldoc + '<DL_Id>' + DLId + '</DL_Id>';
        xmldoc = xmldoc + '</MoveCopyDocuments>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", '/EX_SPSSVC/svcSharePoint.asmx?op=MoveCopyDocuments', false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://exformatics.net/SharePointServices/MoveCopyDocuments');
        FeedbackHTTP.send(xmldoc);
        return (getsafe(FeedbackHTTP.responseXML, '//MoveCopyDocumentsResult') == 'true');
    } catch (e) { alert('MoveCopyDocuments(' + DLId + ') failed ' + e.message); }
}

function EXActivitiesRollout(DLEntityNameForeign, DLEntityId) {
    var oEle = document.getElementById('DL_D310');
    if (oEle == null)
        return;
    if (oEle.value == '' || oEle.value == 'undefined')
        return;
    var DLD310 = oEle.value;
    if (!confirm('Rollout activities from ' + DLD310 + ' template?'))
        return;
    ExecuteProcedure('EXActivitiesRollout @DLEntityNameForeign = \'' + DLEntityNameForeign + '\', @DLEntityId = ' + DLEntityId + ', @DLD310=\'' + DLD310 + '\'');
    EXReload();
}
function EXNewYearlyPlanning() {
    alert('EXNewYearlyPlanning ' + EXDSgetIDs());
    ExecuteProcedure('dbo.EXNewYearlyPlanning @Ids=\'' + EXDSgetIDs() + '\'');
    //EXReload();
    alert('Done');
}

//alert('exformatics.js loaded');


//DHTML Window script- Copyright Dynamic Drive (http://www.dynamicdrive.com)
//For full source code, documentation, and terms of usage,
//Visit http://www.dynamicdrive.com/dynamicindex9/dhtmlwindow.htm

var dragapproved = false
var minrestore = 0
var initialwidth, initialheight
var ie5 = document.all && document.getElementById
var ns6 = document.getElementById && !document.all

function iecompattest() {
    return (!window.opera && document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body
}

function drag_drop(e) {
    if (ie5 && dragapproved && event.button == 1) {
        document.getElementById("dwindow").style.left = tempx + event.clientX - offsetx + "px"
        document.getElementById("dwindow").style.top = tempy + event.clientY - offsety + "px"
    }
    else if (ns6 && dragapproved) {
        document.getElementById("dwindow").style.left = tempx + e.clientX - offsetx + "px"
        document.getElementById("dwindow").style.top = tempy + e.clientY - offsety + "px"
    }
}

function initializedrag(e) {
    offsetx = ie5 ? event.clientX : e.clientX
    offsety = ie5 ? event.clientY : e.clientY
    document.getElementById("dwindowcontent").style.display = "none" //extra
    tempx = parseInt(document.getElementById("dwindow").style.left)
    tempy = parseInt(document.getElementById("dwindow").style.top)

    dragapproved = true
    document.getElementById("dwindow").onmousemove = drag_drop
}

function loadwindow(url, width, height) {
    if (!ie5 && !ns6)
        window.open(url, "", "width=width,height=height,scrollbars=1")
    else {
        document.getElementById("dwindow").style.display = ''
        document.getElementById("dwindow").style.width = initialwidth = width + "px"
        document.getElementById("dwindow").style.height = initialheight = height + "px"
        document.getElementById("dwindow").style.left = "30px"
        document.getElementById("dwindow").style.top = ns6 ? window.pageYOffset * 1 + 30 + "px" : iecompattest().scrollTop * 1 + 30 + "px"
        document.getElementById("cframe").src = url
    }
}

function maximize() {
    if (minrestore == 0) {
        minrestore = 1 //maximize window
        document.getElementById("maxname").setAttribute("src", "restore.gif")
        document.getElementById("dwindow").style.width = ns6 ? window.innerWidth - 20 + "px" : iecompattest().clientWidth + "px"
        document.getElementById("dwindow").style.height = ns6 ? window.innerHeight - 20 + "px" : iecompattest().clientHeight + "px"
    }
    else {
        minrestore = 0 //restore window
        document.getElementById("maxname").setAttribute("src", "max.gif")
        document.getElementById("dwindow").style.width = initialwidth
        document.getElementById("dwindow").style.height = initialheight
    }
    document.getElementById("dwindow").style.left = ns6 ? window.pageXOffset + "px" : iecompattest().scrollLeft + "px"
    document.getElementById("dwindow").style.top = ns6 ? window.pageYOffset + "px" : iecompattest().scrollTop + "px"
}

function closeit() {
    document.getElementById("dwindow").style.display = "none"
}

function stopdrag() {
    dragapproved = false;
    document.getElementById("dwindow").onmousemove = null;
    document.getElementById("dwindowcontent").style.display = "" //extra
}

function EXRolloutEmployeeCase(DLEntityNameForeign, DLEntityId) {
    var oXML = getEntityData(DLEntityNameForeign, 'DL_Id=' + DLEntityId, '');
    var DLWFCaseType = getsafe(oXML, '//DL_WFCaseType');
    var DLDueDate = getsafe(oXML, '//DL_EndDate');
    var DLWFCasePhase = getsafe(oXML, '//DL_CaseLongState');
    if (DLDueDate != '') {
        DLDueDate = ',@DLDueDate=\'' + DLDueDate.substring(0, 10) + '\'';  // 14.7.2008 - comma removed, syntax error
    }
    if (DLWFCasePhase != '')
        DLWFCasePhase = ',@DLWFCasePhase = ' + DLWFCasePhase;
    //alert('EXRolloutEmployeeCase(' + DLEntityNameForeign + ',' + DLEntityId + ') @DLWFCaseType=' + DLWFCaseType + DLDueDate + DLWFCasePhase + ' ');
    ExecuteProcedure('dbo.DoDLWFCaseTasksRollout @DLEntityNameForeign=\'' + DLEntityNameForeign + '\',@DLId=' + DLEntityId + DLDueDate + DLWFCasePhase + ',@DLWFCaseType=' + DLWFCaseType);
    alert('Tasks rolled out');
    EXReload();
}

function EXOpenPickFacet(DLEntityNameForeign, DLEntityId, bDynWPReload, sDefaultDimension) { // 17.7.2008
    try {
        if (EXGetUserRole() == 0) { // 3.11.2009
            alert(LEX_UserNoAccessCannotAddFacet);
            return;
        }
        if (typeof (sDefaultDimension) == 'undefined') //
            sDefaultDimension = '';
        if (typeof (bDynWPReload) == 'undefined')
            bDynWPReload = false;
        /*
        if (window.location.href.indexOf(getAbsoluteURL('/Activities/Pages/activity.aspx?DL_Activities=')) == 0) {
        loadcontent('/EX_Resources/EXFacetPlanNew.html?DL_EntityNameForeign=' + DLEntityNameForeign + '&DL_EntityId=' + DLEntityId,null,'V\346lg facetter');
        return;
        }
        */
        // 23.4.2013 - use jQUery dialog instead
        var oDiv = document.getElementById('EXDialog');
        if (oDiv == null) {
            var oDiv = document.createElement('DIV');
            oDiv.id = 'EXDialog';
            oDiv.innerHTML = '<IFRAME id="IFRAMEFACET" frameboder="0" width="100%" height="660px"></IFRAME>';
            document.body.appendChild(oDiv);
        }
        loadcontent('/EX_Resources/EXFacetplan.html?DL_EntityNameForeign=' + DLEntityNameForeign + '&DL_EntityId=' + DLEntityId + '&DynWPReload=' + bDynWPReload + '&Dimension=' + sDefaultDimension, 'IFRAMEFACET', '');
        $("#EXDialog").dialog({
            resizable: true,
            autoOpen: true,
            modal: true,
            width: 848,
            height: 808,
            title: LEX_SelectFacetter,
            buttons: {
                'Close': function () {
                    $(this).dialog('close');
                }
            }//end buttons
        }); //end dialog

        return;
        //var oEleDenorm = document.getElementById('DL_FacetDenorm');
        //oEleDenorm.value = '';
        var oFacetIFrame = document.getElementById('IFRAMEFACET');
        if (oFacetIFrame == null) {
            var oIFrame = document.createElement('IFRAME');
            oIFrame.id = 'IFRAMEFACET';
            oIFrame.style.width = '200px';
            oIFrame.style.height = '200px';
            oIFrame.style.zIndex = '3';
            oIFrame.style.position = 'absolute';
            oIFrame.frameborder = 0;
            document.body.appendChild(oIFrame);
            oIFrame = null;
            oFacetIFrame = document.getElementById('IFRAMEFACET');
        }
        oFacetIFrame.style.display = '';
        var oEle = document.getElementById('LABELDL_Facet');
        if (oEle == null) {
            oEle = document.getElementById('EXPickFacetImage');
            if (oEle == null) { // 28.8.2011
                oEle = document.getElementById('EXMailImage');
            }
            if (oEle != null) {
                oEle = oEle.parentNode; // A
                oEle = oEle.parentNode; // TD
                oEle = oEle.parentNode; // TR
            }
        }
        var iLeft = getElementLeft1(oEle) - 100;
        if (iLeft < 5) // 29.7.2008 - avoid out of bound issues
            iLeft = 5;
        oFacetIFrame.style.left = iLeft;
        oFacetIFrame.style.top = getElementTop1(oEle) - 20;
        var oEle = document.getElementById('DL_Facet');
        oFacetIFrame.src = getAbsoluteURL('/EX_Resources/EXFacetplan.html?DL_EntityNameForeign=' + DLEntityNameForeign + '&DL_EntityId=' + DLEntityId + '&DynWPReload=' + bDynWPReload + '&Dimension=' + sDefaultDimension);
        EXPickFacetResize(800, 800);
        //alert('EXPickFacet done - visible? ' + oFacetIFrame.src + ' ' + oFacetIFrame.innerHTML);
        //oEleDenorm.value = '...';
    } catch (e) { alert(e.message); }
}
function EXPickFacetResize(width, height) {
    //alert(width + ' ' + height);
    var oFacetIFrame = document.getElementById('IFRAMEFACET');
    if (oFacetIFrame != null) { // 29.7.2008 - only resize of IFRAME is found
        oFacetIFrame.style.width = width;
        oFacetIFrame.style.height = height;
    }
}
function EXPickFacetCancel() {
    // 23.4.2013 - close jQuery dialog
    $("#EXDialog").dialog('close');
    return;
    var oFacetIFrame = document.getElementById('IFRAMEFACET');
    oFacetIFrame.style.display = 'none';
    oFacetIFrame.style.width = "10px";
    oFacetIFrame.style.height = "10px";
}
function EXFillWFCaseType(DLEntityNameForeign) { // 18.8.2008 - 15.9.2009 - it cASE 748 Kritisk fejl rettet
    //alert('EXFillWFCaseType ' + DLEntityNameForeign);
    //FillDropDown('DL_WFCaseType','DL_WFCaseType','DL_Id','DL_Title','DL_WFCaseEntity',DLEntityNameForeign);
    var oWFCaseType = document.getElementById('DL_WFCaseType');
    var sWFCaseType;
    if (oWFCaseType.options.length > 0)
        sWFCaseType = oWFCaseType.options[oWFCaseType.selectedIndex].value;
    else
        sWFCaseType = '';
    var oEle = document.getElementById('DL_Process'); // 9.9.2008 - but how do we use this value - isnull(DL_Process, 0) in (0, oEle.value)
    var sProcess;
    if (oEle == null)
        sProcess = '';
    else
        sProcess = oEle.value;
    var sWhere = 'DL_WFCaseEntity = \'' + DLEntityNameForeign + '\'';
    if (sProcess == '')
        sWhere += ' AND isnull(DL_Process,0) = 0';
    else
        sWhere += ' AND isnull(DL_Process,0) in (0,' + sProcess + ')';
    if (sWFCaseType != '')
        sWhere += ' OR DL_Id = ' + sWFCaseType;
    oEle = oWFCaseType;
    var sValue = sWFCaseType;
    var oXML = getEntityData2('DISTINCT DL_Id as DL_PropCodeKey,DL_Title as DL_PropCodeDecode', 'DL_WFCaseType', sWhere, 'DL_Title'); // 18.4.2011 - DISTINCT added - Tele Greenland
    //alert('DEBUG\n' + sWhere + '\n' + oXML.xml);
    //FillDropDown('DL_WFCaseType','DL_WFCaseType','DL_Id','DL_Title','DL_WFCaseEntity',DLEntityNameForeign);
    var xNodes = oXML.selectNodes('//DL_WFCaseType');
    var i = xNodes.length;
    //alert(i);
    var arr = new Array(i + 1);
    // Add empty element initially - handling of default values?
    arr[0] = "<OPTION></OPTION>";
    //alert('DEBUG\n' + xNodes.length);
    oEle.options.length = 0; // 15.9.2009 - 15.7.2011 - moved two lines up - before the if statement
    if (xNodes.length == 0)
        oEle.disabled = true;
    else {
        oEle.disabled = false;
        var oP;
        oP = document.createElement('option');
        oP.text = '';
        oP.value = '';
        oEle.add(oP);
        for (i = 0; i < xNodes.length; i++) {
            xNode = xNodes[i];
            var DL_PropCodeKey = getsafe(xNode, "DL_PropCodeKey");
            var DL_PropCodeDecode = getsafe(xNode, "DL_PropCodeDecode");
            if (DL_PropCodeDecode == '')
                DL_PropCodeDecode = DL_PropCodeKey;
            if (false) {
                s = '<OPTION value="' + DL_PropCodeKey + '"';
                if (sValue != null && sValue != '' && sValue == DL_PropCodeKey)
                    s = s + ' SELECTED ';
                s = s + '>' + DL_PropCodeDecode + '</OPTION>';
                arr[i + 1] = s;
            }
            oP = document.createElement('option');
            oP.text = DL_PropCodeDecode;
            oP.value = DL_PropCodeKey;
            if (sValue != null && sValue != '' && sValue == DL_PropCodeKey)
                oP.selected = true;
            oEle.add(oP);
        };
        //alert('DEBUG\n' + oEle.outerHTML);
        if (false) {
            var ss, s1;
            var oParent;
            oParent = oEle.parentElement;
            s = oEle.outerHTML;
            alert('DEBUG\n' + s);
            //oEle.options.length = 0;
            //alert('DEBUG\n' + oEle.outerHTML);
            i = s.toLowerCase().indexOf('<option');
            if (i == -1)
                i = s.toLowerCase().indexOf('</select>');
            ss = s.substr(0, i);
            ss = ss + arr.join('');
            i = s.toLowerCase().indexOf('</select>');
            ss = ss + s.substr(i, s.length);
            oParent.innerHTML = ss;
            alert('DEBUG\n' + oParent.innerHTML);
        }
    }
    if (sWFCaseType == '') {
        if (queryString('DL_Action', true) == 'new') {
            sWFCaseType = queryString('DLWFCaseType', true);
            if (sWFCaseType != '') {
                //alert('new case with case type ' + sWFCaseType);
                oWFCaseType = document.getElementById('DL_WFCaseType');
                for (var i = 0; i < oWFCaseType.options.length; i++)
                    if (oWFCaseType.options[i].value == sWFCaseType) {
                        oWFCaseType.selectedIndex = i;
                        EXhandleDLWFCaseTypeChange();
                        break;
                    }
            }
        }
    }
}

// EXAdvDrop - 3.9.2008
var EXAdvDroptestString = "";
var oEXAdvDropold;

function EXAdvDropaddChar(oEle, e, bAnywhere) {
    if (typeof (bAnywhere) == 'undefined') // 9.9.2008 - new parameter
        bAnywhere = false;
    if (oEXAdvDropold != oEle) {
        oEXAdvDropold = oEle;
        EXAdvDroptestString = "";
    }
    var code = 0; // 23.10.2008
    if (e.keyCode) {
        code = e.keyCode;
    }
    else if (e.which) {
        code = e.which;
    }

    if (code == 38 || code == 40) return; // 23.10.2008
    if (code == 8) {
        EXAdvDroptestString = EXAdvDroptestString.replace(/.$/, "");
    }
    else {
        if (code == 222)
            EXAdvDroptestString += '&#248;';
        else
            EXAdvDroptestString += String.fromCharCode(code);
    }
    //EXAdvDroptestString = EXAdvDroptestString.replace('\248','&#248;');

    if (bAnywhere)
        re = new RegExp(EXAdvDroptestString);
    else
        re = new RegExp("^" + EXAdvDroptestString);
    var matched = false;

    var s;
<<<<<<< HEAD
    // 9.1.2009 - hvis intialer skal prioriteres hÃ¸jere end dropdown listen sÃ¥ skal nedenstÃ¥ende byttes om
=======
    // 9.1.2009 - hvis intialer skal prioriteres højere end dropdown listen så skal nedenstående byttes om
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
    for (i = 0; i < oEle.options.length; i++) {
        if (oEle.options[i].text.match(re)) {
            if (document.forms.length == 0) {
                s = 'document.all.' + oEle.id + '.selectedIndex';
            }
            else
                s = 'document.' + document.forms[0].name + '.' + oEle.id + '.selectedIndex';
            setTimeout(s + " = i", 50);
            matched = true;
            break;
        }
    }
    if (!matched) {
        for (i = 0; i < oEle.options.length; i++) {
            if (oEle.options[i].value.match(re)) {
                if (document.forms.length == 0) {
                    s = 'document.all.' + oEle.id + '.selectedIndex';
                }
                else
                    s = 'document.' + document.forms[0].name + '.' + oEle.id + '.selectedIndex';
                setTimeout(s + " = i", 50);
                matched = true;
                break;
            }
        }
    }

    if (!matched) {
        EXAdvDroptestString = EXAdvDroptestString.replace(/.*(.)$/, "$1");
        //EXAdvDroptestString = "";
    }
}
function EXCaseAddressSearch(DLCaseAddressType, DLId) {
    if (DLCaseAddressType == -2)
        DLId = GetEntityItemValue('DL_Contacts', DLId, 'DLContactID');
    var sUrl = 'http://www.dr.dk';
    sUrl = getAbsoluteURL('/EX_SQLSVC/DynamicSearch.html?DLEntity=DL_CMAllView&DLView=DL_CMAllContactsView&SearchParameters=DL_Title&DisplayParameters=DL_CaseNo,DL_Title,DL_Responsible,DL_CaseState&SearchOnLoad=true&WhereExtra=DL_Contacts=' + DLId);
    loadcontent(sUrl, 'DL_Information2');
}
function EXHTMLNote(oEle, DLId) {
    oEle.onmouseover = function () { };
    oEle.onmouseout = function () { };
    var oHTMLNote = getEntityData('DL_HTMLNotes', 'DL_Id=' + DLId, '');
    var s = HTML2Text(getsafe(oHTMLNote, '//DL_HTMLText'));
    oEle.title = s;
    //alert('EXHTMLNote ' + s);
    //alert(oEle.outerHTML + ' ' + bOverOut + ' ' + oEle.innerText + ' ' + DLId);
}
function HTML2Text(HTML) {
    try {
        var s = HTML;
<<<<<<< HEAD
        s = s.replace(/&#230;/g, '\346'); // Ã¦
        s = s.replace(/&#198;/g, '\306'); // Ã†
        s = s.replace(/&#248;/g, '\370'); // Ã¸
        s = s.replace(/&#216;/g, '\330'); // Ã˜
        s = s.replace(/&#229;/g, '\345'); // Ã¥
        s = s.replace(/&#197;/g, '\305'); // Ã…
        s = s.replace(/&nbsp;/g, ' ');
        s = s.replace(/&#198;/g, '\306'); // Ã†
        s = s.replace(/&amp;#198;/g, '\306'); // Ã†
        s = s.replace(/<(?:[^>'"]*|(['"]).*?\1)*>/g, "");
        // Very strange - we need to replace here - doesn't work above - strange!!!
        s = s.replace(/&#198;/g, '\306'); // Ã†
        s = s.replace(/&#216;/g, '\330'); // Ã˜
        s = s.replace(/&#197;/g, '\305'); // Ã…
=======
        s = s.replace(/&#230;/g, '\346'); // æ
        s = s.replace(/&#198;/g, '\306'); // Æ
        s = s.replace(/&#248;/g, '\370'); // ø
        s = s.replace(/&#216;/g, '\330'); // Ø
        s = s.replace(/&#229;/g, '\345'); // å
        s = s.replace(/&#197;/g, '\305'); // Å
        s = s.replace(/&nbsp;/g, ' ');
        s = s.replace(/&#198;/g, '\306'); // Æ
        s = s.replace(/&amp;#198;/g, '\306'); // Æ
        s = s.replace(/<(?:[^>'"]*|(['"]).*?\1)*>/g, "");
        // Very strange - we need to replace here - doesn't work above - strange!!!
        s = s.replace(/&#198;/g, '\306'); // Æ
        s = s.replace(/&#216;/g, '\330'); // Ø
        s = s.replace(/&#197;/g, '\305'); // Å
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
        //s = s.replace(/&amp;/g,'&');
        s = s.substr(0, 800);
        return s;
    } catch (e) { alert('HTML2Text(' + HTML + ') >>> ' + e.message); }
}

function EXhandleDLWFCaseTypeChange() { // 9.9.2008 - default functionality
	var oEle = document.getElementById('DL_WFCaseType');
	var DLId = oEle.options[oEle.selectedIndex].value;
	if (queryString('new') != 'true' && DLId == '') // 31.7.2010 - DLId logic added (requested by Tele Greenland - Charlotte)
		return;
	if (DLId == '') // 31.7.2010 - added
		return;
	if (document.getElementById('DL_CaseLongState') != null)  { // 27.9.2016 - IT Case 6381
		FillDropDown('DL_CaseLongState','DL_WFCaseTypePhase','DL_SequenceNo','DL_Title','DL_WFCaseType',DLId,'0','','','','',false,'','DL_SequenceNo'); 
	}
	if (document.getElementById('DL_CaseProtected') == null) // 14.6.2012 - if no protection exists - ignore
		return;
	var oXML = getEntityData('DL_WFCaseType', 'DL_Id = ' + DLId,''); 
	var DLCaseProtected = getsafe(oXML, '//DL_CaseProtected');
	if (DLCaseProtected == '')
		DLCaseProtected = '0';
	var DLSecurityPersons = getsafe(oXML, '//DL_SecurityPersons');
	var DLADSecurityGroups = getsafe(oXML, '//DL_ADSecurityGroups');
	EXSetField('DL_CaseProtected', DLCaseProtected, true);
	EXSetField('DL_SecurityPersons', DLSecurityPersons, false);
	EXSetField('DL_ADSecurityGroups', DLADSecurityGroups, false);
	oEle = document.getElementById('DL_CaseProtected');
	EXhandleDLCaseProtected(oEle);
	oEle = null;
}

function EXhandleDLWFCaseTypeChangeXX() { // 9.9.2008 - default functionality
    var oEle = document.getElementById('DL_WFCaseType');
    var DLId = oEle.options[oEle.selectedIndex].value;
    if (queryString('new') != 'true' && DLId == '') // 31.7.2010 - DLId logic added (requested by Tele Greenland - Charlotte)
        return;
    if (DLId == '') // 31.7.2010 - added
        return;
    if (document.getElementById('DL_CaseProtected') == null) // 14.6.2012 - if no protection exists - ignore
        return;
    var oXML = getEntityData('DL_WFCaseType', 'DL_Id = ' + DLId, '');
    var DLCaseProtected = getsafe(oXML, '//DL_CaseProtected');
    if (DLCaseProtected == '')
        DLCaseProtected = '0';
    var DLSecurityPersons = getsafe(oXML, '//DL_SecurityPersons');
    var DLADSecurityGroups = getsafe(oXML, '//DL_ADSecurityGroups');
    EXSetField('DL_CaseProtected', DLCaseProtected, true);
    EXSetField('DL_SecurityPersons', DLSecurityPersons, false);
    EXSetField('DL_ADSecurityGroups', DLADSecurityGroups, false);
    oEle = document.getElementById('DL_CaseProtected');
    EXhandleDLCaseProtected(oEle);
    oEle = null;
}
function EXSetField(sEle, sValue, bOverwrite) {
    var oEle = document.getElementById(sEle);
    if (oEle == null) {
        alert('Configuration error\nEXSetField(' + sEle + ',' + sValue + ',' + bOverwrite + ').\nPlease contact administrator.');
        return;
    }
    if (oEle.value == '' || bOverwrite && sValue != '')
        oEle.value = sValue;
}

function EXDisplayEmployee(DLsAMAccountName) {
    var oXML = getEntityData('DL_sAMAccountName', 'DL_sAMAccountName = \'' + DLsAMAccountName + '\'', '');
    displayentity('DL_sAMAccountName', getsafe(oXML, '//DL_Id'));
}
function EXGotoEmployee(DLsAMAccountName) {
    var oXML = getEntityData('DL_Employee', 'DL_sAMAccountName = \'' + DLsAMAccountName + '\'', '');
    var DLId = getsafe(oXML, '//DL_Id');
    if (DLId == '') {
        oXML = getEntityData('DL_sAMAccountName', 'DL_sAMAccountName = \'' + DLsAMAccountName + '\'', '');
        EXGotoObject('DL_sAMAccountName', DLId);
    }
    else
        EXGotoObject('DL_Employee', DLId);
    //	loadcontent('http://inussuk/DK/Organisation/S%c3%b8geresultat+Person.htm?name=&inits=' + DLsAMAccountName);
}

function EXCaseAddressesGetEmails(DLEntityNameForeign, DLEntityId, bWarnIfNotAll) { // 23.6.2012
    if (typeof (bWarnIfNotAll) == 'undefined') bWarnIfNotAll = true;
    var oXML = getEntityData('DL_CaseAddresses', 'DL_EntityId=' + DLEntityId + ' AND DL_EntityNameForeign = \'' + DLEntityNameForeign + '\'', '');
    var sRes = '';
    var sWarn = '';
    var xNodes = oXML.selectNodes('//DL_CaseAddresses');
    for (var i = 0; i < xNodes.length; i++) {
        var Email = getsafe(xNodes[i], 'DL_Email');
        if (Email == '')
            sWarn += ';' + getsafe(xNodes[i], 'DL_Attention');
        else
            sRes += ';' + Email;
    }
    if (sWarn != '') {
        sWarn = LEX_WarnNotAllEmailsFound.replace('%0%', sWarn.substr(1));
        if (bWarnIfNotAll) alert(sWarn);
        //sRes = sWarn + '\n' + sRes.substr(1);
        sRes = sRes.substr(1);
    }
    else
        sRes = sRes.substr(1);
    return sRes;
}
function EXCaseContactsLoad(DLEntity, DLKey, DLXPath) {
    if (typeof (DLXPath) == 'undefined')
        DLXPath = '';
    if (DLXPath == '')
        DLXPath = 'DL_Id';
    if (DLEntity == 'DL_Contacts')
        DLXPath = 'DLContactID';
    var sWhere;
    if (DLXPath == 'DL_Id')
        sWhere = 'DL_Id = ' + DLKey;
    else
        sWhere = DLXPath + '= \'' + DLKey + '\'';
    var oXML = getEntityData(DLEntity, sWhere, '');
    var sRole = queryString('Role');
    var sCaseType = queryString('CaseType'); // Critical parameter set in DynamicSearch
    //alert('DEBUG\nEXCaseContactsLoad ' + DLEntity + ':'+ DLKey + ' Role=' + sRole + ' CaseType=' + sCaseType);
    var sKeys = queryString('ForeignKeys');
    var sValues = queryString('ForeignValues');
    var sAppendParam = '&CaseType=' + sCaseType + '&Role=' + sRole + '&DLEntity=' + DLEntity + '&DLKey=' + DLKey;
    var sTitle;
    if (DLEntity == 'DL_Contacts')
        sTitle = 'Opret ' + getsafe(oXML, '//DL_Contacts/EX_cn') + ' som ' + LEXCaseAddress;
    else
        sTitle = 'Opret ' + getsafe(oXML, '//DL_sAMAccountName/DL_FullName') + ' som ' + LEXCaseAddress;
    parent.newentity2('DL_CaseAddresses', sKeys, sValues, sAppendParam, sTitle);
}
function EXLoadNewDocument(DLEntity, DLId, Flags, subfolder, sTitle, DLFolderParams) { // 25.2.2012 sTitle added 17.5.2012 DLFolderParams added
    if (typeof (DLFolderParams) == 'undefined')
        DLFolderParams = '';
    if (typeof (sTitle) == 'undefined')
        sTitle = '';
    if (typeof (subfolder) == 'undefined')
        subfolder = '';
    if (EXGetUserRole() == 0) {// 3.11.2009
        alert(LEX_UserNoAccessCannotCreateDocuments);
        return;
    }

    var sUrl = getAbsoluteURL('/EX_Resources/EXNewDocument.html?DL_EntityNameForeign=' + DLEntity + '&Flags=' + Flags + '&subfolder=' + subfolder);
    if (sTitle == '')
        sTitle = LEX_OpenCreateNewDocument;
    if (DLFolderParams != '')
        sUrl += '&DL_FolderParams=' + DLFolderParams;
    if (DLId != '')
        sUrl += '&QueryParam=' + DLId;
    loadcontent2(sUrl, sTitle);
}
function EXTaskDocsToBasket(entity, id) { // 10.12.2008
    //	ExecuteProcedure('dbo.EXMoveEntityToDocBasket @DLEntityNameForeign = \'' + entity + '\', @DLEntityId=' + id + ', @WUSER = %WUSER%');
    ExecuteProcedure('dbo.EXTaskDocsToBasket @DLEntityNameForeign = \'' + entity + '\', @DLEntityId=' + id + ', @WUSER = %WUSER%'); // 26.4.2009
    EXDocBasketRefresh();
}
function EXShowPropView(DLEntityOrViewName, DLPropRecent, DLEntityNameForeign) { // 9.1.2009
    if (typeof (DLEntityNameForeign) == 'undefined')
        DLEntityNameForeign = '';
    //alert('EXShowPropView(' + DLEntityOrViewName + ',' + DLPropRecent + ',' + DLEntityNameForeign + ') started');
    if (DLPropRecent == '') {
        if (DLEntityNameForeign == '') // 13.6.2012
            DLEntityNameForeign = DLEntityOrViewName.replace('PropView', '');
        var oXML = getEntityData('DL_D617', 'DL_EntityNameForeign = \'' + DLEntityNameForeign + '\'', '');
        //DLPropRecent = getsafe(oXML, '//DL_PropNameForeign');
        DLPropRecent = getsafe(oXML, '//DL_Href');
        //alert(DLPropRecent + ' ' + oXML.xml)
    }
    //var sUrl = '/EX_Resources/EXDisplayEntity.html?DL_ENTITY=' + DLEntityOrViewName + '&amp;SYSOBJECTS=true&amp;';
    var sUrl = '/EX_Resources/EXDisplayQuickPart.html?DL_ENTITY=' + DLEntityOrViewName + '&amp;SYSOBJECTS=true&amp;'; // 4.8.2011
    if (DLPropRecent == 'DL_AuthorInitials')
        sUrl += 'Where=DL_sAMAccountName=%DL_sAMAccountName%';
    else if (DLPropRecent == 'DL_CaseAddresses') {
        var oXML = getEntityData2('TOP 2 *', 'DL_CaseAddresses', '', '');
        sUrl += 'DL_Id=' + getsafe(oXML, '//DL_Id');
    }
    else
        sUrl += 'DL_Id=' + GetRecentValue(DLPropRecent);
    //alert(sUrl);
    sUrl = getAbsoluteURL(sUrl);
    loadcontent(sUrl, 'NEW', '');
}
function EXBRMUpdateAddress(DLId) { // 2.6.2009
    //alert('EXBRMUpdateAddress ' + DLId);
    var LEX_BRM_UpdateAllContacts = 'Address modified. Do you wish to modify all BRM contacts to reflect the new address? It takes quite a while.';
    if (confirm(LEX_BRM_UpdateAllContacts)) {
        try {
            var objAddin;
            objAddin = getOutlookAddIn();
            var sResult;
            if (objAddin == null) {
                sResult = "";
            }
            else {
                sResult = objAddin.object.EXBRMUpdateAddress(DLId);
            }
            if (sResult == "") {
                var LEX_BRM_UpdateAllContactsError = 'Could not update all contacts for busines unit {0}';
                alert(LEX_BRM_UpdateAllContactsError.format(DLId));
            }
            else
                alert(sResult + ' contacts updated');
            objAddin = null;
        }
        catch (e) { alert('EXBRMUpdateAddress failed ' + e.message); }
    }
}
function EXTable2CSV(oDiv, bSkipLast) { // 7.9.2009 - bSkipLast added - used in DynamicSearch
    var arr = new Array();
    var oTRs = oDiv.getElementsByTagName('tr');
    var s;
    for (var i = 0; i < oTRs.length - (bSkipLast ? 1 : 0); i++) {
        s = '';
        var oTDs = oTRs[i].getElementsByTagName('td');
        if (oTDs.length == 0 && i == 0)
            oTDs = oTRs[i].getElementsByTagName('th');
        for (var j = 0; j < oTDs.length; j++) {
            if (j > 0)
                s += ';';
            s += oTDs[j].innerText.replace(/;/g, ' ');
        }
        //s += '\\\n';
        arr[arr.length] = s;
    }
    s = arr.join("\r\n");
    return s;
}
// 2.9.2009 - copied from EXDocs.js - profiling now general
var EXUserOnMouseTimer = null;
function EXUserOnMouseOut(element, event, bSet) { // 2.9.2009 - Fix child element on mouse out - http://webmaster-forums.code-head.com/showthread.php?t=854
    return; // 28.4.2013 - remove logic
    //alert('EXUserOnMouseOut(' + element + ',' + event + ',' + bSet + ') invoked');
    try {
        if (EXUserOnMouseTimer != null) {
            clearTimeout(EXUserOnMouseTimer);
            EXUserOnMouseTimer = null;
        }
        if (bSet) { // 2.9.2009
            var current_mouse_target = null;
            if (event.toElement) {
                current_mouse_target = event.toElement;
            } else if (event.relatedTarget) {
                current_mouse_target = event.relatedTarget;
            }
            bSet = false;
            if (!is_child_of(element, current_mouse_target) && element != current_mouse_target) {
                bSet = true;
            }
        }
        if (bSet)
            EXUserOnMouseTimer = setTimeout('EXUserOnMouseOutHide()', 300) // 26.6.2009 - 1000 --> 300
    } catch (e) { window.status = 'EXUserOnMouseOut(' + bSet + ') >>> ' + e.message; }
}
function is_child_of(parent, child) { // 20.8.2010 - moved to this location from EXDocs.js
    if (child != null) {
        while (child.parentNode) {
            if ((child = child.parentNode) == parent) {
                return true;
            }
        }
    }
    return false;
}
function EXUserOnMouseOutHide() {
    var oUserDIV = document.getElementById('EXUserDIV');
    if (oUserDIV != null) {
        //oUserDIV.style.top = 0;
        //oUserDIV.style.left = 0;
        //oUserDIV.zIndex = '0';
        oUserDIV.style.display = 'none';
    }
}
var bIn = false;
function EXGotoEmpl(sAMAccountName) {
    var oXML = getEntityData('DL_D617', 'DL_EntityNameForeign = \'DL_sAMAccountName\'', ''); // 11.6.2010
    var sUrl = getsafe(oXML, '//DL_URLPortal');
    if (sUrl != '') {
        var xUser = getEntityData('DL_sAMAccountName', 'DL_sAMAccountName = \'' + sAMAccountName + '\'', '');
        sUrl = sUrl.replace('%DL_Id%', getsafe(xUser, '//DL_Id'));
        sUrl = sUrl.replace('%DL_sAMAccountName%', sAMAccountName);
        sUrl = sUrl.replace('%DL_FolderParams%', getsafe(xUser, '//DL_FolderParams'));
        EXGotoUrl(sUrl);
        //EXGotoUrl(getAbsoluteURL('/HR/Pages/default.aspx?User=' + sAMAccountName));
    }
}
function EXUserOnMouseOver(oEle, sAMAccountName, DLId, DLModified, DLEntityNameForeign, DLEntityId) {
    try {
        if (typeof (DLId) == 'undefined') { // 4.8.2010
            DLId = ''; DLModified = ''; DLEntityNameForeign = ''; DLEntityId = '';
        }
        //alert('DEBUG\nEXUserOnMouseOver(' + oEle + ',' + sAMAccountName + ') started'); // 18.12.2009 - debug
        if (typeof (oEle) == 'undefined')
            alert('EXUserOnMouserOver(<UNDEFINED>,' + sAMAccountName + ') invoked - SERIOUS ERROR');
        if (oEle == null)
            alert('EXUserOnMouseOver(null, ' + sAMAccountName + ') element must be provided');
        //		alert('EXUserOnMouserOver(' + oEle.innerHTML + ',' + sAMAccountName + ') invoked');
        if (sAMAccountName == '') {
            alert('EXUserOnMouserOver(' + oEle.innerHTML + ',' + sAMAccountName + ') invoked');
            sAMAccountName = 'mmq';
        }
        if (bIn) return;
        bIn = true;
        var oUserDIV = document.getElementById('EXUserDIV');
        if (oUserDIV == null) {
            var oDiv = document.createElement('DIV');
            oDiv.id = 'EXUserDIV';
            oDiv.className = 'exf-authorballoon'; // 30.9.2009
            //oDiv.style.width = '200px';
            //oDiv.style.height = '200px';
            oDiv.style.position = 'absolute';
            //oDiv.frameborder = 0;
            document.body.appendChild(oDiv);
            oDiv = null;
            oUserDIV = document.getElementById('EXUserDIV');
            if (oUserDIV == null)
                alert('oUserDIV not defined - STRANGE');
        }
        oUserDIV.style.zIndex = '3';
        oUserDIV.style.display = '';
        var xUser = getEntityData('DL_sAMAccountName', "DL_sAMAccountName='" + sAMAccountName + "'", '');
        var sDoing = getsafe(xUser, '//DL_Description');
        var sPhone = getsafe(xUser, '//DL_Phone');
        var sURLImg = getsafe(xUser, '//DL_URLImage');
        //alert(sAMAccountName + ' ' + sDoing);
        var sTitle = '';
        if (oEle.title != null)
            sTitle = oEle.title;
        if (sTitle == '')
            sTitle = getsafe(xUser, '//DL_Name');
        if (sTitle == '')
            sTitle = getsafe(xUser, '//DL_Fullname');
        if (sTitle == '')
            sTitle = 'Init: ' + sAMAccountName;
        var sImg;
        if (sURLImg == '')
            sImg = '<img src="/EX_Resources/gif/48x48/User 1.gif" width="48px" height="48px"></img>';
        else
            sImg = '<img src="' + sURLImg + '" width="40px" height="48px"></img>';
        //alert(sImg);
        var sDoing1;
        if (sDoing.length > 24) {
            sDoing1 = sDoing.substr(0, 25);
            var jj = sDoing1.lastIndexOf(' ');
            if (jj > 15)
                sDoing1 = sDoing1.substr(0, jj);
            sDoing1 += '...';
        }
        else
            sDoing1 = sDoing;
        var sAuthorAction = '<td class="exf-authoraction" title="Skriv besked..."><a href="javascript:" onclick="EXExformationNewMessage(\'' + sAMAccountName + '\', \'' + DLId + '\',\'' + DLModified + '\',\'' + DLEntityNameForeign + '\',\'' + DLEntityId + '\')"><img border="0" src="/EX_Resources/gif/16x16/Exclamation Green.gif"></img></a></td>';
        var sPhoneLine = '<tr><td colspan="2">' + sPhone + '</td></tr>';
        oUserDIV.innerHTML = '<div onmouser1over="EXUserOnMouseOut(this, event, false)" onmouseout="EXUserOnMouseOut(this, event, true)" oncli1ck="EXGotoEmpl(\'' + sAMAccountName + '\')"><table cellspacing="0" cellpadding="0" class="exf-authorballoon"><tr><td class="exf-authorimage">' + sImg + '</td><td><table><tr>' + sAuthorAction + '<td class="exf-authorname" onclick="EXGotoEmpl(\'' + sAMAccountName + '\')">' + sTitle + '</td></tr><tr><td colspan="2" class="exf-authordoing" title="' + sDoing + '">' + sDoing1 + '</td></tr>' + sPhoneLine + '</table></td></tr></table></div>';
        //alert(oUserDIV.outerHTML);
        //window.status = 'EXUserOnMouseOver ' + sAMAccountName;
        var ii = getElementTop1(oEle);
        if (ii < 2) ii = 2; // 4.8.2010
        //alert('getElementTop ' + ii);
        oUserDIV.style.top = ii;
        ii = getElementLeft1(oEle) - 50;
        if (ii < 12) ii = 12; // 4.8.2010
        //alert('getElementLeft ' + ii);
        oUserDIV.style.left = ii;
        //alert('EXUserOnMouseOver ' + sAMAccountName + ' ' + oEle);
    } catch (e) { alert('EXUserOnMouseOver ' + e.message); }
    bIn = false;
}

// 29.08.2010 BH TEST EXEntityOnMouseOver
//function EXEntityOnMouseOver(oEle, sAMAccountName, DLId, DLModified, DLEntityNameForeign, DLEntityId) {
function EXEntityOnMouseOver(oEle, DLEntityNameForeign, DLEntityId) {
    try {
        //	if (typeof(DLId) == 'undefined') { // 4.8.2010
        //		DLId = ''; DLModified = ''; DLEntityNameForeign = ''; DLEntityId = '';
        //	}
        //alert('DEBUG\nEXUserOnMouseOver(' + oEle + ',' + sAMAccountName + ') started'); // 18.12.2009 - debug
        if (typeof (oEle) == 'undefined')
            alert('EXEntityOnMouseOver(<UNDEFINED>,' + DLEntityNameForeign + ') invoked - SERIOUS ERROR');
        if (oEle == null)
            alert('EXEntityOnMouseOver(null, ' + sAMAccountName + ') element must be provided');
        //		alert('EXUserOnMouserOver(' + oEle.innerHTML + ',' + sAMAccountName + ') invoked');
        //	if (sAMAccountName == '') {
        //		alert('EXEntityOnMouseOver(' + oEle.innerHTML + ',' + sAMAccountName + ') invoked');
        //		sAMAccountName='mmq';
        //	}
        if (bIn) return;
        bIn = true;
        var oUserDIV = document.getElementById('EXUserDIV');
        if (oUserDIV == null) {
            var oDiv = document.createElement('DIV');
            oDiv.id = 'EXUserDIV';
            oDiv.className = 'exf-authorballoon'; // 30.9.2009
            //oDiv.style.width = '200px';
            //oDiv.style.height = '200px';
            oDiv.style.position = 'absolute';
            //oDiv.frameborder = 0;
            document.body.appendChild(oDiv);
            oDiv = null;
            oUserDIV = document.getElementById('EXUserDIV');
            if (oUserDIV == null)
                alert('EXUserDIV not defined - STRANGE');
        }
        oUserDIV.style.zIndex = '3';
        oUserDIV.style.display = '';
        var xUser = getEntityData(DLEntityNameForeign, "DL_Id=" + DLEntityId + "", '');
        //	alert(DLEntityNameForeign + xUser.xml);
        var sDoing = getsafe(xUser, '//DL_Description');
        if (sDoing == '')
            sDoing = getsafe(xUser, '//DL_ProjectName');
        if (sDoing == '')
            sDoing = getsafe(xUser, '//DL_TextBox');
        var sPhone = getsafe(xUser, '//DL_Phone');
        var sURLImg = getsafe(xUser, '//DL_URLImage');
        //alert(sAMAccountName + ' ' + sDoing);
        var sTitle = '';
        if (oEle.title != null)
            sTitle = oEle.title;
        if (sTitle == '')
            sTitle = getsafe(xUser, '//DL_Name');
        if (sTitle == '')
            sTitle = getsafe(xUser, '//DL_Fullname');
        if (sTitle == '')
            sTitle = getsafe(xUser, '//DL_Title');
        if (sTitle == '')
            sTitle = getsafe(xUser, '//DL_ProjectID');
        var sImg;
        if (sURLImg == '')
            sImg = '<img src="/EX_Resources/gif/48x48/User 1.gif" width="48px" height="48px"></img>';
        else
            sImg = '<img src="' + sURLImg + '" width="40px" height="48px"></img>';
        sImg = '';
        //alert(sImg);
        var sDoing1;
        if (sDoing.length > 24) {
            sDoing1 = sDoing.substr(0, 25);
            var jj = sDoing1.lastIndexOf(' ');
            if (jj > 15)
                sDoing1 = sDoing1.substr(0, jj);
            sDoing1 += '...';
        }
        else
            sDoing1 = sDoing;
        var sAuthorAction = '<td class="exf-authoraction" title="Skriv besked...">' + '' + '</td>';
        //<a href="javascript:" onclick="EXExformationNewMessage(\'' + sAMAccountName + '\', \'' + DLId + '\',\'' + DLModified + '\',\'' + DLEntityNameForeign + '\',\'' + DLEntityId + '\')"><img border="0" src="/EX_Resources/gif/16x16/Exclamation Green.gif"></img></a></td>';
        var sPhoneLine = '<tr><td colspan="2">' + sPhone + '</td></tr>';
        oUserDIV.innerHTML = '<div onmouser1over="EXUserOnMouseOut(this, event, false)" onmouseout="EXUserOnMouseOut(this, event, true)" oncli1ck="EXGotoEmpl(\'' + sAMAccountName + '\')"><table cellspacing="0" cellpadding="0" class="exf-authorballoon"><tr><td class="exf-authorimage">' + sImg + '</td><td><table><tr>' + sAuthorAction + '<td class="exf-authorname" on1click="EXGotoEmpl(\'' + sAMAccountName + '\')" on2click="alert(\'123\');EXGotoObject(\'' + DLEntityNameForeign + '\', ' + DLEntityId + ')"><a href="javascript:EXGotoObject(\'' + DLEntityNameForeign + '\', ' + DLEntityId + ')">' + sTitle + '</a></td></tr><tr><td colspan="2" class="exf-authordoing" title="' + sDoing + '">' + sDoing1 + '</td></tr>' + sPhoneLine + '</table></td></tr></table></div>';
        //alert(oUserDIV.outerHTML);
        //window.status = 'EXUserOnMouseOver ' + sAMAccountName;
        var ii = getElementTop1(oEle);
        if (ii < 2) ii = 2; // 4.8.2010
        //alert('getElementTop ' + ii);
        oUserDIV.style.top = ii;
        ii = getElementLeft1(oEle) - 50;
        if (ii < 12) ii = 12; // 4.8.2010
        //alert('getElementLeft ' + ii);
        oUserDIV.style.left = ii;
        //alert('EXUserOnMouseOver ' + sAMAccountName + ' ' + oEle);
    } catch (e) { alert('EXUserOnMouseOver ' + e.message); }
    bIn = false;
}
function EXExformationNewMessage(sAMAccountName, DLId, DLModified, DLEntityNameForeign, DLEntityId) { // 4.8.2010
    //function 
    var oUserDIV = document.getElementById('EXUserDIV');
    if (oUserDIV != null)
        oUserDIV.style.display = 'None';
    alert('EXExforamtionNewMessage ' + sAMAccountName + DLId + ' ' + DLModified + ' ' + DLEntityNameForeign + ' ' + DLEntityId);
    EXShowAddExformation(window.event.srcElement, DLId, DLModified, DLEntityNameForeign, DLEntityId, '@' + sAMAccountName + ' ');
}
function EXEditTask(DLId) { // 3.9.2009
    var sUrl = '/EX_SQLSVC/DynamicForm.aspx?DL_ENTITY=DL_Tasks&where=DL_Id=' + DLId + '&update=true&EXcheck=' + Math.random();
    //window.showModalDialog(sUrl,'','dialogWidth:530px;dialogHeight:560px;toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,copyhistory=no,resizable=no,modal=yes');
    window.open(sUrl, '', 'width=530,height=560,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,copyhistory=no,resizable=no'); // 26.11.2009 - Tele Greenland modification
}

function RemoveHREF(htmlstring) {
    var s = _RemoveString('&lt;A href="javascript:', '"&gt;', htmlstring);
    //alert(s);
    s = _RemoveString('&lt;a href="javascript:', '"&gt;', s);
    //alert(s);
    s = _RemoveString('href="javascript:', '"', s);
    //alert(s);

    s = s.replace(/<A >/gi, '<A>');
    s = s.replace(/<A  >/gi, '<A>');
    return s;
}


function _RemoveString(searchstring, endstring, htmlstring) {
    var sHtml = htmlstring;
    var i = sHtml.indexOf(searchstring);
    var j = 0;
    //alert('searchstring : ' + searchstring + '\r\n\r\nendstring: ' + endstring + '\r\n\r\nhtmlstring :' + htmlstring)
    while (i > -1) {
        var sTemp = '';
        j = sHtml.indexOf(endstring, i + 15);
        sTemp = sHtml.substr(i, j - i + endstring.length);
        sHtml = sHtml.replace(sTemp, '');
        i = sHtml.indexOf(searchstring);
    }
    return sHtml;
}

function HTML2PDF(urlBase, htmlString, filename) {
    try {
        //htmlString='hej med <b>dig</b>';

        var sHtml = RemoveHREF(htmlString);

        setRecentValueXML('EXHTML2PDF', '<a><urlBase>' + MakeXMLSafe(urlBase) + '</urlBase><htmlString>' + MakeXMLSafe(sHtml) + '</htmlString><filename>' + MakeXMLSafe(filename) + '</filename></a>');
        window.open(getAbsoluteURL('/EX_SPSSVC/EXPDF.aspx'));
        return;
        //alert('HTML2PDF(' + urlBase + ',' + htmlString + ') started');
        var xmldoc;
        xmldoc = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>';
        xmldoc = xmldoc + '<HTML2PDF xmlns="http://exformatics.net/SharePointServices">';
        xmldoc = xmldoc + '<urlBase>' + MakeXMLSafe(urlBase) + '</urlBase>';
        xmldoc = xmldoc + '<htmlString>' + MakeXMLSafe(htmlString) + '</htmlString>';
        xmldoc = xmldoc + '</HTML2PDF>';
        xmldoc = xmldoc + '</soap:Body></soap:Envelope>';

        FeedbackHTTP = EXXMLHTTP()
        FeedbackHTTP.open("POST", getAbsoluteURL('/EX_SPSADMSVC/svcSharePoint.asmx?op=HTML2PDF'), false);
        FeedbackHTTP.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
        FeedbackHTTP.setRequestHeader("SOAPAction", 'http://exformatics.net/SharePointServices/HTML2PDF');
        FeedbackHTTP.send(xmldoc);
        //alert(FeedbackHTTP.status + ' ' + FeedbackHTTP.responseText);
        FeedbackHTTP = null;
        return;
        return (getsafe(FeedbackHTTP.responseXML, '//CreateFolderResult') == 'true');
    } catch (e) { alert('HTML2PDF(' + urlBase + ',' + htmlString.substring(0, 100) + ') failed\n' + e.message); }
}
function EXTable2XML(oDiv, bSkipLast) { // 7.9.2009 - bSkipLast added - used in DynamicSearch
    var arr = new Array();
    var oTRs = oDiv.getElementsByTagName('tr');
    var s;
    for (var i = 0; i < oTRs.length - (bSkipLast ? 1 : 0); i++) {
        s = '<row>';
        var oTDs = oTRs[i].getElementsByTagName('td');
        if (oTDs.length == 0 && i == 0)
            oTDs = oTRs[i].getElementsByTagName('th');
        for (var j = 0; j < oTDs.length; j++) {
            s += '<E' + j + '>' + oTDs[j].innerText.replace(/;/g, ' ') + '</E' + j + '>';
        }
        s += '</row>';
        arr[arr.length] = s;
    }
    s = '<rows' > +arr.join("\r\n") + '</rows>';
    return s;
}
function HTML2XLSX(oDiv, title) { // 29.11.2009
    var xml = EXTable2XML(oDiv, false);
    setRecentValueXML('EXXML2XLS', '<a><Name></Name><Subject></Subject><Comments></Comments><filename></filename><xml>' + xml + '</xml></a>');
}
function EXShowWFCaseTypeInfo(DLWFCaseType) { // 7.9.2009 - 25.7.2011 - modified
    var oEle = document.getElementById('DL_WFCaseType');
    if (oEle == null)
        return;
    var oXML = getEntityData('DL_WFCaseType', 'DL_Id=' + DLWFCaseType, '');
    var DLsAMAccountNameForeign = getsafe(oXML, '//DL_sAMAccountNameForeign');
    var xOwner = getEntityData('DL_sAMAccountName', 'DL_sAMAccountName = \'' + DLsAMAccountNameForeign + '\'', '');
    var DLURLImage = getsafe(xOwner, '//DL_URLImage');
    var DLName = getsafe(xOwner, '//DL_Name');

    sTable = '<table>';
    sTable += AddTableRow(LEX_Title, '<a href="javascript:" onclick="loadentity(\'DL_WFCaseType\', ' + DLWFCaseType + ')">' + getsafe(oXML, '//DL_Title') + '</a>');
    sTable += AddTableRow(LEX_WF_ProcessOwner, DLName + (DLURLImage == '' ? '' : '<img border="0" src="' + DLURLImage + '" width="32px"></img>'));
    var sDesc = getsafe(oXML, '//DL_HTMLText');
    sDesc = sDesc.replace('PHASEDESCRIPTION', '');
    if (sDesc != '')
        sTable += '<tr><td class="ms-vb" colspan="2">' + sDesc + '</td></tr>';
    sTable += '</table>';
    oEle.innerHTML = sTable;

    //alert('EXShowWFCaseTypeInfo ' + oEle.value);
}
function AddTableRow(label, content) { // 25.7.2011 - retrieved from Exformatics_cust.js
    var s;
    s = '<tr>';
    if (label != '')
        s += '<td class="ms-vb"><b>' + label + '</b></td>';
    if (content != '')
        s += '<td class="ms-vb">' + content + '</td>';
    s += '</tr>';
    return s;
}
function EXTaskSendBack(DLId) { // 7.10.2009 // 3.10.2012 - send opgaver tilbage hvis du har skabt dem - dvs tag ejerskab for dem!
    //alert('EXTaskSendBack(' + DLId + ')');
    var oXML = getEntityData('DL_Tasks', 'DL_Id = ' + DLId, '');
    var oUser = getEntityData('DL_sAMAccountName', 'DL_sAMAccountName = %DL_sAMAccountName%', '');
    var sAMAccountName = getsafe(oUser, '//DL_sAMAccountName/DL_sAMAccountName');
    if (sAMAccountName != getsafe(oXML, '//BPM_Responsible') && sAMAccountName != getsafe(oXML, '//DL_TaskFrom')) {
        //var LEX_TaskSendBackCanOnlyChangeOwn = 'Du kan kun sende egne opgaver tilbage.';
        alert(LEX_TaskSendBackCanOnlyChangeOwn);
        return;
    }
    if (getsafe(oXML, '//DL_TaskFrom') == getsafe(oXML, '//BPM_Responsible'))
        return;
    //var LEX_TaskSendBackQuestion = 'Vil du sende opgaven fra {0} tilbage?';
    if (confirm(LEX_TaskSendBackQuestion.format(getsafe(oXML, '//DL_TaskFrom')))) {
<<<<<<< HEAD
        //var LEX_TaskSendBackReason = 'Venligst angiv Ã¥rsagen';
        //var LEX_TaskSendBackExplanation = 'Jeg mener ikke denne task skal lÃ¸ses af mig fordi ...';
=======
        //var LEX_TaskSendBackReason = 'Venligst angiv årsagen';
        //var LEX_TaskSendBackExplanation = 'Jeg mener ikke denne task skal løses af mig fordi ...';
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
        var s = prompt(LEX_TaskSendBackReason, LEX_TaskSendBackExplanation);
        if (s == null)
            return;
        var HTML = s + '<BR>' + getsafe(oXML, '//DL_HTMLText');
        SetEntityItemValue('DL_Tasks', DLId, getsafe(oXML, '//DL_Modified'), 'BPM_Responsible', getsafe(oXML, '//DL_TaskFrom'), 'DL_HTMLText', MakeXMLSafe(HTML));
        if (parent)
            parent.loadentity('DL_Tasks', DLId);
        else
            window.location = window.location;
    }
}
function EXAddWFCaseTypeToProcess(DLProcess, DLWFCaseType) {
    //alert('EXAddWFCaseTypeToProcess(' + DLProcess + ',' + DLWFCaseType + ')');
    setEntityDetail('DL_WFCaseTypeProcess', '<a><DL_WFCaseType>' + DLWFCaseType + '</DL_WFCaseType><DL_Process>' + DLProcess + '</DL_Process></a>');
    EXReload();
}
// 3.11.2009 - security model added
var _EXUserRole = null; // set in function EXSetUserRole found in Exformatics_cust.js
var EXUseRoleSecurity; // set in Exformatics_cust.js
var EXECMMemberGroup; // set in Exformatics_cust.js
function EXGetUserRole() { // 0=read-only,1=Access
    if (!EXUseRoleSecurity)
        return 1;
    if (_EXUserRole == null)
        EXSetUserRole();
    return _EXUserRole;
}
function EXShowSubscription(DLId) { // 4.12.2009
    loadcontent('/EX_SQLSVC/DynamicList.html?DLEntity=DL_SubscriptionNotification&Where=DL_Favorites=' + DLId + '&PropList=DL_Modified,DL_Digest&OrderBy=DL_Id desc');
}
function EXWFSearchCases(DLWFCaseType) { // 13.2.2010
    var oXML = getEntityData('DL_WFCaseType', 'DL_Id = ' + DLWFCaseType, '');
    var DLEntityNameForeign = getsafe(oXML, '//DL_WFCaseEntity');
    var DLWFCaseEntityData = getsafe(oXML, '//DL_WFCaseEntityData'); // 13.3.2011
    //EXLoadQuickSearch(DLEntityNameForeign,false,'DL_WFCaseType',DLWFCaseType,null,true);
    var sWhere = 'DL_EntityNameForeign = \'' + DLEntityNameForeign + '\'';
    if (DLWFCaseEntityData != '')
        sWhere = 'DL_EntityNameForeign = \'' + DLEntityNameForeign + 'WF' + DLWFCaseEntityData + '\'';
    var oXML1 = getEntityData('DL_D617', sWhere, '');
    var url = getsafe(oXML1, '//DL_QuickSearch');
    if (url.indexOf('DL_WFCaseType') > 0 && url.indexOf('DL_WFCaseType') != url.indexOf('DL_WFCaseType=')) { // 16.3.2011 - only add default value if not = specific value in QuickSearch URL
        var i = url.indexOf('DL_WFCaseType');
        url = url.substr(0, i + 13) + ':' + DLWFCaseType + url.substr(i + 13);
    }
    loadcontent2(url, LEX_QuickSearchTitle + EXgetEntityTitle(DLEntityNameForeign) + ' ' + getsafe(oXML, '//DL_Title'));
}

function RemoveOnClick(sHtml) {
    var s = _RemoveString('onclick="javascript:', '"', sHtml);
    s = s.replace(/<A >/gi, '<A>');
    s = s.replace(/<A  >/gi, '<A>');
    return s;
}

function _GetAnchor(htmlstring) {
    var sHtml = htmlstring.toLowerCase(); ;
    var i = sHtml.indexOf('<a');
    var j = sHtml.indexOf('</a>');
    var s;
    var k = 3;

    /*if(i == -1)
    {
    i = sHtml.indexOf('<a>');
    if(i == -1)
    {
    return '';
    }
		
    k = 3;
    }*/

    //alert('i: ' + i + '\r\nj: ' + j + '\r\nk: ' +k);

    s = htmlstring.substr(i + k, j - i - k);

    return s;
}

function _GetString(searchstring, endstring, htmlstring) {
    var sHtml = htmlstring.toLowerCase();
    var i = sHtml.indexOf(searchstring.toLowerCase());
    var j = sHtml.indexOf(endstring.toLowerCase());
    var s;

    //alert('i: ' + i + '\r\n\r\nj: ' + j);

    if (i == -1 || j == -1) {
        return '';
    }

    s = htmlstring.substr(i, j - i + endstring.length);

    return s;
}

function _GetString2(searchstring, endstring, htmlstring) {
    var sHtml = htmlstring.toLowerCase();
    var i = sHtml.indexOf(searchstring.toLowerCase());
    var j = sHtml.indexOf(endstring.toLowerCase());
    var s;

    //alert('i: ' + i + '\r\n\r\nj: ' + j);
    i++;

    s = htmlstring.substr(i, j - i);

    return s;
}

function EXHTML2XLS(sEXDSDLView, sEXWhere, sEXOrderBy, EXDSDisplayParameters, oEXDSXML) {
    try {
        var sHtml;
        var xPath;

        var xls = new ActiveXObject("Excel.Application");
        xls.visible = true;
        var newBook = xls.Workbooks.Add;

        newBook.Worksheets(1).Activate;

        newBook.Worksheets(1).Name = "Generated by Exformatics ECM";

        var sHtml;
        var iCell = 1;
        var iRow = 1;

        var _EXDSDisplayParameters;

        _EXDSDisplayParameters = EXDSDisplayParameters.split(',');

        newBook.Worksheets(1).Cells(iRow, iCell).EntireRow.Font.Bold = true;

        for (var i = 0; i < _EXDSDisplayParameters.length; i++) {
            var sColumn;
            //var iWidth;
            //var xNode;
            var xPath;

            if (_EXDSDisplayParameters[i].indexOf(':') != -1) {
                _EXDSDisplayParameters[i] = _EXDSDisplayParameters[i].substr(0, _EXDSDisplayParameters[i].indexOf(':'));
            }

            xPath = "//DL_ENTITYCOLS/DL_D610D710[DL_PropNameForeign='" + _EXDSDisplayParameters[i] + "']";
            sColumn = getsafe(oEXDSXML, xPath + '/DL_PropDisplayName ');

            xPath = "//DL_COLFORMATS/DL_D710[DL_PropName='" + _EXDSDisplayParameters[i] + "']";

            if (sColumn == '') {
                //sColumn = getsafe(oEXDSXML,xPath + '/DL_PropDisplayNameDK');
                sColumn = getsafe(oEXDSXML, xPath + '/DL_PropDisplayName');
            }

            newBook.Worksheets(1).Columns(iCell).NumberFormat = '@';

            newBook.Worksheets(1).Cells(iRow, iCell).value = sColumn;
            newBook.Worksheets(1).Cells(iRow, iCell).Interior.ColorIndex = 15;
            newBook.Worksheets(1).Cells(iRow, iCell).BorderAround(1, 2);

            iCell++;
        }

        newBook.Worksheets(1).Range(newBook.Worksheets(1).Cells(iRow, 1), newBook.Worksheets(1).Cells(iRow, iCell - 1)).BorderAround(1, 3);

        //Get Data
        var sEXParams = ''; //_EXDSDisplayParameters[0]; 3.2.1015

        for (var k = 0; k < _EXDSDisplayParameters.length; k++) {
            var xPath = "//DL_COLFORMATS/DL_D710[DL_PropName='" + _EXDSDisplayParameters[k] + "']";
            var oRow;
            if (XPath == '')
                oRow = null;
            else
                oRow = oEXDSXML.selectSingleNode(xPath);
            var DLPropType = getsafe(oRow, 'DL_PropType'); // 15.6.2012  mmq
            if (DLPropType == 'DL_Date1')
                sEXParams += ',' + 'CONVERT(nvarchar,' + _EXDSDisplayParameters[k] + ',105) AS ' + _EXDSDisplayParameters[k];
            else if (DLPropType == 'DL_DateTime1')
                sEXParams += ',' + 'CONVERT(nvarchar,' + _EXDSDisplayParameters[k] + ',105) + \' \' + SUBSTRING(CONVERT(nvarchar,' + _EXDSDisplayParameters[k] + ',114),1,5)  AS ' + _EXDSDisplayParameters[k];
            else
                sEXParams += ',' + _EXDSDisplayParameters[k];

        }
        sEXParams = sEXParams.substr(1);

        var oXML = getEntityData2(sEXParams, sEXDSDLView, sEXWhere, sEXOrderBy);
        //alert(sEXParams + ' ' + sEXDSDLView + ' ' + sEXWhere + ' ' + sEXOrderBy);
        //alert(oXML);
        //EXCopyToClipboard(oXML.xml);
        //alert(oXML.xml);

        iRow++;
        iCell = 1;

        xNodes = oXML.selectNodes('//DL_ENTITYDATA/' + sEXDSDLView); // 28.3.2012 - s added
        if (xNodes.length == 0) // 28.3.2012
            xNodes = oXML.selectNodes('//' + sEXDSDLView);
        //alert(xNodes.length + ' ' + sEXDSDLView);
        for (var i = 0; i < xNodes.length; i++) {
            for (var j = 0; j < _EXDSDisplayParameters.length; j++) {
                var sValue, XPath;

                if (_EXDSDisplayParameters[j] == '') {
                    sValue = '';
                    XPath = '';
                }
                else {
                    sValue = getsafe(xNodes[i], _EXDSDisplayParameters[j]);
                    xPath = "//DL_COLFORMATS/DL_D710[DL_PropName='" + _EXDSDisplayParameters[j] + "']";
                }

                var oRow;
                if (XPath == '')
                    oRow = null;
                else
                    oRow = oEXDSXML.selectSingleNode(xPath);
                if (oRow != null) {
                    var sDLPropDictionary = getsafe(oRow, 'DL_PropDictionary');
                    var sDLPropDictionaryType = getsafe(oRow, 'DL_PropDictionaryType'); //7.6.2012  mb
                    var sDLPropDictionaryDecode = getsafe(oRow, 'DL_PropCodeDecode'); //7.6.2012  mb
                    var sDLPropType = getsafe(oRow, 'DL_PropType'); //13.5.2014  mmq
                    if (sDLPropDictionary != '' && (_EXDSDisplayParameters[j] == 'DL_WFCaseEntity' || getsafe(oRow, 'DL_PropType') == 'DL_Int' || getsafe(oRow, 'DL_PropType') == 'DL_Boolean')) {

                        xPath = '//' + _EXDSDisplayParameters[j] + '/' + sDLPropDictionary + '[DL_PropCodeKey=\'' + sValue + '\']';

                        if (_EXDSDisplayParameters[j] == 'DL_CaseLongState') {
                            var oDict;

                            if (sValue == '') {
                                sValue = '0';
                            }

                            if (oEXDSCaseLongState == null) {
                                oEXDSCaseLongState = getEntityData2('DL_SequenceNo AS DL_PropCodeKey,DL_Title AS DL_PropCodeDecode,DL_WFCaseType', 'DL_WFCaseTypePhase', '', 'DL_WFCaseType,DL_SequenceNo');
                            }

                            var sWFCaseType = getsafe(oRow, 'DL_WFCaseType');
                            if (sWFCaseType == '') sWFCaseType = getWFCaseType();
                            if (sWFCaseType == '') sWFCaseType = '0'; // 28.3.2012									
                            XPath = './/DL_WFCaseTypePhase[DL_WFCaseType=' + sWFCaseType + '][DL_PropCodeKey=' + sValue + ']';
                            oDict = oEXDSCaseLongState.selectSingleNode(XPath);
                        }
                        else if (sDLPropDictionaryType == '100') //7.6.2012  mb // 4.9.2012 - ==
                        {
                            var oDict2 = getEntityData2(sDLPropDictionaryDecode, sDLPropDictionary, 'DL_Id=' + sValue, '');
                            sValue = getsafe(oDict2, '//' + sDLPropDictionaryDecode);
                            //alert(sValue);
                            oDict = null;
                        }
                        else {
                            oDict = oEXDSXML.selectSingleNode(xPath);
                        }

                        if (oDict != null) {
                            sValue = getsafe(oDict, 'DL_PropCodeDecode');
                        }
                    }
                    if (sDLPropType == 'DL_Date') sValue = sValue.substr(0, 10);
                }
                // 7.8.2015 - format numbers
                if (sDLPropType == 'DL_Int')
                    newBook.Worksheets(1).Cells(iRow, iCell).NumberFormat = '0';
                else if (sDLPropType == 'DL_Float')
                //newBook.Worksheets(1).Cells(iRow,iCell).NumberFormat = '0.00E+00';
                    newBook.Worksheets(1).Cells(iRow, iCell).NumberFormat = '#,##0.00';
                else if (sDLPropType == 'DL_Money')
                //newBook.Worksheets(1).Cells(iRow,iCell).NumberFormat = '_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)';
                    newBook.Worksheets(1).Cells(iRow, iCell).NumberFormat = '_( #,##0.00_);_( (#,##0.00);_( "-"??_);_(@_)';
                else if (sDLPropType == 'DL_Date') {
                    newBook.Worksheets(1).Cells(iRow, iCell).NumberFormat = 'dd/mm/yyyy';
                    sValue = sValue.substr(0, 10); // 15.5.2016
                }
                else if (sDLPropType == 'DL_DateTime')
                    newBook.Worksheets(1).Cells(iRow, iCell).NumberFormat = 'dd/mm/yyyy h:mm';
                if (sDLPropType == 'DL_HyperLink') { // 2.5.2016
                    newBook.Worksheets(1).Cells(iRow, iCell).value = sValue;
                    var xCell = newBook.Worksheets(1).Cells(iRow, iCell);
                    newBook.Worksheets(1).Hyperlinks.Add(xCell, sValue);
                }
                else
                    newBook.Worksheets(1).Cells(iRow, iCell).value = sValue;

                if (iRow % 2 != 0) {
                    newBook.Worksheets(1).Cells(iRow, iCell).Interior.ColorIndex = 20;
                }

                iCell++;
            }

            iRow++;
            iCell = 1;
        }

        newBook.Worksheets(1).Cells.EntireColumn.AutoFit();
    }
    catch (e) {
        alert('EXHTML2XLS() failed\n' + e.message);
    }
}
function EXShowAction(stype, DLId, bVisible) { // flyttes til exformatics.js
    //alert('EXShowAction ' + stype + ' ' + DLId + ' ' + bVisible);
    var oEle = document.getElementById('action' + stype + DLId);
    if (oEle != null)
        oEle.style.visibility = (bVisible ? 'visible' : 'hidden');
    //else
    //	alert('action' + stype + '' + DLId + ' not found');

}


function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    else if (navigator.appName == 'Netscape') {
        //Fix for IE-11
        var ua = navigator.userAgent;
        var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}
function checkVersion() {
    var msg = "You're not using Windows Internet Explorer.";
    var ver = getInternetExplorerVersion();
    if (ver > -1) {
        if (ver >= 8.0)
            msg = "You're using a recent copy of Windows Internet Explorer."
        else
            msg = "You should upgrade your copy of Windows Internet Explorer.";
    }
    alert(msg);
}
function EXResetAllFavorites() { // 16.4.2011
    var oTable = document.getElementById('MyFavoritesTable');
    if (oTable == null)
        return;
    var oEles = oTable.getElementsByTagName("a");
    for (var x = 0; x < oEles.length; x++) {
        if (oEles[x].id.indexOf('fava') == 0) {
            _EXResetFavorite(oEles[x].id.replace('fava', ''));
        }
        else if (oEles[x].id.indexOf('MenuLink_Favorites') == 0) {
            _EXResetFavorite(oEles[x].id.replace('MenuLink_Favorites', ''));
        }
    }
    //var oEle = window.event.srcElement;
    //oEle.style.display = 'none';
}
function EXResetFavorite(DLId) {
    _EXResetFavorite(DLId);
    loadentity('DL_Favorites', DLId);
}
function _EXResetFavorite(DLId) {
    var oEle = document.getElementById('fava' + DLId);
    if (oEle == null) oEle = document.getElementById('MenuLink_Favorites' + DLId);
    if (oEle != null) // 10.10.2012 - 'fava...' removed - no ! anymore
        oEle.style.display = 'none';
    var oEle = document.getElementById('trDLFavorites' + DLId);
    if (oEle != null) {
        for (var i = 0; i < oEle.childNodes.length; i++) {
            if (oEle.childNodes[i].className == 'dltablemarkrow')
                oEle.childNodes[i].className = 'ms-vb';
        }
    }
    ExecuteProcedure('EXResetFavorite @DLId = ' + DLId);
}


function EXLoadObjs() {
    if (!document.getElementById)
        return

    for (i = 0; i < arguments.length; i++) {
        var file = arguments[i]
        var fileref = ""
        if (loadedobjects.indexOf(file) == -1) { //Check to see if this object has not already been added to page before proceeding
            if (file.indexOf(".js") != -1) { //If object is a js file
                fileref = document.createElement('script')
                fileref.setAttribute("type", "text/javascript");
                fileref.setAttribute("src", file);
            }
            else if (file.indexOf(".css") != -1) { //If object is a css file
                fileref = document.createElement("link")
                fileref.setAttribute("rel", "stylesheet");
                fileref.setAttribute("type", "text/css");
                fileref.setAttribute("href", file);
            }
        }
        if (fileref != "") {
            document.getElementsByTagName("head").item(0).appendChild(fileref)
        }
    }
}
function EXSetFavorite(DLEntityNameForeign, DLEntityId, sDiv) {
    //alert('Favorite ' + DLEntityNameForeign + ' ' + DLEntityId + ' ' + sDiv);
    var oDiv = document.getElementById(sDiv);
    if (oDiv == null)
        return;
    var oXML = getEntityData('DL_Favorites', 'DL_CreatedBy = %WUSER% AND DL_EntityNameForeign = \'' + DLEntityNameForeign + '\' AND DL_EntityId = ' + DLEntityId, '');
    //alert(oXML);
    if (getsafe(oXML, '//DL_Id') == '') {
        oDiv.innerHTML = '<a href="#" onclick="EXMakeFavorite(\'' + DLEntityNameForeign + '\', ' + DLEntityId + ',\'' + sDiv + '\', 1)"><img border="0" src="/EX_Resources/gif/png16x16/favoriteoff.png"></img></a>';
    }
    else {
        oDiv.innerHTML = '<a href="#" onclick="EXMakeFavorite(\'' + DLEntityNameForeign + '\', ' + DLEntityId + ',\'' + sDiv + '\', 0)"><img border="0" src="/EX_Resources/gif/png16x16/favoriteon.png"></img></a>';
    }
}
function EXMakeFavorite(DLEntityNameForeign, DLEntityId, sDiv, bMake) {
    var oXML = getEntityData('DL_Favorites', 'DL_CreatedBy = %WUSER% AND DL_EntityNameForeign = \'' + DLEntityNameForeign + '\' AND DL_EntityId = ' + DLEntityId, '');
    var sId = getsafe(oXML, '//DL_Id');
    if (!bMake && sId == '') // 23.4.2013
        bMake = true;
    if (bMake) {
        EXAddToFavorites(DLEntityNameForeign, DLEntityId);
    }
    else {
        var xOps;
        xOps = '<DL_Favorites><DELETE><row><DL_Id>' + getsafe(oXML, '//DL_Id') + '</DL_Id></row></DELETE></DL_Favorites>';
        setEntity('DL_Favorites', xOps);
        loadcontent2('/EX_Resources/EXShowMessage.html?Message=LEXFavoriteDeleted', LEXFavoriteDeleted); // 18.4.2013
    }
    EXSetFavorite(DLEntityNameForeign, DLEntityId, sDiv);
}
function EXAsXML(FK, FV) {
    var aK = FK.split(',');
    var aV = FV.split(',');
    var s = '';
    for (var i = 0; i < aK.length; i++) {
        s += '<' + aK[i] + '>' + MakeXMLSafe(aV[i]) + '</' + aK[i] + '>';
    }
    return s;
}
function EXLazyLoadDictionaries(DLPropNames) { // 20.4.2010 - 11-0330
    //alert('EXLazyLoadDictionaries(' + DLPropNames + ') started');
    var s = DLPropNames.split(',');
    for (var i = 0; i < s.length; i++) {
        var oEle = document.getElementById(s[i]);
        oEle.attachEvent('onfocus', EXhandleONFOCUS);
    }
}
function EXhandleONFOCUS() {
    var oEle = window.event.srcElement;
    var DLPropName = oEle.id;
    var xD710 = getEntityData('DL_D710', 'DL_PropName = \'' + DLPropName + '\'', '');
    FillDropDown(DLPropName, getsafe(xD710, '//DL_PropDictionary'), getsafe(xD710, '//DL_PropCodeKey'), getsafe(xD710, '//DL_PropCodeDecode'), getsafe(xD710, '//DL_PropDictKey1'), getsafe(xD710, '//DL_PropDictValue1'), oEle.value);
    //alert('FOCUS ' + oEle.id);
    oEle.attachEvent('onfocus', null);
}
var xEXMenuAction = null;
var aEXMenuAction;
function EXWPMenuGet(sMenu, DLEntityNameForeign, DLEntityId, xActionExtra) { // 9.8.2011 7.8.2012 - xActionExtra added
    if (typeof (xActionExtra) == 'undefined')
        xActionExtra = null;
    try {
        var oLink = document.getElementById('MenuLink_' + sMenu);
        if (oLink != null) { // 18.12.2012 - modify background color for function button
            //alert(oLink.outerHTML);
            oLink = oLink.parentNode.parentNode.parentNode; // TD
            //alert(oLink.outerHTML);
            //oLink.className = 'ms-standardheader';
            oLink.style.backgroundColor = 'rgb(102,136,168)';
            //oLink.style.paddingRight = '0px';
            //alert(oLink.outerHTML);
        }
        //alert('EXWPMenuGet(' + sMenu + ',' + DLEntityNameForeign + ',' + DLEntityId + ',' + xActionExtra + ') started');
        if (xEXMenuAction == null) {
            xEXMenuAction = getEntityData2('DL_Id,DL_Tooltip,DL_Action,DL_EntityNameForeign,DL_TableIcon', 'DL_Action', 'DL_EntityNameForeign LIKE \'EXMenu%\'', 'DL_EntityNameForeign,DL_SequenceNo');
            aEXMenuAction = new Array();
        }

        if (typeof aEXMenuAction == 'undefined') // 14.8.2011 - as used several places
            aEXMenuAction = new Array();

        //if (typeof aEXMenuAction[sMenu] == 'undefined') {
        if (xActionExtra != null) { // 7.8.2012 - workflow actions
            var xNodes = xEXMenuAction.selectNodes('//DL_Action[DL_EntityNameForeign=\'' + sMenu + '\']');
            oMenu = new Array();
            EXWPMenuCreate(oMenu, xNodes, DLEntityNameForeign, DLEntityId, false);
            var o = {};
            o = $.contextMenu.separator;
            oMenu.push(o);
            if (typeof (xActionExtra) == 'string') { // 10.10.2012 - used in MyBookmarks
                xNodes = xEXMenuAction.selectNodes('//DL_Action[DL_EntityNameForeign=\'' + xActionExtra + '\']');
                EXWPMenuCreate(oMenu, xNodes, DLEntityNameForeign, DLEntityId, false);
            }
            else {
                xNodes = xActionExtra.selectNodes('//DL_WFCaseTypeAction');
                EXWPMenuCreate(oMenu, xNodes, DLEntityNameForeign, DLEntityId, true);
            }
            return oMenu;
        }
        if (typeof aEXMenuAction[(sMenu + DLEntityNameForeign + DLEntityId)] == 'undefined') { // 5.9.2011 - added DLEntityNameForeign+DLEntityId
            var xNodes = xEXMenuAction.selectNodes('//DL_Action[DL_EntityNameForeign=\'' + sMenu + '\']');
            oMenu = new Array();
            EXWPMenuCreate(oMenu, xNodes, DLEntityNameForeign, DLEntityId, false);
            //aEXMenuAction[sMenu] = oMenu;
            aEXMenuAction[(sMenu + DLEntityNameForeign + DLEntityId)] = oMenu;
            //if (sMenu == 'EXMenuTask')
            //alert('EXWPMenuGet - Added menu ' + sMenu + DLEntityNameForeign + DLEntityId + ' length = ' + oMenu.length);
        }
        //alert(sMenu + DLEntityNameForeign + DLEntityId + ' retrieved ' + aEXMenuAction[sMenu + DLEntityNameForeign + DLEntityId].length);
        //return aEXMenuAction[sMenu];
        return aEXMenuAction[sMenu + DLEntityNameForeign + DLEntityId];
    } catch (e) {
        alert('EXWPMenuGet(' + sMenu + ',' + DLEntityNameForeign + ',' + DLEntityId + ',' + xActionExtra + ') >>> ' + e.message);
    }
}

function EXWPMenuCreate(oMenu, xNodes, DLEntityNameForeign, DLEntityId, bWorkflow) {
    var DLId;
    for (var i = 0; i < xNodes.length; i++) {
        var tooltip = getsafe(xNodes[i], (bWorkflow ? '@' : '') + 'DL_Tooltip');
        var DLAction = getsafe(xNodes[i], (bWorkflow ? '@' : '') + 'DL_Action');
        var o = {};
        var bAdd = true;
        //if (tooltip == 'SEPARATOR') {
        if (DLAction == 'SEPARATOR') { // 5.6.2012
            o = $.contextMenu.separator;
        }
        else {
            DLId = getsafe(xNodes[i], (bWorkflow ? '@' : '') + 'DL_Id');
            img = getsafe(xNodes[i], (bWorkflow ? '@' : '') + 'DL_TableIcon');
            if (img != '')
                img = '/EX_Resources/gif/' + img;
            bAdd = DLAction.indexOf('#') == -1;
            if (!bAdd)
                bAdd = DLEntityNameForeign != '' && DLEntityId != '' && DLEntityId != '0' && DLEntityId != '-1'; // 30.10.2011 + 17.5.2012
            if (!bAdd)
                bAdd = DLEntityNameForeign != '' && (DLAction.replace(/#DL_Entity#/g, 'ZZ').indexOf('#') == -1);
            //alert(DLAction + ' bAdd=' + bAdd);
            if (bAdd) {
                if (tooltip == 'SEPARATOR')
                    o = $.contextMenu.separator;
                else {
                    var fct = {};
                    //fct['onclick'] = function() {EXWPMenuClick(''+DLId,''+DLEntityNameForeign,''+DLEntityId);};
                    var sFct = "EXWPMenuClick(" + DLId + ",'" + DLEntityNameForeign + "','" + DLEntityId + "',false);"
                    if (bWorkflow)
                        sFct = "EXWPMenuClick(" + DLId + ",'" + DLEntityNameForeign + "','" + DLEntityId + "',true);"
                    fct['onclick'] = new Function(sFct);
                    fct['icon'] = img;
                    o[tooltip] = fct;
                }
            }
        }
        if (bAdd)
            oMenu.push(o);
    }
    return oMenu;
}
function EXWPMenuClick(DLId, DLEntityNameForeign, DLEntityId, bWorkflow) {
    //alert('EXWPMenuClick ' + DLId + ' ' + DLEntityNameForeign + ':' + DLEntityId);
    var sAction;
    if (typeof (bWorkflow) == 'undefined')
        bWorkflow = false;
    if (bWorkflow) {
        sAction = GetEntityItemValue('DL_WFCaseTypeAction', DLId, 'DL_Action');
    }
    else {
        if (xEXMenuAction == null) // 9.8.2011 - strange xEXMenuAction turns out to be null sometimes!
            sAction = GetEntityItemValue('DL_Action', DLId, 'DL_Action');
        else
            sAction = getsafe(xEXMenuAction, '//DL_Action[DL_Id=' + DLId + ']/DL_Action');
    }
    //alert('EXWPMenuClick ' + DLId + ' Action=' + sAction + ' ' + DLEntityNameForeign + ':' + DLEntityId + ',' + bWorkflow);
    //alert(xEXMenuAction.xml);
    sAction = sAction.replace(/#DL_Entity#/g, DLEntityNameForeign); // 18.4.2013 - global change
    sAction = sAction.replace(/#DL_Id#/g, DLEntityId);
    sAction = sAction.replace('javascript:', '');
    try {
        eval(sAction);
    }
    catch (e) { alert('EXWPMenuClick - Could not execute action=' + sAction + '\n' + e.message); }
}
function EXWPMenuTest() { // 9.8.2011 - retrieves all menu's on page
    var s = '';
    var key;
    var oTD, oTR;
    oMenu = new Array();
    for (key in aEXMenuAction) {
        s += '\n';

        var xNodes = xEXMenuAction.selectNodes('//DL_Action[DL_EntityNameForeign=\'' + key + '\']');
        oTD = document.getElementById(key);
        oTR = oTD.parentNode;
        oTD = oTR.firstChild.firstChild.firstChild.firstChild; // Get web part title SPAN
        s += oTD.innerHTML + '\n'; ;
        var o1 = {}; // header
        var fct1 = {};
        tooltip = oTD.innerHTML;
        o1[tooltip] = fct1;
        oMenu.push(o1);
        for (var j = 0; j < xNodes.length; j++) {
            var tooltip = getsafe(xNodes[j], 'DL_Tooltip');
            var o = {};
            if (tooltip == 'SEPARATOR') {
                o = $.contextMenu.separator;
            }
            else {
                DLId = getsafe(xNodes[j], 'DL_Id');
                img = getsafe(xNodes[j], 'DL_TableIcon');
                if (img != '')
                    img = '/EX_Resources/gif/' + img;
                var DLAction = getsafe(xNodes[j], 'DL_Action');
                var bAdd;
                bAdd = DLAction.indexOf('#') == -1;
                if (!bAdd)
                    bAdd = DLEntityNameForeign != '' && DLEntityId != '';
                if (bAdd) {
                    var fct = {};
                    //fct['onclick'] = function() {EXWPMenuClick(''+DLId,''+DLEntityNameForeign,''+DLEntityId);};
                    var sFct = "EXWPMenuClick(" + DLId + ",'" + DLEntityNameForeign + "','" + DLEntityId + "');"
                    fct['onclick'] = new Function(sFct);
                    fct['icon'] = img;
                    o[tooltip] = fct;
                }
            }
            oMenu.push(o);

            s += '- ' + getsafe(xNodes[j], 'DL_Tooltip') + '\n';
        }
        o = {};
        o = $.contextMenu.separator;
        oMenu.push(o);
    }
    var oEle = document.getElementById('EXMenuTotal');
    if (oEle == null) {
        var oObject = document.createElement('DIV');
        oObject.id = 'EXMenuTotal';
        document.body.appendChild(oObject);
        oObject = null;
    }
    if (oMenu.length > 0) {
        $('#EXMenuTotal').contextMenu(oMenu,
   			{ theme: 'vista', openOnLeftClick: true }
		);
        $('#EXMenuTotal').click();
    } else {
        $('#EXMenuTotal').hide();
    }
    //	alert(s);
}
function EXUnknownSetDictionaries(sPropNames) { // 21.8.2011
    var aPropNames = sPropNames.split(',');
    var s = '';
    for (var i = 0; i < aPropNames.length; i++) {
        if (s != '') s += ',';
        s += '\'' + aPropNames[i] + '\'';
    }
    s = 'DL_PropName in (' + s + ')';
    var oD710 = getEntityData('DL_D710', s, '');
    //alert(oD710.xml);
    var DLPropName;
    for (var i = 0; i < aPropNames.length; i++) {
        DLPropName = aPropNames[i];
        var oXML = oD710.selectSingleNode('//DL_D710[DL_PropName=\'' + DLPropName + '\']');
        //alert(oXML.xml);
        var oEle = document.getElementById(DLPropName);
        var DLPropDictionaryExtra = getsafe(oXML, 'DL_PropDictionaryExtra');
        var DLPropCodeKey = getsafe(oXML, 'DL_PropCodeKey');
        var DLPropCodeDecode = getsafe(oXML, 'DL_PropCodeDecode');
        var j = DLPropDictionaryExtra.indexOf('Former:');
        if (j > -1) {
            //alert(DLPropName + ' ' + DLPropDictionaryExtra);
            var sFormer = DLPropDictionaryExtra.substr(j + 7);
            //alert(sFormer);
            //alert(oEle.options.length );
            var sValue = oEle.options[oEle.options.length - 1].value;
            //alert(sValue);
            //var sValue = 'jw';
            var sNewValue = GetEntityItemWhere(sFormer, DLPropCodeKey + '=\'' + sValue + '\'', DLPropCodeDecode);
            //alert(sNewValue);
            oEle.options[oEle.options.length - 1].text = sNewValue;
            //oEle.options[oEle.options.length-1].style.background =  'orange';
        }
    }
    //alert('EXUnknownSetDictionaries ' + sPropNames);
}
function EXLoadTask(DLId, DLWFCaseTypeStep, DLEntityNameForeign, DLEntityId, DLTaskType, appendparams) { // 26.7.2011 - 25.3.2012 DLTaskType added
    if (DLWFCaseTypeStep != '') {
        var DLAction = GetEntityItemValue('DL_WFCaseTypeStep', DLWFCaseTypeStep, 'DL_Action');
        if (DLAction != '') {
            //alert(DLAction);
            try {
                DLAction = DLAction.replace('#DL_Entity#', DLEntityNameForeign);
                DLAction = DLAction.replace('#DL_Id#', DLEntityId);
                eval(DLAction);
            }
            catch (e) { alert('Invalid action ' + DLAction + '\n' + e.message); }
            return;
        }
    }
    if (DLTaskType == '1')
        loadentity('DL_MilestoneTask', DLId, appendparams);
    else if (DLTaskType == '2') // 21.5.2012 - not yet implemented - 24.7.2012 - now it should work
        loadentity('DL_ApprovalTasks', DLId, appendparams);
    else
        loadentity('DL_Tasks', DLId, appendparams);
}

function EXLoadEvent(DLEntityName, DLId, DLWFCaseTypeStep, DLEntityNameForeign, DLEntityId, DLTaskType, DLResponsible, appendparams) { // 26.7.2011 - 25.3.2012 DLTaskType added
    if (DLWFCaseTypeStep != '') {
        var DLAction = GetEntityItemValue('DL_WFCaseTypeStep', DLWFCaseTypeStep, 'DL_Action');
        if (DLAction != '') {
            //alert(DLAction);
            try {
                DLAction = DLAction.replace('#DL_Entity#', DLEntityNameForeign);
                DLAction = DLAction.replace('#DL_Id#', DLEntityId);
                eval(DLAction);
            }
            catch (e) { alert('Invalid action ' + DLAction + '\n' + e.message); }
            return;
        }
    }
    if (DLTaskType == '1')
        loadentity('DL_MilestoneTask', DLId, appendparams);
    else if (DLTaskType == '2') // 21.5.2012 - not yet implemented - 24.7.2012 - now it should work
        loadentity('DL_ApprovalTasks', DLId, appendparams);
    else {
        //alert(DLEntityName + ' ' + DLResponsible + ' ' + EXEventsUser);
        if (DLEntityName == 'DL_DCREventTaskPersonal' && DLResponsible != EXEventsUser && DLResponsible != '')
            displayentity(DLEntityName, DLId, appendparams);
        else
            loadentity(DLEntityName, DLId, appendparams);
    }
}


// 20111109 BH: Added IT_Case 2750
function getECMVersion() {
    try {
        // if this is set in Exformatics_cust the version is post 6.7;
        return EXECMVersion;
    }
    catch (e) {
        // otherwise its pre 6.7
        return '6.7';
    }

}
// 21.1.2012
function EXgetViewPortDimensions() {

    var viewportwidth;
    var viewportheight;   // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight   

    if (typeof window.innerWidth != 'undefined') {
        viewportwidth = window.innerWidth;
        viewportheight = window.innerHeight;
    }
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)  
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined'
						&& document.documentElement.clientWidth != 0) {
        viewportwidth = document.documentElement.clientWidth;
        viewportheight = document.documentElement.clientHeight;
    }
    // older versions of IE   
    else {
        viewportwidth = document.getElementsByTagName('body')[0].clientWidth;
        viewportheight = document.getElementsByTagName('body')[0].clientHeight;
    }

    var dim = {};
    dim.width = viewportwidth;
    dim.height = viewportheight;
    return dim;
}

function EXsetBounded() {
    try {
        var qw = queryString('width');
        var w;

        if (typeof (qw) != 'undefined' && qw) {
            w = qw;
        }
        else {
            w = new String(EXgetViewPortDimensions().width / 5);
            var ix = w.indexOf('.');

            if (ix > -1) {
                w = w.substring(0, ix);
            }
        }

        $('.bounded').css('width', function () {
            return w + 'px';
        });
    } catch (e) { }
}
function EXLoadScreenr(ITCase) {
    var oIFrame = document.getElementById('ScreenrIFRAME');
    if (oIFrame == null) {
        oIFrame = document.createElement('IFRAME');
        oIFrame.id = 'ScreenrIFRAME';
        oIFrame.style.width = '200px';
        oIFrame.style.height = '50px';
        oIFrame.style.zIndex = '3';
        oIFrame.style.position = 'absolute';
        oIFrame.frameborder = 0;
        document.body.appendChild(oIFrame);
    }
    oIFrame.src = getAbsoluteURL('/EX_Custom/Screenr.html?IT_Case=' + ITCase);
}
function EXWFShowStatistics(DLWFCaseType) {
    var oXML = getEntityData('DL_WFCaseType', 'DL_Id=' + DLWFCaseType, '');
    loadcontent2('/EX_Resources/EXWFPhaseStatistics.html?DL_WFCaseType=' + DLWFCaseType, getsafe(oXML, '//DL_Title'));
    //loadcontent2('/EX_Resources/EXJWFStatistics.html?DL_EntityNameForeign=' + getsafe(oXML, '//DL_WFCaseEntity') + '&DL_WFCaseType=' + DLWFCaseType,getsafe(oXML, '//DL_Title'));
}
function EXDictBinaryAnd(DLPropName, DLPropDictionary, DLPropCodeKey, DLPropCodeDecode) {
    var oEle = document.getElementById(DLPropName);
    var sWhere = 'DL_PropName=\'' + DLPropName + '\'';
    var xD710 = getEntityData('DL_D710', sWhere, '');
    //alert(sWhere + '\n' + xD710.xml);
    var DLPropDisplayName = getsafe(xD710, '//DL_PropDisplayName');
    var DLDocumentation = getsafe(xD710, '//DL_Documentation');
    if (DLDocumentation == '')
        DLDocumentation = getsafe(xD710, '//DL_TextBox');
    //alert(DLDocumentation);
    var xDict = getDictionaryData(DLPropDictionary, DLPropCodeKey, DLPropCodeDecode);
    //var xDict = getEntityData2(DLPropCodeKey + ' AS DL_PropCodeKey, ' + DLPropCodeDecode + ' as DL_PropCodeDecode','DL_D760','DL_PropDictionary = \'' + DLPropDictionary + '\'', 'cast(DL_PropCodeKey as int)');
    //alert(xDict.xml);
    var xNodes = xDict.selectNodes('//DL_D760/' + DLPropDictionary);
    //	var xNodes = xDict.selectNodes('//DL_D760');
    //	alert(xNodes.length);
    var sTable = '<table>';
    if (DLDocumentation != '')
        sTable += '<tr><td colspan="3"><b>' + DLDocumentation + '</b></td></tr>';
    sTable += '<tr><td/><td/><td/></tr>';
    var iNodes = xNodes.length;
    for (var i = 0; i < xNodes.length; i++) {
        var value = 1.0 * getsafe(xNodes[i], 'DL_PropCodeKey');
        //if (i == 0) alert(value + '\n' + xNodes[i].xml);
        sTable += '<tr>';
        sTable += '<td><input type="checkbox" onclick="EXDictBinaryAndModifyTotal(\'' + DLPropName + '\',this)" value="' + value + '"' + (oEle.value * 1.0 & value ? 'checked=true' : '') + '></td>';
        sTable += '<td>' + value + '</td>';
        sTable += '<td>' + getsafe(xNodes[i], 'DL_PropCodeDecode') + '</td>';
        sTable += '</tr>';
    }
    sTable += '<tr><td>X</td><td id="EXDictTotal' + DLPropName + '">' + oEle.value + '</td><td>Total</td></tr>';
    sTable += '</table>';
    var oDiv = document.getElementById('EXDictBinarySaveDiv');
    if (oDiv == null) {
        oDiv = document.createElement('DIV');
        oDiv.id = 'EXDictBinarySaveDiv';
        oDiv.style.display = 'None';
        oDiv.style.overflow = 'auto';
        document.appendChild(oDiv);
    }
    var iHeight = 200;
    oDiv.style.height = iHeight;
    oDiv.innerHTML = sTable;
    $("#EXDictBinarySaveDiv").dialog({
        resizable: false,
        height: iHeight,
        width: 480,
        modal: true,
        title: DLPropDisplayName,
        open: function (event, ui) {
            //$("input").val([EXDWPShowCreatedModified]);
        },
        buttons: {
            "OK": function () {
                var oEle = document.getElementById(DLPropName);
                var oTotal = document.getElementById('EXDictTotal' + DLPropName);
                oEle.value = oTotal.innerHTML;
                $(this).dialog("close");
            },
            Cancel: function () {
                $(this).dialog("close");
            }
        }
    });
}
function EXDictBinaryAndModifyTotal(DLPropName, oEle) {
    var oTotal = document.getElementById('EXDictTotal' + DLPropName);
    if (oEle.checked)
        oTotal.innerHTML = 1.0 * oTotal.innerHTML + 1.0 * oEle.value;
    else
        oTotal.innerHTML = 1.0 * oTotal.innerHTML - 1.0 * oEle.value;
}

function EXWPHeaderAdd(sTitle, sWPMenu) { // 17.4.2013 added
    var s = '';
    s += '<table border="0" cellpadding="0" cellspacing="0" width="100%"><tr class="ms-WPHeader"><td style="width:100%;"><h3 class="ms-standardheader ms-WPTitle"><nobr><span>' + sTitle + '</span></nobr></h3></td><td align="right" style="padding-right:2px" id="' + sWPMenu + '">';
    s += '<div style="cursor: pointer" class="ms-HoverCellInActive" onMouseOut="this.className=\'ms-HoverCellInActive\'" onMouseOver="this.className=\'ms-HoverCellActiveDark\'">';
    s += '    <nobr>';
    s += '			<a id="MenuLink_' + sWPMenu + '">';
    s += '            <div class="menubutton">&nbsp;</div>';
    s += '          </a>';
    s += '        </nobr>';
    s += '      </div>';
    s += '</td></tr></table>';
    return s;
}

//Setting Columns Width
try {
    $(document).ready(function () {
        if (window.location.href == 'http://intranet/Development/Pages/Forside.aspx')
            return;
        var columns = $('td[id$="_invisibleIfEmpty"][name$="_invisibleIfEmpty"][valign$="top"][height$="100%"]');
        if (columns.length == 0) {
            //FOR SP2013		
            columns = $('.cell-margin.tableCol-33');
        }
        if (columns.length >= 3) {
            $(columns).each(function (index) {
                if (index == 0) {
                    //                $(this).attr("style", "width: 30%;");
                    $(this).attr("style", "width: 23%;");
                }
                else if (index == 1) {
                    //$(this).attr("style", "width: 40%; padding: 0px 10px");
<<<<<<< HEAD
					$(this).attr("style", "width: 40%; padding: 0px 10px");
                }
                else if (index == 2) {
					$(this).attr("style", "width: 34%;");
=======
                    $(this).attr("style", "width: 40%; padding: 0px 10px");
                }
                else if (index == 2) {
                    $(this).attr("style", "width: 34%;");
>>>>>>> 2adf4216271f4768f5a91ea27f739d1940a5cf2e
                }
            });
        }
		
		//Changes for showing left panel on administration pages
		var currentPageUrl = window.location.href.split('?')[0];
		if(currentPageUrl.indexOf("/_layouts/") > -1){
			$("#sideNavBox").css("display", "block");
			$("#contentBox").css("float", "left");
		}

        // Hide menus for notifications or tag cloud if user clicked in documnet outside ActivityStream iframe
        $(document).on('click', function (e) {
            if ($('iframe#DL_Information').length > 0) {
                $('iframe#DL_Information').contents().find(".comment-menu, .divCornerDD").hide("");
            }
        });			
    });
} catch (e) { }

function EXWFDCRGraphOpenInstance(DLWFCaseType, DLEntityNameForeign, DLEntityId) {
    var oXML = getEntityData('DL_WFCaseTypeObject', 'DL_WFCaseType=' + DLWFCaseType + ' AND DL_EntityNameForeign = \'' + DLEntityNameForeign + '\' AND DL_EntityId = ' + DLEntityId, '');
    var DLId = getsafe(oXML, '//DL_Id');
    if (DLId == '') {
        alert('Not a Dynamic Condition Response Workflow');
        return;
    }
    var cmdShell = new ActiveXObject("WScript.Shell");
    //	var Path = "C:\\Program Files\\Exformatics\\DCR Modeling Tool\\DCRGraphsEditor.exe";
    var Path = "C:\\Exformatics\\DCR Modeling Tool\\DCRGraphsEditor.exe";
    Path += " DL_WFCaseTypeObject " + DLId;
    try {
        cmdShell.Run(Path, 1, true);
    } catch (e) {
        alert('Cannot run ' + Path + '\n' + e.message);
    }
}
function CreateOverlay(){
	
	if($("#exf-overlay").length){
	}
	else{		
		if ( self !== top ) {
			window.parent.CreateOverlay();
			return;		
		}
		else{
			$overlayContainer = $("body");	
		}
		$overlayContainer.prepend("<div id='exf-overlay'><img src='/EX_RESOURCES/IMG/loading2.gif' id='img-loading' /></div>");
	}

	$("#exf-overlay").css({
	  opacity : 0.5,
	  top     : $overlayContainer.offset().top,
	  width   : $overlayContainer.outerWidth(),
	  height  : $overlayContainer.outerHeight()
	});

	$("#img-loading").css({
	  top  : ($overlayContainer.height() / 2),
	  left : ($overlayContainer.width() / 2)
	});
	
	$("#exf-overlay").fadeIn();
}
function ExformaticsMovePost(DL_Id, DL_Entity) {
    if (queryString(DL_Entity, true) == DL_Id) {
        alert('This post is already in the selected entity');
        return false;
    }
    var commentId;
    if (typeof ($("#commentId", parent.document.body).val()) != 'undefined') {
        commentId = $("#commentId", parent.document.body).val();
    }
    else if (typeof (window.parent.$('iframe[name=DL_Information]').last().contents().find("#commentId").val()) != 'undefined') {
        commentId = window.parent.$('iframe[name=DL_Information]').last().contents().find("#commentId").val();
    }
    //else if (typeof (window.parent.$('#DL_Information').contents().find("#commentId").val()) != 'undefined') {
    //    commentId = window.parent.$('#DL_Information').contents().find("#commentId").val();
    //}
    else {
        commentId = $('#DL_Information').contents().find("#commentId").val();
    }

    //UPDATE DL_Exformation SET DL_EntityId = $DL_Id, DL_EntityNameForeign = '$DL_Entity' WHERE DL_ID = $commentId
    var xOps = '<DL_Exformation><DELETE/><UPDATE><row><DL_Id>' + commentId + '</DL_Id><DL_EntityId>' + DL_Id + '</DL_EntityId><DL_EntityNameForeign>' + DL_Entity + '</DL_EntityNameForeign></row></UPDATE></DL_Exformation>';
    setEntity('DL_Exformation', xOps); // setEntity handles SQL query and is defined in this function
    // remove post from current stream
    if (typeof ($("#commentId", parent.document.body).val()) != 'undefined') {
        $("#" + commentId, parent.document.body).remove();
    }
//    else if (typeof (window.parent.$('#DL_Information').contents().find("#commentId").val()) != 'undefined') {
//        window.parent.$('#DL_Information').contents().find("#" + commentId).remove();
    //    }
    else if (typeof (window.parent.$('iframe[name=DL_Information]').last().contents().find("#commentId").val()) != 'undefined') {
        window.parent.$('iframe[name=DL_Information]').last().contents().find("#" + commentId).remove();
    }
    else {
        $('#DL_Information').contents().find("#" + commentId).remove();
    }

    alert('The post has been moved to the selected Entity');
    // This will close Dialog
    parent.$(".no-close", window.parent.document).remove();
    return false;
}

function resizeIframe(obj) {
    try {
        obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    }
    catch (err) {
        //TODO
    }
}
function EXAddCaseLink(DLEntityNameForeign, DLEntityId) { // 11.4.2016 - added by MMQ
    var sLink = window.clipboardData.getData('Text');
    if (sLink.indexOf('http') == 0) {
        var sXml = '<a><DL_EntityNameForeign>' + DLEntityNameForeign + '</DL_EntityNameForeign><DL_EntityId>' + DLEntityId + '</DL_EntityId>';
        sXml += '<DL_URLDocument>' + MakeXMLSafe(sLink) + '</DL_URLDocument>';
        var sTitle = 'title';
        var objXMLHTTP = EXXMLHTTP();
        objXMLHTTP.open('get', sLink, false);
        objXMLHTTP.send();
        var content = objXMLHTTP.responseText;
        var re_title = new RegExp("<title>[\n\r\s]*(.*)[\n\r\s]*</title>", "gmi");
        sTitle = re_title.exec(content);
        objXMLHTTP = null;
        if (sTitle == null || sTitle == '')
            sTitle = 'Please enter title';
        sXml += '<DL_Title>' + MakeXMLSafe(sTitle) + '</DL_Title>';
        sXml += '</a>';
        var DLId = setEntityDetail('DL_CaseLink', sXml);
        loadentity('DL_CaseLink', DLId);
    }
    else
        newentity('DL_CaseLink', 'DL_EntityNameForeign,DL_EntityId', DLEntityNameForeign + ',' + DLEntityId);
}
function EXWFOpenCasesExcel(DLWFCaseType) {
    var oXML = getEntityData('DL_WFCaseType', 'DL_Id=' + DLWFCaseType, '');
    var sEntity;
    var DLWFCaseEntity = getsafe(oXML, '//DL_WFCaseEntity');
    var DLWFCaseEntityData = getsafe(oXML, '//DL_WFCaseEntityData');
    sEntity = DLWFCaseEntity;
    if (DLWFCaseEntityData != '')
        sEntity += 'WF' + DLWFCaseEntityData;

    loadentityexcel(sEntity, '', 'DL_CaseState', '0', 'DL_WFCaseType', '' + DLWFCaseType, '');
}

//alert('exformatics.js loaded');
