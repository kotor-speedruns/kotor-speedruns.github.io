# Coordinate Warps

**Table of Contents**
- [Description](#description)
- [How To](#how-to)
    - [Warping in Place](#warping-in-place)
- [Party Member Spawn Rules](#party-member-spawn-rules)
- [Warps Used in Speedruns](#warps-used-in-speedruns)
- [Other Coordinate Warps](#other-coordinate-warps)
- [Related Glitches](#related-glitches) 

## Description

Coordinate Warping is a [Hotshot](<Hotshot>) technique that warps your party members to any coordinates in the Destination Module that they can reach in the Start Module.  Since party member coordinates persist when doing a Hotshot, we can use this to help party members bypass locked doors and reach certain areas early.

## How To

While the details of each Coordinate Warp vary from situation to situation, they all follow these two general steps:

1. Place your party member(s) in the Start Module at the coordinates you want them to end up at in the Destination Module.  This can be done with one or two party members, and they do not have to be near each other.
2. Once they are positioned correctly, [Hotshot](<Hotshot>) via any method to the Destination Module, following the procedure for the [Hotshot](<Hotshot>) type that you're using.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/QFl1q-pR7Ik" frameborder="0"></iframe>
</div>

Note that Coordinate Warps do not work with [Autosave Hotshots](<Hotshot#autosave-hotshots>); party members will always spawn near the default spawn for the module when performing an [Autosave Hotshot](<Hotshot#autosave-hotshots>).

### Warping in Place

A Coordinate Warp can be done "within" a module by temporarily [Hotshotting](<Hotshot>) to another module that has the coordinates you want, then immediately Coordinate Warping back to the original module.  This is used in a few places, and if the save in the temporary module is done in the right position, the two [Hotshots](<Hotshot>) can be chained together, commonly called a Double [Hotshot](<Hotshot>).

*Video forthcoming*

The type of Double Hotshot you use depends on which module you want that Hard Save to end up in.  A Double [Neo Hotshot](<Hotshot#neo-hotshots>) or a Double [Quick Save Hotshot](<Hotshot#quick-save-hotshots>) will both leave the Hard Save as it was, whereas a Mixed Double Hotshot (a [Neo Hotshot](<Hotshot#neo-hotshots>) followed by a [Quick Save Hotshot](<Hotshot#quick-save-hotshots>)) will change the Hard Save to the module you're warping within.

## Party Member Spawn Rules

When you [Hotshot](<Hotshot>), the locations that party members spawn in the Destination Module follow this logic:

1. If the coordinates of the party member in the Start Module are in-bounds in the Destination Module, the party member will spawn there.
2. If the coordinates of the party member in the Start Module are out of bounds in the Destination Module:
  a. If the origin is in bounds in the Destination Module, the party member will spawn at the origin.  See the list below.
  b. If the origin is out of bounds in the Destination Module:
    I. If the Hotshot used is a [Neo Hotshot](<Hotshot#neo-hotshots>) or [Quick Save Hotshot](<Hotshot#quick-save-hotshots>), the party member will spawn near the MC's last location in the Destination Module.
    II. If the Hotshot used is a [Hard Save Hotshot](<Hotshot#hard-save-hotshots>), the party member will spawn near the location of the Teleport Hard Save you [Hotshot](<Hotshot>) to.
   
In addition, if a party member's coordinates are in-bounds in the Destination Module but on "non-walkable mesh", then the party member will move to nearby walkable mesh wherever possible.  This will cause the party member's coordinates to change slightly, such as what happens to Carth in the above video example.

### Modules That Contain the Origin

The following modules contain the origin (0,0), and thus OoB party members will spawn there for any [Hotshot](<Hotshot>) to that module.  Modules in *italics* have the origin in non-walkable mesh:
- Taris: Sith Base
- Ebon Hawk: Fighter Skirmish
- Manaan: Ahto East
- Manaan: East Central
- Manaan: West Central
- *Tatooine: Droid Shop*
- *Tatooine: Hunting Lodge*
- Tatooine: Swoop Registration
- *Tatooine: Cantina*
- Tatooine: Czerka Office
- *Leviathan: Prison Block*

## Warps Used in Speedruns

The following sections contain details for all Coordinate Warps used in each Unrestricted speedrun.  Coordinate Warps have a few main uses:

- To cut out significant amounts of travel
- To bypass obstacles or walls that would otherwise be untraversable
- To reach areas early

All of the warps list the following information:
- Runs the warp are used in (some have more than one)
- Start Module and Destination Module
- Approximate Warp Coordinates in (x,y)
- Precision Level of the Warp
    - None: No positioning required
    - Low: Straightforward positioning required
    - Moderate: Careful positioning required
    - High: Extremely careful positioning required; easy to fail
- Type of [Hotshot](<Hotshot>) used
- A short description of the warp
- An image picturing the start and end of the warp with associated walkmesh maps
- A video showing the warp in action

Note that only true Coordinate Warps are listed here; Unrestricted runs use many other [Hotshots](<Hotshot>) that don't care about the positions of party members, or specifically want them to be out of bounds to take advantage of the [party spawn rules](#party-member-spawn-rules).

**Jump to a specific run or warp:**
- [Warps in Any%](#warps-in-any)
    - [Landing Port to Great Walkway](#landing-port-to-great-walkway)
    - [Landing Port to Lower Shadowlands](#landing-port-to-lower-shadowlands)
    - [Lower Shadowlands to Command Center](#lower-shadowlands-to-command-center)
- [Warps in All Star Maps](#warps-in-all-star-maps)
    - [Upper Shadowlands to Valley of the Dark Lords](#upper-shadowlands-to-valley-of-the-dark-lords)
    - [Docking Bay to Upper Shadowlands](#docking-bay-to-upper-shadowlands)
    - [East Central to Lower Shadowlands](#east-central-to-lower-shadowlands)
    - [Lower Shadowlands to East Central](#lower-shadowlands-to-east-central)
    - [Anchorhead to Tomb of Naga Sadow](#anchorhead-to-tomb-of-naga-sadow)
    - [Tomb of Naga Sadow to Hrakert Station](#tomb-of-naga-sadow-to-hrakert-station)
    - [Bandon Cutscene to Sea Floor](#bandon-cutscene-to-sea-floor)
    - [Kolto Control to Anchorhead](#kolto-control-to-anchorhead)
    - [Anchorhead to Kolto Control](#anchorhead-to-kolto-control)
    - [Upper Shadowlands to Dune Sea](#upper-shadowlands-to-dune-sea)
- [Warps in All Quests](#warps-in-all-quests)

## Warps in Any%

### Landing Port to Great Walkway

- **Used In:** All Unrestricted Speedruns
- **Start Module:** Czerka Landing Port, Kashyyyk
- **Destination Module:** Great Walkway, Kashyyyk
- **Approximate Coordinates:** (167.94, 138.83)
- **Precision Level:** Low
- **Hotshot Used:** Abbreviated [Quick Save Hotshot](<Hotshot#quick-save-hotshots>)

This warp is used to place Bastila on the Walkway closest to the Shadowlands elevator; it is followed by a [GP Warp](<../Techniques/GP Warp>) to reach the elevator and the Shadowlands using Bastila.

**Positioning Image**

![Image showing Bastila's positioning](/assets/images/kotor1/CWLPtoWalkway.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/6kxr4ZSpnpc" frameborder="0"></iframe>
</div>

### Landing Port to Lower Shadowlands

- **Used In:** Any%
- **Start Module:** Czerka Landing Port, Kashyyyk
- **Destination Module:** Lower Shadowlands, Kashyyyk
- **Approximate Coordinates:** (56.17, 52.37)
- **Precision Level:** None
- **Hotshot Used:** [QS Hotshot](<Hotshot#quick-save-hotshots>) with [Fast Lane](<Fast Lane>); Double [QS Hotshot](<Hotshot#quick-save-hotshots>)

This warp is used to warp Bastila from the entrance of the Lower Shadowlands to a position near the Star Map, saving running and avoiding enemies.  Both versions of the warp return to the Landing Port from Lower Shadowlands first; the initial warp uses a [Fast Lane](<Fast Lane>) to do so, while during [The Routine](<The Routine#use-in-any>) a double [QS Hotshot](<Hotshot#quick-save-hotshots>) is used instead.

In both cases, Bastila does not need to be positioned within the Landing Port; any of her initial spawn locations will give valid coordinates for the warp back to the Lower Shadowlands.

**Positioning Image**

![Image showing Bastila's positioning](/assets/images/kotor1/CWLPtoLS.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/dnjiWZ9e2M0" frameborder="0"></iframe>
</div>

The video above shows the initial warp done with the [Fast Lane](<Fast Lane>); for the Double [QS Hotshot](<Hotshot#quick-save-hotshots>) version done later, see [The Routine](<The Routine#use-in-any>).

### Lower Shadowlands to Command Center

- **Used In:** Any%, All Star Maps
- **Start Module:** Lower Shadowlands, Kashyyyk
- **Destination Module:** Command Center, Star Forge
- **Approximate Coordinates:** (77.32, 19.66) -> (75.62, 21.36)
- **Precision Level:** None
- **Hotshot Used:** Double [Neo Hotshot](<Hotshot#neo-hotshots>)

This warp is used to send Bastila from the start of the Command Center to the end in one fell swoop, skipping all fights and movement in the Command Center.  Note that Bastila typically spawns onto non-walkable mesh during this Coordinate Warp, so her coordinates change slightly.

If the MC's position is correctly set before leaving the Lower Shadowlands for the last time, then Bastila does not need to change positions while performing this warp.

**Positioning Image**

![Image showing Bastila's positioning](/assets/images/kotor1/CWLStoCommand.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/djg38soPQZA" frameborder="0"></iframe>
</div>

## Warps in All Star Maps

In addition to the warps listed below, All Star Maps also does the [Landing Port to Great Walkway](#landing-port-to-great-walkway) warp and the [Lower Shadowlands to Command Center](#lower-shadowlands-to-command-center) warps listed above in Any%.

### Upper Shadowlands to Valley of the Dark Lords

- **Used In:** All Star Maps
- **Start Module:** Upper Shadowlands, Kashyyyk
- **Destination Module:** Valley of the Dark Lords, Korriban
- **Approximate Coordinates:** (79.55, 237.02)
- **Precision Level:** Low
- **Hotshot Used:** [Neo Hotshot](<Hotshot#neo-hotshots>)

This warp is used to send Bastila to the far side of the Valley of the Dark Lords, avoiding a lot of running.  Triggering Lashowe's conversation with Bastila then warps MC to the far side of the Valley, so that the Tomb of Naga Sadow can be reached.

**Positioning Image**

![Image showing Bastila's positioning](/assets/images/kotor1/CWUStoValley.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/j1pz0ZpA_5M" frameborder="0"></iframe>
</div>

### Docking Bay to Upper Shadowlands

- **Used In:** All Star Maps
- **Start Module:** Docking Bay, Manaan
- **Destination Module:** Upper Shadowlands, Kashyyyk
- **Approximate Coordinates:** (250.28, 203.20)
- **Precision Level:** Low
- **Hotshot Used:** [Neo Hotshot](<Hotshot#neo-hotshots>)

This warp is used after obtaining the West Central Autosave to warp Bastila next to the Czerka Poachers.  This saves movement in the Upper Shadowlands and sets up for an Autosave Hotshot back to West Central.

**Positioning Image**

![Image showing Bastila's positioning](/assets/images/kotor1/CWMDBtoUS.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/FiBM4kIh4jg" frameborder="0"></iframe>
</div>

### East Central to Lower Shadowlands

- **Used In:** All Star Maps
- **Start Module:** East Central, Manaan
- **Destination Module:** Lower Shadowlands, Kashyyyk
- **Approximate Coordinates:** (71.33, 15.39)
- **Precision Level:** Low
- **Hotshot Used:** [Neo Hotshot](<Hotshot#neo-hotshots>)

This warp is used to obtain the Kashyyyk Star Map quickly with Jolee.  It also sets up a Coordinate Warp [back to East Central](#lower-shadowlands-to-east-central) to reach the Submersible.

**Positioning Image**

![Image showing Jolee's positioning](/assets/images/kotor1/CWECtoLS.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/ZsD_XGonDNg" frameborder="0"></iframe>
</div>

### Lower Shadowlands to East Central

- **Used In:** All Star Maps
- **Start Module:** Lower Shadowlands, Kashyyyk
- **Destination Module:** East Central, Manaan
- **Approximate Coordinates:** (35.11, 99.93)
- **Precision Level:** Low
- **Hotshot Used:** [Neo Hotshot](<Hotshot#neo-hotshots>)

This warp is used to reach the Submersible to Hrakert Station right after obtaining the Kashyyyk Star Map.  This skips the entire Manaan Sith Base and saves movement in East Central.

**Positioning Image**

![Image showing Jolee's positioning](/assets/images/kotor1/CWLStoEC.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/N3MlK-7YUFM" frameborder="0"></iframe>
</div>

### Anchorhead to Tomb of Naga Sadow

- **Used In:** All Star Maps
- **Start Module:** Anchorhead, Tatooine
- **Destination Module:** Tomb of Naga Sadow, Korriban
- **Approximate Coordinates:** (131.29, 107.63)
- **Precision Level:** None
- **Hotshot Used:** [Neo Hotshot](<Hotshot#neo-hotshots>)

This warp is used to obtain the Korriban Star Map with Jolee.  This skips the entire Sith Academy segment, including the fight with Uthar and Yuthura and all of the prestige gathering.

Any of Jolee's spawn locations upon leaving the Czerka Office will result in valid coordinates for the warp, so he does not have to change positions before the [Neo Hotshot](<Hotshot#neo-hotshots>).

**Positioning Image**

![Image showing Jolee's positioning](/assets/images/kotor1/CWAnchortoNS.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/ERzRLXY0NWc" frameborder="0"></iframe>
</div>

### Tomb of Naga Sadow to Hrakert Station

- **Used In:** All Star Maps
- **Start Module:** Tomb of Naga Sadow, Korriban
- **Destination Module:** Hrakert Station, Manaan
- **Approximate Coordinates:** (100.70, 108.20)
- **Precision Level:** Low
- **Hotshot Used:** [Neo Hotshot](<Hotshot#neo-hotshots>)

This warp obtains the Envirosuit directly after the Korriban Star Map.  It skips running through Hrakert Station, which is normally one of the most dangerous parts of the run.  Thus this warp helps to enable Plot Armor Skip for All Star Maps.

**Positioning Image**

![Image showing Jolee's positioning](/assets/images/kotor1/CWNStoHS.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/T7l78gt_0oc" frameborder="0"></iframe>
</div>

### Bandon Cutscene to Sea Floor

- **Used In:** All Star Maps
- **Start Module:** STUNT_14 (Darth Bandon Introduction Cutscene)
- **Destination Module:** Sea Floor, Manaan
- **Approximate Coordinates:** (247.10, 57.15)
- **Precision Level:** Moderate
- **Hotshot Used:** Modified [Neo Hotshot](<Hotshot#neo-hotshots>)

This unique Coordinate Warp uses coordinates from the module STUNT_14, which shares coordinates with the bridge section of Leviathan Bridge.  STUNT_14 is reached by intentionally triggering the Darth Bandon cutscene by flying the Ebon Hawk after 3 Star Maps are obtained.  The [Anywhere Menu Glitch](<Anywhere Menu Glitch>) then allows us to gain control during the cutscene, add Jolee, and move him to the correct coordinates.  

The difficult part of this warp is that, since it occurs during a cutscene, hotkeys are disabled and the mouse cursor is invisible.  Thus blind mouse movement is needed to open the Map Menu, close the Party Select and Map Menus, and then open the Options Menu twice while performing the [Neo Hotshot](<Hotshot#neo-hotshots>).

Once complete, this warp skips the entire Sea Floor module, including the Firaxan Sharks that can instantly kill the player.  This warp, along with an Autosave Hotshot to Hrakert Rift, enables both Disguise Skip and Plot Armor Skip in All Star Maps.

**Positioning Image**

![Image showing Jolee's positioning](/assets/images/kotor1/CWSTUNTtoSea.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/knM7dWrHNCI" frameborder="0"></iframe>
</div>

### Kolto Control to Anchorhead

- **Used In:** All Star Maps
- **Start Module:** Kolto Control, Manaan
- **Destination Module:** Anchorhead, Tatooine
- **Approximate Coordinates:** (252.52, 111.63)
- **Precision Level:** None
- **Hotshot Used:** [Neo Hotshot](<Hotshot#neo-hotshots>)

This warp is done as soon as Kolto Control is reached, and warps Jolee to the end of Anchorhead right near the gate guard to the Dune Sea.  This sets up a [return Coordinate Warp](#anchorhead-to-kolto-control) as well as an [Autosave Hotshot](<Hotshot#autosave-hotshots>) to Hrakert Rift.

Jolee has the correct coordinates no matter where he spawns upon entering Kolto Control, so the [Neo Hotshot](<Hotshot#neo-hotshots>) can be done immediately.

**Positioning Image**

![Image showing Jolee's positioning](/assets/images/kotor1/CWKCtoAnchor.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/3h0RsZ7m1dc" frameborder="0"></iframe>
</div>

### Anchorhead to Kolto Control

- **Used In:** All Star Maps
- **Start Module:** Anchorhead, Tatooine
- **Destination Module:** Kolto Control, Manaan
- **Approximate Coordinates:** (215.70, 77.04)
- **Precision Level:** Moderate
- **Hotshot Used:** [Neo Hotshot](<Hotshot#neo-hotshots>)

This warp is done to bypass the force field and scared scientists in Kolto Control and thus obtain the Hrakert Rift Autosave.  Make sure to stay far enough away from the ronto, or Jolee will be out of bounds in Kolto Control.

**Positioning Image**

![Image showing Jolee's positioning](/assets/images/kotor1/CWAnchortoKC.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/d6ZCXzow3VM" frameborder="0"></iframe>
</div>

### Upper Shadowlands to Dune Sea

- **Used In:** All Star Maps
- **Start Module:** Upper Shadowlands, Kashyyyk
- **Destination Module:** Dune Sea, Tatooine
- **Approximate Coordinates:** (335.87, 171.08)
- **Precision Level:** Low
- **Hotshot Used:** Double [Neo Hotshot](<Hotshot#neo-hotshots>)

This warp is the second of two successive [Neo Hotshots](<Hotshot#neo-hotshots>), and uses the coordinates near the force field in Upper Shadowlands to warp Jolee to the Dune Sea, close to the Eastern Dune Sea entrance.  

The first [Neo Hotshot](<Hotshot#neo-hotshots>) goes from Hrakert Rift to Upper Shadowlands.  It requires Jolee to move away from the Star Map first so that his coordinates will be out of bounds in Upper Shadowlands, causing him to spawn at MC's last position next to the force field.

**Positioning Image**

![Image showing Jolee's positioning](/assets/images/kotor1/CWUStoDune.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/RnQ6_GfNnzc" frameborder="0"></iframe>
</div>

## Warps in All Quests

Coming soon!

## Other Coordinate Warps

There are a myriad of other Coordinate Warps in KotOR, since the mechanics of them are quite flexible.  Some of these may be useful in either Randomizer or Bingo, while others have been used in the past.  They include:

- Hrakert Rift to Tomb of Naga Sadow (for the Korriban Map)
- Valley of the Dark Lords to Tomb of Naga Sadow (for the Korriban Map)
- Czerka Landing Port to Tomb of Naga Sadow (for the Korriban Map and/or the Solari crystal)
- Courtyard to Great Walkway (to the Shadowlands Elevator)
- Sith Academy Entrance to Lower Shadowlands (for the Kashyyyk Map)
- Manaan Docking Bay to Shyrack Caves (for the Qel-Droma Robes)
- Many others!

If you're looking to discover or design your own Coordinate Warps, some tools that can help include:

- Console cheats, including `warp` to travel between modules and `whereami` to get exact coordinates
- The Walkmesh Visualizer by glasnonck, which allows you to overlay multiple modules and find matches for specific coordinates.

## Related Glitches
- [Hotshot](<Hotshot>)
- [Anywhere Menu Glitch](<Anywhere Menu Glitch>)
