
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

    return BaseController.extend("com.ingenx.nauti.transactionvoyage.controller.VoyageApproval", {
      onInit() {
        let oModel = new sap.ui.model.json.JSONModel();
        this.getView().setModel(oModel, "dataModel");
        let oModel3 = this.getOwnerComponent().getModel();
        let oBindList3 = oModel3.bindList("/voyapprovalSet");
        oBindList3.requestContexts(0, Infinity).then(function (aContexts) {
          aContexts.forEach(function (oContext) {
            getModelData.push(oContext.getObject());
          });
          oModel.setData(getModelData);
        }.bind(this))
        console.log("mydata", getModelData)
      },
      onBackPress: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteTransactionDashboard");
      },

      onPressHome: function () {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteHome");
      },

      onVoyageNumber: function () {
        if (!this._valueHelpDialog) {
          this._valueHelpDialog = sap.ui.xmlfragment(
            "com.ingenx.nauti.transactionvoyage.fragments.valueHelpVoyageNumber",
            this
          );
          this.getView().addDependent(this._valueHelpDialog);
        }

        this._valueHelpDialog.open();
      },

      onVoyageValueHelpClose: function (oEvent) {
        var oSelectedItem = oEvent.getParameter("selectedItem");
        var oTable = this.getView().byId("myTableId");

        if (!oSelectedItem) {
          return;
        }

        var selectedVoyageNumber = oSelectedItem.getTitle();
        var VoyNom = this.byId("voyageNo").setValue(selectedVoyageNumber);
        VoyageNo = VoyNom.getValue();
        console.log("hello", VoyageNo);

        var filter = getModelData.filter(function (data) {
          return data.Voyno === VoyageNo;
        })
        var VrreqData = filter[0].Vreqno;
        var VrVoyageNoData = filter[0].Voyno;
        var VrCreatedByData = filter[0].Uname;
        var VrCreatedOn = filter[0].Zdate;
        var VrCreatedAt = filter[0].Ztime;


        console.log("hiii", VrreqData, VrVoyageNoData, VrCreatedByData, VrCreatedOn, VrCreatedAt);

        var dataArray = [];
        dataArray.push({
            Vreqno: VrreqData,
            Voyno: VrVoyageNoData,
            Uname: VrCreatedByData,
            Zdate: VrCreatedOn,
            Ztime: VrCreatedAt
        });
        
        // Print the array in console
        console.log(dataArray);
        
        // Create a JSON model and set the array as its data
        var jsonModel1 = new sap.ui.model.json.JSONModel();
        jsonModel1.setData(dataArray);
        jsonModel1.refresh();

        var oTable = this.getView().byId("myTableId");
        oTable.setModel(jsonModel1);

        console.log("jhjhj", jsonModel1.getData());

        // Bind the model to the table items aggregation
        oTable.bindItems({
          path: "/", // Assuming your data array is a flat structure
          template: new sap.m.ColumnListItem({
              cells: [
                  new sap.m.Text({ text: "{Vreqno}" }),
                  new sap.m.Text({ text: "{Voyno}" }),
                  new sap.m.Text({ text: "{Uname}" }),
                  new sap.m.Text({ text: "{Zdate}" }),
                  new sap.m.Text({ text: "{Ztime}" })
                  // Add more cells as needed for additional properties
              ]
          })
      });
       
         
          

      },


      onChartSearch: function (oEvent) {
        var sValue = oEvent.getParameter("value");
        var oFilter = new Filter("Voyno", FilterOperator.Contains, sValue);
        var oBinding = this.getView().byId("myTableId").getBinding("items");
        oBinding.filter([oFilter]);
      }



    });
  }
);