/** @typedef{import('prettier').Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
    printWidth: 80,
    singleQuote: true,
    semi: false,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'auto',
}

export default config