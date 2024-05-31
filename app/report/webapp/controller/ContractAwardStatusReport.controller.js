
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
    let ChartNoValue;
    let jsonModel1 = [];
    let VoyageNo;

    return BaseController.extend("com.ingenx.nauti.report.controller.ContractAwardStatusReport", {
      onInit() {
        let oModel = new sap.ui.model.json.JSONModel();
        this.getView().setModel(oModel, "dataModel");
        let oModel3 = this.getOwnerComponent().getModel();
        let oBindList3 = oModel3.bindList("/xNAUTIxLIVEFRIEGHTREPORT?$expand=toitem1");
        oBindList3.requestContexts(0, Infinity).then(function (aContexts) {
          aContexts.forEach(function (oContext) {
            getModelData.push(oContext.getObject());
          });
          oModel.setData(getModelData);
        }.bind(this))
        console.log("mydata", getModelData)
      },
      onCharteringNumber: function (oEvent) {

        if (!this._valueHelpDialog) {
          this._valueHelpDialog = sap.ui.xmlfragment(
            "com.ingenx.nauti.report.fragments.valueHelpCharteringReqNo",
            this
          );
          this.getView().addDependent(this._valueHelpDialog);

        }

        this._valueHelpDialog.open();
      },

      onCharteringValueHelpClose: function (oEvent) {
        var oSelectedItem = oEvent.getParameter("selectedItem");

        oEvent.getSource().getBinding("items").filter([]);

        if (!oSelectedItem) {
          return;
        }
        this.byId("CharteringNo").setValue(oSelectedItem.getTitle());
        var ChartNo = this.getView().byId("CharteringNo");
          ChartNoValue = ChartNo.getValue();
  
          var filter = getModelData.filter(function (data) {
            return data.Chrnmin === ChartNoValue
          })
          var VoyNoData = filter[0].Voyno
          var itemdata = filter[0].toitem1
          console.log("hiiii",itemdata);

        
      },

      // onExecutePress: function (oEvent) {
      //   var sCharteringNo = this.getView().byId("CharteringNo").getValue();
      //   if (sCharteringNo) {
      //     MessageBox.success("Execution started for Chartering Number: " + sCharteringNo);
      //     this._filterDataForCharteringNo(sCharteringNo);
      //   } else {
      //     MessageBox.error("Please enter a valid Chartering Number.");
      //   }
      // },

      // _filterDataForCharteringNo: function (sCharteringNo) {
      //   var oModel = this.getView().getModel("bidData");
      //   var aData = oModel.getProperty("/biddingData");

      //   // Filter data based on the Chartering Number
      //   var aFilteredData = aData.filter(function (item) {
      //     return item["Charter No."] === sCharteringNo;
      //   });

      //   // Set the filtered data to a new model
      //   var oFilteredModel = new JSONModel({ biddingData: aFilteredData });
      //   this.getView().setModel(oFilteredModel, "BidData");

      //   // Make the table visible and bind the filtered model to it
      //   var oTable = this.getView().byId("myTableId");
      //   oTable.setModel(oFilteredModel, "BidData");
      //   oTable.bindItems({
      //     path: "BidData>/biddingData",
      //     template: oTable.getBindingInfo("items").template
      //   });
      //   oTable.setVisible(true);
      // }

    });
  }
);