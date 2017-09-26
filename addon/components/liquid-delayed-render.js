import { inject } from '@ember/service';

import Component from '@ember/component';

import { next, later } from '@ember/runloop';

import layout from '../templates/components/liquid-delayed-render';

export default Component.extend({
	layout,

	delay: 500,

	animating: true,

	liquidFireEvents: inject(),

	didInsertElement() {
		let events = this.get('liquidFireEvents');

		next(() => {
			return events.get('renderedOnce')
				? null
				: events.set('renderedOnce', true) && this._finish();
		});

		events.one('transitionFinished', this._finish.bind(this));

		later(this._finish.bind(this), this.get('delay'));
	},

	_finish() {
		return this.get('isDestroyed')
			? null
			: this.set('animating', false);
	}
});
