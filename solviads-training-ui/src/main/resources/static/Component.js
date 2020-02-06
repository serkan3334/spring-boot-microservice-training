sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "ordercreate_app/model/ordermodels",
    "sap/ui/model/json/JSONModel",
], function (UIComponent, Device, models,JSONModel) {
    "use strict";
    return UIComponent.extend("training_app.Component", {
        metadata: {
            manifest: "json"
        },
        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
            var oModel = new JSONModel("controller/globalData.json");
            this.setModel(oModel,"globalModel");
            // set the device model
            this.setModel(models.createDeviceModel(), "device");

        }
    });
});