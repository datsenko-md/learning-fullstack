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

const without = (coll, value) => coll.filter((item) => item !== value);

const setNewRoot = (list, node, newParent = null) => {
  if (!Object.hasOwn(list, node)) {
    return list;
  }
  const [oldParent, oldChildren] = list[node];
  const newChildren = without(oldChildren.concat(oldParent ?? []), newParent);
  const updatedList = { ...list, [node]: [newParent, newChildren] };
  return oldParent === null ? updatedList : setNewRoot(updatedList, oldParent, node);
};

const getRoot = (list) => Object.keys(list).reduce((acc, key) => {
  const [parent] = list[key];
  return parent === null ? key : acc;
}, '');

const getTree = (adjecencyList) => {
  const root = getRoot(adjecencyList);
  const iter = (list, node) => {
    const [, children] = list[node];
    return children.length > 0
      ? [node, children.map((child) => iter(list, child))] : [node];
  };
  return iter(adjecencyList, root);
};

const union = (coll1, coll2) => coll2
  .reduce((acc, item) => (acc.includes(item) ? acc : [...acc, item]), [...coll1]);

const addBranches = (branch1, branch2) => Object.keys(branch2).reduce((acc, key) => {
  const [oldParent, oldChildren] = acc[key] ?? [null, []];
  const [parentToAdd, childrenToAdd] = branch2[key];
  const newParent = oldParent ?? parentToAdd;
  const newChildren = union(oldChildren, childrenToAdd);
  acc[key] = [newParent, newChildren];
  return acc;
}, { ...branch1 });

const combine = (...branches) => {
  const adjecencyLists = branches.map((branch) => getAdjecencyList(branch));
  const [head, ...rest] = adjecencyLists;
  const root = getRoot(head);
  const normalized = rest.map((list) => setNewRoot(list, root));
  const combined = normalized.reduce((acc, branch) => addBranches(acc, branch), { ...head });
  return getTree(combined);
};

export default combine;
