
async function unwrap(wrapper) {
    const toUnwrap = wrapper.getAttribute('src')
    const response = await fetch(toUnwrap)
    wrapper.outerHTML = await response.text()
}

document.querySelectorAll('.js-unwrap').forEach(unwrap)