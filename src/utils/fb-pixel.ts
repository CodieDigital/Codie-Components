const pageview = (router: string) => {
  ;(window as any)?.fbq && (window as any).fbq('track', router)
}

const event = (name: string, options = {}) => {
  ;(window as any)?.fbq && (window as any).fbq('track', name, options)
}

export { event, pageview }
