/* background.js — заполняет фон кодом. Подключён на всех страницах.
   Хочешь другой код на фоне — измени текст в snippet. */
const snippet = `@bot.tree.command(name="addchannel", description=locale_str("add gift channel"))
@app_commands.describe(role=locale_str("Role that the bot will ping"))
@app_commands.checks.has_permissions(administrator=True)
async def addchannel(interaction, role: discord.Role, giveaway_delete: int):
    await db.save_channel(interaction.guild_id, interaction.channel_id, role.id)

@stalzone.command(name="emission", description=locale_str("Manage emission notifications channel"))
@app_commands.checks.has_permissions(administrator=True)
async def emission(interaction, added: int):
    await set_emission_channel(interaction.guild_id, added)

@senscalc.command(name="text", description=locale_str("Auto-calculate zoom sensitivity (ADS)"))
async def sens_text(interaction, calc_mode: int, sens: float, fov: int, zooms: str):
    ratio = math.tan(math.radians(fov / 2)) / math.tan(math.radians(fov / (2 * zoom)))
    result = sens * ratio

@bot.tree.command(name="image2text", description=locale_str("Converts an image into ASCII text art"))
async def image2text(interaction, file: discord.Attachment, ascii_mode: str, resize: str):
    img = Image.open(io.BytesIO(await file.read())).convert("L")
    chars = PRESETS.get(ascii_mode, ascii_mode)

@bot.tree.command(name="antibot", description="Configure anti-bot trap channel and punishment settings")
async def antibot(interaction):
    await interaction.response.send_message(view=AntiBotView())

`;
document.getElementById("code").textContent = snippet.repeat(6);
