*This guide is accurate as of version 0.6.0 (updated 27 August 2024)*

CrossCode is an "unsupported" Archipelago game, meaning it is not distributed with the main Archipelago installation.
Fortunately, it is easy to run unsupported games even with stock Archipelago.

## How to generate your own multiworld with CrossCode seeds

First, you need a local installation of Archipelago itself. It should be as simple as downloading a release from [this
page](https://github.com/ArchipelagoMW/Archipelago/releases/latest) and either unzipping it or running the installer,
depending on your operating system.

Next, download the APWorld file from the [releases page of the CrossCode Archipelago
project](https://github.com/CodeTriangle/CCMultiworldRandomizer/releases/latest) and put it into `lib/worlds` in your
Archipelago installation folder.

Then put your yamls in the `Players` directory (once again, in the root of your installation) and run the
`ArchipelagoGenerate` program. If you need a yaml to build off of, we have some in the discord. The result should be
in the `output` directory. The terminal window should tell you the filename.

This file can then be either self-hosted with the `ArchipelagoServer` program or cloud-hosted on https://archipelago.gg
(or any of the third-party Archipelago host sites) so long as the server's Archipelago version is sufficiently
up-to-date to support CrossCode.

## How to join a multiworld with CrossCode seeds

Install [CCLoader2](https://wiki.c2dl.info/CCLoader), then download the *most recent* release of
[CCModManager](https://github.com/CCDirectLink/CCModManager/releases/latest) and place it into the `assets/mods`
directory. **Make sure you get the `.ccmod` file and not the source code zip for all mods downloaded.**

Open CrossCode and do the following:
* Enter the Options menu.
* Press the "mods" hotkey (listed in the top bar of the menu).
* Search or scroll through the mod list until you find the mod labeled **Multiworld randomizer by CodeTriangle** with
  the Archipelago logo as its icon.
* Select the mod and install it using the button listed at the bottom of the screen.
* You will be prompted to restart the game. Do that.

Now, assuming you don't get any errors in the top-right corner, you can start a new save file. Either:
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

You will know if the mod is working when you get to space for the first time and you don't recieve the Disc of Insight
and Green Leaf Shade as expected. Instead, you should see a prompt in the top-right notifying you of what was actually
found.

### What New Game+ perks should I use?

When you arrive at the New Game+ perk selection screen, you may notice that the Randomizer Start option is
automatically selected and cannot be deselected. This is a feature of the randomizer, an enhanced version of the Skip
Beginning perk which starts Lea in Rookie Harbor after the tedious Rhombus Dungeon sequence).

All of the multipliers are very useful to decrease the grind. I don't recommend you carry anything over as that will
probably ruin the purpose of the randomization.
You may consider using Get on My Level so that you'll have the ability to fight back against enemies in areas the game
does not expect you to be in, although this does increase the difficulty by quite a bit in areas that are meant to be
easier.

Other modifiers are up to personal preference. Most of the rest of them increase the difficulty, which may or may not
be something that interests you.

If you are looking for some more quirky options, you can install the **New Game++** mod from CCModManager as well, which
provides [these features](https://github.com/CCDirectLink/CCNewGamePP/blob/master/readme.md#features), though
I do not guarantee compatibility or fun.

If you do find yourself regretting your NG+ perk choices, you can also install **New game+ Cheats** from CCModManager,
which will allow you to switch out perks on the fly.

## Poptracker Pack

Courtesy of Lurch9229, you can have a fancier interface for tracking your progress. This is optional but extremely
helpful, especially if you don't have a solid mental model of the world. [See here for
information](https://github.com/lurch9229/CrossCode-Poptracker-AP).

Other tracking solutions are available, but the poptracker pack is developed by a trusted member and moderator of the
community, and is therefore more likely to give accurate results.

## How to get support

First off, thank you for beta testing! I truly appreciate it.

Second off, please make sure you are using the most recent version of both the mod and the APWorld. I will provide only
limited support for outdated versions of either.

With that out of the way, you have several options:

### Ask on the CrossCode Beta Testing server

1. Join our [testing discord server](https://discord.gg/ZSWfgQdfGr).
2. Make sure you can see the #bug-report forum.
3. Create a new thread in that forum, following all the rules for posting. These include but are not limited to:
   * Software versions of all software involved.
   * What you did leading up to the issue.
   * The *expected* behavior.
   * The *actual* behavior (in enough detail that I could feasibly reproduce it).

I'm pretty active on Discord, so I should see your message within a few hours. For bugs that have a quick fix, I have
generally been able to address them within a week. For more sophisticated bugs or for bugs that I suspect are hidden in
code that will be rewritten later, I'll modify this page to include a workaround until such time as I can actually fix
it.

### Ask on the Archipelago server

The Archipelago discord server (which you can join [here](https://discord.gg/8Z65BR2)) is also actively monitored. Once
you are in the server, navigate to our thread in the #future-game-design forum (you can go directly there by clicking
[here](https://discord.com/channels/731205301247803413/1128180904926396437)). **Please** still post the information
outlined in the bulleted list above.

The beta testing server is the preferred option as we have more curated space for different activities. The ticketing
system, where different bug reports can have their own separate threads is one major benefit. However, if you are
already on the Archipelago server, this works perfectly well.

### Open a GitHub issue

If you have a GitHub account and you know how to do so, you can also open an issue on the [project's GitHub
page](https://github.com/CodeTriangle/CCMultiworldRandomizer/issues). I get emails for GitHub issues here, so you can
be sure I'll see it.

## A note on versions

Every `x.0.0` version and every `0.y.0` version defines a new connection interface between client and server. In other
words, You can use any mod with version `0.1.a` to talk to any server with an APWorld of version `0.1.b` server,
regardless of what `a` and `b` are, but a client with version `0.2.a` and a server with version `0.1.b` will not be
able to talk to each other. Similarly, `1.a.b` can talk to `1.c.d` but `2.a.b` cannot talk to `1.c.d`.
