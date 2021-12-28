# <%= moduleName %>

A WASM hello-world with a publish action

You will need:
* Go: https://go.dev/doc/install
* TinyGo: https://tinygo.org/getting-started/install
* Make: https://www.gnu.org/software/make/"
* and optionally, Wasmtime: `curl https://wasmtime.dev/install.sh -sSf | bash`

To build:
* VS Code: `Run Task > Make: Build TinyGo WASM`
* Command line: `make build`

To run:
* VS Code: go to Run/Debug pane, select `Debug WASM` and run
* Command line: `wasmtime <%= moduleName %>.wasm`
