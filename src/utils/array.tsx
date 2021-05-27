export function swap<A>(collection: A[], indexA: number, indexB: number): A[] {
  const minIndex = Math.min(indexA, indexB, collection.length)
  const maxIndex = Math.max(indexA, indexB, 0)

  return [
    ...collection.slice(0, minIndex),
    collection[maxIndex],
    ...collection.slice(minIndex + 1, maxIndex),
    collection[minIndex],
    ...collection.slice(maxIndex + 1)
  ]
}

export function replaceIn<A>(
  collection: A[],
  predicate: (value: A) => boolean,
  replacer: (value: A) => A
): A[] {
  return collection.map(v => (predicate(v) ? replacer(v) : v))
}

export function replaceInOrAppend<A>(
  collection: A[],
  predicate: (value: A) => boolean,
  replacer: (value?: A) => A
): A[] {
  let replaced = false
  const result = collection.map(v => {
    if (predicate(v)) {
      replaced = true
      return replacer(v)
    } else {
      return v
    }
  })

  if (!replaced) {
    result.push(replacer())
  }

  return result
}
