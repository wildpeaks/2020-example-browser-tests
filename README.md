# example-tests-legacy

**Option 1: run entirely in the browser**.

It runs an arbitrary script in a page, and a human looks at the page to see if the result is what is expected.
It's not fully automated (so you can't use that in Github Actions), but at least it gives an easy red/green status.

You can use a library like [QUnit](https://qunitjs.com/) to structure the tests.

This kind of test isn't really used anymore (because they depend on a human opening the browser and reading the results),
but it was the only option for a very long time, and the advantage is this works in very old browsers (and BSContact).

The other options:
 - [Option 2: Node](https://www.github.com/wildpeaks/example-tests-node)
 - [Option 3: Node + Headless](https://www.github.com/wildpeaks/example-tests-node-headless)


-------------------------------------------------------------------------------

## Run the tests

Start a webserver to serve the files as http://localhost.

Then open http://localhost/test/index.html in your browser to see the result: green means pass, red means fail.

