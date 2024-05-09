sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
 
        return Controller.extend("com.ingenx.nauti.transactionvoyage.controller.VoyageDashboard", {
            onInit: function () {
 
            },
           
            onPressChangeVoyage: function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteChangeVoyage");
            },
            onVoyageApproval: function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteVoyageApproval");
            }
        });
    });