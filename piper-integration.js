/* Qualified integration boundary. Add the account's supplied embed and verified
   open callback here when available. No guessed vendor APIs or fake chat UI.
   Both callbacks belong to this site's adapter, not the Qualified SDK.
   initialize() must resolve only after the real widget is ready, and reject on
   script failure. open({language, section, topic}) calls the verified vendor API.
   Do not clear visitor cookies or assume navigation resets a conversation. */
(function () {
  'use strict';
  if (window.ConnectedRacingPiper) return;
  let adapter = null;
  let ready = null;
  window.ConnectedRacingPiper = Object.freeze({
    configure(integration) {
      if (adapter) throw new Error('Piper integration already configured.');
      if (!integration || typeof integration.initialize !== 'function' || typeof integration.open !== 'function') {
        throw new TypeError('Provide the verified initialize and open callbacks.');
      }
      adapter = integration;
    },
    async open(context) {
      if (!adapter) return false;
      // Repeated buttons reuse the same initialization promise and script load.
      if (!ready) ready = Promise.resolve().then(() => adapter.initialize());
      await ready;
      await adapter.open(context);
      return true;
    }
  });
})();
