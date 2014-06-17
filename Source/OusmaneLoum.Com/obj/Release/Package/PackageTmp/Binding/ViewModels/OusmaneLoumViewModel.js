
(function (ol) {
    var OusmaneLoumViewModel = function () {

        var self = this;

        self.viewModelHelper = new OusmaneLoum.viewModelHelper();
        self.contactMeModel = ko.observableArray();

        self.initialize = function () {
            self.contactMeModel(new OusmaneLoum.ContactMeModel());
        }

        self.submitContactMe = function () {

            // fade out error/success message
            $('#contact-sending-error, #contact-sending-success').fadeOut(250);

            // check if the data is valid
            if ($('#contact-form').parsley('isValid')) {

                // if yes, do the following
                $('#contact-sending').fadeIn(250);

                var data = {
                    "Name": self.contactMeModel().Name(),
                    "FromEmail": self.contactMeModel().FromEmail(),
                    "ToEmail": "",
                    "Message": self.contactMeModel().Message()
                };


                self.viewModelHelper.apiPost('api/contactme/send', data,
                    function (result) {
                        $('#contact-sending').fadeOut(250);
                        $('#contact-sending-success').delay(1000).fadeIn(250);
                        $('#contact-form')[0].reset();
                        $('.contact-reset').fadeOut(250);
                        $('.success-mark, .error-mark').css('opacity', '0');
                    },
                    function (failure) {
                        $('#contact-sending').fadeOut(250);
                        $('#contact-sending-error').delay(1000).fadeIn(250);
                    },
                    null);
            }
        }

        self.initialize();
    }
    ol.OusmaneLoumViewModel = OusmaneLoumViewModel;
}(window.OusmaneLoum));