module.exports = ({
  name: "halp",
  aliases: ['wut', '?', 'nani'],
  code: `
  $title[Commands List!]
  $description[The prefix for Poggers Bot is \`$getServerVar[prefix]\`. You can do \`$getServerVar[prefix]help <category>\` to get more info on a command.

  **😁 | Fun**
  \`$getServerVar[prefix]help fun\`

  **💸 | Economy**
  \`$getServerVar[prefix]help econ\`

  **🛠️ | Moderation**
  \`$getServerVar[prefix]help mod\`
 
  **:frame_photo: | Image Generation**
  \`$getServerVar[prefix]help image\`

  **⚙️ | Utility**
  \`$getServerVar[prefix]help other\`

  **🤔 | Misc**
  \`$getServerVar[prefix]help misc\`

  **👊 | Interaction commands**
  \`$getServerVar[prefix]help interaction\`
]
$color[$getUserVar[embedColor]]

$footer[$randomText[DM $userTag[$botOwnerID] or $userTag[744570131199426570] if you spot any bugs;Made by $userTag[$botOwnerID] and $usertag[744570131199426570]] <3]
$onlyIf[$message==;]
$onlyForIDs[$botOwnerID;$getVar[sophie];$getVar[faizenAlt];{title:❌ Access denied ❌}{description:This command is still under testing, once finished it'll replace the current help command}{footer:Yeet}{color:RED}]`
})