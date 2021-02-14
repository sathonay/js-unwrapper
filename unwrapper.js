async function unwrapInner(wrapper) {
    const toUnwrap = wrapper.getAttribute('unwrap')
    const response = await fetch(toUnwrap)
    wrapper.innerHTML = await response.text()
}

async function unwrapOuter(wrapper) {
    const toUnwrap = wrapper.getAttribute('unwrap')
    const response = await fetch(toUnwrap)
    wrapper.outerHTML = await response.text()
}

document.querySelectorAll('.js-unwrap').forEach(unwrapInner)
document.querySelectorAll('.js-unwrap-inner').forEach(unwrapInner)
document.querySelectorAll('.js-unwrap-outer').forEach(unwrapOuter)
