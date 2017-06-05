// Type definitions for Ember Fetch
// Project: https://github.com/stefanpenner/ember-fetch
// Definitions by: Toran Billups <https://github.com/toranb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = fetch;

declare namespace fetch {
  export default function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}
