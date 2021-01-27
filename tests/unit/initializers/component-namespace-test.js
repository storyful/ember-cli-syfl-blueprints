import Application from '@ember/application';

import { initialize } from 'dummy/initializers/component-namespace';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Initializer | component-namespace', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    // eslint-disable-next-line ember/no-classic-classes
    this.TestApplication = Application.extend();
    this.TestApplication.initializer({
      name: 'initializer under test',
      initialize,
    });

    this.application = this.TestApplication.create({ autoboot: false });
  });

  hooks.afterEach(function () {
    run(this.application, 'destroy');
  });

  // Replace this with your real tests.
  test('it works', async function (assert) {
    await run(this.application, 'boot');

    assert.ok(true);
  });
});
