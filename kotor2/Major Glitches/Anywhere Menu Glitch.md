# Anywhere Menu Glitch

*Discovered by lane*

**Table of Contents**
- [Description](#description)
- [How To](#how-to)
- [Applications of AMG](#applications-of-amg)
- [Control During Cutscenes](#control-during-cutscenes)
  - [Skipping Cutscenes](#skipping-cutscenes)
  - [Accessing Menus](#accessing-menus)
- [Credit Underflow](#credit-underflow)
- [Forced Fast Text](#forced-fast-text)
- [Classic Menu Glitch](#classic-menu-glitch)
- [Related Glitches](#related-glitches)

## Description

Anywhere Menu Glitch is a glitch that allows you to have limited control over your characters while in a menu screen or during a cutscene.  It is the cornerstone glitch of all Unrestricted speedruns, and along with [Save Buffering](<../Techniques/Save Buffering>) one of the two most widely used glitches in KotOR speedrunning.

## How To

The Anywhere Menu Glitch is performed by pressing Alt-F4 during a saving or loading screen.  If loading, when the screen ends, the game can be unpaused by simply pressing the pause button. If saving, the player must open and close a menu, and then unpause. This allows you to move or perform other actions with the quit dialog still active.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/RYga29EPp7k" frameborder="0"></iframe>
</div>

* *NOTE: While this video shows KotOR 1, the same princible applies*

## Applications of AMG

AMG has a variety of uses across all of the Unrestricted and NoDevTool routes.  The most powerful use of AMG is enabling other major glitches, including:

- [Hotshot](./Hotshot)
- [Fake Level Up](./Fake%20Level%20Up)
- [Revive your Party Warps](../Techniques/RYP%20Warp)


Even beyond these glitches, there are other applications of AMG that are speedrun relevant, listed below.

## Control During Cutscenes

The main use of AMG is to gain control during cutscenes.  To do so:

1. Activate an AMG as described above.
2. Trigger the cutscene.
3. Cancel the pop-up.  You now have control of your party.

Once you have cancelled the pop-up, you can no longer click through dialog lines or use number keys to select dialog options.  You can use Quick Saves to progress through dialogs and the mouse to select dialog options; however, it is better to progress the cutscene to the appropriate point first, and then cancel the pop-up to gain control.

Once control is gained, you can either skip the cutscene or access menus during the cutscene.

### Skipping Cutscenes

Cutscenes can be skipped via AMG by (quick) saving and loading akin to a [Save Buffer](</kotor2/Techniques/Save Buffering>)

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/EhIGGyM5vOg" frameborder="0"></iframe>
</div>

* *NOTE: While this video shows KotOR 1, the same princible applies*

It is important to note that this method is more flexible than a traditional [Save Buffer](</kotor2/Techniques/Save%20Buffering>) those methods skip the cutscene at the beginning of a cutscene, whereas with AMG you can progress the cutscene to hit key dialog lines that set flags or modify game variables, and then skip the cutscene.


### Accessing Menus

With the Quick Menu Buttons enabled to appear in the top right corner, one can use the mouse to click these buttons to access menus.  The mouse movement for this is blind, as the cursor does not reappear while the cutscene is playing; this also applies inside the menu, so keyboard usage is recommended for these instances.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/ht4QTL6oqk0" frameborder="0"></iframe>
</div>

* *NOTE: While this video shows KotOR 1, the same princible applies*

Primarily this method is used to save or load a game during a cutscene, usually to begin a [Hotshot](Hotshot).

## Credit Underflow

Credit Underflow is a unique application of AMG that buys an item when you don't have enough credits to afford it, giving you negative credits.  To perform a Credit Underflow:

1. Activate AMG (usually via Quick Save).
2. Bring up a shopping menu by talking to an NPC.
3. Try to buy an item that brings up a pop-up to ensure you want to buy it.  The pop-up will replace the AMG pop-up behind the shop menu.
4. Buy another item that will not cause a pop-up.
5. Close the shop menu and click 'OK' on the pop-up to purchase the first item.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/CqTE_hgUh38" frameborder="0"></iframe>
</div>

* *NOTE: While this video shows KotOR 1, the same princible applies*

Some notes:

- Buying an item has a confirmation pop-up when the cost of the item is more than 50 x (MC's level).
- You must have enough credits to afford the pop-up item initially.  Buying the second, non-pop-up item will bring your credits below the cost of the first item.
- With negative credits, you can buy any item *in a shop*, no matter the cost.  The price will be deducted from your credits, putting you further in the negative.
- With negative credits, you *cannot* pay bribes or fees directly to NPCs, including landing fees and costs for swoop races.  You also cannot afford Pazaak wagers.
- If you earn enough credits, you can move from negative credits back to positive credits, and your money will then function normally again.

## Forced Fast Text

Fast Text is a glitch in KotOR in which the sound files for conversations are not properly loaded, making all dialog in conversations advance instantly with the exception of user-chosen dialog options.  While Fast Text happens naturally as memory usage increases, it can also be forced with an application of AMG as follows:

1. Stand so that the NPC whose conversation you want Fast Text for is selected as the current target, but far enough away that the conversation will not be instant.
2. Activate AMG via a Quick Save, then open the Equipment Menu.
3. Cancel the pop-up and unpause the game in the background.
4. Press the default action hotkey to queue the conversation, then before the conversation starts, click "Close" to exit the menu.  Your character should be running towards the NPC, but the game should be paused.
5. Open the Map screen using the mouse.  This unpauses the game and will allow the conversation to occur, and Fast Text will be active.
6. Perform the conversation; when done, press the Map hotkey twice to close the menu.  This disables Fast Text, and you will need to unpause the game to continue.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/LJApjo8bt-U" frameborder="0"></iframe>
</div>

* *NOTE: While this video shows KotOR 1, the same princible applies*

## Classic Menu Glitch
The Classic Menu Glitch (sometimes called Container Menu Glitch) is an alternate way of triggering a menu glitch.  It is performed by standing next to a container and attempting to loot it.  Use any menu hotkey (such as Escape for Options) on the same frame that the item dialog pops up, and the item dialog should overlay itself on the menu screen.


<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/uKJWEMBcHRY" frameborder="0"></iframe>
</div>

* *NOTE: While this video shows KotOR 1, the same princible applies*

If you open the menu too early, you can close it and attempt to open the menu again before the item dialog pops up.  In this way you can "buffer" a Menu Glitch.  If you open the menu too late, the item dialog will pop up as normal.  Just close it and loot the container to retry the glitch.

This method of performing a Menu Glitch predated the Anywhere Menu Glitch, but it is less reliable, less flexible, and slower than the Anywhere Menu Glitch.  Thus this version of Menu Glitch is now obsolete, with the exception of non-PC runs, for which AMG does not function.

## Related Glitches

- [Hotshots](Hotshot)
- [Fake Level Up](./Fake%20Level%20Up)
- [Revive your Party Warps](../Techniques/RYP%20Warp)
