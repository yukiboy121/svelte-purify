import createDOMPurify, { type Config } from 'dompurify'

export class BrowserDOMPurify {
    private _html = $state<string>('')
    private _options = $state<Config | undefined>(undefined)
    private _result = $derived(
        typeof window !== 'undefined'
            ? createDOMPurify(window).sanitize(this._html, {
                  ...this._options,
                  RETURN_DOM: false,
                  RETURN_DOM_FRAGMENT: false
              })
            : ''
    )

    constructor(html: string, options: Config | undefined) {
        this._html = html
        this._options = options
    }

    get html() {
        return this._result
    }
}
