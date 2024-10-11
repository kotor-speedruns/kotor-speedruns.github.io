# Coordinate Warps

**Table of Contents**
- [Description](#description)
- [How To](#how-to)
- [Where Party Members Spawn](#where-party-members-spawn)
- [Coordinate Warps Used in Speedruns](#coordinate-warps-used-in-speedruns)
- [Warps in Any%](#warps-in-any)
- [Warps in All Star Maps](#warps-in-all-star-maps)
- [Warps in All Quests](#warps-in-all-quests)
- [Other Coordinate Warps](#other-coordinate-warps)
- [Related Glitches](#related-glitches) 

## Description

Coordinate Warping is a Hotshot technique that warps your party members to any coordinates in the Destination Module that they can reach in the Start Module.  Since party member coordinates persist when doing a Hotshot, we can use this to help party members bypass locked doors and reach certain areas early.

## How To

While the details of each Coordinate Warp vary from situation to situation, they all follow these two general steps:

1. Place your party member(s) in the Start Module at the coordinates you want them to end up at in the Destination Module.  This can be done with one or two party members, and they do not have to be near each other.
2. Once they are positioned correctly, Hotshot via any method to the Destination Module, following the procedure for the Hotshot type that you're using.
3. Hotshot using your preferred method to your Teleport save, which contains the location you wish to warp your party members to.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/QFl1q-pR7Ik" frameborder="0"></iframe>
</div>

Note that Coordinate Warps do not work with [Autosave Hotshots](#autosave-hotshots), but do work with any other kind of Hotshot.

## Where Party Members Spawn

When you Hotshot, the locations that party members spawn in the Destination Module follow this logic:

1. If the coordinates of the party member in the Start Module are in-bounds in the Destination Module, the party member will spawn there.
2. If the coordinates of the party member in the Start Module are out of bounds in the Destination Module:
  - If the origin is in bounds in the Destination Module, the party member will spawn at the origin.
  - If the origin is out of bounds in the Destination Module:
    - If the Hotshot used is a [Neo Hotshot](#neo-hotshots) or [Quick Save Hotshot](#quick-save-hotshots), the party member will spawn near the MC's last location in the Destination Module.
    - If the Hotshot used is a [Hard Save Hotshot](#hard-save-hotshots), the party member will spawn near the location of the Teleport Hard Save you Hotshot to.
   
In addition, if a party member's coordinates are in-bounds in the Destination Module but on "non-walkable mesh", then the party member will move to nearby walkable mesh wherever possible.  This will cause the party member's coordinates to change slightly.


