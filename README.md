[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-liquid-fire-events.svg)](http://emberobserver.com/addons/ember-cli-liquid-fire-events)
[![Build Status](https://travis-ci.org/devotox/ember-cli-liquid-fire-events.svg)](http://travis-ci.org/devotox/ember-cli-liquid-fire-events)
[![Coverage Status](https://codecov.io/gh/devotox/ember-cli-liquid-fire-events/branch/master/graph/badge.svg)](https://codecov.io/gh/devotox/ember-cli-liquid-fire-events)
[![NPM Version](https://badge.fury.io/js/ember-cli-liquid-fire-events.svg)](http://badge.fury.io/js/ember-cli-liquid-fire-events)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-cli-liquid-fire-events.svg)](https://www.npmjs.org/package/ember-cli-liquid-fire-events)
[![Dependency Status](https://david-dm.org/poetic/ember-cli-liquid-fire-events.svg)](https://david-dm.org/poetic/ember-cli-liquid-fire-events)
[![DevDependency Status](https://david-dm.org/poetic/ember-cli-liquid-fire-events/dev-status.svg)](https://david-dm.org/poetic/ember-cli-liquid-fire-events#info=devDependencies)
[![Greenkeeper](https://badges.greenkeeper.io/devotox/ember-cli-liquid-fire-events.svg)](https://greenkeeper.io/)

ember-cli-liquid-fire-events
==============================================================================

Provides a service `liquid-fire-events` that you can use to subscribe to the
following events from Liquid Fire: `transitionStart` and `transitionEnd`.

[DEMO](http://devotox.github.io/ember-cli-liquid-fire-events)

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-liquid-fire-events
```


Usage
------------------------------------------------------------------------------

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

Additionally, this addon provides a component `liquid-delayed-render` which
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


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-liquid-fire-events`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
