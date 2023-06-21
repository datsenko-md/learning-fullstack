const getAdjecencyList = (coll) => {
  const iter = (tree, acc, parent = null) => {
    const [node, branches = []] = tree;
    const children = [];
    acc[node] = [parent, children];
    branches.forEach((branch) => children.push(iter(branch, acc, node)));
    return node;
  };

  const result = {};
  iter(coll, result);
  return result;
};

const getTree = (adjecencyList) => {
  const getRoot = (list) => Object.keys(list).reduce((acc, key) => {
    const [parent] = list[key];
    return parent === null ? key : acc;
  }, '');
  const root = getRoot(adjecencyList);
  const iter = (list, node) => {
    const [, children] = list[node];
    return children.length > 0
      ? [node, children.map((child) => iter(list, child))] : [node];
  };
  return iter(adjecencyList, root);
};

const without = (coll, value) => coll.filter((item) => item !== value);

const setNewRoot = (list, node, newParent = null) => {
  const [oldParent, oldChildren] = list[node];
  const newChildren = without(oldChildren.concat(oldParent ?? []), newParent);
  const updatedList = { ...list, [node]: [newParent, newChildren] };
  return oldParent === null ? updatedList : setNewRoot(updatedList, oldParent, node);
};

const transform = (tree, newRoot) => {
  const adjecencyList = getAdjecencyList(tree);
  const transformedList = setNewRoot(adjecencyList, newRoot);
  return getTree(transformedList);
};

export default transform;
export { getAdjecencyList, getTree, setNewRoot };
