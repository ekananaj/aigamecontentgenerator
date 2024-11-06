import random

def generate_game_content():
    items = ["Sword of Destiny", "Shield of Light", "Potion of Healing", "Ring of Power"]
    levels = ["Dungeon of Doom", "Forest of Secrets", "Mountain of Fire"]
    content = random.choice(items + levels)
    return content
