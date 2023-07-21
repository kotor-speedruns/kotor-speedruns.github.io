# Save Teleporting

**Table of Contents**
- [Description](#description)
- [How To](#how-to)
- [Skipping Triggers](#skipping-triggers)
- [Uses](#uses)
- [Optimizing Teleports](#optimizing-teleports)
  - [How Many Teleports](#how-many-teleports)
  - [Lining Up Teleports](#lining-up-teleports)
  - [Putting It Together](#putting-it-together)
- [Technical Aspects](#technical-aspects)
  - [Memory Leak](#memory-leak)
  - [Understanding File Size](#understanding-file-size) 
- [Related Glitches](#related-glitches)

## Description

Save Teleporting is a method of movement that employs a Quick Save, and allows you to teleport a variable amount of distance forward.  The distance teleported depends on how long it takes your game to save, which is affected by computer performance and the size of your save file.

## How To

To Save Teleport, simply hold both mouse buttons down to run forward (the keyboard will not work for this), then press the Quick Save button.

[![Watch the video](https://img.youtube.com/vi/OKibv5D4l4k/maxresdefault.jpg)](https://youtu.be/OKibv5D4l4k)

While single Save Teleports can be useful, chaining Save Teleports is most effective when using them for movement.

## Skipping Triggers

In addition to movement, Save Teleports can be used to skip over triggers completely.  By Save Teleporting at the correct time, the MC will never intersect the trigger at all.  

[![Watch the video](https://img.youtube.com/vi/VzvMcFP9AS8/maxresdefault.jpg)](https://youtu.be/VzvMcFP9AS8)

Unlike a [Save Buffer](<Save Buffering>), the trigger remains active, so if you are going to pass back over that area, you will need to Save Teleport past the trigger again.  

## Uses

The main use of Save Teleports is movement; Save Teleporting is eventually the fastest form of movement for all glitched speedruns except Any% Unrestricted.

Several triggers that can be skipped with [Save Buffer](<Save Buffering>) can also be skipped with Save Teleports and vice versa.  These skips are typically done with Save Teleports:
1. Entering the Eastern Dune Sea without a map
2. Skip visiting the Wookiee Village on Kashyyyk
3. Skip kinrath spawn triggers in the Shadowlands (which cannot be buffered)

## Optimizing Teleports

While Save Teleports are easy to learn and use, getting the most out of them requires careful practice.  For every movement you make with Save Teleports, keep two things in mind.  

### How Many Teleports
Within a particular route, Save Teleports are quite consistent in terms of distance covered at specific points (see Understanding File Size below).  Thus, knowing exactly how many Save Teleports are required to cover a specific distance can help you use them more efficiently by chaining the correct number of Teleports together.

### Lining Up Teleports
One of the easiest ways to lose time when Save Teleporting is either getting caught on a wall or NPC, or bouncing off of one.  You cannot turn during a Save Teleport, so it is useful to take a half-second or so to line up a Save Teleport when it is necessary to change directions, even for slight direction changes.

### Putting It Together
Combining these two ideas within a specific route can lead to very specific movement routes with Save Teleports, such as:
* Three Save TPs
* Turn left
* One Save TP
* Turn right
* Three Save TPs
* Talk to the guard

[![Watch the video](https://img.youtube.com/vi/F3aFcTBDQrM/maxresdefault.jpg)](https://youtu.be/F3aFcTBDQrM)

This takes the thinking and guesswork out of Save Teleport movement, allowing you to focus on the execution and streamlining your movement as much as possible.

## Technical Aspects

### Memory Leak

KotOR has a memory leak associated with Quick Save.  Thus if you Save Teleport too much, your game will eventually crash, usually around 1500 MB of memory used.  Hence all routes that use Save Teleporting actually have built-in game restarts at certain points, so that the game doesn't crash in a bad place. For these categories, it is recommended to run the game with T(r)ask Manager open, so you can keep an eye on how much memory KotOR is using.

### Understanding File Size

Save Teleports are more powerful the larger your save file is, which usually boils down to how many modules you have visited.  Thus, there is a point during all glitched runs (except Any% Unrestricted) where Save Teleports become faster than any other form of movement.

However, the game also deletes data at several points:
* Upon first reaching Dantooine, Taris is deleted.
* Upon being captured by the Leviathan, Dantooine is deleted.
* Upon flying to Lehon, most of the midgame is deleted.
* When boarding the Ebon Hawk after the Bastila fight on Lehon, Lehon is deleted.
In No Major Glitches speedruns, the third one of these can be skipped; in Unrestricted runs, the last three can be skipped.

As a general rule of thumb, Save Teleports are sometimes useful at the end of the Taris segment, and then not useful on Dantooine and the first planet after Dantooine.  From then on, Save Teleports are useful until leaving Lehon (for NMG) or the rest of the run (for non-Any% Unrestricted).

## Related Glitches

* [Save Buffer](<Save Buffering>)
