.bin/licenses: Makefile
	curl https://raw.githubusercontent.com/ory/ci/master/licenses/install | sh  

licenses: .bin/licenses node_modules  # checks open-source licenses
	.bin/licenses