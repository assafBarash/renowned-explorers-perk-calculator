import { FC, useEffect, useState } from 'react';

export type CheckboxFiltersProps<T extends {}> = {
  onChange: (items: keyof T[]) => void;
  options: T;
};

export const CheckboxFilters = <T extends {}>({
  onChange,
  options,
}: CheckboxFiltersProps<T>) => {
  type OptionValue = keyof T;

  const [items, setItems] = useState<OptionValue[]>([]);

  useEffect(() => {
    onChange(items as unknown as keyof T[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  const handleChange = (value: OptionValue) => (active: boolean) => {
    setItems((prevItems) =>
      active
        ? [...prevItems, value]
        : prevItems.filter((item) => item !== value)
    );
  };

  const ItemFilter: FC<{
    name: OptionValue;
    onChange: (active: boolean) => void;
    active: boolean;
  }> = ({ name, onChange, active }) => {
    const nameStr = name.toString();
    return (
      <div key={nameStr}>
        <label>{nameStr}</label>
        <input
          id={nameStr}
          type='checkbox'
          onChange={(e) => onChange(e.target.checked)}
          checked={active}
        />
      </div>
    );
  };

  return (
    <div>
      {Object.keys(options)
        .filter((item) => !Number(item) && item !== '0')
        .map((item) => item as OptionValue)
        .map((item) => (
          <ItemFilter
            name={item}
            active={items.includes(item)}
            onChange={handleChange(item)}
          />
        ))}
    </div>
  );
};
