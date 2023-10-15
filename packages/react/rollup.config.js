import Ts from 'rollup-plugin-typescript2'

export default {
    input:
        [
            'src/index.ts',
            'src/atoms/Button/index.ts',
            'src/atoms/Button/Button.tsx'
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
    external: ['react', 'react-dom'],
};
