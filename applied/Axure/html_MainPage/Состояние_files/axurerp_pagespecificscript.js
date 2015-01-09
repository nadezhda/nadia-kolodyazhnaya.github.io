for(var i = 0; i < 1402; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

	SetPanelState('u30', 'pd6u30','none','',500,'none','',500);

	SetPanelState('u187', 'pd0u187','none','',500,'none','',500);

}

});

if (bIE) document.getElementById('u997').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u997'); });
else {
    document.getElementById('u997').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u997'); }, true);
    document.getElementById('u997').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u997'); }, true);
}

widgetIdToDragFunction['u997'] = function() {
var e = windowEvent;

if (false) {

SetGlobalVariableValue('SliderValue', '10');

	MoveWidgetBy('u997',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '20');

	MoveWidgetBy('u997',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '30');

	MoveWidgetBy('u997',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '40');

	MoveWidgetBy('u997',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '50');

	MoveWidgetBy('u997',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '60');

	MoveWidgetBy('u997',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '70');

	MoveWidgetBy('u997',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '80');

	MoveWidgetBy('u997',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '80');

	MoveWidgetBy('u997',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '90');

	MoveWidgetBy('u997',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '100');

	MoveWidgetBy('u997',widgetDragInfo.xDelta,0,'none',500);

}
else
if (true) {

	MoveWidgetToLocationBeforeDrag('u997','none',500);

SetGlobalVariableValue('SliderValue', '0');

}
else
if (true) {

	MoveWidgetToLocationBeforeDrag('u997','none',500);

SetGlobalVariableValue('SliderValue', '100');

}

}

if (bIE) document.getElementById('u825').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u825'); });
else {
    document.getElementById('u825').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u825'); }, true);
    document.getElementById('u825').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u825'); }, true);
}

widgetIdToDragFunction['u825'] = function() {
var e = windowEvent;

if (false) {

SetGlobalVariableValue('SliderValue', '10');

	MoveWidgetBy('u825',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '20');

	MoveWidgetBy('u825',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '30');

	MoveWidgetBy('u825',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '40');

	MoveWidgetBy('u825',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '50');

	MoveWidgetBy('u825',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '60');

	MoveWidgetBy('u825',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '70');

	MoveWidgetBy('u825',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '80');

	MoveWidgetBy('u825',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '80');

	MoveWidgetBy('u825',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '90');

	MoveWidgetBy('u825',widgetDragInfo.xDelta,0,'none',500);

}
else
if (false) {

SetGlobalVariableValue('SliderValue', '100');

	MoveWidgetBy('u825',widgetDragInfo.xDelta,0,'none',500);

}
else
if (true) {

	MoveWidgetToLocationBeforeDrag('u825','none',500);

SetGlobalVariableValue('SliderValue', '0');

}
else
if (true) {

	MoveWidgetToLocationBeforeDrag('u825','none',500);

SetGlobalVariableValue('SliderValue', '100');

}

}
gv_vAlignTable['u1038'] = 'center';
$axure.eventManager.keyup('u692', function(e) {

if (IsValueNumeric(GetWidgetText('u692'))) {

SetGlobalVariableValue('SpinnerValue', GetWidgetText('u692'));

}
});

