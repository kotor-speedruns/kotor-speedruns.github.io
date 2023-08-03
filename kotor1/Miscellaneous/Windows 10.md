# Running KotOR on Windows 10

Heya everyone,

I'm not sure if it was the good section to do this, but I didn't see any other so here I am. As you can see I'm not a runner of this game, not yet, but I have played countless hours on KotOR and I had the displeasure of trying to make it work on Windows 10. Now there are already guides on the internet, but I figured a guide here would be cool for people trying to begin the speedrun and not wanting to revert to windows 7 for one game. So here it comes, ladies and gentlemen, easy fixes for KotOR on the bizarre 10th window.

## Step 1

Now first thing you need to understand is that KotOR is old. We are talking about a game released in 2003,that was made for Windows XP at the time. So of course there are gonna be problems for next generations of OS. One of the biggest problems you can and will encounter is your game crashing at the very beginning, on the Lucas Art logo. This is an easy fix, you only have two things to do:

1. Go to your swkotor/movies (or Star Wars - KotOR/movies if you have the GOG version) folder, and locate these 3 files: biologo.bik, leclogo.bik and legal.bik. Rename them by changing the extension to .bik.old, and the files won't be run by the game anymore. No more crashes at start anymore, yayy!
2. Now if it doesn't entirely work, you may want to run the swconfig program present in the swkotor, and check the Disable Movies. Of what I remember this should only disable intro movies, not the others, but I could be wrong on that and it could be forbidden in speedruns, so I will ask someone of the community on that. While you are in this program by the way, check that V-Sync is enabled, it's really important to play the game properly.

## Step 2

Now another problem you may encounter is your game crashing on any single cinematic, or movie, however you want to call it. Why? Because when the game launches a movie, it launches a video file and in a way creates a second window to the game. When it wants to come back however, Windows 10 doesn't follow and KotOR will end up crashing. To fix that you will need to put your game in windowed mode. It's not optimal depending on your pc or laptop but it's the best available choice. To do so, you will need 2 steps again:

1. Go into the root folder of the game and open swkotor.ini with a program like NotePad or WordPad. Scroll down to [Graphics Options] and find the option Fullscreen=1. Switch it to 0, but no, it's not over, there is more!
2. Then under the [Graphics Options] section, add this line: AllowWindowedMode=1, save, and when you next launch the game, it should be in Windowed mode, and you won't crash on every movie.
3. Lastly, if the game doesn't automatically launch in Windowed mode, you will just have to hit Alt+Enter and it will switch without crashing.

Now you've done it, you have dodged 90% of the crashes you could encounter with KotOR on Windows 10. If you encounter other problems, some really detailed and complete guides are up on the Internet to help you, but that's the base of it.

Hope you enjoyed the guide,
Strife
