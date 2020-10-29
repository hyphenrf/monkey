function getServiceUrl() {
    return $('#HBackEndUrl').val();
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function submitForm(path, params, method) {
    method = method || "get";

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}
var getLevel = function () {
    return $('#HLevel').val();
}
var showErrorMessages = function () {
    if($('#HRemoveRedirectionErrorMsgEn').length>0)
        toastr.error($('#HRemoveRedirectionErrorMsgEn').val());
    if ($('#HRemoveRedirectionErrorMsgAr').length > 0)
        toastr.error($('#HRemoveRedirectionErrorMsgAr').val());
}
var removeRedirection = function () {
    $.ajax({
        type: "GET",
        //url: getServiceUrl() + '/remove?level=' + getLevel(),
        url: '/Redirection.asmx/UsageRedirection?flag=' + getLevel(),

        //url: '/Redirection.asmx/UsageRedirection',
       // timeout: 30000,
       // async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
       // data: "{flag:" + getLevel() + "}",
        success: function (data) {
            if ($.parseJSON(data.d).Status) {
                window.location.replace("https://te.eg/wps/portal/te/Personal");
               
            }
            else {
                showErrorMessages();
            }
        },
        error: function () {
            showErrorMessages();
        }
    });
}
function goToReturnBackUrl() {
    submitForm(getServiceUrl() + '/go', { rb: getParameterByName('rb'), level: getLevel() });
}


