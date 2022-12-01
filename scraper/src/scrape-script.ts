export const getPerksJson = () => {
  const perkTrees = Array.from(document.querySelectorAll('h4')).map(
    (e) => e.innerText
  );

  const props = Array.from(
    document.querySelector('table').querySelector('tr').querySelectorAll('th')
  )
    .map((e) => e.innerText)
    .map((prop) =>
      prop
        .split(' ')
        .map((v, idx) => (idx === 0 ? v.toLowerCase() : v))
        .filter((v) => !v.includes('&'))
        .join('')
    );

  const getPerkTreeTable = (perkTreeIdx: number) =>
    Array.from(document.querySelectorAll('table')).find(
      (_, index) => index === perkTreeIdx
    );

  const getPerksFromTreeTable = (perkTreeTable: HTMLTableElement) =>
    Array.from(perkTreeTable.querySelectorAll('tr')).filter((_, idx) => idx);

  const parsePerk = (props: string[]) => (item: HTMLTableRowElement) =>
    Array.from(item.children)
      .map((child) => (child as HTMLElement).innerText)
      .reduce(
        (acc, child, idx) => ({
          ...acc,
          [props[idx]]: props[idx] === 'perk' ? child : child.split('\n\n'),
        }),
        {}
      );

  return JSON.stringify(
    perkTrees.reduce(
      (acc, perkTree, idx) => ({
        ...acc,
        [perkTree]: getPerksFromTreeTable(getPerkTreeTable(idx)).map(
          parsePerk(props)
        ),
      }),
      {}
    ),
    null,
    '\t'
  );
};
