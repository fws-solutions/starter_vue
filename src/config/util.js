/**
 * @description Lodash's startcase function.
 */
import startcase from 'lodash.startcase';

export const _startcase = startcase;

/**
 * @description Helper function for querying dom.
 */
// eslint-disable-next-line
export const domQueryAll = function (selector, parent, callback) {
	parent.querySelectorAll(selector).forEach((el) => {
		callback(el);
	});
};

export const getDemoAsset = function (assetName) {
	return require(`@/assets/images/__demo/${assetName}`);
};

export const getImagesAsset = function (assetName) {
	return require(`@/assets/images/${assetName}`);
};

/**
 * @description Toggle slide animation.
 */
export const slideToggle = {
	config: {
		duration: 300,
		easing: 'ease-in'
	},

	slideUp: (target, configuration = {}) => {
		const config = { ...slideToggle.config, ...configuration };

		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = config.duration + 'ms';
		target.style.transitionTimingFunction = config.easing;
		target.style.boxSizing = 'border-box';
		target.style.height = target.offsetHeight + 'px';
		// eslint-disable-next-line no-unused-expressions
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.style.display = 'none';
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.style.removeProperty('transition-timing-function');
		}, config.duration);
	},

	slideDown: (target, configuration = {}) => {
		const config = { ...slideToggle.config, ...configuration };

		target.style.removeProperty('display');
		let display = window.getComputedStyle(target).display;

		if (display === 'none') {
			display = 'block';
		}

		target.style.display = display;
		const height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		// eslint-disable-next-line no-unused-expressions
		target.offsetHeight;
		target.style.boxSizing = 'border-box';
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = config.duration + 'ms';
		target.style.transitionTimingFunction = config.easing;
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.style.removeProperty('transition-timing-function');
		}, config.duration);
	},

	slideToggle: (target, configuration = {}) => {
		const config = { ...slideToggle.config, ...configuration };

		if (window.getComputedStyle(target).display === 'none') {
			return this.slideDown(target, config);
		} else {
			return this.slideUp(target, config);
		}
	}
};
