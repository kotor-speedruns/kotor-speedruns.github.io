

# Anywhere Menu Glitch

*Discovered by lane*

**Table of Contents**
- [Description](#description)
- [How To](#how-to)
- [Applications of AMG](#applications-of-amg)
- [Control During Cutscenes](#control-during-cutscenes)
  - [Skipping Cutscenes](#skipping-cutscenes)
  - [Moving During Cutscenes](#moving-during-cutscenes)
  - [Accessing Menus](#accessing-menus)
- [Free Look AMGs](#free-look-amgs)
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

## Applications of AMG

AMG has a variety of uses across all of the Unrestricted routes.  The most powerful use of AMG is enabling other major glitches, including:

- [Hotshots](Hotshot)
- [Fast Lane](<Fast Lane>)
- [Fake Level Up](<Fake Level Up>)
- [The Routine](<The Routine>)
- [Gather Party Warps](<../Techniques/GP Warp>)

Even beyond these glitches, there are other applications of AMG that are speedrun relevant, listed below.

## Control During Cutscenes

The main use of AMG is to gain control during cutscenes.  To do so:

1. Activate an AMG as described above.
2. Trigger the cutscene.
3. Cancel the pop-up.  You now have control of your party.

Once you have cancelled the pop-up, you can no longer click through dialog lines or use number keys to select dialog options.  You can use Quick Saves to progress through dialogs and the mouse to select dialog options; however, it is better to progress the cutscene to the appropriate point first, and then cancel the pop-up to gain control.

Once control is gained, you can either skip the cutscene, move during the cutscene, or access menus during the cutscene.

### Skipping Cutscenes

Cutscenes can be skipped via AMG by (quick) saving and loading, using an instant-use Force Power or item, or using Fast Transit (where enabled).  The first of these is akin to a [Save Buffer](<../Techniques/Save Buffering>), the second is essentially a [Force Skip](<../Techniques/Force Skips>), and the third an elaborate [Map CS Skip](<../Techniques/Map CS Skips>).

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/EhIGGyM5vOg" frameborder="0"></iframe>
</div>

It is important to note that this method is more flexible than a traditional [Save Buffer](<../Techniques/Save Buffering>), [Force Skip](<../Techniques/Force Skips>), or [Map CS Skip](<../Techniques/Map CS Skips>); those methods skip the cutscene at the beginning of a cutscene, whereas with AMG you can progress the cutscene to hit key dialog lines that set flags or modify game variables, and then skip the cutscene.  Skipping cutscenes with AMG is also useful when saves are so long that [Save Buffers](<../Techniques/Save Buffering>) are impractical.

The [Force Skip](<../Techniques/Force Skips>) method will only work if the party member casting the Force Power is the "speaker" for the conversation, as determined by the game's code.  This is the same reason that [Force Skip](<../Techniques/Force Skips>) and [Soft Buffers](<../Techniques/Save Buffering#soft-buffers>) only work for certain cutscenes.

### Moving During Cutscenes

Your party members will have either free or limited movement during cutscenes, depending on whether they are considered the "speaker" for the conversation by the game's code.  If they are not the speaker, they may move normally.  If they are the speaker, they may only move if they have a melee weapon equipped and use the Flourish Weapon hotkey, which allows the party member to move for the duration of the weapon flourish.

Movement during cutscenes is made much easier by breaking the cutscene's camera instructions, which can be done by using the Change Leader hotkey to swap between multiple party members, or pressing Free Look twice (which can be done with no party members).

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/v61R8Wj0NoI" frameborder="0"></iframe>
</div>

Additional notes:

- Movement during cutscenes can be useful just for efficiency (progressing while a required cutscene plays) or to place a character in a specific spot for when the cutscene ends.
- All forms of movement can be done during a cutscene, including [Save Teleporting](<../Techniques/Save Teleporting>), though the Quick Save will advance any dialog line.
- Note that if you try to cast Force Powers as the speaker, you will skip the cutscene with an AMG-enabled [Force Skip](<../Techniques/Force Skips>).

### Accessing Menus

With the Quick Menu Buttons enabled to appear in the top right corner, one can use the mouse to click these buttons to access menus.  The mouse movement for this is blind, as the cursor does not reappear while the cutscene is playing; this also applies inside the menu, so keyboard usage is recommended for these instances.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/ht4QTL6oqk0" frameborder="0"></iframe>
</div>

While this can theoretically be used to skip a cutscene through Fast Transit as described above, primarily this method is used to save or load a game during a cutscene, usually to begin a [Hotshot](Hotshot).

## Free Look AMGs

Some cutscenes, mainly plot cutscenes that occur while traveling between planets, occur in special modules called STUNT modules.  These cutscenes have scripted camera movements that control the length of the cutscene.  A Free Look AMG can skip these cutscenes as follows:

1. Activate AMG on the load into the STUNT module.
2. Unpause the game; when the cutscene starts, cancel the AMG pop-up.
3. Press Free Look twice.  This breaks the camera script and skips to the end of the cutscene.
4. Additionally, spamming Quick Save while the cutscene ends will cause the cutscene to end sooner.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/IFPnbwP1wKo" frameborder="0"></iframe>
</div>

Cutscenes that are skipped this way include:

1. The vision cutscene(s) where the MC is tossing and turning in his/her sleep.
2. Malak ordering Saul to destroy Taris.
3. The Ebon Hawk being captured by the Leviathan, Carth's old mentor ([All Quests](<../Route Guides/All Quests Unrestricted>) only).
4. Malak torturing Bastila in the Lehon Temple ([Any%](<../Route Guides/Any%25 Unrestricted>) and [All Star Maps](<../Route Guides/All Star Maps>) only).
5. The cutscene when flying to the Star Forge.

The third cutscene above is completely avoided in [Any%](<../Route Guides/Any%25 Unrestricted>) and [All Star Maps](<../Route Guides/All Star Maps>), while the fourth cutscene above is skipped with a [Map CS Skip](<../Techniques/Map CS Skips>) in [All Quests](<../Route Guides/All Quests Unrestricted>); [Any%](<../Route Guides/Any%25 Unrestricted>) and [All Star Maps](<../Route Guides/All Star Maps>) need to progress that cutscene to allow the Dark Side version of Bastila to appear on Lehon.  All other STUNT cutscenes are skipped with [Map CS Skips](<../Techniques/Map CS Skips>).

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

Some notes:

- Buying an item has a confirmation pop-up when the cost of the item is more than 50 x (MC's level).  
- You must have enough credits to afford the pop-up item initially.  Buying the second, non-pop-up item will bring your credits below the cost of the first item.
- With negative credits, you can buy any item *in a shop*, no matter the cost.  The price will be deducted from your credits, putting you further in the negative.
- With negative credits, you *cannot* pay bribes or fees directly to NPCs, including landing fees and costs for swoop races.  You also cannot afford Pazaak wagers.
- If you earn enough credits, you can move from negative credits back to positive credits, and your money will then function normally again.

Credit Underflow is used at the start of [All Quests](<../Route Guides/All Quests Unrestricted>) to afford enough stims for the Duel Ring.

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

This is used in [All Quests](<../Route Guides/All Quests Unrestricted>) in conjunction with the Yuthura XP Exploit to gain ~20000 XP in approximately 30 seconds.

## Classic Menu Glitch

The Classic Menu Glitch (sometimes called Container Menu Glitch) is an alternate way of triggering a menu glitch.  It is performed by standing next to a container and attempting to loot it.  Use any menu hotkey (such as Escape for Options) on the same frame that the item dialog pops up, and the item dialog should overlay itself on the menu screen.


<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/uKJWEMBcHRY" frameborder="0"></iframe>
</div>

If you open the menu too early, you can close it and attempt to open the menu again before the item dialog pops up.  In this way you can "buffer" a Menu Glitch.  If you open the menu too late, the item dialog will pop up as normal.  Just close it and loot the container to retry the glitch.

This method of performing a Menu Glitch predated the Anywhere Menu Glitch, but it is less reliable, less flexible, and slower than the Anywhere Menu Glitch.  Thus this version of Menu Glitch is now obsolete, with the exception of non-PC runs, for which AMG does not function.

## Related Glitches

- [Hotshots](Hotshot)
- [Coordinate Warps](<Coordinate Warps>)
- [Fast Lane](<Fast Lane>)
- [Fake Level Up](<Fake Level Up>)
- [The Routine](<The Routine>)
- [Gather Party Warps](<../Techniques/GP Warp>)
- [Save Buffers](<../Techniques/Save Buffering>)
- [Force Skips](<../Techniques/Force Skips>)
