# Spawn Warps

**Table of Contents**
- [Description](#description)
- [Default Spawn Warps](#default-spawn-warps)
  - [Autosave Hotshots](#autosave-hotshots)
  - [The Routine](#the-routine)
- [Transit Point Storage](#transit-point-storage)
- [Uses](#uses)
- [Module Lists](#module-lists)
  - [Forced Autosaves](#forced-autosaves)
  - [Unusual Default Spawns](#unusual-default-spawns)
- [Related Glitches](#related-glitches)


## Description

Spawn Warps are a class of glitches that cause the party to warp to a specific spawn waypoint within a module.  This can be used to cut out movement or in rare cases skip past otherwise problematic obstacles.

## Default Spawn Warps

Every module has a waypoint inside of it that acts as a default spawn point.  Under certain circumstances, an entry made to the module in a non-standard way (i.e. not by entering from an adjacent module) will cause the entire party to spawn at this default spawn point.  A Default Spawn Warp, therefore, is any method of entering a module in a non-standard way. 

There are currently two methods for warping to the default spawn location of a module; we'll call the module we're warping to the Destination Module.

### Autosave Hotshots

**Description:** Autosave Hotshots are a special method of [Hotshot](<Hotshot>) that loads an Autosave that has been saved over.  It requires a specific save setup, and thus is extremely situational.

**Save Setup:**

- Have the Autosave at the Destination Module

**Steps:**

1. Obtain an [AMG](<Anywhere Menu Glitch>) through either a Quick Save or a module transition.  Loading a Hard Save will not allow you to unpause.
2. Be near some way of triggering a module transition that will force an Autosave.
3. Open the Options Menu and ensure 'Load Game' and 'Cancel' are highlighted.
4. Press 'Enter'.  This cancels the pop-up and opens the Load Game menu.
5. Unpause the game, then blindly trigger the module transition (either by walking or otherwise).
6. After the load, the Load Game Menu should still be there.  Use this to load the Autosave.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/XQrJdm3TRt8" frameborder="0"></iframe>
</div>

**Notes:**

- The Autosave Hotshot is unlike other [Hotshots](<Hotshot>) in almost every way.  The only similarity is in the mechanics of loading a save that has been overwritten.
- Due to the nature of Autosave, the Autosave Hotshot can only be used in modules that force an Autosave to occur.  See the list of [Forced Autosaves](#forced-autosaves) below.
- The Destination Module does not have to exist in your current save file.  This is also unlike other [Hotshots](<Hotshot>).
- Your entire party will spawn together at the default spawn location in the Destination Module, but with the file that walked through the Start Module Autosave.  This includes party, character build, inventory and quest progress.
- An Autosave Hotshot can be triggered by using fast travel to Transit Back to a module that forces an Autosave.  This can be used to perform [Transit Point Storage](#transit-point-storage).
- An Autosave Hotshot can be used to bring Trask off the Endar Spire to any other location.

### The Routine

**Description:** By using [the Routine](<The Routine>) to delete data from our save file, we can also delete the transit waypoint that we have set in the Destination Module.  Using fast travel to Transit Back after performing a Routine will then return the party to the default spawn location in the Destination Module.

**Steps:**
1. Reach the Destination Module whose default spawn location you want to reach.
2. Return to the Hideout/Ebon Hawk.  This can be done either naturally or with a [Fast Lane](<Fast Lane>).
3. Perform [the Routine](<The Routine>) to delete the Destination Module (and its transit waypoint data) from your save file.
4. After loading your Quick Save, Transit Back to reach the Destination Module's default spawn location.

*Video forthcoming*

**Notes:**

- Since [the Routine](<The Routine>) deletes most of your save file data, this method of Default Spawn Warp is best used very early in the run.
- Also note that using [the Routine](<The Routine>) will make Save Teleporting ineffective.

## Transit Point Storage

Transit Point Storage is a specialized application of [Autosave Hotshots](#autosave-hotshots) that allows you to return to a fast travel waypoint in a module, even after using fast transit elsewhere.

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

**Notes:**
- Notice that steps 5-9 are a modified [Autosave Hotshot](#autosave-hotshots) using fast transit to trigger an Autosave while the Load Menu is open, rather than moving through a load zone.
- If no transit point has ever been set in the Destination Module, Transit Point Storage will spawn you at the default spawn location for the module.

This glitch can be used to store only one transit point per module, but you can store one for every module and travel there as long as the Autosave conditions are met.  See [Forced Autosaves](#forced-autosaves) for a list of modules whose transit points can be warped to.

## Uses

[Default Spawn Warps](#default-spawn-warps) are used several times in Unrestricted speedruns:  

- [The Routine](#the-routine) method is used to warp to Upper City South's default spawn location (near Zelka's shop).
- [Autosave Hotshots](#autosave-hotshots) are used to warp to the following modules:
    - Upper City North (in all Unrestricted categories)
    - Lower City (in All Quests)
    - Dantooine Courtyard (in All Quests)
    - West Central (in All Star Maps)
    - Hrakert Rift (in All Star Maps)
    - Leviathan Command Deck (in All Quests)
    - Temple Exterior (in Any%)
 
[Transit Point Storage](#transit-point-storage) is used once in All Quests Unrestricted to return to the Dune Sea from Manaan.

## Module Lists

### Forced Autosaves

The following table contains all 28 modules that force an Autosave.  These are modules that are eligible for [Autosave Hotshots](#autosave-hotshots) or [Transit Point Storage](#transit-point-storage).

| **Planet** | **Module** | | **Planet** | **Module** |
|---|---|---|---|---|
| Endar Spire | Command Module | | Korriban | Sith Academy Entrance |
| Endar Spire | Starboard Section | | Korriban | Valley of the Dark Lords |
| Taris | Upper City South | | Tatooine | Anchorhead |
| Taris | Upper City North | | Tatooine | Dune Sea |
| Taris | Lower City | | Tatooine | Eastern Dune Sea |
| Taris | Undercity | | Manaan | West Central |
| Taris | Lower Sewers | | Manaan | Sith Base |
| Taris | Vulkar Base | | Manaan | Hrakert Station |
| Taris | Davik's Estate | | Manaan | Hrakert Rift |
| Dantooine | Courtyard | | Leviathan | Prison Block |
| Dantooine | Ruins | | Leviathan | Command Deck |
| Dantooine | Sandral Estate | | Unknown Planet | Temple Exterior |
| Kashyyyk | Great Walkway | | Unknown Planet | Temple Main Floor |
| Kashyyyk | Upper Shadowlands | | Star Forge | Deck 1 |

### Unusual Default Spawns

This is a list of all modules that have unusual default spawn locations.  While some modules' default spawns are at the usual module transition locations, these modules have more interesting default spawns that may make a [Default Spawn Warp](#default-spawn-warps) worthwhile.

*Table coming soon.*

## Related Glitches

- [Anywhere Menu Glitch](<Anywhere Menu Glitch>)
- [Hotshot](<Hotshot>)
- [The Routine](<The Routine>)
