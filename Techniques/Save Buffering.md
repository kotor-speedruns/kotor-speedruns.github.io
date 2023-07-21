# Save Buffering

**Table of Contents**
- [Description](#description)
- [How To](#how-to)
- [Hard Buffers](#hard-buffers)
  - [Via Load Menu](#via-load-menu)
  - [Via Quick Load](#via-quick-load)
- [Soft Buffers](#soft-buffers)
  - [Sonic Buffers](#sonic-buffers)
- [Open Buffers](#open-buffers)
- [Uses](#uses)
- [Avoiding Buffering Pitfalls](#avoiding-buffering-pitfalls)
  - [Memory Leak](#memory-leak)
  - [Fade In Never Stops](#fade-in-never-stops)
  - [Missing a Save Buffer](#missing-a-save-buffer)
  - [Late Game Buffers](#late-game-buffers)
- [Related Glitches](#related-glitches)

## Description

Save Buffering is a method of cancelling triggers, including cutscenes, conversations and fights.  When Quick Saving, you will notice there's a short fade-in from black after the game finishes saving.  Triggers will not take effect during this fade-in.  By moving forward while Quick Saving, you can enter a trigger and delay it using the fade-in.  You can then interrupt the trigger to cancel its effects.

Save Buffering is one of the two signature KotOR glitches, along with the [Anywhere Menu Glitch](</Major Glitches/Anywhere Menu Glitch.md>).  It's the staple glitch of all No Major Glitches speedruns and still used widely in Unrestricted runs as well.

## How To

In order to Save Buffer, stand in front of a trigger and hold both mouse buttons down to run forward (using the keyboard to move will not work).  Before reaching the trigger, press the Quick Save hotkey (by default, F4).  As the screen fades in, Quick Save again.  Repeat this until the fade-in effect no longer occurs; this means you have activated the trigger.  Continue Quick Saving until you are ready, then finish the buffer using one of the methods listed below.  If done correctly, the trigger will be cancelled and you'll be able to continue normally.

There are three main types of Save Buffers that you can perform: Hard Buffers, Soft Buffers, and Open Buffers.

## Hard Buffers

A Hard Buffer is done by buffering into a trigger, then loading the final Quick Save before the cutscene begins.  There are two ways to do this:

### Via Load Menu

The recommended way to do a Hard Buffer is to use Quick Saves to enter a trigger, then open the Options menu using the icon in the top right corner.  You can then manually load the last Quick Save to cancel the trigger.  This method has the same effect and is more consistent, but requires extra menuing and can be slower without sufficient practice.

[![Watch the video](https://img.youtube.com/vi/SFSKr9NoWsQ/maxresdefault.jpg)](https://youtu.be/SFSKr9NoWsQ)

It can be tricky to open the menu while moving your character, so it's recommended to buffer into the trigger, stop moving, then open the menu, all while still buffering.

*Note: The Options menu button will only appear if the setting Hide Quick Menu Buttons is set to Off in the Feedback menu.  This setting should be off both for Hard Buffers and for [Map CS Skips](<Map Cutscene Skips.md>).*

### Via Quick Load

This method can be inconsistent; depending on the cutscene and how long your Quick Saves take, the window for successfully Quick Loading can be quite small or even non-existent.  This method requires practice and good timing (or good mashing).

[![Watch the video](https://img.youtube.com/vi/by_rHachIOs/maxresdefault.jpg)](https://youtu.be/by_rHachIOs)

## Soft Buffers

Soft Buffers are done by activating an instant-use item or power after the final Quick Save.  The most common method is to use a friendly force power such as Speed or Valor.  Pressing the Friendly Force Power button twice will cancel the Force Power being cast, but the buffer will still succeed.  This is slightly faster than watching the animation from successfully casting the Force Power, and also saves the Force Points from casting it.  

[![Watch the video](https://img.youtube.com/vi/wI2d0mIXuC0/maxresdefault.jpg)](https://youtu.be/wI2d0mIXuC0)

Soft Buffers are generally faster than Hard Buffers and are quite consistent; you can spam the Force power during the final Quick Save and the buffer will succeed.  However, not every trigger can be cancelled with a Soft Buffer.  In addition, for the entirety of Taris, you do not have access to a Force power with which to use a Soft Buffer.

*Side Note:* A Soft Buffer is really just a combination of a Save Buffer and a [Force Skip](<Force Skips.md>).

### Sonic Buffers

A variant on Soft Buffers, a Sonic Buffer uses the Sonic Emitter rather than a Force power to cancel the trigger.  

[![Watch the video](https://img.youtube.com/vi/7xT_25cr9Hc/maxresdefault.jpg)](https://youtu.be/7xT_25cr9Hc)

The main benefit of a Sonic Buffer is the ability to Save Buffer underwater, but it can also be used aboveground when you do not have enough Force points to use a Force power.  The big drawback of Sonic Buffers is that you have to watch the entire emitter animation, whereas the Force power animation can often be partially or completely cancelled. 

*Important:* When performing a Sonic Buffer, only use the Sonic Emitter once, rather than spamming it.  If you spam it you'll have to watch the animation twice.

## Open Buffers

An Open Buffer is a Save Buffer where you intentionally do not cancel the trigger.  This is useful in some conversations to be able to skip a normally unskippable line of text, and also breaks the AI of the Triple Sith fight on the Star Forge.

[![Watch the video](https://img.youtube.com/vi/-Tuea7zGLjA/maxresdefault.jpg)](https://youtu.be/-Tuea7zGLjA)

The most useful application of Open Buffers is to perform a [Buffered GP Warp](77xef#ch4Buffered_GP_Warps), which is the only [GP Warp](<GP Warp.md>) legal in No Major Glitches (NMG) speedruns.

## Uses

Save Buffers have so many uses that it would be near impossible to list them all; instead, here are some of the major skips and tricks that employ a Save Buffer:

1. Skips the Brejik fight on Taris.
2. Skips the training montage cutscene on Dantooine.
3. Skips fighting Juhani on Dantooine.
4. Skips having to deal with the Mother Firaxan on Manaan.
5. Used during Krayt Dragon Skip to enter and exit the cave safely.
6. Skips the Calo Nord and Darth Bandon fights.
7. Skips putting on the space suit on the Leviathan.
8. Skips the Saul Karath fight.
9. Skips innumerable smaller cutscenes and conversations.

## Avoiding Buffering Pitfalls

### Memory Leak

KotOR has a memory leak associated with Quick Save.  If you Quick Save too much, your game will eventually crash.  Hence certain speedrun routes actually have built-in game restarts at certain points, so that the game doesn't crash in a bad place.  For these categories, it is recommended to run the game with T(r)ask Manager open, so you can keep an eye on how much memory KotOR is up to, as well as end the process if you happen to miss a Save Buffer.

### Fade In Never Stops

If you begin a Save Buffer and move past the trigger, but the fade-in doesn't stop, you most likely [Save Teleported](<Save Teleporting.md>) over the trigger.  This skips the trigger with the important difference that *the trigger is still active*.  If you are going to pass by that area again, you will need to buffer the trigger again when you return.  If you won't revisit that area, you can continue without worrying.

### Missing a Save Buffer

If you miss a Save Buffer, you can Quick Load after the trigger executes to go back and skip the trigger.  This is sometimes necessary or helpful; other times it's better to just continue, even if you miss the Save Buffer.  In other cases, it may be faster to use the T(r)ask Manager to kill the program, then reload the game and load the Quick Save.

### Late Game Buffers

As you progress in the game, Quick Saves take longer and longer to complete.  While this has beneficial effects, such as [Save Teleporting](<Save Teleporting.md>), it also makes Save Buffers much more difficult to perform.  With a large enough save file, the window for canceling the trigger can be partly or entirely skipped by the Save screen.  For any Save Buffer that is essential, disabling V-Sync will increase the frame rate of the game and thus decrease the time it takes to Quick Save, making late-game buffers much easier to perform.

## Related Glitches

* [Save Teleporting](<Save Teleporting.md>)
* [Gather Party Warps](<GP Warp.md>)
