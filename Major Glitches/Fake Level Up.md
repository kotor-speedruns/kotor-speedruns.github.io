# Fake Level Up

**Table of Contents**
- [Description](#description)
- [FLU Setup](#flu-setup)
  - [Before the FLU](#before-the-flu)
  - [Starting a FLU](#starting-a-flu)
- [FLU Basics](#flu-basics)
  - [FLU Permanence](#flu-permanence)
  - [Finishing a FLU](#finishing-a-flu)
  - [Intermediate Levels](#intermediate-levels)
- [Skeleton Level (or Skele FLU)](#skeleton-level-or-skele-flu)
- [Slow Level (or Slow FLU)](#slow-level-or-slow-flu)
- [Fast Level (or Fast FLU)](#fast-level-or-fast-flu)
  - [Finishing Fast FLUs](#finishing-fast-flus)
- [General FLU Design](#general-flu-design)
- [Specific FLU Examples](#specific-flu-examples)
  - [Sneak Attack FLU](#sneak-attack-flu)
  - [Master Speed FLU](#master-speed-flu)
  - [Master Valor FLU](#master-valor-flu)
  - [Notable Old FLUs](#notable-old-flus)
    - [Security FLU](#security-flu)
    - [Skill Point FLU](#skill-point-flu)
- [Other FLU Applications](#other-flu-applications)
- [Notes on Feats and Powers](#notes-on-feats-and-powers)
  - [Cumulative Feats](#cumulative-feats)
  - [Automatically Granted Feats and Powers](#automatically-granted-feats-and-powers)
- [Related Glitches](#related-glitches)

## Description

A Fake Level Up (or FLU) is a glitch that allows a character to level up indefinitely.  This allows a character to accumulate skill points and get Feats and Force Powers earlier than normally possible.  In the most broad sense, a Fake Level Up allows you to replace a lower level up with a higher one.

The FLU is a versatile glitch with many applications.  This guide will focus on the aspects relevant to speedrunning, and merely mention other applications at the end.

## FLU Setup

### Before the FLU

In order to perform a FLU, you need the following:

1. A Target Character (TC), who will gain the benefits of the FLU.  The target character must have at least one Level Up available.
2. Most FLUs will also require a second party member, the Second Character (SC).  Having a third party member is fine, but not required.

### Starting a FLU

When starting a FLU, there is an important difference between starting on an attribute level vs. a non-attribute level.  A FLU that begins on an attribute level must end on an attribute level, whereas a FLU that begins on a non-attribute level cannot end on an attribute level.

All FLUs in speedruns begin with an [Anywhere Menu Glitch](<Anywhere Menu Glitch>) (AMG), usually performed with a Quick Save.  After the [AMG](<Anywhere Menu Glitch>), open the Character Screen.  You should see the following: 

![Image showing the Quit Game pop-up overlaid on the Character Menu screen](https://i.imgur.com/HV0zdA3.png)

If you have the Quit dialog overlaid on top of the Character Screen with a Level Up ready, you are now ready to Fake Level Up.

## FLU Basics

### FLU Permanence

Every FLU will go through one or more Intermediate Levels before reaching the Final Level, which ends the FLU.  The most important thing to remember about FLUs is the following:

**Feats, Force Powers, attribute points and skill points assigned during Intermediate Levels *will not be permanent*.**

Feats and Force Powers assigned during Intermediate Levels will be usable until you reload the game or leave the current module, and will then disappear.  In contrast, Feats, Force Powers, attribute points and skill points assigned during the Final Level are permanent.  Thus, any selections made during Intermediate Levels are only to get prerequisites for the Feats and Powers you want in the Final Level.

### Finishing a FLU

In every FLU, the Final Level is done normally, without any menu glitch.  When you finish the Final Level, your TC will revert to the level they were supposed to be, but retain everything gained during the Final Level.  Make sure to Quick Save after a FLU, so that you don't have to redo it.  You'll have to unpause the game in order to move again, and may need to close several menus depending on how you did your FLU.

### Intermediate Levels

The bulk of a FLU is moving through the Intermediate Levels as quickly as possible while still obtaining the necessary prerequisites.  There are three ways to progress through Intermediate Levels while performing a FLU; the first two are commonly used, while the third is mostly obsolete.

## Skeleton Level (or Skele FLU)

This method aborts a level up as soon as it begins, which avoids having to select attributes, skills, Feats, and Powers that will not persist in Intermediate Levels.  Starting from the above screenshot, to perform a Skele FLU:

1. Press Enter with "Cancel" highlighted in the dialog box.  This simultaneously enters the Level Up menu and cancels the dialog box.
2. Perform an [AMG](<Anywhere Menu Glitch>) with a Quick Save.  This should be skipped if your next level up is the Final Level.
3. Press Escape to exit the Level Up menu.
4. If you are granted a Feat, press Enter to clear that menu.

[![Watch the video](https://img.youtube.com/vi/T0RAPh9grcI/maxresdefault.jpg)](https://youtu.be/T0RAPh9grcI)

These steps will put you back at the Character Screen with a Level Up available and the Quit dialog up, just where you started.  The FLUs currently used in speedruns are mostly done with Skele FLU levels.

**Skele FLU benefits:**
* Fastest way to progress through Intermediate Levels
* Does not require a party member
* Can also be freely mixed with the other methods
**Skele FLU drawbacks:**
* Cannot select Feats or Powers to set up for the Final Level
* Does not accumulate skill points

## Slow Level (or Slow FLU)

This method uses the menu glitch to swap to a party member during the Level Up process, thereby causing the game to think the TC has not leveled up.  Starting from the above screenshot, to perform a Slow FLU:

1. Click "Cancel" in the Quit dialog.
2. Click Level Up.
3. Press the Change Leader hotkey ('Tab' by default) to swap party members.  Your TC will disappear from the Level Up menu.
4. Press Escape to regain keyboard control.
5. Finish the level up.  You should not assign skill points, but you can and should select any prerequisite Feats or Powers to set up the Final Level.

[![Watch the video](https://img.youtube.com/vi/HgLHYXGBX10/maxresdefault.jpg)](https://youtu.be/HgLHYXGBX10)

This will put you back on the Character screen with your SC active and no menu glitch.  To continue a FLU, swap back to the TC and exit the menu to [AMG](<Anywhere Menu Glitch>) again.  If this is your Final Level, you can swap to the TC and perform the Final Level.

Note that step 4 can be skipped, but you then must do the entire level up with only the mouse, which is slower.

**Slow FLU benefits:**
* Can select prerequisite Feats and Powers to setup the Final Level
**Slow FLU drawbacks:**
* Slowest way to progress through Intermediate Levels
* Does not accumulate skill points
* Requires redoing [AMG](<Anywhere Menu Glitch>) to continue the FLU

Several speedrun FLUs do at least one or two Slow FLU levels to gain required prerequisites for the Final Level.

## Fast Level (or Fast FLU)

This method allows for Intermediate Levels to be done in the same way as leveling up normally, without the use of an [AMG](<Anywhere Menu Glitch>).  However, this can only be used under the following conditions:

* The first level of the FLU was an attribute level (4,8,12,16, or 20)
* It is not the first level of the FLU; this must be done as a Slow FLU level with an [AMG](<Anywhere Menu Glitch>)

[![Watch the video](https://img.youtube.com/vi/9NZO51L_C_4/maxresdefault.jpg)](https://youtu.be/9NZO51L_C_4)

*This video uses a [Container Menu Glitch](<Anywhere Menu Glitch#classic-menu-glitch>) to start the FLU; an [AMG](<Anywhere Menu Glitch>) should be used instead, and will not affect the rest of the FLU.

The Fast FLU is the only FLU method to accumulate skill points for every Intermediate Level done this way.  This once made it invaluable for the Security FLU in [Any%](<../Route Guides/Any%25 Unrestricted>), as well as gaining sufficient skills in [All Quests](<../Route Guides/All Quests Unrestricted>); however, the current Unrestricted routes have evolved to the point where skill points are not required.

Fast FLU benefits:
* Only method that accumulates skill points for every level
* Can select prerequisite Feats and Powers to setup for the Final Level
* Very streamlined Intermediate Level process
Fast FLU drawbacks:
* Can only be used when starting at an attribute level
* Slower than Skele FLU levels

### Finishing Fast FLUs

Unlike other methods, finishing a Fast FLU is controlled by the attributes you select while leveling.  The attribute you select during the first level up should *not* be the one you want to keep.  Then for every other attribute level:

* Selecting the same attribute you did at the start will continue the FLU.
* Selecting a different attribute than you did at the start will make the current level the Final Level.  The attribute you select for this should be the one you want to keep.

As an example, if you want your Fast FLU to give you a Strength point, you can select Dexterity for the first level up, and then select Dexterity to continue the FLU, and Strength when you want to stop.

## General FLU Design

When designing a FLU, first decide what the end goal of the FLU is.  What Feat or Powers do you want?  Do you need to accumulate skill points? 

Once your goal is in mind, it is important to select your starting and ending levels carefully:
* If you want a Feat and/or Power, you must end on a level where your class obtains a Feat and/or Power.
* If you want a Feat and/or Power with a level requirement (e.g. Master Speed requires Character Level 15), you must end on a level above that requirement.
* If you want an automatically-granted class Feat, you must end on the level where that Feat is granted (e.g., level 12 Jedi Guardian for Master Force Jump).
* If you're starting on an attribute level, you must end on an attribute level.

Next, you'll want to decide what kind of FLU levels you're using:
* Whenever possible, Skele FLU levels should be used as they are the fastest.
* Slow FLU levels will be required for selecting prerequisites.  These must occur on levels where your class gains a Feat and/or Power.
* If you start on an attribute level, you can consider using a Fast FLU, possibly combined with Skele FLU levels.

Finally, map out which Feats and Powers you're selecting at each Intermediate Level (if not Skele FLUing) so that you have all the prerequisites you need for your end goal by the time you reach the Final Level.

## Specific FLU Examples

The following sections contain specific examples of FLUs that have been used in speedruns.  These examples are:

* The [Sneak Attack FLU](#sneak-attack-flu), used in all Unrestricted speedruns
* The [Master Speed FLU](#master-speed-flu), used in [All Quests](<../Route Guides/All Quests Unrestricted>)
* The [Master Valor FLU](#master-valor-flu), used in [All Quests](<../Route Guides/All Quests Unrestricted>)
* [Notable Old FLUs](#notable-old-flus), which includes Security FLU and Skill Point FLU.  These two unique FLUs were used in speedruns, but have since been obsoleted.

Each example lists the FLU's end goal, starting and ending level, and Intermediate Level plan, as well as a video depicting the FLU in context.

### Sneak Attack FLU

**Description:** The Sneak Attack FLU is the main FLU used in KotOR speedrunning, and is performed as soon as possible in all Unrestricted speedrun routes.  All three categories have slight variations, but the core of the FLU is the same.

**Obtains:** Sneak Attack IX and either Improved or Master Two-Weapon Fighting
**Used In:** All Unrestricted speedruns

[![Watch the video](https://img.youtube.com/vi/jeZaUj481jg/maxresdefault.jpg)](https://youtu.be/jeZaUj481jg)

**Starting Level:** 2
**Ending Level:** 17
**Level Plan (Any%):**
* Skele Levels 2-16
* Final Level 17: Improved Two-Weapon Fighting; granted Sneak Attack IX
**Level Plan (All Star Maps):**
* Skele Levels 2-16
* Final Level 17: Persuade to 10, Improved Two-Weapon Fighting; granted Sneak Attack IX
**Level Plan (All Quests):**
* Slow Level 2: Two-Weapon Fighting
* Skele Levels 3-4
* Slow Level 5: Improved Two-Weapon Fighting
* Skele Levels 6-16
* Final Level 17: Persuade to 10, Master Two-Weapon Fighting; granted Sneak Attack IX

**Notes:**
- Any% and All Star Maps typically take Two-Weapon Fighting as their initial feat during character creation, so there are no prerequisites needed for Improved Two-Weapon Fighting.  These routes eschew Master Two-Weapon Fighting because they do so few fights (just two or three).
- All Quests does two slow levels to get the prerequisites for Master Two-Weapon Fighting; that route typically takes Weapon Focus: Melee Weapons as the initial feat in character creation.
- Any% does not need extra points in Persuade and can skip that during the final level; All Star Maps and All Quests must set Persuade to 10 in order to pass all necessary Persuade checks in their routes.

### Master Speed FLU

**Description:** The Master Speed FLU is used in [All Quests](<../Route Guides/All Quests Unrestricted>) to obtain the top level combat feats and powers used for the remainder of the run.  It is done immediately after becoming a Jedi on Dantooine.

**Obtains:** Master Critical Strike and Master Speed
**Used In:** [All Quests](<../Route Guides/All Quests Unrestricted>)

https://youtu.be/WOjitboM8Og

**Starting Level:** 4
**Ending Level:** 20
**Level Plan:**
* Skele Levels 4-9
* Slow Level 10: Burst of Speed
* Slow Level 11: Improved Critical Strike, Knight Speed
* Skele Levels 12-19
* Final Level 20: Strength to 19, Persuade to 12, Master Critical Strike, Master Speed

### Master Valor FLU

**Description:** The Master Valor FLU is used in [All Quests](<../Route Guides/All Quests Unrestricted>) to gain secondary feats and powers.  While this is the least important of the three FLUs, it makes combat more consistent in the long run.

**Obtains:** Weapon Focus: Lightsaber and Master Valor
**Used In:** [All Quests](<../Route Guides/All Quests Unrestricted>)

https://youtu.be/HYztjzs6rSY

**Starting Level:** 5
**Ending Level:** 15
**Level Plan:**
* Skele Levels 5-9
* Slow Level 10: Two-Weapon Fighting (or Recommended Feat), Knight Valor
* Skele Levels 11-14
* Final Level 15: Persuade to 14, Weapon Focus: Lightsaber, Master Valor

### Notable Old FLUs

These two FLUs were once used in speedruns but have since been obsoleted.  While there were also other versions of FLUs to gain Master Two-Weapon Fighting, Master Speed and even Sneak Attack IX, these two FLUs are unique and not really duplicated in any current route, so they are included here.

#### Security FLU

**Description:** This FLU was a Fast FLU used in [Any%](<../Route Guides/Any%25 Unrestricted>) until [DLZs](<Displaced Load Zone>) obsoleted it.  Obtaining 91 Security made it possible to unlock Impossible doors, which was the original method of skipping the Undercity, Mission, Zaalbar, and T3.

**Obtains:** 91 Security

https://youtu.be/G5K7M8Ir8Js

**Starting Level:** 4
**Ending Level:** 88
**Level Plan:**
* Skele Levels 4-19
* Slow Level 20: Charisma, Save Skills, Recommended Feat
* Fast Levels 21-87: Charisma, Save Skills
* Final Level 88: Strength to 19, Security to 91, Computer Use to 45, other skill points as needed

**Notes:**  As seen in the video, originally the entire FLU was Fast Levels from 5-87, but at Level 21+ you no longer obtain Feats or Powers, so doing Skele Levels from 4-19 skips having to select any Feats at all, and you still accumulate enough skill points from 21-87 that you have enough for the end of the FLU; the Treat Injury points are unnecessary due to Plot Armor, and even Computer Use or Persuade could be trimmed if necessary.

#### Skill Point FLU

**Description:** This unique FLU doesn't really fit in the usual FLU paradigms.  It obtains hundreds of unused skill points that can then be used in subsequent FLUs or just normal gameplay.  It was used in old versions of [All Quests](<../Route Guides/All Quests Unrestricted>) as a Soldier.

**Obtains:** 512 Unused Skill Points

https://youtu.be/y81B_CIkEp0

**Starting Level:** 3
**Ending Level:** 4
**Level Plan:**
- Slow Level 3: Save Skills, Recommended Feat
- Final Level 4: Recommended Attribute, Skills, and Feat

**Notes:** Upon reaching level 4, a Fast FLU was then used to cap all skills with the unused skill points obtained here (and also get Master Two-Weapon Fighting).  This FLU was originally thought to be Soldier only, but has since been shown to work with both Scout and Scoundrel as well.  It can also give you more than 512 points depending on how it is done.

## Other FLU Applications

The speedrun applications of Fake Level Ups really just scratch the surface of what FLUs can do.  Other applications of FLU that are not speedrun relevant include:

* Acquiring arbitrary and unused feats, such as Advanced Guard Stance
* Acquiring arbitrarily many Attribute points
* Gaining a second or even third class (called Cross-Classing)

FLUs can also be used with party members as the Target Character, which is not currently used in a speedrun.  There are likely other applications of FLU that have not been fully explored.  If you're interested in these more esoteric FLU variants, see the glitch-hunting channel in the Discord.

## Notes on Feats and Powers

### Cumulative Feats

With a FLU, it is possible to get the third tier of a Feat or Power without getting the second tier, e.g. getting Master Speed without getting Knight Speed.  For some Feats and Powers, this creates no issues; Master Speed is strictly better than Knight Speed, so it doesn't matter that we never get it.  For other Feats and Powers however, it does matter.

As an example, consider Armor Proficiency.  It is possible to get Heavy Armor Proficiency without getting Medium Armor Proficiency using a FLU.  However, our character would then be able to wear Heavy Armor, but not Medium Armor.  The effects of this set of Feats are cumulative, rather than the higher tier replacing the lower tier.

No Force Powers are cumulative in their effects. Feats that are cumulative in their effects include:
- Toughness feats
- Empathy feats
- Conditioning feats
- Implant feats
- Armor feats

### Automatically Granted Feats and Powers

Feats and Powers that are granted automatically at a given level can be gained through a FLU by ending the FLU at the level at which those feats are granted.  This includes things like Force Jump or Sneak Attack.  However, these Feats and Powers may not show up in the menu.  They still exist and have an effect; if you check the Feedback logs, you will see your granted feats taking effect.

## Related Glitches

* [Anywhere Menu Glitch](<Anywhere Menu Glitch>)
