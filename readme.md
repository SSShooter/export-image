**This project has been moved to https://github.com/mind-elixir/plugins/tree/main/packages/export-mindmap. This repository will no longer be maintained.**

---

# @mind-elixir/export-image

**Deprecated: Only work for Mind Elixir 1.x, use `instance.exportPng()` in 3.2.2+**

## Install

```
npm i @mind-elixir/export-image canvg
```

## Usage


```javascript
import exportImage from '@mind-elixir/export-image'

const mind = new MindElixir(options)
mind.install(exportImage)
const data = MindElixir.new('new topic')
mind.init(example)
mind.exportPng('file_name.png')
mind.exportSvg ('file_name.svg')
```

## Thanks

[canvg](https://github.com/canvg/canvg)
