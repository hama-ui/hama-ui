import { setupCounter } from './counter.ts'

import viteLogo from '/vite.svg'

const html = String.raw

document.querySelector<HTMLDivElement>('#app')!.innerHTML = html`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://github.com/hama-ui/hama-ui" target="_blank">
      <img src="https://github.com/hama-ui.png" class="logo vanilla" alt="Hama UI logo" />
    </a>
    <h1>Vite + Hama UI</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and Hama UI logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
