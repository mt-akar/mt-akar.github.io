## 7) Architecture Sketchpad (Interactive)

**Goal:** Let visitors play with simplified patterns and infer depth.

**Structure:** A mini **draw.io‑style** canvas seeded with a tiny diagram (3–4 boxes). The canvas supports exactly these actions: *add box, edit text in box, move box, delete box, create directed arrow between two boxes, delete arrow*.

**Behavior:** On load, randomly pick one of the following sector‑accepted patterns: *event sourcing*, *CQRS*, *saga orchestration*, *circuit breaker*, *fan‑out/fan‑in*. None are from past proprietary work.

**Motion:** Lines draw with a slight ease; nodes magnetically snap to a grid.