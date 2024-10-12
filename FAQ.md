## How long does it take to complete CrossCode randomized?

CrossCode is a long game. Without quest randomization, there are about 250 locations, most of which require significant
effort to reach. Gaia's Garden itself has over 60 chests, most of which are only accessible after long platforming
puzzles spanning multiple screens. One area in CrossCode is the size of a shorter Archipelago game. Without quests, runs
can take 6-10 hours, and with quests that number is closer to 12-15.

## What's up with these weird-colored chests?

Because CrossCode is such a long game, it has proven to be very helpful for the player to differentiate at a glance
between chests that should be prioritized and chests that are not as relevant to logic. Therefore, chests are
color-coded and given symbols according to what kinds of items they contain. Green chests with the `!!` symbol are
progression items and should probably be opened if possible. Deep blue chests with the `+` symbol are useful items. They
are not relevant to logic, but they might help another player to finish their game easier. Light blue chests (the ones
that appear as if they were vanilla) contain filler items. Their contents are often less than helpful. Chests containing
traps appear as if they contained useful items.

## Is there a way to figure out which chest is which?

Yes! Enter analyze mode (left on the quick menu) and hover any unopened chest in the game. A dialog will appear
indicating the chest's name and what type of item it contains (filler, useful, or progression).

## I can't hint the shade that I need to continue! What do I do?

You probably have `progressive_area_unlocks` set, which replaces all instances of particular shades and passes with the
correct number of items named "Progressive (something) Unlock".

Depending on the value of that option, you need to search for different things:

| Item | `dungeons` | `overworld` | `split` | `combined` |
|---|---|---|---|---|
| Green Leaf Shade  | Green Leaf Shade | Progressive Overworld Area Unlock | Progressive Overworld Area Unlock | Progressive Area Unlock |
| Mine Pass         | Progressive Dungeon Unlock | Mine Pass         | Progressive Dungeon Unlock | Progressive Area Unlock |
| Blue Ice Shade    | Blue Ice Shade   | Progressive Overworld Area Unlock | Progressive Overworld Area Unlock | Progressive Area Unlock |
| Yellow Sand Shade | Progressive Dungeon Unlock | Yellow Sand Shade | Progressive Dungeon Unlock | Progressive Area Unlock |
| Red Flame Shade   | Red Flame Shade  | Progressive Overworld Area Unlock | Progressive Overworld Area Unlock | Progressive Area Unlock |
| Green Seed Shade  | Green Seed Shade | Progressive Overworld Area Unlock | Progressive Overworld Area Unlock | Progressive Area Unlock |
| Purple Bolt Shade | Progressive Dungeon Unlock | Purple Bolt Shade | Progressive Dungeon Unlock | Progressive Area Unlock |
| Azure Drop Shade  | Progressive Dungeon Unlock | Azure Drop Shade  | Progressive Dungeon Unlock | Progressive Area Unlock |
| Star Shade        | Star Shade       | Progressive Overworld Area Unlock | Progressive Overworld Area Unlock | Progressive Area Unlock |
| Meteor Shade      | Meteor Shade     | Progressive Overworld Area Unlock | Progressive Overworld Area Unlock | Progressive Area Unlock |
| Green Leaf Shade  | Green Leaf Shade | Progressive Overworld Area Unlock | Progressive Overworld Area Unlock | Progressive Area Unlock |

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
