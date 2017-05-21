/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewPreactorTeam.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.PreactorTeam.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.PreactorTeam." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

