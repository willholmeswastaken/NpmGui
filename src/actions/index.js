export const REQUEST_NPM_MODULE = 'REQUEST_NPM_MODULE'
export const REQUEST_NPM_MODULE_SUCCESS = 'REQUEST_NPM_MODULE_SUCCESS'
export const REQUEST_NPM_MODULE_FAILURE = 'REQUEST_NPM_MODULE_FAILURE'

export const requestNpmModule = moduleName => ({
    type: REQUEST_NPM_MODULE,
    moduleName
})
