for(var i = 0; i < 10; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u7'] = 'top';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	NewWindow($axure.globalVariableProvider.getLinkUrl('Описание_СМИС_1.html'), "", "directories=0, height=300, location=0, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300, left=100, top=100", false, 300, 300);

}
});
u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	SetPanelVisibility('u6','toggle','none',500);

}
});
gv_vAlignTable['u0'] = 'top';u1.tabIndex = 0;

u1.style.cursor = 'pointer';
$axure.eventManager.click('u1', function(e) {

if (true) {

	NewWindow($axure.globalVariableProvider.getLinkUrl('Описание_СМТС_1.html'), "", "directories=0, height=300, location=1, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=300, left=100, top=100", false, 300, 300);

}
});
gv_vAlignTable['u1'] = 'top';document.getElementById('u2_img').tabIndex = 0;
HookHover('u2', false);

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	parent.window.close();

}
});
gv_vAlignTable['u3'] = 'center';