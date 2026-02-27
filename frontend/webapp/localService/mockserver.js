sap.ui.define(['sap/ui/core/util/MockServer'], function (MockServer) {
    'use strict';

    return {
        init: function () {
            var oMockServer = new MockServer({
                rootUri: '/odata/v2/',
            });

            MockServer.config({
                autoRespond: true,
                autoRespondAfter: 300,
            });

            var sPath = sap.ui.require.toUrl('frontend/localService');
            oMockServer.simulate(sPath + '/metadata.xml', {
                sMockdataBaseUrl: sPath + '/mockdata',
                bGenerateMissingMockData: true,
            });

            oMockServer.start();
        },
    };
});
