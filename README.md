# ember-cli-liquid-fire-events

[![Greenkeeper badge](https://badges.greenkeeper.io/devotox/ember-cli-liquid-fire-events.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/devotox/ember-cli-liquid-fire-events.svg)](http://travis-ci.org/devotox/ember-cli-liquid-fire-events)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-cli-liquid-fire-events.svg)](https://www.npmjs.org/package/ember-cli-liquid-fire-events)
[![NPM Version](https://badge.fury.io/js/ember-cli-liquid-fire-events.svg)](http://badge.fury.io/js/ember-cli-liquid-fire-events)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-liquid-fire-events.svg)](http://emberobserver.com/addons/ember-cli-liquid-fire-events)

Provides a service `ember-cli-liquid-fire-events` that you can use to subscribe to the
following events from Liquid Fire: `transitionStart` and `transitionEnd`.

Example usage:

```js
export default Ember.Component.extend({
  liquidFireEvents: Ember.inject.service(),
  didInsertElement() {
	this.get('liquidFireEvents')
	  .on('transitionStart', () => {
		this.set('animating', true);
	}).on('transitionEnd'), (newView) => {
		this.set('animating', false);
	  });
  }
});
```

Note: these are global events, fired every time a Liquid Fire transition occurs
anywhere within the rendered DOM.

Additionally, this addon provides a component `delayed-render` which
wraps a block of markup and only renders it after a transition has finished.
This is useful eg. to avoid rendering while animating, a common cause of jank
especially in mobile browsers.

Example usage:

```htmlbars
{{my-navigation-bar}}
{{! my-complex-component will not be rendered until the animation is complete}}
{{#liquid-delayed-render}}
  {{my-complex-component}}
{{/liquid-delayed-render}}
```

## Usage

```
ember install ember-cli-liquid-fire-events
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
