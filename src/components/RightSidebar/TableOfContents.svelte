<script>
  import { onMount } from 'svelte'
  import { unescape } from 'html-escaper'

  export let headings = []

  let toc
  const onThisPageID = 'on-this-page-heading'
  let itemOffsets = []
  let currentID = 'overview'

  onMount(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll('article :is(h1, h2, h3, h4)')
      itemOffsets = Array.from(titles).map((title) => ({
        id: title.id,
        topOffset: title.getBoundingClientRect().top + window.scrollY
      }))
    }
    getItemOffsets()
    window.addEventListener('resize', getItemOffsets)

    const setCurrent = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const { id } = entry.target
          if (id === onThisPageID) continue
          currentID = entry.target.id
          break
        }
      }
    }

    const observerOptions = {
      // Negative top margin accounts for `scroll-margin`.
      // Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
      rootMargin: '-100px 0% -66%',
      threshold: 1
    }

    const headingsObserver = new IntersectionObserver(setCurrent, observerOptions)

    // Observe all the headings in the main page content.
    document
      .querySelectorAll('article :is(h1,h2,h3)')
      .forEach((h) => headingsObserver.observe(h))

    return () => {
      window.removeEventListener('resize', getItemOffsets)
      headingsObserver.disconnect()
    }
  })

  const onLinkClick = (e) => {
    currentID = e.target.getAttribute('href').replace('#', '')
  }
</script>

<h2 id={onThisPageID} class="heading">
  En esta Página
</h2>
<ul bind:this={toc}>
  {#each headings.filter(({ depth }) => depth > 1 && depth < 4) as heading}
    <li
      class={`header-link depth-${heading.depth} ${
        currentID === heading.slug ? 'current-header-link' : ''
      }`.trim()}
    >
      <a href={`#${heading.slug}`} on:click={onLinkClick}>
        {unescape(heading.text)}
      </a>
    </li>
  {/each}
</ul>
