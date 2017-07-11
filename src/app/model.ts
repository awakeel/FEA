

export interface W {
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

export interface DL_Page {
  DL_Page: string;
  DL_PageTitle: string;
  DL_PageTemplate: string;
  w: W[];
}

export interface CMS {
  pages: DL_Page[];
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

export class DLPage {
  constructor(
    public page: string, public pageTitle: string, pageTemplate: string
  ) { }

}
