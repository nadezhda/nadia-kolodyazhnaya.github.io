for(var i = 0; i < 5; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u0'] = 'top';gv_vAlignTable['u1'] = 'top';document.getElementById('u2_img').tabIndex = 0;
HookHover('u2', false);

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	parent.window.close();

}
});
