install: # install npm ci
	npm ci


brain-games: # launch brain-games
	node bin/brain-games.js
	
publish: # execute npm publish
	npm publish --dry-run	

make lint: # launch npx eslint
	npx eslint .	

brain-even: # launch brain-even
	node bin/brain-even.js

brain-calc: # launch brain-calc
	node bin/brain-calc.js	