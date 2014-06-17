(function (ol) {
    var ContactMeModel = function () {

        var self = this;

        self.Name = ko.observable("");
        self.FromEmail = ko.observable("");
        self.ToEmail = ko.observable("");
        self.Message = ko.observable("");
    }
    ol.ContactMeModel = ContactMeModel;
}(window.OusmaneLoum));