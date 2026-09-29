/* background.js — заполняет фон кодом. Подключён на всех страницах.
   Тут ВЫМЫШЛЕННЫЙ примерный код (обычный шаблон discord.py), это НЕ код бота Matrix.
   Хочешь другой текст на фоне — измени snippet. Реальный код сюда не вставляй. */
const snippet = `import discord
from discord.ext import commands, tasks
from dataclasses import dataclass
import asyncio
import random

intents = discord.Intents.default()
bot = commands.Bot(command_prefix="!", intents=intents)

@dataclass
class Item:
    title: str
    score: int = 0
    active: bool = True

@bot.event
async def on_ready():
    print(f"Logged in as {bot.user}")
    await bot.tree.sync()

@bot.tree.command(name="ping", description="Show bot latency")
async def ping(interaction: discord.Interaction):
    latency = round(bot.latency * 1000)
    await interaction.response.send_message(f"Pong! {latency} ms")

class Example(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.items = []
        self.refresh.start()

    @tasks.loop(minutes=10)
    async def refresh(self):
        for item in self.items:
            if item.active:
                item.score += random.randint(1, 5)
        await asyncio.sleep(1)

    @commands.Cog.listener()
    async def on_member_join(self, member):
        channel = member.guild.system_channel
        if channel is not None:
            embed = discord.Embed(title="Welcome", color=0xFFC933)
            await channel.send(embed=embed)

async def setup(bot):
    await bot.add_cog(Example(bot))

`;
document.getElementById("code").textContent = snippet.repeat(4);
