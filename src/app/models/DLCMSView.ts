import { Injectable } from '@angular/core';
@Injectable()
export class DLCMSView {
  DL_Page: string;
  DL_PageTitle: string;
  DL_PageID: string;
  DL_WebPart: string;
  DL_WebPartType: string;
  DL_Zone: string;
  DL_View: string;
  DL_Where: string;
  DL_OrderBy: string;
  DL_VisibleColumns: string;
  DL_QueryColumns: string;
  // DL_Column1: string;
  // DL_Column2: string;
  DL_Action1: string;
  DL_Action2?: any;
  DL_PageTemplate: string;
}
