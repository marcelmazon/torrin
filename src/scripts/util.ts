// These two are just for code highlighting

export const html = String.raw
export const css = String.raw

// Utility functions to improve readability by shortening code

export function $(query: string) {
    return document.querySelector(query)
}

export function $a(query: string) {
    return document.querySelectorAll(query)
}

export function $id(query: string) {
    return document.getElementById(query)
}

export function $cr(element: string) {
    return document.createElement(element)
}