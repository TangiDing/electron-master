const info = document.querySelector("#info")
info.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

async function sendMessage() {
  const res = await versions.ping();
  console.log('res', res)
}

sendMessage();