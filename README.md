# Script buddy

This is a simple web app to help with learning your lines for a play. It allows you to upload a script as a JSON file, select a character, and then input your lines as you learn them -- kind of like a flashcard app.

## Input format

The expected format in the JSON file is a single array of objects, each of which has a `character` and `line` property. For example:

```json
[
	{
		"character": "JANE",
		"line": "Hello, world!"
	},
	{
		"character": "JANE",
		"line": "How are you?"
	},
	{
		"character": "JACK",
		"line": "I'm fine, thanks."
	}
]
```

## Running the app

The app is avaiable at https://script-buddy.adammi.ch. You can also run it locally by cloning this repo and running `npm install` and `npm run dev`.
