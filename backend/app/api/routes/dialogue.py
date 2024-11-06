from fastapi import APIRouter
from pydantic import BaseModel
from app.utils.nlp_dialogue import generate_dialogue

dialogue_router = APIRouter()

class DialogueRequest(BaseModel):
    prompt: str

@dialogue_router.post("/generate")
async def generate_dialogue_route(request: DialogueRequest):
    dialogue = generate_dialogue(request.prompt)
    return {"dialogue": dialogue}
