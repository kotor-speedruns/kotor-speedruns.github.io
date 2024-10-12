

# Hotshot

*Discovered by HotShotWire*

**Table of Contents**
- [Description](#description)
- [Hotshot Details](#hotshot-details)
- [Neo Hotshots](#neo-hotshots)
- [Quick Save Hotshots](#quick-save-hotshots)
- [Autosave Hotshots](#autosave-hotshots)
- [Hard Save Hotshots](#hard-save-hotshots)
  - [Via Load Menu](#via-load-menu)
  - [Via Main Menu](#via-main-menu)
- [Transit Point Storage](#transit-point-storage)
- [Swoop Skips](#swoop-skips)
- [Uses](#uses)
- [Related Glitches](#related-glitches)

## Description

The Hotshot Glitch is an advanced application of the [Anywhere Menu Glitch](<Anywhere Menu Glitch>) that allows us to arbitrarily warp to a module that we have been to previously, with certain restrictions.

## Hotshot Details

Save files are made up of a bunch of smaller saves called modules. Usually, we can only load into the module that a save was made in.  A Hotshot essentially tricks the game into loading a different module than usual.  Due to the way Hotshots manipulate files, there are several restrictions and unusual effects that must be kept in mind.

**Restrictions:**

- You must have already visited the target module during your current save.
- The target module cannot have been deleted from the save file by certain milestones such as leaving Taris or arriving at the Star Forge.
- Depending on the method used, you will need a different combinations of Hard Saves and Quick Saves.

**Effects:**

- The Main Character (MC) spawns in their last location in the module.
- Party members will spawn in the same coordinates they were in before the warp, provided they are not out of bounds.  This leads to a technique called [Coordinate Warps](<Coordinate Warps>).
- The MC is reverted back to the stats, EXP, alignment and equipment they had when they were last in that module.  This can easily lose character progress, so be careful.  This does not apply to [Autosave Hotshots](#autosave-hotshots).
- Party member characteristics are *not* reverted in any way.
- We keep all inventory items, quest progress, module progressions, and global variable progress between warps.

There are three modern ways to perform a Hotshot, as well as two older ways that are nearly entirely obsoleted.  Each has a specific save setup that is required.  We will call the module you want to warp to the Destination Module, and the module you warp from the Start Module.

## Neo Hotshots

**Description:**
Neo Hotshots, sometimes called HSS Hotshots, are always consistent and the fastest way to Hotshot in many circumstances.  The vast majority of Hotshots in current speedrun routes are done with either this method or [Quick Save Hotshots](#quick-save-hotshots).

**Save Setup:**

- The Destination module should already have a Hard Save made in that location.  While any slot will work, the menuing is quickest when this save is in Slot 1.

**Steps:**

1. When you are ready to Hotshot, activate [AMG](<Anywhere Menu Glitch>).
2. Open the Options Menu and ensure 'Load Game' and 'Cancel' are both highlighted.
3. Press 'Enter'.  This cancels the pop-up and opens the Load Game menu.
4. Press the Options hotkey again (you should hear the click of the menu opening).
5. Press the down arrow to select "Save Game" on the invisible Options Menu.
6. Press 'Enter', then Escape to both open the save game menu, and avoid loading the save.
7. On the now visible Save Game menu, use the arrow keys to select the Destination save.
8. Press 'Enter', then up arrow, then 'Enter' twice. This will overwrite the Destination save, and reveal the Load Game menu. 
9. On the Load Game menu use the arrow keys to again navigate to the Destination save.
10. Press 'Enter', then up arrow, then 'Enter'.  This loads the Destination save and completes the Hotshot.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/Dy64HJV_PvM" frameborder="0"></iframe>
</div>

**Additional Notes:**

- This version of Hotshot works by loading a Hard Save that has been overwritten.  Thus your Destination Hard Save will be replaced by one in the Start Module, which is a potential drawback of this method of Hotshot.
- If you still need a Hard Save in the Destination module, you may want to use a [Quick Save Hotshot](#quick-save-hotshots) instead.
- This is the only method of Hotshot using a Hard Save that is 100% consistent.  See [Hard Save Hotshots](#hard-save-hotshots) for the inconsistent methods.

## Quick Save Hotshots

**Description:** The Quick Save Hotshot is the most flexible method for Hotshots and is always consistent.  The vast majority of Hotshots done in current speedrun routes are either Quick Save Hotshots or [Neo Hotshots](#neo-hotshots).

**Save Setup:**

- Must have any save in the Destination Module (a Quick Save is preferred but not required)

**Steps:**

0. If your Destination Module save is not a Quick Save, create one there by following these extra steps:

- Hard Save in the Start Module
- Load your Destination Module save 
- Quick Save, then load the Start Module save, being ready to...

1. Activate an [AMG](<Anywhere Menu Glitch>) in the Start Module *without* using a Quick Save.  This can be done by using a Hard Save, loading a Hard Save in the Start Module as described above, or entering the Start Module and activating [AMG](<Anywhere Menu Glitch>) on that load screen.
2. Open the Options Menu and ensure 'Load Game' and 'Cancel' are highlighted.
3. Press 'Enter'.  This cancels the pop-up and opens the Load Game menu with an Options Menu behind it.
4. Close the hidden Options Menu via hotkey ('O' by default), then Quick Save.
5. Re-open the Options Menu behind the Load Game Menu via hotkey.
6. Press Enter to select the Quick Save in Load Game Menu.
7. Select 'OK' on the pop-up to load the Quick Save.
8. After the load, close any residual menus by hitting Escape several times.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/qXWG5ZnPD1Q" frameborder="0"></iframe>
</div>

**Additional Notes:**

- This version of Hotshot works by loading a Quick Save that has been overwritten.  Thus your Quick Save will end up in the Start Module, not the Destination Module.
- You can immediately Hotshot from the Destination Module back to the Start Module by replacing step 8 with a Quick Save, then a repeat of steps 5 through 7.  This can be used to set up [Coordinate Warps within a module](<Coordinate Warps#warping-in-place>).
- If you obtained [AMG](<Anywhere Menu Glitch>) by entering the Start Module, you can Quick Save in step 4 without closing the Options Menu first.
- Instead of steps 5,6, and 8, you can load the Quick Save using the mouse.  This is nearly always slower than using the keyboard as described.

## Autosave Hotshots

**Description:** Autosave Hotshots are a special method that loads an Autosave that has been saved over.  It has some useful special properties but is extremely situational.

**Save Setup:**

- Have an Autosave at the Destination Module
- Have any save (or actually be) in the Start Module.  This should be near a module transition that Autosaves the game, but it does not have to be the same Autosave as in the Destination Module.

**Steps:**

1. Obtain an [AMG](<Anywhere Menu Glitch>) in the Start Module through either a Quick Save or a module transition.  Loading a Hard Save will not allow you to unpause.
2. Open the Options Menu and ensure 'Load Game' and 'Cancel' are highlighted.
3. Press 'Enter'.  This cancels the pop-up and opens the Load Game menu.
4. Unpause the game, then walk blindly into the module transition.
5. After the load, the Load Game Menu should still be there.  Use this to load the Autosave.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/XQrJdm3TRt8" frameborder="0"></iframe>
</div>

**Special Properties:**

- This method of Hotshot works by loading an Autosave that has been overwritten.
- The Autosave Hotshot is the only method of Hotshot that allows you to warp to a module that is not currently in your save file (either due to deletion or merely because it is unvisited).
- The Autosave Hotshot also does not revert your Main Character's stats, equipment, alignment, or experience.
- An Autosave Hotshot can be used to bring Trask off the Endar Spire to any other location.

**Spawn Location Notes:**

- You will spawn in the Destination Module Autosave, but with the file that walked through the Start Module Autosave.  This includes party, character build, inventory and quest progress.
- With one possible exception, you will spawn in the default spawn location for the module.  This is sometimes called a Default Spawn Warp.
- The exception is if you have previously used Return to Hideout/Ebon Hawk in the Destination Module, and use the [Transit Point Storage](#transit-point-storage) glitch described below.  Then you will spawn at the most recent transit point in that module, even if you have since created other transit points in other modules.

## Hard Save Hotshots

Hard Save Hotshots were the original form of Hotshots, and are somewhat misnamed, since they actually load a Hard Save as a Quick Save.  This type of Hotshot is *not* consistent, and thus has been almost entirely obsoleted by the consistent methods of hotshot, [Neo Hotshots](#neo-hotshots) and [Quick Save Hotshots](#quick-save-hotshots).  There are two ways to perform this type of Hotshot, but both share the same save setup.

**Save Setup:**

- A Hard Save in the Start Module which we'll call "Hotshot Current" (usually freshly made).  It is recommended but not required that this be in the first save slot.
- A Hard Save in the Destination Module we'll call "Teleport".

### Via Load Menu

This is an enhancement of the original method below that avoids going to the Main Menu.

**Steps:**

1. In the Destination Module save, [AMG](<Anywhere Menu Glitch>) via a Quick Save. 
2. Open the Options Menu and ensure 'Load Game' and 'Cancel' are highlighted.
3. Press 'Enter'.  This cancels the pop-up and opens the Load Game menu.
4. Open the Options Menu behind the Load Game Menu via hotkey ('O' by default).
5. Use the mouse to select the Hotshot Current save.
6. Press 'Enter'.  One of two things will happen:

*Success: The title of the save changes to "QUICKSAVE".*
- Cancel the pop-up and load the QUICKSAVE save.
- After the load, close any residual menus by hitting Escape several times.

*Failure: The title of the save remains "Hotshot Current".*
- Cancel the pop-up, then press Escape once.
- Use the mouse to select any save **except** the Hotshot Current save.
- Repeat steps 5 and 6 to try again.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/MopY7hFezDk" frameborder="0"></iframe>
</div>

### Via Main Menu

This was the original form of Hotshot, and is slower and more complicated than all other Hotshot methods.

**Steps:**

1. In the Destination Module save, [AMG](<Anywhere Menu Glitch>) via a Quick Save. 
2. Open the Options Menu
3. Click on "Exit Game".  This replaces the Alt-F4 Quit pop-up with the Exit to Main Menu pop-up.  These look the same, so the only feedback for this is the sound effect.
4. Use the mouse to highlight "OK" in the pop-up and "Save Game" in the menu simultaneously. 
5. Press Enter. This will open the Save Game menu behind the Main Menu.
6. Using the up and down arrow-keys, (↑ ↓) navigate to your Hotshot Current save in the hidden Save Game menu.  If the save is in your first slot, press ↓ once; in the second slot, press ↓ twice, etc.
7. With the mouse, click "Load Game" in the Main Menu.  One of two things will happen:
   
*Success: The title of the Hotshot Current save changes to "QUICKSAVE".*
- Use the mouse to load the QUICKSAVE save.
- After the load, close any residual menus by hitting Escape several times.

*Failure: The title of the save remains "Hotshot Current".*
- Use the mouse to click Cancel.
- Press ↑, then ↓.  This reselects the Hotshot Current save in the hidden Save Menu.
- Repeat step 7 to try the Hotshot again.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/yN3UwzhEYnk" frameborder="0"></iframe>
</div>

**Additional Notes:**

- Hard Save Hotshots have two unique uses over other Hotshot methods:

  1. Spawning OoB party members at the Teleport save location, rather than the MC's location.
  2. [Swoop Skips](#swoop-skips) can only be done with either a Hard Save Hotshot or an [Neo Hotshot](#neo-hotshots), as you cannot load a save in the swoop race modules (and they do not have Autosaves).

- Notice that Hard Save Hotshots are not entirely consistent.  It may take several tries for the Hotshot Current save to change to QUICKSAVE, though that is unusual.
- It is important for the [AMG](<Anywhere Menu Glitch>) to be done via Quick Save in the Destination Module.  We need to store the Teleport save in a Quick Save for the Hotshot to work.
- Hard Save Hotshots are used twice in [All Quests](<../Route Guides/All Quests Unrestricted>) to warp while spawning party members near the Teleport save location.  In any other situation, [Neo Hotshots](#neo-hotshots) or [Quick Save Hotshots](#quick-save-hotshots) should be used instead.

## Transit Point Storage

Transit Point Storage is a specialized application of [Autosave Hotshots](#autosave-hotshots), used when you want to return to a specific place in a module even after using fast transit elsewhere.

There are three restrictions:

- Only transit points stored in modules that Autosave upon entry can be warped to.
- Stored transit points can only be warped to from modules that Autosave upon entry.
- The Autosave must be in the module with your stored transit point.  This can be accomplished using a Hard Save in an adjacent module.

**Steps:**

1. When you first visit the module, set the transit point where you want to spawn.
2. When you want to warp to that stored transit point, make sure you are in a module that Autosaves. 
3. Quick Save your current game and load the save described above.
4. Go to the module you want to warp to so that the Autosave triggers, then Quick Load.
5. Return to the Ebon Hawk/Hideout (possibly using a Fast Lane) and activate [AMG](<Anywhere Menu Glitch>) on the load.
6. Open the map and click Transit Back.  This replaces the Quit pop-up with the Transit Back pop-up.
7. Switch to the Options Menu and ensure both "OK" and "Load Game" are highlighted using the mouse.
8. Press Enter.  This transits back to the module you Quick Saved in, triggering an Autosave, and opens the Load Game menu.
9. After loading in, use the Load Game menu to load the Autosave.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/oeJRPTpj1e8" frameborder="0"></iframe>
</div>

Notice that steps 5-9 are a modified [Autosave Hotshot](#autosave-hotshots).  It uses fast transit to trigger an Autosave while the Load Menu is open, rather than moving through a load zone.

This glitch can be used to store only one transit point per module, but you can store one for every module and travel there as long as the Autosave conditions are met.

## Swoop Skips

Swoop Skips are a method for exiting swoop races early in [All Quests](<../Route Guides/All Quests Unrestricted>) runs, thus saving the time of actually doing the races.  The fastest version of the skip uses a [Neo Hotshot](#neo-hotshots), but it can also use a modified [Hard Save Hotshot](#hard-save-hotshots).  The fastest version follows these steps:

1. Make a Hard Save while in either Swoop Registration (on Tatooine) or Ahto West (on Manaan) in any slot.
2. Activate an [AMG](<Anywhere Menu Glitch>) during the previous save (or using a Quick Save).
3. Speak to Motta or Sslamoth to start the swoop race.
4. Wait for the countdown to finish and the timer to start, then press Alt+F4 to regain control.
5. Perform a [Neo Hotshot](#neo-hotshots) as usual, using the save you made in Step 1

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/BoAc16IY7Bs" frameborder="0"></iframe>
</div>

Swoop Skips must use either [Neo Hotshots](#neo-hotshots) or [Hard Save Hotshots](#hard-save-hotshots), as attempting to load a save made in a swoop race module crashes the game.  Also note when skipping the Manaan swoop races, you will need to skip the cutscene after the race immediately after the Hotshot, whereas in Tatooine this cutscene does not start until you talk to Motta again.

Note that swoop skips do not work on the Taris swoop races due to the differences in how they are coded.

## Uses

One major use of Hotshots are [Coordinate Warps](<Coordinate Warps>).  [Coordinate Warps](<Coordinate Warps>) allow you to apply a party member's coordinates from one module to another, leading to several skips and more efficient movement.

In addition to [Coordinate Warps](<Coordinate Warps>), Hotshots are used many times in Unrestricted speedruns, usually to cut out backtracking.  However, there are some more major skips and glitches performed with Hotshots, including:

1. Acquire Plot Armor (Immortality) on the Endar Spire in [All Quests](<../Route Guides/All Quests Unrestricted>).
2. Used to skip the Leviathan in [All Star Maps](<../Route Guides/All Star Maps>) by avoiding flying the Ebon Hawk while in possession of four Star Maps.
3. Used to skip Ship Parts on Lehon in all Unrestricted speedruns.
4. Swoop Skips are used to skip all six races on Tatooine and Manaan in [All Quests](<../Route Guides/All Quests Unrestricted>).
5. Transit Point Storage is used once in [All Quests](<../Route Guides/All Quests Unrestricted>) to warp from Manaan to Tatooine.
6. [Autosave Hotshots](#autosave-hotshots) are used a few times to spawn at a module's default spawn in all Unrestricted routes.

## Related Glitches

- [Anywhere Menu Glitch](<Anywhere Menu Glitch>)
- [Coordinate Warps](<Coordinate Warps>)
