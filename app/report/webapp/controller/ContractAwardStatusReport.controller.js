
sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
      "sap/m/MessageBox",
      "sap/ui/model/json/JSONModel",
      "sap/ui/model/Filter",
      "sap/ui/model/FilterOperator"
    ],
    function (BaseController, MessageBox, JSONModel, Filter, FilterOperator) {
      "use strict";
      let getModelData = [];
      let jsonModel1 = [];
      let VoyageNo;
  
      return BaseController.extend("com.ingenx.nauti.report.controller.ContractAwardStatusReport", {
        onInit() {
         
        },
        onCharteringNumber: function () {
          if (!this._valueHelpDialog) {
            this._valueHelpDialog = sap.ui.xmlfragment(
              "com.ingenx.nauti.report.fragments.valueHelpCharteringReqNo",
              this
            );
            this.getView().addDependent(this._valueHelpDialog);
          }
  
          this._valueHelpDialog.open();
        },
        
        
        onCancel: function () {
          if (this._valueHelpDialog) {
            this._valueHelpDialog.close();
          }
        },
      
        onExecutePress(oEvent) {
          // Logic to execute when the "Execute" button is pressed
          var sCharteringNo = this.getView().byId("CharteringNo").getValue();
          if (sCharteringNo) {
            MessageBox.success("Execution started for Chartering Number: " + sCharteringNo);
            // Implement actual logic to fetch and display data based on Chartering Number
          } else {
            MessageBox.error("Please enter a valid Chartering Number.");
          }
        }
      });
    }
  );