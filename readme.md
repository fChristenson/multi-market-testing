# Multi market support

## What we will cover

- What is the problem with multiple markets?
- How do we solve it in the least painful way?

# Notes

One word, permutations.

The big problem with having a product the needs different behavior depending on who is using it is permutations.

Each one creates one more test case, one more logic path, one more way something can break.

If we can we should avoid writing code that is specific to some client and favor using a generic config system with
our best weapon in this battle, dependency injection.
