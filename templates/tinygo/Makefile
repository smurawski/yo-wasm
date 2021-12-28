
build:
	tinygo build -wasm-abi=generic -target=wasi -scheduler=none -o <%= moduleName %>.wasm src/main.go

release:
	tinygo build -wasm-abi=generic -target=wasi -scheduler=none --no-debug -o <%= moduleName %>.wasm src/main.go

run:
	tinygo run -wasm-abi=generic -target=wasi -scheduler=none src/main.go

run-wasmtime: build
	wasmtime ./<%= moduleName %>.wasm

clean:
	tinygo clean