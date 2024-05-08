## My game is checking different locations than I actually got. What do I do?

In every documented case, this has been due to version mismatch. In short, your `.apworld` file and your `.ccmod` file
do not know how to talk to each other, meaning they disagree on which locations mean what. Unless you know exactly what
you're doing, you must *ONLY* download the `.apworld` and `.ccmod` file from the *SAME* releases page.

Once you've generated your seed with a specific version of the APWorld, however, you are locked in. Downloading
different versions of files will not help you. Instead, the most practical solution is to figure out what version your
APWorld is and download its corresponding mod file. Once this is done, if you're not too far along, restart your
playthrough. Otherwise, you may [seek
support](https://github.com/CodeTriangle/CCMultiworldRandomizer/wiki/Setup#how-to-get-support) and we will release your
locations manually.

## Is glitched logic supported?

No, and it probably will never be.
The reason is that even the simplest of glitches blow this game wide open. Barrier skips, which are easy in concept if
not execution, destroy what little progression gating there is, which would make almost every overworld check an
instant sphere 1. Flare jumps, another popular glitch, allow you to get almost anywhere in a dungeon as long as you have
heat.

Glitched logic in CrossCode, as far as anyone has been able to think to implement it, basically just means no logic.
