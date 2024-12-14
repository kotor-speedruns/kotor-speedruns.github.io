# Glitchless Tricks

**Table of Contents**
- [Introduction](#introduction)
- [Duration Glitch](#duration-glitch)
- [Speed Extension](#speed-extension)
- [Stunned Combat](#stunned-combat)
- [Auto-Level Attributes](#auto-level-attributes)
- [Fast Text](#fast-text)

## Introduction

Each of the following tricks or techniques are allowed in all rulesets, including the Glitchless Ruleset.  Most of these are allowed because they are considered either impossible or too cumbersome to avoid within the context of a speedrun.  This guide will describe each trick in detail, including how to perform it, and where it is used in all KotOR speedruns.

## Duration Glitch

### Description

Duration Glitch is a glitch that causes the duration of temporary effects to be greatly extended whenever the party goes through a module transition.  While Duration Glitch is not fully understood, the following conditions seem necessary:

1. The last loaded save must have been a Manual Save or Quick Save.  Loading an Autosave or starting from a New Game disables Duration Glitch.
2. With any effect active, go through a module transition.  This will modify the duration of the active effects.

*Video forthcoming*

**Additional Notes:**

- The amount the effects are extended seems to partly depend on which module is being loaded.  In particular, Duration Glitch seems to not work as well in the Upper Shadowlands, and in some places can even "cancel" effects by modifying their durations so that they expire immediately.
- The amount the effects are extended seems to also depend on the original duration of the effect.  For example, stimulants (with a base duration of 120 seconds) extend further than Force Valor (with a base duration of 20 seconds).

Duration Glitch does not exist on the XBox version of KotOR.

### Uses

Duration Glitch is used in every KotOR speedrun to extend the duration of Force Powers and stimulants, particularly Force Speed and Adrenal Alacrity.  It is especially valuable in NMG and Glitchless to make a set of stims last for an entire planet, allowing fewer stims to cover all necessary fights.

Duration Glitch can also extend negative temporary effects, such as Stun or the attribute loss from Sonic damage or Force Choke.  In particular, it can lead to seemingly indefinite Stuns on party members, particularly on the Leviathan.

## Speed Extension

### Description

Speed Extension is a method of using an Adrenal Alacrity to extend the double movement speed effect of Force Speed.  If both effects are active and Force Speed runs out, then the double movement speed effect of Force Speed remains active until the Adrenal Alacrity wears off.  The other effects of Force Speed (including the Defense boost and any extra attacks per round) are not extended.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/2tSxdrh4Rrk" frameborder="0"></iframe>
</div>

### Uses

Speed Extension can be used in several places within the NMG and Glitchless rulesets, but most notably it is used to extend the effect of Force Speed throughout the underwater modules on Manaan, Sea Floor and Hrakert Rift.

## Stunned Combat

### Description

Stunned Combat is a method of attacking while stunned in combat.  By swapping party members to the Stunned member and then immediately queueing combat actions, the Stunned party member will execute those actions as if not stunned.  The debilitated penalty of the Stun still applies.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/QoMPUpzRAI4" frameborder="0"></iframe>
</div>

### Uses

Stunned Combat is mostly used to mitigate bad RNG resulting in Stuns during combat.  However, it can also allow for more aggressive use of AoE Stun effects such as Concussion Grenades, since friendly-fire Stuns can be mitigated through Stunned Combat as well.

## Auto-Level Attributes

### Description

Auto-Level Attributes is a method of getting extra Attribute points at non-standard levels by exploiting an error in the Auto-Level coding.  When checking to see if an Auto-Level should assign an Attribute point, the game only checks the current class level rather than the overall character level.  Thus if the Main Character (MC) has a non-multiple of 4 in their base class, Auto-Leveling when the MC's Jedi level is a multiple of 4 will grant an Attribute point.

<div class="video-container">
    <iframe title="YouTube video player" src="https://www.youtube.com/embed/gvNkJGVTQdE" frameborder="0"></iframe>
</div>

Auto-Level Attributes are usually used to gain extra STR points, as that's where the Jedi Guardian class assigns its Attribute point during an Auto-Level.  The drawback of Auto-Level Attributes is that you lose control over where your Feats, Force Powers, and Skill Points for that level are assigned, but with proper build construction this can be mitigated.  The usual application of this trick (in NMG and Glitchless) is as follows:

1. Select 18 STR at character creation
2. Reach Level 3 in Base Class and become a Jedi Guardian at Level 4, reaching 19 STR
3. Auto-Level at 7; this gives 20 STR, Skill Points depending on your Base Class, the Force Power Stun (unless you already selected it), and no Feat is selected at this level.
4. Manual Level at 8 to reach 21 STR
5. Auto-Level at 11; this gives 22 STR, Skill Points depending on your Base Class, the Force Power Stasis (unless you already selected it), and no Feat is selected at this level.
6. If possible, Manual Level at 12 to reach 23 STR

### Uses

Auto-Level Attributes are currently used in All Quests Unrestricted, Any% NMG, and can be used in Any% Glitchless.  AQU actually uses Hotshots to become a Jedi at Level 3, and thus gains an extra STR attribute point at levels 6 and 10, instead of levels 7 and 11.

## Fast Text

### Description

Fast Text is a memory-based glitch where the sound files for dialogue do not load properly, allowing dialogue to progress instantly instead of being mashed.  This version of Fast Text occurs naturally as the game is played, unlike Forced Fast Text, which uses the Anywhere Menu Glitch and is only legal in Unrestricted speedruns.

*Video forthcoming*

### Uses

Fast Text typically only occurs in Glitchless speedruns; other runs are either over before Fast Text would occur, or restart the game frequently enough that Fast Text is never encountered.  The same memory leak that causes Fast Text also eventually causes textures to fail to load correctly and be replaced with a white polygon.  Once the textures fail to load, the next Save or Load will crash the game; Any% Glitchless can usually finish (barely) before this happens, while All Quests Glitchless must restart the game once, which disables Fast Text until later on in the run.

Modules that typically have Fast Text include:
- East Central
- Hrakert Station
- Viewing Platform
Modules that sometimes have Fast Text include:
- Manaan Docking Bay
- Ahto West
