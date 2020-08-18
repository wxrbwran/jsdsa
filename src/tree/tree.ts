const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: []
        },
        {
          val: "e",
          children: []
        }
      ]
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: []
        },
        {
          val: "g",
          children: []
        }
      ]
    }
  ]
}

const dfs = (node) => {
  console.log("dfs   -    ",node.val);
  node.children.forEach(dfs);
}

const bfs = (node) => {
  const q = [node];
  while(q.length > 0) {
    const cur = q.shift();
    console.log("bfs   -    ",cur.val);
    cur.children.forEach(child => {
      q.push(child);
    })
  }
}
dfs(tree);

bfs(tree);
