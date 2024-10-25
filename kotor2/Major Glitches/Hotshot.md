# Hotshot

*Discovered by HotShotWire*

**Table of Contents**
- [Description](#description)
- [Hotshot Details](#hotshot-details)
- [Standard Hotshots](#standard-hotshots)
  - [Neo Hotshots](#neo-hotshots)
  - [Quick Save Hotshots](#quick-save-hotshots)
  - [Load Menu Hotshots](#load-menu-hotshots)
- [Forward Hotshots](#forward-hotshots)
  - [Main Menu Hotshots](#main-menu-hotshots)
  - [Autosave Hotshots](#autosave-hotshots)
- [Uses](#uses)
- [Related Glitches](#related-glitches)

## Description

The Hotshot Glitch is an advanced application of the [Anywhere Menu Glitch](<Anywhere Menu Glitch>) that allows us to arbitrarily warp from one module (called the Start Module) to another module (called the Destination Module), with certain restrictions.

## Standard Hotshots

A Standard Hotshot is used to return to a module that is already in our save file.  This is usually done to avoid backtracking, but can also used to perform a [Coordinate Warp](<Coordinate Warps>).  For Standard Hotshots, the following effects apply:

- The Main Character (MC) spawns in their last known location for in the Destination Module.
- The MC is reverted back to the stats, EXP, alignment and equipment they had when they were last in that module.  This includes reverting the [Dev Character](<../Dev Tools/Dev Character>) back to the player-created MC.
- Party members will spawn in the same coordinates they were in before the warp, provided they are not out of bounds.  This leads to a technique called [Coordinate Warping](<Coordinate Warps>).
- Party member characteristics are *not* reverted in any way.
- We keep all inventory items, quest progress, module progressions, and global variable progress between warps.

There are three ways to perform a Standard Hotshot, and each has a specific save setup that is required.

### Neo Hotshots

**Description:**
Neo Hotshots, sometimes called HSS Hotshots, are always consistent and the fastest way to Hotshot in many circumstances.  The vast majority of [Standard Hotshots](#standard-hotshots) in current speedrun routes are done with either this method or [Quick Save Hotshots](#quick-save-hotshots).

**Save Setup:**

- The Destination module should already have a Hard Save made in that location.  While any save slot will work, the menuing is quicker when this save is closer to the top or bottom of the save list.

**Steps:**

1. When you are ready to Hotshot, activate [AMG](<Anywhere Menu Glitch>).
2. Open the Options Menu and ensure 'Load Game' and 'Cancel' are both highlighted.
3. Press 'Enter'.  This cancels the pop-up and opens the Load Game menu.
4. Press the Options hotkey again (you should hear the click of the menu opening).
5. Press the *up* arrow to select "Save Game" on the invisible Options Menu.
6. Press 'Enter', then Escape to both open the save game menu, and avoid loading the save.
7. On the now visible Save Game menu, use the arrow keys to select the Destination Module save.
8. Press 'Enter', then up arrow, then 'Enter' twice. This will overwrite the Destination Module save, and reveal the Load Game menu. 
9. On the Load Game menu, use the arrow keys to again navigate to the Destination save.
10. Press 'Enter', then up arrow, then 'Enter'.  This loads the Destination save and completes the Hotshot.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/qFycQEJnqmU" frameborder="0"></iframe>
</div>

**Additional Notes:**

- This version of Hotshot works by loading a Hard Save that has been overwritten.  Thus your Destination Module Hard Save will be replaced by one in the Start Module, which is a potential drawback of this method of Hotshot.
- If you still need a Hard Save in the Destination module, you may want to use a [Quick Save Hotshot](#quick-save-hotshots) instead.
- This is the only method of Hotshot using a Hard Save that is 100% consistent.  See [Load Menu Hotshots](#load-menu-hotshots) and [Main Menu Hotshots](#main-menu-hotshots) for the inconsistent methods.

### Quick Save Hotshots

**Description:** The Quick Save Hotshot is the most flexible method for Hotshots and is always consistent.  The vast majority of [Standard Hotshots](#standard-hotshots) done in current speedrun routes are either Quick Save Hotshots or [Neo Hotshots](#neo-hotshots).

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
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/NbENsvV0Iow" frameborder="0"></iframe>
</div>

**Additional Notes:**

- This version of Hotshot works by loading a Quick Save that has been overwritten.  Thus your Quick Save will end up in the Start Module, not the Destination Module.
- You can immediately Hotshot from the Destination Module back to the Start Module by replacing step 8 with a Quick Save, then a repeat of steps 5 through 7.  This can be used to set up [Coordinate Warps within a module](<Coordinate Warps#warping-in-place>).
- If you obtained [AMG](<Anywhere Menu Glitch>) by entering the Start Module, you can Quick Save in step 4 without closing the Options Menu first.
- Instead of steps 5,6, and 8, you can load the Quick Save using the mouse.  This is nearly always slower than using the keyboard as described.

### Load Menu Hotshots

This method, along with the original form of [Main Menu Hotshot](#main-menu-hotshots) is sometimes called a Hard Save Hotshot.  It is an enhancement of the [Main Menu Hotshot](#main-menu-hotshots) that avoids going to the Main Menu, and works by loading a Hard Save as a Quick Save.  This type of Hotshot is *not* consistent, and thus except for a specific application has been obsoleted by the consistent methods of Hotshot, [Neo Hotshots](#neo-hotshots) and [Quick Save Hotshots](#quick-save-hotshots).

**Save Setup:**

- A Hard Save in the Start Module 
- A Hard Save in the Destination Module

**Steps:**

1. In the Destination Module save, [AMG](<Anywhere Menu Glitch>) via a Quick Save. 
2. Open the Options Menu and ensure 'Load Game' and 'Cancel' are highlighted.
3. Press 'Enter'.  This cancels the pop-up and opens the Load Game menu.
4. Open the Options Menu behind the Load Game Menu via hotkey ('O' by default).
5. Use the mouse to select the Start Module save.
6. Press 'Enter'.  One of two things will happen:

*Success: The title of the save changes to "QUICKSAVE".*
- Cancel the pop-up and load the QUICKSAVE save.
- After the load, close any residual menus by hitting Escape several times.

*Failure: The title of the save remains unchanged.*
- Cancel the pop-up, then press Escape once.
- Use the mouse to select any save **except** the Destination Module save.
- Repeat steps 5 and 6 to try again.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/ks58Ff6mwVw" frameborder="0"></iframe>
</div>

One unique property of Load Menu Hotshots is that party members whose coordinates would place them out of bounds in the Destination Module are spawned at the location *where the Destination Module save was made*.  This is the niche that gives Load Menu Hotshots their use in speedruns.

**Additional Notes:**
- It is important for the [AMG](<Anywhere Menu Glitch>) to be done via Quick Save in the Destination Module.  We need to store the Destination Module save in a Quick Save for the Hotshot to work.
- Unlike [Main Menu Hotshots](#main-menu-hotshots), a Load Menu Hotshot cannot be used to [Forward Hotshot](#forward-hotshots).

## Forward Hotshots

***Aspyr/Steam Version Only***

A Forward Hotshot is used to warp to a module that does not exist in the current save file.  This can only be done on the updated Aspyr versions of KotOR II (through either Steam or GoG); trying to Forward Hotshot on a Legacy version of KotOR II
will crash the game.

The most important effect of a Forward Hotshot is that the MC is replaced by the [Dev Character](<../Dev Tools/Dev Character>).  Since the [Dev Character](<../Dev Tools/Dev Character>) is extremely powerful, all Unrestricted speedruns want to Forward Hotshot as soon possible.

The other effects of Forward Hotshots differ from those of [Standard Hotshots](#standard-hotshots):

- The Dev Character (now your MC) spawns in the default spawn location for the Destination Module.
- The save file from the Start Module is warped to the Destination Module.  This means:
  - Inventory items, quest progress, module progression, and global variable progress *is reverted* to the state they were in when the Start Module save was made.
  - Party member status, including level, feats, powers, equipment, and everything else, will also be as it was when the Start Module save was made.
- Party member spawn locations depend on the method used; see below.

There is one main method for performing a Forward Hotshot, as well as one niche method that is not currently used.

### Main Menu Hotshots

This was the original form of Hotshot, and along with [Load Menu Hotshots](#load-menu-hotshots) is sometimes called a Hard Save Hotshot.  This is the slowest and most complicated Hotshot method, but it is the only useful method of Forward Hotshot.

**Save Setup:**

- A Hard Save in the Start Module 
- A Hard Save in the Destination Module

**Steps:**

1. In the Destination Module save, [AMG](<Anywhere Menu Glitch>) via a Quick Save. 
2. Open the Options Menu
3. Click on "Exit Game".  This replaces the Alt-F4 Quit pop-up with the Exit to Main Menu pop-up.  These look the same, so the only feedback for this is the sound effect.
4. Use the mouse to highlight "OK" in the pop-up and "Save Game" in the menu simultaneously. 
5. Press Enter. This will open the Save Game menu behind the Main Menu.
6. Using the up and down arrow-keys, (↑ ↓) navigate to your Start Module save in the hidden Save Game menu.  If the save is in your first slot, press ↓ once; in the second slot, press ↓ twice, etc.
7. With the mouse, click "Load Game" in the Main Menu.  One of two things will happen:
   
*Success: The title of the save changes to "QUICKSAVE".*
- Use the mouse to load the QUICKSAVE save.
- After the load, close any residual menus by hitting Escape several times.

*Failure: The title of the save remains unchanged.*
- Use the mouse to click Cancel.
- Press ↑, then ↓.  This reselects the Start Module save in the hidden Save Menu.
- Repeat step 7 to try the Hotshot again.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/O82Ul6Vn89Q" frameborder="0"></iframe>
</div>

**Additional Notes:**

- Party members will follow the same spawn location rules as a [Standard Hotshot](#standard-hotshots).  Thus [Coordinate Warping](<Coordinate Warps>) is possible with [Forward Hotshots](#forward-hotshots) if the Main Menu Hotshot is used.
- Main Menu Hotshots can be used to perform a [Standard Hotshot](#standard-hotshots), but in these cases a [Load Menu Hotshot](#load-menu-hotshots) is preferred.  Main Menu Hotshots should only be used to [Forward Hotshot](#forward-hotshots).
- It is important for the [AMG](<Anywhere Menu Glitch>) to be done via Quick Save in the Destination Module.  We need to store the Destination Module save in a Quick Save for the Hotshot to work.
- Main Menu Hotshots share all their effects with [Load Menu Hotshots](#load-menu-hotshots), notably that out-of-bounds party members will spawn at the location of the Destination Module save.

### Autosave Hotshots

**Description:** Autosave Hotshots are a special method of Hotshot that loads an Autosave that has been saved over.  Since only 12 modules in KotOR II force an Autosave, this method is so situational that it has no current use in speedruns.

**Save Setup:**

- Have an Autosave at the Destination Module
- Have any save (or actually be) in the Start Module.  This should be near a module transition that Autosaves the game, but it does not have to be the same Autosave as in the Destination Module.

**Steps:**

1. Obtain an [AMG](<Anywhere Menu Glitch>) in the Start Module through either a Quick Save or a module transition.  Loading a Hard Save will not allow you to unpause.
2. Open the Options Menu and ensure 'Load Game' and 'Cancel' are highlighted.
3. Press 'Enter'.  This cancels the pop-up and opens the Load Game menu.
4. Unpause the game, then blindly trigger the module transition (either by walking or otherwise).
5. After the load, the Load Game Menu should still be there.  Use this to load the Autosave.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/GSJg-CKgjAU" frameborder="0"></iframe>
</div>

**Special Properties:**

- This method of Hotshot works by loading an Autosave that has been overwritten.
- Unlike all other Hotshot methods, party members will also spawn at the default spawn location.  Thus [Coordinate Warping](<Coordinate Warps>) is not possible with Autosave Hotshots.

## Uses

In addition to the standard use of Hotshots to cut out backtracking, Hotshots enable the following:

- [Coordinate Warps](<Coordinate Warps>) are used in many situations to bypass locked doors
- [Forward Hotshots](#forward-hotshots) are used to access the [Dev Character](<../Dev Tools/Dev Character>)
- A [Forward Hotshot](#forward-hotshots) can be used to access the Prologue Ebon Hawk, and a [Standard Hotshot](#standard-hotshots) can be used to bring the [Dev Droid](<../Dev Tools/Dev Droid>), 3C-FD, to other modules 

## Related Glitches

- [Anywhere Menu Glitch](<Anywhere Menu Glitch>)
- [Dev Character](<../Dev Tools/Dev Character>)
- [Dev Droid](<../Dev Tools/Dev Droid>)
- [Coordinate Warps](<Coordinate Warps>)
