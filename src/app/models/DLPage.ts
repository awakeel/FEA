export class DLPage {
    constructor(
        public page: string, public pageTitle: string, public pageTemplate: string
    ) { }

}


export class ActionMenu {
    constructor(
        public DL_PageWidgetId: string,
        public DL_Title: string,
        public DL_CssClass: string,
        public DL_Type: string,
        public DL_Action: string
    ) { }
}
