// 初始化 clipboard.js
var clipboard = new ClipboardJS('.c2cbd-btn');
// 创建一个 Map 来存储每个按钮的原始文本
var c2cbdBtnOriginalTexts = new Map();

clipboard.on('success', function (e) {
	// 获取按钮的原始文本，并存储到 Map 中
	if (!c2cbdBtnOriginalTexts.has(e.trigger)) {
		c2cbdBtnOriginalTexts.set(e.trigger, e.trigger.innerHTML);
	}

	// 根据操作类型（复制/剪切），选择相应的成功文本
	var c2cbdSuccessTexts;
	if (e.action === 'cut') {
		c2cbdSuccessTexts = e.trigger.getAttribute('data-cut-success-text') || '<span class="c2cbd-btn-emoji emoji">&#x2702;</span>剪切成功';
	} else { // 默认为复制操作
		c2cbdSuccessTexts = e.trigger.getAttribute('data-copy-success-text') || '<span class="c2cbd-btn-emoji emoji">&#x2705;</span>复制成功';
	}
	e.trigger.innerHTML = c2cbdSuccessTexts;

	setTimeout(function () {
		// 使用Map中存储的原始文本来恢复按钮文本
		e.trigger.innerHTML = c2cbdBtnOriginalTexts.get(e.trigger);
		// 清除选择
		e.clearSelection();
	}, 2000);
});

clipboard.on('error', function (e) {
	// 获取按钮的原始文本，并存储到 Map 中
	if (!c2cbdBtnOriginalTexts.has(e.trigger)) {
		c2cbdBtnOriginalTexts.set(e.trigger, e.trigger.innerHTML);
	}

	var c2cbdErrorTexts = e.trigger.getAttribute('data-error-text') || '<span class="c2cbd-btn-emoji emoji">&#x274C;</span>操作失败';
	e.trigger.innerHTML = c2cbdErrorTexts;

	setTimeout(function () {
		// 使用Map中存储的原始文本来恢复按钮文本
		e.trigger.innerHTML = c2cbdBtnOriginalTexts.get(e.trigger);
	}, 2000);
});