import Ts from 'rollup-plugin-typescript2'

export default {
    input:
        [
            'src/index.ts',
        ],
    output: {
        dir: 'lib',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
    },
    plugins: [
        Ts(),
    ],
    preserveModules: true,
    external: ['react', '@ds.e/foundation'],
};
