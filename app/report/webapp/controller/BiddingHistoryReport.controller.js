sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageBox",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/ui/core/Fragment"
    ],
    function (BaseController, MessageBox, JSONModel, Filter, FilterOperator,Fragment) {
        "use strict";
        return BaseController.extend("com.ingenx.nauti.report.controller.BiddingHistoryReport", {
            onInit() {
               
            },

            onCharteringRequestNumber: function () {
                if (!this._valueHelpDialog) {
                    this._valueHelpDialog = sap.ui.xmlfragment(
                        "com.ingenx.nauti.report.fragments.valueHelpCharteringReqNo",
                        this
                    );
                    this.getView().addDependent(this._valueHelpDialog);
                }
                this._valueHelpDialog.open();
            },

            onChartSearch: function (oEvent) {
                let sValue = oEvent.getParameter("value");
                let oFilter = new Filter("CharteringRequestNumber", FilterOperator.Contains, sValue);
                let oBinding = oEvent.getSource().getBinding("items");
                oBinding.filter([oFilter]);
            },

            onCharteringValueHelpClose: function (oEvent) {
                let oItems = oEvent.getSource().getItems();
                if (oItems) {
                    oItems.filter([]);
                }
            },





            

        });
    }
);
