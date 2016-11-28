out/archive.zip: src/*
	( cd src; zip -r ../out/archive.zip .)
out/archive.xpi: out/archive.xpi
	cp out/archive.zip out/archive.xpi
