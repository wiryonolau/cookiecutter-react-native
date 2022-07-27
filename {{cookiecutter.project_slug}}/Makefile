# HELP
# This will output the help for each task
.PHONY: help

help: ## This help.
    @awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help
SHELL := /bin/bash
THIS_FILE := $(lastword $(MAKEFILE_LIST))

%:
	@echo ""
all:
	@echo ""
clean:
	rm -rf $$(pwd)/android/build
	cd $$(pwd)/android && ./gradlew clean
clean-all:
	rm -rf $$(pwd)/node_modules
	source .env/bin/activate && npm install
	$(MAKE) clean
