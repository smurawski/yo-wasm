import { Formatter } from '../formatter';
import { Errorable } from '../utils/errorable';
// import { shell } from '../utils/shell';
import { Language } from './language';

export const tinygo: Language = {
    instructions(fmt: Formatter): ReadonlyArray<string> {
        return [
            "You'll need the following to build and run this project locally:",
            "* Go: https://go.dev/doc/install",
            "* TinyGo: https://tinygo.org/getting-started/install",
            "* Make: https://www.gnu.org/software/make/",
            `* wasmtime: ${fmt.cmd('curl https://wasmtime.dev/install.sh -sSf | bash')}`,
            '',
            `Build using VS Code ${fmt.instr('Build WASM')} task or ${fmt.cmd('make build')}.`,
            `Run using VS Code ${fmt.instr('Debug WASM')} task or ${fmt.cmd('wasmtime')} CLI.`,
        ];
    },
    templateFolder: function (): string {
        return 'tinygo';
    },
    templateFiles: function (): readonly string[] {
        return [
            'Makefile', 
            'LICENSE',
            'README.md',
            '.gitignore.removeext',
            '.vscode/extensions.json', 
            '.vscode/tasks.json', 
            '.vscode/settings.json', 
            'src/main.go'
        ]
    },
    async offerToInstallTools(): Promise<string | undefined> {
        return undefined;
    },

    async installTools(_projectDir: string): Promise<Errorable<null>> {
        return { succeeded: true, result: null };
    },

    augment(answers: any) {
        return answers;
    }
}

// async function isTinyGoInstalled(): Promise<boolean> {
//     const sr = await shell.exec('tinygo');
//     if (failed(sr) || sr.result.code !== 0) {
//       return false;
//     }
//     return sr.result.stdout.includes('TinyGo is a Go compiler for small places.');
//   }