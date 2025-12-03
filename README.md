@config/ créer une page de configuration. Plusieurs sections :
1. Config générale : on peut définir un prompt system, autant de prompt pré configurés.
2. Configuration des provider :
On peut activer les providers : openai, gemini, groq, openrouter, replicate, mistral. Pour chaque provider ajouté, il faut entrer sa clé API et la sauvegarder. Une fois sauvegardé, à droite du provider, il y a la liste des modèles qui se chargent, et il faut sélectionner les models (checkbox) (le premier sélectionné par défaut et il faut toujours en avoir 1 de sélectionné)
3. Configuration des modèles
LLM : sélection du modèle par défaut de TextToText parmi les sélectionnés
STT : sélection du modèle par défaut de SpeechToText + définition d'un prompt optionnel pour whisper.
Embedding : sélection du modèle par défaut de Embedding


@frontend-design.mdc 

# Télécharger ses cookies.txt depuis firefox (chrome not working)
```
yt-dlp --cookies-from-browser firefox --cookies cookies.txt --skip-download "https://www.youtube.com/watch?v=J1BDJ8RO00k"
```
