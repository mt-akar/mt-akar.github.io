# Generic

This is a NextJS app.

## Development principles
- Use app router
- Use typescript
- Respect strict typescript linting rules
- Do not use optional parameters, pass down the deafult value

## Styling principles
- use inline tailwind classes
- prefer checking for and using existing styled-components, then prefer creating styled components for general use views
- apply light/dark/default theme support in every page and component, there is a 3-way toggle on the header
- apply responsive design for all screen sizes in every page and component
- Use lucide-react for icons, do not use emojis
- add simple animations to buttons, transitions
- Stagger animations; trigger once per view via IntersectionObserver
- Prefer transforms/opacity for performance; pre‑render gradients
- apply localization from the ground zero, there is a selector on the header
- apply best UX practices

## Website layout principles
- Many pages have the header component. It has transparent background when the page is not scrolled down, transparent but blurred background when scrolled down.
- Many pages have the footer. It is a modern footer with common elements. Update it while adding new pages/features to the website.

## Content generation
- Do not use emojis as icons.Put placeholsders and name it with what you want. I can put a svg icon there later.

# App specific

This is a portfolio website for a larger-than-life figure whose ideas are inspiring, whose initiatives are leading the industry, and who has natural followership. Use NextJS and follow the following principles

Mustafa Akar is a builder‑leader whose ideas become roadmaps for others. Voice = confident, generous, precise. Visuals = cinematic, kinetic, high‑contrast with vibrant accents.

 ## UX & Motion Motifs

- Parallax on multiple z‑layers (hero image + floating artifacts).
- Deliberate counters that ease over 5s
- Magnetic hover and inertia scroll; subtle 3D tilts on cards.
- Accent palette: Charcoal #0F1218 base; Electric Cyan (tw cyan-400), Magenta (tw pink-600), Royal Purple (tw violet-600), Metallic Gold (tw yellow-400) (sparingly for highlights).
- Typography: Tall headline (condensed), humanist text.
- Use liquid glass

## The theme
- A minimalistic, professional looking theme. Colours and typography matching it.
- It should give the larger-than-life feeling to the portfolio website