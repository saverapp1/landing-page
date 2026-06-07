import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScaleOnScroll(elRef: Ref<HTMLElement | null>, options?: {
  fromScale?: number
  toScale?: number
  start?: string
  end?: string
}) {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    if (!elRef.value) return
    ctx = gsap.context(() => {
      gsap.fromTo(elRef.value,
        { scale: options?.fromScale ?? 0.6, opacity: 0.3 },
        {
          scale: options?.toScale ?? 1,
          opacity: 1,
          scrollTrigger: {
            trigger: elRef.value,
            start: options?.start ?? 'top 85%',
            end: options?.end ?? 'top 40%',
            scrub: 1.2,
          }
        }
      )
    })
  })

  onBeforeUnmount(() => ctx?.kill())
}

export function useSlideIn(elRef: Ref<HTMLElement | null>, options?: {
  x?: number
  y?: number
  duration?: number
  start?: string
  stagger?: number
}) {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    if (!elRef.value) return
    ctx = gsap.context(() => {
      gsap.from(elRef.value, {
        x: options?.x ?? -80,
        y: options?.y ?? 0,
        opacity: 0,
        duration: options?.duration ?? 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elRef.value,
          start: options?.start ?? 'top 85%',
          toggleActions: 'play none none reverse',
        }
      })
    })
  })

  onBeforeUnmount(() => ctx?.kill())
}

export function useStaggerFade(containerRef: Ref<HTMLElement | null>, options?: {
  stagger?: number
  y?: number
  duration?: number
  start?: string
}) {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    if (!containerRef.value) return
    const children = containerRef.value.children
    if (!children.length) return
    ctx = gsap.context(() => {
      gsap.fromTo(children,
        { y: options?.y ?? 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: options?.duration ?? 0.8,
          stagger: options?.stagger ?? 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.value,
            start: options?.start ?? 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      )
    })
  })

  onBeforeUnmount(() => ctx?.kill())
}

export function useMagneticHover(elRef: Ref<HTMLElement | null>, strength: number = 0.3) {
  function onMouseMove(e: MouseEvent) {
    if (!elRef.value) return
    const rect = elRef.value.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    gsap.to(elRef.value, { x, y, scale: 1.05, duration: 0.4, ease: 'power2.out' })
  }

  function onMouseLeave() {
    if (!elRef.value) return
    gsap.to(elRef.value, { x: 0, y: 0, scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
  }

  onMounted(() => {
    const el = elRef.value
    if (!el) return
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)
  })

  onBeforeUnmount(() => {
    const el = elRef.value
    if (!el) return
    el.removeEventListener('mousemove', onMouseMove)
    el.removeEventListener('mouseleave', onMouseLeave)
  })
}

export function useParallax(elRef: Ref<HTMLElement | null>, options?: {
  y?: number
  start?: string
  end?: string
}) {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    if (!elRef.value) return
    ctx = gsap.context(() => {
      gsap.to(elRef.value, {
        y: options?.y ?? 60,
        ease: 'none',
        scrollTrigger: {
          trigger: elRef.value,
          start: options?.start ?? 'top bottom',
          end: options?.end ?? 'bottom top',
          scrub: 1.5,
        }
      })
    })
  })

  onBeforeUnmount(() => ctx?.kill())
}

export function useFlipCard(elRef: Ref<HTMLElement | null>) {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    if (!elRef.value) return
    ctx = gsap.context(() => {
      elRef.value?.addEventListener('mouseenter', () => {
        gsap.to(elRef.value, { rotationY: 180, duration: 0.6, ease: 'power2.inOut' })
      })
      elRef.value?.addEventListener('mouseleave', () => {
        gsap.to(elRef.value, { rotationY: 0, duration: 0.6, ease: 'power2.inOut' })
      })
    })
  })

  onBeforeUnmount(() => ctx?.kill())
}

export function useFloating(elRef: Ref<HTMLElement | null>, options?: {
  y?: number
  duration?: number
}) {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    if (!elRef.value) return
    ctx = gsap.context(() => {
      gsap.to(elRef.value, {
        y: options?.y ?? 15,
        duration: options?.duration ?? 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })
  })

  onBeforeUnmount(() => ctx?.kill())
}
