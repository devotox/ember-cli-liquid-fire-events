import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('liquid-delayed-render', 'Integration | Component | liquid delayed render', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{liquid-delayed-render}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#liquid-delayed-render}}
      template block text
    {{/liquid-delayed-render}}
  `);

  assert.equal(this.$().text().trim(), '');
});
