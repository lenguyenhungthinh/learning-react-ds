const Fs = require('fs')
const Path = require('path')
const Sass = require('node-sass')

// Get the directory name of the current script (build.js)
const currentScriptDirectory = Path.dirname(__filename);

// Go up one level to get to the /src directory
const srcDirectory = Path.join(currentScriptDirectory, '..', '..');
const getComponents = () => {
    let allComponents = []

    const types = ['atoms', 'molecules']

    types.forEach(type => {
        const allFiles = Fs.readdirSync(Path.join(srcDirectory,`src/${type}`)).map(file => ({
            input: `/src/${type}/${file}`,
            output: `/lib/${file.slice(0, -4) + 'css'}`
        }))
        allComponents = [
            ...allComponents,
            ...allFiles
        ]
    })

    return allComponents
}

const compile = (path, fileName) => {
    const result = Sass.renderSync({
        file: Path.join(srcDirectory, path), // Use 'file' instead of 'data'
        outputStyle: 'expanded',
        includePaths: [Path.join(srcDirectory, 'src'), Path.join(srcDirectory, 'src/foundation')]
    })

    Fs.writeFileSync(
        Path.join(srcDirectory, fileName),
        result.css.toString()
    )    
}


try {
    Fs.mkdirSync(Path.resolve('lib'))
} catch(e) {}

compile('src/global.scss', 'lib/global.css')

getComponents().forEach(component => {
    compile(component.input, component.output)
})