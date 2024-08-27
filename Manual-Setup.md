This page has instructions to set up CrossCode randomization manually. **This method is not recommended and may
become obsolete if CCModManager starts to be bundled with CCLoader2**. For the automatic method, follow the guide at
[this link](Setup#how-to-join-a-multiworld-with-crosscode-seeds).

Install [CCLoader2](https://wiki.c2dl.info/CCLoader), then download the *most recent* [CCMultiworldRandomizer
release](https://github.com/CodeTriangle/CCMultiworldRandomizer/releases/latest) and place it into the `assets/mods`
directory. **Make sure you get the `.ccmod` file and not the source code zip for all mods downloaded.**

You will also need the following dependency mods:
* [CC-Open-World](https://github.com/buanjautista/cc-open-world/releases/latest) (version 0.3.2 or greater): this is to
  prevent softlocks when you inevitably sequence-break the game.
* [CCUILib](https://github.com/conorlawton/CCUILib/releases/latest) (version 1.2.4 or greater): provides additional user
  interface widgets, including text input boxes.
* [nax-module-cache](https://github.com/conorlawton/nax-module-cache/releases/latest): technically just a requirement
  for CCUILib.

Open CrossCode and start a new save file. Either:
* Use the Archipelago Start option. You will be prompted for details, then, upon a successful server connection, you
  will be brought to the New Game+ tab to pick perks.
* Use the New Game+ Start option. Select your perks and then, once you're in game, pause and click the "Archipelago
  Options" button and put in your connection details there. Once the pause menu screen says "AP: CONNECTED", you can
  start playing.

If you're unfamiliar with the terminology, here's a quick guide:
* "Hostname" is the computer where the host is running (for example `archipelago.gg`).
* "Port" is a number that specifies where on the server Archipelago is running. The server should tell you the port
  pretty plainly.
* "Slot" is your player name. This is not the name of your YAML, it is the `name` field inside of your YAML file.

I recommend playing with the Randomizer Start option (an enhanced version of the Skip Beginning option which also skips
Rookie Dungeon). Also consider using Get on My Level so that you'll have the ability to fight back against enemies in
areas the game does not expect you to be in. You will start in the Rookie Harbor Quest Hub.

You will know if the mod is working when you get to space for the first time and you don't recieve the Disc of Insight
and Green Leaf Shade as expected. Instead, you should see a prompt in the top-right notifying you of what was actually
found.

