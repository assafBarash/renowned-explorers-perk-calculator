import { FC, useEffect, useState } from 'react';
import './checkboxFilters.css';

export type CheckboxFiltersProps<T extends {}> = {
  options: any;
  defaults?: T[];
  onChange: (items: T[]) => void;
};

export const CheckboxFilters = <T extends {}>({
  onChange,
  options,
  defaults = [],
}: CheckboxFiltersProps<T>) => {
  const [items, setItems] = useState<T[]>(defaults);

  useEffect(() => {
    onChange(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  const handleChange = (value: T) => (active: boolean) => {
    setItems((prevItems) =>
      active
        ? [...prevItems, value]
        : prevItems.filter((item) => item !== value)
    );
  };

  const ItemFilter: FC<{
    name: keyof T;
    onChange: (active: boolean) => void;
    active: boolean;
  }> = ({ name, onChange, active }) => {
    const nameStr = name.toString();
    return (
      <div className={'item-container'} key={nameStr}>
        <input
          id={nameStr}
          type='checkbox'
          onChange={(e) => onChange(e.target.checked)}
          checked={active}
        />
        <label>{nameStr}</label>
      </div>
    );
  };

  return (
    <div className={'checkbox-list'}>
      {Object.entries(options)
        .filter(([itemName]) => !Number(itemName) && itemName !== '0')
        .map(([itemName, itemValue], idx) => (
          <ItemFilter
            key={`${itemName as string}-${idx}`}
            name={itemName as keyof T}
            active={items.includes(itemValue as T)}
            onChange={handleChange(itemValue as T)}
          />
        ))}
    </div>
  );
};
