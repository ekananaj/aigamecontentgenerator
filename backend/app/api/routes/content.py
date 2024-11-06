from fastapi import APIRouter
from app.utils.procedural_generator import generate_game_content

content_router = APIRouter()

@content_router.get("/generate")
async def generate_content():
    content = generate_game_content()
    return {"content": content}
