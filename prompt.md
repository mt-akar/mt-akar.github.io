## 5) Case Study Filmstrip — Compact Infinite Preview

**Goal:** Fast, snackable showcase that drives to full write-ups.

**Structure:** Reduced-height **infinite-scroll lane** of preview cards. Each card shows a strong visual + title. On hover: **scroll pauses**, card **grows** slightly, and a short **description paragraph** fades in. Clicking the card opens the relevant anchor on the Projects page.

**Interaction & Motion**

- Auto-marquee (infinite loop); `animation-play-state: paused` on hover.
- Card hover: scale ~1.03, elevate shadow, reveal description (mask → gradient overlay).
- Entire card is a link to `/projects#<slug>` (examples below).

**Cards (6)**

1. **Pathology PDF → Structured Data**
    
    *Visual:* PDF pages morphing into tidy tables/plots.
    
    *Hover description:* AI-assisted pipeline that converts oncology PDFs into validated JSON and instant analytics. Initially constrained to **RTX 2070S** for privacy; later accelerated on on-prem **A100**. Hours of manual review collapse to minutes.
    
    *Link:* `/projects#pathology-pipeline`
    
2. **InclusAI — Accessibility & Simplification**
    
    *Visual:* Before/after text clarity with a toggle chip.
    
    *Hover description:* Script-injected layer that simplifies language and adds assistive controls for public sites; built to improve comprehension and task completion.
    
    *Link:* `/projects#inclusai`
    
3. **Cointribute — Programmable Donations**
    
    *Visual:* Wallet → escrow timeline → milestone checkmarks.
    
    *Hover description:* Fully self-custodial crypto donations with traceability and optional donor voting on milestones—trust you can audit.
    
    *Link:* `/projects#cointribute`
    
4. **Web3 Studio — C# SDK for EVM**
    
    *Visual:* Typed C# code snippet alongside chain icons.
    
    *Hover description:* Open-source toolkit for off-chain EVM workflows (signing, events, calls). Strongly-typed primitives, pragmatic APIs, NuGet-ready.
    
    *Link:* `/projects#web3-studio`
    
5. **RPC Studio — Multi-Chain Node & RPC Platform**
    
    *Visual:* Network map of chains/regions with health badges.
    
    *Hover description:* Deployment and lifecycle management at scale—**12k+** VM instances across **26** networks, with automation, monitoring, and security hardening baked in.
    
    *Link:* `/projects#rpc-studio`
    
6. **Bottom Nav Layout — Flutter Library**
    
    *Visual:* Mobile UI with animated bottom navigation patterns.
    
    *Hover description:* Eliminates boilerplate for complex nav (state preservation, lazy loading, back-stack). Reached **~82%** popularity on pub.dev.
    
    *Link:* `/projects#bottom-nav-layout`