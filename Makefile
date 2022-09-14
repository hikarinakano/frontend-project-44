install: # install npm ci
	npm ci


brain-games: # launch brain-games
	node bin/brain-games.js
	
publish: # execute npm publish
	npm publish --dry-run	
