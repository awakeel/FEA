


export interface DynamicPage {
    DL_Page: string;
    DL_PageTitle: string;
    DL_PageTemplate: string;
    DL_ID: number;
    DL_PageID: number;
    DL_WebPart: string;
    DL_WebPartType: string;
    DL_Zone: string;
    DL_View: string;
    DL_Where: string;
    DL_OrderBy: string;
    DL_Column1: string;
    DL_Column2: string;
    DL_Action1: string;
    DL_Action2: string;

}

export interface CMS {
    pages: DynamicPage[];
}

export interface DLCMSView {
    DL_Page: string;
    DL_PageTitle: string;
    DL_PageID: string;
    DL_WebPart: string;
    DL_WebPartType: string;
    DL_Zone: string;
    DL_View: string;
    DL_Where: string;
    DL_OrderBy: string;
    DL_Column1: string;
    DL_Column2: string;
    DL_Action1: string;
    DL_Action2?: any;
    DL_PageTemplate: string;
}

export interface DLENTITYDATA {
    DL_CMSView: DLCMSView[];
}


export interface EntityBase {
    DL_ENTITYDATA: DLENTITYDATA;
}







