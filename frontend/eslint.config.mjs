import fioriTools from '@sap-ux/eslint-plugin-fiori-tools';
import prettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
    ...fioriTools.configs.recommended,
    configPrettier,
    {
        plugins: {
            prettier,
        },
        rules: {
            'prettier/prettier': 'error',
        },
    },
];
