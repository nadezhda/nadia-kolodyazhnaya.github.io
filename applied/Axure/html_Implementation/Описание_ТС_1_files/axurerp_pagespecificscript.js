for(var i = 0; i < 8; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u5'] = 'center';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	NewWindow($axure.globalVariableProvider.getLinkUrl('Описание_СМТС_1.html'), "", "directories=0, height=500, location=1, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=500, left=100, top=100", false, 500, 500);

}
});
gv_vAlignTable['u0'] = 'top';gv_vAlignTable['u1'] = 'top';document.getElementById('u2_img').tabIndex = 0;
HookHover('u2', false);

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	parent.window.close();

}
});
gv_vAlignTable['u3'] = 'center';