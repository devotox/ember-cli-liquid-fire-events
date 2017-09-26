import RSVP from 'rsvp';

import { getOwner } from '@ember/application';

export default function(delegateTo, ...args) {

	const viewRoot = this.oldView || this.newView;
	const service = this.service || getOwner(viewRoot).lookup('service:liquid-fire-events');

	return new RSVP.Promise((resolve) => {
		service.trigger('transitionStarted');
		resolve();
	}).then(() => {
		return this.lookup(delegateTo).apply(this, args);
	}).then((infos) => {
		service.trigger('transitionFinished', this.newView);
		return infos;
	});
}
