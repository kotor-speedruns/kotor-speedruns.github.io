---
redirect_from:
  - /kotor1/Route Guides/Any Glitchless
---
# Star Wars: Knights of the Old Republic - Any% Glitchless Guide

### v7.0: Male/Female Scoundrel -> Jedi Guardian Route (Light Side)

This route defeats Malak on the Star Forge as fast as possible without the use of glitches.  Timing begins upon clicking "PLAY" after character creation and ends when the screen cuts to black at the start of the Malak Death cutscene. A load-removal tool and auto-splitter is available for LiveSplit thanks to [Lane](https://www.speedrun.com/users/Lane), [glasnonck](https://www.speedrun.com/users/glasnonck) and [XeroHR](https://www.speedrun.com/users/XeroHR). Times are sorted based on load-removed times, since load times vary significantly in this game, and load screens are frequent. This guide will cover the character build for the run, as well as a detailed route.

If you have additional questions, you can check out the [KotOR Speedrunning Discord](http://discord.gg/Q2uPRVu) which is linked on the game's sidebar on speedrun.com.  There's a bunch of friendly folks there willing to answer questions!

**Table of Contents:**
- [Glitchless Ruleset](#glitchless-ruleset)
- [Character Build](#character-build)
  - [Character Creation](#character-creation)
  - [Leveling Plan](#leveling-plan)
  - [Force Power Options](#force-power-options)
- [Equipment Plan](#equipment-plan)
- [Credit Route](#credit-route)
  - [Skipping Zelka](#skipping-zelka)
- [Alignment Route](#alignment-route)
- [Route Overview](#route-overview)
- [Detailed Route](#detailed-route)
- [Version History](#version-history)

## Glitchless Ruleset

**REMEMBER to show yourself restarting the game at the beginning of each attempt.**

All glitches are banned, with the exception of the following:
- [Fast Text](<../Techniques/Glitchless Tricks#fast-text>)
- [Duration Glitch](<../Techniques/Glitchless Tricks#duration-glitch>)
- [Speed Extension](<../Techniques/Glitchless Tricks#speed-extension>)
- [Stunned Combat](<../Techniques/Glitchless Tricks#stunned-combat>)
- [Auto-Level Attributes](<../Techniques/Glitchless Tricks#auto-level-attributes>)

In addition, exploits that give infinite experience, credits, or alignment points are also banned.

Due to its glitchy nature, QUICKSAVE is banned as well.  Manual and autosaves, however, are allowed.

## Character Build

The new character build is a Scoundrel build with Sneak Attack II, replacing the old Scout build.  The benefits of this change are:

1. Sneak Attack II helps certain fights become faster; in particular, the Hendar rakghoul, any fight where you Stun the opponent (Assault Droid, Governor, Juhani), the Sand People warrior in the Dune Sea, Darth Bandon, Lashowe, and Leviathan Malak are some of the fights that benefit from Sneak Attack damage.
2. Sneak Attack damage applies to Force Jumps at range.  This makes Force Jump Chains easier to obtain, leading to faster Force Jump movement on Tatooine, Kashyyyk and Lehon.
3. With [Auto-Level Attributes](<../Techniques/Glitchless Tricks#auto-level-attributes>), we want to only spend 3 levels in our base class.  Thus a major benefit of Scout (the free Implant 2 feat at level 4) is no longer valid, whereas Scoundrels get their free Sneak Attack II feat at level 3.

There are, however, some drawbacks:

1. With no guaranteed Alacrity on Endar Spire, the Scoundrel build must either get a random Alacrity on Spire (0.83% chance) or shop with Zelka on Taris to buy Alacrities.  Scouts can skip Zelka consistently, saving roughly 11s.
2. Scoundrels have to take less Dex and Con and have naturally less Vitality than Scouts.  This means dying on Taris is a much more common occurence, and there's more stress on early game medpac usage.
3. Scoundrels have to manually select Flurry, and therefore cannot take Weapon Focus: Melee Weapons.  This leads to slightly worse chances to hit throughout Taris, but you can mitigate this by single-wielding on Taris to avoid the Two-Weapon Fighting penalty.

The old Scout build is close enough that if you really prefer it, you can use a Scout build instead.  But Scoundrels will have more consistent and faster combat and therefore have the potential for faster runs overall.

### Character Creation

We now begin as a Scoundrel; this guide as written can be completed as either a Male or Female character, with the only difference being two small conversation tweaks when speaking with Lashowe.  On becoming a Jedi we'll choose the Jedi Guardian class for maximum attack power and the Force Jump feat for quicker movement.

**Initial Attributes**

* Str - 18
* Dex - 10
* Con - 12
* Int - 14
* Wis - 8
* Cha - 10

**Initial Skills**

* Computer Use - 2
* Demolitions - 4
* Stealth - 4
* Persuade - 4
* Scurity - 4
* Treat Injury - 2

**Initial Feat** - Flurry

We are going to focus on melee attacks with a lightsaber, so we max out Strength immediately.  The 14 in Intelligence, combined with the 2 points in Computer Use, allow us to save 1 computer spike when hacking on Endar Spire, yielding a smoother spike route on Taris.  We put points into Dexterity and Constitution to help us survive; 12 in Con is preferred, since the AC drop from lower Dex is compensated for by Scoundrel's Luck.  10 Charisma makes up for the Scoundrel not getting a feat (and therefore Empathy) at level 3.

Persuade and Treat Injury (TI) will be our main skills; however since TI is not a Class Skill for Scoundrels, we'll save points to put into TI once we become a Jedi.  We don't put any additional points into Computer Use after the initial 2; we'd need 8 Net Computer Use to save additional spikes, and we just don't need those extra spikes.  The points in Stealth guarantee our credit route for the early game; see below.

We choose Flurry because it's overall a better feat than Critical Strike, though we will occasionally use Critical Strike to fish for Stuns.  We pick Flurry over Two-Weapon Fighting because Flurry takes longer to select, so at level 2 it's faster to pick Two-Weapon Fighting.  Since character creation isn't timed, this is optimal.

### Leveling Plan

| Level | STR | Feats | Powers | Skills |
| --- | --- | :--- | :--- | :--- |
| 1 | 18 | Flurry, *Scoundrel's Luck* | | Com and TI to 2, Demo, Stealth, Per, Security to 4 |
| 2 | 18 | Two-Weapon Fighting | | Save All |
| 3 | 18 | *Sneak Attack II* | | Save All |
| 4 | 19 | Improved Two-Weapon Fighting | Affect Mind, Stun Droid | Save All |
| 5 | 19 | | Burst of Speed | Save All |
| 6 | 19 | Improved Flurry | Force Valor | Per to 9, TI to 9, Save Rest |
| AL7 | *20* | | *Stun* | *Awareness to 7, Repair to 1* |
| 8 | 21 | | Disable Droid | Per to 11, TI to 10 |
| 9 | 21 | Master Two-Weapon Fighting | Knight Speed | Per to 12, TI to 11 |
| 10 | 21 | Master Flurry | Knight Valor | Per to 13, TI to 12 |
| AL11 | *22* | | *Stasis* | *Awareness to 9* |
| 12 | 23 | Weapon Focus: Lightsaber | Force Resistance | Per to 14, TI to 13 |
| AL13 | *23* | | *Force Push* | *Awareness to 11* |

Our main combat plan is lots of Strength, Master Two-Weapon Fighting, Master Flurry, and Knight Speed, using Bastila's Double-bladed Lightsaber as our main weapon.  This gives us multiple attacks that will deal as much damage as possible; we need as many attacks as we can get, since our chance to hit will be relatively low.  Other notes:

**Auto-Levels:**
- Both level 7 and 11 are Auto-Levels to take advantage of [Auto-Level Attributes](<../Techniques/Glitchless Tricks#auto-level-attributes>), getting 20 STR at level 7 and 22 STR at level 11, so that when we level to 12 we're at 23 base STR.  Neither level is a Feat level, but we get two Force Powers from these Auto-Levels: Stun and Stasis.  Thankfully, Stasis is a useful Power for the Malak fight, lowering his AC by 4 due to the Slow effect when he saves against Stasis.
- Level 13 is not guaranteed in the route, and its only real benefit is the extra Attack point from the Guardian class.  So we Auto-Level it because it is fastest to do so.  Force Push and the Awareness points are, well, pointless.

**Skill Notes:** 
- Putting the points into Stealth at the start causes our initial footlocker to contain a Stealth Field Generator, which sells for 40 extra credits.  This is necessary to guarantee enough credits to buy the stims and grenades we want when we reach Taris.
- Putting 2 points into Computer Use, along with 14 Int, saves us one computer spike when we hack on the Endar Spire, allowing us to only have to buy one from Larrim.  This helps us compensate for the fewer credits Scoundrels get compared to a Scout.
- We need Persuade for several conversations, most notably Persuading Juhani to return to the light side and Persuading Yuthura to admit us to the Sith Academy.  With the given build, the only Persuade check that we could possibly fail is the scientists at the force field in Kolto Control, and if we cast Force Valor first we are guaranteed to pass it; without, it's a 50-50 chance.  All our Persuade checks are Medium difficulty at worst, and that's the only point in our build where we don't have enough Persuade to guarantee passing Medium checks.
- The points in Demolitions and Security are just used to keep menus cleaner.  We will never have to loot a mine or open a door.
- Every other spare point is put into Treat Injury to make medpac use more efficient.

**Feat Notes:**
- Feats are very straightforward in this build.  Every selected feat goes towards Flurry or Two-Weapon fighting until we max out those trees, then we take Weapon Focus: Lightsaber to up our chances to hit.

### Force Power Options

Certain Force Powers in this build are givens: you will always get Knight Speed and first tier Force Valor, and you will always end up with Stasis from the Auto-Levels.  Everything else, however, could vary due to roughly equivalent options. The default build listed above gets us Knight Valor and Force Resistance for Star Forge and Disable Droid for the Jedi popsicles in the Malak fight, but all of those have alternatives.

1. **Knight Valor vs. Improved Energy Resistance**
- Knight Valor only adds 1 to all attributes and saving throws compared to standard Force Valor, as well as Immunity: Poison.  However, the +1 Attribute points doesn't actually increase our attribute modifiers except for STR at level 11.  One alternative is to get Improved Energy Resistance instead, which also gives Immunity: Poison but instead provides Damage Resistance 15/- vs. Energy, Cold, Heat, Sonic, and Electrical.  This makes the MC (and any party members) quite tanky from Level 10 on, often making medpacs obsolete even for prolonged fights such as the Saul Karath fight.  There are two downsides, however; you lose the +1 to saving throws that Knight Valor provides, and you have to spend an extra Force Power to get basic Energy Resistance.  You also need to keep one extra buff active, since you still want basic Force Valor active in addition to Energy Resistance.
- **To implement this change:** Take **Energy Resistance** instead of Affect Mind at level 4, then take **Improved Energy Resistance** instead of Knight Valor at level 10.

2. **Disable Droid vs. Drain Life**
- These are the two feasible ways to deal with the Jedi popsicles in the Malak fight.  While you could take Throw Lightsaber, the animation for that power makes it extremely slow and therefore undesirable.  The benefit of Disable Droid is that it saves a precious Force Power above level 9 that we use on Force Resistance.  The benefit of Drain Life is you only have to spend one Force Power overall on it, freeing up an earlier power for an extra level of Affect Mind.  Drain Life also heals your Vitality when you eliminate a popsicle, whereas Disable Droid only heals your Force Points.  So really, the comparison here is Disable Droid + Force Resistance vs. Drain Life + an extra Affect Mind.  The extra level of Affect Mind is more useful if you are taking Energy Resistance, since then you wouldn't normally get Affect Mind at all; Dominate Mind is not particularly useful for the run.  However, Force Resistance can be helpful on Star Forge in particular, as it's the only protection from the Slow effect of a saved Stasis cast.
- **To implement this change:** Take an additional **Affect Mind** power at level 4 (or 6 for **Dominate Mind**), skip Stun Droid and Disable Droid, then at level 12 take **Drain Life** over Force Resistance.

3. **Early Stun for Juhani**
- The default strat for Juhani is to use Critical Strike to fish for a Stun while dealing damage, then switching to Improved Flurry if and when the Stun is successful.  However, if you take the Force Power Stun before the Juhani fight, you can use it on turn one to have a higher chance to Stun (17.5% for Crit Strike vs. 25% for Stun), and a guaranteed Slow effect for -4 AC if Juhani saves.  While the difference in Stun chance is somewhat negligible, the -4 AC upon a save is a huge benefit.  The downside to using Stun on turn one is that you are guaranteed to deal no damage that round.  Overall, having Stun does make the fight slightly faster on average, but the Crit Strike method has a better chance of an unlikely 2-round fight.  Taking Stun early also means you miss out on Affect Mind.
- **To implement this change:** Take **Stun** instead of Affect Mind at level 4.  The level 7 Auto-Level will give you Force Push, while level 13 if reached will give Force Whirlwind.
- **Note:** If you take Stun early, you must either take **Knight Valor** instead of Improved Energy Resistance, or take **Drain Life** instead of **Disable Droid**; there aren't enough Force Powers before level 9 to take all four of Stun, Energy Resistance, Stun Droid, and Disable Droid.

## Equipment Plan

Our equipment plan includes a couple optional equips for survival; these equips each cost a second or so, but they can make certain fights much more consistent.

*Implant: None*
- As a Scoundrel, we no longer get Implant Feats for free and don't spend the feats to get them.

*Head: Verpine Headband* - Found on Dantooine, Casus Sandral's corpse
- The Verpine Headband is easily accessible and increases our weak Will save by 3, making it a convenient protection against certain Force powers.

*Gloves: Strength Enhancer* - Found on Taris, Sith Governor's corpse
- This is used for the +1 Strength; from levels 4 to 8 and at level 12, it nets us an extra +1 modifier.

*Armband: Brejik's Armband* - Found on Taris, Brejik's corpse
- This optional equip makes the Sith Governor easier to survive by providing Damage Resistance: 5/- vs. Slashing.  This also helps against Kath Hounds, Kinrath, and anyone wielding a vibrosword, such as the Rakata Warriors on Lehon.  Equipping this, both before Sith Base and again on Leviathan, is personal preference, but it is more recommended before the Sith Base.

*Shield: Echani Shield* - Found on Dantooine, Casus Sandral's corpse
- This optional equip can be used to aid survival in certain key fights, particularly the Sand People Chieftain fight.  It also helps in the Manaan Sith Base and against Darth Bandon on Korriban.  This will typically not be re-equipped on the Leviathan since the MC is bulky enough by that point, but it could be used to try to avoid medpac usage during the Saul Karath fight.

*Body: Jedi Knight Robe* - Found on Dantooine, Nemo's corpse
- We must use Robes to use our Force powers (mainly Speed), and this is the best convenient robe to get.  Optionally, you can loot a chewed Twi'lek corpse at the mouth of the Krayt Dragon cave for a Jedi Master Robe but the extra 1 defense really isn't worth it.

*Weapon: Double-bladed Lightsaber* - Found on Taris, Brejik's corpse
- We borrow Bastila's lightsaber for the run (and probably give it back afterwards).  The crystals we use are as follows:
  - **Sigil Crystal:** Mainly used for +1 Attack, but the extra d6 of damage is nice too.  Placed after Dantooine and kept until leaving Lehon.
  - **Krayt Dragon Pearl:** Good damage boost, but essential for the +3 Attack boost.  Placed after Tatooine and kept there for the rest of the run.
  - **Solari Crystal:** The best crystal in the game with a +3 Attack and Damage boost; the d8 vs. Dark Side is rarely applicable (but does help vs. Summit Bastila and Star Forge Malak).  Placed after Lehon so that we can ignore our alignment almost entirely.

*Belt: Nerve Amplifier Belt* - Bought on Tatooine from Mic'Tunan'Jus Orgu (1000 Credits)
- This provides the crucial Immunity: Mind-Affecting that we used to get from our Implant slot.  We actually loot a second one of these and give it to Carth for the Leviathan so he doesn't get [Duration Glitch](<../Techniques/Glitchless Tricks#duration-glitch>) Stunned.

All of our equipment should be equipped by the time we leave Tatooine, with the exception of the Solari crystal.  We'll also use the Combat Suit and various vibroblades while on Taris.

## Credit Route

The new route has a very streamlined credit route, since we no longer need 8500 credits for the CNS Strength Enhancer.  Because of this, we make do with 5 shopping trips during the run, though with a random Alacrity on Endar Spire we can skip one of those shopping trips.  Our shopping is as follows:

*1. Larrim on Taris*
- Sell: Nonessential items to reach ~1014 Credits
- Buy: 1x Computer Spike, 1x Sonic Grenade, 2x Concussion Grenade, 1x Frag Grenade, 1x Battle Stimulant (792 Credits total)

*2: Zelka Forn on Taris*
- Buy: 4x Adrenal Alacrity (200 Credits total)

*3. Selkath Merchant on Manaan*
- Buy: 1x Hyper Battle Stimulant, 2-3x Hyper-Adrenal Strength (4-500 Credits total)

*4. Mic'Tunan'Jus Orgu on Tatooine*
- Sell: Unneeded Items to reach ~6066 Credits
- Buy: 4x Life Support Pack, Nerve Amplifier Belt, 1x Adrenal Alacrity, 1x Adrenal Strength, Bantha Fodder (1701 Credits total)

*5. Czerka Shop on Korriban*
- Buy: 10x Life Support Pack, 5x Echani Battle Stimulant, 5x All Hyper Adrenal Stimulants, 2x Hyper Battle Stimulant (4400 Credits total)

We get most of our credits for the Tatooine and Korriban shopping trips from selling the Cardio Power System that we get as reward for completing "Mission for the Republic" for Roland Wann on Manaan.  The rest comes from selling the items we've accumulated up to that point; we loot one or two optional things to get enough credits for all the medpacs and stims we need.

### Skipping Zelka

If you get a random Adrenal Alacrity drop from either Trask or the Sith Commander on the Endar Spire (1 in 240 chance for each for 0.83% chance total), it is possible to skip shopping with Zelka completely, saving approximately 11 seconds.  If this is done, the next two shopping trips change as follows:

- *Selkath Merchant on Manaan*
  - Buy: 2x Adrenal Alacrity, 1x Hyper Battle Stimulant, 2-3x Hyper-Adrenal Strength, 1x Hyper-Adrenal Stamina (6-700 Credits total)
- *Mic'Tunan'Jus Orgu on Tatooine*
  - The same, except don't buy the two stimulants as you've already bought them on Manaan

The detailed route below will describe how to use your stims if you do get the random Alacrity drop.

## Alignment Route

Alignment in KotOR is a sliding scale from 0 to 100, initialized at 50; higher numbers are Light, lower numbers are dark.  Shifts in alignment are determined by a matrix; every alignment-shifting action is classified as Light or Dark, and then assigned a level (either Low, Mid, or High).  The player character (Revan) can either be aligned as Very Dark, Dark, Neutral, Light, or Very Light.  The more opposed your alignment and the action's classification, the more drastic your shift in alignment; for example, a Light-aligned character performing a High Dark action will have a large shift, while a Dark character performing a High Dark action will have a smaller shift.

Here is the alignment route used in the run:

| Aligned | Action | Type | Delta | New |
| --- | :--- | :--- | --- | --- |
| Neutral | Game Start | -- | 50 | 50 |
| Neutral | Save the Sullustan informant | Low Light | +2 | 52 |
| Neutral | Persuade the drunks not to fight | Low Light | +2 | 54 |
| Neutral | Threaten Janice Nall to get T3 | Mid Dark | -4 | 50 |
| Neutral | Kill Komad Fortuna | Low Dark | -2 | 48 |
| Neutral | Tell Shaardan not to kill the hopefuls | Low Light | +2 | 50 |
| Neutral | Try to Persuade Shaardan to spare the hopefuls | Low Light | +2 | 52 |
| Neutral | Succeed in Persuading Shaardan | Hardcoded | +3 | 55 |
| Neutral | Persuade Yuthura to enter the Sith Academy | Low Dark | -2 | 53 |
| Neutral | Snitch on Kel Algwinn to Uthar Wynn | Hardcoded | -5 | 48 |
| Neutral | Kill Yuthura Ban in the Tomb of Naga Sadow | Mid Dark | -4 | 44 |
| Neutral | Persuade Carth not to kill Saul | Low Light | +2 | 46 |
| Neutral | Profess your faith in Bastila on Lehon | Low Light | +2 | 48 |
| Neutral |  | Low Light | +2 | 50 |
| Neutral | Stay true to the Light Side on Lehon | High Light | +6 | 56 |
| Neutral |  | Highest Light | +10 | 66 |

*Snitching on Kel Algwinn is for some reason hardcoded to always give -5 alignment; similarly, rescuing the hopefuls from Shaardan is hardcoded to give +3 alignment.*

By delaying the placement of the Solari crystal until after Lehon, we're able to streamline the alignment route as much as possible.  In particular, we're able to:

 - Skip giving credits to the beggars in the Undercity
 - Skip rescuing the Duros from the Sith Base
 - Side with Uthar and kill Yuthura in the Tomb of Naga Sadow
 - Kill Komad Fortuna before the bantha escort to avoid talking with him after the escort

Each light side action we do is actually the fastest option at that point; every single one comes from just mashing the conversation that you're in, instead of going out of our way to avoid the light side points.  It's possible to equip the Solari crystal after Lehon as long as you stay true to the light side and are at either exactly 40 alignment, or 42 alignment or higher going into the Bastila fight.

## Route Overview

The order in which we visit planets is as follows:

Taris -> Dantooine -> Manaan -> Tatooine -> Korriban -> Leviathan -> Kashyyyk -> Unknown World -> Star Forge

The reasoning for the middle planets:

- Manaan is done first to gain a lot of XP and credits without actually having to kill anything ourselves, since we're pretty underpowered after leaving Dantooine.
- Kashyyyk is done last because you can skip the Star Map computer's quiz if your identity has already been revealed.  We also don't need Jolee for the Leviathan rescue, since Canderous is fast enough.
- Tatooine is done second so we can bring party members to the Eastern Dune Sea and not have them get caught up on either Calo or Bandon.  This planet used to be third and the Eastern Dune Sea done alone, which cost time both in the fight and in movement.  However, not having Knight Speed makes the Sand People Chieftain slightly slower and significantly more dangerous.
- Korriban is done third; we used to do it second so that we could quickly Return to the Ebon Hawk after getting the Star Map without Bandon being in the way.  However, it's possible to kill Darth Bandon while a party member (Juhani) runs over to Lashowe to trigger that fight, warping the party over.  This allows for a fast return to the Ebon Hawk after the Star Map with minimal time loss, even as the third planet.  By doing Korriban third, we also have Knight Speed for all the fights here (Bandon, Lashowe, and Yuthura).

## Detailed Route

This section will describe all the actions you'll need to take for the Any% Glitchless run.

Notation:
- `Level ups are highlighted in code block`
- *Inventory/Equipment changes are highlighted in italics*
- **Item Upgrades at a workbench are highlighted in bold**
- `Shopping trips are highlighted in large code blocks`

Conversation Notes: 
- If no conversation choices are specified, spamming will work (this chooses all 1 options).
- A ... indicates a break in the conversation, such as changing who you're talking to or having to talk to the NPC again
- An X indicates a variable answer, such as in reciting the Sith Code.
- A #xY indicates repeat that option Y times, as in Gadon Thek's first conversation.

**Jump to a Section:**
- [Endar Spire](#endar-spire)
- [Taris 1](#taris-1)
- [Taris 2](#taris-2)
- [Dantooine](#dantooine)
- [Manaan](#manaan)
- [Tatooine](#tatooine)
- [Korriban](#korriban)
- [The Leviathan](#the-leviathan)
- [Kashyyyk](#kashyyyk)
- [Lehon](#lehon)
- [The Star Forge](#the-star-forge)

## Endar Spire

### Pre-Run Setup

- Set these Options:
  - Ensure V-Sync is ON
  - Ensure Auto-Level is OFF in the Gameplay Menu
    - We need to manually level Bastila to 4 to get Burst of Speed for the end of Taris
  - Optionally, make sure you have no saved games
- Character Creation:
  - Male/Female Scoundrel - Custom Character
  - Str to 18, Dex to 10, Con to 12, Int to 14, Cha to 10
  - Computer Use to 2, Demolitions, Stealth, Persuade, Security to 4, Treat Injury to 2
  - Initial Feat: Flurry
  - Pick a good name!
- Timer starts when you hit Play!

### Endar Spire

- Trask talks to you (spam)
- Loot footlocker (+1 Computer Spike; 1 Total)
- *Equip MC: Clothes or Short Sword*
- Talk to Trask
- Switch to Trask and open door
- Switch back to Trask use security on door
- *Equip Trask: Offhand Blaster Pistol*
- Kill two Sith Soldiers
- Loot footlocker in next room
- Cutscene of Sith vs. Republic
- Kill front three Sith Soldiers with frag grenade
- Jedi vs. Sith cutscene
- Loot Jedi for Vibration Cell/Adrenal Strength
- Kill two Sith soldiers
- Kill front two Sith soldiers on bridge
- `Level to 2: Save Skills, Two-Weapon Fighting`
- Watch poor Trask sacrifice himself
- **Make a Hard Save in a New Slot, then Load the Hard Save**
  - This enables [Duration Glitch](<../Techniques/Glitchless Tricks#duration-glitch>) for the start of Taris
- Enter Starboard Section

### Starboard Section
- Loot footlocker in Terminal Room (+5; 6 Spikes)
- Hack terminal console: 2,3 (-4; 2 Spikes)
- Loot Sith Commander for Prototype Vibroblade
  - Note whether or not you have an Adrenal Alacrity; if so, Zelka can be skipped
- Carth talks to you
- Take Escape Pod to Taris

## Taris 1

### Upper City

- ***Conditional** - If you got an Adrenal Alacrity on Endar Spire:*
  - *Stims: Use stim hotkey to use Adrenal Alacrity on MC before vision CS*
- Carth talks to you: 1,1,1,5,3
- Loot footlocker (+2; 4 Spikes)
- *Equip MC: Combat Suit, Prototype Vibroblade Mainhand, Vibroblade Offhand*
- Exit the apartment
  - *Party: No change when prompted*
- Use a Frag Grenade on the Sith Commander (may have to attack him too)
- Loot the backpack
- Larrim accosts you: 1,2,4 (+1; 5 Spikes)

```
SHOPPING TRIP: Larrim
- SELL ALL EXCEPT:
  - Medpacs
  - Computer Spikes
  - Any Grenades
  - Any Stims
- BUY:
  - 1x Computer Spike
  - 1x Sonic Grenade
  - 2x Concussion Grenade
  - 1x Frag Grenade
  - 1x Battle Stimulant
- End: ~222 Credits
```
- ***Conditional** - If you already used Adrenal Alacrity:*
  - *Stims: Use Strength, Stamina, and Battle Stimulant on MC*
- Exit to Upper City South
- Run towards statue at the end of the walkway
- ***Conditional** - If you didn't get Alacrity from Spire:*
  - Activate Solo Mode
  - As MC, click on Medical Clinic door
  - Swap to Carth and click on Upper City North door
  - Swap to MC and talk to Zelka: 5
    - `Buy: 4x Adrenal Alacrity (End: 22 Credits)`
  - *Stims: Use one of each stim on MC, Alacrity on Carth*
  - Run MC close enough to Carth, then swap and enter Upper City North
    - You need to be about two floor tiles from the fountain
- *Otherwise, if you've already used all four stims and can [skip Zelka](#skipping-zelka):*
    - Run straight from South Apartments to Upper City North and enter
    - *Skipping Zelka saves 10-11s, but only if you already used an Alacrity from Spire*
- After entering Upper City North, run straight across to enter North Apartments
- Run left until Sith soldiers accost you (+2 LSP; 52 total)
- Kill three Sith soldiers without entering the apartment
  - If you enter the apartment, you'll have to talk to the alien
- Loot corpses for Sith Uniform, grenades, and stims
- ***Conditional** - If Carth doesn't have Alacrity on:*
  - *Stims: Use Alacrity on Carth*
  - At this point, MC should have all four stims active and Carth should have Alacrity
  - All stims should be [Duration Glitched](<../Techniques/Glitchless Tricks#duration-glitch>) until the end of Taris unless a character dies
- *Party: Remove Carth*
- Exit the apartments
- Drunks accost you (+2 LSP; 54)
- *Equip MC: Sith Armor*
- Sith Sentry talks to you
- Enter the Lower City

### Lower City

- *Party: Add Carth*
- *Equip MC: Combat Suit*
- `Level to 3: Save Skills (granted Sneak Attack II)`
- After CS, defeat the Vulkar patrol with MC
  - Queue Critical Strike on each enemy
  - Flurry can be used instead but it's more inconsistent; the chance to hit is just 40% mainhand and 30% offhand
- Swap to Carth and run towards Bek Base while MC battles the Vulkars
- Click on Bek Base door with Carth and lookout accosts you
  - This warps MC to the Bek Base
- Cancel combat and enter the Bek Base as MC
- Activate Solo Mode and open first door with MC
- Swap to Carth and open door to Lower City
- Swap to MC and talk to Gadon Thek: 1x10,3,2
  - Spam through Zaerdra's interruption before
- Run MC close enough to Carth, then swap and exit to Lower City
- *Party: Remove Carth*
- Watch Canderous cutscene
- Enter the Undercity (spam through Sith soldier's interruption)

### Undercity
- Beggars accost you: 3 ... 1,4
- Hug the left side of the left ramps to skip Igear's interruption
- *Party: Add Carth*
- Run forward to watch Hendar run
- Kill the rakghoul
  - MC should let the rakghoul run past them, then turn and use Critical Strike from behind for Sneak Attacks
  - Flurry can be used instead; it has higher damage potential but higher variability, so Critical Strike is more consistent
  - MC may want to bump the Rakghoul after round one, or it could action cancel you on round two
  - Carth uses Power Blast from close range to get the +10 Close Proximity attack bonus
  - This fight should be 2 or 3 rounds
- Run towards Lower Sewers until Mission accosts you
- *Party: No change when prompted*
- Enter the Lower Sewers

### Sewers

- Open the first door, then activate Solo Mode
- As MC, run forward towards Rakghoul group, then throw a frag grenade to hit as many as possible
  - The Rakghoul Fiend will always survive and has a 40% chance to save against the grenade
  - The normal Rakghouls will die to the frag unless they hit their 40% chance to save
- Swap to Carth and go through right hand door, then run up ramp and click door on right
- Swap to MC and click left door to force field
  - If the rakghouls are not dead yet, try to finish them off quickly
- Swap to Carth and click on Zaalbar's cell door
- *Party: No change when prompted*
- Use terminal to have Mission deactivate force field
- Enter the Upper Sewers
- *Party: Remove Mission*
  - ***Optional:** Return to Hideout, then Transit Back to heal fully while removing Mission*
- Run through left tunnel first, then right tunnel
- Loot the pile of bones in the rancor room (+1; 6 Spikes)
- Juke past the rancor and enter the Vulkar Base
  - Try to run always at a 90 degree angle from the rancor's pursuit
  - You probably want to manually safety save before trying this trick

### Vulkar Base

- Turn right and ignore patrol droid
- Defense turret skip
  - Open door to elevator area
  - Make a manual safety save
  - Stand in doorframe corner near terminal and make a manual save
  - Pause the game, then queue 1-2 concussion grenades on the center turret
    - If the first concussion grenade stuns all three turrets (21.6% chance) then you can save the second one for the Assault Droid later 
  - Unpause; if any turret remains unstunned after both grenades, load the safety save and try again
  - If all three turrets are stunned, take the elevator to the Garage
  - There is a 59.6% chance to stun all three turrets after *both* grenades.  Good luck!
  - You MUST stun all three turrets, since we will be leaving this way
- In the garage, take hallway on right and last door on right
- Loot garage head's desk and supplies for passcard and Computer Spikes (+2; 8 Spikes)
- Return to the main room then turn right down the central hallway and left at the end
- Open the last door on the left and immediately use a medpac if you aren't at full health
- Kandon Ark confronts you: 2,2,2
- Get the swoop accelerator
  - Kandon and his goons can deal a lot of damage, so watch your health here and medpac as needed
- Return through central hallway to elevator to main base
- Exit the Vulkar Garage
  - With the new Save/Load on Endar Spire, these turrets should never instantly kill you as you're leaving
- Take first door on right, first door on right, then exit the Vulkar Base

### Rescuing Bastila

- Enter Javyar's Cantina
- Return to Hideout, then immediately Transit Back
  - This sets the transit point for a Transit Warp later
- Exit cantina and enter the Hidden Bek Base
- Talk to Gadon Thek
- Successfully win the swoop races
  - Talk to the Race Coordinator before each one
  - Whatever time you get on the first race will be beaten by 0.25s by Redros
  - You'll need to beat Redros's time on the second race, but your swoop accelerates faster
- Kill Brejik using grenades
  - Start by running a little bit away so you don't get hit by your own grenades
  - Throw a Poison Grenade first, then a Sonic Grenade, then a Frag Grenade
  - Brejik is guaranteed to get Poisoned, and has a 50% chance to save vs. the Sonic Grenade
  - Brejik has a 70% chance to save vs. the Frag unless he failed the Sonic save; then the -6 Dex from the Sonic makes his Frag save 55%
  - He has really high defense, making a basic attack only 15%/5% to hit, so grenades are the best option
  - After you throw the last grenade, kill Redros with Flurry and finish off Bastila's guards if necessary; let the Poison finish Brejik unless he's the last one standing
  - This fight can be 3 rounds if Brejik fails both saves on the Sonic and Frag, or as bad as 8 rounds if he saves both
- Loot Brejik's corpse
- Talk to Bastila
  - This takes you back to the apartment hideout

## Taris 2

### Upper City

- Carth/Bastila talk to you: 1,1,1,1 ... 2
- Exit apartment
  - *Party: Add Bastila when prompted*
- Twi'lek accosts you
- Transit Back to Javyar's Cantina
- Activate Solo Mode
- Run into the cantina until Canderous accosts you
- `Level Bastila to 4: Cha to 16, Save Skills, Burst of Speed`
- *In Options -> Gameplay, turn Auto-Level ON so party members will automatically level*
- Exit the cantina with Bastila
- *Force: Burst of Speed on Bastila*
- As Bastila, enter Upper City North
- Activate Solo Mode to leave MC at elevator
- As Bastila, enter Droid Shop and talk to Janice Nall: 2,2,1 (-4 DSP; 50)
  - *Party: Add T3 when prompted*
- Deactivate Solo Mode, swap to Bastila and click on elevator
  - Mash conversation
  - This warps all party members to the elevator
- Swap to Bastila and run to Sith Base; make sure T3 and MC follow
- Swap to T3 and unlock Sith Base
- *Party: Remove Bastila, Add Zaalbar*
- ***Recommended** Equip MC: Brejik's Armband*
- ***Optional** Equip MC: Brejik's Belt*
- *Equip Zaalbar: Mission's Vibroblade Mainhand*
- *Stims: Adrenal Strength on Zaalbar*
- Enter Sith Base

### Sith Base

- Secretary accosts you: 2,1
- Activate Solo Mode
- As MC, click on door at far end of first hallway
- As T3, hack the desk console to kill Sith soldiers: 1,1,2,2 ... 2,8,3 (-3; 5 Spikes)
- Swap to MC and deactivate Solo Mode
- One Flurry on each patrol droid; Zaalbar and T3 should finish them off
- Kill patrol droid in next hallway as MC
- *Equip MC: Remove Vibroblade Offhand*
  - The Assault Droid and Sith Governor have high enough defense that we need to remove our Two-Weapon Fighting penalty for any consistency
- Loot footlocker in barracks for Sith passcard
- Open door to start Assault Droid fight:
  - Pause after CS to set up the Concussion Grenade(s)
  - T3: Concussion Grenade on Assault Droid
    - If you have extra Concussion Grenades, throw one with Zaalbar as well
  - Unpause while queueing the rest of the attacks
  - MC: Flurry on Assault Droid
    - If MC is Stunned, use [Stunned Combat](<../Techniques/Glitchless Tricks#stunned-combat>) to attack with Flurry
  - Zaalbar: Improved Power Strike on Assault Droid
  - T3: Use Shield Disruptor on Blaster Turrets
    - Two hits are enough to kill one turret, but don't use more than 3 Shield Disruptors on them total
    - When the Assault Droid is destroyed, MC and Zaalbar can finish up the Blaster Turrets
- Enter the elevator
- Sith Governor fight:
  - Pause immediately after the CS
  - MC: Poison Grenade, then Flurry
  - T3: Shield Disruptor, Stun Ray x3
  - Zaalbar: Sonic Grenade, then Improved Power Strike
  - Unpause to start the fight and swap to T3
  - Make sure T3 keeps up with the Stun Ray until the Governor is stunned
  - Once the Governor is stunned, T3 can loot the strongboxes early
- Loot both strongboxes and Sith Governor's corpse for Launch Codes (+3; 8 Spikes total)
- Exit the Sith Base

### Leaving Taris

- *Party: Remove Zaalbar and T3, add Bastila*
- As Bastila (with Burst of Speed), run to Lower City Elevator and open door
- *Party: Remove Bastila*
  - There are too many Vulkars in Lower City for party members to follow consistently
- Enter the Lower City, then enter Javyar's Cantina 
- Talk to Canderous: 2, 1
  - *Party: Add T3 when prompted*
- Cool cutscenes
- In Davik's Estate, take door on right and door immediately on left
- Once in room with guards, swap to T3
- As T3, hack security terminal: 1,2,2,4,3 (-8; 0 Spikes)
  - This must be done as T3 or you won't have enough spikes
- Switch back to MC and enter the hangar
- Calo/Davik fight:
  - This fight ends if we get Calo to <50% Vitality
  - Pause to setup the fight
  - MC: Frag Grenade x2 on Calo
  - T3: Shield Disruptor x3 on Calo
    - He will only use 2 unless Canderous misses both Power Blasts and Calo saves vs. at least one Frag
  - Canderous: Power Blast x2 on Calo
    - If you have extra Frags, have Canderous throw them before his Power Blasts
  - Unpause and let the fight play out; it's about a 50-50 chance of being 2 or 3 rounds
- Loot Davik's corpse for stuff to sell
- Board the Ebon Hawk
- Watch cool cutscenes
- Destroy the Sith fighters

## Dantooine

### Jedi Enclave

- ***Conditional** - If you skipped Zelka and have 2 Alacrities or more, or shopped at Zelka and have 3 Alacrities or more:*
  - *Stims: Adrenal Alacrity on MC*
  - If you shopped with Zelka, you should always have 3 Alacrities at this point
  - If you skipped Zelka, you won't have any Alacrities here unless you got another random drop on Taris (~9% chance)
- Follow Bastila to the Jedi Council
- *Equip MC: Unequip Combat Suit*
- Belaya accosts you
- Speak with the Council
- Watch the dream cutscene
- Carth accosts you
  - *Party: No change when prompted*
- ***Conditional** - If you skipped Zelka and have any Alacrities, or shopped at Zelka and have 2 Alacrities or more:*
  - *Stims: Adrenal Alacrity on MC*
- Speak with the Council again
- Go get a sandwich during the training montage
- Talk to Master Zhar after the CS: 1,1 ... 1,1,6,3,2,6,4
- Talk to Master Dorak to become a Jedi Guardian
- `Level to 4: Save Skills, Improved Two-Weapon Fighting, Affect Mind and Stun Droid`
- `Level to 5: Save Skills, Burst of Speed`
- `Level to 6: Persuade to 9, TI to 9, Save Rest; Improved Flurry, Force Valor`
  - See [Force Power Options](#force-power-options) for possible tweaks to these level ups
- Talk to Master Zhar twice
- *Equip MC: Strength Gauntlets and Double-bladed Lightsaber*
- Talk to droid to unlock door
- *Force: Cast Force Valor* right before you...
- Exit the Enclave
  - This applies [Duration Glitch](<../Techniques/Glitchless Tricks#duration-glitch>) to both Speed and Valor

### Dantooine Savannah

- Jon accosts you
- Run/Force Jump to eastern entrance to Matale Grounds
  - You're not strong enough to one-shot the kath hounds so don't worry about Force Jump Chains
- Run through Matale Grounds to Grove
- *Stims: Adrenal Strength on MC*
- Juhani fight:
  - Round 1:
    - If you took Stun early, use Stun on Juhani (25% chance to Stun)
    - If not, use an action cancel and Critical Strike Juhani (17.5% chance to Stun)
  - Round 2+:
    - If Juhani is Stunned, use Improved Flurry until she gives up
    - If Juhani is not Stunned, use bumping to displace her until you can use Critical Strike again for Sneak Attacks
      - If you used Stun to drop Juhani's AC, you should use Critical Strike just once to try to Stun again, then use Improved Flurry to maximize attacks against the lower AC
      - If you didn't use Stun, keep up Critical Strike until Juhani is Stunned or her health is under half, then switch to Improved Flurry
- Juhani accosts you and is redeemed
- Return to Ebon Hawk
- *Force: Cast Burst of Speed*
- Talk to Master Zhar, then Master Vandar
- *Party: No change when prompted*
  - We aren't allowed to remove Bastila yet...
- *Party: Remove Bastila*
  - ...so we have to do it here
- Transit Back to Grove
- Run/Force Jump to Matale Grounds
- Force Jump to kath hounds on right and loot Casus Sandral's corpse
- Run/Force Jump to Ruins
- As you approach the ruins, hug the right wall to avoid a short CS
- Enter the Ruins

### Ancient Ruins

- *Party: Keep Bastila, Add T3 when prompted*
- Rakatan Droid accosts you
- Activate Solo Mode
- The party splits here; for efficient movement, intersperse the following actions
- As MC:
  - Open right hand door
  - Force Jump to droid
  - Interact with console: 3,5,3,3,3,4
- As Bastila:
  - *Force: Cast Burst of Speed*
  - Open left hand door
  - Interact with console: 3,5,3,1,1,3
- As T3:
  - Move towards center door, just on the other side of the Rakatan Droid
  - Once MC and Bastila have finished their consoles, approach the door to open it
  - Deactivate Solo Mode and enter the Star Map room
- Star Map: Dantooine
- Loot Nemo's corpse for Sigil Crystal and Jedi Knight Robe
- Leave the ruins
  - Your party will sometimes have difficulty following you out, so keep an eye on them
- *Party: Remove Bastila and T3*
  - This avoids Bastila's party interruption in the Enclave
- Return to Ebon Hawk
- Speak with the Council
- RtEH then Transit Back and board the Ebon Hawk
- **Upgrade Double Lightsaber: Add Sigil**
- *Equip MC: Jedi Knight Robe, Verpine Headband*
- ***Recommended** Equip MC: Echani Shield*
  - This gives extra protection during three key areas on the next three planets
- Fly to Manaan (down 3)

## Manaan

### Ahto City

- Exit the Ebon Hawk
  - Start running down the hall by holding run backwards, then run back left just after the load
  - Mash Bastila's interruption
  - *Force: Cast Burst of Speed*
  - Mash Zaalbar's interruption
  - *Party: Add T3 when prompted*
    - Bringing a party member skips a Selkath announcement when leaving the docking bay
    - Using T3 also avoids any additional interruptions for party dialogue
- Republic soldier conversation: 4
- Talk to Selkath Merchant for shopping: 3
  - See [Skipping Zelka](#skipping-zelka) for a modified shopping trip if you were able to skip Zelka
  
```
SHOPPING: Selkath Merchant
- BUY:
  - 1x Hyper Battle Stimulant
  - 2x Hyper-Adrenal Strength
  - If you have Affect Mind, buy a third Hyper-Adrenal Strength
- End: ~12 Credits
```

- Exit to West Central Ahto City
- Talk to Port Authority
  - *With Affect Mind:* 1,2
    - If you have >=100 Credits, this is 1,3, but you should always have <100 Credits after shopping with the Selkath
  - *Without Affect Mind:* 1,1
- Run to East Central
- Talk to Roland Wann: 3, 1spam
- Return to the Ebon Hawk
- When in the hallway again, *Party: Remove T3*
- Open docking bay at far end of hall
- Selkath announcement interrupts you
- *Force/Stims: Cast Burst of Speed and Force Valor, use Alacrity*
- *Shield: Use Echani Shield if you equipped it*
- Use shuttle to travel to Sith Base

### Sith Base

- Take right door
- Rude secretary sics the security on you
- Ignore them, take right door, left door, left door
- Loot droid for Data Module
  - There is a small chance you could be stunned here; if so, just use medpacs and/or your Echani Shield to tank the damage
- Return to security, Force Jump to secretary, and exit the base
  - ***Optional:** Use Flurry to kill a War Droid before leaving*
    - This removes any reliance on random Sand People kills with Force Jump to reach level 9 on Korriban
- Get arrested and first trial: 1 ... 1,1,1,1,1,3,1 ... 1,1,1
- Run through West Central to East Central
- Talk to Roland Wann
- *Party: Add Juhani and Zaalbar*
- *Force: Cast Force Valor* just before you...
- Take submersible underwater

### Hrakert Rift

- Mercenary accosts you
- Loot equipment pack in first hallway for credits and a Thermal Detonator
- Take first two right turns, then go straight through several doors
  - Damage the first patrol droid with a Force Jump
  - Juhani and Zaalbar should finish off that one and hopefully kill the second before you reach the airlock
- Get Environment Suit from floor
- Loot footlocker in next room for Sonic Emitter
- Use the airlock to exit to the underwater section
- `Auto-Level to 7` to trigger [Auto-Level Attributes](<../Techniques/Glitchless Tricks#auto-level-attributes>)
- Survivor accosts you and then doesn't survive
- Underwater walk (use Emitter to kill Firaxan sharks)
  - ***When using the Emitter to kill Firaxan sharks, it is faster to go into the inventory menu, use the Sonic Emitter there, and exit the menu; this skips the animation of the Sonic Emitter***
- Reenter station through lefthand door
- *Force: Cast Burst of Speed*
- Loot footlocker ahead for Computer Spikes (+4; 4 Spikes)
- *Force: Cast Force Valor*
  - This is required to guarantee passing the following Persuade check (50% chance without)
- Convince scientists to lower force field:
  - Click force field to speak with scientists
  - Immediately use the force field again to Persuade them to lower it
    - It helps to mash default action during the first conversation
- Loot footlocker in corner of next room for more Computer Spikes (+2; 6 Spikes)
- Exit to underwater section
- Hack kolto control: 1,2,4,2,5,4,5,2,5
- Star Map: Manaan
- Reenter station through righthand door
- Run/Force Jump to submersible
  - Try to ensure the last patrol droid is killed by using Flurry on it once as you pass by
  - Juhani and Zaalbar should be able to finish it off before you reach the door
- Mash Calo's conversation and Force Jump past him
- Return to surface in submersible
- Roland Wann accosts you
- `Level to 8: STR to 21, Persuade to 11, TI to 10, Disable Droid`
  - If you don't have level 8 available you may not reach level 9 on time
  - If you're short, try to ensure you kill some random Sand People with Force Jumps on Tatooine
- Leave Embassy to get arrested: 2
- Get banned during the trial:
  - *With Affect Mind:* spam 1; this tries to Force Persuade the judges, getting you banned from Manaan
  - *Without Affect Mind:* 2,3,3,3,3
  - Getting banned puts you right in the Ebon Hawk's cockpit, ready to fly away
  - Manaan is a dumb planet anyway.  Stupid Selkath.
- Fly to Tatooine (up 2)

## Tatooine

### Anchorhead

- Exit the Ebon Hawk
  - Mash Bastila's interruption
  - *Force: Cast Burst of Speed*
- *Party: No change when prompted*
- Czerka Officer accosts you: 1,1,5
- Speak to Mic'Tunan'Jus Orgu
  - See [Skipping Zelka](#skipping-zelka) for details on a slightly different shopping trip

```
SHOPPING: Mic'Tunan'Jus Orgu
- SELL ALL EXCEPT:
  - Advanced Medpac(s)
  - Computer Spikes
  - Thermal Detonator
  - Stims
- BUY:
  - 4x Life Support Pack
  - 1x Nerve Amplifier Belt
  - 1x Adrenal Alacrity (if you didn't skip Zelka)
  - 1x Adrenal Stamina (if you didn't skip Zelka)
  - 1x Bantha Fodder
- End: ~4365 Credits
```

- *Equip MC: Nerve Amplifier Belt*
- Stupid jerk gives you gizka. Damn gizka.
- Exit to Anchorhead
  - ***Optional:** Make a Hard Save, close the game completely and reopen it to clear memory leaks*
  - If you don't do this, the game can eventually fail to load textures, causing them to appear as white polygons and the game to crash at the next save/load screen
  - As a rule of thumb, if you can get times that are sub 2 hours, you can skip this, but it can be risky!
- Enter Czerka Office
- Duros miner accosts you
- Talk to the Czerka Officer: 1,1,1,3,2
- *Stims: Use one of each stim, strongest version you have*
  - Using these here gives you higher saves against the Dark Jedi in Anchorhead
- Exit the office
- Duros miner accosts you again: 3,3,3
- Dark Jedi ambush you; ignore them
- Speak to the Gate Guard to exit to Dune Sea
  - *Force: Cast Force Valor before leaving to [Duration Glitch](<../Techniques/Glitchless Tricks#duration-glitch>) it*

### Dune Sea

- Angry wife accosts you
- Run to right side of Sandcrawler
  - Stay close to the right side or you'll trigger a Sand People ambush
- Force Jump to front center Sand People Warrior near entrance to Sand People Territory
  - Thanks to Sneak Attack, this should be a one-shot kill
- Loot him to get Sand People Outfit
- Enter Sand People Territory 
- *Equip MC: Sand People Outfit*
- Run to Sand People Enclave
  - Running diagonally to the left for a little bit at the start avoids a Sand People ambush; if you trigger it, just ignore it
- As the enclave door is opening:
  - *Equip MC: Jedi Knight Robe*
  - *Force: Cast Force Valor*
  - *Shield: Use Echani Shield if you equipped it*
  - *Medpacs: Heal to full using Advanced Medpac(s)*
  - Enter the Sand People Enclave
- Run/Force Jump to the Chieftain
  - You can pick up at least one kill here if you're short on XP
- Kill the Chieftain and loot his corpse for Eastern Dune Sea Map
  - You can use Critical Strike to try to Stun him, but his AC is low enough that Flurry is usually fine on its own
  - This is usually three rounds, but could be two or four with unusually good/bad luck
  - Watch your health in this section, as it can drain very fast; use any medpacs needed
- Run/Force Jump to Enclave Exit
  - You can pick up another kill here if you're short on XP
- Run/Force Jump towards Eastern Dune Sea
  - This is a possible spot for a Force Jump Chain and you can usually pick up 1-2 extra kills if needed
- At Eastern Dune Sea entrance:
  - *Party: Add Bastila and Juhani*
  - *Force: Cast Burst of Speed and Force Valor*
  - *Force: Cast Burst of Speed as Bastila and Juhani*
- Enter the Eastern Dune Sea

### Eastern Dune Sea

- Run towards Komad until the desert beacons narrow
- Activate Solo Mode and click a beacon with MC
- Swap to Bastila and click the leftmost dewback
- Swap back to MC and run towards Komad until Krayt Dragon gets a snack
- Talk to and kill Komad Fortuna: 1,2,1,1,2,3,1,2 (-2 DSP; 48)
  - Use Improved Flurry to kill him; it's typically a 2-round fight
- Swap to Bastila and deactivate Solo Mode
- As Bastila, talk to banthas to lure them with fodder
- Elite Sand People Fight:
  - Pause immediately after the cutscene
  - Bastila: Stun on leftmost Warrior, Thermal on warrior to his right, Stun on that warrior, then Stun on leftmost warrior
  - Juhani: Stun on middle warrior, Stun on rightmost warrior, Basic Attack (to Force Jump) on rightmost warrior
  - MC: Run to Flurry the middle warrior until dead, then Force Jump to rightmost warrior and Flurry until dead, then Force Jump to remaining pair and finish them off
  - While MC finishes the last two warriors, swap to Bastila (or if she is entangled, Juhani) and run to banthas
  - Once the last warrior dies, talk to the banthas to lure them with fodder again
- Kill four Elite Sand People Warriors with Force Jump and Flurry
- Lure banthas with fodder again
- As Bastila or Juhani still, loot the Krayt Dragon for Krayt Dragon Pearls
- ***Recommended:*** Loot the corpse on the right side of the Krayt cave for a Nerve Amplifier Belt for Carth
- Star Map: Tatooine
- Run back to the Dune Sea and Return to the Ebon Hawk
- Board the Ebon Hawk
- **Upgrade Double Lightsaber: Add Krayt Dragon Pearl**
- Fly to Korriban (down 3)

## Korriban

### Dreshdae

- Exit the Ebon Hawk
  - Mash Bastila's interruption
  - *Force: Cast Burst of Speed*
- *Party: No change when prompted*
- Run towards door until Port Authority accosts you: 1,1,3,2
- Intervene with Shaardan: 1,1,1 (+7 LSP; 55)
- Lashowe accosts you:
  - As a Male MC, mash this convo
  - As a Female MC, convo is 1,4,1,1,1,1
    - This tells Lashowe a joke and makes her Persuade check inside the academy a guaranteed Medium check instead of a 75% Hard check
- Speak to Czerka Shopkeeper

```
SHOPPING: Czerka Shop
- BUY:
  - 10x Life Support Packs
  - 2x Hyper Battle Stimulant
  - All other Echani/Hyper Stims
  - If you're short on credits (<4400 when you start), cut one of the Hyper Battle Stimulants
- End: ~100 Credits
```

- Leave Dreshdae, talk to guard outside academy, then re-enter Dreshdae
- *Party: Add Juhani and T3*
- Talk to Yuthura: 3,4,2,2,1,1
  - This is now a guaranteed Persuade check at the cost of (-2 DSP; 53)

### Gaining Prestige

- Speak with Uthar Wynn and students
- Run forward until Yuthura accosts you: 1,1,1,1,4,2,7,5
- Talk to Kel Algwinn
- Talk to Lashowe:
  - As a Male MC: 1x7, 3, 4
  - As a Female MC: 1x9, 4
- ***Conditional** - If you do not have level 9 available yet:*
  - Talk to Uthar: 3,1,3,1,3,3,2,3,4,4,X,3
    - The X is a variable answer based on one of three questions he asks after the Sith Code
    - Answers are:
      - It is our passion that fuels the Force: 1. True
      - There is nothing worse than love: 2. False
      - Victory by any means is desirable: 2. False
    - This should get you enough XP to reach level 9
- `Level to 9: Persuade to 12, TI to 11, Master Two-Weapon Fighting, Knight Speed`
  - Take all level ups after this one as soon as you can
- At the exit to Valley of the Dark Lords:
  - *Stims: Hyper Stim Suite with Echani Stim on MC*
  - *Force: Cast Knight Speed and Force Valor*
  - *Force: Cast Burst of Speed as Juhani*
  - *Shield: Use Echani Shield on MC if you have it, use T3's droid shield*
- Once everything is ready, exit to the Valley
- Darth Bandon accosts you
- Darth Bandon fight:
  - Pause immediately after the cutscene to setup the fight
  - As MC: Force Jump to thug to left of Bandon, then Flurry x3 on Bandon
  - As T3: Shield Disruptor x4 on Bandon
  - Swap to Juhani and unpause
- As Juhani, Run/Force Jump over towards Lashowe while MC and T3 fight Bandon and his thugs
  - Keep an eye on MC's health; T3 can die without issue
  - The XP pop-ups will alert you when Bandon and his thugs die
- As Juhani, approach Lashowe to start the tukata fight
  - This warps MC and T3 over and swaps you to MC
- As MC, kill the Tukatas with Flurry
- Lashowe consults you: 2,3
- Kill Lashowe with Flurry and loot her corpse for Holocron
- *Party: Remove Juhani and T3*
- Return to Academy
  - If Bandon or any thugs are still alive, kill them
  - *Force: Cast Knight Speed* before entering the academy
- Talk to Uthar Wynn:
  - If you haven't talked to him yet: 3,1,3,1,3,3,2,3,4,4,X,3,2,2
    - See above for the variable answers at X
  - If you have talked to him: 3,2,2
  - You snitch on Kel during this convo (-5 DSP; 48)
- Talk to Uthar again: 3
  - *Force: Cast Force Valor before talking to Uthar to [Duration Glitch](<../Techniques/Glitchless Tricks#duration-glitch>) it*

### Tomb of Naga Sadow

- Uthar talks to you in the tomb: 4
- Take right fork and enter door
- Force Jump to rightmost Terentatek and hit lever
- Loot Pillar of Ice
- Loot Skeletal Human Remains for Solari Crystal on way out
- Return to central branch and freeze acid pool
- Star Map: Korriban
- Loot Sith Statue for Sith Lightsaber
- Talk to Uthar and kill Yuthura: 5,2 | 2 (-4 DSP; 44)
- Run/Force Jump back to the academy
  - You can kill shyrack for extra XP to try to ensure level 13 in the endgame
- Once inside the academy, turn around and leave
- *Party: Add Canderous*
- Return to Ebon Hawk
- *Stims: Use Hyper-Adrenal Alacrity on Canderous*
  - This speeds up his prison break segment significantly
- Board the Ebon Hawk
- `Level to 10: Persuade to 13, TI to 12, Master Flurry, Knight Valor`
- Fly to Kashyyyk (up 2)

## The Leviathan

### Detention

- Carth talks to you on the Ebon Hawk: 1,1,3,2
- Saul Karath's interrogation scene
- As Canderous:
  - Run to barracks (take three rights)
  - Loot footlocker for Sith Passcard (+3; 9 Spikes)
  - Return to detention area and activate terminal
- Back as MC, loot rightmost locker to reclaim inventory
- *Equip MC:*
  - *Verpine Headband*
  - *Strength Gauntlets*
  - *Jedi Knight Robe*
  - *Nerve Amplifier Belt*
  - *Double-bladed Lightsaber*
  - ***Optional:** Brejik's Armband*
  - ***Optional:** Echani Shield*
- *Force: Cast Knight Speed*
- Activate Solo Mode
  - Carth and Bastila can engage one of the Sith Troopers, which can cause them to Wire Target on the next deck
- Take the elevator to Bridge: 2
  - *Force: Cast Valor (and Energy Resistance if you took it) before the elevator for [Duration Glitch](<../Techniques/Glitchless Tricks#duration-glitch>)*


### Bridge

*In the bridge section, you have to keep Carth and Bastila close to you in order to leave through the Bridge Storage door.  Do your best to make sure they don't wander off, as that can and will lose you a lot of time.  You can choose to manually save and reload that save; this sometimes helps.*

- Turn right and kill or dodge guard at end
- Continue down hall as it turns; make sure Carth and Bastila are following you here
- Take first left, then quickly bash down armory door
  - If you're too slow, the nearby Sith guard will aggro Carth and Bastila
- Get the Space Suits from the floor
- ***Optional:*** Loot the plasteel cylinder for thermal detonators
- Exit the way through the opposite door of the armory and take the door on the left
- Make a Hard Save before opening the door across the hall
- Run through next room, bash down door, and enter bridge storage
  - If you get stunned or your party wanders off, load the safety save and retry
- Spacewalk to opposite side
- *Equip the party:*
  - *MC: Double-bladed Lightsaber*
  - *Carth: Carth's Blaster Mainhand, Heavy Blaster Offhand, Nerve Amplifier Belt (if you have it)*
  - *Bastila: Chieftain's Gaderffi* 
- *Force: Cast Knight Speed*
- ***Optional:*** Kill the five Sith Soldiers in the first room
  - This safe strat makes leaving the Saul Karath fight more consistent, but wastes 20-30 seconds.
  - You can use Solo Mode to run Bastila to the bridge door while MC and Carth clear out the soldiers, but wait until they're out of combat or you'll mess up the cutscene
- Enter the bridge
- Saul Karath fight:
  - Pause to setup the fight
  - *Stims: Hyper-Stim Suite with Echani on MC*
  - *Shield: Use Echani Shield if you re-equipped it*
  - *Force: Bastila casts Force Valor*
  - As MC, queue a Force Jump to a Dark Jedi
  - If you looted the Thermals in the armory, have Carth and Bastila use them on the opposite side's Dark Jedi/soldiers
  - Have MC take out the Dark Jedi and Saul first, while Carth/Bastila concentrate on the soldiers behind them
  - Keep a close eye on MC's health here, and use medpacs as necessary; you can let Carth/Bastila die
  - Recast Knight Speed when it wears off (you'll be getting only three attacks per round instead of four)
  - Clean up the Sith Soldiers once Saul falls
- Saul Karath dies (+2 LSP; 46)
- Hack bridge terminal: 1,2
  - This can be done during the fight as well
- *Stims: Hyper Alacrity on Carth*
- Run through room and return to the Command Deck
  - If you killed the first five Sith Soldiers, kill the Sith Grenadiers as you go so Carth and Bastila stay with you
  - If you skipped the Sith Soldiers, use Solo Mode to maneuver everyone close enough to the exit to leave
  - Using a Hyper Alacrity on Carth is recommended but not strictly required
  - If Carth or Bastila die too far from the door, you'll have to kill all the Sith soldiers to leave
- *Medpacs: Heal everyone back on the Command Deck*
  - Again, you might want to manually save/load when reaching the main area to help Carth and Bastila stay with you
- Take left path and loop around outside back to elevator
  - You'll encounter 2-3 Sith Soldiers, 2 Dark Jedi, and 3-4 Sith Grenadiers
  - Kill every last one of them and do your best to keep Carth and Bastila with you
- Take the elevator to the Hangar: 3

### Hangar

- Activate Solo Mode
- Run/Force Jump straight through to the Darth Malak CS
- Darth Malak accosts you
- *Force: Cast Valor during the fadeout*
- Plot twist!
- Darth Malak accosts you again: 1,1,1,1,2,1,4,1
- Darth Malak fight, phase one
  - Try to run slightly past him on the right before using Flurry, to get Sneak Attack damage
  - If your stims from the Saul Karath fight wore off, *Stims: Hyper Battle Stimulant on MC*
- After he runs, *Stims/Force: Cast Knight Speed and Knight Valor, Hyper Battle Stim on MC (only if you didn't use one for phase one)*
- Loop through righthand Blast Doors
- Darth Malak fight, phase two
  - Again, try to run slightly past him on the right before using Flurry, to get Sneak Attack damage
- Bastila sacrifices herself sort of
- Leave with Carth through blast doors on left
- Shoot down the Sith fighters
- Talk to the party on the ship


## Kashyyyk

### The Great Walkway

- Exit the Ebon Hawk after the vision CS
  - Strangely miss Bastila's interruptions
  - *Force: Cast Knight Speed*
  - *Party: No change when prompted*
- Janos Wertka accosts you
- Ziagrom accosts you
- Czerka guard accosts you at gate: 4
- `Auto-Level to 11` to trigger [Auto-Level Attributes](<../Techniques/Glitchless Tricks#auto-level-attributes>)
  - Take this level up as soon as you can
- *Force/Stims: Cast Valor (and Energy Res if applicable), use Hyper Adrenal Strength and Hyper Battle Stim on MC*
- Exit to Great Walkway
- Czerka patrol accosts you outside: 5
- Run/Force Jump to Wookiee village
  - Kill the second group of kinrath and the Mykal after them
    - This makes returning with Jolee a little easier
    - While you don't need to kill anything after the Mykal...
  - Try to get Force Jump Chains whenever possible
- Wookiee guard accosts you
- Chuundar conversation
- After being evicted from the Chieftain's Hall:
  - Run towards Great Walkway
  - Return to Ebon Hawk and Transit Back
    - *Party: Add Juhani* while doing this
    - This sets the Transit Point for later
- Exit Wookiee Village
- Activate Solo Mode
- Run/Force Jump past Wookiee Guard and fighting Wookiees to Shadowlands elevator
- Talk to Wookiee at elevator: 2

### Upper Shadowlands

- Activate Solo Mode
- Run/Force Jump forward until Jolee's intro cutscene
- Take left path and speak with Czerka captain: 1,1,1,1,2
  - This will make the Tach in the Upper Shadowlands hostile, allowing you to Force Jump to them
- Talk to first Czerka guard: 1,1,3,1,1
- Hack the sonic emitter next to that guard
- Talk to second Czerka guard: 1,1,1
- Hack the sonic emitter next to that guard
- Swap to Juhani and *Force: Cast Burst of Speed*
- As Juhani, Run/Force Jump towards Jolee
  - Juhani won't kill katarns and doesn't always kill tach, so Force Jump Chains are rare
- Talk to Jolee from a distance and swap to MC before the convo: 1,1,1,1,2,3,1,1,1,1,1
  - *Party: No change when prompted*
  - This keeps MC's position near the Czerka poachers and spawns Jolee there, cutting out a good chunk of running
- Activate Solo Mode
- Run/Force Jump to Force Field: 1,2
  - Try to leave some tach alive so you can Force Jump to them on the way out, but take a Chain if you see one

### Lower Shadowlands

- Activate Solo Mode
- Wookiee/Mandalorian CS
- Run/Force Jump to Star Map Computer
  - ***Optional:** Kill the three Viper Kinrath in the way
    - This makes it easier to return with Jolee
    - The other option is to Force Jump to one, then run through the swoop bike area to the Star Map to try to lure them out of the way
- Deactivate Solo Mode and speak to Star Map Computer: 2
- Star Map: Kashyyyk
- Jolee teleports to you and speaks
- Return to Upper Shadowlands
  - Hug the right wall and take the path under the broken log to try to avoid the kinrath if you lured them
  - If Jolee aggros on them, you'll have to kill them anyway

### Leaving Kashyyyk

- Activate Solo Mode
- Run/Force Jump to Elevator
- Activate Solo Mode in the Great Walkway to leave Jolee at the elevator
- Run/Force Jump towards Landing Pad
- Senni Vek accosts you: 4
  - This warps Jolee to you
  - Deactivate Solo Mode either just before or after this conversation
- Once inside Landing Pad, Transit Back then RtEH and board
- Fly to Star Forge System (Lehon, down 3)
- Two cutscenes
- Shoot down the Sith Fighters
- Talk to party and leave the ship (+2 LSP; 48)
  - *Party: No change when prompted*

## Lehon

### The Rakata

- Run past the initial Rakatan Warriors
  - This can very rarely cause problems triggering the last cutscene when leaving Lehon
  - The safe strat is to kill these Warriors, but this wastes about 15 seconds
  - If you do kill them, the Duros conversation is 1,1,1,2
- Run/Force Jump towards North Beach
- Before entering North Beach, *Force/Stims: Cast Valor, Hyper-Stim Suite with Echani on MC*
  - Using these stims here seems to ease the issues with skipping the first Rakatan Warriors
- In North Beach, Rakatan Warriors accost you
- Speak with The One: 1,1,1,1,1,1,4
- Run to Elder Warrior and talk to him
  - If you run carefully, you can avoid getting into combat and talk to him immediately
  - If someone takes a swing at you, make a big loop around the arena until you're out of combat (your lightsaber will deactivate), then talk to him
- Loot Ship Parts from opposite cell
- Run/Force Jump out of Rakatan Compound
  - This is a haven for Force Jump Chains, so try to get as many as you can
- Run/Force Jump through Central Beach and Temple Exterior to South Beach
- Enter Elder Rakatan Compound
  - RIP Gizka :(
- Speak with Rakatan Elders
- Run/Force Jump to Temple Exterior
- Begin the Rakatan ritual to enter the temple
- Jaw-dropping cutscene!

### Ancient Temple

- Activate Solo Mode
- Run/Force Jump to Temple Catacombs in back
  - If your stims wore off **and you have at least two**, *Stims: Hyper Adrenal Strength and Echani/Hyper Battle Stim on MC*
  - Make sure you save a full set of stims for the Star Forge!
- Kill both guard droids in basement
- Solve floor puzzle with the following path (an H shape, starting from the reset tile)
![An image of the H-shaped solution to the catacombs floor puzzle](/assets/images/imgur-dump/CF497Fm.png)
- Speak to basement computer: 1,1,2,1,2
- Return to main floor
- `Level to 12: STR to 23, Persuade to 14, TI to 13, Weapon Focus: Lightsaber, Force Resistance`
  - See [Force Power Options](#force-power-options) if you're using Drain Life instead of Disable Droid
- Activate Solo Mode
- Run/Force Jump to front of temple and enter Massive Door
- Enter Temple Summit
- *Force: Cast Valor and Energy/Force Resistance (if you have them)*
- Speak to and defeat Darth Waifu
- Choose to remain true to the light side (+18 LSP; 66, Light-aligned)
  - This is faster than the Dark Side ending, solely because we don't have to bring any party members (cough Bastila cough) along on the Star Forge
- Hack computer terminal to lower disruptor field
- Run/Force Jump back to Ebon Hawk
- The party all talks to you at once
  - If the screen goes black and the cutscene doesn't start, you'll need to reload an Autosave
  - This only happens if you skip the first Rakatan Warriors on Lehon, and it's rare if you use stims before North Beach as above
- **Upgrade Double Lightsaber: Replace Sigil with Solari**
- Repair hyperdrive on the Ebon Hawk
- Fly to the Star Forge (down 1)

## The Star Forge

### Deck One

- Exit the Ebon Hawk
  - *Force: Cast Knight Speed (and Energy Res if you have it)*
- Two exciting cutscenes
- After the cutscene with Malak and his lackey, *Stims: Hyper-Stim Suite with Echani on MC*
- Go right, then left, Force Jumping to assault droids where possible
  - For the set of droids after the plasma explosion, just run into the center of them to cause them to step back and let you pass
- Jedi triplets perish in dramatic cutscene
- *Force: Cast Knight Speed, Valor* right before entering Deck 2
  
### Deck Two

- Another exciting cutscene
- *Force: Cast Force Resistance (if you have it) as the first door opens*
  - There's lots of Dark Jedi here that can potentially use Force Choke/Stasis/Affliction etc
- Turn right, then left
- Hack computer terminal: 1,1,5 (-8; 1 Spike extra)
- Return (with Force Jumps) to take elevator to Command Center

### Command Center

- Then we'll see if Revan can stand against the full fury of the Star Forge! *evil laugh*
- Run/Force Jump until double doors
- *Ensure all your stims/Force Powers are still active*
- `Auto-Level to 13 (if/when possible)`
- Defeat three Dark Jedi to unseal the door
  - The back one uses Force Wave, which is really annoying; try to take him out first.
- Darth Waifu fight/conversation
  - Be careful not to spam default action during a conversation; this will skip a phase (a glitch!)
  - Use Flurry for all phases; try to make sure Speed stays active
  - All conversations can be spammed if you've taken the prescribed Persuade points
  - If you messed them up somehow, you can still spare Bastila with the following conversations:
    - *As a Female MC*: 2 ... 2,2,1 ... 2,2 ... 1,1,1,2,2,2,1,1,1,1
    - *As a Male MC*: 2 ... 2,2,1 ... 2,2, ... 1,1,1,3,2,3,1,1,1,1
- Green Squadron, moving in
- Darth Malak shows off by killing Jedi
- Bash through door
- *Stims/Force: Reapply any relevant Force Powers/Stims that have faded*
- Bash through door and exit to Viewing Platform
 

### Viewing Platform

- Darth Malak fight:
  - First convo: 2
  - Pause IMMEDIATELY after his lightsaber flourish CS
    - If he hasn't got a blue aura, use Stasis on him to cancel his Force Immunity and lower his AC by 4
    - If he's got a blue aura, he's already cast Immunity, so skip the Stasis and just Flurry him
  - Flurry him until he goes non-hostile
    - You can try to bump him for Sneak Attacks, but he likes to use Force Lightning and doesn't bump easily
  - Use a medpac while he's running over to start the popsicle CS
  - If you canceled his Force Immunity during phase one, use Stasis to start phase two and lower his AC
  - Flurry Malak until he's at roughly half health
    - You want to do this now in case his AC is lowered by the saved Stasis
  - Use Disable Droid (or Drain Life) to release the remaining seven Dead Jedi
  - Kill Malak once and for all

## Version History

**v7.0 (January 2025)**
- New planet order that does Tatooine 2nd and Korriban 3rd
- New Scoundrel build for Sneak Attack II and employing Auto-Level Attributes
- Includes optional Force Power tweaks for build variations
- Kills Darth Bandon on Korriban
- Tweaked credit route on Taris
- Skips the footlocker near Zaalbar to save time in Lower Sewers
- More aggressive Calo strat leaving Taris
- Save and Load on Endar Spire to activate Duration Glitch early

**v6.0 (August 2021)**
- New route that skips the CNS Strength Enhancer
- Completely new credit and shopping route
- Skips the strongbox in the Vulkar Garage
- Tweaked spike route on Taris
- Slightly tweaked character build
- Removed the optional Calo kill strat, as it is no longer helpful in the new route

**v5.0 (June 2021)**
- Changed the character build to use 10 Int and 4 Com for more efficient spike use
- Added hacking with T3 in the Taris Sith Base to skip a fight
- Changed the skill point distribution as a result
- Tweaked the alignment route on Taris
- Slightly changed the credit route as a result of the above
- Added micro movement with T3 and Bastila in the Dantooine Ruins
- Changed the stim purchases on Manaan
- Canderous is used to rescue the party on Leviathan instead of Juhani
- Added some optional thermal detonator loots for certain fights
- Added an optional safe strat to prevent Carth from being stunned on the Leviathan

**[v4.0](https://web.archive.org/web/20201112020601/https://www.speedrun.com/kotor1/guide/xaobq) (August 2020)**
- Modified the credit and shopping route
- Added an optional character build tweak for guaranteed credit route
- Tweaked the computer spike and stim use routes as a result
- Minor tweak to the alignment route on Taris
- Made the Calo Nord strat an optional strat; skipping him is faster but less consistent
- Fleshed out the optional branches in the credit route based on killing Calo
- Added some optional safe strats on the Leviathan and elsewhere
- Miscellaneous minor corrections

**[v3.0](https://web.archive.org/web/20200808193255/https://www.speedrun.com/kotor1/guide/xaobq) (June 2020)**
- Added strats for warping Jolee when leaving Kashyyyk
- Added strats for skipping Rakatan Warriors on Lehon
- Updated the character build with small tweaks
- Added the elevator warp trick after buying T3
- Miscellaneous minor corrections

**[v2.1](https://web.archive.org/web/20200603002359/https://www.speedrun.com/kotor1/guide/xaobq) (June 2020)**
- Added an unequip at the end of Taris to smooth the credit route

**[v2.0](https://web.archive.org/web/20200420153512/https://www.speedrun.com/kotor1/guide/xaobq) (December 2019)**
- New planet order: Manaan -> Korriban -> Tatooine -> Kashyyyk
- New credit/stim/XP route to get Knight Speed before Uthar
- Added getting banned from Manaan
- Added Transit Warp on Kashyyyk

**[v1.0](https://web.archive.org/web/20190530154816/https://www.speedrun.com/kotor1/guide/xaobq) (November 2016, newly found!)**
- Initial route as Scout/Jedi Guardian with Master Two-Weapon/Flurry build.
- Planet order: Korriban -> Manaan -> Tatooine -> Kashyyyk
