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

Coordinate Warping is a [Hotshot](<Hotshot>) technique that warps your party members to any coordinates in the Destination Module that they can reach in the Start Module.  Since party member coordinates persist when doing a [Hotshot](<Hotshot>), we can use this to help party members bypass locked doors and reach certain areas early.

## How To

While the details of each Coordinate Warp vary from situation to situation, they all follow these two general steps:

1. Place your party member(s) in the Start Module at the coordinates you want them to end up at in the Destination Module.  This can be done with one or two party members, and they do not have to be near each other.
2. Once they are positioned correctly, [Hotshot](<Hotshot>) via any method to the Destination Module, following the procedure for the [Hotshot](<Hotshot>) type that you're using.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/QFl1q-pR7Ik" frameborder="0"></iframe>
</div>

Note that Coordinate Warps do not work with [Autosave Hotshots](<Hotshot#autosave-hotshots>); party members will always spawn near the default spawn for the module when performing an [Autosave Hotshot](<Hotshot#autosave-hotshots>).  However, Coordinate Warps can be done with [Main Menu Hotshots](<Hotshot#main-menu-hotshots>), even when done as a [Forward Hotshot](<Hotshot#forward-hotshot>).

### Warping in Place

A Coordinate Warp can be done "within" a module by temporarily [Hotshotting](<Hotshot>) to another module that has the coordinates you want, then immediately Coordinate Warping back to the original module.  This is used in a few places, and if the save in the temporary module is done in the right position, the two [Hotshots](<Hotshot>) can be chained together, commonly called a Double [Hotshot](<Hotshot>).

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/djg38soPQZA" frameborder="0"></iframe>
</div>

The type of Double Hotshot you use depends on which module you want that Hard Save to end up in.  A Double [Neo Hotshot](<Hotshot#neo-hotshots>) or a Double [Quick Save Hotshot](<Hotshot#quick-save-hotshots>) will both leave the Hard Save as it was, whereas a Mixed Double Hotshot (a [Neo Hotshot](<Hotshot#neo-hotshots>) followed by a [Quick Save Hotshot](<Hotshot#quick-save-hotshots>)) will change the Hard Save to the module you're warping within.

## Party Member Spawn Rules

When you [Hotshot](<Hotshot>), the locations that party members spawn in the Destination Module follow this logic:

- If the coordinates of the party member in the Start Module are in-bounds in the Destination Module, the party member will spawn there.
- If the coordinates of the party member in the Start Module are out of bounds in the Destination Module:
    - If the origin is in bounds in the Destination Module, the party member will spawn at the origin.  See the list below.
    - If the origin is out of bounds in the Destination Module:
        - If the Hotshot used is a [Neo Hotshot](<Hotshot#neo-hotshots>) or [Quick Save Hotshot](<Hotshot#quick-save-hotshots>), the party member will spawn near the MC's last location in the Destination Module.
        - If the Hotshot used is a [Load Menu Hotshot](<Hotshot#hard-save-hotshots>) or [Main Menu Hotshot](<Hotshot#main-menu-hotshots>), the party member will spawn near the location of the Destination Module Hard Save you [Hotshot](<Hotshot>) to.
   
In addition, if a party member's coordinates are in-bounds in the Destination Module but on "non-walkable mesh", then the party member will move to nearby walkable mesh wherever possible.  This will cause the party member's coordinates to change slightly, such as what happens to Carth in the above video example.

### Modules That Contain the Origin

The following modules contain the origin (0,0), and thus OoB party members will spawn there for any [Hotshot](<Hotshot>) to that module.  Modules in *italics* have the origin in non-walkable mesh:

- Peragus: Turret Minigame
- Harbinger: Engine Deck
- Citadel Station: Dock Module
- Citadel Station: Swoop Track
- Telos: Underground Base
- Telos: Polar Plateau
- *Nar Shaddaa: Docks*
- Nar Shaddaa: Goto's Yacht
- Nar Shaddaa: Swoop Track
- Dxun: Mandalorian Cache
- Dxun: Jungle Tomb
- Onderon: Sky Ramp
- Onderon: Swoop Track
- *Dantooine: Khoonda*
- Dantooine: Crystal Cave
- *Dantooine: Enclave Sublevel*
- Malachor: Depths
- Malachor: Trayus Academy
- Malachor: Trayus Core
- Coruscant (during Escape from Telos cutscene)

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
- [Warps in All Planets](#warps-in-all-planets)
- [Warps in All Quests](#warps-in-all-quests)

## Warps in Any%

### Start Module to Destination Module

- **Used In:** 
- **Start Module:** 
- **Destination Module:** 
- **Approximate Coordinates:** 
- **Precision Level:** 
- **Hotshot Used:** 

Description

**Positioning Image**

![Image showing Bastila's positioning](/assets/images/kotor1/CWLPtoWalkway.png)

**Video of Warp**

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/6kxr4ZSpnpc" frameborder="0"></iframe>
</div>

## Warps in All Planets

Coming soon!

## Warps in All Quests

Coming soon!

## Other Coordinate Warps

There are a myriad of other Coordinate Warps in KotOR II, since the mechanics of them are quite flexible.  Anytime two modules share coordinates, a Coordinate Warp is possible (though possibly not useful). If you're looking to discover or design your own Coordinate Warps, some tools that can help include:

- Console cheats, including `warp` to travel between modules.
- The Walkmesh Visualizer by glasnonck, which allows you to overlay multiple modules and find matches for specific coordinates.

## Related Glitches
- [Hotshot](<Hotshot>)
- [Anywhere Menu Glitch](<Anywhere Menu Glitch>)
