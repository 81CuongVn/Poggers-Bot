//sub commands for help
module.exports = ({
name: "help",
code: `$if[$toLowercase[$message[1]]==fun]
$title[Fun commands]
$description[\`rps\`, \`say\`, \`clap\`, \`emojify\`, \`meme\`, \`doot\`, \`8ball\`, \`mock\`, \`ds\`, \`ttt\`, \`sudo\`, \`snake\`, \`owofy\`, \`advice\`, \`ss\`, \`whoasked\`, \`connect4\`]
$endif
$if[$toLowerCase[$message]==econ]
$title[Economy commands]
$description[All economy commands were deprecated]
$endif
$if[$toLowercase[$message[1]]==mod]
$title[Moderation commands]
$description[\`kick\`, \`ban\`, \`mute\`, \`unmute\`, \`gr\`, \`nick\`, \`slowmode\`, \`takerole\`, \`dehoist\`, \`purge\`]
$endif
$if[$toLowercase[$message[1]]==image]
$djseval[//well fuck]
$title[Image generation commands]
$description[\`bed\`, \`buttons\`, \`cat\`, \`clown\`, \`cmm\`, \`coffee\`, \`comment\`, \`delete\`, \`dog\`, \`drake\`, \`eject\`, \`invert\`, \`lolice\`, \`neko\`, \`panik\`, \`petition\`, \`ph\`, \`pride\`, \`roblox\`, \`simpcard\`, \`trash\`, \`trigger\`, \`wasted\`, \`hitler\`, \`gun\`, \`trump\`, \`affect\`, \`stonks\`, \`unstonks\`, \`tweet\`, \`wide\`, \`scroll\`, \`drip\`, \`mc\`, \`cr\`, \`rip\`, \`billy\`, \`ad\`, \`fear\`, \`pablo\`, \`overlay\`, \`god\`, \`oogway\`, \`communism\`, \`wanted\`, \`sadcat\`, \`throw\`, \`adios\`]
$endif
$if[$toLowercase[$message[1]]==util]
$title[Utility commands]
$description[\`av\`, \`calc\`, \`setprefix\`, \`resetprefix\`, \`set-channel\`, \`suggest\`, \`set-msg\`, \`set-welcome-channel\`, \`set-welcome-bg\`, \`embed-color\`, \`shorten\`]
$endif
$if[$toLowercase[$message[1]]==misc]
$title[Miscellaneous commands]
$description[\`help\`, \`pastebin\`, \`recog\`, \`npm\`, \`colorinfo\`]
$endif
$if[$toLowercase[$message[1]==interaction]
$title[Interaction commands]
$description[\`hug\`, \`pat\`, \`slap\`, \`poke\`]
$endif
$onlyIf[$checkContains[$toLowercase[$message];interaction;misc;util;image;mod;econ;fun]==true;Bold of you to assume there are more categories. In case you are too lazy here are all the categories: \`fun\`, \`econ\`, \`mod\`, \`image\`, \`interaction\`, \`util\`, \`misc\`]
$color[$getUserVar[embedColor]]
$footer[All commands start with the prefix \`$getServerVar[prefix]\`]
$onlyIf[$message[1]!=;]
`
})