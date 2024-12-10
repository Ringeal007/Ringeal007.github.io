// 定义函数 handleBottomEdgeGradient，用于在滚动时改变底部渐变元素的透明度和添加动画效果
const handleBottomEdgeGradient = () => {
	const bottomEdgeGradient = document.querySelector('.bottom-edge-gradient');
	const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;

	// 移除之前的动画类以避免重复触发动画
	bottomEdgeGradient.classList.remove('animate__animated', 'animate__fadeOut', 'animate__fadeIn');

	if (isAtBottom) {
		// 滚动到底部时，添加 fadeOut 动画类
		bottomEdgeGradient.classList.add('animate__animated', 'animate__fadeOut');
	} else {
		// 没有滚动到底部时，添加 fadeIn 动画类
		bottomEdgeGradient.classList.add('animate__animated', 'animate__fadeIn');
	}
};

// 为 window 对象添加滚动事件监听器，当滚动时调用 handleBottomEdgeGradient 函数
window.addEventListener('scroll', handleBottomEdgeGradient);
