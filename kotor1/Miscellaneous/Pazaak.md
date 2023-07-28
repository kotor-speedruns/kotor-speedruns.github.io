This guide will provide a full explanation of the Pazaak Individual Level (IL) categories, as long with execution advice. For more information and reference material see the [Strategy Wiki](https://strategywiki.org/wiki/Star_Wars:_Knights_of_the_Old_Republic/Pazaak).

Also for deck building tools, check out my Pazaak Calculator in the resource section on the sidebar.

[section=Rule Explanation]
Timing starts when you hit "OK" to confirm your side deck, and start the game. The timer stops when the pazaak screen is dismissed and you return to either the character conversation or the standard game depending on the category. 

__Single Game__
The Single Game categories are for each of the 3 decks that NPCs use during this game. The Rules section contain the recommended NPCs for each deck (Easy - Sol'aa/Mission, Medium - Toll Apkar, Hard - Suvam Tam), however using these NPCs is not required as long as you can prove via video evidence that the NPC you are playing is using the deck you have submitted for. 

__Character Runs__
The Character runs require you to complete the full "circuit" for any given NPC. Most NPCs will either stop playing or give certain final rewards after a certain number of losses. The rules section for each category (as well as strategy wiki) have the optimal number of times needed to beat each NPC.

__Pazaak 100%__
Pazaak 100%, also known as *"the unholy run"*, requires you to complete all of the character runs, play one game with each of the other NPCs, and collect one of each card. All of which must be shown in video. The meta for this category thus far, has been basically any% with a few detours for Pazaak, and then stopping after finishing Suvam. However, keep in mind that since there's no need to finish the game, so you need not worry about star maps or other potentially soft-locking strats. Just get to Taris, do the Pazaak there, get off Taris/Dantooine, and finally do the rest of the Pazaak the galaxy has to offer. 

__Submission__
Timing for IL Pazaak (*not paz100%*) is all RTA, even if you saved or loaded during the run. When submitting you can populate both timing slots with the real time. 
Please include a portion of the dialogue before and after the game, so we can confirm which character you are playing.
For games with deck restrictions be sure the video includes the side deck selection screen so we can check the included cards.

[section=NPC Decks]
There are 3 different decks used by NPCs in this game. The 3 NPC decks are Deck 1 "Easy", Deck 2 "Medium", and Deck 3 "hard". Their contents are as follows:
__Deck 1 (Easy)__ -3,-3,-4,-5,-5,3,4,4,5,5
__Deck 2 (Medium)__ ±1,±6,-2,-2,-3,-4,2,3,3,4
__Deck 3 (Hard)__ ±1,±1,±2,±2,±2,±2,±3,±3,±4,±4

While some NPCs only use a single deck, most will switch decks as you win. For example: Fodo Medoo will play 4 games of Easy, then up the wager and begin using medium for 4 games, and then finally play a single game of Hard with additional rewards after which he will no longer play you, thus completing his character run. 

While it is preferable to use only the recommended character for single game runs, other characters for each deck may be used:

__**Valid Characters for Deck 1 (Easy):**__ Niklos, Gelrood, Mission, Sol'aa, Kudos (Games 1 - 4), Furko Nellis (Game 1), and Fodo Medoo (Games 1 - 4)
__**Valid Characters for Deck 2 (Medium):**__ Kudos (Games 5 - 8​), Furko Nellis (Game 2), Fodo Medoo (Games 5 -  8​), Jolan Aphett (Games 1 - 10), Gonto Yas, and Toll Apkar (Without Taunting†)
__**Valid Characters for Deck 3 (Hard):**__ Kudos (Games 9, 10), Furko Nellis (Game 3), Fodo Medoo (Games 9, 10), Jolan Aphett (Game 11), Toll Apkar (With Taunting†), and Suvam Tam.
[small]†*After beating Toll Apkar on his medium deck, he may be taunted into another game ("you think that was luck?") this will cause him to use Deck 3 (Hard)*[/small]

[section=Statistics]
Pazaak is a game of pure probabilities. Unlike blackjack, where 21 is a relatively rare occurrence, natural 20s are quite common is pazaak. This is because each card is a random value from 1-10 or a d10 in dice notation. 
The probability of getting a natural 20 from a sum of an undetermined amount of d10s < 9 is equivalent to:
[quote].01 + (.99)(.063) + (.717)(.0633) + (.3372)(.0325) + (.11)(.0109) + (.0266)(.0027) + ... ≈ 12.999%[/quote]
Which is more than once every 10 rounds.

Since it is impossible to bust in 2 draws and there is only a 1% chance to achieve a 20 from 2d10, the most common situation will be a third draw (3d10). In a 3d10 situation, assuming that the player is adding only (see add-only in Deck Building) the probability distribution from 14 - 19 is:
[quote]14=6.9% 15=7.3% 16=7.5% 17=7.5% 18=7.3% 19=6.9%[/quote]
Therefore, the ideal distribution for an "add-only" deck is: 1,2,2,3,3,4,4,5,5,6 *(χ2 (GOF) = 8.86)*

However, if you are going for a safer ± deck, you would want to observe the 3d10 distribution 14||26 - 19||21
[quote]14||26=8.4% 15||25=9.4% 16||24=10.3% 17||23=11.1% 18||22=11.8% 19||21=12.4% [/quote]
Therefore, the ideal distribution for a "safe" deck is: 1,1,2,2,3,3,4,4,5,6 *(χ2 (GOF) = 2.69)*

[section=Deck Building]
For Deck building we always prefer '±' cards because giving the player more options is strictly better. All the '±' cards you could ever need can be purchased between the Shady Rodian (Manaan East Central), Junix Nard (Tattoine Cantina), and Sol'aa (Dantooine Enclave Visitor quarters). The locations of all other cards can be found on the [Strategy Wiki](https://strategywiki.org/wiki/Star_Wars:_Knights_of_the_Old_Republic/Pazaak). I usually just recommend buying there whole stock because money doesn't really matter for these categories (accept for pazaak 100%).

There are two approaches to deck building that I have experimented with. There's the faster, yet more risky, "add-only" deck (often used for single game runs), and the safer, yet slightly slower, "safe" deck.

__Add-Only__
"Add-only" should really be called add-preferred as we still use '±' cards. The theory is that it is faster to try to add up to 20, instead of busting and then subtracting to 20. This is because on average less cards will be drawn this way. So because we prefer to add-up to 20, we use the "add-only" probability distribution for the statistics section to form this side deck:
**±1,±2,±2,±3,±3,±4,±4,±5,±5,±6**
While "add-only" is faster, it's also riskier, as there are less opportunities to subtract down to 20. Which is why I primarily use it for Single Game runs, where resets are much less devastating than in character runs.

__Safe__
The "safe" deck operates around the theory that winning is faster than losing, so it is in our best interest to maximize our likely-hood of achieving a 20. Therefore, we use the "safe" probability distribution to form this side deck:
**±1,±1,±2,±2,±3,±3,±4,±4,±5,±6**
While "safe" is safer, it's also generally slower, as it takes longer to bust and subtract down to 20, than to add straight to it. Which is why I primarily use it for Character runs, where it is in our best interest to win as often as possible, and avoid resets.

__Tarisian Decks__
Due to the lack of available cards on Taris, we have to improvise a little bit. Uriah (in the lower city cantina) can provide you with most of the cards you'll need. I'd recommend mimicking the "safe" deck with + only (subbing in the few available '±' ) cards for Taris.
**Valid Cards for Taris: ±1 (3x), ±3 (1x), ±6, -2, -3 (1x), -4, -6, All +**
[small]*cards with no quantity can be used infinity*[/small]

[section=Tips & Tricks]
__Feedback Cancelling__
Whenever you win, lose, or tie a game, a feedback dialogue box pops up. if you hit the escape key (ESC) at the same instance this pops up, the box will be cancelled all together, and the game will progress to the next round. This saves about a second. Be warned: If you are too early or to late on this, you can pause the game, or even forfeit if you aren't careful. 

__Forfeiting__
If a game is just not going your way, the fastest way out is to hit the escape key (ESC). Its better to move on, instead of wasting time playing a game you know you're going to lose.

__End Turn Spamming__
Whenever your opponent stands, the delay on the "End turn" button becomes significantly reduced. this allows you to spam it to your hearts content. Be Warned: This is a very easy way to bust. This technique is most often used when your opponent already has a 20 and you do not want to waste a card on a tie. 

__Card saving__
Remember: Winning is faster than losing. Therefore, there's no point in wasting cards on losses or ties. I don't generally try to tie my opponent unless he's on match point (1 point away from winning). Otherwise, you should let him waste his cards while you save yours for winning rounds. 
It can be safer to save your cards for adding to 20s only, however often it can be preferable to take a 19, or even an 18 if you're desperate. because if it works, it works, and for character runs the bottom line is: Winning is faster than losing.

__Keyboard Use__
In addition to "hover-handing" over the escape key for feedback cancelling, it is also important to know that the end turn button can be selected with either "Enter" keys. So it can be beneficial to have your mouse ready on either your cards or the "Stand" button, while using "Enter" to progress. This is personal preference though, and you should use whatever is most comfortable for you.

__Save Scum__
*only necessary for Niklos and pazaak 100%*
Using the quick-save before and after wins, and the quick-load function after losses can be useful to save money from wagers, and save progress on Niklos character runs. Niklos doesn't finish until you beat him five more times than he beat you, so save scum is necessary for the safer play.

__Numeric Mantra__
I've often found that it helps to view my hand immediately, and briefly recite to myself to values I am looking for to get 20. For example, if my hand was 1,2,3, and 5, I would recite "15, 17, 18, 19" to myself. This helps me to avoid missing opportunities.

__Ask for Help__
The best way to get good at Pazaak is to talk to others who have played a lot of this game, and sample their strategies. You can get in contact with most of the people from this site on our Discord (link on sidebar).
