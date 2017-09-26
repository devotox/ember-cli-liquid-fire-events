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

		later(this._finish.bind(this), this.get('delay'));

		events.one('transitionEnd', this._finish.bind(this));

		next(() => !events.get('renderedOnce') && events.set('renderedOnce', this._finish()));
	},

	_finish() {
		next(() => !this.get('isDestroyed') && this.set('animating', false));
		return true;
	}
});
