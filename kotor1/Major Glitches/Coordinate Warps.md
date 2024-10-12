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
  - If the origin is in bounds in the Destination Module, the party member will spawn at the origin.  See the list below.
  - If the origin is out of bounds in the Destination Module:
    - If the Hotshot used is a [Neo Hotshot](<Hotshot#neo-hotshots>) or [Quick Save Hotshot](<Hotshot#quick-save-hotshots>), the party member will spawn near the MC's last location in the Destination Module.
    - If the Hotshot used is a [Hard Save Hotshot](<Hotshot#hard-save-hotshots>), the party member will spawn near the location of the Teleport Hard Save you [Hotshot](<Hotshot>) to.
   
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

This warp is used to send Bastila to the far side of the Valley of the Dark Lords, avoiding a lot of running.  Triggering Lashowe's conversation with Bastila then warps MC to the far side of the Valley, so that the Tomb of Naga Sadow can be reached

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

## Warps in All Quests

## Other Coordinate Warps

## Related Glitches