$axure.eventManager.blur('u692', function(e) {

if (IsValueNotNumeric(GetWidgetText('u692'))) {

SetWidgetFormText('u692', '0');

SetGlobalVariableValue('SpinnerValue', '0');

}

if ((GetWidgetText('u692')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

}
else
if ((GetWidgetText('u692')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

}
});
gv_vAlignTable['u850'] = 'top';HookHover('u244', false);
gv_vAlignTable['u818'] = 'center';gv_vAlignTable['u1188'] = 'top';gv_vAlignTable['u617'] = 'top';gv_vAlignTable['u297'] = 'center';gv_vAlignTable['u673'] = 'center';document.getElementById('u394_img').tabIndex = 0;
HookHover('u394', false);

u394.style.cursor = 'pointer';
$axure.eventManager.click('u394', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u968'] = 'top';document.getElementById('u905_img').tabIndex = 0;

u905.style.cursor = 'pointer';
$axure.eventManager.click('u905', function(e) {

if (true) {

SetWidgetFormText('u880', '11/7/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
document.getElementById('u961_img').tabIndex = 0;

u961.style.cursor = 'pointer';
$axure.eventManager.click('u961', function(e) {

if (true) {

SetWidgetFormText('u880', '12/5/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u355'] = 'center';gv_vAlignTable['u329'] = 'center';gv_vAlignTable['u1'] = 'center';document.getElementById('u107_img').tabIndex = 0;

u107.style.cursor = 'pointer';
$axure.eventManager.click('u107', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('История.html');

}
});
gv_vAlignTable['u401'] = 'center';document.getElementById('u163_img').tabIndex = 0;

u163.style.cursor = 'pointer';
$axure.eventManager.click('u163', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Описание.html');

}
});
gv_vAlignTable['u536'] = 'center';document.getElementById('u51_img').tabIndex = 0;

u51.style.cursor = 'pointer';
$axure.eventManager.click('u51', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
document.getElementById('u1329_img').tabIndex = 0;

u1329.style.cursor = 'pointer';
$axure.eventManager.click('u1329', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/24/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u519'] = 'center';gv_vAlignTable['u686'] = 'top';HookHover('u274', false);
gv_vAlignTable['u345'] = 'center';gv_vAlignTable['u716'] = 'center';gv_vAlignTable['u647'] = 'top';gv_vAlignTable['u421'] = 'center';document.getElementById('u797_img').tabIndex = 0;

u797.style.cursor = 'pointer';
$axure.eventManager.click('u797', function(e) {

if (true) {

SetWidgetFormText('u708', '12/9/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u935_img').tabIndex = 0;

u935.style.cursor = 'pointer';
$axure.eventManager.click('u935', function(e) {

if (true) {

SetWidgetFormText('u880', '11/22/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u1394'] = 'top';document.getElementById('u438_img').tabIndex = 0;
HookHover('u438', false);

u438.style.cursor = 'pointer';
$axure.eventManager.click('u438', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u1399_img').tabIndex = 0;

u1399.style.cursor = 'pointer';
$axure.eventManager.click('u1399', function(e) {

if (true) {

	SetPanelState('u1374', 'pd1u1374','none','',500,'none','',500);

}
});
document.getElementById('u137_img').tabIndex = 0;

u137.style.cursor = 'pointer';
$axure.eventManager.click('u137', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Глоссарий.html');

}
});
gv_vAlignTable['u566'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u287'] = 'center';gv_vAlignTable['u581'] = 'top';gv_vAlignTable['u549'] = 'top';document.getElementById('u69_img').tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
document.getElementById('u854_img').tabIndex = 0;

u854.style.cursor = 'pointer';
$axure.eventManager.click('u854', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetNum(GetGlobalVariableValue('SpinnerValue')) + 1) + '');

SetWidgetFormText('u853', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u853')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

SetWidgetFormText('u853', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u542'] = 'center';gv_vAlignTable['u699'] = 'center';gv_vAlignTable['u677'] = 'center';gv_vAlignTable['u900'] = 'top';gv_vAlignTable['u830'] = 'center';document.getElementById('u723_img').tabIndex = 0;

u723.style.cursor = 'pointer';
$axure.eventManager.click('u723', function(e) {

if (true) {

SetWidgetFormText('u708', '11/2/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u965_img').tabIndex = 0;

u965.style.cursor = 'pointer';
$axure.eventManager.click('u965', function(e) {

if (true) {

SetWidgetFormText('u880', '12/7/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u980'] = 'top';gv_vAlignTable['u948'] = 'top';gv_vAlignTable['u405'] = 'center';document.getElementById('u167_img').tabIndex = 0;

u167.style.cursor = 'pointer';
$axure.eventManager.click('u167', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Assistent_____.html');

}
});
gv_vAlignTable['u283'] = 'center';HookHover('u182', false);
document.getElementById('u440_img').tabIndex = 0;
HookHover('u440', false);

u440.style.cursor = 'pointer';
$axure.eventManager.click('u440', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u451'] = 'center';document.getElementById('u57_img').tabIndex = 0;

u57.style.cursor = 'pointer';
$axure.eventManager.click('u57', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Дополнения.html');

}
});
gv_vAlignTable['u213'] = 'center';document.getElementById('u143_img').tabIndex = 0;

u143.style.cursor = 'pointer';
$axure.eventManager.click('u143', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('История.html');

}
});
gv_vAlignTable['u579'] = 'top';gv_vAlignTable['u201'] = 'center';gv_vAlignTable['u516'] = 'center';gv_vAlignTable['u1137'] = 'top';gv_vAlignTable['u1136'] = 'top';gv_vAlignTable['u1135'] = 'top';gv_vAlignTable['u1134'] = 'top';gv_vAlignTable['u1133'] = 'top';gv_vAlignTable['u1132'] = 'top';gv_vAlignTable['u1131'] = 'top';document.getElementById('u1130_img').tabIndex = 0;

u1130.style.cursor = 'pointer';
$axure.eventManager.click('u1130', function(e) {

if (true) {

SetWidgetFormText('u1035', '12/12/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1138'] = 'top';gv_vAlignTable['u860'] = 'center';document.getElementById('u753_img').tabIndex = 0;

u753.style.cursor = 'pointer';
$axure.eventManager.click('u753', function(e) {

if (true) {

SetWidgetFormText('u708', '11/17/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u627'] = 'top';document.getElementById('u501_img').tabIndex = 0;

u501.style.cursor = 'pointer';
$axure.eventManager.click('u501', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});

$axure.eventManager.mouseover('u501', function(e) {
if (!IsTrueMouseOver('u501',e)) return;
if (true) {

	SetPanelVisibility('u514','','none',500);

}
});

$axure.eventManager.mouseout('u501', function(e) {
if (!IsTrueMouseOut('u501',e)) return;
if (true) {

	SetPanelVisibility('u514','hidden','none',500);

}
});

$axure.eventManager.keyup('u828', function(e) {

if (IsValueNumeric(GetWidgetText('u828'))) {

SetGlobalVariableValue('SpinnerValue', GetWidgetText('u828'));

}
});

$axure.eventManager.blur('u828', function(e) {

if (IsValueNotNumeric(GetWidgetText('u828'))) {

SetWidgetFormText('u828', '0');

SetGlobalVariableValue('SpinnerValue', '0');

}

if ((GetWidgetText('u828')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

}
else
if ((GetWidgetText('u828')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

}
});
gv_vAlignTable['u978'] = 'top';gv_vAlignTable['u435'] = 'center';document.getElementById('u971_img').tabIndex = 0;

u971.style.cursor = 'pointer';
$axure.eventManager.click('u971', function(e) {

if (true) {

SetWidgetFormText('u880', '12/10/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
document.getElementById('u418_img').tabIndex = 0;
HookHover('u418', false);

u418.style.cursor = 'pointer';
$axure.eventManager.click('u418', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u585'] = 'top';document.getElementById('u117_img').tabIndex = 0;

u117.style.cursor = 'pointer';
$axure.eventManager.click('u117', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u173_img').tabIndex = 0;

u173.style.cursor = 'pointer';
$axure.eventManager.click('u173', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Глоссарий.html');

}
});
gv_vAlignTable['u942'] = 'top';gv_vAlignTable['u546'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u696'] = 'center';gv_vAlignTable['u437'] = 'center';gv_vAlignTable['u657'] = 'top';document.getElementById('u984_img').tabIndex = 0;

u984.style.cursor = 'pointer';
$axure.eventManager.click('u984', function(e) {

if (true) {

	SetPanelState('u557', 'pd0u557','none','',500,'none','',500);

	BringToFront("u557");

}
});
HookHover('u400', false);
document.getElementById('u330_img').tabIndex = 0;
HookHover('u330', false);

u330.style.cursor = 'pointer';
$axure.eventManager.click('u330', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u703'] = 'top';document.getElementById('u945_img').tabIndex = 0;

u945.style.cursor = 'pointer';
$axure.eventManager.click('u945', function(e) {

if (true) {

SetWidgetFormText('u880', '11/27/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
document.getElementById('u480_img').tabIndex = 0;
HookHover('u480', false);

u480.style.cursor = 'pointer';
$axure.eventManager.click('u480', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u448_img').tabIndex = 0;
HookHover('u448', false);

u448.style.cursor = 'pointer';
$axure.eventManager.click('u448', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u1150'] = 'top';document.getElementById('u929_img').tabIndex = 0;

u929.style.cursor = 'pointer';
$axure.eventManager.click('u929', function(e) {

if (true) {

SetWidgetFormText('u880', '11/19/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
document.getElementById('u147_img').tabIndex = 0;

u147.style.cursor = 'pointer';
$axure.eventManager.click('u147', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Дополнения.html');

}
});
gv_vAlignTable['u1158'] = 'top';document.getElementById('u55_img').tabIndex = 0;

u55.style.cursor = 'pointer';
$axure.eventManager.click('u55', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Описание.html');

}
});
gv_vAlignTable['u1176'] = 'top';gv_vAlignTable['u1174'] = 'top';gv_vAlignTable['u1172'] = 'top';gv_vAlignTable['u629'] = 'top';gv_vAlignTable['u1170'] = 'top';gv_vAlignTable['u559'] = 'center';gv_vAlignTable['u1178'] = 'top';document.getElementById('u864_img').tabIndex = 0;

u864.style.cursor = 'pointer';
$axure.eventManager.click('u864', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetNum(GetGlobalVariableValue('SpinnerValue')) + 1) + '');

SetWidgetFormText('u863', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u863')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

SetWidgetFormText('u863', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u910'] = 'top';HookHover('u304', false);
document.getElementById('u360_img').tabIndex = 0;
HookHover('u360', false);

u360.style.cursor = 'pointer';
$axure.eventManager.click('u360', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u733_img').tabIndex = 0;

u733.style.cursor = 'pointer';
$axure.eventManager.click('u733', function(e) {

if (true) {

SetWidgetFormText('u708', '11/7/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u92'] = 'center';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u112'] = 'center';gv_vAlignTable['u461'] = 'center';document.getElementById('u478_img').tabIndex = 0;
HookHover('u478', false);

u478.style.cursor = 'pointer';
$axure.eventManager.click('u478', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u199'] = 'center';document.getElementById('u541_img').tabIndex = 0;
HookHover('u541', false);

u541.style.cursor = 'pointer';
$axure.eventManager.click('u541', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u415'] = 'center';gv_vAlignTable['u177'] = 'center';gv_vAlignTable['u471'] = 'center';HookHover('u192', false);
gv_vAlignTable['u691'] = 'center';gv_vAlignTable['u223'] = 'center';gv_vAlignTable['u217'] = 'center';gv_vAlignTable['u1367'] = 'top';gv_vAlignTable['u1236'] = 'top';gv_vAlignTable['u1234'] = 'top';gv_vAlignTable['u1232'] = 'top';gv_vAlignTable['u1230'] = 'top';gv_vAlignTable['u940'] = 'top';HookHover('u334', false);
gv_vAlignTable['u1238'] = 'top';gv_vAlignTable['u870'] = 'top';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u707'] = 'center';document.getElementById('u763_img').tabIndex = 0;

u763.style.cursor = 'pointer';
$axure.eventManager.click('u763', function(e) {

if (true) {

SetWidgetFormText('u708', '11/22/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u484_img').tabIndex = 0;
HookHover('u484', false);

u484.style.cursor = 'pointer';
$axure.eventManager.click('u484', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u539'] = 'center';gv_vAlignTable['u445'] = 'center';gv_vAlignTable['u595'] = 'top';gv_vAlignTable['u253'] = 'center';document.getElementById('u127_img').tabIndex = 0;

u127.style.cursor = 'pointer';
$axure.eventManager.click('u127', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Описание.html');

}
});
gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u556'] = 'top';gv_vAlignTable['u883'] = 'center';document.getElementById('u801_img').tabIndex = 0;

u801.style.cursor = 'pointer';
$axure.eventManager.click('u801', function(e) {

if (true) {

SetWidgetFormText('u708', '12/11/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u609'] = 'top';document.getElementById('u737_img').tabIndex = 0;

u737.style.cursor = 'pointer';
$axure.eventManager.click('u737', function(e) {

if (true) {

SetWidgetFormText('u708', '11/9/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u1022'] = 'center';document.getElementById('u410_img').tabIndex = 0;
HookHover('u410', false);

u410.style.cursor = 'pointer';
$axure.eventManager.click('u410', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
HookHover('u312', false);
gv_vAlignTable['u855'] = 'center';HookHover('u196', false);
HookHover('u350', false);
document.getElementById('u63_img').tabIndex = 0;

u63.style.cursor = 'pointer';
$axure.eventManager.click('u63', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u1276'] = 'center';gv_vAlignTable['u1273'] = 'center';gv_vAlignTable['u203'] = 'center';gv_vAlignTable['u639'] = 'top';gv_vAlignTable['u78'] = 'center';gv_vAlignTable['u1278'] = 'center';document.getElementById('u789_img').tabIndex = 0;

u789.style.cursor = 'pointer';
$axure.eventManager.click('u789', function(e) {

if (true) {

SetWidgetFormText('u708', '12/5/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u767_img').tabIndex = 0;

u767.style.cursor = 'pointer';
$axure.eventManager.click('u767', function(e) {

if (true) {

SetWidgetFormText('u708', '11/24/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u782'] = 'top';gv_vAlignTable['u920'] = 'top';
$axure.eventManager.keyup('u858', function(e) {

if (IsValueNumeric(GetWidgetText('u858'))) {

SetGlobalVariableValue('SpinnerValue', GetWidgetText('u858'));

}
});

$axure.eventManager.blur('u858', function(e) {

if (IsValueNotNumeric(GetWidgetText('u858'))) {

SetWidgetFormText('u858', '0');

SetGlobalVariableValue('SpinnerValue', '0');

}

if ((GetWidgetText('u858')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

}
else
if ((GetWidgetText('u858')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

}
});
document.getElementById('u370_img').tabIndex = 0;
HookHover('u370', false);

u370.style.cursor = 'pointer';
$axure.eventManager.click('u370', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u129_img').tabIndex = 0;

u129.style.cursor = 'pointer';
$axure.eventManager.click('u129', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Дополнения.html');

}
});
document.getElementById('u743_img').tabIndex = 0;

u743.style.cursor = 'pointer';
$axure.eventManager.click('u743', function(e) {

if (true) {

SetWidgetFormText('u708', '11/12/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u558_img').tabIndex = 0;

u558.style.cursor = 'pointer';
$axure.eventManager.click('u558', function(e) {

if (true) {

	SetPanelState('u557', 'pd0u557','none','',500,'none','',500);

}
});
gv_vAlignTable['u551'] = 'center';gv_vAlignTable['u333'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u669'] = 'top';HookHover('u208', false);
gv_vAlignTable['u383'] = 'center';document.getElementById('u1337_img').tabIndex = 0;

u1337.style.cursor = 'pointer';
$axure.eventManager.click('u1337', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/28/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1336'] = 'top';document.getElementById('u1335_img').tabIndex = 0;

u1335.style.cursor = 'pointer';
$axure.eventManager.click('u1335', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/27/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1334'] = 'top';document.getElementById('u1333_img').tabIndex = 0;

u1333.style.cursor = 'pointer';
$axure.eventManager.click('u1333', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/26/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1332'] = 'top';document.getElementById('u1331_img').tabIndex = 0;

u1331.style.cursor = 'pointer';
$axure.eventManager.click('u1331', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/25/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1330'] = 'top';gv_vAlignTable['u950'] = 'top';document.getElementById('u1339_img').tabIndex = 0;

u1339.style.cursor = 'pointer';
$axure.eventManager.click('u1339', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/29/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1338'] = 'top';gv_vAlignTable['u191'] = 'center';document.getElementById('u773_img').tabIndex = 0;

u773.style.cursor = 'pointer';
$axure.eventManager.click('u773', function(e) {

if (true) {

SetWidgetFormText('u708', '11/27/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u494_img').tabIndex = 0;
HookHover('u494', false);

u494.style.cursor = 'pointer';
$axure.eventManager.click('u494', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u152'] = 'center';HookHover('u338', false);
gv_vAlignTable['u525'] = 'center';gv_vAlignTable['u455'] = 'center';gv_vAlignTable['u879'] = 'center';gv_vAlignTable['u508'] = 'center';gv_vAlignTable['u353'] = 'center';gv_vAlignTable['u813'] = 'center';gv_vAlignTable['u207'] = 'center';gv_vAlignTable['u263'] = 'center';document.getElementById('u817_img').tabIndex = 0;

u817.style.cursor = 'pointer';
$axure.eventManager.click('u817', function(e) {

if (true) {

	SetPanelState('u557', 'pd1u557','none','',500,'none','',500);

}
});
gv_vAlignTable['u1077'] = 'top';document.getElementById('u893_img').tabIndex = 0;

u893.style.cursor = 'pointer';
$axure.eventManager.click('u893', function(e) {

if (true) {

SetWidgetFormText('u880', '11/1/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u1075'] = 'top';document.getElementById('u1074_img').tabIndex = 0;

u1074.style.cursor = 'pointer';
$axure.eventManager.click('u1074', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/14/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1073'] = 'top';document.getElementById('u1072_img').tabIndex = 0;

u1072.style.cursor = 'pointer';
$axure.eventManager.click('u1072', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/13/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1071'] = 'top';gv_vAlignTable['u786'] = 'top';gv_vAlignTable['u924'] = 'top';gv_vAlignTable['u1079'] = 'top';document.getElementById('u1078_img').tabIndex = 0;

u1078.style.cursor = 'pointer';
$axure.eventManager.click('u1078', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/16/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
HookHover('u352', false);
document.getElementById('u374_img').tabIndex = 0;
HookHover('u374', false);

u374.style.cursor = 'pointer';
$axure.eventManager.click('u374', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u747_img').tabIndex = 0;

u747.style.cursor = 'pointer';
$axure.eventManager.click('u747', function(e) {

if (true) {

SetWidgetFormText('u708', '11/14/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u837'] = 'center';gv_vAlignTable['u126'] = 'center';document.getElementById('u420_img').tabIndex = 0;
HookHover('u420', false);

u420.style.cursor = 'pointer';
$axure.eventManager.click('u420', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u109_img').tabIndex = 0;

u109.style.cursor = 'pointer';
$axure.eventManager.click('u109', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Описание.html');

}
});
document.getElementById('u947_img').tabIndex = 0;

u947.style.cursor = 'pointer';
$axure.eventManager.click('u947', function(e) {

if (true) {

SetWidgetFormText('u880', '11/28/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u102'] = 'center';document.getElementById('u538_img').tabIndex = 0;
HookHover('u538', false);

u538.style.cursor = 'pointer';
$axure.eventManager.click('u538', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u237'] = 'center';document.getElementById('u688_img').tabIndex = 0;

u688.style.cursor = 'pointer';
$axure.eventManager.click('u688', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetNum(GetGlobalVariableValue('SpinnerValue')) + 1) + '');

SetWidgetFormText('u687', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u687')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

SetWidgetFormText('u687', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u681'] = 'center';gv_vAlignTable['u1376'] = 'center';gv_vAlignTable['u1373'] = 'top';gv_vAlignTable['u1372'] = 'top';gv_vAlignTable['u649'] = 'top';gv_vAlignTable['u1370'] = 'top';gv_vAlignTable['u241'] = 'center';document.getElementById('u79_img').tabIndex = 0;

u79.style.cursor = 'pointer';
$axure.eventManager.click('u79', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Применение.html');

}
});
gv_vAlignTable['u954'] = 'top';gv_vAlignTable['u1379'] = 'center';document.getElementById('u799_img').tabIndex = 0;

u799.style.cursor = 'pointer';
$axure.eventManager.click('u799', function(e) {

if (true) {

SetWidgetFormText('u708', '12/10/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u777_img').tabIndex = 0;

u777.style.cursor = 'pointer';
$axure.eventManager.click('u777', function(e) {

if (true) {

SetWidgetFormText('u708', '11/29/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u792'] = 'top';gv_vAlignTable['u13'] = 'center';document.getElementById('u450_img').tabIndex = 0;
HookHover('u450', false);

u450.style.cursor = 'pointer';
$axure.eventManager.click('u450', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u914'] = 'top';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u1097'] = 'top';document.getElementById('u1096_img').tabIndex = 0;

u1096.style.cursor = 'pointer';
$axure.eventManager.click('u1096', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/25/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u289'] = 'center';document.getElementById('u1094_img').tabIndex = 0;

u1094.style.cursor = 'pointer';
$axure.eventManager.click('u1094', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/24/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1093'] = 'top';document.getElementById('u1092_img').tabIndex = 0;

u1092.style.cursor = 'pointer';
$axure.eventManager.click('u1092', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/23/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});

$axure.eventManager.mouseover('u505', function(e) {
if (!IsTrueMouseOver('u505',e)) return;
if (true) {

	SetPanelVisibility('u517','','none',500);

}
});

$axure.eventManager.mouseout('u505', function(e) {
if (!IsTrueMouseOut('u505',e)) return;
if (true) {

	SetPanelVisibility('u517','hidden','none',500);

}
});
gv_vAlignTable['u267'] = 'center';gv_vAlignTable['u1027'] = 'center';document.getElementById('u1026_img').tabIndex = 0;

u1026.style.cursor = 'pointer';
$axure.eventManager.click('u1026', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetNum(GetGlobalVariableValue('SpinnerValue')) + 1) + '');

SetWidgetFormText('u1025', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u1025')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

SetWidgetFormText('u1025', GetGlobalVariableValue('SpinnerValue'));

}
});
HookHover('u282', false);
gv_vAlignTable['u1024'] = 'center';gv_vAlignTable['u1099'] = 'top';document.getElementById('u1098_img').tabIndex = 0;

u1098.style.cursor = 'pointer';
$axure.eventManager.click('u1098', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/26/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
document.getElementById('u1021_img').tabIndex = 0;

u1021.style.cursor = 'pointer';
$axure.eventManager.click('u1021', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetNum(GetGlobalVariableValue('SpinnerValue')) + 1) + '');

SetWidgetFormText('u1020', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u1020')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

SetWidgetFormText('u1020', GetGlobalVariableValue('SpinnerValue'));

}
});

$axure.eventManager.keyup('u1020', function(e) {

if (IsValueNumeric(GetWidgetText('u1020'))) {

SetGlobalVariableValue('SpinnerValue', GetWidgetText('u1020'));

}
});

$axure.eventManager.blur('u1020', function(e) {

if (IsValueNotNumeric(GetWidgetText('u1020'))) {

SetWidgetFormText('u1020', '0');

SetGlobalVariableValue('SpinnerValue', '0');

}

if ((GetWidgetText('u1020')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

}
else
if ((GetWidgetText('u1020')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

}
});
document.getElementById('u897_img').tabIndex = 0;

u897.style.cursor = 'pointer';
$axure.eventManager.click('u897', function(e) {

if (true) {

SetWidgetFormText('u880', '11/3/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u313'] = 'center';document.getElementById('u1028_img').tabIndex = 0;

u1028.style.cursor = 'pointer';
$axure.eventManager.click('u1028', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetGlobalVariableValue('SpinnerValue') - 1) + '');

SetWidgetFormText('u1025', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u1025')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

SetWidgetFormText('u1025', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u243'] = 'center';gv_vAlignTable['u679'] = 'center';gv_vAlignTable['u393'] = 'center';gv_vAlignTable['u904'] = 'top';document.getElementById('u803_img').tabIndex = 0;

u803.style.cursor = 'pointer';
$axure.eventManager.click('u803', function(e) {

if (true) {

SetWidgetFormText('u708', '12/12/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u960'] = 'top';document.getElementById('u169_img').tabIndex = 0;

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Применение.html');

}
});
gv_vAlignTable['u106'] = 'center';gv_vAlignTable['u162'] = 'center';document.getElementById('u316_img').tabIndex = 0;
HookHover('u316', false);

u316.style.cursor = 'pointer';
$axure.eventManager.click('u316', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u535_img').tabIndex = 0;
HookHover('u535', false);

u535.style.cursor = 'pointer';
$axure.eventManager.click('u535', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
document.getElementById('u1327_img').tabIndex = 0;

u1327.style.cursor = 'pointer';
$axure.eventManager.click('u1327', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/23/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1326'] = 'top';document.getElementById('u1325_img').tabIndex = 0;

u1325.style.cursor = 'pointer';
$axure.eventManager.click('u1325', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/22/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1324'] = 'top';document.getElementById('u1323_img').tabIndex = 0;

u1323.style.cursor = 'pointer';
$axure.eventManager.click('u1323', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/21/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1322'] = 'top';document.getElementById('u1321_img').tabIndex = 0;

u1321.style.cursor = 'pointer';
$axure.eventManager.click('u1321', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/20/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1320'] = 'top';gv_vAlignTable['u823'] = 'center';gv_vAlignTable['u1328'] = 'top';gv_vAlignTable['u273'] = 'center';gv_vAlignTable['u1085'] = 'top';gv_vAlignTable['u62'] = 'center';document.getElementById('u470_img').tabIndex = 0;
HookHover('u470', false);

u470.style.cursor = 'pointer';
$axure.eventManager.click('u470', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u808'] = 'top';gv_vAlignTable['u1089'] = 'top';document.getElementById('u1088_img').tabIndex = 0;

u1088.style.cursor = 'pointer';
$axure.eventManager.click('u1088', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/21/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u796'] = 'top';document.getElementById('u454_img').tabIndex = 0;
HookHover('u454', false);

u454.style.cursor = 'pointer';
$axure.eventManager.click('u454', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
document.getElementById('u757_img').tabIndex = 0;

u757.style.cursor = 'pointer';
$axure.eventManager.click('u757', function(e) {

if (true) {

SetWidgetFormText('u708', '11/19/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u564'] = 'center';gv_vAlignTable['u500'] = 'center';gv_vAlignTable['u846'] = 'center';gv_vAlignTable['u136'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u619'] = 'top';document.getElementById('u119_img').tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Глоссарий.html');

}
});
gv_vAlignTable['u1240'] = 'top';HookHover('u286', false);
gv_vAlignTable['u548'] = 'center';gv_vAlignTable['u611'] = 'top';
$axure.eventManager.keyup('u853', function(e) {

if (IsValueNumeric(GetWidgetText('u853'))) {

SetGlobalVariableValue('SpinnerValue', GetWidgetText('u853'));

}
});

$axure.eventManager.blur('u853', function(e) {

if (IsValueNotNumeric(GetWidgetText('u853'))) {

SetWidgetFormText('u853', '0');

SetGlobalVariableValue('SpinnerValue', '0');

}

if ((GetWidgetText('u853')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

}
else
if ((GetWidgetText('u853')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

}
});
gv_vAlignTable['u247'] = 'center';document.getElementById('u698_img').tabIndex = 0;

u698.style.cursor = 'pointer';
$axure.eventManager.click('u698', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetNum(GetGlobalVariableValue('SpinnerValue')) + 1) + '');

SetWidgetFormText('u697', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u697')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

SetWidgetFormText('u697', GetGlobalVariableValue('SpinnerValue'));

}
});
document.getElementById('u65_img').tabIndex = 0;

u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Глоссарий.html');

}
});
gv_vAlignTable['u397'] = 'center';document.getElementById('u729_img').tabIndex = 0;

u729.style.cursor = 'pointer';
$axure.eventManager.click('u729', function(e) {

if (true) {

SetWidgetFormText('u708', '11/5/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u335'] = 'center';gv_vAlignTable['u659'] = 'top';gv_vAlignTable['u722'] = 'top';gv_vAlignTable['u964'] = 'top';gv_vAlignTable['u1389'] = 'top';gv_vAlignTable['u844'] = 'top';gv_vAlignTable['u1292'] = 'top';document.getElementById('u404_img').tabIndex = 0;
HookHover('u404', false);

u404.style.cursor = 'pointer';
$axure.eventManager.click('u404', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u166'] = 'center';document.getElementById('u460_img').tabIndex = 0;
HookHover('u460', false);

u460.style.cursor = 'pointer';
$axure.eventManager.click('u460', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u1299_img').tabIndex = 0;

u1299.style.cursor = 'pointer';
$axure.eventManager.click('u1299', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/9/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1298'] = 'top';document.getElementById('u149_img').tabIndex = 0;

u149.style.cursor = 'pointer';
$axure.eventManager.click('u149', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Assistent_____.html');

}
});
HookHover('u212', false);
gv_vAlignTable['u465'] = 'center';gv_vAlignTable['u142'] = 'center';gv_vAlignTable['u1196'] = 'top';gv_vAlignTable['u1194'] = 'top';gv_vAlignTable['u641'] = 'top';gv_vAlignTable['u1190'] = 'top';gv_vAlignTable['u571'] = 'top';gv_vAlignTable['u1127'] = 'top';document.getElementById('u1126_img').tabIndex = 0;

u1126.style.cursor = 'pointer';
$axure.eventManager.click('u1126', function(e) {

if (true) {

SetWidgetFormText('u1035', '12/10/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1125'] = 'top';document.getElementById('u1124_img').tabIndex = 0;

u1124.style.cursor = 'pointer';
$axure.eventManager.click('u1124', function(e) {

if (true) {

SetWidgetFormText('u1035', '12/9/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1123'] = 'top';document.getElementById('u1122_img').tabIndex = 0;

u1122.style.cursor = 'pointer';
$axure.eventManager.click('u1122', function(e) {

if (true) {

SetWidgetFormText('u1035', '12/8/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1121'] = 'top';document.getElementById('u1120_img').tabIndex = 0;

u1120.style.cursor = 'pointer';
$axure.eventManager.click('u1120', function(e) {

if (true) {

SetWidgetFormText('u1035', '12/7/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
document.getElementById('u791_img').tabIndex = 0;

u791.style.cursor = 'pointer';
$axure.eventManager.click('u791', function(e) {

if (true) {

SetWidgetFormText('u708', '12/6/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u323'] = 'center';document.getElementById('u1128_img').tabIndex = 0;

u1128.style.cursor = 'pointer';
$axure.eventManager.click('u1128', function(e) {

if (true) {

SetWidgetFormText('u1035', '12/11/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
document.getElementById('u959_img').tabIndex = 0;

u959.style.cursor = 'pointer';
$axure.eventManager.click('u959', function(e) {

if (true) {

SetWidgetFormText('u880', '12/4/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u843'] = 'center';gv_vAlignTable['u752'] = 'top';document.getElementById('u434_img').tabIndex = 0;
HookHover('u434', false);

u434.style.cursor = 'pointer';
$axure.eventManager.click('u434', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u970'] = 'top';document.getElementById('u727_img').tabIndex = 0;

u727.style.cursor = 'pointer';
$axure.eventManager.click('u727', function(e) {

if (true) {

SetWidgetFormText('u708', '11/4/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
HookHover('u179', false);
HookHover('u354', false);
gv_vAlignTable['u116'] = 'center';gv_vAlignTable['u172'] = 'center';gv_vAlignTable['u545'] = 'center';gv_vAlignTable['u890'] = 'center';document.getElementById('u695_img').tabIndex = 0;

u695.style.cursor = 'pointer';
$axure.eventManager.click('u695', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetGlobalVariableValue('SpinnerValue') - 1) + '');

SetWidgetFormText('u692', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u692')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

SetWidgetFormText('u692', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u1103'] = 'top';gv_vAlignTable['u833'] = 'top';gv_vAlignTable['u726'] = 'top';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u983'] = 'top';gv_vAlignTable['u709'] = 'top';document.getElementById('u464_img').tabIndex = 0;
HookHover('u464', false);

u464.style.cursor = 'pointer';
$axure.eventManager.click('u464', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u185'] = 'center';gv_vAlignTable['u510'] = 'center';gv_vAlignTable['u146'] = 'center';gv_vAlignTable['u575'] = 'top';gv_vAlignTable['u1166'] = 'top';gv_vAlignTable['u1164'] = 'top';gv_vAlignTable['u1162'] = 'top';gv_vAlignTable['u1160'] = 'top';gv_vAlignTable['u807'] = 'top';gv_vAlignTable['u1168'] = 'top';gv_vAlignTable['u621'] = 'top';
$axure.eventManager.keyup('u863', function(e) {

if (IsValueNumeric(GetWidgetText('u863'))) {

SetGlobalVariableValue('SpinnerValue', GetWidgetText('u863'));

}
});

$axure.eventManager.blur('u863', function(e) {

if (IsValueNotNumeric(GetWidgetText('u863'))) {

SetWidgetFormText('u863', '0');

SetGlobalVariableValue('SpinnerValue', '0');

}

if ((GetWidgetText('u863')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

}
else
if ((GetWidgetText('u863')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

}
});
gv_vAlignTable['u257'] = 'center';document.getElementById('u73_img').tabIndex = 0;

u73.style.cursor = 'pointer';
$axure.eventManager.click('u73', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Описание.html');

}
});
gv_vAlignTable['u303'] = 'center';document.getElementById('u739_img').tabIndex = 0;

u739.style.cursor = 'pointer';
$axure.eventManager.click('u739', function(e) {

if (true) {

SetWidgetFormText('u708', '11/10/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u732'] = 'top';gv_vAlignTable['u974'] = 'top';document.getElementById('u111_img').tabIndex = 0;

u111.style.cursor = 'pointer';
$axure.eventManager.click('u111', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Дополнения.html');

}
});
HookHover('u198', false);
document.getElementById('u1076_img').tabIndex = 0;

u1076.style.cursor = 'pointer';
$axure.eventManager.click('u1076', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/15/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u540'] = 'top';document.getElementById('u414_img').tabIndex = 0;
HookHover('u414', false);

u414.style.cursor = 'pointer';
$axure.eventManager.click('u414', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u15'] = 'center';document.getElementById('u1070_img').tabIndex = 0;

u1070.style.cursor = 'pointer';
$axure.eventManager.click('u1070', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/12/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u229'] = 'center';document.getElementById('u159_img').tabIndex = 0;

u159.style.cursor = 'pointer';
$axure.eventManager.click('u159', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
document.getElementById('u690_img').tabIndex = 0;

u690.style.cursor = 'pointer';
$axure.eventManager.click('u690', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetGlobalVariableValue('SpinnerValue') - 1) + '');

SetWidgetFormText('u687', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u687')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

SetWidgetFormText('u687', GetGlobalVariableValue('SpinnerValue'));

}
});
HookHover('u222', false);
document.getElementById('u1297_img').tabIndex = 0;

u1297.style.cursor = 'pointer';
$axure.eventManager.click('u1297', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/8/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1296'] = 'top';document.getElementById('u1295_img').tabIndex = 0;

u1295.style.cursor = 'pointer';
$axure.eventManager.click('u1295', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/7/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1294'] = 'top';document.getElementById('u1293_img').tabIndex = 0;

u1293.style.cursor = 'pointer';
$axure.eventManager.click('u1293', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/6/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u651'] = 'top';document.getElementById('u1291_img').tabIndex = 0;

u1291.style.cursor = 'pointer';
$axure.eventManager.click('u1291', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/5/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1290'] = 'top';document.getElementById('u340_img').tabIndex = 0;
HookHover('u340', false);

u340.style.cursor = 'pointer';
$axure.eventManager.click('u340', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u1226'] = 'top';gv_vAlignTable['u1224'] = 'top';gv_vAlignTable['u1222'] = 'top';gv_vAlignTable['u1220'] = 'top';document.getElementById('u769_img').tabIndex = 0;

u769.style.cursor = 'pointer';
$axure.eventManager.click('u769', function(e) {

if (true) {

SetWidgetFormText('u708', '11/25/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
HookHover('u706', false);
gv_vAlignTable['u762'] = 'top';gv_vAlignTable['u483'] = 'center';document.getElementById('u141_img').tabIndex = 0;

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
document.getElementById('u765_img').tabIndex = 0;

u765.style.cursor = 'pointer';
$axure.eventManager.click('u765', function(e) {

if (true) {

SetWidgetFormText('u708', '11/23/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
HookHover('u444', false);
gv_vAlignTable['u291'] = 'center';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u718'] = 'center';document.getElementById('u252_img').tabIndex = 0;
HookHover('u252', false);

u252.style.cursor = 'pointer';
$axure.eventManager.click('u252', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u625'] = 'top';gv_vAlignTable['u867'] = 'center';gv_vAlignTable['u555'] = 'top';document.getElementById('u882_img').tabIndex = 0;

u882.style.cursor = 'pointer';
$axure.eventManager.click('u882', function(e) {

if (true) {

	SetPanelVisibility('u884','toggle','none',500);

}
});
gv_vAlignTable['u3'] = 'center';document.getElementById('u913_img').tabIndex = 0;

u913.style.cursor = 'pointer';
$axure.eventManager.click('u913', function(e) {

if (true) {

SetWidgetFormText('u880', '11/11/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u307'] = 'center';gv_vAlignTable['u601'] = 'top';gv_vAlignTable['u363'] = 'center';gv_vAlignTable['u902'] = 'top';gv_vAlignTable['u736'] = 'top';document.getElementById('u71_img').tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('История.html');

}
});
gv_vAlignTable['u993'] = 'top';gv_vAlignTable['u719'] = 'top';gv_vAlignTable['u195'] = 'center';gv_vAlignTable['u956'] = 'top';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u209'] = 'center';gv_vAlignTable['u1091'] = 'top';gv_vAlignTable['u1267'] = 'top';gv_vAlignTable['u1265'] = 'top';gv_vAlignTable['u1264'] = 'center';gv_vAlignTable['u1262'] = 'center';gv_vAlignTable['u1260'] = 'center';gv_vAlignTable['u1269'] = 'center';HookHover('u1268', false);
gv_vAlignTable['u631'] = 'top';gv_vAlignTable['u873'] = 'top';gv_vAlignTable['u788'] = 'top';gv_vAlignTable['u766'] = 'top';gv_vAlignTable['u74'] = 'center';gv_vAlignTable['u487'] = 'center';document.getElementById('u781_img').tabIndex = 0;

u781.style.cursor = 'pointer';
$axure.eventManager.click('u781', function(e) {

if (true) {

SetWidgetFormText('u708', '12/1/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u749_img').tabIndex = 0;

u749.style.cursor = 'pointer';
$axure.eventManager.click('u749', function(e) {

if (true) {

SetWidgetFormText('u708', '11/15/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u742'] = 'top';gv_vAlignTable['u23'] = 'center';document.getElementById('u550_img').tabIndex = 0;
HookHover('u550', false);

u550.style.cursor = 'pointer';
$axure.eventManager.click('u550', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u921_img').tabIndex = 0;

u921.style.cursor = 'pointer';
$axure.eventManager.click('u921', function(e) {

if (true) {

SetWidgetFormText('u880', '11/15/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u82'] = 'center';gv_vAlignTable['u239'] = 'center';gv_vAlignTable['u886'] = 'center';gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u389'] = 'center';gv_vAlignTable['u1396'] = 'top';gv_vAlignTable['u605'] = 'top';gv_vAlignTable['u367'] = 'center';gv_vAlignTable['u1392'] = 'top';gv_vAlignTable['u1391'] = 'center';document.getElementById('u382_img').tabIndex = 0;
HookHover('u382', false);

u382.style.cursor = 'pointer';
$axure.eventManager.click('u382', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u943_img').tabIndex = 0;

u943.style.cursor = 'pointer';
$axure.eventManager.click('u943', function(e) {

if (true) {

SetWidgetFormText('u880', '11/26/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
document.getElementById('u975_img').tabIndex = 0;

u975.style.cursor = 'pointer';
$axure.eventManager.click('u975', function(e) {

if (true) {

SetWidgetFormText('u880', '12/12/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u1398'] = 'top';gv_vAlignTable['u413'] = 'center';document.getElementById('u779_img').tabIndex = 0;

u779.style.cursor = 'pointer';
$axure.eventManager.click('u779', function(e) {

if (true) {

SetWidgetFormText('u708', '11/30/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
HookHover('u190', false);
document.getElementById('u95_img').tabIndex = 0;

u95.style.cursor = 'pointer';
$axure.eventManager.click('u95', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Assistent_____.html');

}
});
gv_vAlignTable['u772'] = 'top';gv_vAlignTable['u493'] = 'center';document.getElementById('u151_img').tabIndex = 0;

u151.style.cursor = 'pointer';
$axure.eventManager.click('u151', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Применение.html');

}
});
gv_vAlignTable['u1129'] = 'top';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u269'] = 'center';document.getElementById('u89_img').tabIndex = 0;

u89.style.cursor = 'pointer';
$axure.eventManager.click('u89', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('История.html');

}
});
document.getElementById('u812_img').tabIndex = 0;

u812.style.cursor = 'pointer';
$axure.eventManager.click('u812', function(e) {

if (true) {

	SetPanelState('u557', 'pd0u557','none','',500,'none','',500);

}
});
gv_vAlignTable['u439'] = 'center';document.getElementById('u262_img').tabIndex = 0;
HookHover('u262', false);

u262.style.cursor = 'pointer';
$axure.eventManager.click('u262', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u899_img').tabIndex = 0;

u899.style.cursor = 'pointer';
$axure.eventManager.click('u899', function(e) {

if (true) {

SetWidgetFormText('u880', '11/4/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u635'] = 'top';gv_vAlignTable['u877'] = 'top';gv_vAlignTable['u1067'] = 'top';gv_vAlignTable['u1065'] = 'top';document.getElementById('u1064_img').tabIndex = 0;

u1064.style.cursor = 'pointer';
$axure.eventManager.click('u1064', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/9/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1063'] = 'top';document.getElementById('u1062_img').tabIndex = 0;

u1062.style.cursor = 'pointer';
$axure.eventManager.click('u1062', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/8/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1061'] = 'top';document.getElementById('u1060_img').tabIndex = 0;

u1060.style.cursor = 'pointer';
$axure.eventManager.click('u1060', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/7/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
document.getElementById('u785_img').tabIndex = 0;

u785.style.cursor = 'pointer';
$axure.eventManager.click('u785', function(e) {

if (true) {

SetWidgetFormText('u708', '12/3/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u923_img').tabIndex = 0;

u923.style.cursor = 'pointer';
$axure.eventManager.click('u923', function(e) {

if (true) {

SetWidgetFormText('u880', '11/16/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u1069'] = 'top';document.getElementById('u1068_img').tabIndex = 0;

u1068.style.cursor = 'pointer';
$axure.eventManager.click('u1068', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/11/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u373'] = 'center';gv_vAlignTable['u746'] = 'top';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u377'] = 'center';HookHover('u296', false);
document.getElementById('u125_img').tabIndex = 0;

u125.style.cursor = 'pointer';
$axure.eventManager.click('u125', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('История.html');

}
});
document.getElementById('u101_img').tabIndex = 0;

u101.style.cursor = 'pointer';
$axure.eventManager.click('u101', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Глоссарий.html');

}
});
document.getElementById('u266_img').tabIndex = 0;
HookHover('u266', false);

u266.style.cursor = 'pointer';
$axure.eventManager.click('u266', function(e) {

if (true) {

	self.location.href='#';

}
});
HookHover('u236', false);
gv_vAlignTable['u21'] = 'center';document.getElementById('u1313_img').tabIndex = 0;

u1313.style.cursor = 'pointer';
$axure.eventManager.click('u1313', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/16/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u219'] = 'center';gv_vAlignTable['u1184'] = 'top';gv_vAlignTable['u1182'] = 'top';gv_vAlignTable['u1318'] = 'top';gv_vAlignTable['u1366'] = 'top';document.getElementById('u1365_img').tabIndex = 0;

u1365.style.cursor = 'pointer';
$axure.eventManager.click('u1365', function(e) {

if (true) {

SetWidgetFormText('u1270', '12/12/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1364'] = 'top';document.getElementById('u1363_img').tabIndex = 0;

u1363.style.cursor = 'pointer';
$axure.eventManager.click('u1363', function(e) {

if (true) {

SetWidgetFormText('u1270', '12/11/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1362'] = 'top';document.getElementById('u1361_img').tabIndex = 0;

u1361.style.cursor = 'pointer';
$axure.eventManager.click('u1361', function(e) {

if (true) {

SetWidgetFormText('u1270', '12/10/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1360'] = 'top';gv_vAlignTable['u661'] = 'top';gv_vAlignTable['u711'] = 'center';document.getElementById('u953_img').tabIndex = 0;

u953.style.cursor = 'pointer';
$axure.eventManager.click('u953', function(e) {

if (true) {

SetWidgetFormText('u880', '12/1/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u347'] = 'center';gv_vAlignTable['u1368'] = 'top';gv_vAlignTable['u798'] = 'top';HookHover('u344', false);
gv_vAlignTable['u776'] = 'top';document.getElementById('u75_img').tabIndex = 0;

u75.style.cursor = 'pointer';
$axure.eventManager.click('u75', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Дополнения.html');

}
});
document.getElementById('u497_img').tabIndex = 0;

u497.style.cursor = 'pointer';
$axure.eventManager.click('u497', function(e) {

if (true) {

	NewWindow('http://spacecorp.ru', "", "directories=1, height=500, location=1, menubar=1, resizable=1, scrollbars=1, status=1, toolbar=1, width=500", true, 500, 500);

}
});

$axure.eventManager.mouseover('u497', function(e) {
if (!IsTrueMouseOver('u497',e)) return;
if (true) {

	SetPanelVisibility('u527','','none',500);

}
});

$axure.eventManager.mouseout('u497', function(e) {
if (!IsTrueMouseOut('u497',e)) return;
if (true) {

	SetPanelVisibility('u527','hidden','none',500);

}
});
document.getElementById('u759_img').tabIndex = 0;

u759.style.cursor = 'pointer';
$axure.eventManager.click('u759', function(e) {

if (true) {

SetWidgetFormText('u708', '11/20/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u138'] = 'center';gv_vAlignTable['u1385'] = 'top';gv_vAlignTable['u1384'] = 'top';gv_vAlignTable['u1383'] = 'center';document.getElementById('u131_img').tabIndex = 0;

u131.style.cursor = 'pointer';
$axure.eventManager.click('u131', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Assistent_____.html');

}
});
gv_vAlignTable['u1087'] = 'top';document.getElementById('u1086_img').tabIndex = 0;

u1086.style.cursor = 'pointer';
$axure.eventManager.click('u1086', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/20/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
HookHover('u288', false);
document.getElementById('u1084_img').tabIndex = 0;

u1084.style.cursor = 'pointer';
$axure.eventManager.click('u1084', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/19/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1083'] = 'top';document.getElementById('u1082_img').tabIndex = 0;

u1082.style.cursor = 'pointer';
$axure.eventManager.click('u1082', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/18/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1081'] = 'top';document.getElementById('u1080_img').tabIndex = 0;

u1080.style.cursor = 'pointer';
$axure.eventManager.click('u1080', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/17/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1017'] = 'top';gv_vAlignTable['u1015'] = 'center';gv_vAlignTable['u1013'] = 'center';gv_vAlignTable['u1011'] = 'center';gv_vAlignTable['u896'] = 'top';document.getElementById('u39_img').tabIndex = 0;

u39.style.cursor = 'pointer';
$axure.eventManager.click('u39', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Дополнения.html');

}
});
gv_vAlignTable['u1019'] = 'center';HookHover('u1018', false);
HookHover('u242', false);
gv_vAlignTable['u399'] = 'center';document.getElementById('u741_img').tabIndex = 0;

u741.style.cursor = 'pointer';
$axure.eventManager.click('u741', function(e) {

if (true) {

SetWidgetFormText('u708', '11/11/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u615'] = 'top';gv_vAlignTable['u857'] = 'center';gv_vAlignTable['u671'] = 'center';document.getElementById('u392_img').tabIndex = 0;
HookHover('u392', false);

u392.style.cursor = 'pointer';
$axure.eventManager.click('u392', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u423'] = 'center';gv_vAlignTable['u108'] = 'center';gv_vAlignTable['u1200'] = 'top';gv_vAlignTable['u168'] = 'center';document.getElementById('u105_img').tabIndex = 0;

u105.style.cursor = 'pointer';
$axure.eventManager.click('u105', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
document.getElementById('u161_img').tabIndex = 0;

u161.style.cursor = 'pointer';
$axure.eventManager.click('u161', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('История.html');

}
});
document.getElementById('u398_img').tabIndex = 0;
HookHover('u398', false);

u398.style.cursor = 'pointer';
$axure.eventManager.click('u398', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u534'] = 'top';document.getElementById('u1317_img').tabIndex = 0;

u1317.style.cursor = 'pointer';
$axure.eventManager.click('u1317', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/18/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1316'] = 'top';document.getElementById('u1315_img').tabIndex = 0;

u1315.style.cursor = 'pointer';
$axure.eventManager.click('u1315', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/17/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1314'] = 'top';document.getElementById('u829_img').tabIndex = 0;

u829.style.cursor = 'pointer';
$axure.eventManager.click('u829', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetNum(GetGlobalVariableValue('SpinnerValue')) + 1) + '');

SetWidgetFormText('u828', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u828')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

SetWidgetFormText('u828', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u1312'] = 'top';document.getElementById('u1311_img').tabIndex = 0;

u1311.style.cursor = 'pointer';
$axure.eventManager.click('u1311', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/15/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1310'] = 'top';gv_vAlignTable['u279'] = 'center';gv_vAlignTable['u684'] = 'center';document.getElementById('u1319_img').tabIndex = 0;

u1319.style.cursor = 'pointer';
$axure.eventManager.click('u1319', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/19/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
HookHover('u216', false);
document.getElementById('u272_img').tabIndex = 0;
HookHover('u272', false);

u272.style.cursor = 'pointer';
$axure.eventManager.click('u272', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u645'] = 'top';document.getElementById('u795_img').tabIndex = 0;

u795.style.cursor = 'pointer';
$axure.eventManager.click('u795', function(e) {

if (true) {

SetWidgetFormText('u708', '12/8/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u933_img').tabIndex = 0;

u933.style.cursor = 'pointer';
$axure.eventManager.click('u933', function(e) {

if (true) {

SetWidgetFormText('u880', '11/21/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u327'] = 'center';document.getElementById('u957_img').tabIndex = 0;

u957.style.cursor = 'pointer';
$axure.eventManager.click('u957', function(e) {

if (true) {

SetWidgetFormText('u880', '12/3/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
document.getElementById('u909_img').tabIndex = 0;

u909.style.cursor = 'pointer';
$axure.eventManager.click('u909', function(e) {

if (true) {

SetWidgetFormText('u880', '11/9/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u756'] = 'top';document.getElementById('u135_img').tabIndex = 0;

u135.style.cursor = 'pointer';
$axure.eventManager.click('u135', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u368_img').tabIndex = 0;
HookHover('u368', false);

u368.style.cursor = 'pointer';
$axure.eventManager.click('u368', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u118'] = 'center';gv_vAlignTable['u891'] = 'top';gv_vAlignTable['u285'] = 'center';gv_vAlignTable['u852'] = 'center';HookHover('u246', false);
gv_vAlignTable['u675'] = 'center';HookHover('u396', false);
gv_vAlignTable['u728'] = 'top';document.getElementById('u907_img').tabIndex = 0;

u907.style.cursor = 'pointer';
$axure.eventManager.click('u907', function(e) {

if (true) {

SetWidgetFormText('u880', '11/8/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
document.getElementById('u721_img').tabIndex = 0;

u721.style.cursor = 'pointer';
$axure.eventManager.click('u721', function(e) {

if (true) {

SetWidgetFormText('u708', '11/1/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u963_img').tabIndex = 0;

u963.style.cursor = 'pointer';
$axure.eventManager.click('u963', function(e) {

if (true) {

SetWidgetFormText('u880', '12/6/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u357'] = 'center';gv_vAlignTable['u100'] = 'center';HookHover('u436', false);
document.getElementById('u165_img').tabIndex = 0;

u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Дополнения.html');

}
});
gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u148'] = 'center';document.getElementById('u1146_img').tabIndex = 0;

u1146.style.cursor = 'pointer';
$axure.eventManager.click('u1146', function(e) {

if (true) {

	SetPanelState('u557', 'pd2u557','none','',500,'none','',500);

	BringToFront("u557");

}
});
gv_vAlignTable['u1145'] = 'center';gv_vAlignTable['u1186'] = 'top';gv_vAlignTable['u80'] = 'center';gv_vAlignTable['u1117'] = 'top';document.getElementById('u1116_img').tabIndex = 0;

u1116.style.cursor = 'pointer';
$axure.eventManager.click('u1116', function(e) {

if (true) {

SetWidgetFormText('u1035', '12/5/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1115'] = 'top';document.getElementById('u1114_img').tabIndex = 0;

u1114.style.cursor = 'pointer';
$axure.eventManager.click('u1114', function(e) {

if (true) {

SetWidgetFormText('u1035', '12/4/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1113'] = 'top';document.getElementById('u1112_img').tabIndex = 0;

u1112.style.cursor = 'pointer';
$axure.eventManager.click('u1112', function(e) {

if (true) {

SetWidgetFormText('u1035', '12/3/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1111'] = 'top';document.getElementById('u1110_img').tabIndex = 0;

u1110.style.cursor = 'pointer';
$axure.eventManager.click('u1110', function(e) {

if (true) {

SetWidgetFormText('u1035', '12/2/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u259'] = 'center';gv_vAlignTable['u790'] = 'top';gv_vAlignTable['u802'] = 'top';gv_vAlignTable['u758'] = 'top';document.getElementById('u937_img').tabIndex = 0;

u937.style.cursor = 'pointer';
$axure.eventManager.click('u937', function(e) {

if (true) {

SetWidgetFormText('u880', '11/23/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
document.getElementById('u751_img').tabIndex = 0;

u751.style.cursor = 'pointer';
$axure.eventManager.click('u751', function(e) {

if (true) {

SetWidgetFormText('u708', '11/16/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u325'] = 'center';gv_vAlignTable['u433'] = 'center';gv_vAlignTable['u944'] = 'top';gv_vAlignTable['u1192'] = 'top';gv_vAlignTable['u583'] = 'top';document.getElementById('u693_img').tabIndex = 0;

u693.style.cursor = 'pointer';
$axure.eventManager.click('u693', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetNum(GetGlobalVariableValue('SpinnerValue')) + 1) + '');

SetWidgetFormText('u692', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u692')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

SetWidgetFormText('u692', GetGlobalVariableValue('SpinnerValue'));

}
});
document.getElementById('u819_img').tabIndex = 0;

u819.style.cursor = 'pointer';
$axure.eventManager.click('u819', function(e) {

if (true) {

	SetPanelState('u557', 'pd3u557','none','',500,'none','',500);

}
});
document.getElementById('u115_img').tabIndex = 0;

u115.style.cursor = 'pointer';
$axure.eventManager.click('u115', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Применение.html');

}
});
document.getElementById('u171_img').tabIndex = 0;

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u1198'] = 'top';document.getElementById('u83_img').tabIndex = 0;

u83.style.cursor = 'pointer';
$axure.eventManager.click('u83', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Глоссарий.html');

}
});
document.getElementById('u544_img').tabIndex = 0;
HookHover('u544', false);

u544.style.cursor = 'pointer';
$axure.eventManager.click('u544', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u391'] = 'center';gv_vAlignTable['u533'] = 'top';gv_vAlignTable['u839'] = 'center';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u694'] = 'center';document.getElementById('u43_img').tabIndex = 0;

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Применение.html');

}
});
gv_vAlignTable['u832'] = 'center';document.getElementById('u989_img').tabIndex = 0;

u989.style.cursor = 'pointer';
$axure.eventManager.click('u989', function(e) {

if (true) {

	SetPanelState('u557', 'pd2u557','none','',500,'none','',500);

	BringToFront("u557");

}
});
document.getElementById('u725_img').tabIndex = 0;

u725.style.cursor = 'pointer';
$axure.eventManager.click('u725', function(e) {

if (true) {

SetWidgetFormText('u708', '11/3/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u967_img').tabIndex = 0;

u967.style.cursor = 'pointer';
$axure.eventManager.click('u967', function(e) {

if (true) {

SetWidgetFormText('u880', '12/8/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u655'] = 'top';gv_vAlignTable['u1350'] = 'top';document.getElementById('u949_img').tabIndex = 0;

u949.style.cursor = 'pointer';
$axure.eventManager.click('u949', function(e) {

if (true) {

SetWidgetFormText('u880', '11/29/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u1358'] = 'top';gv_vAlignTable['u407'] = 'center';gv_vAlignTable['u701'] = 'center';gv_vAlignTable['u463'] = 'center';document.getElementById('u145_img').tabIndex = 0;

u145.style.cursor = 'pointer';
$axure.eventManager.click('u145', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Описание.html');

}
});
HookHover('u346', false);
gv_vAlignTable['u1156'] = 'top';gv_vAlignTable['u295'] = 'center';gv_vAlignTable['u1154'] = 'top';document.getElementById('u326_img').tabIndex = 0;
HookHover('u326', false);

u326.style.cursor = 'pointer';
$axure.eventManager.click('u326', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u862'] = 'center';document.getElementById('u256_img').tabIndex = 0;
HookHover('u256', false);

u256.style.cursor = 'pointer';
$axure.eventManager.click('u256', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
gv_vAlignTable['u309'] = 'center';gv_vAlignTable['u1005'] = 'top';HookHover('u302', false);
gv_vAlignTable['u738'] = 'top';document.getElementById('u917_img').tabIndex = 0;

u917.style.cursor = 'pointer';
$axure.eventManager.click('u917', function(e) {

if (true) {

SetWidgetFormText('u880', '11/13/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
document.getElementById('u731_img').tabIndex = 0;

u731.style.cursor = 'pointer';
$axure.eventManager.click('u731', function(e) {

if (true) {

SetWidgetFormText('u708', '11/6/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u973_img').tabIndex = 0;

u973.style.cursor = 'pointer';
$axure.eventManager.click('u973', function(e) {

if (true) {

SetWidgetFormText('u880', '12/11/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u587'] = 'top';gv_vAlignTable['u311'] = 'center';HookHover('u228', false);
gv_vAlignTable['u221'] = 'center';gv_vAlignTable['u930'] = 'top';document.getElementById('u1287_img').tabIndex = 0;

u1287.style.cursor = 'pointer';
$axure.eventManager.click('u1287', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/3/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1286'] = 'top';document.getElementById('u1285_img').tabIndex = 0;

u1285.style.cursor = 'pointer';
$axure.eventManager.click('u1285', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/2/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
document.getElementById('u1283_img').tabIndex = 0;

u1283.style.cursor = 'pointer';
$axure.eventManager.click('u1283', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/1/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1281'] = 'top';gv_vAlignTable['u1280'] = 'center';gv_vAlignTable['u906'] = 'top';gv_vAlignTable['u1216'] = 'top';gv_vAlignTable['u1214'] = 'top';gv_vAlignTable['u1212'] = 'top';gv_vAlignTable['u1210'] = 'top';gv_vAlignTable['u48'] = 'center';HookHover('u284', false);
gv_vAlignTable['u768'] = 'top';gv_vAlignTable['u489'] = 'center';gv_vAlignTable['u705'] = 'center';gv_vAlignTable['u467'] = 'center';document.getElementById('u761_img').tabIndex = 0;

u761.style.cursor = 'pointer';
$axure.eventManager.click('u761', function(e) {

if (true) {

SetWidgetFormText('u708', '11/21/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u482_img').tabIndex = 0;
HookHover('u482', false);

u482.style.cursor = 'pointer';
$axure.eventManager.click('u482', function(e) {

if (true) {

	self.location.href='#';

}
});
HookHover('u202', false);
gv_vAlignTable['u513'] = 'center';document.getElementById('u859_img').tabIndex = 0;

u859.style.cursor = 'pointer';
$axure.eventManager.click('u859', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetNum(GetGlobalVariableValue('SpinnerValue')) + 1) + '');

SetWidgetFormText('u858', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u858')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

SetWidgetFormText('u858', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u443'] = 'center';HookHover('u290', false);
document.getElementById('u258_img').tabIndex = 0;
HookHover('u258', false);

u258.style.cursor = 'pointer';
$axure.eventManager.click('u258', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u1218'] = 'top';gv_vAlignTable['u593'] = 'top';gv_vAlignTable['u251'] = 'center';gv_vAlignTable['u888'] = 'center';document.getElementById('u866_img').tabIndex = 0;

u866.style.cursor = 'pointer';
$axure.eventManager.click('u866', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetGlobalVariableValue('SpinnerValue') - 1) + '');

SetWidgetFormText('u863', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u863')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

SetWidgetFormText('u863', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u36'] = 'center';gv_vAlignTable['u881'] = 'top';gv_vAlignTable['u369'] = 'center';document.getElementById('u332_img').tabIndex = 0;
HookHover('u332', false);

u332.style.cursor = 'pointer';
$axure.eventManager.click('u332', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u99_img').tabIndex = 0;

u99.style.cursor = 'pointer';
$axure.eventManager.click('u99', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u912'] = 'top';HookHover('u306', false);
document.getElementById('u362_img').tabIndex = 0;
HookHover('u362', false);

u362.style.cursor = 'pointer';
$axure.eventManager.click('u362', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u999'] = 'center';document.getElementById('u735_img').tabIndex = 0;

u735.style.cursor = 'pointer';
$axure.eventManager.click('u735', function(e) {

if (true) {

SetWidgetFormText('u708', '11/8/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u977'] = 'top';gv_vAlignTable['u992'] = 'center';document.getElementById('u927_img').tabIndex = 0;

u927.style.cursor = 'pointer';
$axure.eventManager.click('u927', function(e) {

if (true) {

SetWidgetFormText('u880', '11/18/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u417'] = 'center';gv_vAlignTable['u473'] = 'center';HookHover('u194', false);
gv_vAlignTable['u225'] = 'center';document.getElementById('u155_img').tabIndex = 0;

u155.style.cursor = 'pointer';
$axure.eventManager.click('u155', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Глоссарий.html');

}
});
document.getElementById('u87_img').tabIndex = 0;

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
gv_vAlignTable['u1256'] = 'center';gv_vAlignTable['u1254'] = 'center';gv_vAlignTable['u1252'] = 'top';gv_vAlignTable['u1250'] = 'top';document.getElementById('u700_img').tabIndex = 0;

u700.style.cursor = 'pointer';
$axure.eventManager.click('u700', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetGlobalVariableValue('SpinnerValue') - 1) + '');

SetWidgetFormText('u697', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u697')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

SetWidgetFormText('u697', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u1258'] = 'center';gv_vAlignTable['u872'] = 'top';gv_vAlignTable['u319'] = 'center';document.getElementById('u486_img').tabIndex = 0;
HookHover('u486', false);

u486.style.cursor = 'pointer';
$axure.eventManager.click('u486', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u816'] = 'center';gv_vAlignTable['u780'] = 'top';gv_vAlignTable['u748'] = 'top';gv_vAlignTable['u351'] = 'center';gv_vAlignTable['u120'] = 'center';gv_vAlignTable['u597'] = 'top';HookHover('u238', false);
gv_vAlignTable['u946'] = 'top';gv_vAlignTable['u231'] = 'center';document.getElementById('u388_img').tabIndex = 0;
HookHover('u388', false);

u388.style.cursor = 'pointer';
$axure.eventManager.click('u388', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
gv_vAlignTable['u1387'] = 'top';gv_vAlignTable['u1386'] = 'top';document.getElementById('u366_img').tabIndex = 0;
HookHover('u366', false);

u366.style.cursor = 'pointer';
$axure.eventManager.click('u366', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u1381'] = 'center';gv_vAlignTable['u349'] = 'center';gv_vAlignTable['u1388'] = 'top';document.getElementById('u412_img').tabIndex = 0;
HookHover('u412', false);

u412.style.cursor = 'pointer';
$axure.eventManager.click('u412', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u778'] = 'top';HookHover('u499', false);
gv_vAlignTable['u477'] = 'center';document.getElementById('u771_img').tabIndex = 0;

u771.style.cursor = 'pointer';
$axure.eventManager.click('u771', function(e) {

if (true) {

SetWidgetFormText('u708', '11/26/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u492_img').tabIndex = 0;
HookHover('u492', false);

u492.style.cursor = 'pointer';
$axure.eventManager.click('u492', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u1377'] = 'top';gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u1371'] = 'top';HookHover('u268', false);
gv_vAlignTable['u811'] = 'top';document.getElementById('u81_img').tabIndex = 0;

u81.style.cursor = 'pointer';
$axure.eventManager.click('u81', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u261'] = 'center';gv_vAlignTable['u898'] = 'top';document.getElementById('u37_img').tabIndex = 0;

u37.style.cursor = 'pointer';
$axure.eventManager.click('u37', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Описание.html');

}
});
gv_vAlignTable['u1057'] = 'top';document.getElementById('u1056_img').tabIndex = 0;

u1056.style.cursor = 'pointer';
$axure.eventManager.click('u1056', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/5/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1055'] = 'top';document.getElementById('u1054_img').tabIndex = 0;

u1054.style.cursor = 'pointer';
$axure.eventManager.click('u1054', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/4/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1053'] = 'top';document.getElementById('u1052_img').tabIndex = 0;

u1052.style.cursor = 'pointer';
$axure.eventManager.click('u1052', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/3/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1051'] = 'top';document.getElementById('u1050_img').tabIndex = 0;

u1050.style.cursor = 'pointer';
$axure.eventManager.click('u1050', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/2/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u784'] = 'top';gv_vAlignTable['u922'] = 'top';gv_vAlignTable['u1059'] = 'top';document.getElementById('u1058_img').tabIndex = 0;

u1058.style.cursor = 'pointer';
$axure.eventManager.click('u1058', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/6/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
document.getElementById('u372_img').tabIndex = 0;
HookHover('u372', false);

u372.style.cursor = 'pointer';
$axure.eventManager.click('u372', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u745_img').tabIndex = 0;

u745.style.cursor = 'pointer';
$axure.eventManager.click('u745', function(e) {

if (true) {

SetWidgetFormText('u708', '11/13/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u94'] = 'center';
$axure.eventManager.keyup('u1025', function(e) {

if (IsValueNumeric(GetWidgetText('u1025'))) {

SetGlobalVariableValue('SpinnerValue', GetWidgetText('u1025'));

}
});

$axure.eventManager.blur('u1025', function(e) {

if (IsValueNotNumeric(GetWidgetText('u1025'))) {

SetWidgetFormText('u1025', '0');

SetGlobalVariableValue('SpinnerValue', '0');

}

if ((GetWidgetText('u1025')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

}
else
if ((GetWidgetText('u1025')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

}
});
document.getElementById('u1023_img').tabIndex = 0;

u1023.style.cursor = 'pointer';
$axure.eventManager.click('u1023', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetGlobalVariableValue('SpinnerValue') - 1) + '');

SetWidgetFormText('u1020', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u1020')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

SetWidgetFormText('u1020', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u918'] = 'top';gv_vAlignTable['u427'] = 'center';document.getElementById('u77_img').tabIndex = 0;

u77.style.cursor = 'pointer';
$axure.eventManager.click('u77', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Assistent_____.html');

}
});
gv_vAlignTable['u1029'] = 'center';gv_vAlignTable['u841'] = 'center';gv_vAlignTable['u235'] = 'center';HookHover('u218', false);
document.getElementById('u991_img').tabIndex = 0;

u991.style.cursor = 'pointer';
$axure.eventManager.click('u991', function(e) {

if (true) {

	SetPanelState('u557', 'pd3u557','none','',500,'none','',500);

	BringToFront("u557");

}
});
gv_vAlignTable['u385'] = 'center';document.getElementById('u1357_img').tabIndex = 0;

u1357.style.cursor = 'pointer';
$axure.eventManager.click('u1357', function(e) {

if (true) {

SetWidgetFormText('u1270', '12/8/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1356'] = 'top';document.getElementById('u1355_img').tabIndex = 0;

u1355.style.cursor = 'pointer';
$axure.eventManager.click('u1355', function(e) {

if (true) {

SetWidgetFormText('u1270', '12/7/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1354'] = 'top';document.getElementById('u1353_img').tabIndex = 0;

u1353.style.cursor = 'pointer';
$axure.eventManager.click('u1353', function(e) {

if (true) {

SetWidgetFormText('u1270', '12/6/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1352'] = 'top';document.getElementById('u1351_img').tabIndex = 0;

u1351.style.cursor = 'pointer';
$axure.eventManager.click('u1351', function(e) {

if (true) {

SetWidgetFormText('u1270', '12/5/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
document.getElementById('u856_img').tabIndex = 0;

u856.style.cursor = 'pointer';
$axure.eventManager.click('u856', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetGlobalVariableValue('SpinnerValue') - 1) + '');

SetWidgetFormText('u853', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u853')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

SetWidgetFormText('u853', GetGlobalVariableValue('SpinnerValue'));

}
});
document.getElementById('u710_img').tabIndex = 0;

u710.style.cursor = 'pointer';
$axure.eventManager.click('u710', function(e) {

if (true) {

	SetPanelVisibility('u712','toggle','none',500);

}
});
gv_vAlignTable['u952'] = 'top';document.getElementById('u1359_img').tabIndex = 0;

u1359.style.cursor = 'pointer';
$axure.eventManager.click('u1359', function(e) {

if (true) {

SetWidgetFormText('u1270', '12/9/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u932'] = 'top';document.getElementById('u775_img').tabIndex = 0;

u775.style.cursor = 'pointer';
$axure.eventManager.click('u775', function(e) {

if (true) {

SetWidgetFormText('u708', '11/28/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u457'] = 'center';HookHover('u200', false);
gv_vAlignTable['u130'] = 'center';
$axure.eventManager.mouseover('u503', function(e) {
if (!IsTrueMouseOver('u503',e)) return;
if (true) {

	SetPanelVisibility('u520','','none',500);

}
});

$axure.eventManager.mouseout('u503', function(e) {
if (!IsTrueMouseOut('u503',e)) return;
if (true) {

	SetPanelVisibility('u520','hidden','none',500);

}
});
gv_vAlignTable['u265'] = 'center';gv_vAlignTable['u1007'] = 'center';HookHover('u280', false);
gv_vAlignTable['u1004'] = 'center';document.getElementById('u1003_img').tabIndex = 0;

u1003.style.cursor = 'pointer';
$axure.eventManager.click('u1003', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetGlobalVariableValue('SpinnerValue') - 1) + '');

SetWidgetFormText('u1000', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u1000')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

SetWidgetFormText('u1000', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u1002'] = 'center';document.getElementById('u1001_img').tabIndex = 0;

u1001.style.cursor = 'pointer';
$axure.eventManager.click('u1001', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetNum(GetGlobalVariableValue('SpinnerValue')) + 1) + '');

SetWidgetFormText('u1000', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u1000')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

SetWidgetFormText('u1000', GetGlobalVariableValue('SpinnerValue'));

}
});

$axure.eventManager.keyup('u1000', function(e) {

if (IsValueNumeric(GetWidgetText('u1000'))) {

SetGlobalVariableValue('SpinnerValue', GetWidgetText('u1000'));

}
});

$axure.eventManager.blur('u1000', function(e) {

if (IsValueNotNumeric(GetWidgetText('u1000'))) {

SetWidgetFormText('u1000', '0');

SetGlobalVariableValue('SpinnerValue', '0');

}

if ((GetWidgetText('u1000')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

}
else
if ((GetWidgetText('u1000')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

}
});
document.getElementById('u895_img').tabIndex = 0;

u895.style.cursor = 'pointer';
$axure.eventManager.click('u895', function(e) {

if (true) {

SetWidgetFormText('u880', '11/2/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u1009'] = 'center';gv_vAlignTable['u821'] = 'top';gv_vAlignTable['u926'] = 'top';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u740'] = 'top';HookHover('u376', false);
document.getElementById('u35_img').tabIndex = 0;

u35.style.cursor = 'pointer';
$axure.eventManager.click('u35', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('История.html');

}
});
gv_vAlignTable['u429'] = 'center';HookHover('u422', false);
gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u1284'] = 'top';document.getElementById('u1307_img').tabIndex = 0;

u1307.style.cursor = 'pointer';
$axure.eventManager.click('u1307', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/13/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1306'] = 'top';document.getElementById('u1305_img').tabIndex = 0;

u1305.style.cursor = 'pointer';
$axure.eventManager.click('u1305', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/12/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1304'] = 'top';document.getElementById('u1303_img').tabIndex = 0;

u1303.style.cursor = 'pointer';
$axure.eventManager.click('u1303', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/11/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1302'] = 'top';document.getElementById('u1301_img').tabIndex = 0;

u1301.style.cursor = 'pointer';
$axure.eventManager.click('u1301', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/10/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1300'] = 'top';HookHover('u278', false);
gv_vAlignTable['u1288'] = 'top';gv_vAlignTable['u341'] = 'center';gv_vAlignTable['u215'] = 'center';document.getElementById('u93_img').tabIndex = 0;

u93.style.cursor = 'pointer';
$axure.eventManager.click('u93', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Дополнения.html');

}
});
document.getElementById('u939_img').tabIndex = 0;

u939.style.cursor = 'pointer';
$axure.eventManager.click('u939', function(e) {

if (true) {

SetWidgetFormText('u880', '11/24/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u339'] = 'center';gv_vAlignTable['u794'] = 'top';document.getElementById('u755_img').tabIndex = 0;

u755.style.cursor = 'pointer';
$axure.eventManager.click('u755', function(e) {

if (true) {

SetWidgetFormText('u708', '11/18/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u842_img').tabIndex = 0;

u842.style.cursor = 'pointer';
$axure.eventManager.click('u842', function(e) {

if (true) {

	NewWindow($axure.globalVariableProvider.getLinkUrl('Прогноз_доступности.html'), "", "directories=0, height=600, location=1, menubar=0, resizable=1, scrollbars=1, status=0, toolbar=0, width=1000, left=0, top=0", false, 1000, 600);

}
});
gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u5'] = 'center';
$axure.eventManager.mouseover('u507', function(e) {
if (!IsTrueMouseOver('u507',e)) return;
if (true) {

	SetPanelVisibility('u523','','none',500);

}
});

$axure.eventManager.mouseout('u507', function(e) {
if (!IsTrueMouseOut('u507',e)) return;
if (true) {

	SetPanelVisibility('u523','hidden','none',500);

}
});
document.getElementById('u563_img').tabIndex = 0;

u563.style.cursor = 'pointer';
$axure.eventManager.click('u563', function(e) {

if (true) {

	SetPanelState('u557', 'pd1u557','none','',500,'none','',500);

}
});
gv_vAlignTable['u1046'] = 'top';gv_vAlignTable['u1045'] = 'center';gv_vAlignTable['u1043'] = 'center';gv_vAlignTable['u1041'] = 'center';gv_vAlignTable['u1049'] = 'top';document.getElementById('u1048_img').tabIndex = 0;

u1048.style.cursor = 'pointer';
$axure.eventManager.click('u1048', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/1/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
HookHover('u851', false);
gv_vAlignTable['u245'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u395'] = 'center';document.getElementById('u969_img').tabIndex = 0;

u969.style.cursor = 'pointer';
$axure.eventManager.click('u969', function(e) {

if (true) {

SetWidgetFormText('u880', '12/9/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
document.getElementById('u426_img').tabIndex = 0;
HookHover('u426', false);

u426.style.cursor = 'pointer';
$axure.eventManager.click('u426', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u962'] = 'top';HookHover('u356', false);
gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u537'] = 'top';
$axure.eventManager.keyup('u687', function(e) {

if (IsValueNumeric(GetWidgetText('u687'))) {

SetGlobalVariableValue('SpinnerValue', GetWidgetText('u687'));

}
});

$axure.eventManager.blur('u687', function(e) {

if (IsValueNotNumeric(GetWidgetText('u687'))) {

SetWidgetFormText('u687', '0');

SetGlobalVariableValue('SpinnerValue', '0');

}

if ((GetWidgetText('u687')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

}
else
if ((GetWidgetText('u687')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

}
});
gv_vAlignTable['u1369'] = 'top';gv_vAlignTable['u275'] = 'center';gv_vAlignTable['u1107'] = 'top';document.getElementById('u1106_img').tabIndex = 0;

u1106.style.cursor = 'pointer';
$axure.eventManager.click('u1106', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/30/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1105'] = 'top';document.getElementById('u1104_img').tabIndex = 0;

u1104.style.cursor = 'pointer';
$axure.eventManager.click('u1104', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/29/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
document.getElementById('u328_img').tabIndex = 0;
HookHover('u328', false);

u328.style.cursor = 'pointer';
$axure.eventManager.click('u328', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u1102_img').tabIndex = 0;

u1102.style.cursor = 'pointer';
$axure.eventManager.click('u1102', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/28/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1101'] = 'top';document.getElementById('u1100_img').tabIndex = 0;

u1100.style.cursor = 'pointer';
$axure.eventManager.click('u1100', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/27/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u1109'] = 'top';document.getElementById('u1108_img').tabIndex = 0;

u1108.style.cursor = 'pointer';
$axure.eventManager.click('u1108', function(e) {

if (true) {

SetWidgetFormText('u1035', '12/1/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
document.getElementById('u915_img').tabIndex = 0;

u915.style.cursor = 'pointer';
$axure.eventManager.click('u915', function(e) {

if (true) {

SetWidgetFormText('u880', '11/12/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u936'] = 'top';document.getElementById('u91_img').tabIndex = 0;

u91.style.cursor = 'pointer';
$axure.eventManager.click('u91', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Описание.html');

}
});
gv_vAlignTable['u750'] = 'top';document.getElementById('u919_img').tabIndex = 0;

u919.style.cursor = 'pointer';
$axure.eventManager.click('u919', function(e) {

if (true) {

SetWidgetFormText('u880', '11/14/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u58'] = 'center';document.getElementById('u432_img').tabIndex = 0;
HookHover('u432', false);

u432.style.cursor = 'pointer';
$axure.eventManager.click('u432', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
gv_vAlignTable['u589'] = 'top';gv_vAlignTable['u567'] = 'top';gv_vAlignTable['u504'] = 'center';HookHover('u240', false);
gv_vAlignTable['u114'] = 'center';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u613'] = 'top';document.getElementById('u1066_img').tabIndex = 0;

u1066.style.cursor = 'pointer';
$axure.eventManager.click('u1066', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/10/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u543'] = 'top';document.getElementById('u390_img').tabIndex = 0;
HookHover('u390', false);

u390.style.cursor = 'pointer';
$axure.eventManager.click('u390', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u1400'] = 'center';gv_vAlignTable['u804'] = 'top';document.getElementById('u831_img').tabIndex = 0;

u831.style.cursor = 'pointer';
$axure.eventManager.click('u831', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetGlobalVariableValue('SpinnerValue') - 1) + '');

SetWidgetFormText('u828', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u828')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

SetWidgetFormText('u828', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u379'] = 'center';gv_vAlignTable['u988'] = 'center';gv_vAlignTable['u724'] = 'top';gv_vAlignTable['u966'] = 'top';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u981'] = 'top';gv_vAlignTable['u317'] = 'center';document.getElementById('u406_img').tabIndex = 0;
HookHover('u406', false);

u406.style.cursor = 'pointer';
$axure.eventManager.click('u406', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u462_img').tabIndex = 0;
HookHover('u462', false);

u462.style.cursor = 'pointer';
$axure.eventManager.click('u462', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u183'] = 'center';gv_vAlignTable['u934'] = 'top';gv_vAlignTable['u144'] = 'center';gv_vAlignTable['u1095'] = 'top';gv_vAlignTable['u764'] = 'top';document.getElementById('u1090_img').tabIndex = 0;

u1090.style.cursor = 'pointer';
$axure.eventManager.click('u1090', function(e) {

if (true) {

SetWidgetFormText('u1035', '11/22/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u573'] = 'top';gv_vAlignTable['u1147'] = 'center';gv_vAlignTable['u809'] = 'top';HookHover('u294', false);
gv_vAlignTable['u1142'] = 'center';document.getElementById('u1141_img').tabIndex = 0;

u1141.style.cursor = 'pointer';
$axure.eventManager.click('u1141', function(e) {

if (true) {

	SetPanelState('u557', 'pd1u557','none','',500,'none','',500);

	BringToFront("u557");

}
});
gv_vAlignTable['u868'] = 'top';gv_vAlignTable['u1149'] = 'center';document.getElementById('u1148_img').tabIndex = 0;

u1148.style.cursor = 'pointer';
$axure.eventManager.click('u1148', function(e) {

if (true) {

	SetPanelState('u557', 'pd3u557','none','',500,'none','',500);

}
});
document.getElementById('u861_img').tabIndex = 0;

u861.style.cursor = 'pointer';
$axure.eventManager.click('u861', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetGlobalVariableValue('SpinnerValue') - 1) + '');

SetWidgetFormText('u858', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u858')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

SetWidgetFormText('u858', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u754'] = 'top';document.getElementById('u97_img').tabIndex = 0;

u97.style.cursor = 'pointer';
$axure.eventManager.click('u97', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Применение.html');

}
});
HookHover('u206', false);
gv_vAlignTable['u301'] = 'center';gv_vAlignTable['u979'] = 'top';gv_vAlignTable['u916'] = 'top';document.getElementById('u41_img').tabIndex = 0;

u41.style.cursor = 'pointer';
$axure.eventManager.click('u41', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Assistent_____.html');

}
});
gv_vAlignTable['u730'] = 'top';gv_vAlignTable['u972'] = 'top';gv_vAlignTable['u419'] = 'center';gv_vAlignTable['u174'] = 'center';document.getElementById('u547_img').tabIndex = 0;
HookHover('u547', false);

u547.style.cursor = 'pointer';
$axure.eventManager.click('u547', function(e) {

if (true) {

	self.location.href='#';

}
});
HookHover('u220', false);

$axure.eventManager.keyup('u697', function(e) {

if (IsValueNumeric(GetWidgetText('u697'))) {

SetGlobalVariableValue('SpinnerValue', GetWidgetText('u697'));

}
});

$axure.eventManager.blur('u697', function(e) {

if (IsValueNotNumeric(GetWidgetText('u697'))) {

SetWidgetFormText('u697', '0');

SetGlobalVariableValue('SpinnerValue', '0');

}

if ((GetWidgetText('u697')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

}
else
if ((GetWidgetText('u697')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

}
});
gv_vAlignTable['u835'] = 'center';document.getElementById('u955_img').tabIndex = 0;

u955.style.cursor = 'pointer';
$axure.eventManager.click('u955', function(e) {

if (true) {

SetWidgetFormText('u880', '12/2/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u1206'] = 'top';gv_vAlignTable['u1204'] = 'top';gv_vAlignTable['u1202'] = 'top';gv_vAlignTable['u985'] = 'center';gv_vAlignTable['u331'] = 'center';gv_vAlignTable['u1208'] = 'top';HookHover('u488', false);
document.getElementById('u61_img').tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Применение.html');

}
});
HookHover('u704', false);
HookHover('u466', false);
gv_vAlignTable['u44'] = 'center';gv_vAlignTable['u760'] = 'top';gv_vAlignTable['u481'] = 'center';gv_vAlignTable['u449'] = 'center';document.getElementById('u59_img').tabIndex = 0;

u59.style.cursor = 'pointer';
$axure.eventManager.click('u59', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Assistent_____.html');

}
});
document.getElementById('u442_img').tabIndex = 0;
HookHover('u442', false);

u442.style.cursor = 'pointer';
$axure.eventManager.click('u442', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u599'] = 'top';gv_vAlignTable['u577'] = 'top';gv_vAlignTable['u800'] = 'top';document.getElementById('u250_img').tabIndex = 0;
HookHover('u250', false);

u250.style.cursor = 'pointer';
$axure.eventManager.click('u250', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u958'] = 'top';gv_vAlignTable['u623'] = 'top';gv_vAlignTable['u865'] = 'center';gv_vAlignTable['u848'] = 'center';document.getElementById('u911_img').tabIndex = 0;

u911.style.cursor = 'pointer';
$axure.eventManager.click('u911', function(e) {

if (true) {

SetWidgetFormText('u880', '11/10/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u305'] = 'center';gv_vAlignTable['u361'] = 'center';gv_vAlignTable['u734'] = 'top';gv_vAlignTable['u976'] = 'top';document.getElementById('u47_img').tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Глоссарий.html');

}
});
document.getElementById('u113_img').tabIndex = 0;

u113.style.cursor = 'pointer';
$axure.eventManager.click('u113', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Assistent_____.html');

}
});
gv_vAlignTable['u479'] = 'center';document.getElementById('u33_img').tabIndex = 0;

u33.style.cursor = 'pointer';
$axure.eventManager.click('u33', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
HookHover('u416', false);
document.getElementById('u472_img').tabIndex = 0;
HookHover('u472', false);

u472.style.cursor = 'pointer';
$axure.eventManager.click('u472', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u281'] = 'center';gv_vAlignTable['u193'] = 'center';document.getElementById('u1289_img').tabIndex = 0;

u1289.style.cursor = 'pointer';
$axure.eventManager.click('u1289', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/4/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
HookHover('u224', false);
gv_vAlignTable['u1119'] = 'top';document.getElementById('u1118_img').tabIndex = 0;

u1118.style.cursor = 'pointer';
$axure.eventManager.click('u1118', function(e) {

if (true) {

SetWidgetFormText('u1035', '12/6/2009');

	SetPanelVisibility('u1039','hidden','none',500);

}
});
gv_vAlignTable['u653'] = 'top';gv_vAlignTable['u1246'] = 'top';gv_vAlignTable['u1244'] = 'top';gv_vAlignTable['u1242'] = 'top';HookHover('u878', false);
document.getElementById('u941_img').tabIndex = 0;

u941.style.cursor = 'pointer';
$axure.eventManager.click('u941', function(e) {

if (true) {

SetWidgetFormText('u880', '11/25/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u1248'] = 'top';document.getElementById('u322_img').tabIndex = 0;
HookHover('u322', false);

u322.style.cursor = 'pointer';
$axure.eventManager.click('u322', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
document.getElementById('u318_img').tabIndex = 0;
HookHover('u318', false);

u318.style.cursor = 'pointer';
$axure.eventManager.click('u318', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u485'] = 'center';gv_vAlignTable['u805'] = 'top';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u665'] = 'top';HookHover('u300', false);
HookHover('u230', false);
gv_vAlignTable['u603'] = 'top';HookHover('u348', false);
gv_vAlignTable['u995'] = 'center';gv_vAlignTable['u411'] = 'center';document.getElementById('u1309_img').tabIndex = 0;

u1309.style.cursor = 'pointer';
$axure.eventManager.click('u1309', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/14/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1308'] = 'top';gv_vAlignTable['u498'] = 'center';gv_vAlignTable['u806'] = 'top';gv_vAlignTable['u714'] = 'center';HookHover('u476', false);
document.getElementById('u45_img').tabIndex = 0;

u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u770'] = 'top';gv_vAlignTable['u197'] = 'center';gv_vAlignTable['u529'] = 'center';gv_vAlignTable['u459'] = 'center';gv_vAlignTable['u522'] = 'center';gv_vAlignTable['u810'] = 'top';document.getElementById('u260_img').tabIndex = 0;
HookHover('u260', false);

u260.style.cursor = 'pointer';
$axure.eventManager.click('u260', function(e) {

if (true) {

	self.location.href='#';

}
});
HookHover('u308', false);
gv_vAlignTable['u633'] = 'top';gv_vAlignTable['u875'] = 'top';gv_vAlignTable['u1180'] = 'top';gv_vAlignTable['u928'] = 'top';document.getElementById('u324_img').tabIndex = 0;
HookHover('u324', false);

u324.style.cursor = 'pointer';
$axure.eventManager.click('u324', function(e) {

if (true) {

	self.location.href='#';

}
});
HookHover('u378', false);
document.getElementById('u783_img').tabIndex = 0;

u783.style.cursor = 'pointer';
$axure.eventManager.click('u783', function(e) {

if (true) {

SetWidgetFormText('u708', '12/2/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
gv_vAlignTable['u441'] = 'center';gv_vAlignTable['u371'] = 'center';gv_vAlignTable['u744'] = 'top';gv_vAlignTable['u591'] = 'top';document.getElementById('u123_img').tabIndex = 0;

u123.style.cursor = 'pointer';
$axure.eventManager.click('u123', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Главная.html');

}
});
gv_vAlignTable['u552'] = 'top';document.getElementById('u1272_img').tabIndex = 0;

u1272.style.cursor = 'pointer';
$axure.eventManager.click('u1272', function(e) {

if (true) {

	SetPanelVisibility('u1274','toggle','none',500);

}
});
gv_vAlignTable['u1271'] = 'top';gv_vAlignTable['u827'] = 'center';HookHover('u234', false);
document.getElementById('u903_img').tabIndex = 0;

u903.style.cursor = 'pointer';
$axure.eventManager.click('u903', function(e) {

if (true) {

SetWidgetFormText('u880', '11/6/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u607'] = 'top';gv_vAlignTable['u663'] = 'top';gv_vAlignTable['u990'] = 'center';document.getElementById('u384_img').tabIndex = 0;
HookHover('u384', false);

u384.style.cursor = 'pointer';
$axure.eventManager.click('u384', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u1347_img').tabIndex = 0;

u1347.style.cursor = 'pointer';
$axure.eventManager.click('u1347', function(e) {

if (true) {

SetWidgetFormText('u1270', '12/3/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1346'] = 'top';document.getElementById('u1345_img').tabIndex = 0;

u1345.style.cursor = 'pointer';
$axure.eventManager.click('u1345', function(e) {

if (true) {

SetWidgetFormText('u1270', '12/2/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1344'] = 'top';document.getElementById('u1343_img').tabIndex = 0;

u1343.style.cursor = 'pointer';
$axure.eventManager.click('u1343', function(e) {

if (true) {

SetWidgetFormText('u1270', '12/1/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1342'] = 'top';document.getElementById('u1341_img').tabIndex = 0;

u1341.style.cursor = 'pointer';
$axure.eventManager.click('u1341', function(e) {

if (true) {

SetWidgetFormText('u1270', '11/30/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1340'] = 'top';document.getElementById('u951_img').tabIndex = 0;

u951.style.cursor = 'pointer';
$axure.eventManager.click('u951', function(e) {

if (true) {

SetWidgetFormText('u880', '11/30/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
document.getElementById('u1349_img').tabIndex = 0;

u1349.style.cursor = 'pointer';
$axure.eventManager.click('u1349', function(e) {

if (true) {

SetWidgetFormText('u1270', '12/4/2009');

	SetPanelVisibility('u1274','hidden','none',500);

}
});
gv_vAlignTable['u1348'] = 'top';document.getElementById('u458_img').tabIndex = 0;
HookHover('u458', false);

u458.style.cursor = 'pointer';
$axure.eventManager.click('u458', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u774'] = 'top';gv_vAlignTable['u495'] = 'center';document.getElementById('u153_img').tabIndex = 0;

u153.style.cursor = 'pointer';
$axure.eventManager.click('u153', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
HookHover('u456', false);

$axure.eventManager.mouseover('u509', function(e) {
if (!IsTrueMouseOver('u509',e)) return;
if (true) {

	SetPanelVisibility('u511','','none',500);

}
});

$axure.eventManager.mouseout('u509', function(e) {
if (!IsTrueMouseOut('u509',e)) return;
if (true) {

	SetPanelVisibility('u511','hidden','none',500);

}
});
gv_vAlignTable['u908'] = 'top';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u502'] = 'center';document.getElementById('u264_img').tabIndex = 0;
HookHover('u264', false);

u264.style.cursor = 'pointer';
$axure.eventManager.click('u264', function(e) {

if (true) {

	self.location.href='#';

}
});
gv_vAlignTable['u637'] = 'top';gv_vAlignTable['u894'] = 'top';HookHover('u310', false);
document.getElementById('u787_img').tabIndex = 0;

u787.style.cursor = 'pointer';
$axure.eventManager.click('u787', function(e) {

if (true) {

SetWidgetFormText('u708', '12/4/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u925_img').tabIndex = 0;

u925.style.cursor = 'pointer';
$axure.eventManager.click('u925', function(e) {

if (true) {

SetWidgetFormText('u880', '11/17/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u375'] = 'center';document.getElementById('u428_img').tabIndex = 0;
HookHover('u428', false);

u428.style.cursor = 'pointer';
$axure.eventManager.click('u428', function(e) {

if (true) {

	self.location.href='#';

}
});
document.getElementById('u901_img').tabIndex = 0;

u901.style.cursor = 'pointer';
$axure.eventManager.click('u901', function(e) {

if (true) {

SetWidgetFormText('u880', '11/5/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
document.getElementById('u53_img').tabIndex = 0;

u53.style.cursor = 'pointer';
$axure.eventManager.click('u53', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('История.html');

}
});
gv_vAlignTable['u1228'] = 'top';gv_vAlignTable['u1140'] = 'center';gv_vAlignTable['u532'] = 'center';gv_vAlignTable['u689'] = 'center';gv_vAlignTable['u982'] = 'top';gv_vAlignTable['u667'] = 'top';gv_vAlignTable['u682'] = 'top';gv_vAlignTable['u820'] = 'center';HookHover('u214', false);
gv_vAlignTable['u643'] = 'top';gv_vAlignTable['u938'] = 'top';document.getElementById('u565_img').tabIndex = 0;

u565.style.cursor = 'pointer';
$axure.eventManager.click('u565', function(e) {

if (true) {

	SetPanelState('u557', 'pd2u557','none','',500,'none','',500);

}
});
document.getElementById('u793_img').tabIndex = 0;

u793.style.cursor = 'pointer';
$axure.eventManager.click('u793', function(e) {

if (true) {

SetWidgetFormText('u708', '12/7/2009');

	SetPanelVisibility('u712','hidden','none',500);

}
});
document.getElementById('u931_img').tabIndex = 0;

u931.style.cursor = 'pointer';
$axure.eventManager.click('u931', function(e) {

if (true) {

SetWidgetFormText('u880', '11/20/2009');

	SetPanelVisibility('u884','hidden','none',500);

}
});
gv_vAlignTable['u56'] = 'center';document.getElementById('u133_img').tabIndex = 0;

u133.style.cursor = 'pointer';
$axure.eventManager.click('u133', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Применение.html');

}
});
gv_vAlignTable['u506'] = 'center';gv_vAlignTable['u562'] = 'center';document.getElementById('u1037_img').tabIndex = 0;

u1037.style.cursor = 'pointer';
$axure.eventManager.click('u1037', function(e) {

if (true) {

	SetPanelVisibility('u1039','toggle','none',500);

}
});
gv_vAlignTable['u1036'] = 'top';gv_vAlignTable['u1034'] = 'center';document.getElementById('u1033_img').tabIndex = 0;

u1033.style.cursor = 'pointer';
$axure.eventManager.click('u1033', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetGlobalVariableValue('SpinnerValue') - 1) + '');

SetWidgetFormText('u1030', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u1030')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

SetWidgetFormText('u1030', GetGlobalVariableValue('SpinnerValue'));

}
});
gv_vAlignTable['u1032'] = 'center';document.getElementById('u1031_img').tabIndex = 0;

u1031.style.cursor = 'pointer';
$axure.eventManager.click('u1031', function(e) {

if (true) {

SetGlobalVariableValue('SpinnerValue', '' + (GetNum(GetGlobalVariableValue('SpinnerValue')) + 1) + '');

SetWidgetFormText('u1030', GetGlobalVariableValue('SpinnerValue'));

}

if ((GetWidgetText('u1030')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

SetWidgetFormText('u1030', GetGlobalVariableValue('SpinnerValue'));

}
});

$axure.eventManager.keyup('u1030', function(e) {

if (IsValueNumeric(GetWidgetText('u1030'))) {

SetGlobalVariableValue('SpinnerValue', GetWidgetText('u1030'));

}
});

$axure.eventManager.blur('u1030', function(e) {

if (IsValueNotNumeric(GetWidgetText('u1030'))) {

SetWidgetFormText('u1030', '0');

SetGlobalVariableValue('SpinnerValue', '0');

}

if ((GetWidgetText('u1030')) < Number('0')) {

SetGlobalVariableValue('SpinnerValue', '0');

}
else
if ((GetWidgetText('u1030')) > Number('99')) {

SetGlobalVariableValue('SpinnerValue', '99');

}
});
gv_vAlignTable['u84'] = 'center';