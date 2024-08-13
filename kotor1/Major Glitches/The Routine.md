

# The Routine

*Discovered by HotShotWire*

**Table of Contents:**
- [Description](#description)
- [Setting up The Routine](#setting-up-the-routine)
  - [Retained Data](#retained-data)
  - [Routine Preparation](#routine-preparation)
- [How To](#how-to)
- [Duplicating Star Maps](#duplicating-star-maps)
  - [Use in Any%](#use-in-any)
- [Other Uses](#other-uses)
- [Related Glitches](#related-glitches)

## Description

The Routine is an amalgamation of menu glitches that has some complex, but very useful effects.  It allows us to Quick Save while in the main menu, which effectively deletes nearly all of our save data. 

## Setting up the Routine

### Retained Data

While the Routine is meant to delete our save data, we need to delete it in such a way that we retain the important parts of our save file.  After a Routine is successfully completed, all data from your save is deleted with the exception of:
* The Player Character (or Main Character)
* The active party members (so you can only save at most two)
* The current module
* Importantly, quest and variable progress is retained

The module is the key aspect here; every other module is deleted.  Thus when you reenter a module after the Routine, it acts as if you have never visited that module before.  Effectively, this "resets" the module to its default state.

### Routine Preparation

Thus, there are two key decisions to make before a Routine:
- *What module should I be in?*  This module should be one that you don't need to reset to its default state, and be close enough to easily reach the module that you do want to reset.  This can be done through fast transit or by just being adjacent to the module you're resetting.
- *Which party members should I save?*  The main considerations here are required party members to finish the game.  Conveniently, only two party members are required:
* The confrontation with Bastila on the Temple Summit requires either Jolee or Juhani (or both)
* The cutscene when flying to the Star Forge requires Bastila (for Dark Side ending) or Carth (for Light Side ending)

Once you've made these choices, make sure you have the proper in-game setup.  You need:
* Any Auto Save.  We have to load this save in the middle of the glitch.
* Any party members you want to retain access to should be in your current party.
* The current module does not need to be reset, and is near the one that you wish to reset.

## How To

Once you are in the correct module and have the correct party members in your party, use the following steps to perform the Routine:
- Activate an [Anywhere Menu Glitch](<Anywhere Menu Glitch>) (AMG) with a Quick Save
- Open the Options menu ('O' by default) 
- Click "Exit Game".  This replaces the Alt-F4 Quit pop-up with the Exit to Main Menu Quit pop-up.
- Have "Load Game" and "Ok" highlighted, and press the Enter key.  This opens a Load Game Menu behind the Main Menu
- Press the Down Arrow once to highlight the Auto Save in the hidden Load Game menu.
- Use the mouse to highlight "Load Game" and press the Enter key
- Click "OK" in the pop-up to load the Auto Save behind the Load Game menu (see notes below).
- After the load finishes, Quick Load.  This loads the Quick Save you made when you used [AMG](<Anywhere Menu Glitch>) (see notes below).
- Press Escape twice (or click "Cancel") to return to the Main Menu.  Note you have active gameplay in the background!
- Close the Options menu via hotkey.  You should hear the close menu sound; if not, press the Options menu hotkey again (see notes below).
- Quick Save.  If it doesn't work, your Options menu is still open, so press the Option menu hotkey and try again.
- After the Quick Save, press the Options menu hotkey to open the Options menu.  The menu icons should appear, floating in the Main Menu.
- Press Up once to highlight "Exit Game" in the background Options menu.
- Use the mouse to highlight "Options" and press Enter.
- Press Escape to return to the Main Menu. 
- Press "OK" on the pop-up.  This causes the background instance to return to the Main Menu.
- Load the Quick Save from the Load Game menu to complete the glitch.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/t6HBXnZdwno" frameborder="0"></iframe>
</div>

**Additional Notes:**

1. We have to load an Auto Save because our save data is emptied when the Main Menu is opened.  Other saves need data that has been deleted to successfully load.  Auto Saves, on the other hand, load by instructing the game to generate the module from scratch at a waypoint near an entrance.  Thus the only save that can be successfully loaded at this point in the Routine is an Auto Save.  Once the Auto Save loads, we can then Quick Load, because the data the Quick Save needs to load successfully has been reinitialized.

2. The step where you Quick Load can technically be skipped.  This will perform the Routine on the Auto Save instead of your Quick Save, so any game progress between those two saves will be lost.  However, if the Auto Save has a cutscene occur immediately after loading, this will cause the Routine to fail.  Generally speaking, this is too restrictive to be useful.

3. The reason pressing Options once sometimes fails is the game seems to remember the last menu you were in.  So if you were in a different menu (such as the Map), pressing Options the first time will switch to the options menu, and a second Options press will close that menu.  Pressing Escape to exit the menu does not work in this position.

4. For convenience, here is an abridged set of instructions:

QS/AMG, Options, Exit Game Pop-up, Load Game+OK/Enter, Down, Load Game/Enter, OK, QL, Escape x2, Close Menu, QS, Options, Up, Options + Enter, Escape, OK, Load QS

5. Legacy versions of Windows may need tweaks to the Routine.  The video linked here is a version of the Routine that is [compatible with Windows 7](https://www.youtube.com/watch?v=zdSSroyQqzc).

## Duplicating Star Maps

Currently the main use of the Routine in speedruns is to "duplicate" Star Maps.  In reality this is a bit of a misnomer, as rather than duplicating the Star Map item, the Routine lets us increment the Star Map variable that tracks our game progress multiple times with a single Star Map object.

The general steps to re-obtain a Star Map are:
1. Get the Star Map you want to duplicate normally.
2. Leave to a different module, either through fast transit (via Fast Lane) or normally.
3. Execute the Routine.
4. Return to the Star Map module and click on the Star Map object to re-obtain it.

The Dantooine Star Map can be obtained multiple times, but because it is the first Star Map it actually sets the Star Map variable to its initial value instead of incrementing it.  Thus, no Star Maps can be skipped in this way.  

The Routine is not used in [All Quests](<../Route Guides/All Quests Unrestricted>), since there are quests attached to every Star Map that must be completed anyway.  [All Star Maps](<../Route Guides/All Star Maps>) is required to get each individual Star Map by the category rules, and thus also does not use the Routine.

### Use in [Any%](<../Route Guides/Any%25 Unrestricted>)

The [Any%](<../Route Guides/Any%25 Unrestricted>) speedrun uses the Routine three times to obtain the Kashyyyk Star Map four times.  The Kashyyyk Map is chosen because there is a convenient Coordinate Warp from the Czerka Landing Pad that gets us very close to the Star Map in the Lower Shadowlands.  Recruiting Jolee on Kashyyyk also allows us to skip Juhani on Dantooine, saving time there.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/z-9vaqIEFVw" frameborder="0"></iframe>
</div>

The general steps for the Kashyyyk Star Map duplication:
1. Obtain the Star Map using a [Quick Save Coordinate Warp](Hotshot#coordinate-warping).
2. [Fast Lane](<Fast Lane>) to return to the Czerka Landing Pad.
3. Perform the Routine to delete all other data.
4. Transit back to the Lower Shadowlands.
5. [Quick Save Hotshot](Hotshot#quick-save-hotshots) back to the Landing Pad.
6. Repeat the above steps two more times.

This is all done with Bastila and Jolee in our party, so that we can finish the game successfully.  Carth and Canderous are deleted, while all other party members are completely skipped.

## Other Uses

These uses are currently not speedrun relevant.  It's also important to note that the Routine is not necessarily fully explored yet, so other benefits may exist.

* Deletes transit waypoints, resulting in the MC being warped to a module's default spawn when transiting back
* Can be used to delete party members, which could be situationally useful

## Related Glitches

* [Anywhere Menu Glitch](<Anywhere Menu Glitch>)
