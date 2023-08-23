# Running KotOR 2 on Windows 10

## Step 1 Disable Movies

1. Outside the game, find the swkotor2.ini file in your KotOR 2 installation folder, and open it with a standard text editor(Notepad works great). Then, under the section headlined [Graphics Options]:
2. Add the line "Disable Movies=1"
3. Add the line "Disable Intro Movies=1"

## Step 2

Now another problem you may encounter is your game crashing on any single cinematic, or when one would play. This is because when the game launches a movie, it launches a video file and in a way creates a second window to the game. Windows 10 doesn't properly handle the  and KotOR will end up crashing. To fix that you will need to put your game in windowed mode. Unfortunately, this is the best available choice. To do so, you will need a few more steps:

1. Go into the root folder of the game and open swkotor.ini with a program like NotePad or WordPad. Scroll down to [Graphics Options] and find the option Fullscreen=1. Switch it to 0 to read FullScreen=0
2. Then under the [Graphics Options] section, add this line: AllowWindowedMode=1, save, and when you next launch the game, it should be in Windowed mode, and you won't crash on every movie
3. Lastly, if the game doesn't automatically launch in Windowed mode, just hit Alt+Enter and it will switch without crashing

Now you've done it, you have dodged 90% of the crashes you could encounter with KotOR specific to Windows 10. If you encounter other problems, hop on the [KotOR Speedrunning Discord](http://discord.gg/Q2uPRVu) and the community can help you out!


Original Guide by: [Strife](https://www.speedrun.com/users/Strife)
Adapted by: [RedMage](https://www.speedrun.com/users/redmage08)
