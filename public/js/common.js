;((el, prop) => {
  const vwWidth = () => el.style.setProperty(prop, `${el.clientWidth}px`)
  vwWidth()
  new ResizeObserver(vwWidth).observe(el)
})(document.documentElement, '--viewport-width');