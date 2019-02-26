const post = () => {
  postMessage("I'm post the info:" + "hello world")
}

onmessage = (e) => {
  const info  = e.data;
  postMessage("I'm get the info:" + info)
}

post();