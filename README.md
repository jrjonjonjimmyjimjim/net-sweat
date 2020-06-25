# net-sweat
Warns you when tinkering around in a Netsuite prod account.

## About
This browser extension is for developers who work on Netsuite and are constantly switching accounts.
When making changes, it can be easy to forget which environment you are working in, and you may accidentally
alter the production environment with changes you meant to put into sandbox. The objective of net-sweat is
to reduce the probability of this scenario happening. When in a production Netsuite account, a red border
is drawn around the page. An alert is also displayed every ten minutes.

## Motivation
I created this extension because I found that I was often making changes to production accounts when I
simply assumed I was in sandbox. I figured a browser extension would be a simple solution to the problem.
I also thought that this would be a great opportunity to learn how to create browser extensions. While the
extension is currently quite simple, I hope to expand upon it and learn more about extension development
in the process.
